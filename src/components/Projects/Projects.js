import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import dataScienceImg from "../../Assets/Projects/data science.png";
import covedex from "../../Assets/Projects/Covedex.png";
import suicide from "../../Assets/Projects/suicide.png";
import buildflowImg from "../../Assets/Projects/buildflow.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covedex}
              isBlog={false}
              title="Covedex AI"
              description="COVEDEx AI is a full-stack AI platform that integrates LLM-based text generation, code assistance, image generation APIs, and 60+ developer & productivity tools. It is built using TypeScript, React, Node, and cloud-based AI APIs to deliver fast, scalable, and user-friendly AI workflows."
              ghLink="https://github.com/mohitsharma5614r-cloud/Covedex-AI.git"
              demoLink="https://covedex-ai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buildflowImg}
              isBlog={false}
              title="Buildflow"
              description="BuildFlow AI FullStack Builder is an intelligent platform that automates full-stack development. From designing responsive frontends to managing robust backends and databases, it leverages AI to accelerate project creation, optimize code quality, and streamline deployment—empowering developers to build scalable applications effortlessly."
              ghLink="https://github.com/mohitsharma5614r-cloud/buildflow.git"
              demoLink="https://buildflow-pi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataScienceImg}
              isBlog={false}
              title="AI Data Science Platform"
              description="A fully autonomous AutoML platform that transforms any CSV into complete machine learning insights. It performs automated EDA, feature engineering, multi-model training, evaluation, visualizations, and generates a professional PDF report using production-grade data science workflows"
              ghLink="https://github.com/mohitsharma5614r-cloud/AI-Data-Science-Platform.git"
              demoLink="https://mohitsharma5614r-cloud.github.io/AI-Data-Science-Platform/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CircleVerse"
              description="CircleVerse is an AI-powered social networking platform that allows users to create private digital circles for real-world communities such as family, friends, and work teams. Built with Next.js 15, Firebase, and Google’s Gemini AI, it offers secure authentication, real-time chat, personalized feeds, and intelligent AI features like conversation summaries and event recommendations. The platform focuses on privacy, collaboration, and meaningful online connections through a clean and responsive UI."
              ghLink="https://github.com/mohitsharma5614r-cloud/CircleVerse.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="ToolsGalaxy"
              description="ToolsGalaxy is a collection of 1000+ AI-powered and utility tools built for students, developers, and creators. It includes AI image generation, text utilities, PDF tools, converters, editors, and productivity utilities — all designed with clean UI, fast performance, and modern web technologies"
              ghLink="https://github.com/mohitsharma5614r-cloud/toolsgalaxy.git"
              demoLink="https://toolsgalaxy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
