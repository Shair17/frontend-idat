export const Perfil = ({
	id,
	name,
	image,
	genero,
	creado,
	especie,
	estado,
}) => {
	const esMujer = genero === 'Female';
	const esHombre = genero === 'Male';
	const esHumano = especie === 'Human';
	const esAlien = especie === 'Alien';

	return (
		<div>
			<p>
				{id}. {name}
			</p>
			<p>Genero: {esHombre ? 'Masculino' : 'Femenino'}</p>
			<p>Creado: {new Date(creado).toLocaleDateString()}</p>
			<p>Especie: {esHumano ? 'Humano' : 'Alien'}</p>
			<p>
				Estado:{' '}
				{estado === 'Alive'
					? esMujer
						? 'Viva'
						: 'Vivo'
					: estado === 'Dead'
					? esMujer
						? 'Muerta'
						: 'Muerto'
					: esMujer
					? 'Desconocida'
					: 'Desconocido'}
			</p>
			<img src={image} alt={name} />
		</div>
	);
};
