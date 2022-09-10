import React from "react";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <div className="col d-flex justify-content-center my3">
      {["Info"].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "50rem" }}
          className=" mb-2"
        >
          <Card.Header>This is about Components</Card.Header>
          <Card.Body>
            <Card.Title>{variant} </Card.Title>
            <Card.Text>
              I am Rabiroshan Shubhankar author of this project . This is
              completely build wit React Js for styling we have used Bootsrap.
              In feature this about page will get an update.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default About;
