import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
        "
          alt=""
        />

        <div className="home__row">
          <Product
            id="735897234857"
            title="asus laptop"
            price={29.99}
            image="https://m.media-amazon.com/images/I/71htxXyGNfL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id=""
            title="laptop"
            price={999.99}
            image="https://m.media-amazon.com/images/I/61Ha2ybsOXL._AC_UL320_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id=""
            title="laptop"
            price={999.99}
            image="https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id=""
            title="laptop"
            price={999.99}
            image="https://m.media-amazon.com/images/I/61nvB28YZWL._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            id=""
            title="laptop"
            price={999.99}
            image="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/fc512bc9-69ac-4662-bb63-3c54b4a7da94._CR0,0,1200,628_SX405_QL70_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id=""
            title="laptop"
            price={999.99}
            image="https://m.media-amazon.com/images/I/71htxXyGNfL._AC_UL320_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
