import React, { Component } from "react";
import { List } from 'antd-mobile';
import { Icon } from "antd";

const Item = List.Item;
// const Brief = Item.Brief;

export default class AticaleList extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        console.log(this.props, "props")
        return (
        <List renderHeader={() => 'Text Wrapping'} className="my-list">
            <Item wrap>
            <h1>我的生命中从此多了一个你</h1>
            <p>Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text
             </p>
                <p><span>Dreamer</span> <span><Icon type="like-o"/>123</span> <span><Icon type="eye-o" /> 236</span>  </p>   
            </Item>
                <Item wrap>
                    <h1>我的生命中从此多了一个你2</h1>
                    <p>Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text
             </p>
                    <p><span>Dreamer</span> <span><Icon type="like-o" />123</span> <span><Icon type="eye-o" /> 236</span>  </p>
                </Item>
        </List>
        )
    }
}