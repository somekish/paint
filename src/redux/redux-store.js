import mainReducer from "./reducers/mainReducer";
import headerReducer from "./reducers/headerReducer";
import footerReducer from "./reducers/footerReducer";
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
  header: headerReducer,
  main: mainReducer,
  footer: footerReducer,
});

let store = createStore(reducers);

export default store;
