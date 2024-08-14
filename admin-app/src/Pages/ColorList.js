import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getColors } from "../features/color/colorSlice";
import Link from "antd/es/typography/Link";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const columns = [
  {
    title : "Sno",
    dataIndex :"key",
  },
  {
    title: "Title",
    dataIndex: "title",
    // sorter: (a, b) => a.title.length - b.title.length
  },  
  {
    title: "Action",
    dataIndex: "action"
  }, 
];


const ColorList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getColors());
  }, []);
  const colorState = useSelector((state) => state.color.color);

  const data1 = [];

for(let i = 0 ; i< colorState.length; i++){
  data1.push({
    key: i + 1, 
    title:colorState[i].title ,
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
      Colors
    </h3>
    <div>
      <Table columns = {columns} dataSource={data1} />
    </div>
  </div>
  )
}

export default ColorList