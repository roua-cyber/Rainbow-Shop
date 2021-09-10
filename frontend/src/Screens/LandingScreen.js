import "./LandingScreen.css";
import logorose from "../components/logorose.png";
import "bootstrap/dist/css/bootstrap.min.css";

import { Carousel } from "react-bootstrap";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/ClipLoader";
// Components
import Collection from "../components/collection";

// Actions
import { getCollections } from "../redux/actions/landingAction";
const override = css`
  background: transparent !important;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 3px solid;
  border-color: rgb(219, 197, 190);
  border-bottom-color: transparent;
  display: inline-block;
  animation-fill-mode: both;
  margin-left: 10px;
`;
const LandingScreen = () => {
  const dispatch = useDispatch();
  let [color, setColor] = useState("#ffffff");

  const showcollections = useSelector((state) => state.collections);
  const { collections, loading, error } = showcollections;

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  return (
    <div className="Landingscreen">
      <div>
        <Carousel
        // style={{
        //   width: "1480px",
        //   marginLeft: "auto!important",
        //   marginRight: "auto!important",
        // }}
        >
          <Carousel.Item>
            <img
              // style={{
              //   width: "1300px",
              //   marginLeft: "auto!important",
              //   marginRight: "auto!important",
              // }}
              className="d-block w-100 mx-auto"
              src="https://cdn.shopify.com/s/files/1/0254/2030/0362/files/Pastel-Rainbow-Wide_1024x.jpg?v=1619534320"
              alt="First slide"
            />

            <Carousel.Caption>
              <h3>Kids' Birthday Party</h3>
              {/* <p>
                From rainbows to dinosaurs and more, explore our collection of
                party themes, ideal for their next birthday celebration!
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 mx-auto"
              src="https://cdn.shopify.com/s/files/1/0254/2030/0362/files/balloon-bunches--wide-4_1024x.jpg?v=1617188913"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Personalised Balloon Bouquets</h3>
              {/* <p>
                Celebrate a special birthday with our gorgeous range of
                decorations, accessories and tableware
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 mx-auto"
              src="https://cdn.shopify.com/s/files/1/0254/2030/0362/files/Balloon-Displays-Homepage_1024x.jpg?v=1619445877"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Beautiful Balloons</h3>
              {/* <p>
                No matter what you're celebrating, our range of balloons will
                certainly wow your guests!
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* body */}
      <body>
        <div className="collection__container">
          <div className="collection__container__title">
            Explore our Collections
          </div>
          <div className="collection__container__products">
            {loading ? (
              <FadeLoader
                color={color}
                loading={loading}
                css={override}
                size={150}
              />
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              collections.map((collection) => (
                <Collection
                  key={collection._id}
                  name={collection.name}
                  imageUrl={collection.imageUrl}
                  id={collection._id}
                />
              ))
            )}
          </div>
        </div>
      </body>
    </div>
  );
};

export default LandingScreen;
