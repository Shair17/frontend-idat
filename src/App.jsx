import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CharactersPage } from './pages/CharactersPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Hackaton:
// hacer más páginas con la api de rick and morty: https://rickandmortyapi.com/api
// también hacer página según creas necesario (es libre)

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/characters" element={<CharactersPage />} />

			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}
