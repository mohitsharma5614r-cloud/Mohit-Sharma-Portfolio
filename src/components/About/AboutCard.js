import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! 👋 I’m <span className="purple">Mohit Sharma</span> from
            <span className="purple"> Madhya Pradesh, India</span>.
            <br />
            I’m a passionate learner exploring the world of Computer Science, Artificial
            Intelligence, and Software Development.
            <br />
            I’ve completed my 12th (Higher Secondary Education) and I’m now focused on building a strong
            foundation in programming, data science, and modern AI technologies. My goal is to become a skilled
            AI Developer and create innovative tools that make people’s lives easier. 💻✨
          </p>

          <p style={{ textAlign: "justify" }}>
            Outside of coding, I love spending my time on things that keep me inspired and creative:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> 🎮 Playing Games – helps me stay sharp and think strategically.
            </li>
            <li className="about-activity">
              <ImPointRight /> ✍️ Writing & Learning about Tech – I enjoy sharing knowledge and exploring new technologies.
            </li>
            <li className="about-activity">
              <ImPointRight /> 🌍 Traveling & Exploring New Places – I believe creativity grows when you experience new things.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I’m always open to learning, collaborating, and working on exciting projects that push the boundaries of technology. 🚀"
          </p>
          <footer className="blockquote-footer">Mohit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
