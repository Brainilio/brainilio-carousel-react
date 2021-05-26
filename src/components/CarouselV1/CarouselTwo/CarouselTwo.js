/* eslint-disable react/prop-types */
import React, { useState } from "react"
import "./CarouselTwo.css"
import image1 from "../../../images/image-1.webp"
import image2 from "../../../images/image-2.webp"
import image3 from "../../../images/image-3.webp"

const imageArray = [
	{ id: 1, alt: "By Alex Iby", img: image1 },
	{ id: 2, alt: "By Madib Zikri", img: image2 },
	{ id: 3, alt: "By Art Rachen", img: image3 },
]

// This carousel is made to showcase a different way of constructing a carousel. This carousel has dots
const CarouselTwo = () => {
	const [current, setCurrent] = useState(0)
	const [position, setPosition] = useState(0)

	const sliderCss = {
		transform: `translateX(${position}px)`,
		transition: "0.3s all ease-in-out",
	}

	const handlePrevious = () => {
		if (current === 0) {
			setCurrent(0)
			setPosition(0)
		} else {
			setCurrent(current - 1)
			setPosition(position + window.innerWidth)
		}
	}

	const handleNext = () => {
		if (current === imageArray.length - 1) {
			setCurrent(0)
			setPosition(0)
		} else {
			setCurrent(current + 1)
			setPosition(position - window.innerWidth)
		}
	}

	return (
		<div className="carousel-two-wrapper">
			<div className="carousel-two" style={sliderCss}>
				{imageArray.length > 1 &&
					imageArray.map((i, index) => {
						return (
							<div key={index} className={"image-wrapper"}>
								<img src={i.img} className={`carousel-image fullscreen`} />
							</div>
						)
					})}
			</div>

			<div className="slider-dots">
				{imageArray.map((_, index) => (
					<a
						key={index}
						className={current === index ? "slider-indicator" : "slider-dot"}
						data-pos={index}
					></a>
				))}
			</div>

			<div className="carousel-two-buttons">
				<button className="previous-button" onClick={handlePrevious}>
					Previous
				</button>
				<button className="next-button" onClick={handleNext}>
					Next
				</button>
			</div>
		</div>
	)
}

export default CarouselTwo
