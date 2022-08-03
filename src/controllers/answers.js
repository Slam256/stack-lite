import { v4 as uuidv4 } from "uuid";
import { answers, questions } from "../db/db.js";

class AnswersController {
  static async addAnAnswer(req, res) {
    try {
      const { ans } = req.body;
      const qtnId = parseInt(req.params.id, 10); // destructing kept returning undefined id.
      // const { id } = req.params;
      // console.log(id, '----->id is here');
      // check if question is there in the qtn db
      const qtn = questions.find(({ id }) => qtnId === id);
      // logic
      if (!qtn) {
        res.status(404).json({ message: "Question not found" });
      } else {
        const answer = {
          id: uuidv4(),
          qtnId,
          ans,
        };
        answers.push(answer);

        res.status(201).json({ message: 'Answer added' });

      }
    } catch (e) {
      console.log(e.message);
    }
  }

  static async getAllAnswers(req, res) {
    try {
      res.status(200).json(answers);
    } catch (e) {
      console.log(e.message);
    }
  }

  static async getAnswers(req, res) {
    try {
      // get id param from the path
      const { id } = req.params; // This is the qtn id
      // check if the question answer exists in the database
      const answer = answers.filter((ans) => ans.qtnId === parseInt(id, 10));
      const question = questions.find((qtn) => qtn.id === parseInt(id, 10));
      // first we check if the question exists in the db if it doesnt we end there.
      if (!question) {
        res.status(404).json({ message: "Question was not found" });
        // If it exists we chack if the answer exists if it doesnt we return msg.
      } else if (!answer) {
        res
          .status(404)
          .json({ message: "We don't have an answer to this question" });
      } else {
        res.status(200).json(answer);
      }
    } catch (e) {
      console.log(e.message);
    }
  }
}
export default AnswersController;
