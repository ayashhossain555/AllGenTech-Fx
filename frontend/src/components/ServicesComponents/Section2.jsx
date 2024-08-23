import styles, { layout } from "../style";
import { projects } from "../../assets";

const Section2 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="justify-center font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] text-cyan-600">
        Collaboration with Auxo and Unqork
      </h2>
      <p className="justify-center text-center font-poppins font-normal text-black text-[14px] leading-[30.8px] max-w-[700px] mt-5">
        Our partnership with Auxo allows us to stay at the forefront of
        technological innovation, ensuring that we deliver cutting edge digital
        products.
      </p>
      <section id="features" className={`${layout.section} relative`}>

        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full cyan__gradient bottom-40" />

        <div className={`${layout.sectionImg} flex-col`}>
          <img
            src={projects}
            alt="auxo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mr-20" />
        <div className="flex-1 flex flex-col justify-center items-center rounded-[20px] p-6">
          <div className={layout.sectionInfo}>
            <p className={`${styles.paragraph2} max-w-[470px] mt-5`}>
              Our expertise in Unqork, a leading PaaS, enables us to develop
              flexible, low code solutions that can be rapidly deployed and
              easily adapted as your business evolves.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
