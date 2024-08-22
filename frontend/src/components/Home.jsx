import styles from "./style";
import {
  Navbar,
  Hero,
  Business,
  Billing,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./HomeComponents";

const Home = () => (
  <div className="bg-cyan-500 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-cyan-500 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-slate-50 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Clients />
        <Billing />
      </div>
    </div>
    <div className={`bg-cyan-100 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Testimonials />
      </div>
    </div>
    <div className={`bg-slate-50 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <CTA />
      </div>
    </div>

    <div className={`bg-black-gradient-2 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;
