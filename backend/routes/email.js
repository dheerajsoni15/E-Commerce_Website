// // server/routes/email.js
// const express = require('express');
// const nodemailer = require('nodemailer');
// const router = express.Router();

// // Configure Nodemailer transport
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // Use your email service provider
//   secure:true,
//   auth: {
//     user: 'dmprajapati98@gmail.com', // Replace with your email
//     pass: 'lgak fnpo yfvy ecrn', // Replace with your email password or an app password
//   },
// });

// router.post('/send-purchase-email', async (req, res) => {
//   const { email, total } = req.body;

//   const mailOptions = {
//     from: 'dmprajapati98@gmail.cpm',
//     to: email,
//     subject: 'Purchase Confirmation',
//     text: `Thank you for your purchase!\n\nTotal amount: Rs.${total}\n\nBest regards,\nYour Company`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).send({ message: 'Email sent successfully' });
//   } catch (error) {
//     res.status(500).send({ message: 'Failed to send email' });
//   }
// });

// module.exports = router;

// server/routes/email.js
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Configure Nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service provider
  secure: true,
  auth: {
    user: 'dmprajapati98@gmail.com', // Replace with your email
    pass: 'lgak fnpo yfvy ecrn', // Replace with your email password or an app password
  },
});

router.post('/send-purchase-email', async (req, res) => {
  const { email, products, total } = req.body;

  // Create a formatted list of products
  const productDetails = products.map(item => 
    `Product: ${item.name}\nQuantity: ${item.quantity}\nPrice: Rs.${item.price}\n\n`
  ).join('');

  const mailOptions = {
    from: 'dmprajapati98@gmail.com', // Corrected typo
    to: email,
    subject: 'Purchase Confirmation',
    text: `Thank you for your purchase!\n\n${productDetails}Total amount: Rs.${total}\n\nBest regards,\nCooking Dheeraj`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Failed to send email' });
  }
});

module.exports = router;
