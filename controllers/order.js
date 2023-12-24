import users from "../models/user.js";
import orders from "../models/orders.js";
import mobiles from '../models/mobile.js'

export const addOrder = async(req, res) => {
    const{user, address, payment_type, phone, mobile} = req.body;
    try{
        const newOrder = await orders.create({
            user, address, phone, payment_type, mobile
        })
        await users.findByIdAndUpdate(user, { $addToSet: { orders: newOrder._id } });
        res.status(200).json({message:"ordered Successfully"})
    }catch(error){
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
}

export const retOrders = async(req, res) => {
    const{user_id} = req.body;
    try{
        const orders_ret = await orders.find({"user" : user_id})
        var mobile_names = []
        for(let i=0;i<orders_ret.length;i++){
            var mobile_name = await mobiles.findOne({_id: orders_ret[i].mobile})
            mobile_names.push(mobile_name)
        }
        res.status(200).json({orders: orders_ret, mobile_names: mobile_names, message: "orders retrieved"})
    }catch(error){
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
}