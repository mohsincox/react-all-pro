import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import './App.css'
import logo from './logo.png'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout >
        <Sider 
        trigger={null} 
        collapsible 
        collapsed={this.state.collapsed}
        theme="light"
        style={{background:'#0A2D48'}}
        >
          {/* <div className="logo" /> */}
          <img src={logo} className="logo" alt=""/>
          <Menu 
          theme="dark" 
          mode="inline" 
          defaultSelectedKeys={['1']}
          style={{background:'#0A2D48'}}
          >

          <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span className ="nav-menu-color">User</span>
                </span>
              }
            >
              <Menu.Item key="3"  ><span className ="nav-menu-color">Tom</span></Menu.Item>
              <Menu.Item key="4" ><span className ="nav-menu-color">Bill</span></Menu.Item>
              <Menu.Item key="5" ><span className ="nav-menu-color">Alex</span></Menu.Item>
            </SubMenu>

            <Menu.Item key="1">
              <Icon type="user" />
              <span className ="nav-menu-color">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className ="nav-menu-color">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className ="nav-menu-color">nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#2E86C1', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              style={{color:'white'}}
            />
          </Header>
          <Content
            style={{
              margin: '16px',
              padding: '1px',
              background: 'white',
              minHeight: '100vh',
            }}
          >
            Content
          </Content>
          <Footer style={{ textAlign: 'center',background:'#2E86C1',color:'white' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default App;