import {createStore} from 'redux'
import volume from './reducers/volume'

const store = createStore(volume, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store