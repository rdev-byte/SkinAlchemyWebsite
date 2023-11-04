import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

// Define the About component
const TheSpa = () => {
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
            Welcome to Skin Alchemy Esthetics
          </h1>
          <p className="bodytext">
            Skin Alchemy Esthetics is nestled within the heart of StinaFace, offering a specialized haven for facials and skincare expertise. Our dedicated space within StinaFace is designed to cater to your skincare needs. From refreshing facials to in-depth skincare solutions, we provide a range of services to rejuvenate and care for your skin. With Skin Alchemy Esthetics located inside StinaFace, you can experience the best of both worlds, enjoying top-notch facial treatments alongside custom cosmetics expertise.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

// Export the component
export default TheSpa;
