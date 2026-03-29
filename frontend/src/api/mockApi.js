const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

const USERS_KEY = "mock_users";
const CURRENT_USER_KEY = "mock_current_user";
const OPEN_REQUESTS_KEY = "mock_open_requests";
const INBOX_KEY = "mock_inbox";

const defaultUsers = [
  {
    id: 1,
    name: "Kenia",
    email: "kenia@example.com",
    password: "123456",
    location: "Salt Lake City",
  },
  {
    id: 2,
    name: "Mia",
    email: "mia@example.com",
    password: "123456",
    location: "Provo",
  },
];

const defaultRequests = [
  {
    id: 101,
    userId: 1,
    name: "Kenia",
    description:
      "I learned how to crochet when I was 18 and I can draw your cat :D",
    skills: [
      { label: "Baking", className: "tag-baking" },
      { label: "Crochet", className: "tag-crochet" },
      { label: "Drawing", className: "tag-drawing" },
    ],
    requesting: "I need someone who can teach me to juggle pleaseeeee",
    offer: "I can do anything my skills say please",
    status: "open",
  },
  {
    id: 102,
    userId: 2,
    name: "Mia",
    description: "I love baking and beginner painting.",
    skills: [
      { label: "Baking", className: "tag-baking" },
      { label: "Drawing", className: "tag-drawing" },
    ],
    requesting: "I want help learning crochet.",
    offer: "I can teach baking basics.",
    status: "open",
  },
];

const defaultInbox = [];

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function initStorage() {
  if (!localStorage.getItem(USERS_KEY)) {
    write(USERS_KEY, defaultUsers);
  }
  if (!localStorage.getItem(OPEN_REQUESTS_KEY)) {
    write(OPEN_REQUESTS_KEY, defaultRequests);
  }
  if (!localStorage.getItem(INBOX_KEY)) {
    write(INBOX_KEY, defaultInbox);
  }
}

initStorage();

export async function loginUser(email, password) {
  await delay();
  const users = read(USERS_KEY, []);
  const user = users.find(
    (item) => item.email === email.trim() && item.password === password.trim()
  );

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  write(CURRENT_USER_KEY, user);
  return user;
}

export async function signupUser({ email, password, location }) {
  await delay();
  const users = read(USERS_KEY, []);

  const exists = users.some(
    (item) => item.email.toLowerCase() === email.trim().toLowerCase()
  );

  if (exists) {
    throw new Error("An account with this email already exists.");
  }

  const newUser = {
    id: Date.now(),
    name: email.trim().split("@")[0],
    email: email.trim(),
    password: password.trim(),
    location: location.trim(),
  };

  const updatedUsers = [...users, newUser];
  write(USERS_KEY, updatedUsers);
  write(CURRENT_USER_KEY, newUser);

  return newUser;
}

export async function logoutUser() {
  await delay(200);
  localStorage.removeItem(CURRENT_USER_KEY);
  return true;
}

export async function getCurrentUser() {
  await delay(200);
  return read(CURRENT_USER_KEY, null);
}

export async function updateCurrentUserProfile(updatedFields) {
  await delay();
  const currentUser = read(CURRENT_USER_KEY, null);
  if (!currentUser) {
    throw new Error("No logged in user.");
  }

  const users = read(USERS_KEY, []);
  const updatedUsers = users.map((user) =>
    user.id === currentUser.id ? { ...user, ...updatedFields } : user
  );

  write(USERS_KEY, updatedUsers);

  const updatedCurrentUser = updatedUsers.find(
    (user) => user.id === currentUser.id
  );

  write(CURRENT_USER_KEY, updatedCurrentUser);
  return updatedCurrentUser;
}

export async function getOpenRequests() {
  await delay();
  const requests = read(OPEN_REQUESTS_KEY, []);
  return requests.filter((request) => request.status === "open");
}

export async function getApprovedRequests() {
  await delay();
  const requests = read(OPEN_REQUESTS_KEY, []);
  return requests.filter((request) => request.status === "accepted");
}

export async function createRequest(newRequest) {
  await delay();
  const requests = read(OPEN_REQUESTS_KEY, []);
  const created = {
    ...newRequest,
    status: "open",
  };
  write(OPEN_REQUESTS_KEY, [created, ...requests]);
  return created;
}

export async function acceptRequest(requestId) {
  await delay();

  const currentUser = read(CURRENT_USER_KEY, null);
  if (!currentUser) {
    throw new Error("Please log in first.");
  }

  const requests = read(OPEN_REQUESTS_KEY, []);
  const inbox = read(INBOX_KEY, []);

  const target = requests.find((request) => request.id === requestId);
  if (!target) {
    throw new Error("Request not found.");
  }

  if (target.userId === currentUser.id) {
    throw new Error("You cannot accept your own request.");
  }

  const updatedRequests = requests.map((request) =>
    request.id === requestId
      ? {
          ...request,
          status: "accepted",
          acceptedBy: currentUser.id,
          acceptedByName: currentUser.name,
        }
      : request
  );

  write(OPEN_REQUESTS_KEY, updatedRequests);

  const newInboxItems = [
    {
      id: Date.now(),
      type: "received",
      userId: target.userId,
      otherUserName: currentUser.name,
      requestTitle: target.requesting,
      message: `${currentUser.name} accepted your request.`,
    },
    {
      id: Date.now() + 1,
      type: "outgoing",
      userId: currentUser.id,
      otherUserName: target.name,
      requestTitle: target.requesting,
      message: `You accepted ${target.name}'s request.`,
    },
    {
      id: Date.now() + 2,
      type: "accepted",
      userId: currentUser.id,
      otherUserName: target.name,
      requestTitle: target.requesting,
      message: `Match created with ${target.name}.`,
    },
    {
      id: Date.now() + 3,
      type: "accepted",
      userId: target.userId,
      otherUserName: currentUser.name,
      requestTitle: target.requesting,
      message: `Match created with ${currentUser.name}.`,
    },
  ];

  write(INBOX_KEY, [...newInboxItems, ...inbox]);

  return true;
}

export async function getInboxByType(type) {
  await delay();
  const currentUser = read(CURRENT_USER_KEY, null);
  if (!currentUser) return [];

  const inbox = read(INBOX_KEY, []);
  return inbox.filter((item) => item.userId === currentUser.id && item.type === type);
}