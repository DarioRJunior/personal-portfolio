import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import chatgpt3 from "../assets/img/chat-gpt3.png";
import andamento from "../assets/img/em-andamento.png";
import  encurtaLink from "../assets/img/encurtar-link.png";
export const Projects = () => {

    const projects = [
        {
            title: "Chat Gpt-3",
            description: "Design & Desenvolvimento",
            imgUrl: chatgpt3,
            link: "https://landing-page-chat-gpt3.vercel.app/",
            codigo: "https://github.com/DarioRJunior/Landing-page-Chat-gpt3"
        },
        {
            title: "Encurtador de Link",
            description: "Deisgn e Desenvolvimento",
            imgUrl: encurtaLink,
            link: "https://encurtalink.vercel.app/",
            codigo: "https://github.com/DarioRJunior/encurtador-de-link"
        },
        {
            title: "Em Andamento",
            description: "Em Andamento",
            imgUrl: andamento,
            link: "https://github.com/DarioRJunior",
            codigo: "https://github.com/DarioRJunior"
        },
        {
            title: "Em Andamento",
            description: "Em Andamento",
            imgUrl: andamento,
            link: "https://github.com/DarioRJunior",
            codigo: "https://github.com/DarioRJunior"
        },
        {
            title: "Em Andamento",
            description: "Em Andamento",
            imgUrl: andamento,
            link: "https://github.com/DarioRJunior",
            codigo: "https://github.com/DarioRJunior"
        },
        {
            title: "Em Andamento",
            description: "Em Andamento",
            imgUrl: andamento,
            link: "https://github.com/DarioRJunior",
            codigo: "https://github.com/DarioRJunior"
        },
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projetos</h2>
                        <p>Aqui você encontra alguns dos projetos que eu criei!</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav> */}
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} link={project.link} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                {/* <Tab.Pane eventKey="second">Teste 2</Tab.Pane>
                                <Tab.Pane eventKey="third">Teste 3</Tab.Pane> */}
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}