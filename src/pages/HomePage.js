import PokeCard from "../components/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate, useParams } from "react-router-dom";

export default function HomePage() {
	const navigate = useNavigate();
	const params = useParams();

	const [pokeList, setPokeList] = useState(null);
	const [filter, setFilter] = useState("");

	const updateFilter = (para) => {
		setFilter(para.target.value);
		navigate(`/${para.target.value}`);
	};

	useEffect(() => {
		const getPokemon = async () => {
			const response = await axios.get(
				"https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
			);
			setPokeList(response.data.results);
			console.log(response.data.results);
		};
		getPokemon();
		if (params.filter) {
			setFilter(params.filter);
		}
	}, [params.filter]);

	if (!pokeList)
		return (
			<div>
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</div>
		);

	return (
		<div>
			<input type="text" value={filter} onChange={updateFilter} />{" "}
			<div style={{ display: "flex", flexWrap: "wrap", padding: 10 }}>
				{pokeList
					.filter((pokemon1) => pokemon1.name.startsWith(filter))
					.map((pokemon2, id) => (
						<div key={id} style={{ margin: 20 }}>
							<PokeCard name={pokemon2.name} url={pokemon2.url} />
						</div>
					))}
			</div>
		</div>
	);
}
