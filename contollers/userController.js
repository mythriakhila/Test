const userModel = require("../model/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const Crpyto = require("crypto-js");

exports.createUser = async (data) => {
    try {
        const { email, phone } = data;
        const checkEmail = await userModel.find({ email });
        if (checkEmail.length) {
            return ({ err: "Email registered" })
        }
        const checkPhone = await userModel.find({ phone });
        if (checkPhone.length) {
            return ({ err: "Phone registered" })
        }
        return data;
    } catch (error) {
        return ({ err: error.message })
    }
}

exports.deleteUser = async (data) => {
    try {
        const { body, userId } = data;
        const deleteUser = await userModel.findByIdAndDelete(userId, { ...body },{new:true});
        return deleteUser;
    } catch (error) {
        return ({ err: error.message })
    }
}

