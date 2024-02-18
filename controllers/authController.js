import { hashPassword, comparePassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async(req, res)=>{
    try{
        const { name, email, password,answer } = req.body;
    
    //validations
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!answer) {
      return res.send({ message: "answer is Required" });
    }
    //check user
    const existingUser = await userModel.findOne({email});
    if(existingUser){
        return res.status(200).send({
            message:false,
            message:"Already register please login"
        })
        
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
        name, 
        email,
        password:hashedPassword,
        answer,
    }).save();
    res.status(200).send({
        success:true,
        message:"User Register successfully",
        user,
    })

    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in registration ",
            error,

        })
        
    }
}

//POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

export const forgotPasswordController = async(req, res)=>{
  try{
    const { email, answer, newPassword } = req.body;
    if(!email){
      res.status(400).send({message:"Email is required"})
    }
    if(!password){
      res.status(400).send({message:"password is required"})
    }
    if(!newPassword){
      res.status(400).send({message:"newPassword is required"})
    }

    const user = await userModel.findOne({email, answer});
    if(!user){
      return res.status(404).send({
        success: false,
        message: "Wrong Email Or Answer",
      });

    }
    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password:hashed})
    res.status(200).send({
      success:true,
      message:"Password Reset Successfully",
    })

  }catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
}
