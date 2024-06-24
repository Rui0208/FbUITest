let form = document.querySelector("form");
let account = form.children[0];
let password = form.children[1];
let submitButton = form.children[2];
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (account.value == "abc123" && password.value == "abc123") {
    alert("登入成功");
    account.value = "";
    password.value = "";
  } else {
    alert("帳號或密碼輸入錯誤！");
    account.value = "";
    password.value = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const switchTheme = document.querySelector(".switchTheme");
  const Theme = localStorage.getItem("theme") || "light";
  const body = document.querySelector("body");

  // 应用当前主题
  document.body.classList.add(`${Theme}-theme`);

  // 切换主题事件监听器
  switchTheme.addEventListener("click", () => {
    const newTheme = body.classList.contains("light-theme") ? "dark" : "light";
    body.classList.remove("light-theme", "dark-theme");
    body.classList.add(`${newTheme}-theme`);
    localStorage.setItem("theme", newTheme);
  });
});

// let switchTheme = document.querySelector(".switch");
// switchTheme.addEventListener("click",()=>{

// })

let currentTime = document.querySelector(".currentTime");
let now = new Date();
currentTime.innerText = now;
