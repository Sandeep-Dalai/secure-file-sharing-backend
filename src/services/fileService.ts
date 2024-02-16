// src/services/fileService.ts
import { EncryptedFile } from '../models/file';
import { createUser } from './userService';
import { encryptText } from './encryptionService';

const files: EncryptedFile[] = [];

export const createEncryptedFile = (content: string) => {
  const id = Math.random().toString(36).substr(2, 9);
  const encryptedContent = encryptText(content);
  files.push({ id, content: encryptedContent, sharedWith: [] });
  return id;
};

export const addUserToFile = (fileId: string, username: string) => {
  const file = files.find(f => f.id === fileId);
  if (file) {
    file.sharedWith.push(username);
  }
};

export const viewAllFiles = () => {
  return files;
};
