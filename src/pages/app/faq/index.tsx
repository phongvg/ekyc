import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "CommonElements/Breadcrumbs";
import Questions from "@/components/Miscellaneous/faq/Questions";
import FAQFeaturesTutorial from "@/components/Miscellaneous/faq/FeaturesTutorial";
import ArticeVideo from "@/components/Miscellaneous/faq/ArticeVideo";
import Articals from "@/components/Miscellaneous/Knowledgebase/Articals";
import { FaqHeading } from "utils/Constant";

const Faq = () => {
  return (
    <div className="page-body">
      <Breadcrumbs title={FaqHeading} mainTitle={FaqHeading} parent={FaqHeading} />
      <Container fluid>
      <div className="faq-wrap">
        <Row>
          <Articals />
          <Questions />
          <FAQFeaturesTutorial />
          <ArticeVideo />
        </Row>
      </div>
    </Container>
    </div>
  );
};

export default Faq;
