import fs from 'fs';

// Read the JSON file
const data = fs.readFileSync('currentjobs.json', 'utf8');

// Parse the JSON data
const jobs = JSON.parse(data);

// Create a new array of jobs with the properties in the desired order
const newJobs = jobs.map(job => ({
    jobname: job.jobname,
    joburl: job.joburl,
    jobcategory: job.jobcategory,
    jobdescription: job.jobdescription,
    joblocation: job.joblocation,
    companyname: job.companyname,
    companyurl: job.companyurl,
    companycategory: job.companycategory
}));

// Convert the new array back to JSON
const newJobsJson = JSON.stringify(newJobs, null, 2);

// Write the new JSON data back to the file
fs.writeFileSync('currentjobs.json', newJobsJson);