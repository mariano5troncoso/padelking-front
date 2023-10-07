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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
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
