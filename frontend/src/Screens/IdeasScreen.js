import "./IdeasScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Idea from "../components/Idea";

//Actions
import {getIdeas as listIdeas } from "../redux/actions/ideasActions";

const IdeasScreen = () => {
  const dispatch = useDispatch();

  const getIdeas = useSelector((state) => state.getIdeas);
  const { ideas, loading, error } = getIdeas;

  useEffect(() => {
    dispatch(listIdeas());
  }, [dispatch]);

  return (
    <div className="ideascreen">
      <h2 className="ideascreen__title">Latest Products</h2>
      <div className="ideascreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          ideas.map((idea) => (
            <Idea
              key={idea._id}
              name={idea.name}
              description={idea.description}
              imageUrl={idea.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default IdeasScreen;