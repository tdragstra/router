import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

function PokeCard(props) {
	const [image, setImage] = useState("");

	useEffect(() => {
		const fetchImage = async () => {
			const response = await axios.get(props.url);
			setImage(response.data.sprites.front_default);
		};
		fetchImage();
	}, [props.url]);

	return (
		<Card style={{ width: "18rem" }}>
			<NavLink to={`/about/${props.name}`}>
				<Card.Img variant="top" src={image} alt="" />
			</NavLink>
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text></Card.Text>
				<NavLink to={`/about/${props.name}`}>
					<Button variant="primary">Pokemon details</Button>
				</NavLink>
			</Card.Body>
		</Card>
	);
}

export default PokeCard;
