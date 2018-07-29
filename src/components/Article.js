import React, { Component } from "react";
import { Divider, Icon } from "antd";
import { Modal, Tag, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';

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
            sangVisible: false
        }
    }


    showModal = key => (e) => {
        console.log(key,"fck")
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


    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }

    onChangeSang(selected, index){
        console.log(selected, index, "selected")
    }

    render(){
        let {search} = this.props.location
        let query = search && search.substring(1).split("&")
        let queryObject = {}
        for(let item of query){
            let spiltItem = item.split("=");
            queryObject[spiltItem[0]] = spiltItem[1];
        }
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
                    footer={[{ text: '确认支付', onPress: () => { console.log('ok'); this.onClose('sangVisible')(); } }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <div style={{ height: 100, overflow: 'scroll' }}>
                        <p>炎炎夏日，为她买根棒冰</p>
                        <Tag onChange={(selected) =>this.onChangeSang(selected, 1)}>Callback1</Tag>
                        <Tag onChange={(selected) =>this.onChangeSang(selected, 2)}>Callback2</Tag>
                        <Tag onChange={(selected) =>this.onChangeSang(selected, 3)}>Callbac3</Tag>
                    </div>
                </Modal>
            </div>
        )
    }
}