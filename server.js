import express from 'express';
import cors from 'cors';
import { nanoid } from 'nanoid';

const app = express();

app.use(cors());
app.use(express.json());

const tareas = [];

app.get('/tareas', (request, response) => {
	return response.json(tareas);
});

app.post('/tareas', (request, response) => {
	console.log(request.body.titulo);
	tareas.push({
		id: nanoid(),
		titulo: request.body.titulo,
		descripcion: request.body.descripcion,
		completado: request.body.completado,
	});

	return response.json({
		status: 'ok',
		tareas,
	});
});

app.put('/tareas/:id', (request, response) => {
	const id = request.params.id;

	const tareaIndex = tareas.findIndex((tarea) => tarea.id === id);

	if (tareaIndex === -1) {
		return response.status(404).json({
			message: `No se encontró la tarea con el id ${id}`,
		});
	}

	const tareaActualizada = {
		id: id,
		titulo: request.body.titulo || tareas[tareaIndex].titulo,
		descripcion: request.body.descripcion || tareas[tareaIndex].descripcion,
		completado: request.body.completado || tareas[tareaIndex].completado,
	};

	tareas[tareaIndex] = tareaActualizada;

	return response.json({
		status: 'ok',
		message: 'La tarea fue editada',
	});
});

app.delete('/tareas/:id', (request, response) => {
	const id = request.params.id;

	const tareaIndex = tareas.findIndex((tarea) => tarea.id === id);

	if (tareaIndex === -1) {
		return response.status(404).json({
			message: `No se encontró la tarea con el id ${id}`,
		});
	}

	tareas.splice(tareaIndex, 1);

	return response.json({
		status: 'ok',
		message: 'Se eliminó correctamente',
	});
});

app.listen(3000);
console.log('Server on port 3000');
