import React from "react";
import InnerCarousel from "../InnerCarousel";

class Carousel extends React.Component {
	render() {
		return <InnerCarousel items={this.props.items} title={this.props.title} />;
	}
}
export default Carousel;
