import React from "react";
import "./style.css";

class Card extends React.Component {
	render() {
		return (
			<div className="flex">
				{this.props.items.map((item, key) => (
					<div key={key.id} className="card">
						<div className="img-container">
							<img clasName="img" src={item.thumbnail} alt="" />
						</div>
						<div className="description">
							<p className="price ">$ {item.price}</p>
							<p className="title">{item.title}</p>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default Card;
