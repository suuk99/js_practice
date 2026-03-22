const input = document.querySelector("#textInput");
const list = document.querySelector("#list");
const clear = document.querySelector("#clear");
const btn = document.querySelector("#btn");
const cnt = document.querySelector("#cnt");

let items = [];
let editTarget = "";

btn.addEventListener("click", function() {
    if (input.value.trim() === "") {
        alert("내용 입력");
        input.focus();
        return;
    }

    if (editTarget) {
        const index = [...list.children].indexOf(editTarget);
        items[index] = input.value; 
        editTarget.firstChild.textContent = input.value;
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
        items.push(input.value);
        localStorage.setItem("posts", JSON.stringify(items));
    }

    input.value = "";
    cnt.innerHTML = "Total : " + list.children.length;
});

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        btn.click();
    }
});

clear.addEventListener("click", function() {
    if (list.children.length === 0) {
        alert("글 없음");
        return;
    }

    items = [];
    list.innerHTML = "";
    localStorage.setItem("posts", JSON.stringify(items));
    cnt.innerHTML = "Total : " + list.children.length;
    alert("전체삭제");
});

function removeList(btn) {
    const li = btn.parentElement;
    const text = li.firstChild.textContent.trim();

    li.remove();
    items = items.filter(i => i !== text);
    localStorage.setItem("posts", JSON.stringify(items));
    cnt.innerHTML = "Total : " + list.children.length;
    alert("삭제");
}

function modifyList(btn) {
    const li = btn.parentElement;
    const text = li.firstChild.textContent.trim();

    input.value = text;
    editTarget = li;
}

window.addEventListener("load", function () {
    const saved = this.localStorage.getItem("posts");

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
        cnt.innerHTML = "Total : " + list.children.length;
    }
});