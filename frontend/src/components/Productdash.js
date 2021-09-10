import "./Productdash.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { updateProducts } from "../redux/actions/productActions";

const Productdash = ({
  imageUrl,
  description,
  price,
  name,
  productId,
  countInStock,
  category,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(window.location.href);
  const dispatch = useDispatch();
  const [input, setinput] = useState({
    imageUrl: imageUrl,
    description: description,
    price: price,
    name: name,
    countInStock: countInStock,
    category: category,
  });

  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <div className="product__info">
        <p className="info__name">{name}</p>
        <p className="info__description">{description.substring(0, 100)}...</p>
        <p className="info__name">{category}</p>
        <p className="info__name">{countInStock}</p>
        <p className="info__name">${price}</p>
      </div>
      <Button
        style={{
          border: "rgb(219, 197, 190)",
          backgroundColor: "rgb(219, 197, 190)",
        }}
        onClick={handleShow}
      >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img src={imageUrl} alt={name} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex">
            <label className="flex1">imageUrl</label>
            <input
              className="flex2"
              onChange={handleChange}
              value={input.imageUrl}
              name="imageUrl"
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
            onClick={
              (handleClose, () => dispatch(updateProducts(productId, input)))
            }
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Productdash;
