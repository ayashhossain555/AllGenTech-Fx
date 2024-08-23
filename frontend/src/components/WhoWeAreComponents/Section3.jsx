import styles, { layout } from "../style";
import { laptop } from "../../assets";

const Section3 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <section id="features" className={`${layout.section} relative`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full cyan__gradient bottom-40" />

        <div className="flex-1 flex flex-col justify-center items-center rounded-[20px] p-6">
          <div className={layout.sectionInfo}>
            <h2 className="justify-center font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] text-cyan-600">
              our mission
            </h2>
            <p className={`${styles.paragraph2} max-w-[470px] mt-5`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              obcaecati quod iusto aperiam consequatur nostrum itaque beatae,
              perspiciatis dicta iure quidem mollitia sunt in illum?
            </p>
          </div>
        </div>
        <div className="mr-20" />
        <div className={`${layout.sectionImg} flex-col`}>
          <img src={laptop} alt="auxo" className="w-full h-full object-cover" />
        </div>
      </section>
    </div>
  );
};

export default Section3;
