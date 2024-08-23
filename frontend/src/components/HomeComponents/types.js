import PropTypes from "prop-types";

// icon, title, content, index
export const BusinessProps = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

// content, name, title, img
export const FeedbackCardProps = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

// styles
export const GetStartedProps = {
  styles: PropTypes.string.isRequired,
};