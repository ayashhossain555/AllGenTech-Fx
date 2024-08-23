import { services } from "../constants";
import styles, { layout } from "../style";
import { Section1Props } from "./types";

const Section1 = () => {
  const ServiceCard = ({ icon, title, content, index }) => (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== services.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="justify-center font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] text-cyan-600">
        Working process
      </h2>
      <p className="text-center justify-center font-poppins font-normal text-black text-[14px] leading-[30.8px] max-w-[700px] mt-5">
        We transform concepts into powerful digital products that resonate with
        users and drive business growth. Our holistic approach to digital
        product development ensures that every aspect, from ideation to launch,
        is handled with precision and creativity.
      </p>
      <section id="features" className={layout.section}>
        <div className={`${layout.sectionImg} flex-col`}>
          {services.map((feature, index) => (
            <ServiceCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
        <div className="mr-20" />
        <div className="bg-cyan-100 flex-1 flex flex-col justify-center items-center rounded-[20px] p-6">
          <div className={layout.sectionInfo}>
            <p className={`${styles.paragraph2} max-w-[470px] mt-5 text-center`}>
              We’ll analyze market needs, customer feedback, and competitive
              landscape. Evaluate ideas to ensure they align with business goals
              and have potential. We’ll create detailed product concepts and
              outlines.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
Section1.propTypes = Section1Props;

export default Section1;
