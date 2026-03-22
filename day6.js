// // //Promise
// // const p = new Promise (resolve => {
// //     setTimeout(() => {
// //         resolve ("완료");
// //     }, 1000);
// // });

// // p.then(result => {
// //     console.log(result);
// // });

// // //await
// // async function run() {
// //     const result = await p;
// //     console.log(result);
// // }

// // run();

// // const p = new Promise(resolve => {
// //     console.log("1");
// //     resolve("2");
// // });

// // p.then(result => {
// //     console.log(result);
// // });

// // console.log("3");

// // function getData() {
// //     return new Promise(resolve => {
// //         setTimeout(() => {
// //             resolve("데이터");
// //         }, 1000);
// //     });
// // }

// // async function run() {
// //   const data = await getData();
// //   console.log(data);
// // }

// // run();

// function step1() {
//     return Promise.resolve("1");
// }

// function step2() {
//     return Promise.resolve("2");
// }

// function step3() {
//     return Promise.resolve("3");
// }

// async function run() {
//     const r1 = await step1();
//     const r2 = await step2();
//     const r3 = await step3();

//     console.log(r1);
//     console.log(r2);
//     console.log(r3);
// }

// run();

// const p = new Promise((resolve, reject) => {
//     resolve("성공");
//     reject("실패");
// });
// //여기서는 reject나 resolve 둘중 하나만 있어도 되는지?
// //또 resolve랑 reject 명칭은 내 임의로 변경할 수 있는지?


// const s = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("완료");
//     }, 1000);
// });

// s.then(result => {
//     console.log(result);
// });
// //여기서는 result는 자동으로 resolve를 가져오는 것인지?
// //또 result또한 내 임의로 명칭을 변경할 수 있는지?

// //then방식
// getData().then (result => {
//     console.log(result);
// });
// //await방식
// async function run() {
//     const result = await getData();
//     console.log(result);
// }
// //then방식과 await방식은 둘 다 같은 결과를 나타내며 실무에서는 await을 선호하고 사용하는지?

// async function wall() {
//     const res = await fetch("/api");
//     const data = await res.json();
//     console.log(data);
// }
// //여기서 res.json()은 호출한 api를 json 즉 java형태로 변환하는 것인지?

function step1() {
    return Promise.resolve("1");
}

function step2() {
    return Promise.resolve("2");
}

function step3() {
    return Promise.resolve("3");
}

async function run() {
    const r1 = await step1();
    const r2 = await step2();
    const r3 = await step3();

    console.log(r1);
    console.log(r2);
    console.log(r3);
}