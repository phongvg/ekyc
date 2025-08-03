import React, { useState } from "react";
import { FilePond } from "react-filepond";
import { Button, Col, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";

type Props = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

export default function DeepSearchModal({ isOpen, setOpen }: Props) {
  const [files, setFiles] = useState([]);
  const toggle = () => setOpen(!isOpen);

  return (
    <Modal isOpen={isOpen} toggle={toggle} size='lg'>
      <ModalHeader toggle={toggle}>Nhập thông tin tìm kiếm</ModalHeader>
      <ModalBody>
        <form>
          <Row>
            <Col className='mb-3' md={6}>
              <FormGroup floating>
                <Input type='text' placeholder='' />
                <Label>CCCD/CMND</Label>
              </FormGroup>
            </Col>
            <Col className='mb-3' md={6}>
              <FormGroup floating>
                <Input type='text' placeholder='' />
                <Label>Mã hồ sơ</Label>
              </FormGroup>
            </Col>
            <Col md={12}>
              <FilePond
                files={files}
                onupdatefiles={() => setFiles}
                allowMultiple={true}
                allowImagePreview={false}
                maxFiles={5}
                labelIdle={'Nhấn hoặc thả vào để <span class="filepond--label-action text-danger text-decoration-none">Tải lên</span>'}
              />
            </Col>
          </Row>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color='secondary' outline onClick={toggle}>
          Hủy
        </Button>{" "}
        <Button color='secondary' onClick={toggle}>
          Áp dụng
        </Button>
      </ModalFooter>
    </Modal>
  );
}
