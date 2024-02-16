// src/controllers/fileController.ts
import { Request, Response } from 'express';
import { createEncryptedFile, addUserToFile, viewAllFiles } from '../services/fileService';

export const createEncryptedFileController = (req: Request, res: Response) => {
  try {
    const { content } = req.body;
    const fileId = createEncryptedFile(content);
    res.json({ message: 'File created successfully', fileId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addUserToFileController = (req: Request, res: Response) => {
  try {
    const { fileId } = req.params;
    const { username } = req.body;
    addUserToFile(fileId, username);
    res.json({ message: 'User added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const viewAllFilesController = (req: Request, res: Response) => {
  try {
    const files = viewAllFiles();
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
