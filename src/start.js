import app from './index.js';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Port is running on ${PORT} go and catch it`);
});
