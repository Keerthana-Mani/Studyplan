//used to handle data and crud operation will done here the api request will get and check for CRUD and go to controller and runs the service for our app
import express from 'express';
import { createStudyPlan,getStudyPlans,editStudyPlan,deleteStudyPlan} from '../controllers/studyPlanController.js'


const router = express.Router();


router.post('/studyplan', createStudyPlan);
router.get('/studyplan',getStudyPlans);
router.put('/studyplan/:id',editStudyPlan);
router.delete('/studyplan/:id',deleteStudyPlan);



export default router;