/**
 * Created by user on 2017/9/12.
 */
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(rootReducer,applyMiddleware(reduxThunk));
export default store;