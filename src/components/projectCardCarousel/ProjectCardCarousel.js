import React from 'react'
import { Card, Carousel, Button } from "react-bootstrap";

const ProjectList = [
    {
        title: "Test 1",
        imgSrc: require("../../assets/kirbok.jpg"),
        imgDesc: "test1",
        text: "project language and content",
    },
    {
        title: "Test 2",
        imgSrc: require("../../assets/kirbok.jpg"),
        imgDesc: "test2",
        text: "project language and content",
    },
    {
        title: "Test 3",
        imgSrc: require("../../assets/kirbok.jpg"),
        imgDesc: "test3",
        text: "project language and content",
    },
]

const ProjectCardCarousel = () => {
    return(
        <Carousel>
            { ProjectList.map(Project => (
            <Carousel.Item>
                <Card className="bg-dark text-white">
                    <Card.Img src={Project.imgSrc} alt="test1" />
                    <Card.ImgOverlay>
                        <Card.Title>{Project.imgDesc}</Card.Title>
                    </Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>{Project.title}</Card.Title>
                        <Card.Text>
                            {Project.text}
                        </Card.Text>
                        <Button variant="primary">Project repo</Button>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ProjectCardCarousel;