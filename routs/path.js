const express = require('express')

const router = express.Router()

router.post("/reg", (req, res) => {

     console.log(req.body)
     res.json({message: "ok"})
})
module.exports = router
