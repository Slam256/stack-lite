import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import connectDB from './config/db.js';

const PORT = process.env.PORT || 4000;
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.get('/', (req, res) => {
  res.send('Welcome to home page');
});

app.listen(PORT, () => {
  console.log(`Port is running on ${PORT} go and catch it`);
});

export default app;
