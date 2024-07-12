// Pool
const Pool = [
  {
    id: "1",
    subscriptionID: "1",
    name: "Admin Pool",
    description:
      "An admin pool refers to a group or collection of administrators who manage and oversee specific responsibilities or tasks within an organization or system.",
    status: "Activated",
  },
  {
    id: "2",
    subscriptionID: "2",
    name: "IT Pool",
    description:
      "refers to a collection or group of Information Technology professionals who are available or assigned to handle IT-related tasks, projects, or support within an organization.",
    status: "Activated",
  },
  {
    id: "3",
    subscriptionID: "3",
    name: "UX Pool",
    description:
      "generally refers to a group or team of User Experience (UX) professionals who collaborate to design and enhance the usability, accessibility, and overall user satisfaction of products, services, or systems within an organization.",
    status: "Deactivated",
  },
  {
    id: "4",
    subscriptionID: "4",
    name: "Sales Pool",
    description:
      "typically refers to a designated group or team of sales professionals within an organization who are responsible for generating revenue through selling products or services to customers or clients.",
    status: "Activated",
  },
];

// Subscriptions
const Subscriptions = [
  {
    id: "1",
    provider: "Netflix",
    due: "01-02-2025",
    price: "343",
  },
  {
    id: "2",
    provider: "Amazon Prime",
    due: "01-03-2025",
    price: "567",
  },
  {
    id: "3",
    provider: "Kite",
    due: "01-05-2025",
    price: "4333",
  },
  {
    id: "4",
    provider: "Coin",
    due: "05-02-2025",
    price: "6787",
  },
  {
    id: "5",
    provider: "Adobe",
    due: "01-12-2024",
    price: "8887",
  },
];

export { Pool, Subscriptions };
