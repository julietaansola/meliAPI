import React from "react";

import "./App.css";

import Carousel from "./Carousel";

class App extends React.Component {
	render() {
		return (
			<div>
				<Carousel title="busqueda..." />
				<Carousel title="Basado en tu ultima visita" />
			</div>
		);
	}
}
export default App;
