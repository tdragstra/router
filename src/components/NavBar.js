import { NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<div>
			<p>
				<NavLink to={"/"}> Home </NavLink> |
				<NavLink to={"/discover"}> Discover </NavLink> |
				<NavLink to={"/about"}> About </NavLink> |
			</p>
		</div>
	);
}
