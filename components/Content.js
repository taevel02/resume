import PropTypes from "prop-types";
import styles from "../styles/Content.module.css";

export default function Content(props) {
  const { title, period, major, description } = props;
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <h2 className={styles.period}>{period}</h2>
      <h2 className={styles.major}>{major}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

Content.propTypes = {
  title: PropTypes.string,
  period: PropTypes.string,
  major: PropTypes.string,
  description: PropTypes.string.isRequired,
};

Content.defaultProps = {
  title: "",
  period: "",
  major: "",
};
