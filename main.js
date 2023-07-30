import './style.css';
import sonido from './sonido.mp3';

// elemento -> .elemento o #elemento
function $(elemento) {
	return document.querySelector(elemento);
}

let contador = 0;
const contadorElemento = $('#contador');
const audio = new Audio(sonido);

function incrementarContador() {
	if (contador >= 10) {
		audio.play();
		return;
	}

	contador = contador + 1;
	contadorElemento.innerText = contador;

	// Vuelve a llamar a la función después de 1 segundo (1000 milisegundos)
	setTimeout(incrementarContador, 1000);
}

// Inicia la función inicialmente
incrementarContador();
