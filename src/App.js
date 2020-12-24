import React, {Component} from 'react'
import './App.css';
import {compose} from "redux";
import  {Route, withRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Preloader from "./componets/command/Preloader/Preloader";
import store from "./redux/redux-store";
import Header from "./componets/header/Header";

class App extends Component {

    render() {
        // if (!this.props.initialized) {
        //     return <Preloader/>
        // }
        return (
            <div className='App'>
                <Header/>
                <switch>
                    <Route path={"/profile"}/>
                </switch>
            </div>
        );
    }
}

let AppContainer = compose(withRouter)(App);

const MainApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default MainApp
