export const mockUsers = [
  {
    id: 1,
    name: "Maria Lopez",
    email: "maria@example.com",
    password: "123456",
    bio: "Computer Science student who enjoys tutoring and design.",
    location: "Utah",
    skills: ["Java", "React", "UI Design"],
    services: ["Tutoring", "Frontend Help"]
  },
  {
    id: 2,
    name: "David Kim",
    email: "david@example.com",
    password: "123456",
    bio: "Backend-focused developer.",
    location: "Utah",
    skills: ["Node.js", "SQL", "API Design"],
    services: ["Backend Support", "Database Help"]
  }
];

export const mockRequests = [
  {
    id: 101,
    title: "Need help with React dashboard",
    description: "Looking for help building a dashboard page.",
    category: "Web Development",
    status: "open",
    createdBy: 1,
    date: "2025-03-01"
  },
  {
    id: 102,
    title: "Java OOP tutoring",
    description: "Need help understanding inheritance and polymorphism.",
    category: "Tutoring",
    status: "accepted",
    createdBy: 2,
    date: "2025-03-02"
  }
];

export const mockInbox = {
  received: [
    {
      id: 201,
      from: "David Kim",
      message: "I can help with your React dashboard request.",
      requestTitle: "Need help with React dashboard",
      status: "new"
    }
  ],
  outgoing: [
    {
      id: 202,
      to: "Maria Lopez",
      message: "I’m interested in your tutoring request.",
      requestTitle: "Java OOP tutoring",
      status: "pending"
    }
  ],
  accepted: [
    {
      id: 203,
      withUser: "David Kim",
      requestTitle: "React dashboard",
      status: "accepted"
    }
  ]
};