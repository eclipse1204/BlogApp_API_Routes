const mongoose=require('mongoose');

const commentSchema=new mongoose.Schema({
    post:{       //id of the post liked (reference of the post)
        type:mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },

    user:{       //user who commented on the post  
        type:String,
        required:true
    },

    body:{       // comment body
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Comment",commentSchema);