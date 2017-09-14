/**
 * Created by user on 2017/9/4.
 */
/**
 * Created by user on 2017/8/7.
 */
import React, { Component } from 'react'
import { render } from 'react-dom';
import User from './component/user';
import History from './component/history';
import Mask from './component/Mask';

class App extends Component{
    constructor(p){
        super(p);
        this.state = {
            windowHeight:window.innerHeight - 60+ 'px',
            user:null,
            showMask:false
        };
    }
    componentDidMount(){
        document.getElementById('loading').style.display = 'none';
        window.onresize = this.onResize;
        this.onResize();
    }

    onResize = (event)=>{
        const windowHeight = window.innerHeight - 60 + 'px';
        this.setState({
            windowHeight:windowHeight
        })
    };
    clickItem = (user)=>{
        this.setState({
            user:user
        })
    };
    closeHistory = ()=>{
        this.setState({
            user:null
        })
    };
    handleMask = (bool)=>{
        this.setState({
            showMask:bool
        })
    };
    renderHistory(){
        return this.state.user ?
            <History
                user={this.state.user}
                closeHistory={this.closeHistory}
            /> : null;
    }
    renderMask(){
        return this.state.showMask ? <Mask/> : null;
    }
    render(){
        return(
            <div className="admin_history" style={{height:this.state.windowHeight}}>
                <User clickItem={this.clickItem} handleMask={this.handleMask}/>
                {this.renderHistory()}
                {this.renderMask()}
            </div>
        )
    }
}

render(<App/>,document.getElementById('react-root'))
