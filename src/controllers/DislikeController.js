const Dev = require('../models/Dev')

module.exports = {
    async store(req,res){
        const { devId} = req.params;
        const {user} = req.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return res.status(400).json({error:"dev nao existe"})
        }

        if(!loggedDev.dislikes.includes(targetDev._id)){
            console.log("ja likado")
            return res.json({error: "dev já dislikado"})
        }

        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();
    }
}