import { questions } from '../db/db.js';


class QuestionsController {
  static async getallQuestions(req, res) {
    try {
        return res.status(200).json(questions);
    } catch (e) {
      console.log(e.message);
    }
  }

  static async getQuestion(req, res){
    try {
      //get id param from the path
      const { id } = req.params;
      //check if the question exists in the database
      const question = questions.find((question) => question.id === parseInt(id,10));
      if(!question) res.status(404).json({message: "Question was not found"})
      res.status(200).json(question)
    } catch (e) {
      console.log(e.message)
    }

  }
}
export default QuestionsController;

