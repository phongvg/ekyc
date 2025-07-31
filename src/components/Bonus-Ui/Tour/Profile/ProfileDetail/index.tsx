import React from "react";
import { Row } from "reactstrap";
import ProfileFollower from "./ProfileFollower";

const ProfileDetail = () => {
  return (
    <div className="info">
      <Row>
        <ProfileFollower />
      </Row>
      <hr />
      <ProfileFollower />
    </div>
  );
};

export default ProfileDetail;
