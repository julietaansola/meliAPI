import React from "react";
import Card from "../Card";
import "./style.css";

class InnerCarousel extends React.Component {
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
			<div className="carousel-container">
				<h1>{this.props.title}</h1>

				<Card items={this.state.items} />
			</div>
		);
	}
}

export default InnerCarousel;
