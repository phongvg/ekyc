import React from "react";
import { Button, Col, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";

type Props = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  user?: any;
};

export default function AddUserModal({ isOpen, setOpen, user }: Props) {
  const toggle = () => setOpen(!isOpen);

  return (
    <Modal isOpen={isOpen} toggle={toggle} size='xl'>
      <ModalHeader toggle={toggle}>Nhập thông tin Khách hàng</ModalHeader>
      <ModalBody>
        <form>
          <Row>
            <Col className='mb-3' md={6}>
              <FormGroup floating>
                <Input type='text' defaultValue={user?.name} placeholder='' />
                <Label>Họ và tên</Label>
              </FormGroup>
            </Col>
            <Col className='mb-3' md={6}>
              <FormGroup floating>
                <Input type='text' defaultValue={user?.identification} placeholder='' />
                <Label>CCCD</Label>
              </FormGroup>
            </Col>
          </Row>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color='secondary' outline onClick={toggle}>
          Hủy
        </Button>{" "}
        <Button color='secondary' onClick={toggle}>
          Lưu
        </Button>
      </ModalFooter>
    </Modal>
  );
}
