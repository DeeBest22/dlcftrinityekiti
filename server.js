const express = require('express');
const path = require('path');
const app = express()

const http = require('http');
app.use(express.static(path.join(__dirname, 'public')));
const server = http.createServer(app);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/socials', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'socials.html'));
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Services.html'));
});;
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});