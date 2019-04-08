import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import MyRouter from './myRouter/MyRouter'
import { Provider } from 'react-redux'
import { store } from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyRouter />
      </Provider>
    )
  }
}

export default App;
