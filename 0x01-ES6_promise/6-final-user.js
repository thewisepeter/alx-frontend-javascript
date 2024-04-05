import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    uploadPhoto(fileName), // Promise for uploading photo
    signUpUser(firstName, lastName), // Promise for signing up user
  ])
    .then((results) =>
      // Process the result array from Promise.allSettled using .then() handler
      results.map((result) => ({
        status: result.status, // Extract status (either 'fulfilled' or 'rejected')
        value: result.status === 'fulfilled' ? result.value : String(result.reason), // Determine value based on status
      })));
}
