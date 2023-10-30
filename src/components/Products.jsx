import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";

const Products = () => {
  return (
    <section >
        <div className="bg-paragraph3" id="products">
            <h1 className="abouttext title ">
                Welcome to Skin Alchemy Esthetics
            </h1>
            <p className="abouttext">
                Skin Alchemy Esthetics is the passionate endeavor of Megan Rizk, a dedicated esthetician with over 11 years of experience in the beauty and skincare industry. 
            </p>
            <p className="abouttext">
                Megan's mission is to enhance your natural beauty and skin health through a combination of innovative skincare practices and the use of the finest skincare products.
            </p>
            <p className="abouttext">
                With a focus on individualized care, Megan is committed to providing you with a revitalizing and personalized skincare experience.
            </p>
            <p className="abouttext">
                Her expertise covers a wide range of skincare services, making Skin Alchemy your go-to destination for achieving radiant and healthy skin.
            </p>
        </div>
    </section>
  )
}
export default Products