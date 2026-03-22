const list = document.querySelector("#list");
const status = document.querySelector("#status");
const btn = document.querySelector("#reload");
const search = document.querySelector("#search");

let allUsers = [];  //전체 데이터 저장

//이 패턴은 암기하기
//fetch -> await -> json -> await
// async function run() {
//     const res = await fetch("URL");
//     const data = await res.json();

//     console.log(data);
// }

async function loadUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) throw new Error("서버 오류");  //서버 에러 잡는 필수 패턴
        const users = await res.json();
        return users;   //await으로 꺼내려면 return이 꼭 필요함
    } catch(e) {
        throw e;
    }
}
//throw -> catch : loadUsers에서 던지고 run에서 처리
//res는 그냥 데이터가 아니라 Response 객체
//res.status -> 상태 코드 (200, 404..)
//res.ok -> 요청 성공 여부 확인하는 공식 속성 (true / false)
//res.json() -> 데이터 꺼내기
//res는 그냥 변수 이름이라 다른 걸로 변경 가능

//화면 그리는 함수
function render(users) {
    let html = "";

    users.forEach(u => {
        html += `<li>${u.name} - ${u.email}</li>`;
    })

    list.innerHTML = html;
}

async function run() {
    try {
        btn.disabled = true;
        status.textContent = "로딩 중...";
        list.innerHTML = "";
        
        const users = await loadUsers();
        allUsers = users;

        render(users);
        status.textContent = "";
    } catch(e) {
        status.textContent = "데이터 불러오기 실패";
    } finally {
        btn.disabled = false;
    }
}

//검색 기능
search.addEventListener("input", () => {
    const keyword = search.value.toLowerCase();
    const filtered = allUsers.filter(u => 
        u.name.toLowerCase().includes(keyword)
    );

    render(filtered);
});

//최초 실행
run();

//버튼 클릭 시 재요청
// btn.addEventListener("click", () => {   이름없는 익명의 함수 사용 시 가능
btn.addEventListener("click", function() {
    run();
});
// btn.addEventListener("click", run) -> 이게 실무에서 자주 쓰임
//이벤트는 항상 함수를 넘겨야 함 (즉시 실행 X)