import { useState, useEffect } from "react";

function useFetch(url, second) {
	const [data, setData] = useState([]);
	const [img, setImg] = useState([]);

	const [loading, setLoading] = useState(true);
	const [error, setErrors] = useState(false);

	async function fetchUrl() {
		try {
			const response = await fetch(url);
			const json = await response.json();

			if (second) {
				const response2 = await fetch(second);
				const json2 = await response2.json();
				const img = json2.items[0].image.thumbnailLink
				setImg(img);
			}

			setData(json);
			setLoading(false);
		} catch (error) {
			setErrors(error);
			throw new Error(error);
		}

	}

	useEffect(() => {
		fetchUrl();
	}, []);

	return [data, loading, setData, setLoading, img, error];
}
export { useFetch };