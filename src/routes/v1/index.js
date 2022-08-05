import { Router } from 'express';

import questionsRoute from './questions.route.js';
import answersRoute from './answers.route.js';
import usersRoute from './user.route.js';

const routes = Router();

routes.use('/questions', questionsRoute);
routes.use('/answers', answersRoute);
routes.use('/auth', usersRoute);

export default routes;
