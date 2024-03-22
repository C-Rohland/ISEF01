import { Router } from "express";
import * as controller from '../controllers/controller.js';

const router = Router();

/** Questions Routes API */

router.route('/questions')
        .get(controller.getQuestions) /** GET Request */
        .post(controller.insertQuestions) /** POST Request */
        .delete(controller.dropQuestions) /** DELETE Request */

        router.route('/subjects')
        .get(controller.getSubjects) /** GET Request */
        .post(controller.insertSubjects) /** POST Request */
        .delete(controller.dropSubjects) /** DELETE all Request */

router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

router.route('/register')
        .post(controller.registerNewUser)
        .get(controller.getUser)
 
router.route('/login')
       .post(controller.loginUser)
       .get(controller.getUser)

export default router;