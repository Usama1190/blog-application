import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: { type : String },
    description: { type: String },
    author: { type: String },
    imgurl: { type: String }
}, { timestamps: true});

const Blogs = mongoose.model('Blogs', blogSchema);

export default Blogs;