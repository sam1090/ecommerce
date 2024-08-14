import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
  AiOulinePicRight,
} from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { ImBlog } from "react-icons/im";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { useNavigate, Outlet, Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo ">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">DC</span>
            <span className="lg-logo">Dev Corner</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "product-list",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className="fs-5" />,
                  label: "Brand ",
                },
                {
                  key: "brand-list",
                  icon: <SiBrandfolder className="fs-5" />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className="fs-5" />,
                  label: "Category ",
                },
                {
                  key: "category-list",
                  icon: <BiCategoryAlt className="fs-5" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-5" />,
                  label: "Color ",
                },
                {
                  key: "color-list",
                  icon: <AiOutlineBgColors className="fs-5" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <FaClipboardList className="fs-4" />,
              label: "Orders",
            },
            {
              key: "blogs",
              icon: <FaBloggerB className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog",
                },

                {
                  key: "blog-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog List",
                },

                {
                  key: "blog-category",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiry",
              icon: <FaClipboardList className="fs-4" />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-4 v  align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-3" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                {" "}
                3
              </span>
            </div>
            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={32}
                  height={32}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAaVBMVEX///8jHyAAAAAfGxz7+/sdGBnv7+8IAADl5eXh4eHR0dHp6ekYEhMEAAB0c3MaFRY4NjddW1x9fHzJyclsa2ssKioPBwm1tbWjoqLb29tPTU01MTKUk5OHhoYMAARlZGREQ0O+vr6sq6sUve5MAAAD50lEQVRoge2bf5OqIBSG84CgxqqkUpKa9v0/5NVb21ZrBXisO3N9/trZmnkDzm90tVpYWFhYWBiFsiAMw4DR90uXu1jvOQDwvY535TulgyoFED7xBogvANIqeJN2JIGfhH8gHGT0Bu11DMIbQ0C8nlt8WzSj2gNNsZ1XvIb7Pb/Zf6jnFJfwRHsA5GzaVD/e9cvu65ncnx74S3HP44d55OtX237e/FnOfmsm3svPYPlMPLP2a4hg6OpSGYp7nkI3/Mh03//uPXbQPYyH13HEAVc8tFl6v/gQVb02P/UBhep1LDU1+BMkxTR7K5sbQLW76stS/atCVJeJpXqC6PK09S3V/RYv1wSFndH1ZlfgVZmlTag5IfCK7Mgksd/C8Yw+sjX53ugR1T+7drs4O6Dw1D9r86y1Vm8RA/1HY92qfl3I39JgptjP5jhmaXakQC1rN5a1zQZT3HbrsYtabZNjfY0r/uF6fqXNs6zAb+JLZdzHqRkGaDvjHnaHL943U4b9O3IbdYZqE6dXc41OWPtaXmEmtzv59JW8Qm2h7qAvzh5mGhl9Uz2Ykw4IwOyfRgkkjAddH+Q75tSdhl8TJCJAd7OqHo/nP2iWF6D8719AfAVFntH7r2HS7zjEF5tad5vWE6rhjRJeu+kus3Eawwwn0A3Wxovs6l80jLIsi8JrM88KPlgf8rwwPnkaAfksg5TyPEC/2qXprPWllRLq4Q1IJNXFG7lGu6cIb0Jcb9278H5pNNxpfh0JVIo0NFt7dwHGB67rbcno8BsoZeW21vw+CggPZfWsGGlkeicDXrRa67bg0Lvf768kGFU1TR+GVkJ83ycPSx6RTje9g20T9UMzuc6obHuoa6ZmnWyKeC+fvZZ4gvGFxDhETBG3bN9+M6WhK6ft+wC41/ZWFxLjuF9TTDS58+JdDU9OX7p7U+cwIxzDcW6YTzX4Eyp3EWePI7gVhLhkm639aHicL5c6C8XmBpzsDsPdToC9OIqzn9XtXb5yz+v3NPaJNsc69v7grX2O7nH8bYDsbUsshnfs/cHbejxCcr1St02ziCbvYPTGT5gYqdtGO+PZoJG67fzwf1bvUNVtRzqf9Xf7K7jHOFzOIYYbl5re8IE2A3Gnm8EcRx6cqsoV3aB0ExvXGcLxyUjYDAETJpdMTtIXIKfNbjIJrk2FAjlteNBDo9gDe99PwIsjlIFlcNQJN76OGy7keKKPiKPi9XZDAHjy6ieQhAOQeIv/PDfrqjyFHiWS2zEdIX4i1PBRmlfdfPdClJXdro6lbvekgRMN2bdaxvWuK9/0FgNlbB0Mr02EYRCs2SfenVhYWFhY+Pf5AwQDOBldHnVBAAAAAElFTkSuQmCC"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Sam</h5>
                <p className="mb-0"> test12@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link className="dropdown-item py-1 mb-1" style={{height :"auto " , lineHeight:"20px"}} to='/'>
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item py-1 mb-1" style={{height :"auto " , lineHeight:"20px"}}  to='/'>
                    Sign Out
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
