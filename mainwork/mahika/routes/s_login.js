var express = require('express');
var router = express.Router();
const s_reg_schema=require("../models/s_reg_schema")

router.get('/', function(req, res, next) {
  res.render('s_login');
});

router.post("/", async function(req, res){
	try {
		// check if the user exists
		const user = await s_reg_schema.findOne({"student_details.email" : req.body.email });
		if (user) {
		//check if password matches
		// console.log("username");
		const result = req.body.age === user.student_details.age;
		if (result) {
			const userData = await s_reg_schema.findOne({ "_id": user._id }, { "student_details.f_name": 1 ,"student_details.email": 1 ,"education_details.reg_no": 1});
			
            const name1 = userData.student_details.f_name;
			const email1 = userData.student_details.email;
			const regno1 = userData.education_details.reg_no;
			
			res.render("s_dashboard",{name:name1,email:email1,regno:regno1});
		} else {
			res.status(400).json({ error: "password doesn't match" });
		}
		} else {
		res.status(400).json({ error: "User doesn't exist" });
		}
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = router;