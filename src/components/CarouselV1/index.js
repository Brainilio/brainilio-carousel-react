import React, { useState } from "react"
import Card from "../Card/Card"

import image1 from "../../images/image-1.webp"
import image2 from "../../images/image-2.webp"
import image3 from "../../images/image-3.webp"
import Picture from "../Picture/Picture"
import Carousel from "./Carousel/Carousel"
import CarouselTwo from "./CarouselTwo/CarouselTwo"
import Header from "../Header/Header"

const imageArray = [
	{ id: 1, alt: "By Alex Iby", img: image1 },
	{ id: 2, alt: "By Madib Zikri", img: image2 },
	{ id: 3, alt: "By Art Rachen", img: image3 },
]

const Index = () => {
	const [isFullScreen, setIsFullScreen] = useState(true)

	const handleFullScreen = () => setIsFullScreen((prevstate) => !prevstate)
	return (
		<>
			<Header
				title="Version 1"
				subtitle="Submission for Scandiweb's React Carousel assignment."
			>
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
			</Header>

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
		</>
	)
}

export default Index
