import React, { useEffect, useState, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
// import URL_API from "../config/api";
// const async getUserById()
import SearchByCharacter from "./SearchByCharacter/SearchByCharacter";

const Home = () => {
  const [characters, setCharacters] = useState();
  const [inputCharacter, setInputCharacter] = useState("");
  const [locations, setLocations] = useState();
  const [selected, setSelected] = useState([]);
  const [episodes, setEpisodes] = useState();
  const listCharacter = async () => {
    const data = await fetch(`https://rickandmortyapi.com/api/character`);
    const { results } = await data.json();
    results.map((value) => {
      value.selected = false;
    });
    setCharacters(results);
  };
  const listLocations = async () => {
    const data = await fetch(`https://rickandmortyapi.com/api/location`);
    const { results } = await data.json();
    setLocations(results);
  };
  const listEpisodes = async () => {
    const numTotalEpisodes = [];
    for (let i = 0; i < 52; i++) {
      numTotalEpisodes.push(i);
    }
    const url = `https://rickandmortyapi.com/api/episode/${numTotalEpisodes}`;
    const data = await fetch(url);
    const listEpisodesEntrity = await data.json();
    setEpisodes(listEpisodesEntrity);
  };

  const listEpisodesWithCharacter = (character) => {
    const episodesName = [];
    character.episode.forEach((episode) => {
      episodes.forEach((episodeEntrity) => {
        if (episode === episodeEntrity.url) {
          episodesName.push(episodeEntrity.name);
        }
      });
    });
    return episodesName[Math.floor(Math.random() * episodesName.length + 0)];
  };

  useEffect(() => {
    listCharacter();
    listLocations();
    listEpisodes();
  }, []);

  const selectedCompare = (character) => {
    character.selected = !character.selected;
  };

  return (
    <>
      <div>
        <input
          type="search"
          onChange={(e) => {
            setInputCharacter(e.target.value.toUpperCase());
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
          justifyContent: "space-between",
        }}
      >
        {characters &&
          locations &&
          episodes &&
          [
            ...characters.filter((character) => {
              return character.name.toUpperCase().includes(inputCharacter);
            }),
            ...locations.filter((location) => {
              return location.name.toUpperCase().includes(inputCharacter);
            }),
            ...episodes.filter((episode) => {
              return episode.name.toUpperCase().includes(inputCharacter);
            }),
          ].map((response) => {
            return (
              <SearchByCharacter
                image={response.image ? response.image : null}
                name={response.name}
                gender={response.gender ? response.gender : null}
                location={response.location ? response.location.name : null}
                episode={
                  response.gender ? listEpisodesWithCharacter(response) : null
                }
                key={uuidv4()}
                dimension={response.dimension ? response.dimension : null}
                type={response.dimension ? response.type : null}
                airDate={response.air_date ? response.air_date : null}
                numberOfResidents={
                  response.residents ? response.residents.length : null
                }
                created={
                  response.dimension ? response.created.slice(0, 10) : null
                }
                cEpisode={response.air_date ? response.episode : null}
                comparation={() => selectedCompare(response)}
                selected={response.selected ? response.selected : null}
              />
            );
          })}
      </div>
    </>
  );
};
export default Home;
