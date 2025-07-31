import BordersWithIcons from "@/components/Forms/Widget/Switch/BordersWithIcons";
import CustomSwitch from "@/components/Forms/Widget/Switch/CustomSwitch";
import DisabledOutlineSwitch from "@/components/Forms/Widget/Switch/DisabledOutlineSwitch";
import IconsSwitch from "@/components/Forms/Widget/Switch/IconsSwitch";
import SwitchSizing from "@/components/Forms/Widget/Switch/SwitchSizing";
import SwitchWithIcons from "@/components/Forms/Widget/Switch/SwitchWithIcons";
import UncheckedSwitch from "@/components/Forms/Widget/Switch/UncheckedSwitch";
import VariationOfSwitches from "@/components/Forms/Widget/Switch/VariationOfSwitches";
import Breadcrumbs from "CommonElements/Breadcrumbs";
import { Container, Row } from "reactstrap";
import { SwitchHeading, FormWidgetsHeading } from "utils/Constant";

const Switch = () => {
  return (
    <div className="page-body">
      <Breadcrumbs
        mainTitle={SwitchHeading}
        parent={FormWidgetsHeading}
        title={SwitchHeading}
      />
      <Container fluid={true}>
        <Row>
          <CustomSwitch />
          <IconsSwitch />
          <UncheckedSwitch/>
          <BordersWithIcons/>
          <DisabledOutlineSwitch/>
          <VariationOfSwitches/>
          <SwitchSizing/>
          <SwitchWithIcons/>
        </Row>
      </Container>
    </div>
  );
};

export default Switch;
