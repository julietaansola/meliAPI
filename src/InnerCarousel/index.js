import React from "react";
import Card from "../Card";
import "./style.css";

class InnerCarousel extends React.Component {
	render() {
		return (
			<div className="carousel-container">
				<h1>{this.props.title}</h1>

				<Card items={this.props.items} />
			</div>
		);
	}
}

export default InnerCarousel;
