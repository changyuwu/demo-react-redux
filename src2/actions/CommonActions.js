/**
 * Created by user on 2017/9/12.
 */
const HANDLE_MASK = 'handle_mask';
const handleMask = (bool)=>{
    return {
        type:HANDLE_MASK,
        masking:bool
    }
};
const HANDLE_CURRENTCUSTOMER = 'handle_currentCustomer';
const handleCurrentCustomer = (customer)=>{
    return {
        type:HANDLE_CURRENTCUSTOMER,
        customer
    }
};

module.exports = {
    handleMask:handleMask,
    handleCurrentCustomer:handleCurrentCustomer
};