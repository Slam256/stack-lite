import { answers, questions } from "../db/db.js";
import { v4 as uuidv4 } from "uuid";

class AnswersController {
  static async addAnAnswer(req, res) {
    try {
      const { ans } = req.body;
      const qtnId = parseInt(req.params.id, 10); //destructing kept returning undefined id.
      //check if question is there in the qtn db
      const qtn = questions.find(({ id }) => qtnId === id);
      //logic
      if (!qtn) {
        res.status(404).json({ message: "Question not found" });
      } else {
        const answer = {
          id: uuidv4(),
          qtnId,
          ans,
        };
        answers.push(answer);
        console.log(answer);
        res.status(201).json({message: 'Answer added'}); //how to redirect to the page with all the answers.
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  static async getAllAnswers(req, res) {
    try {
      return res.status(200).json(answers);
    } catch (e) {
      console.log(e.message);
    }
  }

  static async getAnswers(req, res) {
    try {
      //get id param from the path
      const { id } = req.params; //This is the qtn id
      //check if the question answer exists in the database
      const answer = answers.filter(
        (answer) => answer.qtnId === parseInt(id, 10)
      );
      const question = questions.find(
        (question) => question.id === parseInt(id, 10)
      );
      //first we check if the question exists in the db if it doesnt we end there. If it exists we chack if the answer exists and return ans if it exists.
      if (!question) {
        res.status(404).json({ message: "Question was not found" });
      } else if (!answer) {
        res
          .status(404)
          .json({ message: "We don't have and answer to this question" });
      } else {
        res.status(200).json(answer);
      }
    } catch (e) {
      console.log(e.message);
    }
  }
}
export default AnswersController;
