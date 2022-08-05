import bcrypt from 'bcrypt';
import User from '../model/userModel';

class UsersController {
  static async handleNewUser(req, res) {
    const { user, mail, pwd } = req.body;
    if (!user || !pwd || !mail) {
      res
        .status(400)
        .json({ message: 'Username, email and password are required' });
    }
    // check for duplicate email in db
    const duplicate = await User.findOne({ email: mail }).exec();
    if (duplicate) res.sendStatus(409); // conflict

    try {
      // encrypt the password
      const hashedPwd = await bcrypt.hash(pwd, 10);

      // create and store the new user
      const result = await User.create({
        name: user,
        email: mail,
        password: hashedPwd,
      });
      console.log(result);

      res.status(201).json({ success: `New user ${user} created` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async loginUser(req, res) {
    const { mail, pwd } = req.body;
    if (!mail || !pwd) {
      res.status(400).json({ message: 'Email and password are required' });
    }
    const user = await User.findOne({ email: mail }).exec();
    if (user && (await bcrypt.compare(pwd, user.password))) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400).json({ message: 'Invalid user credentials' });
    }
  }
}

export default UsersController;
