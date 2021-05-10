import React from "react"
// import Carousel from "./components/Carousel/Carousel"
import Picture from "./components/Picture/Picture"

import image1 from "./images/image-1.webp"
import image2 from "./images/image-2.webp"
import image3 from "./images/image-3.webp"

const imageArray = [
	{ id: 1, alt: "By Alex Iby", img: image1 },
	{ id: 2, alt: "By Madib Zikri", img: image2 },
	{ id: 3, alt: "By Art Rachen", img: image3 },
	{ id: 3, alt: "By Art Rachen", img: image3 },
	{ id: 3, alt: "By Art Rachen", img: image3 },
	{ id: 3, alt: "By Art Rachen", img: image3 },
	{ id: 3, alt: "By Art Rachen", img: image3 },
]
const App = () => {
	return (
		<section className="carousel-section">
			<span className="vertical-text">Developed by Brainilio</span>
			<div className="carousel-section-header">
				<h1>React Carousel Component</h1>
				<span>Submission for Scandiweb&apos;s React Carousel assignment.</span>
			</div>
			<div className="carousel-section-body">
				<div className="carousel-wrapper">
					<div className="carousel-scrollable-area">
						{imageArray.map((img) => (
							<Picture key={img.id} src={img.img} alt={img.alt} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default App
