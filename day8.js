const list = document.querySelector("#list");
const search = document.querySelector("#search");
const status = document.querySelector("#status");
const btn = document.querySelector("#reload");

let allPosts = [];

async function loadPosts() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!res.ok) throw new Error("에러 발생");
        const posts = await res.json();
        return posts;
    } catch(e) {
        throw e;
    }
}

function render(posts) {
    let html = "";

    posts.forEach(p => {
        html += `<li data-id="${p.id}">${p.title}</li>`;
    });

    list.innerHTML = html;
}

async function run() {
    try {
        btn.disabled = true;
        status.textContent = "로딩 중...";
        list.innerHTML = "";

        const posts = await loadPosts();
        allPosts = posts;

        render(posts);
        status.textContent = "";
    } catch(e) {
        status.textContent = "실패";
    } finally {
        btn.disabled = false;
    }
}

search.addEventListener("input", () => {
    const keyword = search.value.toLowerCase();
    const filtered = allPosts.filter(p =>
        p.title.toLowerCase().includes(keyword)
    );

    render(filtered);
});

run();

list.addEventListener("click", function(e) {
    const id = e.target.dataset.id;
    const post = allPosts.find(p => p.id == id);

    alert(post.body);
});

btn.addEventListener("click", function() {
    run();
});