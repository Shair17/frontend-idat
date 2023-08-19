import { Perfil } from './components/Perfil';

// Hackaton
// 1. Hacer un contador con botones de incremento, decremento, reseteo y multiplicar por 2
// 2. Lista de tareas (titulo, descripcion, estado: completado, pendiente) y debería de poder eliminarse una tarea con un botón
// 3. Hacer un reloj (usar tipo de dato Date), usar useState y useEffect. Hacer que cada 1 segundo se actualice la fecha. Debe mostrarse con el siguiente formato: 06:46:15 (horas:minutos:segundos)

// Un componente de React (no transpilado) JSX
export default function App() {
	return (
		<div>
			<Perfil nombre="Juan Perez" />
			<Perfil nombre="Camilo Vallarta" />
			<Perfil nombre="Sebastian Ascoy" />
			<Perfil nombre="Juan Carlos" />
			<Perfil nombre="Alejandra Goicochea" />
		</div>
	);
}

// página para que puedan ver el código transpilado: https://babeljs.io/repl

/** Así es como se verá el código de arriba una vez que se entregue al navegador */

// Un componente de React pero transpilado (convertido a js para que el navegador lo entienda)
/*
export default function App() {
	return React.createElement(
		 'div',
		null,
		 React.createElement('h1', null, 'hola mundo'),
		React.createElement('p', null, 'esto es un mensaje'),
		 React.createElement('input', {
			type: 'text',
			placeholder: 'escribe algo aqu\xED',
		}),
		React.createElement('button', null, 'Clickeame')
	);
}
*/
