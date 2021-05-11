/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react"

const Carousel = (props) => {
	const [lengthOfChildren] = useState(props.children)
	const [current, setCurrent] = useState(0)

	props.children.length
	let containerToScroll = useRef()
	let pos = {
		left: 0,
		x: 0,
	}

	useEffect(() => {
		if (containerToScroll && containerToScroll.current) {
			containerToScroll.current.addEventListener("mousedown", mouseDownHandler)

			return function cleanup() {
				containerToScroll.current.removeEventListener(
					"mousedown",
					mouseDownHandler
				)
			}
		}
	}, [])

	const mouseDownHandler = (e) => {
		pos = {
			left: containerToScroll.current.scrollLeft,
			x: e.clientX,
		}

		document.addEventListener("mousemove", moveHandler)
		document.addEventListener("mouseup", moveOutHandler)
	}

	const moveHandler = (e) => {
		containerToScroll.current.style.userSelect = "none"
		const dx = e.clientX - pos.x
		containerToScroll.current.scrollLeft = pos.left - dx
	}

	const moveOutHandler = () => {
		containerToScroll.current.style.removeProperty("user-select")
		document.removeEventListener("mousemove", moveHandler)
		document.removeEventListener("mouseup", moveOutHandler)
	}

	const handleNext = () => {
		containerToScroll.current.scrollLeft +=
			containerToScroll.current.offsetWidth

		setCurrent((prevstate) => (prevstate += 1))
	}

	const handlePrevious = () => {
		containerToScroll.current.scrollLeft -=
			containerToScroll.current.offsetWidth

		setCurrent((prevstate) => (prevstate -= 1))
	}

	return (
		<>
			<div className="carousel-section-body">
				<div className="carousel-wrapper" ref={containerToScroll}>
					<div
						className={`carousel-scrollable-area ${
							props.isFullScreen ? "fullscreen" : ""
						}`}
					>
						{props.children}
					</div>
				</div>
				{props.isFullScreen && (
					<div className="slider__dots">
						{lengthOfChildren.map((indicator, index) => (
							<a
								href="#"
								key={indicator}
								className={
									current === index ? "slider__indicator" : "slider__dot"
								}
								data-pos={index}
							></a>
						))}
					</div>
				)}
			</div>
			<div className="carousel-section-footer">
				<button onClick={handlePrevious}>Previous</button>
				<button onClick={handleNext}>Next</button>
			</div>
		</>
	)
}

export default Carousel
