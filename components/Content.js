import PropTypes from "prop-types";

export default function Content(props) {
  const { title, period, major, description, width } = props;
  return (
    <div
      css={{
        display: "flex",
        width,
        flexDirection: "column",
        justifyContent: "left",
      }}
    >
      <h2
        css={{
          margin: 0,
        }}
      >
        {title}
      </h2>
      <h2
        css={{
          margin: 0,
          fontFamily: "LeonSans-Thin",
        }}
      >
        {period}
      </h2>
      <h2
        css={{
          margin: 0,
          fontFamily: "LeonSans-Thin",
          textTransform: "capitalize",
        }}
      >
        {major}
      </h2>
      <p
        css={{
          margin: "8px 0",
        }}
      >
        {description}
      </p>
    </div>
  );
}

Content.propTypes = {
  title: PropTypes.string,
  period: PropTypes.string,
  major: PropTypes.string,
  description: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

Content.defaultProps = {
  title: "",
  period: "",
  major: "",
};
