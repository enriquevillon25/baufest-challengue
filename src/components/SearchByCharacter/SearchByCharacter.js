import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import "./SearchByCharacter.css";
import CardHeader from "@mui/material/CardHeader";

const SearchByCharacter = ({
  image,
  name,
  gender,
  location,
  episode,
  dimension,
  numberOfResidents,
  type,
  created,
  airDate,
  cEpisode,
  comparation,
  selected,
}) => {
  return (
    <Card
      sx={{
        width: "20%",
        border: selected ? "3px solid red" : "",
      }}
    >
      {image && (
        <CardMedia
          component="img"
          height="30%"
          image={image}
          alt="green iguana"
        />
      )}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "40%",
        }}
      >
        <h4> {name}</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
          }}
        >
          {gender && (
            <div>
              <span>
                <span style={{ fontWeight: "bold" }}>Genero: </span>
                {gender}
              </span>
            </div>
          )}
          {type && (
            <div>
              <span>
                <span className="bold">Tipo: </span>
                {type}
              </span>
            </div>
          )}
          {location && (
            <div>
              <span>
                <span className="bold">Ubicación: </span>
                {location}
              </span>
            </div>
          )}

          {episode && (
            <div>
              <span>
                <span className="bold">Episodio: </span>
                {episode}
              </span>
            </div>
          )}

          {dimension && (
            <div>
              <span>
                <span className="bold">Dimensión: </span>
                {dimension}
              </span>
            </div>
          )}
          {numberOfResidents && (
            <div>
              <span>
                <span className="bold">Numero de residentes: </span>
                {numberOfResidents}
              </span>
            </div>
          )}

          {created && (
            <div>
              <span>
                <span className="bold">Fecha de Creación: </span>
                {created}
              </span>
            </div>
          )}

          {airDate && (
            <div>
              <span>
                <span className="bold">Fecha de Emisión: </span>
                {airDate}
              </span>
            </div>
          )}
          {cEpisode && (
            <div>
              <span>
                <span className="bold">Código de episodio: </span>
                {cEpisode}
              </span>
            </div>
          )}
        </div>
      </CardContent>
      <CardActions sx={{ height: "30%" }}>
        {gender && (
          <Button size="small" onClick={comparation}>
            Comparar
          </Button>
        )}
        {cEpisode && (
          <Button size="small" onClick={comparation}>
            + info
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default SearchByCharacter;
