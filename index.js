const express = require('express');
const mongoose = require('mongoose');
// const {json,urlencoded} = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

//  app.use(urlencoded({extended:false}));
 const router = require("./routes/userRouter");
app.use("/createUser",router)
mongoose.connect("mongodb://mythriakhila:mythri5090@ac-xig0ct5-shard-00-00.ie6jvji.mongodb.net:27017,ac-xig0ct5-shard-00-01.ie6jvji.mongodb.net:27017,ac-xig0ct5-shard-00-02.ie6jvji.mongodb.net:27017/scripts?ssl=true&replicaSet=atlas-12dqso-shard-0&authSource=admin&retryWrites=true&w=majority").then(
  () => console.log('DB conected')
)



app.listen(5000,()=>console.log('listening to port 5000'))
