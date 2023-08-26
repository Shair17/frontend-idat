import { useState, useEffect } from 'react';

export const useFetch = (url = '', options = {}) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		let isMounted = true;

		const fetchData = async () => {
			if (!isMounted) return;

			try {
				const response = await fetch(url, options);

				if (!response.ok) {
					setError(error);
					setIsLoading(false);
					throw new Error('Ocurrió un error en la petición');
				}

				const data = await response.json();

				setData(data);
				setIsLoading(false);
			} catch (error) {
				setError(error);
				setIsLoading(false);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();

		return () => {
			isMounted = false;
		};
	}, []);

	return { data, error, isLoading };
};
