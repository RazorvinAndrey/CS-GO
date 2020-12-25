const SET_CASE_NUM = 'SET-CASE-NUM';

let initialState = {
    caseNum:1,
}



const caseReduser = (state = initialState, action) => {
    switch (action.type){
        case SET_CASE_NUM: {
            return {
                caseNum: action.caseNum,
            }

        }
        default:
            return state;
    }
}
export const changeCaseNum = (caseNum) => ({type: SET_CASE_NUM, caseNum})


export default caseReduser;