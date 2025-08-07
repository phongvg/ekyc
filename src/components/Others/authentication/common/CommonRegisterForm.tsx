import Link from "next/link";
import { commonFormPropsType } from "./CommonForm";
import {
  AgreeWith,
  CreateAccount,
  CreateYourAccount,
  EmailAddress,
  EnterYourPersonalDetails,
  FacebookHeading,
  HaveAccount,
  Href,
  Password,
  PrivacyPolicy,
  SignIn,
  SignUpWith,
  TwitterHeading,
  YourName,
  linkedInHeading,
} from "utils/Constant";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { useState } from "react";
import { Facebook, Linkedin, Twitter } from "react-feather";
import CommonLogo from "./CommonLogo";

const CommonRegisterForm = ({ alignLogo }: commonFormPropsType) => {
  const [showPassWord, setShowPassWord] = useState(false);

  return (
    <div className='login-card login-dark'>
      <div>
        <div>
          <CommonLogo alignLogo={alignLogo} />
        </div>
        <div className='login-main'>
          <form className='theme-form' onSubmit={(event) => event.preventDefault()}>
            <h4>Tạo tài khoản</h4>
            <p>Vui lòng nhập thông tin của bạn</p>
            <FormGroup>
              <Label className='col-form-label pt-0'>Họ và tên</Label>
              <Row className='g-2'>
                <Col xs={6}>
                  <Input type='text' required placeholder='Họ và tên đệm' />
                </Col>
                <Col xs={6}>
                  <Input type='text' required placeholder='Tên' />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Label className='col-form-label'>Email</Label>
              <Input type='email' required placeholder='Test@gmail.com' />
            </FormGroup>
            <FormGroup>
              <Label className='col-form-label'>Mật khẩu</Label>
              <div className='form-input position-relative'>
                <Input type={showPassWord ? "text" : "password"} placeholder='*********' required />
                <div className='show-hide'>
                  <span onClick={() => setShowPassWord(!showPassWord)} className={!showPassWord ? "show" : ""} />
                </div>
              </div>
            </FormGroup>
            <FormGroup className='mb-0'>
              <Button color='primary' className='btn-block w-100'>
                Tạo tài khoản
              </Button>
            </FormGroup>

            <p className='mt-4 mb-0'>
              Bạn đã có tài khoản?
              <Link className='ms-2' href='/authentication/login'>
                Đăng nhập
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommonRegisterForm;
