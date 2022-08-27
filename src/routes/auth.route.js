import { Router } from 'express';
import passport from 'passport';

const router = Router();

// @desc auth with google
// @route GET/auth/google

function isLoggedIn(req, res, next) {
  // eslint-disable-next-line no-unused-expressions
  req.user ? next() : res.sendStatus(401);
}

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

// @desc Google auth callback
// @route GET/auth/google/callback

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/auth/protected',
    failureRedirect: '/auth/google/failure',
  })
);

router.get('/protected', isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

// @desc Logout User
// @route /auth/logout
router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      next(err);
    }
    res.redirect('/');
  });
  req.session.destroy();
  res.send('Goodbye!');
});

router.get('/google/failure', (req, res) => {
  res.send('Failed to authenticate..');
});

export default router;
