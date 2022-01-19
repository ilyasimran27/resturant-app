import mongoose from 'mongoose';

const card = mongoose.Schema({
    customerName: String,
    customerEmail: String,
    items: [{
        dishName: String,
        quantity: Number,
    }],
    createdOn: { type: Date, default: Date.now },
})

const Cart = mongoose.model("resturantCart", card)

export default Cart;