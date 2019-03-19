1) npm install react-redux redux
2) create redux folder in src
3) create 3 subfolders in redux folder: actions, reducers, store
4) wrap <App /> inside index.js in <Provider> improted from 'react-redux'
5) create store.js in store folder
6) import {createStore} from 'redux' in store.js
7) add devTools to project: create a variable devTools in store.js, assing the value of "window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();"
8) create store in store.js by calling createStore() and passing objects and devTools, export store.
8.1) import store in index.js, and assign Provider store to it
9) create index.js and counterReducer.js in reducers folder
10) create a reducer function in counterReducer, where we create a global store field: use Switch to describe how we change the store(state), depending on the action type
11) export the reducer function and import in index.js, also import combineReducers from redux
12) create a variable in index.js in reducer file, assign combineReducers to it: pass the object as a parameter; imported reducers will be the object's fields
13) export default the variable from #12, import it in store.js, pass it as the first argument in createStore function
14) create actions functions in separate blablaAction.js, that return an object with the field type, where there's a command for reducer. The command should be the same as the case in the SWITCH in the reducer file
15) import actions into the file, were the actions should be used (i.e. App.jsx)
16) import {connect} from 'react-redux' in the component file


17) All interaction between the user and the program occurs via actions. Therefore, if we want to change the state due to clicks or other events, then we need to import the action in the component where the event listeners are assigned(attached).
18) import the connect method from the react-redux package into the component.
19) create mapStateToProps func, which accepts (store) as a parameter and returns the object. The name of the field should be th props name. This name is used to refer to the field from the store in our component.
20) Create a mapDispatchToProps func, which takes (dispatch) as a parameter. Dispatch is redux method that activates our action. This func also returns the object with the fields in which there are functions which call dispatch, which accepts arguments of actions that were imported in #17.
21) To connect the component to the store, use the connect method that was imported into the component in #18. This method accepts 2 functions as arguments. The first argument is the mapStateToProps func from #19, which gives the component access to a specific field in the global state. The second argument is the mapDispatchToProps func from #20, which gives access to the activation of the actions via the dispatch method. 
connect (mapStateToProps, mapDispatchToProps) (component name);
22) After connect we have access to the fields of the store and action through the props(in the dumb component) or through this.props(in smart component).

23) import {applyMiddleware} from 'redux' in store.js
24) npm i redux-thunk - it's a middleware, that allows to write asynchronus actions
25) import thunk from 'redux-thunk' in store.js
<!-- 26) pass applyMiddleware as the 3rd argument in createStore function. Pass thunk as an argument (applyMiddleware can accept many args)
 -->
27) since we're applying middleware, #7 and #8 don't work anymore: we need to add import {compose} from 'redux' in store.js
27.1) we don't need const devTools anymore, instead create const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
27.2) const store = createStore(reducer, composeEnhancers(applyMiddleware(middleware)));