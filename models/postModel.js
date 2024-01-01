const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    title:{                        // post title
        type:String,
        required:true
    },

    body:{                         // post body
        type:String,
        required:true
    },

    likes:[{                       // likes array for the post
        type:mongoose.Schema.Types.ObjectId, // like model
        ref:"Like",
    }],

    comments:[{                    // comments array for the post
        type:mongoose.Schema.Types.ObjectId,  // comment model
        ref:"Comment",
    }],

})

module.exports=mongoose.model("Post",postSchema);