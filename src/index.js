import express from 'express';
import cors from 'cors';
import passport from 'passport';
import morgan from 'morgan';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import router from './routes/index.js';
import connectDB from './config/db.js';

// Passport config
require('./config/passport').default(passport);

const PORT = process.env.PORT || 4000;
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Session middleware
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`);
});

export default app;
