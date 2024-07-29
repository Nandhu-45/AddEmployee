const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const authRoutes = require('./routes/auth');
const employeeRoutes = require('./routes/employees');

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',  
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,  
}));

app.use('/auth', authRoutes);
app.use('/employees', employeeRoutes);

app.listen(3009, () => {
  console.log('Server is running on port 3009');
});
