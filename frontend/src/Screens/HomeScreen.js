import "./HomeScreen.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Components
import Product from "../components/Product";
//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/ClipLoader";
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
const HomeScreen = ({ match, history }) => {
  let [color, setColor] = useState("#ffffff");

  console.log(match);
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(listProducts());
  }, [dispatch, match]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">{match.params.id}</h2>
      <div className="homescreen__products">
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
          products
            .filter((product) => product.category === match.params.id)
            .map((product) => (
              <Product
                key={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                productId={product._id}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
