import { Col, Container, Row } from "react-bootstrap";
import { CaretRight } from "react-bootstrap-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import react from "../assets/img/react.png";
import typescript from "../assets/img/typescript.png";
import github from "../assets/img/github.png";
import docker from "../assets/img/docker.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Habilidades</h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={react} alt="Image" />
                                    <h5>React & React Native</h5>
                                </div>
                                <div className="item">
                                    <img src={typescript} alt="Image" />
                                    <h5>TypeScript</h5>
                                </div>
                                <div className="item">
                                    <img src={github} alt="Image" />
                                    <h5>Github</h5>
                                </div>
                                <div className="item">
                                    <img src={docker} alt="Image" />
                                    <h5>Docker</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}