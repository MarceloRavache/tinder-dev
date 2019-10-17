const axios = require('axios');
const Dev = require('../models/Dev')

module.exports = {

    async index(req,res){
        const {user} = req.headers;

        const loggedUser = Dev.findById(user);

        const users = await Dev.find({
            $and:[
                {_id: {$ne:user}},
            { _id:{$nin:loggedUser.likes}},
            {_id:{$nin: loggedUser.dislikes}
            }]
        })
        return res.json(users);
    },

    async store(req,res){
        const { username} = req.body;
        const userExist = await Dev.findOne({user:username});

        if(userExist){
            return res.json(userExist);
        }

        const response = await axios.get(`http://api.github.com/users/${username}`);

        const {login:name,bio, avatar_url: avatar} = response.data;

        const dev = await Dev.create({
            name,
            user:username,
            bio,
            avatar
        })

        return res.json(dev);
    }
}