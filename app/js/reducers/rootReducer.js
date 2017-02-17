import { combineReducers } from 'redux';
import updateStoreWithUserInput from './updateStoreWithUserInput';

const rootReducer = combineReducers({
  updateStoreWithUserInput: updateStoreWithUserInput
});

export default rootReducer;
