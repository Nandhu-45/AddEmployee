import React, { useState } from 'react';
import './addEmployee.css'; 

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const employee = { name, email, position };
    
    console.log('Employee Added:', employee);
    
    setName('');
    setEmail('');
    setPosition('');
  
    try {
      const response = await fetch('http://localhost:3009/employees', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Employee added successfully:', data);
        
      } else {
        console.error('Failed to add employee:', response.status);
        
      }
    } catch (error) {
      console.error('Error:', error);
      
    }
  };
  

  return (
    <div className="add-employee-container">
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            className="add-employee-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="name" className="add-employee-label">Name</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            className="add-employee-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email" className="add-employee-label">Email</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="position"
            className="add-employee-input"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
          <label htmlFor="position" className="add-employee-label">Position</label>
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
