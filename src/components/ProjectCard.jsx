import PropTypes from "prop-types";
import Magnetic from "../components/Magnetic";

const ProjectCard = ({ title, image, category, url, linkLabel }) => {
  return (
    <div>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="aspect-[3/2] w-full object-cover"
        />

        <a href={url || "#"} className="group absolute inset-0">
          <Magnetic>
            <div className="flex h-12 scale-0 gap-1 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
              <span className="flex items-center rounded-full bg-black/50 px-4 backdrop-blur-sm">
                {linkLabel}
              </span>
              <span className="flex aspect-square items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z"></path>
                </svg>
              </span>
            </div>
          </Magnetic>
        </a>
      </div>

      <h3 className="mt-2 flex items-center justify-between text-xs sm:text-sm">
        <span className="flex-1">{title}</span>
        <span className="text-nowrap">{category}</span>
      </h3>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  url: PropTypes.string,
  linkLabel: PropTypes.string.isRequired,
};

export default ProjectCard;
