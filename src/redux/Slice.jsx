import  { createSlice } from '@reduxjs/toolkit';

const initialState={
        cartArray:[],
        total:0,
}

const cartSystem=createSlice({
    name:"CART",
    initialState,
reducers:{

    addCart(state,action){


     const exist=   state.cartArray.findIndex((val)=>{  return val.id===action.payload.id})
        // console.log(exist>=0)
// console.log(exist);

        if (exist >-1)
{
    //  console.log("HERE");
     
            state.cartArray[exist].qty += 1;
            state.total += Math.floor(action.payload.price);
}
else{
            // console.log("THERE");

            // console.log(state.cartArray[exist]);
            state.cartArray.push({ ...action.payload, qty: 1 });
            state.total += Math.floor(action.payload.price);
}

     


    }, 
    incQty(state, action) {
                // console.log(action.payload);
                const indexOfItem=action.payload.id;
                // console.log(indexOfItem);
        console.log(state.cartArray.findIndex((val)=>val.id===indexOfItem));
        state.cartArray[state.cartArray.findIndex((val) => val.id === indexOfItem)].qty+=1;
            state.total += Math.floor(action.payload.price);


                
                
        // state.cartArray.push();

                
    }, decQty(state, action) {

        const indexOfItem = action.payload.id;
        console.log(state.cartArray.findIndex((val) => val.id === indexOfItem));
        console.log(state.cartArray[state.cartArray.findIndex((val) => val.id === indexOfItem)].qty);
        if (state.cartArray[state.cartArray.findIndex((val) => val.id === indexOfItem)].qty<2)
        {
            console.log();
        }
        else{

            state.cartArray[state.cartArray.findIndex((val) => val.id === indexOfItem)].qty -= 1;
            state.total -= Math.floor(action.payload.price);
        }

         


    },
    removeCart(state, action){
        state.cartArray= state.cartArray.filter((value)=>value.id!=action.payload.id),

        state.total-=action.payload.qty*Math.floor(action.payload.price)

        
        

    }
}
})


export default cartSystem.reducer;
export const { addCart, incQty, decQty, removeCart}= cartSystem.actions;
