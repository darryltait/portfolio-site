
console.log('utils.js is running!');

// named export with 'export' added inline
export const square = (x) => x*x;
export const add = (a,b) => a+b;

// const square = (x) => x*x;
// const add = (a,b) => a+b;

// const subtract = (a, b) =>  a-b;
export default (a, b) =>  a-b;


// exports - default export - named exports

// named exports
// export { square, add, subtract as default };

