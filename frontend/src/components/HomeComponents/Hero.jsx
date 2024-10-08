import styles from "../style";
import { home } from "../../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <>
    <section id="home" className={`flex md:flex-row flex-col`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            We help you grow your business faster
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          veniam saepe sint earum magni voluptate illum expedita a cum
          laudantium, suscipit ipsum?
        </p>

        <GetStarted styles="mt-10" />
      </div>
      <div className={`flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={home}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  </>
);

export default Hero;
