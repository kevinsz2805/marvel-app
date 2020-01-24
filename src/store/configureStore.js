import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

export default function configureStore() {
  let middlewares = applyMiddleware(thunk);
  return createStore(rootReducer, composeWithDevTools(middlewares));
}
