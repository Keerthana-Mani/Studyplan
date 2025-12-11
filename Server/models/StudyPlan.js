import mongoose from 'mongoose';//schema for study plan in javascrip to specify the constraints 

const studyPlanSchema = new mongoose.Schema({
    planName: String,
    startDate: Date,
    endDate: Date,
    description: String,
    specialConstrains: String,
    aiSuggestions: String,
},{ timestamps: true });


export default mongoose.model('StudyPlan', studyPlanSchema);
