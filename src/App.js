import React from 'react'
import './App.css'
import  Animals from './components/Animals'
import Navbar from './components/Navbar'
import Login from './components/Login'
import { Route, Switch } from 'react-router-dom'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Animals} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
     
    </div>
  )
}


export default App;

