import express from 'express';
import enums from '../constant/enums.js';
import Blogs from '../models/blogModel.js';

const blogRoute = express.Router();

blogRoute.get('/', async (req, res) => {
    try {
        const getAllBlogData = await Blogs.find();
        res.status(200).send({ status: 200, message: enums.SUCCESS_200, data: '' });
    } catch (error) {
        res.status(404).send({ status: 404, message: enums.NOT_FOUND_404 })
    }
});

blogRoute.post('/add-blog', async (req, res) => {
    try {
        const addBlogData = req.body;
        const addBlog = await Blogs.create(addBlogData);
        res.status(200).send({ status: 200, message: enums.SUCCESS_200, data: addBlog });
    } catch (error) {
        res.status(404).send({ status: 404, message: enums.NOT_FOUND_404 })
    }
});

blogRoute.delete('/delete-blog', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBlog = await Blogs.findByIdAndDelete(id);
        res.status(200).send({ status: 200, message: enums.SUCCESS_200, data: deletedBlog });
    } catch (error) {
        res.status(404).send({ status: 404, message: enums.NOT_FOUND_404 })
    }
});

blogRoute.put('/update-blog', async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedBlogData = await Blogs.findByIdAndUpdate(id, updateData);
        res.status(200).send({ status: 200, message: enums.SUCCESS_200, data: updatedBlogData });
    } catch (error) {
        res.status(404).send({ status: 404, message: enums.NOT_FOUND_404 })
    }
});

export default blogRoute;