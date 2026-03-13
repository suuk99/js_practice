// // map
// const numbers = [1, 2, 3];
// const result = numbers.map(x => x * 2);
// console.log(result);

// // filter
// const nums = [1,2,3,4];
// const even = nums.filter(n => n % 2 === 0);
// console.log(even);

// // find
// const users = [
//     { id: 1, name: "tom" },
//     { id: 2, name: "jerry" }
// ];
// const user = users.find(u => u.id === 2);
// console.log(user);


// // 활용 문제
// const users2 = [
//     { id: 1, name: "성욱", age: 27 },
//     { id: 2, name: "민수", age: 17 },
//     { id: 3, name: "지영", age: 30 },
// ];

// // 나이 20 이상 출력
// const user20 = users2.filter(u => u.age >= 20);
// console.log(user20);

// // 이름만 출력
// const name = users2.map(u => u.name);
// console.log(name);

// // id 2인 사람 출력
// const id2 = users2.find(u => u.id === 2);
// console.log(id2);

// // id가 1인 사람 나이를 28로 바꾼 새로운 배열 만들기
// const updateUsers = users2.map(u => u.id === 1 
//     ? {...u, age: 28 }
//     : u
// );
// console.log(updateUsers);


// 활용 문제 2
const products = [
  { id: 1, name: "노트북", price: 1000000, stock: 3 },
  { id: 2, name: "마우스", price: 30000, stock: 0 },
  { id: 3, name: "키보드", price: 70000, stock: 5 },
];

//재고가 있는 상품만 배열로 만들어라.
const product = products.filter(p => p.stock > 0);
console.log(product);

//상품 이름만 배열로 만들어라.
const product_name = products.map(p => p.name);
console.log(product_name);

//id가 3인 상품을 찾아라.
const product_id3 = products.find(p => p.id === 3);
console.log(product_id3);

//재고가 있는 상품들의 이름만 배열로 만들어라.
const product_names = products.filter(p => p.stock > 0).map(p => p.name);
console.log(product_names);

//id가 1인 상품의 stock을 10으로 바꾼 새로운 배열을 만들어라.
const product_id1 = products.map(p => p.id === 1 
    ? {...p, stock: 10}
    : p
);
console.log(product_id1);

//모든 상품의 가격을 10% 할인한 새로운 배열을 만들어라.
const product_sale = products.map(p => ({...p, price: p.price*0.9}));
console.log(product_sale);

//총 재고 수량을 구해라.
const stock_total = products.reduce((sum, p) => sum + p.stock, 0);
console.log(stock_total);