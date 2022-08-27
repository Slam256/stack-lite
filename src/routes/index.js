import { Router } from 'express';
import routes from './v1/index.js';
import authRoute from './auth.route';

const router = Router();

router.use('/api/v1', routes);
router.use('/auth', authRoute);

export default router;
