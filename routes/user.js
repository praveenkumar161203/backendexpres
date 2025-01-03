const express =require('express');
let router = express.Router();
// router.get("/",(req,res)=>{
//     res.send("user route");
// })
router.route("/:id")
   .get((req,res)=>{
    res.send("retrive id value"+req.params.id);
  
  })
  .put((req,res)=>{
    res.send("update id value"+req.params.id);
  
  })
  .delete((req,res)=>{
    res.send("delete id value"+req.params.id);
  
  })
module.exports = router;