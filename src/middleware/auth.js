module.exports = {
  ensureAuth: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(400).json({ message: 'Not authorised' });
  },
  ensureGuest: (req, res, next) => {
    if (req.isAuthenticated()) {
      res.json({ message: 'You are already signed in' });
    } else {
      return next();
    }
  },
};
