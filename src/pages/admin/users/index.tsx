import React, { useState } from "react";
import Breadcrumbs from "CommonElements/Breadcrumbs";
import { Button, Card, Input, Table } from "reactstrap";
import usersMockData from "mocks/users.json";
import Image from "next/image";
import { ImgPath } from "utils/Constant";
import AddUserModal from "@/components/modals/AddUserModal";

export default function Users() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);

  return (
    <>
      <div className='page-body'>
        <Breadcrumbs title='Khách hàng' mainTitle='Danh sách Khách hàng' parent='Trang chủ' />
        <Card className='p-3'>
          <div className='d-flex gap-2 justify-content-between'>
            <div className='search-box w-25'>
              <Input type='search' placeholder='Tìm kiếm theo tên KH...' />
            </div>
            <Button
              color='primary'
              onClick={() => {
                setOpen(true);
                setUser(null);
              }}>
              Thêm mới khách hàng
            </Button>
          </div>
        </Card>
        <Card className='p-3'>
          <div className='table-responsive'>
            <Table>
              <thead>
                <tr>
                  <th scope='col'>Ảnh đại diện</th>
                  <th scope='col'>Họ và tên</th>
                  <th scope='col'>CCCD</th>
                  <th scope='col'>Ngày sinh</th>
                  <th scope='col'>Tag</th>
                  <th scope='col'>Ngày tạo</th>
                  <th scope='col'>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {usersMockData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <Image width={60} height={60} className='img-60 me-2' src={`${ImgPath}/user/${item.avatar}`} alt='imagese' />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.identification}</td>
                    <td>{item.dob}</td>
                    <td>
                      <div className={`badge ${item.tag === "Blacklist" ? "badge-light-danger" : "badge-light-success"}`}>{item.tag}</div>
                    </td>
                    <td>{item.createdAt}</td>
                    <td>
                      <ul className='action'>
                        <li
                          className='edit'
                          onClick={() => {
                            setUser(item);
                            setOpen(true);
                          }}>
                          <a href='#'>
                            <i className='icon-pencil-alt' />
                          </a>
                        </li>
                        <li className='delete'>
                          <a href='#'>
                            <i className='icon-trash' />
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card>
      </div>

      <AddUserModal isOpen={isOpen} setOpen={setOpen} user={user} />
    </>
  );
}
