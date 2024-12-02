import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import generalReducer from "@/Redux/Slices/General";
import adminReducer from "@/Redux/Slices/Admin"; // Ensure casing matches file system

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    general: generalReducer,
    admin: adminReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
