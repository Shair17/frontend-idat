const $ = (el) => document.querySelector(el);

// const contador = $('#contador');
// const sumar = $('#sumar');
// const restar = $('#restar');
// const resetear = $('#resetear');

// sumar.addEventListener('click', () => {
// 	contador.innerText = +contador.innerText + 1;
// 	guardarNumero(+contador.innerText + 1);
// });

// restar.addEventListener('click', () => {
// 	contador.innerText = +contador.innerText - 1;
// 	guardarNumero(+contador.innerText - 1);
// });

// resetear.addEventListener('click', () => {
// 	contador.innerText = '0';
// 	guardarNumero('0');
// });

// document.addEventListener('DOMContentLoaded', () => {
// 	const numero = obtenerNumero();
// 	contador.innerText = numero ?? '0';
// });

// function guardarNumero(numero) {
// 	window.localStorage.setItem('numero', numero);
// }

// function obtenerNumero() {
// 	return window.localStorage.getItem('numero');
// }

const formulario = $('#formulario');

const EMAIL_REGEX = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
const PHONE_REGEX = /^[9]\d{8}$/;

formulario.addEventListener('submit', (event) => {
	event.preventDefault();

	const name = $('#name').value;
	const email = $('#email').value;
	const tel = $('#tel').value;

	if (!name || !email || !tel) {
		return alert('Datos incompletos!');
	}

	if (!EMAIL_REGEX.test(email)) {
		return alert('Correo incorrecto!');
	}

	if (!PHONE_REGEX.test(tel)) {
		return alert('Número de celular incorrecto!');
	}

	window.location = '/gracias.html';
});
