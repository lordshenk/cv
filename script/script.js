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
	if (screen.width <= 576) {
		overlay.style.width = '100%';
	} else if (screen.width <= 992) {
		overlay.style.width = '50%';
	} else {
		overlay.style.width = '40%';
	}
	overlay.style.opacity = '1';
}

overlay.onclick = (e) => {
	close();
}

window.onscroll = () => {
	let value = window.scrollY;
	bg.style.backgroundPosition = `0px ${Math.round(value*-0.1)}px`;
}
body.onload = () => {
	load.remove();
}


