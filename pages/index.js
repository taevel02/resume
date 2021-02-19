import { css } from "@emotion/react";
import Background from "../components/Background";
import Content from "../components/Content";
import InterestElement from "../components/InterestElement";
import LanguegeElement from "../components/LanguageElement";
import contacts from "../data/contacts";
import education from "../data/education";
import experience from "../data/experience";
import interests from "../data/interests";
import languages from "../data/languages";

const skills = [
  "react.js",
  "vue.js",
  "node.js",
  "webpack",
  "mysql",
  "rxswift",
  "swiftui",
  "quick",
  "fastlane",
];

export default function Home() {
  return (
    <div>
      <Background />

      <div
        css={{
          position: "relative",
          display: "flex",
          minHeight: "100%",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 0.5rem",
        }}
        className="container"
      >
        <div css={{ margin: "56px 0 24px 0" }} className="title-section">
          <div
            css={{
              fontFamily: "LeonSans-Bold",
              fontSize: "64px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
            className="fullname"
          >
            taehoon kwon
          </div>
          <div
            css={{
              fontSize: "18px",
              textTransform: "capitalize",
            }}
            className="role"
          >
            developer · educator · writer
          </div>
        </div>

        <div
          css={{
            position: "relative",
            left: "8%",
            display: "flex",
            flexDirection: "row",
          }}
          className="resume"
        >
          <div css={{ width: "420px" }} className="left-section">
            <div css={{ marginBottom: "32px" }} className="about">
              <h1 css={{ marginBottom: "8.080px" }}>about</h1>
              <Content
                description="I want to live as a developer, educator, and writer.
                            I hear a lot about being mature, but I'm trying to be more mature.
                            I'm still immature, so I'm always trying not to get immature."
                width="250px"
              />
            </div>
            <div className="experience">
              <h1>experience</h1>
              {experience.map((project, i) => {
                if (i <= 2) {
                  return (
                    <div
                      css={css`
                        position: relative;
                        display: flex;
                        margin-bottom: 1.6rem;

                        &:not(:last-child)::before {
                          position: absolute;
                          top: 1.3em;
                          left: 0.21em;
                          width: 0.3px;
                          height: 100%;
                          background-color: var(--black-color);
                          content: "";
                        }
                      `}
                      className="project"
                    >
                      <div
                        css={css`
                          flex: 0 0 auto;
                          padding-top: 0.4em;
                          color: var(--white-color);
                          font-size: 8px;
                        `}
                        className="icon"
                      >
                        <i className="fas fa-circle" />
                      </div>
                      <div
                        css={css`
                          flex: 1 1 auto;
                          padding: 0 0 0.2rem 1.5rem;
                        `}
                        className="content"
                      >
                        <Content
                          title={project.name}
                          period={project.period}
                          major={project.role}
                          description={project.description}
                          width="280px"
                        />
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <div
              css={{
                display: "flex",
                flexDirection: "column",
              }}
              className="interest"
            >
              <h1>interest</h1>
              <div
                css={{
                  display: "flex",
                  width: "300px",
                  flexWrap: "wrap",
                }}
              >
                {interests.map((interest) => {
                  return (
                    <InterestElement
                      icon={interest.icon}
                      name={interest.text}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div css={{ width: "420px" }} className="right-section">
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "48px",
              }}
              className="contact"
            >
              <h1>contact</h1>
              {contacts.map((contact) => {
                return (
                  <a css={{ margin: "2px 0" }} href={contact.href}>
                    {contact.text}
                  </a>
                );
              })}
            </div>

            <div css={{ marginBottom: "40px" }} className="education">
              <h1>education</h1>
              <Content
                title={education[0].name}
                period={education[0].period}
                major={education[0].major}
                description={education[0].description}
                width="260px"
              />
            </div>

            <div css={{ marginBottom: "40px" }} className="languages">
              <h1>languages</h1>
              {languages.map((lang) => {
                return (
                  <LanguegeElement
                    name={lang.text}
                    percentage={lang.proficiency}
                  />
                );
              })}
            </div>

            <div className="skill">
              <h1>skills</h1>
              <div
                css={{
                  display: "flex",
                  width: "250px",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {skills.map((skill) => {
                  return <p css={{ margin: 0 }}>{skill}&nbsp;&nbsp;</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
