const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const UsersModel = require("./models/Users");
const OrdersModel = require("./models/Orders");
const app = express();
app.use(cors(
    {
    origin:["https://deploy-mern-1whq.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
    ));
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Users");

app.get("/",(req,res)=>
    {
        res.json("Hello");
    });
// Register endpoint with password hashing
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "Name, email, and password are required" });
    }

    try {
        // Hash the password with a salt rounds of 10
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user with hashed password
        const newUser = new UsersModel({
            name,
            email,
            password: hashedPassword, // Store the hashed password
        });

        // Save the new user to the database
        await newUser.save();
        res.json(newUser);
    } catch (err) {
        console.error("Error during registration:", err);
        res.status(500).json({ error: "Failed to register user", err });
    }
});

// Login endpoint with password comparison
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    UsersModel.findOne({ email })
        .then(async (user) => {
            if (user) {
                // Compare the provided password with the hashed password
                const match = await bcrypt.compare(password, user.password);

                if (match) {
                    res.json("Success");
                } else {
                    res.json("The password is incorrect");
                }
            } else {
                res.json("No record exists");
            }
        })
        .catch(err => {
            console.error("Login error:", err);
            res.status(500).json({ error: "Error during login", err });
        });
});

// Orders endpoint
app.post("/orders", (req, res) => {
    const { userId, items, totalAmount, paymentMode, address, phoneNumber } = req.body;

    if (!userId || !items || !totalAmount || !paymentMode || !address || !phoneNumber) {
        return res.status(400).json({ error: "All fields are required" });
    }

    OrdersModel.create({
        userId,
        items,
        totalAmount,
        paymentMode,
        address,
        phoneNumber,
    })
        .then((order) => res.json({ message: "Order placed successfully", order }))
        .catch((err) => {
            console.error("Failed to save order:", err);
            res.status(500).json({ error: "Failed to place order", err });
        });
});

app.listen(3000, () => {
    console.log("server is running");
});
