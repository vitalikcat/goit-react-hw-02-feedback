import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={styles.ul}>
    <li className={styles.li}>Good: {good}</li>
    <li className={styles.li}>Neutral: {neutral}</li>
    <li className={styles.li}>Bad: {bad}</li>
    <li className={styles.li}> Total: {total}</li>
    <li className={styles.li}>Positive feedback: {positivePercentage}%</li>
  </ul>
);

Statistics.defaultProps = {
  total: 0,
  positivePercentage: 0
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};

export default Statistics;
