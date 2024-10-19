document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
let oLastModif = new Date(document.lastModified);
let text = document.lastModified; document.getElementById("demo").innerHTML = text;


let formsSended = window.localStorage.getItem("forms") || 0

const span = document.querySelector("span")
span.textContent = `Forms Sended: ${formsSended}`;
