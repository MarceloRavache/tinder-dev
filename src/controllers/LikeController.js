const Dev = require('../models/Dev')

module.exports = {
    async store(req,res){
        const {devId} = req.params;
        const {user} = req.headers;
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);
        console.log(loggedDev.likes);


        if(!targetDev){
            return res.status(400).json({error:"dev nao existe"})
        }

        if(targetDev.likes.includes(loggedDev._id)){
            console.log("sussa!!")
        }
        if(!loggedDev.likes.includes(targetDev._id)){
            console.log("ja likado")
            return res.json({error: "dev já likado"})
        }
        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json(targetDev);
    }
}