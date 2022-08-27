import { v4 as uuidv4 } from 'uuid';
import { questions } from '../db/db.js';
import Question from '../model/questionModel';

class QuestionsController {
  static async getAllQuestions(req, res) {
    try {
      const qtns = await Question.find();
      res.status(200).json(qtns);
    } catch (e) {
      console.log(e.message);
    }
  }

  static async getAQuestion(req, res) {
    try {
      // get id param from the path
      const { id } = req.params;
      // check if the question exists in the database
      const qtn = await Question.findById(id).exec();
      if (qtn === null) {
        res.status(404).json({ message: 'Question not found' });
      } else {
        res.status(200).json(qtn);
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  static async addAQuestion(req, res) {
    try {
      const { title, description } = req.body;
      req.body.user = req.user.id;
      const qtn = {
        title,
        description,
      };
      await Question.create(req.body);
      return res.status(201).json(qtn);
    } catch (e) {
      return res.status(400).json({ message: e });
    }
  }

  static async deleteAQuestion(req, res) {
    try {
      // get id param from the path
      const { id } = req.params;
      // check if the question exists in the database
      const question = await Question.find({ _id: id });
      if (!question) {
        res.status(404).json({ message: 'Question was not found' });
      } else {
        await Question.remove(question);
        res.status(200).json({ message: `Question ${id} has been deleted` });
      }
    } catch (e) {
      console.log(e.message);
    }
  }
}
export default QuestionsController;
