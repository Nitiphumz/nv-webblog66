const {User} = require('../models')

module.exports = {

    
    // Get all users
    async index(req, res) {
        //res.send('ดูข้อมูลผู้ใช้งานทั้งหมด');
        try {
            const users = await User.findAll()
            res.send(users)
        } catch (error) {
            res.status(500).send({
                error: 'The users information was incorrect'
            })
        }
    },

    // Create user
    async create(req, res) {
        //res.send('ทำการสร้างผู้ใช้งาน' + JSON.stringify(req.body));
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (error) {
            res.status(500).send({
                error: 'Create users information was incorrect'
            })
        }
    },

    // Edit user
    // res.send('แก้ไขข้อมูลผู้ใช้ ' + req.params.userId + ' : ' + JSON.stringify(req.body.name));
    async put(req, res) {
        try {
            await User.update(req.body, {
                where: {
                    id: req.params.userId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update user incorrect'
            })
        }
    },

    // Delete user
    async delete(req, res) {
        //res.send('ทำการลบผู้ใช้งาน:' + req.params.userId + ' : ' + JSON.stringify(req.body));
    try {
        const user = await User.findOne({
            where: {
                id: req.params.userId
            }
        })
        if (!user){
            return res.status(403).send({
                error: 'The user id is not found'
            })
        }

        await user.destroy()
        res.send(user)

    } catch (error) {
        res.status(500).send({
            error: 'Delete user incorrect'
        })
    }
    },

    async show(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    id: req.params.userId
                }
            })
            if (!user){
                return res.status(403).send({
                    error: 'The user id is not found'
                })
            }
            res.send(user)
        } catch (err) {
            res.status(500).send({
                error: 'The user information was incorrect'
            })
        }
    }
};

