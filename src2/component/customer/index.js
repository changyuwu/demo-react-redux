/**
 * Created by user on 2017/9/12.
 */
import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import SearchTool from './SearchTool';
import UserList from './UserList';
import PageController from './PageController';
import { CustomerActions } from '../../actions';
class Customers extends Component{
    componentDidMount(){
        const { dispatch } = this.props;
        console.log(CustomerActions)
        dispatch(CustomerActions.get_customer())
    }
    render(){
        const { list } = this.props;
        return(
            <div className="user_list_con">
                <SearchTool/>
                <UserList list={ list }/>
                <PageController/>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        list:state.customer.list
    }
};
export default connect(mapStateToProps)(Customers);