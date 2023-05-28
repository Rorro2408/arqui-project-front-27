import { useState, useEffect } from "react";
import emiliaBanner from "../../src/assets/banners/emilia.jpg"
import kraftwerkBanner from "../../src/assets/banners/kraftwerk.jpg"
import moraBanner from "../../src/assets/banners/mora.jpg"
import themarsBanner from "../../src/assets/banners/themars.jpg"
import tommorelloBanner from "../../src/assets/banners/tommorello.jpg"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ResponsiveCarousel() {
  return (
    <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true}>
      <div>
        <img src={emiliaBanner} />
        <p className=" legend "> Emilia Mernes </p>
      </div>

      <div>
        <img src={themarsBanner} />
        <p className="legend"> The Mars </p>
      </div>

      <div>
        <img src={kraftwerkBanner} />
        <p className="legend"> Kraftwerk </p>
      </div>

      <div>
        <img src={moraBanner} />
        <p className="legend"> Mora </p>
      </div>

      <div>
        <img src={tommorelloBanner} />
        <p className="legend"> Tom Morello </p>
      </div>

    </Carousel>
  )

}