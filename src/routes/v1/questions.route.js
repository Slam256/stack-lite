import { Router } from 'express';
import QuestionsController from '../../controllers/questions.js';


const router = Router();

router.get('/', QuestionsController.getallQuestions);
router.get('/:id', QuestionsController.getQuestion);
// router.post('/', QuestionsController.addQuestion)


export default router;