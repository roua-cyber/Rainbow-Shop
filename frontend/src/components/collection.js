import "./collection.css";
import { Link } from "react-router-dom";

const Collection = ({ imageUrl, name ,id }) => {
  return (
    <div className="collection">
      <img src={imageUrl} alt={name} />

        <div className="collection__info">
          <Link to={`/${name}`} className="collection__button">
          {name}
          </Link>
          
        </div>
    </div>
  );
};



export default Collection;