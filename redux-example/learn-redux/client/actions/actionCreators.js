/**
 * Created by andriankanta on 10/10/16.
 */
//  increment likes
export function increment(i) {
    console.log(i)
    return {
        type: 'INCREMENT_LIKES',
        i
    }
}
//  add comment
export function addComment(postId, author, comment) {
    console.log("Dispatching the comment")
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// remove comment

export function removeComment(postId, i) {
    console.log('removing comment', postId, i)
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}

