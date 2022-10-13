import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <strong className="purple">Rahul Vishwakarma </strong>
            from <strong className="purple"> Goa, India.</strong>
            <br />I am a Computer Engineering student from Goa College Of Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading/Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work smart play hard!"{" "}
          </p>
          <footer className="blockquote-footer">Rahul SV</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
