import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import collegeguru from '../../Assets/Projects/collegeguru.png';
import BookStore from '../../Assets/Projects/bookstore.png';
import nxttrendz from '../../Assets/Projects/nxttrendz.png';
import techritz from '../../Assets/Projects/techritz.png'
import Placement from '../../Assets/Projects/placement.png'

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
              imgPath={Placement}
              isBlog={false}
              title="Placement Portal for College"
              description="Description: Developed a comprehensive placement portal catering to four distinct user roles: Admin, Employee, Alumni, and Student, each with customized features and access control.
Key Features:
Admin: Manage user roles, monitor job postings, oversee portal activity, and generate analytics.
Employee: Post job opportunities, track applications, and manage recruitment processes.
Alumni: Share success stories, provide career advice, and engage with current students.
Student: Access job updates, interact with a chatbot for career guidance, take mock tests, evaluate resumes with an ATS scoring system, stay informed about the latest industry trends, and read inspiring alumni stories.
"
              ghLink="https://github.com/navya1220/placement-portal-backend"
              demoLink="https://placement-portal-zeta.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BookStore}
              isBlog={false}
              title="Bookstore"
              description="Developed a full-stack bookstore website using React for a responsive front-end and Node.js with Express for server-side CRUD operations. MongoDB ensures efficient book data storage and retrieval. The platform allows users to seamlessly add, edit, delete, and view book details, providing an interactive and user-friendly experience."
              ghLink="https://github.com/navya1220/Bookstore"
              demoLink="https://bookstore-3bpe.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nxttrendz}
              isBlog={false}
              title="Nxt Trendz"
              description="Developed Nxt Trendz, an innovative e-commerce platform inspired by Amazon and Flipkart. Designed interactive pages for login, products using React Router and components. Implemented user security with JWT tokens, REST API calls, ensuring robust authorization and authentication. Technologies used include React.js, CSS, Bootstrap."
              demoLink="https://nxttrendz2023.ccbp.tech/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={collegeguru}
              isBlog={false}
              title="College Guru"
              description="Worked on the College Guru project, handling both frontend and backend development using React.js, Node.js, and MongoDB. Designed responsive interfaces, developed APIs, managed database schemas, and implemented server-side logic to enhance functionality and optimize performance."
              ghLink="https://github.com/jagritisinghAgh/AGH-CollegeGuru/tree/navya-collegeGuru"       
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techritz}
              isBlog={false}
              title="TechRitz2023"
              description="Developed a website for a college tech fest to streamline event registration
process- Utilized frontend technologies such as React.js to design and build the
website- Incorporated sections for event details, about information, contact
details"
    
                demoLink="https://techritz2023.ccbp.tech"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
