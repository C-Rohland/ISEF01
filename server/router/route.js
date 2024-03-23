import { Router } from "express";
const router = Router();

/** import controllers */
import * as controller from '../controllers/controller.js';

/** Questions Routes API */

router.route('/questions')
        .get(controller.getQuestions) /** GET Request */
        .post(controller.insertQuestions) /** POST Request */
        .delete(controller.dropQuestions) /** DELETE Request */

router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

router.route('/leaderboard')
        .get(controller.getLeaderboard)

// router.post('/updatePoints', controller.updateUserPoints);


router.route('/register')
        .post(controller.registerNewUser)
        .get(controller.getUser)
 
router.route('/')
       .post(controller.loginUser)
       .get(controller.getUser)

export default router;