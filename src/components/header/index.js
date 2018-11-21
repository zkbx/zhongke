import { Menu, Icon } from 'antd';
import React from 'react';
import style from './index.css'
import { Link } from 'react-router-dom'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.navContent}>
          <img src={require('./images/logo.png')} className={style.logo} alt="" />
          <div className={style.nav}>
          
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}navContent
              mode="horizontal"
              className={style.content}
            >
              <Menu.Item key="8">
                <Link to='/'>首页</Link>
              </Menu.Item>
              <SubMenu title={<span className="submenu-title-wrapper">微信小程序</span>}>
                <Menu.Item key="setting:1"><Link to='/applet'>Option 1</Link></Menu.Item>
              </SubMenu>
              <SubMenu title={<span className="submenu-title-wrapper">Pos收单</span>}>
                <Menu.Item key="setting:3"><Link to='/posCharge'>Option 1</Link></Menu.Item>
                <Menu.Item key="setting:4">Option 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="3">
                关于我们
          </Menu.Item>
              <Menu.Item key="4">
                联系我们
          </Menu.Item>
            </Menu>

          </div>

        </div>
      </div>
    );
  }
}

export default App