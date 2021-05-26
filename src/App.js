/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import OldCarousel from "./components/CarouselV1"
import NewCarousel from "./components/CarouselV2/NewCarousel/NewCarousel"
import image1 from "./images/image-1.jpg"
import image2 from "./images/image-2.jpg"
import image7 from "./images/image-7.jpg"
import image5 from "./images/image-5.jpg"
import image6 from "./images/image-6.jpg"

const App = () => {
	return (
		<section className="carousel-section">
			<NewCarousel images={[image1, image2, image7, image5, image6]} />
			<OldCarousel />
		</section>
	)
}

export default App
