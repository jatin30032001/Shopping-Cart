
const {createSlice} = require ("@reduxjs/toolkit");

const STATUSES =  object.freeze({
    IDLE:' idle' , 
    ERROR :  ' error',
    LOADING : 'Loading',
});

const productSlice = createSlice({

    name :'product',
    initialState: {
         data :[],
         statuus :STATUSES.IDLE,
         
    },

    reducers :{
        setProducts( state , action) {

            state.data =  action.payload;
        },
       
    }
});


export const {setProducts} = productSlice.actions;
export default productSlice.reducer;


export function fetchProducts() {


    return async function fetchProductThunk( dispatch , getState){

        dispatch(setStatus(STATUSES.LOADING));
         
        try{
            const res =  await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data))
        }
        catch(err){

        }
    }
}
