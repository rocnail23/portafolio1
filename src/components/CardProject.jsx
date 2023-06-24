import React from "react";
import { motion } from "framer-motion";

const CardProject = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-50px" }}
      className="card"
    >
      <h4 className="card_title">{project.name}</h4>
      <div className="card_img">
        <img src={project.image} />
        <span>
          <button>
            <a href={project.linkRepo} target="_blank">
              respositorio
            </a>
          </button>
          <button>
            <a href={project.linkWeb} target="_black">
              web
            </a>
          </button>
        </span>
      </div>
      <p>{project.description}</p>
    </motion.div>
  );
};

export default CardProject;
