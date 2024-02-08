// setTimeout(() => {
//   console.log('setTimeout called...');
// }, 0);
// console.log('After setTimeout called1...');
// console.log('After setTimeout called.2..');
// console.log('After setTimeout called3...');
// console.log('After setTimeout called4...');
// console.log('After setTimeout called5...');
// console.log('After setTimeout called6...');
// console.log('After setTimeout called7...');
// console.log('After setTimeout called8...');
// console.log('After setTimeout called9...');
// console.log('After setTimeout called10...');
// console.log('After setTimeout called11...');
// console.log('After setTimeout called1...');
// console.log('After setTimeout called.2..');
// console.log('After setTimeout called3...');
// console.log('After setTimeout called4...');
// console.log('After setTimeout called5...');
// console.log('After setTimeout called6...');
// console.log('After setTimeout called7...');
// console.log('After setTimeout called8...');
// console.log('After setTimeout called9...');
// console.log('After setTimeout called10...');
// console.log('After setTimeout called11...');
// Eventloop js
// const fun = () => {
  
// }
// await promise();
// const fun1 = () => {
//     console.log('Inside fun1',this);
//   }
  
//   const fun = () => {
//     const a = 1;
//     console.log('Inside fun',this);
//     fun1();
//   }
  
//   setTimeout(() => {
//     console.log('setTimeout called...',this);
//   }, 0);
  
//   fun();

// function 
// const fun1 = (prop) => {
//     console.log('Inside fun1',prop.a);
//     // console.log(this);
//   }
  
//   const fun = () => {
//     const a = 1;
//     console.log('Inside fun',this);
//     fun1(this);
//   }
  
//   fun()

//practice  

// let array=[10,20];
// const obj = { a: 1, b: { c: 2 } };
// const {
//   a,
//   b: { c: d },
// } = obj;
// console.log(obj.b);
// Two variables are bound: `a` 
// const [a = 1] = []; // a is 1
// const { b = 2 } = { b: undefined }; // b is 2
// const { c = 2 } = { c: null }; // c is null
// console.log(c);
// The properties `a` and `b` are assigned to properties of `numbers`
// function resolveAfter2Seconds(x) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(x);
//       }, 2000);
//     });
//   }
  
//   // async function expression assigned to a variable
//   const add = async function (x) {
//     const a = await resolveAfter2Seconds(20);
//     const b = await resolveAfter2Seconds(30);
//     return x + a + b;
//   };
  
//   add(10).then((v) => {
//     console.log(v); // prints 60 after 4 seconds.
//   });
  
//   // async function expression used as an IIFE
//   (async function (x) {
//     const p1 = resolveAfter2Seconds(20);
//     const p2 = resolveAfter2Seconds(30);
//     return x + (await p1) + (await p2);
//   })('hello').then((v) => {
//     console.log(v); // prints 60 after 2 seconds.
//   });
  