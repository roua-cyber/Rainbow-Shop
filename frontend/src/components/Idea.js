import "./Idea.css";

const Idea = ({imageUrl, description, name }) => {
  return (
    <>
    <div className="Idea">
      <img src={imageUrl} alt={name} />

      <div className="Idea__info">
        <p className="Idea__name">{name}</p>

        <p className="Idea__description">{description.substring(0, 100)}...</p>

      </div>
    </div>
    </>
  );
};

export default Idea;