import React, { useState, Fragment } from "react";
import { useFetch } from "../../../services/Services";

import Loader from "../../atoms/Loader";
import Cardboard from "../../molecules/Cardboard";
import Pagination from "../../organisms/Pagination";

import { Line, Column } from "./style.js";

const ListCharacters = () => {
  const [url] = useState("https://swapi.co/api/people/");
  const [data, loading, setData, setLoading, resultDatas] = useFetch(
    url,
    "https://www.googleapis.com/customsearch/v1?q=tie&cx=006556936853971270487%3Atip6rjdt3xu&searchType=image&key=AIzaSyCV5v1NbhR02akfxiH1LpvOZWcczCMwNWY"
  );

  const nextPage = async number => {
    setLoading(true);
    const response = await fetch(`https://swapi.co/api/people/?page=${number}`);
    const json = await response.json();
    setData(json);
    setLoading(false);
  };

  return (
    <Fragment>
      {loading === false ? (
        <Fragment>
          <Line>
            {resultDatas.map((result, index) => {
              return (
                <Column
                  key={`${index}-${result.name}-col`}
                  xl="3"
                  lg="3"
                  md="12"
                  sm="12"
                  xs="12"
                >
                  <Cardboard
                    key={`${index}-${result.name}-card`}
                    title={result.name}
                    subtitle={result.birth_year}
                    img={result.img}
                    button="naves estelares"
                  />
                </Column>
              );
            })}
          </Line>
          <Pagination data={data.count} onClick={e => nextPage(e)} />
        </Fragment>
      ) : (
          <Loader />
        )}
    </Fragment>
  );
};
export default ListCharacters;
