import s1 from './../aceses/photos/images.jpeg'
const SET_CASE = 'SET-CASE';

let initialState = {
    cases:[
        {photo:s1, name:'Case 1', id:1},
        {photo:s1, name:'Case 2', id:2},
        {photo:s1, name:'Case 3', id:3},
        {photo:s1, name:'Case 4', id:4},
        {photo:s1, name:'Case 5', id:5},
    ]
}



const appReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_CASE: {
            return {
                ...state,
                cases: action.cases,
            }

        }
        default:
            return state;
    }
}
export const setCase = (cases) => ({type: SET_CASE, cases})

export const getCase = () => {
    return () =>{
        const cases = initialState.cases
        setCase(cases)
    }
}

export default appReducer;