import { phone, laptop } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <>
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={phone}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Measure Impressions
          <br className="sm:block hidden" /> and Reach Post
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Graphs displaying your performance for metrics like follower
          evolution, average engagement rate per post and reach and impressions
          to give you the insights.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <p className="font-poppins font-semibold text-[18px] mr-4 text-blue-400">
            Learn more about graphs
          </p>
        </div>
      </div>
    </section>

    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Schedule Your Post
          <br className="sm:block hidden" /> Whenever You Want
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Publish your content automatically to ensure that your content reaches the right people. Built-in features such as
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <p className="font-poppins font-semibold text-[18px] mr-4 text-blue-400">
            Learn more about graphs
          </p>
        </div>
      </div>
      <div className={layout.sectionImgReverse}>
        <img
          src={laptop}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>
    </section>
  </>
);

export default Billing;
