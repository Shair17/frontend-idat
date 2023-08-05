import './style.css';

// elemento -> .elemento o #elemento
function $(elemento) {
	return document.querySelector(elemento);
}

const containerTareas = $('#containerTareas');

let idActual = null;

async function traerTareas() {
	const response = await fetch('http://localhost:3000/tareas');
	const tareas = await response.json();

	return tareas;
}

async function crearTarea({ titulo, descripcion, completado }) {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ titulo, descripcion, completado }),
	};

	const response = await fetch('http://localhost:3000/tareas', requestOptions);
	const data = await response.json();

	return data;
}

async function eliminarTarea(id) {
	const requestOptions = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const response = await fetch(
		`http://localhost:3000/tareas/${id}`,
		requestOptions
	);
	const data = await response.json();

	return data;
}

async function editarTarea({ id, titulo, descripcion, completado }) {
	const requestOptions = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ titulo, descripcion, completado }),
	};

	const response = await fetch(
		`http://localhost:3000/tareas/${id}`,
		requestOptions
	);
	const data = await response.json();

	idActual = null;

	return data;
}

async function dibujarTareas() {
	let html = document.createElement('div');
	const tareas = await traerTareas();

	tareas.forEach(({ id, titulo, descripcion, completado }) => {
		const div = document.createElement('div');
		const h1 = document.createElement('h1');
		const p = document.createElement('p');
		const button = document.createElement('button');
		const editarButton = document.createElement('button');

		div.className = 'mt-4';
		h1.textContent = titulo;
		p.textContent = descripcion;
		button.textContent = 'Eliminar';
		editarButton.textContent = 'Editar';

		button.addEventListener('click', async () => {
			const data = await eliminarTarea(id);
			if (data.status === 'ok') {
				window.location.reload();
			}
		});

		editarButton.addEventListener('click', async () => {
			idActual = id;

			$('#titulo').value = titulo;
			$('#descripcion').value = descripcion;
			$('#completado').checked = completado;
		});

		div.appendChild(h1);
		div.appendChild(p);
		div.appendChild(button);
		div.appendChild(editarButton);

		html.appendChild(div);
	});

	containerTareas.appendChild(html);
}

dibujarTareas();

const formulario = $('#formulario');

formulario.addEventListener('submit', async (event) => {
	event.preventDefault();

	const titulo = $('#titulo').value;
	const descripcion = $('#descripcion').value;
	const completado = $('#completado').checked;

	if (idActual) {
		// editar
		const dataEditar = await editarTarea({
			id: idActual,
			titulo,
			descripcion,
			completado,
		});

		if (dataEditar.status === 'ok') {
			window.location.reload();
		}
	} else {
		// crear
		const dataCrear = await crearTarea({ titulo, descripcion, completado });

		if (dataCrear.status === 'ok') {
			window.location.reload();
		}
	}
});
