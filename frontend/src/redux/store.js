import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./coursesSlice";
import cartSlice from "./cartSlice";

import playListSlice from "./playListSlice";
import commentsSlice from "./commentsSlice";
import userSlice from "./userCoursesSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "user",
  storage,
};
const persistedReducer = persistReducer(persistConfig, userSlice);
const store = configureStore({
  reducer: {
    courses: coursesSlice,
    cart: cartSlice,
    playListCourse: playListSlice,
    comments: commentsSlice,
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Ignorar estas acciones
      },
    }),
});

export const persistor = persistStore(store);
export default store;
