import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [resultDatas, setResults] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setErrors] = useState(false);

  async function fetchUrl() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json)

      if (json) {
        setResults(json.results);
        let results = json.results;

        const resultObj = json.results.map(async (result) => {
          let url = `https://www.googleapis.com/customsearch/v1?q=${result.name}&cx=006556936853971270487%3Atip6rjdt3xu&searchType=image&key=AIzaSyCV5v1NbhR02akfxiH1LpvOZWcczCMwNWY`
          let response = await fetch(url);
          let json = await response.json();
          const img = json && json.items ? json.items[0].image.thumbnailLink : { img: "https://i.pinimg.com/originals/30/93/d2/3093d2a63cf2a6d4d1a6a276676d7ae7.jpg" };
          results = { ...result, img }

          return results;
        });

        const result = resultObj;

        setResults(result);
        setLoading(false);
      }
    } catch (error) {
      setErrors(error);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return [data, loading, setData, setLoading, resultDatas, error];
}
export { useFetch };
