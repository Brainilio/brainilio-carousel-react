import React, { useState } from "react"
import Carousel from "./components/Carousel/Carousel"
import Card from "./components/Card/Card"
import Picture from "./components/Picture/Picture"

import image1 from "./images/image-1.webp"
import image2 from "./images/image-2.webp"
import image3 from "./images/image-3.webp"
import CarouselTwo from "./components/CarouselTwo/CarouselTwo"

const imageArray = [
	{ id: 1, alt: "By Alex Iby", img: image1 },
	{ id: 2, alt: "By Madib Zikri", img: image2 },
	{ id: 3, alt: "By Art Rachen", img: image3 },
]
const App = () => {
	const [isFullScreen, setIsFullScreen] = useState(true)

	const handleFullScreen = () => setIsFullScreen((prevstate) => !prevstate)

	return (
		<section className="carousel-section">
			<div className="carousel-section-header">
				<h1>React Carousel Component</h1>
				<span>Submission for Scandiweb&apos;s React Carousel assignment.</span>
				<button onClick={handleFullScreen}>
					Click here to make carousel elements fullscreen
				</button>
				{isFullScreen ? (
					<span className="description-carousel">
						Images within the Carousel are full width
					</span>
				) : (
					<span className="description-carousel">
						Images within the Carousel are not full width
					</span>
				)}
			</div>

			<Carousel isFullScreen={isFullScreen}>
				{imageArray.map((img) => (
					<Picture key={img.id} src={img.img} alt={img.alt} />
				))}
			</Carousel>
			<Carousel>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</Carousel>
			<CarouselTwo />
		</section>
	)
}

export default App
