import React, { useEffect, useRef, useState } from "react"
// import Carousel from "./components/Carousel/Carousel"
import Picture from "./components/Picture/Picture"

import image1 from "./images/image-1.webp"
import image2 from "./images/image-2.webp"
import image3 from "./images/image-3.webp"

const imageArray = [
	{ id: 1, alt: "By Alex Iby", img: image1 },
	{ id: 2, alt: "By Madib Zikri", img: image2 },
	{ id: 3, alt: "By Art Rachen", img: image3 },
	{ id: 4, alt: "By Art Rachen", img: image3 },
	{ id: 5, alt: "By Art Rachen", img: image3 },
	{ id: 6, alt: "By Art Rachen", img: image3 },
	{ id: 7, alt: "By Art Rachen", img: image3 },
]
const App = () => {
	let containerToScroll = useRef()
	const [current, setCurrent] = useState(0)
	const length = imageArray.length

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
		containerToScroll.current.style.cursor = "grabbing"
		document.addEventListener("mousemove", moveHandler)
		document.addEventListener("mouseup", moveOutHandler)
	}

	const moveHandler = (e) => {
		containerToScroll.current.style.cursor = "grabbing"
		containerToScroll.current.style.userSelect = "none"
		const dx = e.clientX - pos.x
		containerToScroll.current.scrollLeft = pos.left - dx
	}

	const moveOutHandler = () => {
		containerToScroll.current.style.cursor = "grab"
		containerToScroll.current.style.removeProperty("user-select")
		document.removeEventListener("mousemove", moveHandler)
		document.removeEventListener("mouseup", moveOutHandler)
	}

	const handleNext = () => {
		console.log(containerToScroll.current.clientWith)
		containerToScroll.current.scrollLeft +=
			containerToScroll.current.offsetWidth
	}

	const handlePrevious = () => {
		containerToScroll.current.scrollLeft -=
			containerToScroll.current.offsetWidth
	}
	return (
		<section className="carousel-section">
			<span className="vertical-text" style={{ fontSize: "10px" }}>
				Developed by Brainilio
			</span>
			<div className="carousel-section-header">
				<h1>React Carousel Component</h1>
				<span>Submission for Scandiweb&apos;s React Carousel assignment.</span>
			</div>
			<div className="carousel-section-body">
				<div className="carousel-wrapper" ref={containerToScroll}>
					<div className="carousel-scrollable-area">
						{imageArray.map((img) => (
							<Picture key={img.id} src={img.img} alt={img.alt} />
						))}
					</div>
				</div>
			</div>
			<div className="carousel-section-footer">
				<button onClick={handlePrevious}>Previous</button>
				<button onClick={handleNext}>Next</button>
			</div>
		</section>
	)
}

export default App
