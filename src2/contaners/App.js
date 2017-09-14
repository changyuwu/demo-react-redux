/**
 * Created by user on 2017/9/12.
 */
import React, { Component } from 'react';
import Customers from '../component/customer';
import { connect } from 'react-redux';
import Mask from '../component/Mask';
import CustomerHistory from '../component/history';

 class App extends Component{
    renderMask(){
        const { masking } = this.props;
        return masking ? <Mask/> : null
    }
    renderCustomerHistory(){
        const { currentCustomer } = this.props;
        return currentCustomer ? <CustomerHistory customer={ currentCustomer }/> : null
    }
    render(){
        return(
            <div className="admin_history">
                { this.renderMask() }
                <Customers/>
                { this.renderCustomerHistory() }
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        masking:state.container.masking,
        currentCustomer:state.container.currentCustomer
    }
};

export default connect(mapStateToProps)(App);
