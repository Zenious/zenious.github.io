// Gatsby supports TypeScript natively!
import React from "react"

import SEO from "../components/seo"

import Logo from "../images/logo-inverted.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPython } from "@fortawesome/free-brands-svg-icons"
import { faJava } from "@fortawesome/free-brands-svg-icons"
import { faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { faAws } from "@fortawesome/free-brands-svg-icons"

const IndexPage = () => (
  <>
    <SEO title="Hello World" />
    <div
      style={{
        backgroundColor: "#50514F",
        padding: "0.25rem",
      }}
    >
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "0 5%",
          color: "#ececec",
        }}
      >
        <h1
          style={{
            padding: "1rem",
            textAlign: "center",
            marginBottom: 0,
            paddingBottom: '0.5rem'
          }}
        >
           <a
            href="/"><img src={Logo} style={{ marginBottom: 0 }}></img></a>
          <br />
          {/* HELLO WORLD */}
        </h1>
        <h3 style={{ marginBottom: "0.5rem", textAlign: "center" }}>
          <a
            href="/"
            style={{
              color: "#ececec",
            }}
          >
            Hello World
          </a>{" "}
          |{" "}
          <a
            href="/blog"
            style={{
              color: "#ececec",
            }}
          >
            Blog
          </a>
        </h3>
        <hr></hr>

        <h2>Hi There</h2>
        <p>
          I'm Zheng Wei, graduated in Bachelor of Computing (Computer Science) at
          NUS, Singapore. <br />I have strong interest in DevOps & Security
          related topics. Feel free to contact me!
        </p>
        <hr />
        <h2>Education</h2>
        <p>
          National University of Singapore <br /> 2017-2021
          <br /> B.Comp in Computer Science
        </p>
        <p>
          Concordia University <br /> Jan'19 - May'19 <br /> Oversea Winter
          Student Exchange Programme
        </p>
        <p>
          Singapore Management of Singapore <br /> Aug'19 - Dec'19 <br />{" "}
          Singapore University Student Exchange Programme (Partial){" "}
        </p>
        <p>
          Singapore Polytechnic <br /> 2012-2015 <br /> Dip in Infocomm.
          Security Management (Merit)
        </p>
        <hr />
        <h2>Work Experience</h2>
        <p>* For most updated information, refer to LinkedIn</p>
        <p>
          M1 Limited <br /> Jan'21 - Present <br />{" "}
          System Analyst
        </p>
        <p>
          National University of Singapore <br /> Aug'20 - Dec'20 <br />{" "}
          Undergraduate Teaching Assistant for CS3203, CS3103
        </p>
        <p>
          NodeFlair <br /> Oct'19 - Dec'19 <br /> Software Engineering Intern
        </p>
        <p>
          National University of Singapore <br /> Aug'19 - Dec'19 <br />{" "}
          Undergraduate Teaching Assistant
        </p>
        <p>
          M1
          <br /> May'19 - Aug'19
          <br /> Software Development Intern
        </p>
        <p>
          Jewel Paymentech
          <br /> Oct'14 - Sep'15 <br /> Associate Developer
        </p>
        <hr />
        <h2>Tech Languages Known</h2>
        <p>
          Proficient: <FontAwesomeIcon icon={faPython} />{" "}
          <FontAwesomeIcon icon={faJava} /> <FontAwesomeIcon icon={faNodeJs} />{" "}
        </p>
        <p> Good to get by: C++</p>
        <hr />
        <h2>Projects</h2>
        <p>
          UnderstandNot: Your Video-Captioning Solution <br />
          Python Web App thats provides a platform for students to obtain
          subtitles for videos and edit the respective subtitles accordingly. It
          deploy AWS Transcribe as the main engine to caption the video. The
          application was then hosted with AWS EC2.
          <br />
          Tech Stack: <FontAwesomeIcon icon={faPython} />{" "}
          <FontAwesomeIcon icon={faAws} />{" "}
        </p>
        <p>
          IDA-SAI: A Framework for Search Based Malware Analysis <br />
          Product of Final Year Project in Singapore Polytechnic in corporation
          with DSO. Plugin to simplify the process and introduce alternative way
          to perform static analysis on malware.
          <br />
          Tech Stack: <FontAwesomeIcon icon={faPython} />{" "}
        </p>
        <hr />
        <h2>Media Spotlight</h2>
        <p>
          <li>
            <a
              href="https://www.comp.nus.edu.sg/news/3137-2019-bug-bounty/"
              style={{
                color: "#ececec",
              }}
            >
              NUS Bug Bounty Challenge 2019
            </a>
          </li>
        </p>
        <hr />
        <h2>Contact Me</h2>
        <p>
          <li>
            <a
              href="https://www.linkedin.com/in/koh-zheng-wei/"
              style={{
                color: "#ececec",
              }}
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="mailto: contact@kohzw.com"
              style={{
                color: "#ececec",
              }}
            >
              E-Mail
            </a>
          </li>
          <li>
            <a
              href="https://github.com/zenious"
              style={{
                color: "#ececec",
              }}
            >
              Github
            </a>
          </li>
        </p>
        <hr />
      </div>
    </div>
    <footer
      style={{
        margin: "0 auto",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "0 5%",
          color: "#ececec",
          textAlign: "right",
        }}
      >
        {" "}
        © {new Date().getFullYear()}, Built with
        {` `}
        <a
          href="https://www.gatsbyjs.org"
          style={{
            color: "#ececec",
          }}
        >
          Gatsby
        </a>
      </div>
    </footer>
  </>
)

export default IndexPage
