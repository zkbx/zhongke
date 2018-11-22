import React from "react";
import style from "./index.css"
import Header from "../../components/header"
import Footer from '../../components/footer'

class Applet extends React.Component {
    constructor(props) {
        super(props)
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
                <div style={{width:'100%',height:80}}></div>
                <div className={style.banner} alt="" />
                <div className={style.scheme}>
                    <div className={style.productH}>
                        <div className={style.productLine}></div>
                        <span className={style.productTitle}>
                            全面的解决方案
                        </span>
                    </div>
                    <ul className={style.schemeContent}>
                        <li>
                            <span className={style.schemeText}>
                                生鲜果蔬
                            </span>
                            <img src={require('./images/scheme5.png')} className={style.schemeImg} alt="" />
                        </li>
                        <li>
                            <span className={style.schemeText}>
                                教育培训
                            </span>
                            <img src={require('./images/scheme3.png')} className={style.schemeImg} alt="" />
                        </li>
                        <li>
                            <span className={style.schemeText}>
                                鲜花蛋糕
                            </span>
                            <img src={require('./images/scheme6.png')} className={style.schemeImg} alt="" />
                        </li>
                        <li>
                            <span className={style.schemeText}>
                                服饰鞋包
                            </span>
                            <img src={require('./images/scheme1.png')} className={style.schemeImg} alt="" />
                        </li>
                        <li>
                            <span className={style.schemeText}>
                                化妆个护
                            </span>
                            <img src={require('./images/scheme2.png')} className={style.schemeImg} alt="" />
                        </li>
                        <li>
                            <span className={style.schemeText}>
                                休闲娱乐
                            </span>
                            <img src={require('./images/scheme7.png')} className={style.schemeImg} alt="" />
                        </li>
                        <li>
                            <span className={style.schemeText}>
                                企业建站
                            </span>
                            <img src={require('./images/scheme4.png')} className={style.schemeImg} alt="" />
                        </li>
                        <li>
                            <span className={style.schemeText}>
                                增值服务
                            </span>
                            <img src={require('./images/scheme8.png')} className={style.schemeImg} alt="" />
                        </li>
                    </ul>
                </div>
                <div className={style.case}>
                    <div className={style.productH}>
                        <div className={style.productLine}></div>
                        <span className={style.productTitle}>
                            经典案例
                        </span>
                    </div>
                    <ul className={style.caseContent}>
                        <li className={style.caseLi} >
                            <div className={style.caseLi1}>
                                <img src={require('./images/case1-1.png')} className={style.caseImg} alt="" />
                                <span className={style.caseLiTitle}>
                                    水星家纺
                            </span>

                                <span className={style.caseLiText}>
                                    提供纺织品、床上用品、日<br />用百货等批发服务商
                            </span>
                            </div>
                            <div className={style.caseLi2}>
                                <img src={require('./images/case1-2.png')} className={style.caseBgImg} alt="" />
                            </div>
                        </li>
                        <li className={style.caseLi}>
                            <div className={style.caseLi1}>

                                <img src={require('./images/case2-1.png')} className={style.caseImg} alt="" />
                                <span className={style.caseLiTitle}>
                                    ROCOCO
                            </span>

                                <span className={style.caseLiText}>
                                    提供纺织品、床上用品、日<br />用百货等批发服务商
                            </span>
                            </div>
                            <div className={style.caseLi2}>
                                <img src={require('./images/case2-2.png')} className={style.caseBgImg} alt="" />
                            </div>
                        </li>
                        <li className={style.caseLi}>
                            <div className={style.caseLi1}>
                                <img src={require('./images/case3-1.png')} className={style.caseImg} alt="" />
                                <span className={style.caseLiTitle}>
                                    SUFUCHA苏孚茶
                            </span>

                                <span className={style.caseLiText}>
                                    一份自然、一份文化，炮制<br />好茶，分享美味
                            </span>
                            </div>

                            <div className={style.caseLi2}>
                                <img src={require('./images/case3-2.png')} className={style.caseBgImg} alt="" />
                            </div>
                        </li>
                        <li className={style.caseLi}>
                            <div className={style.caseLi1}>
                                <img src={require('./images/case4-1.png')} className={style.caseImg} alt="" />
                                <span className={style.caseLiTitle}>
                                    袁记串串香
                            </span>
                                <span className={style.caseLiText}>
                                    拥有20年火锅行业经验
                            </span>
                            </div>
                            <div className={style.caseLi2}>
                                <img src={require('./images/case4-2.png')} className={style.caseBgImg} alt="" />
                            </div>
                        </li>
                        <li className={style.caseLi}>
                            <div className={style.caseLi1}>
                                <img src={require('./images/case5-1.png')} className={style.caseImg} alt="" />
                                <span className={style.caseLiTitle}>
                                    悦颜仕
                            </span>

                                <span className={style.caseLiText}>
                                    用心主营美容业务
                            </span>
                            </div>
                            <div className={style.caseLi2}>
                                <img src={require('./images/case5-2.png')} className={style.caseBgImg} alt="" />
                            </div>
                        </li>
                        <li className={style.caseLi}>
                            <div className={style.caseLi1}>
                                <img src={require('./images/case6-1.png')} className={style.caseImg} alt="" />
                                <span className={style.caseLiTitle}>
                                    星杰装饰
                            </span>

                                <span className={style.caseLiText}>
                                    上海星杰装饰有限公司提供专<br />业整装服饰
                            </span>
                            </div>
                            <div className={style.caseLi2}>
                                <img src={require('./images/case6-2.png')} className={style.caseBgImg} alt="" />
                            </div>

                        </li>
                        <li className={style.caseLi}>
                            <div className={style.caseLi1}>
                                <img src={require('./images/case7-1.png')} className={style.caseImg} alt="" />
                                <span className={style.caseLiTitle}>
                                    苏州第一百货
                            </span>

                                <span className={style.caseLiText}>
                                    苏州市第一百货是以青春流行<br />时尚的零售商场
                            </span>
                            </div>

                            <div className={style.caseLi2}>
                                <img src={require('./images/case7-2.png')} className={style.caseBgImg} alt="" />
                            </div>
                        </li>
                        <li className={style.caseLi}>
                            <div className={style.caseLi1}>
                                <img src={require('./images/case8-1.png')} className={style.caseImg} alt="" />
                                <span className={style.caseLiTitle}>
                                    长沙新华书店
                            </span>

                                <span className={style.caseLiText}>
                                    分享智识与见解，始与书不止<br />于书
                            </span>
                            </div>

                            <div className={style.caseLi2}>
                                <img src={require('./images/case8-2.png')} className={style.caseBgImg} alt="" />
                            </div>
                        </li>

                    </ul>
                </div>
                {/* <footer className={style.footer}>


                </footer> */}
                <Footer/>
            </div>
        )
    }
}

export default Applet