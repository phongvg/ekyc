import React from "react";
import { Card, Col } from "reactstrap";
import ProfileDetail from "./ProfileDetail";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  return (
    <Col sm={12}>
      <Card className="hovercard text-center">
        <ProfileDetail />
      </Card>
    </Col>
  );
};

export default Profile;
