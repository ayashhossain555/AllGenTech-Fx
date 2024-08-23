import { CardProps } from "./types";

const Card = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[277px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[60] h-[60] rounded-full" />
    </div>
    <h className="font-poppins font-semibold text-[18px] leading-[32.4px] text-black my-5">
      {name}
    </h>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black my-10">
      {content}
    </p>
  </div>
);

Card.propTypes = CardProps;
export default Card;
