import React from "react";
import { Carousel } from "react-responsive-carousel";
import { images2 } from "../pathsveni/pathsveni";

export const Carousel2 = () =>{
    return(
        <Carousel>
             {images2.map((image, index) => (
                <div key={index} className="carousel-image-container2">
                <img src={image.img}alt={`Image ${index + 1}`} />
                <h3 className='carousel-text'>{image.text}</h3>
                </div>
            ))}
        </Carousel>
    )
}