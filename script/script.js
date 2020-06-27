const body = document.getElementsByTagName('body')[0];
const openBtn = document.getElementsByClassName('openBtn')[0];
const overlay = document.getElementsByClassName('overlay')[0];
const bg = document.getElementsByClassName('bg')[0];
const load = document.getElementsByClassName('load')[0];

let close = () => {
	overlay.style.width = '0';
	overlay.style.opacity = '0';
}


openBtn.onclick = () => {
	overlay.style.width = '100%';
	overlay.style.opacity = '1';
}

overlay.onclick = (e) => {
	close();
}

body.onload = () => {
	load.remove();
}


