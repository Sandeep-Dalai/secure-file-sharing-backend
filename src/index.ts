// index.ts
import express from 'express';
import bodyParser from 'body-parser';
import { registerUser, createEncryptedFile, addUserToFile, viewAllFiles } from './src/controllers/fileController';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/register', registerUser);
app.post('/files', createEncryptedFile);
app.post('/files/:fileId/users', addUserToFile);
app.get('/files', viewAllFiles);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
