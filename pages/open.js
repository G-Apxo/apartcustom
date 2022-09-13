import React from "react";
import { Container, Row } from "react-bootstrap";
import OpenPage from "../components/openpage/OpenPage";
const open = () => {
  return (
    <div>
      <Container>
        <Row>
          <OpenPage />
        </Row>
      </Container>
    </div>
  );
};
export default open;
