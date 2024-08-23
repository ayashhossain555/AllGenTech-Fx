import  { layout } from "../style";
import { tools } from "../../assets";

const Section2 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="justify-center font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] text-cyan-600">
        Tools and stack we use
      </h2>
      <p className="justify-center text-center font-poppins font-normal text-black text-[14px] leading-[30.8px] max-w-[700px] mt-5">
        We employ a diverse and robust technical stack to bring your digital
        product to life:
      </p>

      <section id="features" className={`${layout.section} relative`}>
      {/* <div className="absolute z-[0] w-[60%] h-[60%] -left-[90%] rounded-full cyan__gradient bottom-40" /> */}

        <img src={tools} alt="tools" className="w-full h-full object-cover" />
      </section>
    </div>
  );
};

export default Section2;
