const users = [
  { id: 1, name: "민수", email: "minsu@test.com", age: 25 },
  { id: 2, name: "지은", email: "jieun@test.com", age: 31 },
  { id: 3, name: "철수", email: "chulsoo@test.com", age: 28 },
  { id: 4, name: "영희", email: "younghee@test.com", age: 22 }
];

// 문제 1
// 모든 사용자의 email만 배열로 만들기
const user_email = users.map(u => u.email);
console.log(user_email);

// 문제 2
// 나이가 25 이상인 사용자만 배열로 만들기
const user_25 = users.filter(u => u.age >= 25);
console.log(user_25);

// 문제 3
// 모든 사용자의 나이 합 구하기
const user_sum = users.reduce((sum, u) => sum + u.age, 0);
console.log(user_sum);

// 문제 4
// 사용자 이름만 배열로 만들기
const user_name = users.map(u => u.name);
console.log(user_name);

// users에서 나이가 가장 많은 사람 찾기
const old_user = users.reduce((max, u) => {
  return u.age > max.age ? u : max
});
console.log(old_user);

// users를 나이 기준으로 정렬 (많은 순)
const user_age = users.sort((a, b) => a.age - b.age);
console.log(user_age);

// users에서 나이 25 이상인 사람들만 뽑고
// 그 사람들의 이름만 배열로 만들기
const user_age25 = users
  .filter(u => u.age >= 25)
  .map(u => u.name);
console.log(user_age25);

// 나이가 30 이상인 사람 이름만 배열
const user_a = users
  .filter(u => u.age >= 30)
  .map(u => u.name);
console.log(user_a);

// 모든 사용자의 평균 나이
const avg_age = users.reduce((sum, u) => sum + u.age, 0);
console.log(avg_age / users.length);

// 가장 어린 사람 찾기
const young = users.reduce((min, u) => {
  return u.age < min.age ? u : min
});
console.log(young);

// 이름을 알파벳 순으로 정렬
const name_list = users
  .sort((a, b) => a.name.localeCompare(b.name))
  .map(u => u.name);
console.log(name_list);

// users를 다음 형태로 바꾸기
const list = users.map(u => `{name: ${u.name}, age: ${u.age}\n`);
console.log(list);

//users를 나이별로 그룹화하기
// {
//   20: ["kim", "lee"],
//   30: ["park"]
// }
const group_age = users
  .reduce((max, u) => {
    return u.age >= 30 ? max.age : u
  })
  .map(u => `20: ${u.name}`); 