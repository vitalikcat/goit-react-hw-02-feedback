import React from "react";
import styles from "./Section.module.css";
import PropTypes from "prop-types";

const Section = ({ title, children }) => (
  <section>
    <h2 className={styles.h2}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};

export default Section;
