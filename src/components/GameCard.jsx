import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {setGameData} from '../redux/actions/gameData-actions'
export default function GameCard (props){
    const dispatch = useDispatch()
    const {name, metacritic, background_image, released} = props.game
    return (
        <div className="game-card-container">
             <Card className="game-card"style={{ width: '18rem' }}>
                     <Card.Img className="game-card-image" variant="top" src={background_image} />
                    <Card.Body>
                        <Card.Title className="card-text">{name}</Card.Title>
                        <Card.Title className="card-text">Release Date: {released}</Card.Title>
                        <Card.Title className="card-text">Metacritic Score: {metacritic != null ? metacritic :  "N/A"}</Card.Title>
                    </Card.Body>
            <Button onClick={()=> dispatch (setGameData(props.game))}>Add to Favorites</Button>
             </Card>
        
        </div>
    )
}