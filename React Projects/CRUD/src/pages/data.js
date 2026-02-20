const defaultUsers = [
  {
    "id": "1",
    "name": "Rizwan Ali",
    "username": "rizwan123",
    "email": "rizwanali@gmail.com",
    "age": 26,
  },
  {
    "id": "2",
    "name": "Noman",
    "username": "noman123",
    "email": "noman@gmail.com",
    "age": 28
  },
  {
    "id": "3",
    "name": "Waqar",
    "username": "waqar123",
    "email": "waqar@gmail.com",
    "age": 34
  },
  {
    "id": "4",
    "name": "Usman",
    "username": "usman123",
    "email": "usman@gmail.com",
    "age": 28
  },
  {
    "id": "5",
    "name": "Talha",
    "username": "talha123",
    "email": "talha@gmail.com",
    "age": 25
  },
  
];

// Initialize usersData from localStorage, or use default array if empty
const STORAGE_KEY = "crud_users_data";
const storedData = localStorage.getItem(STORAGE_KEY);
export let usersData = storedData ? JSON.parse(storedData) : [...defaultUsers];

// Pehli baar load hone pe default data ko localStorage me save kar dein
if (!storedData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usersData));
}

// Helper to save current state
const saveToStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usersData));
};

export const addUser = (data) => {
  const newUser = { ...data, id: Date.now().toString() };
  usersData.push(newUser);
  saveToStorage();
};

export const updateUser = (id, data) => {
  const index = usersData.findIndex(u => u.id === id);
  if (index !== -1) {
    usersData[index] = { ...usersData[index], ...data };
    saveToStorage();
  }
};

export const deleteUserById = (id) => {
  const index = usersData.findIndex(u => u.id === id);
  if (index !== -1) {
    usersData.splice(index, 1);
    saveToStorage();
  }
};
