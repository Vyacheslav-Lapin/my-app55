import React, {Component} from 'react'
import {HashRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import Home from '../Home'
import Staff from '../Stuff'
import Contacts from '../Contacts'

export default class Main extends Component {
    render() {
        return <Router hashType={"noslash"}>
            <h1>Простое приложение</h1>
            <ul>
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="/staff">Продукты</NavLink></li>
                <li><NavLink to="/contacts">Контакты</NavLink></li>
            </ul>

            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/staff" component={Staff}/>
                    <Route path="/contacts" component={Contacts}/>
                </Switch>
            </div>
        </Router>;
    }
}