const input = document.querySelector("#textInput");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
const clear = document.querySelector("#clear");
const cnt = document.querySelector("#cnt"); // 글 개수 -> 글 추가, 삭제 시 업데이트

let items = []; // 글 저장할 배열
let editTarget = null;  // 수정할 li 기억할 전역 변수

// 글 추가
btn.addEventListener("click", function () {

    if (input.value.trim() === "") {
        alert("입력하세요.");
        input.focus();
        return;
    }

    if (editTarget) {
        const index = [...list.children].indexOf(editTarget);

        editTarget.firstChild.textContent = input.value;
        items[index] = input.value;

        localStorage.setItem("posts", JSON.stringify(items));
        editTarget = null;
    } else {
        list.innerHTML += `
            <li>
                ${input.value}
                <button onclick="removeList(this)">삭제</button>
                <button onclick="modifyList(this)">수정</button>
            </li>
            `;
        items.push(input.value);    // 사용자가 입력한 글을 배열에 저장
        localStorage.setItem("posts", JSON.stringify(items));   // 배열을 localStorage에 저장
    }

    input.value = "";
    cnt.innerHTML = "전체 글 수 : " + list.children.length;
});

// 전체 삭제 
clear.addEventListener("click", function() {
    if (list.children.length === 0) {   // 현재 글 개수 확인
        alert("글이 존재하지 않음");
        return;
    }

    list.innerHTML = "";    // ul 안의 모든 li 삭제
    items = [];
    localStorage.removeItem("posts");

    alert("전체 글 삭제 완료");

    cnt.innerHTML = "전체 글 수 : " + list.children.length;
});

// 엔터로 글 추가 
// keypress -> 키보드 눌렀을 때 발생하는 이벤트로 이름 변경 불가능
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        btn.click();
    }
});

// 해당 글 삭제 함수
function removeList(btn) {
    const li = btn.parentElement;
    const text = li.firstChild.textContent.trim();

    li.remove();

    items = items.filter(i => i !== text);
    localStorage.setItem("posts", JSON.stringify(items));

    alert("해당 글 삭제 완료");
    cnt.innerHTML = "전체 글 수 : " + list.children.length;
};

// 해당 글 수정 함수
function modifyList(btn) {
    const li = btn.parentElement;
    const text = li.firstChild.textContent.trim();

    input.value = text;
    editTarget = li;
};

window.addEventListener("load", function() {
    const saved = localStorage.getItem("posts");

    if (saved) {
        items = JSON.parse(saved);
        items.forEach(function(text) {
            list.innerHTML += `
            <li>
            ${text}
            <button onclick="removeList(this)">삭제</button>
            <button onclick="modifyList(this)">수정</button>
            </li>
            `;
        });

        cnt.innerHTML = "전체 글 수 : " + list.children.length;
    }
});