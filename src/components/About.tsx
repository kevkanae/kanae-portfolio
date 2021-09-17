import Kevin from "../assets/Me.svg";
import { motion } from "framer-motion";
import { contact } from "../utils/ContactList";

const About = () => {
  return (
    <div className="about">
      <div className="about__root">
        <div className="about__root__left">
          <h3 className="about__root__left__name">Kevin D Goveas</h3>
          <p className="about__root__left__title">Jr. Web Developer</p>
          <p className="about__root__left__quote">
            A Well Written Piece of Code is a Thing of Beauty
          </p>
          <div className="about__root__left__icons">
            {contact.map((x, i) => (
              <a key={i} href={x.link}>
                <img src={x.src} alt={x.alt} />
              </a>
            ))}
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{
            scale: 1.4,
          }}
          animate={{ opacity: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
          transition={{
            type: "spring",
            stiffness: 490,
            damping: 21,
          }}
          className="about__root__right"
        >
          <img src={Kevin} alt="Kevin" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
