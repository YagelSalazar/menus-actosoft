import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//--------------------------------Components
import Restaurants from './components/restaurants-component/restaurants-component'
import InfoMenu from './components/info-menu-component/info-menu'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      
      restaurans: [],
      menus: []
    
    }
  }

  render(){
    return(

      <Router>
        <Switch>
          <Route path='/' exact component={Restaurants}></Route>
          <Route path='/info-menu' component={InfoMenu}></Route>
        </Switch>
      </Router>

    )
  }
}

export default App