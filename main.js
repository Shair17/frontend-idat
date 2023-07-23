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

// obtenemos información de una key del localStorage

// eliminamos datos del localStorage basadados en la key
function eliminarDatosDelLocalStorage(key) {
	return window.localStorage.removeItem(key);
}
//
//
//
//
//

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

const listaDeTareas = [
	{
		id: 'Tarea Nro.1',
		titulo: 'Ir de compras',
		descripcion: 'Ir a ubicación 1, ir a ubicación 2, ir a ubicación 3',
		completado: false,
		fecha: '10/11/2023',
	},
	{
		id: 'Tarea Nro.2',
		titulo: 'Asistir a clases',
		descripcion: 'Revisar horario, buscar cuadernos, alistar mochila',
		completado: true,
		fecha: '20/7/2023',
	},
	{
		id: 'Tarea Nro.3',
		titulo: 'Completar avance de trabajo',
		descripcion:
			'Revisar estado de trabajo, buscar información, avanzar tarea pendiente',
		completado: true,
		fecha: '21/7/2023',
	},
];

const stringify = JSON.stringify(listaDeTareas);

function guardarDatosEnElLocalStorage(key, value) {
	window.localStorage.setItem(key, value);
}

const key = 'lista001';

guardarDatosEnElLocalStorage(key, stringify);

function obtenerDatosDelLocalStorage(key) {
	return window.localStorage.getItem(key);
}

// Modificar el texto del H1
let listadoDeTareas = $('#listado_de_tareas');
let button = $('#mostrar_tareas');

// id: 'Tarea Nro.3'
// titulo: 'Completar avance de trabajo'
// descripcion: 'Revisar estado de trabajo, buscar información, avanzar tarea pendiente'
// completado: true
// fecha: '21/7/2023'

button.addEventListener('click', () => {
	const tareas = JSON.parse(obtenerDatosDelLocalStorage(key));
	let html;

	tareas.map(({ titulo, descripcion, completado, fecha }, key) => {
		html += `<div>
		<h1>${titulo}</h1>
		<p>${descripcion}</p>
		<span>${completado ? 'Completado' : 'No completado'}</span>
		<p>${fecha}</p>
		</div>`;
	});

	listadoDeTareas.innerHTML = html;
});
