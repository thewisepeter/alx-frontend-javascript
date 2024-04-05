## 0x01.ES6 Promises

### Promises: How, Why, and What

Promises in JavaScript provide a way to manage asynchronous operations. They represent a value that may be available now, in the future, or never. Promises are commonly used when dealing with tasks like fetching data from an API, reading files asynchronously, or executing other time-consuming operations.

**How Promises Work:**
- Promises are created using the `new Promise()` constructor.
- The constructor function takes a callback with `resolve` and `reject` parameters.
- Inside the callback, asynchronous tasks are performed, and when they complete successfully, `resolve` is called with a result.
- If an error occurs during the task, `reject` is called with an error.

**Why Use Promises:**
- Promises simplify asynchronous code and make it easier to handle success or failure scenarios.
- They avoid "callback hell" by allowing chaining of asynchronous operations.
- Promises provide a standardized way to deal with asynchronous tasks.

**What Promises Represent:**
- Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

### Using `then`, `resolve`, and `catch` Methods

**`then`:**
- Used to handle the successful fulfillment of a promise.
- Takes a callback function that receives the resolved value.
  
```javascript
myPromise.then((result) => {
  console.log(result); // Handle successful result
});
```

**`resolve`:**
- Used inside a promise executor function to fulfill the promise with a value.
  
```javascript
const myPromise = new Promise((resolve, reject) => {
  resolve("foo"); // Fulfill promise with value "foo"
});
```

**`catch`:**
- Used to handle errors (rejections) of a promise.
- Takes a callback function that receives the error reason.

```javascript
myPromise.catch((error) => {
  console.error(error); // Handle error
});
```

### Using Every Method of the Promise Object

**`Promise.all`:**
- Combines multiple promises into a single promise.
- Resolves when all promises in the iterable argument have resolved, or rejects if any promise rejects.

```javascript
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);

Promise.all([promise1, promise2])
  .then((results) => {
    console.log(results); // [1, 2]
  })
  .catch((error) => {
    console.error(error); // Handle error
  });
```

**`Promise.race`:**
- Returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.

```javascript
const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'one'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'two'));

Promise.race([promise1, promise2])
  .then((value) => {
    console.log(value); // 'one' (because promise1 resolves first)
  })
  .catch((error) => {
    console.error(error); // Handle error
  });
```

### Throw / Try

**`throw`:**
- Used to throw an exception explicitly.

```javascript
throw new Error('Something went wrong');
```

**`try`/`catch`:**
- Used to catch exceptions and handle errors gracefully.

```javascript
try {
  // Code that may throw an error
  throw new Error('Something went wrong');
} catch (error) {
  console.error(error); // Handle error
}
```

### The `await` Operator

The `await` operator is used within `async` functions to wait for a Promise to settle (resolve or reject). It pauses the execution of the async function until the Promise is resolved and then returns the resolved value.

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```

### Using an Async Function

**Async Function:**
- An `async` function is a function that returns a Promise.
- Inside an `async` function, you can use `await` to pause execution until a Promise settles.

```javascript
async function myAsyncFunction() {
  try {
    const result = await someAsyncTask();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

myAsyncFunction();
```

**Note:** Remember to handle errors appropriately within `async` functions using `try`/`catch`.

---

This README provides a comprehensive overview of ES6 Promises, including how to use them for asynchronous operations, chaining promises with `then`, handling errors with `catch`, leveraging Promise methods like `Promise.all` and `Promise.race`, working with `throw`/`try`/`catch`, using the `await` operator within `async` functions, and creating and using `async` functions. Promises are a powerful tool for managing asynchronous JavaScript code effectively.