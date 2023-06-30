import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl, link, codigo }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <a href={link} target="_blank">Ver Projeto</a>
                    <a href={codigo} target="_blank">Ver Código</a>
                </div>
            </div>
        </Col>
    )
}