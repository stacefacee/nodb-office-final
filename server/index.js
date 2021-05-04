const express = require ('express');
const qc = require('./controllers/quoteController');

const app = express();

const port = 3010;

app.use(express.json());

//app.get('/api/office', controller.fetchQuotes)
app.get('/api/office', qc.getQuote);
app.post('/api/office', qc.addQuote);
app.delete('/api/office/:id', qc.deleteQuote);
app.put('/api/office/:id', qc.editQuote);













app.listen(port, () => {
  console.log(`your server is running on ${port}`);
});

