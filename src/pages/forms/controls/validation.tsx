import BrowserDefault from "@/components/Forms/Control/FormValidation/BrowserDefault";
import TooltipFormValidation from "@/components/Forms/Control/FormValidation/TooltipFormValidation";
import ValidationForm from "@/components/Forms/Control/FormValidation/ValidationForm";
import Breadcrumbs from "CommonElements/Breadcrumbs";
import { Container, Row } from "reactstrap";
import { ValidationFormHeading, FormControlsHeading } from "utils/Constant";

const FormValidation = () => {
  return (
    <div className="page-body">
      <Breadcrumbs
        mainTitle={ValidationFormHeading}
        parent={FormControlsHeading}
        title={ValidationFormHeading}
      />
      <Container fluid={true}>
        <Row>
          <TooltipFormValidation />
          <BrowserDefault />
          <ValidationForm/>
        </Row>
      </Container>
    </div>
  );
};

export default FormValidation;
