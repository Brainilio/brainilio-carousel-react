import React from "react"
import propTypes from "prop-types"

const Picture = ({ src, type = "image/webp", alt }) => {
	return (
		<div className="picture-wrapper">
			<img draggable="false" src={src} alt={alt} type={type} />
		</div>
	)
}

Picture.propTypes = {
	src: propTypes.string.isRequired,
	type: propTypes.string,
	alt: propTypes.string.isRequired,
}

export default Picture
