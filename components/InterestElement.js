import PropTypes from "prop-types";

export default function InterestElement(props) {
  const { name, icon } = props;
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <i
        css={{
          fontSize: "32px",
        }}
        className={icon}
      />
      <h3
        css={{
          margin: "8px 0",
        }}
      >
        {name}
      </h3>
    </div>
  );
}

InterestElement.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
