import { Router } from 'express';
import AnswersController from '../../controllers/answers.js';

const router = Router();

router.post('/:id', AnswersController.addAnAnswer); // add answer to question
router.get('/:id', AnswersController.getAnswers); // get all answers for question id
router.get('/', AnswersController.getAllAnswers); // get all answers for all questions


export default router;
