import express from 'express';
import router from './routes/index.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(router);

app.get('/', (req, res)=>{
  res.send('Welcome to home page')
})
app.listen(PORT, () => {
  console.log(`Port is running on ${PORT} go and catch it`);
});


