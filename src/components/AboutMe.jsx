import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

// Define the About component
const AboutMe = () => {
  return (
    <section>
      {/* Using the motion.div component for animations */}
      <motion.div
        id="about"
        // Apply animation variants using the slideIn function
        variants={slideIn('left', 'tween', 0, 1.25)}
        initial="hidden"
        animate="show"
        // Set the viewport options for animation
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="bg-paragraph">
          <h1 className="title">
            A Little About Me
          </h1>
          <p className="bodytext">
            Skin Alchemy Esthetics is the passionate endeavor of Megan Rizk, a dedicated esthetician with over 11 years of experience in the beauty and skincare industry.
          </p>
          <p className="bodytext">
            Megan's mission is to enhance your natural beauty and skin health through a combination of innovative skincare practices and the use of the finest skincare products.
          </p>
          <p className="bodytext">
            With a focus on individualized care, Megan is committed to providing you with a revitalizing and personalized skincare experience.
          </p>
          <p className="bodytext">
            Her expertise covers a wide range of skincare services, making Skin Alchemy your go-to destination for achieving radiant and healthy skin.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;