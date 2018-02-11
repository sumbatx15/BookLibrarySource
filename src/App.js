import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage'
import BookStore from './store/BookStore'
import EditModal from './components/EditModal/EditModal'
import DeleteModal from './components/DeleteModal/DeleteModal'
import StickyHeader from './components/StickyHeader/StickyHeader'


import './App.css'
import './assets/icon-font/flaticon.css'
@observer
class App extends Component {

  render() {
    return (
      <div className="app">
        {BookStore.isEditModal && <EditModal store={BookStore} />}
        {BookStore.isDeleteModal && <DeleteModal store={BookStore} />}
        <StickyHeader store={BookStore}/>
        <Router>
          <div className="app-main">
            <div className="app-content">
              <Switch>
                <Route path="/" render={(props) => <HomePage {...props} store={BookStore} />} />
              </Switch>
            </div>
            <div className="app-footer">
              
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
