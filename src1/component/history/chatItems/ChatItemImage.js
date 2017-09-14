/**
 * Created by user on 2017/8/8.
 */
import React, { Component } from 'react'

export default class ChatItemImage extends Component{
    state = {
        loading:true
    };
    componentDidMount(){
        this.loadImage();
    }
    loadImage = ()=>{
        const url = this.props.msg.content.image;
        let image = new Image();
        image.src = url;
        image.onload = ()=>{
            this.setState({
                loading:false
            })
        }
        image.onerror = ()=>{
            console.error(url)
        }
    };
    renderLoadingDiv(style){
        if(this.state.loading){
            return(
                <div className="chat_item_image_loading" style={style}>
                    <div className="ls_table">
                        <div className="ls_table_inner">
                            <img className="chat_item_image_loading_inner" src="/conversation/admin/images/loading_img_icon.png" alt=""/>
                        </div>
                    </div>
                </div>
            )
        }else{
            return <img style={style} src={this.props.msg.content.image} alt=""/>
        }
    }
    render(){
        const { height,width } = this.props.msg.content.size;
        let _width,_height,style,outerStyle;
        if(width>200){
            _width = 200;
            _height = parseInt(200*height/width);
            style = {height:_height+'px',width:_width+'px'}
            outerStyle = {height:_height+12+'px',width:_width+12+'px'}
        }else{
            style = {height:height+'px',width:width+'px'}
            outerStyle = {height:height+12+'px',width:width+12+'px'}
        }
        const className = this.props.msg.isKH ? 'chat_item' : 'chat_item self';
        return(
            <div className={className}>
                <div className="chat_item_left">
                    <img className="chat_item_head" src={this.props.msg.sender.headImgUrl} alt=""/>
                </div>
                <div className="chat_item_right">
                    <div className="chat_item_name">{this.props.msg.sender.name}</div>
                    <div className="chat_item_image" style={outerStyle}>
                        <div className="chat_item_triangle image"></div>
                        {this.renderLoadingDiv(style)}
                    </div>
                </div>
            </div>

        )
    }
}