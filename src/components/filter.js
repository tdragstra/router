import { useState } from "react";

export default function AddPlayerForm(props) {
	const [name, setName] = useState("");

	const newVar = (value) => {
		setName(value);
	};

	return (
		<div>
			<p>
				New player:
				<input
					onChange={(event) => {
						newVar(event.target.value);
						console.log(event.target.value);
					}}
					type="text"
					placeholder="Name"
					value={name}
				/>
				<button
					onClick={() => {
						props.addPlayer(name);
						setName({ name });
					}}
				>
					Add
				</button>
			</p>
		</div>
	);
}
