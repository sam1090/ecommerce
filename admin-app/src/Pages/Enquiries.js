import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getEnquiry } from "../features/enquiry/enquirySlice";
import Link from "antd/es/typography/Link";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";


const columns = [
  {
    title : "Sno",
    dataIndex :"key",
  },
  {
    title: "Name",
    dataIndex: "name"
  }, 
  {
    title: "Email",
    dataIndex: "email"
  }, 
  {
    title: "Comment",
    dataIndex: "comment"
  }, 
  {
    title: "Date",
    dataIndex: "date"
  }, 
  {
    title: "Action",
    dataIndex: "action"
  }, 
];

const Enquiries = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEnquiry());
  }, []);
  const enquiryState = useSelector((state) => state.enquiry.enquiry);

  const data1 = [];

for(let i = 0 ; i< enquiryState.length; i++){
  data1.push({
    key: i + 1, 
    name:enquiryState[i].name ,
    email:enquiryState[i].email ,
    comment:enquiryState[i].comment ,
    date:enquiryState[i].createdAt ,
    action: (
      <>
        <Link to="/" className="fs-5">
          <BiEdit />
        </Link>
        <Link to="/" className="ms-3 fs-5 text-danger">
          <AiFillDelete />
        </Link>
      </>
    ),
    
  });
}
  return (
    <div>
      <h3 className="mb-4 title">
        Enquiries
      </h3>
      <div>
        <Table columns = {columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default Enquiries