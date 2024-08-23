import styles from "./style";
import { Navbar, Footer } from "./HomeComponents";
import {
  Hero,
  Section1,
  Section2,
  Section3,
  Section4,
} from "./ServicesComponents";

const Services = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.flexStart}`}>
        <div className="w-full">
          <Navbar />
          <Hero />
        </div>
      </div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </div>
      </div>

      <div
        className={`bg-black-gradient-2 ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Services;
