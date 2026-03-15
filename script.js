const input = document.querySelector("#textInput");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
const clear = document.querySelector("#clear");
const cnt = document.querySelector("#cnt");

let items = [];
let editTarget = null;

cnt.innerHTML = "글 수 : " + list.children.length;

// 글 추가
btn.addEventListener("click", function() {
    if (input.value.trim() === "") {
        alert("내용을 입력하세요.");
        input.focus();
        return;
    }

    if (editTarget) {   //수정 모드인지 확인
        const index = [ ...list.children ].indexOf(editTarget); //li가 몇 번째 글인지 찾음

        editTarget.firstChild.textContent = input.value;    //화면 글 수정
        items[index] = input.value; //배열도 수정

        localStorage.setItem("posts", JSON.stringify(items));   //localStorage에 다시 저장
        editTarget = null;  //수정 모드 종료 -> 그래야 다음에 추가 버튼이 추가 역할을 함
    } else {
        list.innerHTML += `
            <li>
                ${input.value}
                <button onclick="removeList(this)">삭제</button>
                <button onclick="modifyList(this)">수정</button>
            </li>
        `;
        items.push(input.value);
        localStorage.setItem("posts", JSON.stringify(items));
    }

    input.value = "";
    cnt.innerHTML = "글 수 : " + list.children.length;
});

// enter로 글 추가
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        btn.click();
    }
});

// 전체 삭제
clear.addEventListener("click", function() {
    if (list.children.length === 0) {
        alert("글이 존재하지 않음");
        return;
    }

    list.innerHTML = "";
    items = [];
    localStorage.removeItem("posts");

    alert("전체 삭제 완료");
    cnt.innerHTML = "글 수 : " + list.children.length;
});

// 삭제
function removeList(btn) {
    const li = btn.parentElement;   //버튼의 부모 요소인 li 찾음
    const text = li.firstChild.textContent.trim();  //li의 첫번째 자식인 글 내용 찾음

    li.remove();    //화면에서 안 보이게 삭제

    items = items.filter(i => i !== text);  //배열에서도 삭제
    localStorage.setItem("posts", JSON.stringify(items));   //localStorage에 배열 다시 저장

    alert("삭제 완료");
    cnt.innerHTML = "글 수 : " + list.children.length;
};
// 버튼 클릭 -> li 찾기 -> 화면에서 li 삭제 -> items 배열에서도 삭제 -> localStorage에 다시 저장 -> 글 개수 업데이트

// 수정 
function modifyList(btn) {
    const li = btn.parentElement;   //버튼의 부모 요소인 li 찾음
    const text = li.firstChild.textContent.trim();  //li의 첫번째 자식인 글 내용 찾음

    input.value = text; //input에 text를 넣음
    editTarget = li;    //수정할 대상을 기억 -> 핵심
};
// 버튼 클릭 -> input에 글 내용 넣기/editTarget에 li 저장 -> 사용자가 내용 수정 -> 추가 버튼 클릭->
// editTarget 존재 확인 -> 해당 li 수정 -> items 배열 수정 -> localStorage에 저장 -> editTaget = null

// localStorage 저장값 불러오기
window.addEventListener("load", function () {
    const saved = this.localStorage.getItem("posts");

    if (saved) {
        items = JSON.parse(saved);
        items.forEach(function(text) {
            list.innerHTML += `
                <li>
                    ${text}
                    <button onclick="removeList(this)"> 삭제</button>
                    <button onclick="modifyList(this)"> 수정</button>
                </li>
            `;
        });
        cnt.innerHTML = "글 수 : " + list.children.length;
    }
});