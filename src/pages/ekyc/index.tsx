import React, { useState } from "react";
import { eKyc, Home } from "utils/Constant";
import { Button, Card, Col, Row } from "reactstrap";
import Breadcrumbs from "CommonElements/Breadcrumbs";
import IDCardCapture from "@/components/eKYC/IDCardCapture";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function eKYC() {
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);
  const router = useRouter();

  const nextStep = () => {
    if (!frontImage) {
      return Swal.fire({ text: "Vui lòng chụp hoặc upload mặt trước CMND/CCCD", icon: "warning" });
    }
    if (!backImage) {
      return Swal.fire({ text: "Vui sách chụp hoặc upload mặt sau CMND/CCCD", icon: "warning" });
    }

    console.log({ frontImage, backImage });
  };

  return (
    <div className='page-body'>
      <Breadcrumbs title={eKyc} mainTitle='' parent='Trang chủ' />
      <Card className='p-3'>
        <div className='mb-3'>
          <h4 className='mb-2'>Thông tin khách hàng qua CCCD/CMND</h4>
          <p className='text-danger mb-1'>Hướng dẫn tải ảnh giấy tờ tuỳ thân:</p>
          <p className='text-danger mb-1'>1. Ảnh giấy tờ tuỳ thân phải là ảnh chụp trực tiếp, KHÔNG qua scan hoặc phần mềm chỉnh sửa ảnh.</p>
          <p className='text-danger mb-1'>2. Ảnh phải rõ nét, KHÔNG bị loá, mờ, cắt góc hoặc thiếu thông tin.</p>
        </div>

        <Row>
          <Col md='6'>
            <IDCardCapture title='Ảnh mặt trước CMND/CCCD' image={frontImage} onImageCaptured={setFrontImage} />
          </Col>
          <Col md='6'>
            <IDCardCapture title='Ảnh mặt sau CMND/CCCD' image={backImage} onImageCaptured={setBackImage} />
          </Col>
        </Row>
      </Card>

      <Card className='p-3'>
        <div className='d-flex gap-2 justify-content-end'>
          <Button color='primary' outline onClick={() => router.back()}>
            Quay lại
          </Button>
          <Button color='primary' onClick={nextStep}>
            Tiếp tục
          </Button>
        </div>
      </Card>
    </div>
  );
}
