import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import navigator from './components/Navigator';
import reducer from './redux/reducer';

const Navigator = createAppContainer(navigator);

const store = createStore(reducer, applyMiddleware(thunk));

export default () => {

  return (

    <Provider store={store}>

      <Navigator />

    </Provider>

  )

}
