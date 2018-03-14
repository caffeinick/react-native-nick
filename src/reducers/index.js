import { combineReducers } from 'redux';

import LibraryReducer from './LibraryReducer';
import CounterReducer from './CounterReducer';

export default combineReducers(
  {
    libraries: LibraryReducer,
    number: CounterReducer
  }
);
