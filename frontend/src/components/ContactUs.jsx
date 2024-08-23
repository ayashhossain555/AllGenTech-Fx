import styles from "./style";
import { Navbar, Footer } from "./HomeComponents";
import { Hero, Form } from "./ContactUsComponents";

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
          <Form />
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
