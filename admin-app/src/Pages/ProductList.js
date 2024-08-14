import React, { useEffect } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import Link from "antd/es/typography/Link";

const columns = [
  {
    title: "Sno",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,

  },
  {
    title: "Brand",
    dataIndex: "brand",
    sorter: (a, b) => a.brand.length - b.brand.length,
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productState = useSelector((state) => state.product.products);

  const data1 = [];

  for (let i = 0; i < productState.size; i++) {
    data1.push({
      
      key: i + 1,

      title: productState.products[i].title,
      brand: productState.products[i].brand,
      category: productState.products[i].category,
      color: productState.products[i].color,
      price: ` ${productState.products[i].price}`,
      action: (
        <>
          <Link to='/' className="fs-5">
            <BiEdit />
          </Link>
          <Link to= '/' className="ms-3 fs-5 text-danger">
            <AiFillDelete />
          </Link>
        </>
      ),
    });
  }


  return (
    <div>
      <h3 className="mb-4 title">Products</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default ProductList;
