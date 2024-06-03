const { z } = require("zod");

const loginSchema = z.object({

    email: z.string({required_error: "email is required"}).trim()
    .email({message: "Invalid email address"})
    .min(10, {message: "email must be atleast 10 characters.. "})
    .max(200, { message: "email must not be more than 200 characters"}),

    password: z.string({required_error: "Password is required"})
    .min(6, {message: "password must be atleast 6 characters.. "})
    .max(100, { message: "Password must not be more than 100 characters"}),
 
});

const signupSchema = loginSchema.extend({
    username: z.string({required_error: "Name is required"}).trim()
    .min(3, {message: "Name must be atleast 3 characters.. "})
    .max(255, { message: "Name must not be more than 255 characters"}),
    
    phone: z.string({required_error: "Phone number is required"}).trim()
    .min(10, {message: "Number must be atleast 10 characters.. "})
    .max(10, { message: "Number must not be more than 10 numbers"}),
    
    });

module.exports = {signupSchema, loginSchema};