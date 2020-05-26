import React from 'react'
import './App.css'
import  Animals from './components/Animals'
import Navbar from './components/Navbar'
import Login from './components/Login'
import { Route, Switch } from 'react-router-dom'
import NotFound from './components/NotFound'
import About from './components/About'
import Home from './components/Home'
const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/animals" component={Animals} />

        <Route component={NotFound} />
      </Switch>
     
    </div>
  )
}


export default App;

