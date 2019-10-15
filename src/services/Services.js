import { useState, useEffect } from "react";

function useFetch(url, secondUrl) {
  const [data, setData] = useState([]);
  const [resultDatas, setResults] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setErrors] = useState(false);

  async function fetchUrl() {
    try {
      const response = await fetch(url);
      const result = await response.json();

      if (result) {
        setResults(result.results);
        const results = resultDatas;

        results.map(async (result) => {
          const url2 = `https://www.googleapis.com/customsearch/v1?q=${result.name}&cx=006556936853971270487%3Atip6rjdt3xu&searchType=image&key=AIzaSyCV5v1NbhR02akfxiH1LpvOZWcczCMwNWY`
          const response2 = await fetch(url2);
          const json2 = await response2.json();
          const img = json2.items[0].image.thumbnailLink;
          result.img = img

        });
        setResults(results);
        setLoading(false);
      }
      /*
      if (secondUrl) {
        const response2 = await fetch(secondUrl);
        const json2 = await response2.json();
        const img = json2.items[0].image.thumbnailLink;
        setImg(img);
      }*/
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
