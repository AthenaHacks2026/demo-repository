const USERS_KEY = "mock_users";
const REQUESTS_KEY = "mock_requests";
const INBOX_KEY = "mock_inbox";
const CURRENT_USER_KEY = "mock_current_user";

export const loadData = (key, fallback) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
};

export const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const storageKeys = {
  USERS_KEY,
  REQUESTS_KEY,
  INBOX_KEY,
  CURRENT_USER_KEY
};