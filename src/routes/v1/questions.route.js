import { Router } from 'express';
import QuestionsController from '../../controllers/questions.js';

const router = Router();

router.get('/', QuestionsController.getAllQuestions);
router.get('/:id', QuestionsController.getAQuestion);
router.post('/', QuestionsController.addAQuestion);

export default router;
