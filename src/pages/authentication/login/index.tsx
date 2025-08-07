import CommonLogo from "@/components/Others/authentication/common/CommonLogo";
import { Col, Container, Row } from "reactstrap";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { Facebook, Linkedin, Twitter } from "react-feather";
import { Button, FormGroup, Input, Label } from "reactstrap";
import {
  CreateAccount,
  DoNotAccount,
  EmailAddress,
  EnterEmailPasswordLogin,
  FacebookHeading,
  ForgotPassword,
  Password,
  RememberPassword,
  SignIn,
  SignInAccount,
  SignInWith,
  TwitterHeading,
  linkedInHeading,
} from "utils/Constant";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "user@gmail.com",
    password: "123456",
  });
  const { email, password } = formValues;
  const router = useRouter();
  const handleUserValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  const formSubmitHandle = (event: FormEvent) => {
    event.preventDefault();
    if (email === "user@gmail.com" && password === "123456") {
      Cookies.set("token", JSON.stringify(true));
      Cookies.set("role", "USER");
      router.push("/ekyc");
      toast.success("login successful");
    } else if (email === "admin@gmail.com" && password === "123456") {
      Cookies.set("token", JSON.stringify(true));
      Cookies.set("role", "ADMIN");
      router.push("/admin/deep-search");
      toast.success("login successful");
    } else {
      toast.error("wrong");
    }
  };

  return (
    <Container fluid className='p-0'>
      <Row className='m-0'>
        <Col xs={12} className='p-0'>
          <div className='login-card login-dark'>
            <div>
              <div className='login-main'>
                <form className='theme-form' onSubmit={formSubmitHandle}>
                  <h4>Đăng nhập tài khoản</h4>
                  <p>Vui lòng nhập email và mật khẩu của bạn</p>
                  <FormGroup>
                    <Label className='col-form-label'>Email</Label>
                    <Input type='email' required placeholder='Test@gmail.com' value={email} name='email' onChange={handleUserValue} />
                  </FormGroup>
                  <FormGroup>
                    <Label className='col-form-label'>Mật khẩu</Label>
                    <div className='form-input position-relative'>
                      <Input
                        type={showPassWord ? "text" : "password"}
                        placeholder='*********'
                        onChange={handleUserValue}
                        value={password}
                        name='password'
                      />
                      <div className='show-hide'>
                        <span onClick={() => setShowPassWord(!showPassWord)} className={!showPassWord ? "show" : ""} />
                      </div>
                    </div>
                    <div className='text-end mt-3'>
                      <Button color='primary' className='btn-block w-100' type='submit'>
                        Đăng nhập
                      </Button>
                    </div>
                  </FormGroup>
                  <p className='mt-4 mb-0 text-center'>
                    Chưa có tài khoản?
                    <Link className='ms-2' href='/pages/authentication/register-simple'>
                      Tạo tài khoản
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
