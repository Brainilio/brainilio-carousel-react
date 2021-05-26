/* eslint-disable react/prop-types */
import React from "react"

const Header = (props) => {
	return (
		<div className="carousel-section-header">
			<h1>{props.title}</h1>
			<span>{props.subtitle}</span>
			{props.children}
		</div>
	)
}

export default Header
