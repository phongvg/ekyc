import CommonForm from "@/components/Others/authentication/common/CommonForm";
import { Col, Container, Row } from "reactstrap";

const SimpleLogin = () => {
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs={12} className="p-0">
          <CommonForm alignLogo="text-start" />
        </Col>
      </Row>
    </Container>
  );
};

export default SimpleLogin;
