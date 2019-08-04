import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './reducers'
import AppNavigation from './navigation/AppNavigation'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
let store = createStore(allReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const App = () => {
    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    )
}

export default App