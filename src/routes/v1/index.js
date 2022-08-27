import { Router } from 'express';

import questionsRoute from './questions.route.js';
import answersRoute from './answers.route.js';

const routes = Router();

routes.use('/questions', questionsRoute);
routes.use('/answers', answersRoute);

export default routes;
