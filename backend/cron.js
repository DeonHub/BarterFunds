import { CronJob } from 'cron';

// Define the cron job
const job = new CronJob('*/5 * * * * *', async () => {
  console.log('Running a task every 5 seconds');
  // Your task here
  try {
    // Example: Replace with your actual task
    console.log('Performing the scheduled task');
  } catch (error) {
    console.error('Error executing the task:', error);
  }
});

// Start the cron job
job.start();

console.log('Cron job started');
