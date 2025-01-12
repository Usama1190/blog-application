import express from 'express';
import enums from '../constant/enums.js';
import Blogs from '../models/blogModel.js';

const blogRoute = express.Router();

blogRoute.get('/', async (req, res) => {
    try {
        const getAllBlogData = await Blogs.find();
        res.status(200).send({ status: 200, message: enums.ON_SUCCESS_200, data: getAllBlogData });
    } catch (error) {
        res.status(404).send({ status: 404, message: enums.ON_NOT_FOUND_404 })
    }
});

blogRoute.post('/add-blog', async (req, res) => {
    try {
        const addBlogData = req.body;
        const addBlog = await Blogs.create(addBlogData);
        res.status(200).send({ status: 201, message: enums.ON_CREATED_201, data: addBlog });
    } catch (error) {
        res.status(404).send({ status: 400, message: enums.ON_INVALID_REQUEST_400 })
    }
});

blogRoute.delete('/delete-blog/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBlog = await Blogs.findByIdAndDelete(id);
        res.status(200).send({ status: 200, message: enums.ON_DELETED_200, data: deletedBlog });
    } catch (error) {
        res.status(404).send({ status: 400, message: enums.ON_INVALID_REQUEST_400 })
    }
});

blogRoute.put('/update-blog/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedBlogData = await Blogs.findByIdAndUpdate(id, updateData);
        res.status(200).send({ status: 200, message: enums.ON_UPDATED_200, data: updatedBlogData });
    } catch (error) {
        res.status(404).send({ status: 400, message: enums.ON_INVALID_REQUEST_400 })
    }
});

export default blogRoute;