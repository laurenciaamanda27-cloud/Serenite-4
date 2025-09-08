const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint test
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Endpoint kirim email
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("📩 Request masuk:", req.body);   // <-- Tambah log

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pipofernandes17@gmail.com",
      pass: "jkyyrqdrnzwxkjbm",
    },
  });

  let mailOptions = {
    from: "pipofernandes17@gmail.com",
    to: "pipofernandes17@gmail.com",
    replyTo: email,
    subject: `Feedback dari ${name}`,
    text: message,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("✅ Email terkirim:", info.response);  // <-- Tambah log
    res.status(200).send("Email terkirim!");
  } catch (error) {
    console.error("❌ ERROR:", error);  // <-- Tambah log error detail
    res.status(500).send("Gagal kirim email.");
  }
});


app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
