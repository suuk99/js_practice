// const users = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 22 },
//   { id: 4, name: "David", age: 28 }
// ];

// const names = users.map( u => u.name );
// console.log(names); // ["Alice", "Bob", "Charlie", "David"]

// const adults = users.filter( u => u.age >= 25 );
// console.log(adults); 
// // [{id:1, name:"Alice", age:25}, {id:2, name:"Bob", age:30}, {id:4, name:"David", age:28}]

// const totalAge = users.reduce( (sum, u) => sum + u.age , 0 );
// console.log(totalAge); // 105

// async function loadUsers () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();

//   //eamil만 배열로 만들기
//   const emails = users.map(u => u.email);
//   //id가 짝수인 사람 이름만 출력
//   const evenId = users.filter(u => u.id % 2 === 0).map(u => u.username);
//   //username만 배열로 만들기
//   const usernames = users.map(u => u.username);

//   console.log(evenId);
// }

// loadUsers();

