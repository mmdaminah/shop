import { createStore, applyMiddleware  } from "redux";
import { logger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./RootReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  storage,
  whitelist:['cart']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export default () => {
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)
  return { store, persistor }
}
// const store = createStore(rootReducer,composeWithDevTools(
//     applyMiddleware(logger),
//   ));
// export default store