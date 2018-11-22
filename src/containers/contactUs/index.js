import React from 'react';
import style from './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Form, Button,Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.toTop()
    }

    toTop(){
        window.scroll(0,0)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Header  path={this.props.location.pathname}/>
                <div style={{ width: '100%', height: 80 }}></div>
                <div className={style.container}>
                    <div className={style.content}>
                        <div className={style.fontBox}>
                            <span className={style.title}>
                                联系我们
                            </span>
                            <span className={style.text} style={{ marginBottom: 30 }}>
                                中科贝讯期待您的合作，请您留下<br />
                                信息我们稍后会与您取得联系
                            </span>
                            <span className={style.text}>
                                电话/Tel<br />
                                029-68851859
                            </span>
                            <span className={style.text}>
                                手机/Mob<br />
                                13379252244
                            </span>
                            <span className={style.text}>
                                电邮/E-mail<br />
                                xufan@sxzkbx.com
                            </span>
                            <span className={style.text}>
                                地址/Add<br />
                                陕西省西安市碑林区<br />
                                交大街2号帝源豪庭大厦B座31E
                            </span>
                        </div>
                        <div className={style.formBox}>
                            <Form onSubmit={this.handleSubmit}>
                                <span className={style.formTitle}>
                                    您的信息
                                </span>
                                <div className={style.formTextB}>

                                    <div className={style.formText}>
                                        姓名
                                    <FormItem style={{ display: 'inline-block', marginLeft: 15 }}>
                                            {getFieldDecorator('name', {
                                                rules: [{ required: true, message: '请输入您的姓名!' }],
                                            })(

                                                <input className={style.formInput} type="text" />

                                            )}
                                        </FormItem>
                                    </div>
                                    <div className={style.formText1}>
                                        咨询类别
                                    <FormItem style={{ display: 'inline-block', marginLeft: 15 }}>
                                            {getFieldDecorator('type', {
                                                rules: [{ required: true, message: '请选择您的类别!' }],
                                            })(

                                                <Select
                                                    // value={state.currency}
                                                    className={style.formInput}
                                                    placeholder="请选择"
                                                    // style={{ width: '32%' }}
                                                    onChange={this.handleCurrencyChange}
                                                >
                                                    <Option value="weixin">微信小程序</Option>
                                                    <Option value="pos">Pos收单</Option>
                                                    <Option value="add">加盟与代理</Option>
                                                </Select>

                                            )}
                                        </FormItem>
                                    </div>
                                </div>


                                <div className={style.formText} style={{ display: 'flex' }}>
                                    电话

                                <FormItem style={{ display: 'inline-block', marginLeft: 15, flexGrow: 1 }}>
                                        {getFieldDecorator('phone', {
                                            rules: [{ required: true, message: '请输入您的电话!' }],
                                        })(

                                            <input className={style.formInput} style={{ width: '100%' }} type="text" />

                                        )}
                                    </FormItem>
                                </div>

                                <div className={style.formText2}>
                                    <div style={{lineHeight:'30px'}}>留言内容</div>
                                    <FormItem>
                                        {getFieldDecorator('content', { })(
                                    <textarea className={style.formTextarea} ></textarea>
                                    )}
                                    </FormItem>
                                </div>

                                <FormItem>
                                    <Button className={style.but} type="primary" htmlType="submit">提交信息</Button>
                                </FormItem>
                            </Form>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const ContactUsForm = Form.create()(ContactUs);
export default ContactUsForm;