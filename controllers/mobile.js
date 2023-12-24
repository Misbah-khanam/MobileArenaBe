import { readFileSync } from 'fs'
import users from '../models/user.js'
import mobiles from '../models/mobile.js'

export const addMobile = async(req, res) => {
    const{seller_name, modelNO, company,processor, name, type, memory, os, actual_price, selling_price } =  req.body
    try{
        const newMobile = await mobiles.create({
            seller_name, modelNO, company,processor, name, type, memory, os, actual_price, selling_price
        })
        newMobile.img.data = readFileSync(req.files[0].path)
        newMobile.img.contentType = 'image/png';
        newMobile.save();
        res.status(200).json({message:"successfullly added mobile"})
    }catch(error){
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
}

export const retMobile = async(req, res) => {
    try{
        const mobile_ret = await mobiles.find()
        var imgs = []
        for(var i=0;i<mobile_ret.length;i++){
            var base64Image = mobile_ret[i].img.data.toString('base64');
            imgs.push(base64Image)
        }
        res.status(200).json({mobiles:mobile_ret, imgs: imgs, message: "successfullly retrieved mobiles" })
    }catch(error){
        console.log(error)
        res.status(500).json({message:"something went wrong"})
    }
}

export const filterMobile = async(req,res) => {
    try{
        const {price, type, os, processor, memory} = req.body
        const mobiles_filter = await mobiles.find({"processor" : {$in: processor},"type" : {$in: type},"os" : {$in: os},"memory" : {$in: memory},"selling_price": {$gt:parseInt(price.split('-')[0]), $lt:parseInt(price.split('-')[1])}})
        var imgs = []
        for(var i=0;i<mobiles_filter.length;i++){
            var base64Image = mobiles_filter[i].img.data.toString('base64');
            imgs.push(base64Image)
        }
        res.status(200).json({mobiles:mobiles_filter, imgs: imgs, message:"filtered Successfully"})
    }catch(error){
        console.log(error)
        res.status(500).json({message:"something went wrong"})
    }
}