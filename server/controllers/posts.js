import PostMessage from "../models/postMessage.js";
export const getPosts = async (req, res) => {
    const postMessages = await PostMessage.find();
    try {
        
        console.log(postMessage);
        res.status(200).json(postMessages);
    } catch(error) {
        res.status(404).json({ message : error.message });
    }
}

export const createPost = (req, res) => {
    res.send('Post Creation');
}

