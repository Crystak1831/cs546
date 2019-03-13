const express = require("express");
const router = express.Router();
router.get('/', async (req, res) => {
    const myInfo = {
	      name     : 'Guangqi Qing',
	      dob      : '11/17',
	      hometown : "Chinese"
    };
    res.json(myInfo);
});
module.exports = router;
