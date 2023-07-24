var express = require('express');
var router = express.Router();
const stu_details=require("../models/s_reg_schema")


router.get('/', function(req, res, next) {
  res.render('s_register');
});

router.post("/", async (req, res) => {
	const user = await stu_details.create({
		student_details:{
			f_name:req.body.f_name,
			l_name:req.body.l_name,
			email:req.body.email,
			age:req.body.age
		},
		contact_details:{
			city:req.body.city,
			landmark:req.body.landmark,
			email2:req.body.email2,
			mobile:req.body.mobile
		},
		education_details:{
			school:req.body.school,
			s_address:req.body.s_address,
			email3:req.body.email3,
			name:req.body.name,
			reg_no:req.body.reg_no,
			roll_no:req.body.roll_no
		}
	
});
return res.status(200).json(user);
})

module.exports = router