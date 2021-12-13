import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import GameCard from "./GameCard";

export default function Home() {
  const [gameData, setGameData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const getGames = event => {
    event.preventDefault();

    axios
      .get(
        `https://api.rawg.io/api/games?search=${inputValue}&key=13f5e012fa844fd8ab7519d3d12610be`
      )
      .then(res => res.data)
      .then(data => {
        setInputValue("");
        return setGameData(data.results);
      });
  };

  const getDefaultGames = () => {
    axios
      .get(
        `https://api.rawg.io/api/games?search=Fallout&key=13f5e012fa844fd8ab7519d3d12610be`
      )
      .then(res => res.data)
      .then(data => {
        return setGameData(data.results);
      });
  };

  useEffect(() => {
    getDefaultGames();
  }, []);
  // function created to set the state of inputValue to the value of the input
  const handleChange = event => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <h1>Informed Gamer</h1>

      <form className="search-container" onSubmit={getGames}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="search-bar"
          placeholder="Find your game!"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="game-container">
        <Row>
          {gameData.map((game, index) => {
            return (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={4}
                className="mb-4"
              >
                <GameCard game={game} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
