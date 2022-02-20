npm install redux react-redux redux-thunk


#folders
- state (Folder created to store our redux store)
  -> action-creators (Folder hold all our actions and lists the dispatcher functions with type )
  -> reducers (Holds our reducer which performs action on the state given)
    - nameReducer (returns actions on each action type, given with an intital state)
    - index.js (uses combinedReducers to be exported which are inturn consumed by components with state.[name of reducer object]) - See Navbar.js {cart}
  - index.js (used to export the action as a whole to be consumed where action needs to be performed) [see Shop.js]
  - store.js (createStore is used to create our redux store)

#usage
- in index.js of src add Provider and pass in state to the entire app
- consume the store values and action as needed (see Navbar.js and Shop.js)