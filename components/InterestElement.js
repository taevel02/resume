import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "../styles/InterestElement.module.css";

export default function InterestElement(props) {
  const { name, icon } = props;
  return (
    <div className={styles.container}>
      <i className={classNames({ [icon]: true, [styles.icon]: true })} />
      <h3 className={styles.name}>{name}</h3>
    </div>
  );
}

InterestElement.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
