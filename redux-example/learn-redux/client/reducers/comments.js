/**
 * Created by andriankanta on 10/10/16.
 */
// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state

function postComments(state = [], action){
    switch(action.type){
        case 'ADD_COMMENT':
            //  return the new state with new comment
            return [...state, {
                user: action.author,
                text: action.comment
            }]
        case 'REMOVE_COMMENT':
            return[
                //  from the first comment to the comment that you want
                ...state.slice(0, action.i),
                //  add back the comment after the comment deleted
                ...state.slice(action.i + 1)
            ]
        default:
            return state
    }
    return state
}

function comments(state = [], action) {
    if(typeof action.postId !== 'undefined'){
        return {
            //  take the current state
            ...state,
            //  overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }

    return state
}

export default comments