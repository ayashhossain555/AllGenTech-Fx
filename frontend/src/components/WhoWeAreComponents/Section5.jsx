import styles from "../style";

const SendResume = () => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`}
  >
    Send Your Resume
  </button>
);

const Section5 = () => (
  <section
    id="docs"
    className={`${styles.flexCenter} ${styles.padding} sm:flex-row flex-col bg-teal-gradient box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Want To Join This Amazing Team?</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum distinctio
        nesciunt incidunt nihil rerum vero, nisi non!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <SendResume />
    </div>
  </section>
);

export default Section5;
