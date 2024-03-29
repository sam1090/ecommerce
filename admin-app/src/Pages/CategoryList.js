import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../features/pcategory/pcategorySlice';
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
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length
  }, 
  {
    title: "Action",
    dataIndex: "action"
  }, 
];


const CategoryList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const categoryState = useSelector((state) => state.productCategory.getCategory);

  const data1 = [];

for(let i = 0 ; i< categoryState.getAllCategory.length; i++){
  data1.push({
    key: i + 1, 
    name:categoryState.getAllCategory[i].title ,
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
      Product Categories
    </h3>
    <div>
      <Table columns = {columns} dataSource={data1} />
    </div>
  </div>
  )
}

export default CategoryList