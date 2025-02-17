import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    //  <div className="border-b border-neutral-900 pb-4">
    <div className=" pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-3xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a href={project.url} target="_blank">
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <a href={project.git} target="_blank">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
              </a>
              <p className="mb-4 text-neutral-500">{project.description}</p>
              {project.technologies.map((tech, idx) => (
                <span
                  className="mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-700"
                  key={idx}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
