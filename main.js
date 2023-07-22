import './style.css';

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

const key = 'numero';

limpiarLocalStorage();

const stringify = JSON.stringify({
	nombre: 'Juan',
	edad: 20,
	instituto: 'IDAT',
});

guardarDatosEnElLocalStorage(key, stringify);

console.log('ahora si está');
console.log(JSON.parse(obtenerDatosDelLocalStorage(key)));

console.log('ahora no está');
eliminarDatosDelLocalStorage(key);
console.log(JSON.parse(obtenerDatosDelLocalStorage(key)));
