import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    uploadPhoto(fileName), // Promise for uploading photo
    signUpUser(firstName, lastName), // Promise for signing up user
  ])
    .then((results) => {
    // Create an array to store the status and value/error of each settled Promise
      const resultArray = results.map((result) => {
        if (result.status === 'fulfilled') {
        // If the Promise was fulfilled (resolved), return an object with status and value
          return {
            status: 'fulfilled',
            value: result.value, // value returned by the resolved Promise
          };
        }
        // If the Promise was rejected, return an object with status and error
        return {
          status: 'rejected',
          error: result.reason, // error returned by the rejected Promise
        };
      });

      // Return the array containing status and value/error of each settled Promise
      return resultArray;
    });
}
