
const Post = require('../models/post');

module.exports.create = async function(req, res){
    
    // Post.create({
    //     content: req.body.content,
    //     user: req.user._id
    // }, function(err, post){
    //     if(err){console.log('error in creating a post'); return;}

    //     return res.redirect('back');
    // });

     
    try 
    { 
        console.log(req.body.content);
   const newPost = await Post.create({
        content: req.body.content,
        user: req.user._id
    });
   return res.redirect('back');
    
   } catch(err) {
    console.log('error in creating a post-->' , err);
}

}

