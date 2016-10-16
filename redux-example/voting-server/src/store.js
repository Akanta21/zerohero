/**
 * Created by andriankanta on 13/10/16.
 */
import {createStore} from 'redux'
import reducer from './reducer'

export default function makeStore() {
    return createStore(reducer)
}