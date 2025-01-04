import users from "../model/usermodel.js";

export const create = async (req, res) => {
  try {
   let userdata = new users(req.body);
   const {email}=userdata;
   const userExist=await users.findOne({email});
   if(userExist){
     return res.status(400).json({error:"user already exist"});
   }
    const savedata=userdata.save();
    res.status(200).json(savedata);
    
  } catch (error) {
    res.status(500).json({error:"internal server error"});
  }
}

export const fetch = async (req, res) => {
    try {
     const users1 = await users.find();
     if(users1.length==0){
       return res.status(404).json({error:"no user found"});
     }
     res.status(200).json({users1});

  } catch (error) {
      res.status(500).json({error:"internal server error"});
    }
  }
export const update = async (req, res) => {
  try {
   const id=req.params.id;
   const userdata = await users.findOne({_id:id});
    if(!userdata){
      return res.status(404).json({error:"no user found"});
    }
    const updatedata=await users.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json(updatedata);
}
catch (error) {
    res.status(500).json({error:"internal server error"});
  }
}
export const deleteUser = async (req, res) => {
    try {
     const id=req.params.id;
     const userdata = await users.findOne({_id:id});
        if(!userdata){
        return res.status(404).json({error:"no user found"});
        }
        const deletedata=await users.findByIdAndDelete(id);
        res.status(200).json(deletedata);
    }
    catch (error) {
        res.status(500).json({error:"internal server error"});
    }
    }
  
  export const find = async (req, res) => {
    try {
     const id=req.params.id;
     const userdata = await users.findOne({_id:id});
        if(!find)
        return res.status(404).json({error:"no user found"});
        console.log("Data found");
        return res.status(200).json({userData})
       }
    catch  {
        res.status(500).json({error:"internal server error"});
    }
    }
    