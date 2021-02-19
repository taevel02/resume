import Background from "../components/Background";
import Content from "../components/Content";
import InterestElement from "../components/InterestElement";
import LanguegeElement from "../components/LanguageElement";

export default function Home() {
  return (
    <div>
      <Background />
      <div
        css={{
          position: "relative",
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 0.5rem",
        }}
      >
        <Content
          title="catholic kwandong university"
          period="2021-currently"
          major="computer education"
          description="hello"
        />
        <Content description="test" />
        <InterestElement icon="fas fa-headphones-alt" name="music" />
        <LanguegeElement name="javascript" percentage="160px" />
      </div>
    </div>
  );
}
