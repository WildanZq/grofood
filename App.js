import React, {Component} from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import AppNavigator from './navigation/AppNavigator';
import reducers from './reducers';

export default class App extends Component {
  render() {
    const store = createStore(
      reducers,
      compose(applyMiddleware(reduxThunk))
    );

    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
