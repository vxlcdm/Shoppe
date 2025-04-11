 import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'; 
import cartSystem from './Slice';


const persistConfig = {
    key: 'cart',
    storage: storageSession,  
};
const persistedCartReducer = persistReducer(persistConfig, cartSystem);



const store= configureStore({
    reducer:{
        cart: persistedCartReducer
    }
})

 


export const persistor = persistStore(store);
export default store;