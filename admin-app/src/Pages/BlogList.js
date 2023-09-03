import React, { useEffect } from "react";
import { Table } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/blog/blogSlice";
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
    ,
    sorter: (a, b) => a.name.length - b.name.length
  }, 
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.length - b.category.length
  }, 
  {
    title: "Action",
    dataIndex: "action"
  }, 
];


const BlogList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  const blogState = useSelector((state) => state.blog.blogs);

  const data1 = [];

  for (let i = 0; i < blogState.size; i++) {
    data1.push({
      key: i + 1,
      name: blogState.getAllBlogs[i].title,
      category:blogState.getAllBlogs[i].category,
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
      Blog List
    </h3>
    <div>
      <Table columns = {columns} dataSource={data1} />
    </div>
  </div>
  )
}

export default BlogList