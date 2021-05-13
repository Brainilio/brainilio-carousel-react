/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react"
import "./Carousel.css"

const Carousel = (props) => {
	let containerToScroll = useRef()

	// Keeps track of position of mouse, when you hold the button down.
	let pos = {
		left: 0,
		x: 0,
	}

	useEffect(() => {
		if (containerToScroll && containerToScroll.current) {
			// Reset slide to 0
			containerToScroll.current.scrollLeft = 0
			// clean up to remove event-listeners (always necessary with React)
			return function cleanup() {
				containerToScroll.current.removeEventListener(
					"mousedown",
					mouseDownHandler
				)
			}
		}
	}, [props])

	const mouseDownHandler = (e) => {
		// Once you hold your cursor / finger down on the container, it will start tracking where you're moving it to
		pos = {
			left: containerToScroll.current.scrollLeft,
			x: e.clientX,
		}

		// Add events listener to look for mouse direction & when mouse going out
		document.addEventListener("mousemove", moveHandler)
		document.addEventListener("mouseup", moveOutHandler)
	}

	const moveHandler = (e) => {
		// The direction you move it to will be the direction the container will scroll to
		containerToScroll.current.style.userSelect = "none"
		const dx = e.clientX - pos.x
		containerToScroll.current.scrollLeft = pos.left - dx
	}

	const moveOutHandler = () => {
		// Once you remove your cursor / finger from the container, you can remove the event listeners that are looking for screen position &
		// this eventlistener function here.
		containerToScroll.current.style.removeProperty("user-select")
		document.removeEventListener("mousemove", moveHandler)
		document.removeEventListener("mouseup", moveOutHandler)
	}

	const handleNext = () => {
		/* 
		This basically slides the entire to the left by the X pixels with X being the width of the current element on the screen. 
		Assuming that every element within a container has the same width, the current element in the viewport
		should be the element to the right of the previous element.
		*/
		containerToScroll.current.scrollLeft +=
			containerToScroll.current.offsetWidth
	}

	const handlePrevious = () => {
		/* 
		This basically slides the entire to the right by the X pixels with X being the width of the current element on the screen. 
		Assuming that every element within a container has the same width, the current element in the viewport
		should be the element to the left of the previous element.
		*/
		containerToScroll.current.scrollLeft -=
			containerToScroll.current.offsetWidth
	}

	return (
		<>
			<div className="carousel-section-body">
				<div
					className="carousel-wrapper"
					ref={containerToScroll}
					onMouseDown={mouseDownHandler}
				>
					<div
						className={`carousel-scrollable-area ${
							props.isFullScreen ? "fullscreen" : ""
						}`}
					>
						{props.children}
					</div>
				</div>
			</div>
			<div className="carousel-section-footer">
				<button className="previous-button" onClick={handlePrevious}>
					Previous
				</button>
				<button className="next-button" onClick={handleNext}>
					Next
				</button>
			</div>
		</>
	)
}

export default Carousel
