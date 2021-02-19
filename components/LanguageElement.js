import PropTypes from "prop-types";

export default function LanguageElement(props) {
  const { name, percentage } = props;
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
      }}
    >
      <h3
        css={{
          margin: "4px 0",
          fontFamily: "LeonSans-Light",
        }}
      >
        {name}
      </h3>
      <div
        css={{
          width: "210px",
          height: "4px",
          backgroundColor: "var(--pink-color)",
          borderRadius: "15px",
          marginBottom: "8px",
        }}
      >
        <div
          css={{
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: "var(--black-color)",
            borderRadius: "15px",
          }}
        />
      </div>
    </div>
  );
}

LanguageElement.propTypes = {
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
