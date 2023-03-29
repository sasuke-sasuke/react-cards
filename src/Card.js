import {useState} from 'react';
import "./Card.css";

const Card = ({image}) => {

    const [position, setPosition] = useState({transform: `rotate(${Math.floor(Math.random() * 360)}deg)`});
    
    return (
        <>
            <img 
                className="Card" 
                src={image} 
                alt='' 
                style={position}
            />
        </>
    )
}

export default Card;