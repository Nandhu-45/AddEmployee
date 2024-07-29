const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/', async (req, res) => {
  const { name, email, position } = req.body;

  try {
    const [results] = await db.execute(
      'INSERT INTO employees (name, email, position) VALUES (?, ?, ?)',
      [name, email, position]
    );
    res.status(201).json({ message: 'Employee added successfully' });
  } catch (err) {
    console.error('Error inserting employee:', err);
    res.status(500).json({ message: 'Failed to add employee' });
  }
});

module.exports = router;
