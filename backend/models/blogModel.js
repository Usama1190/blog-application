import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: { type : String },
    description: { type: String },
    author: { type: String },
    imgurl: { type: String }
}, { timestamp: true});

const Blog = mongoose.Model('blog', blogSchema);

export default Blog;