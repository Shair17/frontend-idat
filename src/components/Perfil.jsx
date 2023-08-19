import { useEffect, useState } from 'react';

// props -> propiedades
export const Perfil = ({ nombre }) => {
	const [nombreEsVisible, setNombreEsVisible] = useState(true);

	const manejarMostrarNombre = () => {
		setNombreEsVisible(!nombreEsVisible);
	};

	useEffect(() => {
		if (nombreEsVisible) {
			console.log(`el componente de nombre ${nombre} es visible`);
		} else {
			console.log(`el componente de nombre ${nombre} está oculto`);
		}
	}, [nombreEsVisible]);

	return (
		<div className="perfil-contenedor">
			<img src={`https://picsum.photos/1000?nombre=${nombre}`} alt={nombre} />

			<button onClick={manejarMostrarNombre}>
				{nombreEsVisible ? 'Ocultar nombre' : 'Mostrar nombre'}
			</button>

			{/** ... */}
			{nombreEsVisible ? <p>{nombre}</p> : null}
		</div>
	);
};
