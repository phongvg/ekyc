import EmailVerification from "@/components/Forms/Layout/TwoFactor/EmailVerification";
import TwoFactorAuthentication from "@/components/Forms/Layout/TwoFactor/TwoFactorAuthentication";
import VerificationCode from "@/components/Forms/Layout/TwoFactor/VerificationCode";
import Breadcrumbs from "CommonElements/Breadcrumbs";
import { Container, Row } from "reactstrap";
import {   FormWizardHeading,  TwoFactorHeading } from "utils/Constant";

const TwoFactor = () => {
  return (
    <div className="page-body">
      <Breadcrumbs
        mainTitle={TwoFactorHeading}
        parent={FormWizardHeading}
        title={TwoFactorHeading}
      />
      <Container fluid={true}>
        <Row>
          <TwoFactorAuthentication/>
          <EmailVerification/>
        </Row>
      </Container>
    </div>
  );
};

export default TwoFactor;
