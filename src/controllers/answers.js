import { answers } from '../db/db';

class answersController {
  static async addAnswers(req, res) {
    try {
      return res.status(200).json(answers);
    } catch (e) {
      console.log(e.message);
    }
  }
}

export default answersController;
