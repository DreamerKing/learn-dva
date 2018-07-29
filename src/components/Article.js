import React, { Component } from "react";
import { Divider, Icon } from "antd";
import { Modal, Tag, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import  "./Article.css";

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

export default class Atrticle extends Component {
    constructor(props){
        super(props);
        this.state = {
            sangVisible: false,
            sangSuccessVisible: false,
            selectedSang: 0,
            tagList: [{ value: 10, selected: false }, { value: 20, selected: false }, { value: 30, selected: false }, { value: 40, selected: false }]
        }
    }


    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }


    submitPay(){
        this.setState({
            sangVisible: false
        },() => {
            this.setState({
                sangSuccessVisible: true
            })
        }) 
    }

    onWrapTouchStart = (e) => {
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }

    onChangeSang(selected, index, item){
        let { tagList } = this.state;
        tagList.map((item,index2)=> {
            if(selected && index === index2){
                return Object({}, item, {selected: true})
            } else {
                return Object({}, item, { selected: false })
            }
           
        })
        if(selected){
            this.setState({
                selectedSang: index
            })
        }
        console.log(selected, index, item, "selected")
    }

    render(){
        let {search} = this.props.location
        let query = search && search.substring(1).split("&")
        let queryObject = {}
        for(let item of query){
            let spiltItem = item.split("=");
            queryObject[spiltItem[0]] = spiltItem[1];
        }
        let { tagList } = this.state;
        console.log(queryObject, "a")
        return (
            <div>
                <div>
                    <h2>从此便多了一个你</h2>
                    <p><span>2018-7-27</span></p>
                </div>
                <div>
                    <div><img/><span>王少爷</span></div>
                    <div><button>关注</button></div>
                </div>
                <div>
                    文章内容
                </div>
                <div><label>合约地址：</label><span>url</span><button>复制</button></div>
                <div>
                    <div><span><Icon type="like-o" />转载</span> <span><Icon type="eye-o" /> 购买版权</span></div>
                    <div><span><Icon type="like-o" />123</span> <span><Icon type="eye-o" /> 236</span></div>
                </div>
                <Divider/>
                <div>
                    <p>赞赏，是对思想的最大认可</p>
                    <button onClick={this.showModal('sangVisible')}>赏</button>
                </div>
                <Divider/> 

                <Modal
                    visible={this.state.sangVisible}
                    transparent
                    closable={true}
                    maskClosable={true}
                    onClose={this.onClose('sangVisible')}
                    title=""
                    footer={[{ text: '确认支付', onPress: () => { this.submitPay();} }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <div style={{ height: 100, overflow: 'scroll' }} style={{display: "flex", flexDirection: "column"}}>
                        <p>炎炎夏日，为她买根棒冰</p>
                        <div>
                            {
                                tagList && tagList.map((item, index) => {
                                return (
                                    <Tag key={`tag-${index}`} onChange={(selected) => this.onChangeSang.call(this, selected, index, item )} style={{ margin: 2 }}>{item.value}CCB</Tag>
                                )
                            })
                            }
                        </div>
                    </div>
                </Modal>
                <Modal
                    visible={this.state.sangSuccessVisible}
                    transparent
                    closable={true}
                    maskClosable={true}
                    onClose={this.onClose('sangSuccessVisible')}
                    title=""
                    footer={[{ text: '确定', onPress: () => { console.log('ok'); this.onClose('sangSuccessVisible')(); } }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <div style={{ height: 100, overflow: 'scroll' }} >
                        <h2>支付成功</h2>
                        <p>成功打赏王二爷<span>100CCB</span></p>
                    </div>
                </Modal>
            </div>
        )
    }
}