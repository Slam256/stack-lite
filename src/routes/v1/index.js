import { Router } from 'express';

import questionsRoute from './questions.route.js';

const routes = Router();

routes.use('/questions', questionsRoute);

export default routes;
