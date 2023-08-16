
module.exports = {
    index (req, res){
        res.send('ดูข้อมูลผู้ใช้ทั้งหมด')
    },

    create (req, res){
        res.send('สร้างผู้ใช้' + JSON.stringify(req.body))
    },

    put (req, res){
        res.send('แก้ไขข้อมูลผู้ใช้' + req.params.userId + " " + JSON.stringify(req.body.name))
    },

    delete (req, res){
        res.send('ลบข้อมูลผู้ใช้' + req.params.userId + " " + JSON.stringify(req.body.name))
    },

    show (req, res) {
        res.send('ดูข้อมูลผู้ใช้งาน' + req.params.userId + " " + JSON.stringify(req.body))
    }
}
