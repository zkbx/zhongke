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
                <div style={{ width: '100%', height: '78px' }}></div>
                <div className={style.banner} alt="" />
                <div className={style.advantage}>
                    <div className={style.productH}>
                        <div className={style.productLine}></div>
                        <span className={style.productTitle}>
                            全面的解决方案
                        </span>
                    </div>
                    <ul className={style.advantageUl}>
                        <div className={style.advantageUlBox}>
                            <li className={style.advantageLi}>
                                <div className={style.advantageLiBox}>
                                    <img src={require('./images/alipay.png')} className={style.advantageImg} alt="" />
                                    <span className={style.advantageLiText}>
                                        支付无限
                                </span>
                                </div>
                            </li>
                            <li className={style.advantageLi}>
                                <div className={style.advantageLiBox}>
                                    <img src={require('./images/safe.png')} className={style.advantageImg} alt="" />
                                    <span className={style.advantageLiText}>
                                        安全无限
                                </span>
                                </div>
                            </li>
                            <li className={style.advantageLi}>
                                <div className={style.advantageLiBox}>
                                    <img src={require('./images/more.png')} className={style.advantageImg} alt="" />
                                    <span className={style.advantageLiText}>
                                        功能丰富
                                </span>
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className={style.product}>
                    <div className={style.productH}>
                        <div className={style.productLine}></div>
                        <span className={style.productTitle}>
                            产品展示
                        </span>
                    </div>
                    <ul className={style.productContent}>
                        <li className={style.productLi} style={{ backgroundColor: '#99cdf2', color: '#fff' }}>
                            <div className={style.productLiBox}>
                                <img src={require('./images/product1.png')} className={style.productImg1} alt="" />
                                <div className={style.productLiFontBox}>
                                    <span className={style.productLiTitle}>
                                        智能Pos机
                                    </span>
                                    <span className={style.productLiText}>
                                        一款基于互联网和云计算的智能POS终端<br />各种定制化应用助力商户实现智能化的店铺经<br />营。
                                    </span>
                                    <ul className={style.productImgBox}>
                                        <li className={style.productImgBoxLi}>
                                            <img src={require('./images/product1-1.png')} className={style.productLiImg} alt="" />
                                            <span className={style.productLiImgText}>
                                                功能丰富
                                            </span>
                                        </li>
                                        <li className={style.productImgBoxLi}>
                                            <img src={require('./images/product1-2.png')} className={style.productLiImg} alt="" />
                                            <span className={style.productLiImgText}>
                                                随用随取
                                            </span>
                                        </li>
                                        <li className={style.productImgBoxLi}>
                                            <img src={require('./images/product1-3.png')} className={style.productLiImg} alt="" />
                                            <span className={style.productLiImgText}>
                                                流程便携
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className={style.productLi} style={{}}>
                            <div className={style.productLiBox}>

                                <div className={style.productLiFontBox}>
                                    <span className={style.productLiTitle}>
                                        超级收款宝QR65
                                    </span>
                                    <span className={style.productLiText}>
                                        超级收款宝是一款全能扫码、云闪付于一体<br />的轻便型两用独立扫码终端为中小微商户提<br />供完美的收款体验。
                                    </span>
                                    <ul className={style.productImgBox}>
                                        <li className={style.productImgBoxLi}>
                                            <img src={require('./images/product2-1.png')} className={style.productLiImg} alt="" />
                                            <span className={style.productLiImgText}>
                                                主被扫两用
                                            </span>
                                        </li>
                                        <li className={style.productImgBoxLi}>
                                            <img src={require('./images/product2-2.png')} className={style.productLiImg} alt="" />
                                            <span className={style.productLiImgText}>
                                                支持NFC
                                            </span>
                                        </li>
                                        <li className={style.productImgBoxLi}>
                                            <img src={require('./images/product2-3.png')} className={style.productLiImg} alt="" />
                                            <span className={style.productLiImgText}>
                                                独立完成收款
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <img src={require('./images/product2.png')} className={style.productImg2} alt="" />
                            </div>
                        </li>
                        <li className={style.productLi} style={{ backgroundColor: '#99cdf2', color: '#fff' }}>
                            <div className={style.productLiBox}>
                                <img src={require('./images/product3.png')} className={style.productImg3} alt="" />
                                <div className={style.productLiFontBox}>
                                    <span className={style.productLiTitle}>
                                        手机收款宝
                                    </span>
                                    <span className={style.productLiText}>
                                        通过蓝牙配合相关的客户端，实现与Android<br />和IOS智能手机进行通讯，为使用者提<br />供收款、转账、等多项金融服务。
                                    </span>
                                    <ul className={style.productImgBox}>
                                        <li className={style.productImgBoxLi}>
                                            <img src={require('./images/product3-1.png')} className={style.productLiImg} alt="" />
                                            <span className={style.productLiImgText}>
                                                交易管理
                                            </span>
                                        </li>
                                        <li className={style.productImgBoxLi}>
                                            <img src={require('./images/product3-2.png')} className={style.productLiImg} alt="" />
                                            <span className={style.productLiImgText}>
                                                及时撤销
                                            </span>
                                        </li>
                                        <li className={style.productImgBoxLi}>
                                            <img src={require('./images/product3-3.png')} className={style.productLiImg} alt="" />
                                            <span className={style.productLiImgText}>
                                                实时理财
                                            </span>
                                        </li>
                                        <li className={style.productImgBoxLi}>
                                            <img src={require('./images/product3-4.png')} className={style.productLiImg} alt="" />
                                            <span className={style.productLiImgText}>
                                                手机银行
                                            </span>
                                        </li>
                                        <li className={style.productImgBoxLi}>
                                            <img src={require('./images/product3-5.png')} className={style.productLiImg} alt="" />
                                            <span className={style.productLiImgText}>
                                                移动收款
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className={style.productLi} style={{paddingBottom:0}}>
                            <div className={style.productLiBox}>
                                <div className={style.productLiFontBox}>
                                    <span className={style.productLiTitle}>
                                        超级收款宝Q50
                                    </span>
                                    <span className={style.productLiText}>
                                        2.4寸真彩LED主屏+六位LED客显屏，让交易<br />双方对金额一目了然，10个数字键<br />+9大功能键，单手就能操作完成。
                                    </span>
                                    <ul className={style.productImgBox}>
                                        <li className={style.productImgBoxLi}>
                                            <img src={require('./images/product4-1.png')} className={style.productLiImg} alt="" />
                                            <span className={style.productLiImgText}>
                                                完整的方案
                                            </span>
                                        </li>
                                        <li className={style.productImgBoxLi}>
                                            <img src={require('./images/product4-2.png')} className={style.productLiImg} alt="" />
                                            <span className={style.productLiImgText}>
                                                独立完成收款
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <img src={require('./images/product4.png')} className={style.productImg4} alt="" />
                            </div>
                        </li>
                        <li className={style.productLi} style={{ backgroundColor: '#99cdf2', color: '#fff',paddingBottom:0 }}>
                            <div className={style.productLiBox}>
                                <img src={require('./images/product5.png')} className={style.productImg5} alt="" />
                                
                                <div className={style.productLiFontBox}>
                                    <span className={style.productLiTitle}>
                                        银盛通MPOS
                                    </span>
                                    <span className={style.productLiText}>
                                        屏显收款码，收款更轻松，加码不加价<br />同时支持支付宝、微信、云闪付、挥卡
                                    </span>
                                    <ul className={style.productImgBox}>
                                        <li className={style.productImgBoxLi}>
                                            <img src={require('./images/product5-1.png')} className={style.productLiImg} alt="" />
                                            <span className={style.productLiImgText}>
                                                屏显更轻松
                                            </span>
                                        </li>
                                        <li className={style.productImgBoxLi}>
                                            <img src={require('./images/product5-2.png')} className={style.productLiImg} alt="" />
                                            <span className={style.productLiImgText}>
                                                支付功能齐全
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className={style.download}>
                    <div className={style.productH}>
                        <div className={style.productLine}></div>
                        <span className={style.productTitle}>
                            下载中心
                        </span>
                    </div>
                    <ul className={style.downloadContent}>
                        <li className={style.downloadLi}>
                            <img src={require('./images/download1.png')} className={style.downloadImg} alt=""/>
                            <span className={style.downloadText}>
                                银联通手机客户端
                            </span>
                        </li>

                        <li className={style.downloadLi}>
                            <img src={require('./images/download2.png')} className={style.downloadImg} alt=""/>
                            <span className={style.downloadText}>
                                拉卡拉商户通客户端
                            </span>
                        </li>
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default PosCharge;