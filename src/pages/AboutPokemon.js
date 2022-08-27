import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

export default function AboutPokemon() {
	const [pokemon, setPokemon] = useState();
	const params = useParams();
	// console.log("what are params", params);

	useEffect(() => {
		const pokemonDetail = async () => {
			const response = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${params.pokeName}`
			);
			console.log(response.data);
			setPokemon(response.data);
		};
		pokemonDetail();
	}, [params.pokeName]);
	// use the name from the params to fetch the data for this pokemon

	return pokemon ? (
		<div>
			<h2>{pokemon.name}</h2>
			<img src={pokemon.sprites.front_default} alt={""} />
			<p>
				Types:{" "}
				{pokemon.types.map((pokemon, id) => (
					<span key={id}>
						{pokemon.id} {pokemon.type.name}{" "}
					</span>
				))}
			</p>
			<p>Weight: {pokemon.weight} hectograms</p>
			<NavLink to={`/`}>
				<Button variant="primary">Back to list</Button>
			</NavLink>
		</div>
	) : (
		<p>
			<Spinner animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</p>
	);
}
