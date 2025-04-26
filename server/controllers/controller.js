const PostModel = require('../models/Post');

module.exports.createPost = async (req, res) => {

   const { routeParam, description, expiryTime } = req.body;

   try {

      const doc = await PostModel.findOne({
         routeParam,
      })

      if (doc) {
         return res.status(400).json({
            sucess: false,
            message: "You can't create a POST here",
         })
      }

      const data = await PostModel.create({
         routeParam,
         content: description,
         expiresAt: Date.now() + expiryTime * 60 * 1000
      })

      return res.status(200).json({
         sucess: true,
         message: "Post created successfully",
         data,
      })

   } catch (error) {
      res.status(500).json({
         sucess: false,
         message: "Something went wrong",
         error: error.message,
      })
   }
}

module.exports.getPost = async (req, res) => {

   const { routeParam } = req.query;

   try {

      const response = await PostModel.findOne({
         routeParam,
      }).select('routeParam content')

      if (!response) {
         return res.json({
            success: false,
            message: "No entry Found",
         })
      }

      res.status(200).json({
         success: true,
         message: "Post found",
         data: response,
      })

   } catch (error) {
      res.status(500).json({
         success: false,
         message: "Internal SERVER Error",
         error: error.message,
      })
   }
}