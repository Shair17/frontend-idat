import { Perfil } from './components/Perfil';
import { useFetch } from './hooks/useFetch';

export default function App() {
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
			{data?.results?.map(({ id, name, image }) => (
				<Perfil key={id.toString()} id={id} name={name} image={image} />
			))}
		</div>
	);
}
