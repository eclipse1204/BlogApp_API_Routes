const mongoose=require('mongoose');

const likeSchema=new mongoose.Schema({
    post:{  //id of the post liked
        type:mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },

    user:{  //user who liked the post
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Like",likeSchema);