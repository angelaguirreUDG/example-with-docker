const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.json({message: 'This is the root'})
})

module.exports = router