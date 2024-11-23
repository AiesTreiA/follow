const express = require('express');
const router = express.Router();
const stripe = require('stripe')('TU_CLAVE_SECRETA_DE_STRIPE');

router.post('/create', async (req, res) => {
  const { name, email, date, amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // convertir a centavos
      currency: 'usd',
      payment_method_types: ['card'],
      receipt_email: email,
    });

    // Aquí puedes agregar la lógica para guardar la reserva en tu base de datos

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
