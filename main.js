import './style.css';

// elemento -> .elemento o #elemento
function $(elemento) {
	return document.querySelector(elemento);
}

// Limpiamos toda la información del localStorage
function limpiarLocalStorage() {
	window.localStorage.clear();
	console.log('El localStorage ha sido limpiado');
}

// usamos una función para guardar información en el localStorage
function guardarDatosEnElLocalStorage(key, value) {
	window.localStorage.setItem(key, value);
}

// obtenemos información de una key del localStorage
function obtenerDatosDelLocalStorage(key) {
	return window.localStorage.getItem(key);
}

// eliminamos datos del localStorage basadados en la key
function eliminarDatosDelLocalStorage(key) {
	return window.localStorage.removeItem(key);
}
//
//
//
//
//
// Modificar el texto del H1
let h1 = $('#hola_mundo');
let button = $('#cambiar_texto');

button.addEventListener('click', () => {
	let texto = h1.innerText;

	if (texto === 'Hola Mundo') {
		h1.innerText = 'Adiós Mundo';
	} else {
		h1.innerText = 'Hola Mundo';
	}
});

// Aquí empieza la hackaton semana 11

// Desarrollar una lista de tareas con Storage, DOM y eventos
// En el storage tiene que almacenar la lista de tareas con el siguiente formato

// Tarea:
// 	- id (numero o texto)
//	- titulo (texto)
//	- descripcion (texto)
//	- completado (boolean)
//	- fecha (Date)

// Teniendo en cuenta que son varias tareas entonces deben almacenar un arreglo
// Recuerden el uso de JSON.stringify y JSON.parse (les será muy útil)

// Respecto al DOM lo usarán para pintar la lista de tareas en pantalla
// Respecto a eventos, analicen que eventos tienen que usar y apliquenlo
