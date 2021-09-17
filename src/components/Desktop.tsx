import { motion } from "framer-motion";
import { projectList } from "../utils/ProjectsList";

const Desktop = () => {
  return (
    <>
      {projectList.map((x, i) => (
        <div key={i} className="proj">
          <div className="proj__root">
            {i % 2 === 0 ? (
              <>
                <div className="proj__root__left">
                  <p className="proj__root__left__name">{x.name}</p>
                  <p className="proj__root__left__desc">{x.desc}</p>
                  <p className="proj__root__left__tech">{x.tech}</p>
                  <a className="proj__root__left__live" href={x.github}>
                    GitHub
                  </a>
                </div>
                <div className="proj__root__right">
                  <motion.a
                    className="proj__root__right__aTag"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 1.4,
                    }}
                    animate={{ opacity: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
                    transition={{
                      type: "spring",
                      stiffness: 490,
                      damping: 21,
                    }}
                    href={x.link}
                  >
                    <img src={x.src} alt="" />
                  </motion.a>
                </div>
              </>
            ) : (
              <>
                <div className="proj__root__left">
                  <motion.a
                    className="proj__root__left__aTag"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 1.4,
                    }}
                    animate={{ opacity: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
                    transition={{
                      type: "spring",
                      stiffness: 490,
                      damping: 21,
                    }}
                    href={x.link}
                  >
                    <img src={x.src} alt="" />
                  </motion.a>
                </div>
                <div className="proj__root__right">
                  <p className="proj__root__right__name">{x.name}</p>
                  <p className="proj__root__right__desc">{x.desc}</p>
                  <p className="proj__root__right__tech">{x.tech}</p>
                  <a className="proj__root__right__live" href={x.github}>
                    GitHub
                  </a>
                </div>
              </>
            )}
          </div>
          <div className="proj__hr" />
        </div>
      ))}
    </>
  );
};

export default Desktop;
