import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import app from "./app";

const appPersistConfig = {
  key: "app",
  storage,
  blacklist: ["error", "loading", "secundaryLeftMenu"]
};

const appReducer = combineReducers({
  app: persistReducer(appPersistConfig, app)
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    Object.keys(state).forEach(key => {
      if (key !== "offline") storage.removeItem(`persist:${key}`);
    });
    // state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
