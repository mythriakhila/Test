const { Router } = require("express");
const { createUser, deleteUser } = require("../contollers/userController");

const userRouter = new Router();

userRouter.put("/createUser",async (req,res) => {
    try {
        const response =await createUser(req.body);
        res.send(response);
        res.end();
    } catch (error) {
        res.send({err: error.message});
        res.end();
    }
})

userRouter.delete("/deleteUser", async (req,res)=> {
    if(req.body) {
        const response =await deleteUser(req);
        res.send(response);
        res.end();
    } else {
        res.send({err: "Please Login!!!"})
        res.end()
    }
})

module.exports = userRouter;