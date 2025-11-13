import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>Hi, I’m <span className="purple">Mohit Sharma</span></h1>
            <p className="home-about-body">
              Hi, I’m Mohit Sharma, a developer from India with a passion for Artificial Intelligence, Computer Science, and Data Science. I completed Class 12th in 2024. My key skills are in React, Node.js, Python, and building smart, scalable cloud solutions.
              <br />
              <br />
              I love creating practical projects—whether it’s in AI (Covedex AI), Data Science, or full stack app development (BuildFlow AI, Circleverse). Problem solving, teamwork, and continuous learning drive me.
              <br />
              <br />
              My goal is to grow as an engineer, working at the intersection of CSE, AI, and Data Science to build products that make a real impact.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
