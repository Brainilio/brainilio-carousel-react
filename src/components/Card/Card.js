import React from "react"
import rightArrow from "../../images/right.png"
import "./Card.css"

const Card = () => {
	return (
		<div className="card">
			<div className="card-header"></div>
			<div className="card-body">
				<h3>25 Outstanding Hikes</h3>
				<p>
					If hiking for you is all about the breathtaking scenery, try these
					gorgeous day hikes
				</p>
				<span>2 hours ago</span>
			</div>
			<div className="card-footer">
				<span>Click to read more</span>
				<img src={rightArrow} width="25" height="25" />
			</div>
		</div>
	)
}

export default Card
