import React from 'react';
import style from "./index.css"
import Header from "../../components/header"
import Footer from "../../components/footer"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div >
                <Header />
                <div style={{width:'100%',height:80}}></div>
                <div className={style.banner} alt="" />
                <div className={style.advantage}>
                    <span className={style.advantageTitle}>
                        <i>国内专业的小程序开发服务商</i>
                    </span>

                    <ul className={style.advantageUl}>
                        <li className={style.advantageLi}>
                            <img src={require('./images/advantage3.png')} className={style.advantageImg} alt="" />
                            <span className={style.advantageLiTitle}>
                                专业
                            </span>
                            <span className={style.advantageLiText}>
                                专业的小程序开发<br />
                                懂你想要的
                            </span>
                        </li>
                        <li className={style.advantageLi}>
                            <img src={require('./images/advantage1.png')} className={style.advantageImg} alt="" />
                            <span className={style.advantageLiTitle}>
                                效率
                            </span>
                            <span className={style.advantageLiText}>
                                效率的开发让您更<br />
                                快的抓住机遇
                            </span>
                        </li>
                        <li className={style.advantageLi}>
                            <img src={require('./images/advantage2.png')} className={style.advantageImg} alt="" />
                            <span className={style.advantageLiTitle}>
                                优质
                            </span>
                            <span className={style.advantageLiText}>
                                美观强大的优质方<br />
                                案让你更满意
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={style.company}>
                    <span className={style.companyTitle}>
                        公司概述
                    </span>
                    <span className={style.companyText}>
                        陕西中科贝讯信息技术有限公司简称中科贝讯，是一家专注于微信小程序商业级应用研发及<br />运营和POS收单业务为一体的企业。公司拥有一流的移动互联网技术研发团队，与微软创新<br />中心有深密的合作关系，并建有高校研究生实习基地，共同致力于移动互联网领域的关键技<br />术研发。
                    </span>
                </div>
                <div className={style.product}>
                    <div className={style.productH}>
                        <div className={style.productLine}></div>
                        <span className={style.productTitle}>
                            业务概念
                        </span>
                    </div>
                    <ul className={style.productUl}>
                        <li className={style.productLi}>
                            <img src={require('./images/product1.png')} className={style.productImg} alt="" />
                            <div className={style.productFontBox}>
                                <span className={style.productFontTitle}>
                                    Pos收单
                                </span>
                                <span className={style.productFontText}>
                                    拉卡拉商户收单业务是我国专业化的收单服务，交易<br />规模排名全国前三；通过完善的拉卡拉支付平台体系<br />，不断丰富、创新收单产品；致力于为商户提供专业<br />化与全方位的收单服务，全面满足国内、外银行卡的<br />收单需要。
                                </span>
                                <div className={style.konwMore}>
                                    了解更多
                                </div>
                            </div>

                        </li>
                        <li className={style.productLi}>

                            <div className={style.productFontBox} style={{ paddingTop: 100 }}>
                                <span className={style.productFontTitle}>
                                    小程序开发
                                </span>
                                <span className={style.productFontText}>
                                    微信小程序依托全国10多亿微信用户，助力商户抢占<br />微信社交红利。更加垂直的行业解决方案，满足广泛<br />的业务需求——电商零售、餐饮、外卖、本地生活、<br />休闲娱乐，中科贝讯都有其完整的解决方案。
                                </span>
                                <div className={style.konwMore}>
                                    了解更多
                                </div>
                            </div>
                            <img src={require('./images/product2.png')} className={style.productImg} alt="" />

                        </li>
                    </ul>
                </div>
                <div className={style.partner}>
                    <div className={style.productH}>
                        <div className={style.productLine}></div>
                        <span className={style.productTitle}>
                            合作伙伴
                        </span>
                    </div>
                    <div className={style.partnerBox}>
                        <img src={require('./images/partner1.png')} className={style.partnerImg} alt="" />
                        <img src={require('./images/partner2.png')} className={style.partnerImg} alt="" />
                        <img src={require('./images/partner3.png')} className={style.partnerImg} alt="" />
                    </div>
                </div>
                
                <footer className={style.footerBox}>
                <div className={style.footerContainer}>
                    <span className={style.footerTitle}>
                        联系我们
                    </span>
                    <div className={style.footerContent}>
                        <div className={style.footerFontBox}>
                            <span className={style.footerText}>
                                电话/Tel：029-68851859
                            </span>
                            <span className={style.footerText}>
                                手机/Mob：13379252244
                            </span>
                            <span className={style.footerText}>
                                电邮/E-mail：xufan@sxzkbx.com
                            </span>
                            <span className={style.footerText}>
                                网址/Website：www.sxzkbx.com
                            </span>
                            <span className={style.footerText}>
                                地址：陕西省西安市碑林区交大街2号帝源豪庭大厦B座31E
                            </span>
                        </div>
                        <div className={style.qcodeBox}>
                            <img src="" className={style.qcode} alt=""/>
                            <span className={style.qcodeText}>
                                关注微信公众号
                            </span>
                        </div>
                    </div>
                </div>

            </footer>
            <Footer/>
            </div>
        )
    }

}

export default Home;