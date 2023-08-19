import { useEffect } from 'react';

// props -> propiedades
export const Perfil = ({ nombre }) => {
	return (
		<div>
			<img src={`https://picsum.photos/200?nombre=${nombre}`} alt={nombre} />

			{/** ... */}
			<p>{nombre}</p>
		</div>
	);
};
