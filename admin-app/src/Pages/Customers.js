import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/customers/customerSlice";

const columns = [
  {
    title: "Sno",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
];

const Customers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const customerstate = useSelector((state) => state.customer.customers);

  const data1 = [];

  for (let i = 0; i < customerstate.size; i++) {
    if(customerstate.getUsers[i].role !== 'admin'){
      data1.push({
        key: i + 1,
        name: customerstate.getUsers[i].firstname + " " + customerstate.getUsers[i].lastname,
        email: customerstate.getUsers[i].email,
        mobile: customerstate.getUsers[i].mobile,
      });
    }
  }

  

  return (
    <div>
      <h3 className="mb-4 title">Customers</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Customers;
