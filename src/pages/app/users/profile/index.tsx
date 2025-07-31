import Breadcrumbs from "CommonElements/Breadcrumbs";
import { Users, UserProfile } from "utils/Constant";
import { Container, Row } from "reactstrap";
import Profile from "@/components/Bonus-Ui/Tour/Profile";

const UserProfiles = () => {
  return (
    <div className="page-body">
      <Breadcrumbs title={UserProfile} mainTitle={UserProfile} parent={Users} />
      <Container fluid>
        <div className="user-profile">
          <Row>
            <Profile />
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default UserProfiles;
