export default function Background() {
  return (
    <div
      css={{
        position: "absolute",
        overflow: "hidden",
        width: "100%",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <svg
        width="100%"
        height="100vh"
        viewBox="0 0 1920"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3%"
          y="145%"
          width="580"
          height="580"
          rx="65"
          transform="rotate(-45)"
          fill="#EEEEF0"
        />
        <rect
          x="-5%"
          y="20%"
          width="1130"
          height="815"
          rx="65"
          transform="rotate(-45 -255 223)"
          fill="#FFC2BD"
        />
      </svg>
    </div>
  );
}
