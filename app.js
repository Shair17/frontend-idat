const $ = (el) => document.querySelector(el);

const contador = $('#contador');
const sumar = $('#sumar');
const restar = $('#restar');
const resetear = $('#resetear');

sumar.addEventListener('click', () => {
	contador.innerText = +contador.innerText + 1;
	guardarNumero(+contador.innerText + 1);
});

restar.addEventListener('click', () => {
	contador.innerText = +contador.innerText - 1;
	guardarNumero(+contador.innerText - 1);
});

resetear.addEventListener('click', () => {
	contador.innerText = '0';
	guardarNumero('0');
});

document.addEventListener('DOMContentLoaded', () => {
	const numero = obtenerNumero();
	contador.innerText = numero ?? '0';
});

function guardarNumero(numero) {
	window.localStorage.setItem('numero', numero);
}

function obtenerNumero() {
	return window.localStorage.getItem('numero');
}
