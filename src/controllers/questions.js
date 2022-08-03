import { v4 as uuidv4 } from 'uuid';
import { questions } from '../db/db.js';

class QuestionsController {
  static async getAllQuestions(req, res) {
    try {
      res.status(200).json(questions);
    } catch (e) {
      console.log(e.message);
    }
  }

  static async getAQuestion(req, res) {
    try {
      // get id param from the path
      const { id } = req.params;
      // check if the question exists in the database
      const question = questions.find((qtn) => qtn.id === parseInt(id, 10));
      if (!question) {
        res.status(404).json({ message: 'Question was not found' });
      }
      res.status(200).json(question);
    } catch (e) {
      console.log(e.message);
    }
  }

  static async addAQuestion(req, res) {
    try {
      const { title, description } = req.body;
      const question = {
        id: uuidv4(),
        title,
        description,
      };
      questions.push(question);
      return res.status(201).json(question);
    } catch (e) {
      return res.status(400).json({ message: e });
    }
  }
}
export default QuestionsController;
