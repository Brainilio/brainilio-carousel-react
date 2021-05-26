/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react"
import image1 from "../../../images/image-1.jpg"
import image2 from "../../../images/image-2.jpg"
import image3 from "../../../images/image-3.jpg"
import Header from "../../Header/Header"
import "./NewCarousel.css"

const NewCarousel = (props) => {
	let containerToScroll = useRef()
	let previousX = null

	// defaults to these, but if you pass items through props, it'll override current array
	const [items, setItems] = useState([image1, image2, image3, image1, image2])

	// Keeps track of index
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		// reset everything
		setCurrentIndex(0)
		if (containerToScroll && containerToScroll.current) {
			containerToScroll.current.scrollLeft = 0
		}

		// set props items to array in state
		setItems([...props.images])
	}, [])

	/* @desc Touch handlers for phone */

	// Retrieves touch metrics, and sets it to variable
	const handleTouchStart = (e) => {
		// gets touch positions and metrics and set it to the xDown variable
		const firstTouch = getTouches(e)[0]
		previousX = firstTouch.clientX
	}

	// Returns touch metrics / information
	const getTouches = (e) => {
		return e.touches
	}

	// Handles current touch position and compares it to previous touch position, to check what direction user is swiping to
	const handleTouchMove = (e) => {
		// if no variable set, return nothing
		if (!previousX) {
			return
		}
		// get current clientX position
		let currentX = e.touches[0].clientX

		// compare current clientX position with client position that was set when you pressed screen
		let differenceBetweenPreviousAndCurrent = previousX - currentX

		// if difference is greater than 0, next slide (so if you're swiping to left), otherwise previous slide
		if (differenceBetweenPreviousAndCurrent > 0) {
			nextSlide()
		} else {
			previousSlide()
		}

		// reset variable
		previousX = null
	}

	/* @desc Mouse handlers for mouse */
	// Saves current clientX position and adds event listeners for move handlers
	const mouseDownHandler = (e) => {
		// Once you hold your cursor / finger down on the container, it will start tracking where you're moving it to during movehandler function
		previousX = e.clientX
		containerToScroll.current.style.cursor = "grabbing"

		// Add events listener to look for mouse direction & when mouse going out
		document.addEventListener("mousemove", moveHandler)
		document.addEventListener("mouseup", moveOutHandler)
	}

	// Compares current clientX position with previously saved one to check which direction user is swiping to]
	const moveHandler = (e) => {
		if (!previousX) {
			return
		}

		let currentX = e.clientX

		let differenceBetweenPreviousAndCurrent = previousX - currentX

		if (differenceBetweenPreviousAndCurrent > 0) {
			nextSlide()
		} else {
			previousSlide()
		}

		previousX = null
	}

	// Clean up
	const moveOutHandler = () => {
		containerToScroll.current.style.cursor = "grab"
		document.removeEventListener("mousemove", moveHandler)
		document.removeEventListener("mouseup", moveOutHandler)
	}

	const nextSlide = () => {
		let singleElementWidth = containerToScroll.current.offsetWidth
		const lengthOfArray = items.length

		if (currentIndex === lengthOfArray - 1) {
			// set to beginning for infinite scrolling
			containerToScroll.current.scrollLeft = 0
			setCurrentIndex(0)
		} else {
			containerToScroll.current.scrollLeft += singleElementWidth
			setCurrentIndex((prev) => prev + 1)
		}
	}

	const previousSlide = () => {
		let fullContainerWidth = containerToScroll.current.scrollWidth
		const lengthOfArray = items.length
		if (currentIndex === 0) {
			// set to last item in array for infinite scrolling
			containerToScroll.current.scrollLeft = fullContainerWidth
			setCurrentIndex(lengthOfArray - 1)
		} else {
			setCurrentIndex((prev) => prev - 1)
			containerToScroll.current.scrollLeft -=
				containerToScroll.current.offsetWidth
		}
	}

	// Go to specific index
	const goToIndex = (index) => {
		setCurrentIndex(index)
		let singleElementWidth = containerToScroll.current.offsetWidth
		containerToScroll.current.scrollLeft = singleElementWidth * index
	}

	return (
		<>
			<Header
				title="Version 2"
				subtitle="Submission for Scandiweb's React Carousel assignment."
			/>
			<div className="carousel-section-body">
				<div className="my-carousel" ref={containerToScroll}>
					{items.map((item, index) => (
						<div
							key={index}
							className="image-wrapper"
							onTouchStart={handleTouchStart}
							onMouseDown={mouseDownHandler}
							onTouchMove={handleTouchMove}
						>
							<img draggable={false} src={item} className={"currentImage"} />
						</div>
					))}
				</div>
			</div>
			<div className="carousel-section-footer">
				<div className="slider-dots">
					{items.map((_, index) => (
						<a
							role="button"
							key={index}
							className={
								currentIndex === index ? "slider-indicator" : "slider-dot"
							}
							data-pos={index}
							onClick={() => goToIndex(index)}
						></a>
					))}
				</div>
				<div className="carousel-two-buttons">
					<button className="previous-button" onClick={previousSlide}>
						Previous
					</button>
					<button className="next-button" onClick={nextSlide}>
						Next
					</button>
				</div>
			</div>
		</>
	)
}

export default NewCarousel
