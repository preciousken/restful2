const Product = require('../models/product')
const cloudinary = require('cloudinary')


const createProduct = async (req,res,next)=>{
    // upload images to the cloudinary first then 

    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        next(error)
    }
}


// ////////////////////////
// const createProduct = async (req,res,next)=>{
//     // upload images to the cloudinary first then 
//  const imageToCloudinary=()=>{
//     try {
//         // image1
//     try {
//         cloudinary.config({ 
//     cloud_name: process.env.CLOUD_NAME, 
//     api_key: process.env.API_KEY, 
//     api_secret: process.env.API_SECRETAPI 
//   });



// cloudinary.v2.uploader.upload(req.body.image1,
//   { public_id: "profile" }, 
//   function(error, result) {
//     IMAGE1 = result.url
//     console.log(IMAGE1)
//    });
//     } catch (error) {
//         next(error)
//     }
//     // image2
//     try {
//         cloudinary.config({ 
//     cloud_name: process.env.CLOUD_NAME, 
//     api_key: process.env.API_KEY, 
//     api_secret: process.env.API_SECRETAPI 
//   });



// cloudinary.v2.uploader.upload(req.body.image2,
//   { public_id: "profile" }, 
//   function(error, result) {
//       IMAGE2 = result.url
//     console.log(IMAGE2)
//  });
//     } catch (error) {
//         next(error)
//     }
//     // image3
//     try {
//         cloudinary.config({ 
//     cloud_name: process.env.CLOUD_NAME, 
//     api_key: process.env.API_KEY, 
//     api_secret: process.env.API_SECRETAPI 
//   });



// cloudinary.v2.uploader.upload(req.body.image3,
//   { public_id: "profile" }, 
//   function(error, result) {
//     IMAGE3 = result.url
//     console.log(IMAGE3)
// });
//     } catch (error) {
//         next(error)
//     }
//     } catch (error) {
        
//     }
    

//  }

//  const postImageNow = async (req,res,next)=>{
//     await imageToCloudinary()
//     console.log('lksdjljfdlksjf')
//     console.log(imageToCloudinary.IMAGE1)
//     console.log('lksdjljfdlksjf')
//     const newProduct = new Product({...req.body, image1:imageToCloudinary.IMAGE1,image2:imageToCloudinary.IMAGE2,image3:imageToCloudinary.image3});
//     try {
//         const savedProduct = await newProduct.save()
//         res.status(200).json(savedProduct)
//     } catch (error) {
//         next(error)
//     }
//  }
//  postImageNow()
// }
// ////////////////////////



const updateProduct =async(req,res,next)=>{
    try {
        const newProduct = await Product.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        res.status(200).json(newProduct)
    } catch (error) {
        next(error)
        
    }
}

const deleteProduct = async(req,res,next)=>{
    try {
        const updatedProduct = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        next(error)
        
    }
}

const getSingleProduct = async(req,res,next)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        next(error)
        
    }
}

const getAllProducts = async(req,res,next)=>{
    try {
        const product = await Product.find({})
        // .sort("title").limit(4)
        // Product.find({$regex:title,$options:'i'})
        res.status(200).json(product)
    } catch (error) {
        next(error)
    }
}


// get products by query
const getProductQuery = async (req,res,next)=>{
    const {title} =req.query
    try {
        const ProductQuery = await Product.find({title:{$regex:req.query.title,$options:'i'}})
        res.status(200).json(ProductQuery)
    } catch (error) {
        next(error)
    }
}

// get latest product
const getLatestProduct = async (req,res,next)=>{
    try {
        const LatestProduct = await Product.find({}).sort('-createdAt').limit(4)
        res.status(200).json(LatestProduct)
    } catch (error) {
        next(error)
    }
}

// search for product
const ProductSearch = async (req,res,next)=>{
    let {title} = req.query
    try {
        const ProductSearch = await Product.find({title:{"$regex":  /^ad$/i}})
        res.status(200).json(ProductSearch)
    } catch (error) {
        next(error)
    }
}


module.exports = {createProduct,updateProduct,deleteProduct,getSingleProduct, getAllProducts , getProductQuery,getLatestProduct,ProductSearch}
