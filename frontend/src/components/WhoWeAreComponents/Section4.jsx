import { coreValues } from "../constants";
import styles from "../style";
import Card from "./Card";

const Section4 = () => (
  <section
    id="pages"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <h2 className="justify-center font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] text-black-600">
      Our Core Values
    </h2>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {coreValues.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Section4;
