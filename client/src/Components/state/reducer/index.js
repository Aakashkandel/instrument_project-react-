import react, { useEffect } from 'react';
import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import cartreducer,{productFetch} from '../../features/Addtocart'




const reducers=combineReducers({
    authenticate:authenticateReducer,
    cart:cartreducer,
})

export default reducers;