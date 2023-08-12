import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	const incrementar = () => {
		setCount(count + 1);
	};

	const decrementar = () => {
		setCount(count - 1);
	};

	const resetear = () => {
		setCount(0);
	};

	return (
		<div>
			<h1>Contador {count}</h1>

			<button onClick={incrementar}>Incrementar</button>
			<button onClick={decrementar}>Decrementar</button>
			<button onClick={resetear}>Resetear</button>
		</div>
	);
}

export default App;
