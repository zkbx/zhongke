import { Menu } from 'antd';
import React from 'react';
import style from './index.css'
import { Link, } from 'react-router-dom'
import { history} from 'react-router'


class App extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        current: 'mail',
      }
      console.log(this.props.path)
  }
  

  handleClick = (e) => {
    // console.log('click ', e);
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
              mode="horizontal"
              className={style.content}
              selectedKeys={[this.props.path]}
            >
              <Menu.Item key="/">
                <Link to='/'>首页</Link>
              </Menu.Item>

              <Menu.Item key="/applet">
                <Link to='/applet'>微信小程序</Link>
              </Menu.Item>
              <Menu.Item key="/posCharge">
                <Link to='/posCharge'>Pos收单</Link>
              </Menu.Item>
              <Menu.Item key="/aboutUs">
              <Link to='/aboutUs'> 关于我们</Link>
              </Menu.Item>
              <Menu.Item key="/contactUs">
              <Link to='/contactUs'>联系我们</Link>
                </Menu.Item>
            </Menu>

          </div>

        </div>
      </div>
    );
  }
}

export default App