import React, { Component } from 'react';
import style from './index.css'


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <footer className={style.footer}>
                <span className={style.footerTitle}>
                Copyright © 2011-2018 www.sxzkbx.com. All Rights Reserved 陕西中科贝讯信息技术有限公司版权所有 <a href="http://www.miitbeian.gov.cn" target="view_window">沪ICP备14044897号-9</a>
                </span>
                <span className={style.footerText}>
<img src={require('./images/ga.png')}  className={style.footerImg} alt=""/>xx公安备31011302004314号
                </span>
            </footer>
        )
    }
}

export default Footer;
