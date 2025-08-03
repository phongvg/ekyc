import DeepSearchModal from "@/components/modals/DeepSearchModal";
import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useMemo, useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import usersMockData from "mocks/users.json";
import Image from "next/image";
import { ImgPath } from "utils/Constant";

export default function DeepSearch() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const users = useMemo(() => {
    return usersMockData.map((user) => ({
      ...user,
      similarity: Math.floor(Math.random() * 80) + 21,
    }));
  }, []);

  return (
    <>
      <div className='page-body'>
        <Breadcrumbs title={"Tìm kiếm nâng cao"} mainTitle='Tìm kiếm nâng cao' parent='Trang chủ' />
        <Card className='p-3'>
          <div className='d-flex gap-2 justify-content-start'>
            <Button color='primary' onClick={() => setOpen(true)}>
              Tìm kiếm
            </Button>
          </div>
        </Card>

        <Row>
          {users.map((item, index) => (
            <Col key={index} md={3} className='mb-3'>
              <Card>
                <CardHeader>
                  <h5>{item.name}</h5>
                </CardHeader>
                <div className='d-flex justify-content-center py-3'>
                  <div className='avatar'>
                    <Image className='img-100 rounded-circle' src={`${ImgPath}/user/${item.avatar}`} alt='#' width={100} height={100} />
                  </div>
                </div>
                <CardBody>
                  <ul className='list-group mb-2'>
                    <li className='list-group-item d-flex justify-content-between'>
                      <span className='fw-semibold'>CCCD/CMND:</span>
                      <span className='fw-bold'>{item.identification}</span>
                    </li>
                    <li className='list-group-item d-flex justify-content-between'>
                      <span className='fw-semibold'>Ngày sinh:</span>
                      <span className='fw-bold'>{item.dob}</span>
                    </li>
                    <li className='list-group-item d-flex justify-content-between'>
                      <span className='fw-semibold'>Mã hồ sơ</span>
                      <span className='fw-bold'>{item.identification}</span>
                    </li>
                  </ul>
                  <div className='fw-semibold mb-1'>Tỷ lệ tương đồng:</div>
                  <div className='progress'>
                    <div className='progress-bar bg-primary' role='progressbar' style={{ width: `${item.similarity}%` }}>
                      {item.similarity} %
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <DeepSearchModal isOpen={isOpen} setOpen={setOpen} />
    </>
  );
}
