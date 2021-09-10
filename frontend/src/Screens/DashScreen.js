import "./DashScreen.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../redux/actions/productActions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { addProducts } from "../redux/actions/productActions";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/ClipLoader";
//

import "./HomeScreen.css";
import Productdash from "../components/Productdash";
//Actions
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
const DashScreen = ({ match }) => {
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch, match]);
  const [state, setstate] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const [file, setFile] = useState({});

  const [input, setinput] = useState({
    description: "",
    price: "",
    name: "",
    countInStock: "",
    category: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello submit");
    dispatch(addProducts(input, file));
  };

  return (
    <>
      <div className="homescreen ">
        <button
          className="ddash_button_user"
          onClick={() => {
            dispatch(listProducts());
            setstate(!state);
          }}
        >
          {" "}
          show products
        </button>
        <button className="ddash_button_user" onClick={handleShow}>
          Add product
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <img src={input.imageUrl} alt={input.name} />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="flex">
              <label className="flex1">imageUrl</label>
              <input
                className="flex2"
                onChange={(e) => setFile(e.target.files[0])}
                value={input.imageUrl}
                name="imageUrl"
                type="file"
              ></input>
            </div>
            <br />
            <div className="flex">
              <label className="flex1">name</label>
              <input
                className="flex2"
                onChange={handleChange}
                value={input.name}
                name="name"
              ></input>
            </div>
            <br />
            <div className="flex">
              <label className="flex1">description</label>
              <input
                className="flex2"
                onChange={handleChange}
                value={input.description}
                name="description"
              ></input>
            </div>
            <br />
            <div className="flex">
              <label className="flex1">category</label>
              <input
                className="flex2"
                onChange={handleChange}
                value={input.category}
                name="category"
              ></input>
            </div>
            <br />
            <div className="flex">
              <label className="flex1">countInStock</label>
              <input
                className="flex2"
                onChange={handleChange}
                value={input.countInStock}
                name="countInStock"
              ></input>
            </div>
            <br />
            <div className="flex">
              <label className="flex1">price</label>
              <input
                className="flex2"
                onChange={handleChange}
                value={input.price}
                name="price"
              ></input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{
                border: "rgb(219, 197, 190)",
                backgroundColor: "rgb(219, 197, 190)",
              }}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              style={{
                border: "rgb(219, 197, 190)",
                backgroundColor: "rgb(219, 197, 190)",
              }}
              onClick={handleSubmit}
            >
              {/* ,()=>dispatch(addProducts(input)),()=>setinput(      {
        imageUrl:"",
        description:"",
        price:"",
        name:"",
        countInStock:"",
        category:""
  
      }) */}
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* <h2 className="homescreen__title">Latest Products</h2> */}
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
            state &&
            products.map((product) => (
              <Productdash
                key={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                productId={product._id}
                countInStock={product.countInStock}
                category={product.category}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default DashScreen;
