const mongoose=require("mongoose");
const stu_schema=new mongoose.Schema({
    student_details:{
        f_name:{
            type:String,
            required:true
        },
        l_name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        }
    },
    contact_details:{
        city:{
            type:String,
            
        },
        landmark:{
            type:String,
            
        },
        email2:{
            type:String,
            
        },
        mobile:{
            type:String,
            
        }
    },
    education_details:{
        school:{
            type:String,
            
        },
        s_address:{
            type:String,
            
        },
        email3:{ 
            type:String,
            
        },
        name:{ 
            type:String,
            
        },
        reg_no:{ 
            type:String,
           
        },
        roll_no:{
            type:String,
            
        }
    }
});

module.exports=mongoose.model("student_register",stu_schema)