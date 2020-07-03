import React from "react";

import "./App.css";

import Carousel from "./Carousel";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
		};
	}

	async componentDidMount() {
		const search = await fetch(
			"https://api.mercadolibre.com/sites/MLA/search?q=FUNKO&limit=8"
		);
		const searchJson = await search.json();
		const result = searchJson.results;
		console.log(result);
		this.setState({
			items: result,
		});
	}

	render() {
		return (
			<div>
				<Carousel items={this.state.items} title="Basado en tu ultima visita" />
			</div>
		);
	}
}
export default App;
