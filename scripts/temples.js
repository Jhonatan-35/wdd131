document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
let oLastModif = new Date(document.lastModified);
let text = document.lastModified;document.getElementById("demo").innerHTML = text;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});