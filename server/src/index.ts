import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDatabase } from './config/database/database';
import route from './routes/index';
require('dotenv').config(); // Add this line to use dotenv

const app = express();
const port = process.env.PORT ?? 3000;

connectDatabase();
app.use(bodyParser.json());
app.use(cors());

// Route Init
route(app);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
