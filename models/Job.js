const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const jobSchema = new Schema({
    label: String,
});

const JobModel = mongoose.model("Job", jobSchema);

module.exports = JobModel;