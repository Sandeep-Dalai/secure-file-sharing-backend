// src/services/userService.ts
import { User } from '../models/user';

const users: User[] = [];

export const createUser = (username: string, publicKey: string, privateKey: string) => {
  users.push({ username, publicKey, privateKey });
};
