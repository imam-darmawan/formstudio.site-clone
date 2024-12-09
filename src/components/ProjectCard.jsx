import PropTypes from "prop-types";

const ProjectCard = ({ title, category, image }) => {
  return (
    <div>
      <img
        src={image}
        alt={title}
        className="aspect-video w-full object-cover"
      />
      <div className="mt-2 flex justify-between text-xs uppercase">
        <span>{title}</span>
        <span>{category}</span>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
