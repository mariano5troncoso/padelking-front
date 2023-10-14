import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IconButton } from "@material-tailwind/react";

export function CarouselCustomArrows() {
  return (
    <Carousel
      className="rounded-xl"
      autoPlay
      interval={3000} // Cambia el intervalo a tu preferencia (en milisegundos)
      infiniteLoop
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={onClickHandler}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            
          </IconButton>
        )
      }
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={onClickHandler}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            
          </IconButton>
        )
      }
    >
      <div>
        <img
          src="BannerBull1.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <img
          src="BannerSiux1.JPG"
          alt="image 2"
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <img
          src="BannerNox1.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </div>
    </Carousel>
  );
}
