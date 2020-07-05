import React from "react";

import "./App.css";

import Carousel from "./Carousel";

class App extends React.Component {
	render() {
		return (
			<div>
				<Carousel items={this.props.items} title="Basado en tu ultima visita" />
			</div>
		);
	}
}
export default App;
