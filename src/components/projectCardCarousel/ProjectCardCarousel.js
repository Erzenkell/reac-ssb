import React from 'react'
import { Card, Carousel, Button } from "react-bootstrap";
import "./ProjectCardCarousel.css";

const ProjectList = [
    {
        title: "Who got Next?",
        imgSrc: require("../../assets/projects/project-whogotnext.png"),
        imgDesc: "",
        text: "A school project made at the end of my 2nd year, it's a web app made with React and Firebase for the front. The main purpose of Who Got Next is to help people find a place were to play sport and people to play with.",
        link: "https://github.com/Hetic-web2-g1/Who_Got_Next"
    },
    {
        title: "Flamingo Bot",
        imgSrc: require("../../assets/projects/project-discord.png"),
        imgDesc: "",
        text: "A discord music and command bot made with discord.js, discord api is making a lot of changes so the bot is currently not working but I put a lot of effort into it.",
        link: "https://github.com/Erzenkell/Flamingo-bot"
    },
    {
        title: "Masterclass catalog for Saline Royale Academy",
        imgSrc: require("../../assets/projects/project-academy.png"),
        imgDesc: "",
        text: "A school project made at the end of my 3rd year, it's a web app made with React and Python. The main purpose of this project was to provide a Back-office for Masterclass production for the Saline Royale Academy.",
        link: "https://github.com/Hetic-web3-g1/PROJET_FIL_ROUGE_W3_G4"
    }
]

const ProjectCardCarousel = () => {
    return(
        <Carousel interval={2500} indicators={false} pause='hover'>
            { ProjectList.map(Project => (
            <Carousel.Item>
                <Card className="bg-dark text-white">
                    <Card.Img src={Project.imgSrc} alt="test1" className="project-img"/>
                    <Card.ImgOverlay>
                        <Card.Title>{Project.imgDesc}</Card.Title>
                    </Card.ImgOverlay>
                    <Card.Body className="text-center" style={{ zIndex: "100" }}>
                        <Card.Title>{Project.title}</Card.Title>
                        <Card.Text>
                            {Project.text}
                        </Card.Text>
                        <Button variant="primary" href={Project.link}>Project repo</Button>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ProjectCardCarousel;