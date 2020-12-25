import React from 'react'
import s from './CaseContainer.module.css'
import gun1 from "../../aceses/photos/images.jpeg";
import {withRouter, NavLink} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";

class CaseContainer extends React.Component {

    render() {
        return(
            <div className={s.cases}>
                <div className={s.disc}>

                    <span>
                        <img src={gun1}/>
                        <div>Case {this.props.match.params.id}</div>
                    </span>

                </div><br/>
                <NavLink to={'/casego'}>
                    <div className={s.but}>Run case</div>
                </NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({

})



export default compose(
    withRouter,
    connect(mapStateToProps),
)(CaseContainer)
