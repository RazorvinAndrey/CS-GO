import React, {Component} from 'react'
import s from './App.module.css'
import {compose} from "redux";
import  {Route, withRouter, HashRouter} from "react-router-dom";
import {Provider, connect} from "react-redux";
import Preloader from "./componets/command/Preloader/Preloader";
import store from "./redux/redux-store";
import Header from "./componets/header/Header";
import Cases from "./componets/home/cases/Cases";
import ProfileContainer from "./componets/profile/ProfileContainer";
import CaseContainer from "./componets/case/CaseContainer";
import s1 from './aceses/photos/s1.png'
import s2 from './aceses/photos/s2.png'
import s3 from './aceses/photos/s3.png'
import s4 from './aceses/photos/s4.png'
import s5 from './aceses/photos/Tykva.png'
import {getCase} from "./redux/app-reduser";
import {changeCaseNum} from "./redux/case-reduser";


class App extends Component {

    onCaseNumChanged = (num) => {
        this.props.changeCaseNum(num);
    }

    render() {
        // if (!this.props.initialized) {
        //     return <Preloader/>
        // }


        return (
            <div>
                <div className={s.App}>
                    <Header/>
                    <switch>
                        <Route path={"/home"} render={() =><Cases cases={this.props.cases} onCaseNumChanged={this.onCaseNumChanged}/>}/>
                        <Route path={"/profile"} render={() =><ProfileContainer id={this.props.userId}/>}/>
                        <Route path={"/case/:id?"} render={() =><CaseContainer/>}/>
                    </switch>
                </div>
                <section>
                    <div className={s.abs}><img src={s1}/></div>
                    <div className={s.abs}><img src={s2}/></div>
                    <div className={s.abs}><img src={s3}/></div>
                    <div className={s.abs}><img src={s4}/></div>
                    <div className={s.abs}><img src={s1}/></div>
                    <div className={s.abs}><img src={s2}/></div>
                    <div className={s.abs}><img src={s3}/></div>
                    <div className={s.abs}><img src={s4}/></div>
                    <div className={s.abs}><img src={s5}/></div>
                    <div className={s.abs}><img src={s3}/></div>
                </section>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        cases: state.app.cases,
    }
}


let AppContainer = compose(withRouter, connect(mapStateToProps, { getCase}))(App);

const MainApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default MainApp
