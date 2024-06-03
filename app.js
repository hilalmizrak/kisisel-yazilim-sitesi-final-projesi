const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.post('/form', (req, res) => {
  
  console.log(req.body); 
  res.send('Form gönderimi başarıyla işlendi.');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Sunucu ${PORT} numaralı portta çalışıyor`));
