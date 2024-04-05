export default function signUpUser(firstName, lastName) {
  const newUser = {};
  return new Promise((resolve, reject) => {
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    resolve(newUser);
  });
}
