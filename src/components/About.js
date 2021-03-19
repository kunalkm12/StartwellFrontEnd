import React, { useState } from "react";
import "antd/dist/antd.css";
import { Typography } from "antd";
import { UserOutlined, PoweroffOutlined } from "@ant-design/icons";
import { Layout, Menu, Avatar, Col, Row, Image } from "antd";
import "./About.css";
import image from "../Assets/wound.jpg";
import logo from "../Assets/logo.PNG";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;


function About() {
  const [visible, setVisible] = useState(false);
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Layout className="layout">
        <Header>
          <div className="logo" />

          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1" style={{ float: "right" }}>
              <Avatar
                size={64}
                style={{ float: "right" }}
                icon={<UserOutlined />}
              />
            </Menu.Item>
            <Menu.Item key="2" style={{ float: "right" }}>
              About
            </Menu.Item>
            <Menu.Item key="3" style={{ float: "right" }}>
              Contact Us
            </Menu.Item>
            <Menu.Item key="4" style={{ float: "right" }}>
              Self Help
            </Menu.Item>
            <Menu.Item key="5" style={{ float: "right" }}>
              Home
            </Menu.Item>
            <img width={50} src={logo} />
          </Menu>
        </Header>
        <Content>
          <br />
          <div className="p-content" id = "p-content">
            <div class="about" >
                
                  <div class="container">
                    <ch1>
                    <br />
                      <center>VISION</center>
                      <br />
                    </ch1>
                    <div>
                      We believe in a world where anyone that wants mental
                      health care can access the services that are right for
                      them at the price they can afford.
                    </div>
                  </div>
            
                  <div class="container2">
                    <ch2>
                    <br />
                      <center>MISSION</center>
                      <br />
                    </ch2>

                    <div >
                      Startwell is here to ensure that anyone who is ready to
                      start improving their mental health matches with the
                      appropriate services, and maintains their wellness over
                      time.
                    </div>
                    <br />
                    <div>
                      Our platform will allow users to match with local services
                      tailored to their preferences, then schedule, and pay for
                      their first therapy appointment. Providers will be able to
                      use our scheduling and billing services, as well as match
                      with clients that are less likely to drop out. We
                      encourage clients and providers to utilize our interactive
                      assessments that offer feedback informed treatments to
                      monitor progress and maintain their wellness.
                    </div>
                  </div>
             
                  <div class="container3">
                    <ch3>
                    <br />
                      <center>PERSONALIZE</center>
                      <br />
                    </ch3>
                    <div3>
                      The process of finding support for mental health, is
                      confusing, and costly. Getting a list of providers from
                      insurance or picking a random therapist online doesn't
                      work for many people. Startwell is the first platform that
                      personalizes this process. Just like a financial advisor
                      helps you invest in your retirement, we help you invest in
                      your mental health. Want to learn more? Sign up to our
                      newsletter.
                    </div3>
                  </div>
                </div>
          </div>
        </Content>
        <Footer>
<div>abcfdvdc</div>
        </Footer>
      </Layout>
    </div>
  );
}
export default About;
