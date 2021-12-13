import React from 'react'
import { useSelector} from 'react-redux'
import {Col, Row} from 'react-bootstrap'
import GameCard from "./GameCard"

export default function Favorites() {
    const favoritesData = useSelector(
        (state) => state.gameData
    )
    return (
        <div>
    <h1>Favorites Section Here</h1>
     <div className="game-container">
                <Row >
                {favoritesData && favoritesData.map((game, index) => {
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
                    )
                })}
                </Row>
            </div>
        </div>
    )
}
