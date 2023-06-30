import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import linkedin from "../assets/img/nav-icon1.svg";
import github from "../assets/img/github-icon.png";
import instagram from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <div className="container-mobile">
                            <div className="logo">
                                <img src={logo} alt="Logo" />
                            </div>
                        </div>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/dariocode/" target="_blank"><img src={linkedin} alt="Linkedin" /></a>
                            <a href="https://github.com/DarioRJunior" target="_blank"><img src={github} alt="Github" /></a>
                            <a href="https://www.instagram.com/dario_code/" target="_blank"><img src={instagram} alt="Instagram" /></a>
                        </div>
                        <p>Copyright {currentYear}. Dario_Code</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}