import { Perfil } from './Perfil';
import { useFetch } from '../hooks/useFetch';

export const PersonajesRickAndMorty = () => {
	const { data, error, isLoading } = useFetch(
		'https://rickandmortyapi.com/api/character'
	);

	if (isLoading) {
		return (
			<div>
				<p>Cargando...</p>
			</div>
		);
	}

	if (error) {
		<div>
			<p>Ocurrió un error {JSON.stringify(error)}</p>
		</div>;
	}

	console.log(data.results);

	return (
		<div>
			{data?.results?.map(
				({ id, name, image, gender, created, species, status }) => (
					<Perfil
						key={id.toString()}
						id={id}
						name={name}
						image={image}
						genero={gender}
						creado={created}
						especie={species}
						estado={status}
					/>
				)
			)}
		</div>
	);
};
