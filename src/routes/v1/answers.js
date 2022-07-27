import { Router } from 'express';
import AnswersController from '../../controllers/answers.js';

const router = Router();

router.post('/questions/:id/answers', AnswersController.addAnswers); // add answer to question
router.get('/questions/:id/answers', AnswersController.getAnswers); // get all answers for question

export default router;
