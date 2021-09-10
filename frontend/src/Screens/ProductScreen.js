import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/ClipLoader";
// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
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
const ProductScreen = ({ match, history }) => {
  let [color, setColor] = useState("#ffffff");

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.productid !== product._id) {
      dispatch(getProductDetails(match.params.productid));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };

  return (
    <div className="productscreen">
      {loading ? (
        <FadeLoader color={color} loading={loading} css={override} size={150} />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__info">
              <p
                style={{
                  color: "rgb(88,89,91)",
                }}
                className="left__name"
              >
                {product.name}
              </p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button
                  style={{
                    backgroundColor: "rgb(219,197,190)",
                    border: "rgb(219,197,190)",
                  }}
                  type="button"
                  onClick={addToCartHandler}
                >
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
