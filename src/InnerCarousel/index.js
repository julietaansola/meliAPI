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
		const getCarouselData = await fetch(
			"https://api.mercadolibre.com/sites/MLA/search?q=FUNKO&limit=8"
		);
		const getCarouselDataJson = await getCarouselData.json();
		console.log(getCarouselDataJson);
		this.setState({
			items: getCarouselData.results,
		});
	}

	render() {
		return (
			<div className="carousel-container">
				<div className="inputContainer">
					<input
						className="input"
						type="text"
						placeholder="Buscar productos, marcas y mas.."
						onChange={(e) => this.handleChange(e)}
					></input>
					<button onClick={() => this.handleClick()}>Buscar</button>
				</div>
				<h1>{this.props.title}</h1>

				<Card items={this.state.items} />
			</div>
		);
	}
}

export default InnerCarousel;
