import React from 'react';
import style from './index.css'
import Header from '../../components/header'
import Footer from '../../components/footer'

class PosCharge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.toTop()
    }

    toTop(){
        window.scroll(0,0)
    }

    render() {
        return (
            <div>
                <Header  path={this.props.location.pathname}/>
                <div style={{ width: '100%', height: 80 }}></div>
                <div className={style.banner} alt="" />
                <div className={style.advantage}>
                    <div className={style.productH}>
                        <div className={style.productLine}></div>
                        <span className={style.productTitle}>
                            公司概述
                        </span>
                    </div>
                    <div className={style.company}>
                        <img src={require('./images/logo.png')} className={style.logoImg} alt="" />
                        <span className={style.companyText}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;陕西中科贝讯信息技术有限公司简称中科贝讯，是一家专<br />注于微信小程序商业级应用研发及运营的初创企业。公司拥有<br />一流的移动互联网技术研发团队，与微软创新中心有深密的合<br />作关系，并建有高校研究生实习基地，共同致力于移动互联网<br />领域的关键技术研发。
                        </span>
                    </div>
                </div>
                <div className={style.culture}>
                    <div className={style.productH}>
                        <div className={style.productLine}></div>
                        <span className={style.productTitle}>
                            公司概述
                        </span>
                    </div>
                    <ul className={style.advantageUl}>
                        <li className={style.advantageLi}>
                            <img src={require('./images/advantage4.png')} className={style.advantageImg} alt="" />
                            <span className={style.advantageLiTitle}>
                                企业文化
                            </span>
                            <span className={style.advantageLiText}>
                                简单、自由、平等
                            </span>
                        </li>
                        <li className={style.advantageLi}>
                            <img src={require('./images/advantage1.png')} className={style.advantageImg} alt="" />
                            <span className={style.advantageLiTitle}>
                                企业使命
                            </span>
                            <span className={style.advantageLiText}>
                                助力中小企业向数字化转型<br />
                                通过科技驱动商业革新
                            </span>
                        </li>
                        <li className={style.advantageLi}>
                            <img src={require('./images/advantage3.png')} className={style.advantageImg} alt="" />
                            <span className={style.advantageLiTitle}>
                                企业价值观
                            </span>
                            <span className={style.advantageLiText}>
                                成功源于专业 专业源于敬业<br />
                                态度决定高度 诚信大于谋略
                            </span>
                        </li>
                        <li className={style.advantageLi}>
                            <img src={require('./images/advantage2.png')} className={style.advantageImg} alt="" />
                            <span className={style.advantageLiTitle}>
                                企业精神
                            </span>
                            <span className={style.advantageLiText}>
                                以人为本 诚信经营<br />
                                以德立业 稳健发展
                            </span>
                        </li>
                    </ul>

                </div>
                <div className={style.team}>
                    <span className={style.teamTitle}>
                        遇见最棒的合作团队
                    </span>
                    <span className={style.teamText}>
                        我们将以100%的热情投身以工作和生活
                    </span>
                    <ul className={style.teamBox}>
                        <li className={style.teamLi}>

                        </li>
                        <li className={style.teamLi}>

                        </li>
                    </ul>
                </div>  
                <div className={style.footer}>
                    <span className={style.footerTitle}>
                        中科贝讯
                    </span>
                    <span className={style.footerText}>
                        竭诚欢迎您的合作与加盟
                    </span>

                </div>
                <Footer />
            </div>
        )
    }

}

export default PosCharge;