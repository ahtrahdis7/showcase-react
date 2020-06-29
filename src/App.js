import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import Main from './components/main';

const store = ConfigureStore();

class App extends Component {

  render(){
    console.log("store");
    console.log(store);
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
