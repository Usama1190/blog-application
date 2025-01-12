import express from 'express';
import enums from '../constant/enums.js';
import Blog from '../models/blogModel.js';

const blogRoute = express.Router();

blogRoute.get('/', async (req, res) => {
    try {
        const getAllBlogData = await Blog.find();
        res.status(200).send({ status: 200, message: enums.SUCCESS_200, data: getAllBlogData });
    } catch (error) {
        res.status(404).send({ status: 404, message: enums.NOT_FOUND_404 })
    }
})

export default blogRoute;