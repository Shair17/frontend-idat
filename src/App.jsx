// Un componente de React (no transpilado) JSX
export default function App() {
	return (
		<div>
			<h1>hola mundo</h1>
			<p>esto es un mensaje</p>

			<input type="text" placeholder="escribe algo aquí" />

			<button>Clickeame</button>
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
