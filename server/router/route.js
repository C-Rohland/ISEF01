import { Router } from "express";
import * as controller from '../controllers/controller.js';

const router = Router();

/** Questions Routes API */

router.route('/questions')
        .get(controller.getQuestions) /** GET Request */
        .post(controller.insertQuestions) /** POST Request */
        .delete(controller.dropQuestions) /** DELETE Request */

router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

router.route('/register')
        .post(controller.registerNewUser)
        .get(controller.registerNewUser)
 
router.post('/login', controller.loginUser);

export default router;