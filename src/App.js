import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DiscoverPage from "./pages/DiscoverPage";
import AboutPokemon from "./pages/AboutPokemon";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<NavBar />
			<div className="Page">
				<Routes>
					<Route path="/" element={<HomePage />}>
						<Route path=":filter" element={<HomePage />} />
					</Route>
					<Route path="/about" element={<AboutPokemon />}>
						<Route path=":pokeName" element={<AboutPokemon />}></Route>
					</Route>
					<Route path="/discover" element={<DiscoverPage />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
