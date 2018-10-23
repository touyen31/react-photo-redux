import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import TopBar from './components/TopBar';
import Explore from './components/Explore'
import Search from './container/search';
import PhotoDetail from './container/photodetail';

import {createStore, applyMiddleware } from 'redux'
import reducer from'./Reducers'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

const Store=createStore(reducer, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
))

export default class App extends Component {
    render() {
        return (
            <Provider  store={Store}>
                <BrowserRouter>
                    <div>
                        <Route path='*' component={TopBar} />
                        <div style={{ marginTop: 70 }}>
                            <Route path='/' exact component={Explore} />
                            <Route path='/search' exact component={Search} />
                            <Route path='/photo/:id' exact component={PhotoDetail}/>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>

        )
    }
}
