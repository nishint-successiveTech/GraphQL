export interface User {
  id: string;
  name: string;
  email: string;
}

export const users: User[] = [
  { id: "1", name: "Amit", email: "amit@example.com" },
  { id: "2", name: "Neha", email: "neha@example.com" },
];
