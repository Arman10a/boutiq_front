require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
const {post} = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


post('/create-checkout-session',  (req, res) => {
    try {
        const session =  stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: { name: 'Product Name' },
                        unit_amount: 5000, // 50.00 USD
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:5173/success',
            cancel_url: 'http://localhost:5173/cancel',
        });

        res.json({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Payment Intent API (Stripe Elements-ի համար)
post('/create-payment-intent', async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 5000,
            currency: 'usd',
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Սերվերի գործարկում
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});

const io = require("socket.io")(6001, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("sendMessage", (message) => {
        io.emit("message", message);
    });
});
