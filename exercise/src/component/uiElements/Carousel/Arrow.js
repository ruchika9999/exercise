import { ArrowLeft, ArrowRight } from "../../Icon";
import PropTypes from "prop-types";
import { ArrowBox } from "./styles";

function Arrow(props) {
  const { type, onClick } = props;
  const char = type === "next" ? <ArrowRight /> : <ArrowLeft />;
  return (
    <ArrowBox
      type={type === "next" ? "nextArrow" : "prevArrow"}
      onClick={onClick}
    >
      {char}
    </ArrowBox>
  );
}

Arrow.prototype = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Arrow;
