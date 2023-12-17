import React, { useState } from 'react';
import axios from 'axios';

const PasswordChecker = () => {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const checkPasswordStrength = async () => {
    try {
      const response = await axios.post('http://localhost:5000/check-password', { password });
      setResult(response.data);
    } catch (error) {
      console.error('Error checking password strength:', error);
    }
  };

  const handleReset = () => {
    // Clear the input field
    setPassword('');
    // Refresh the page
    window.location.reload();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-checker-container">
      <h1>Password Strength Checker</h1>
      <label>Enter Your Password:</label>
      <div className="password-input-container">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <div className="toggle-btn" onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
        </div>
      </div>
      <button onClick={checkPasswordStrength}>Check</button>
      <button onClick={handleReset}>Reset</button>
      {result !== null && (
        <p style={{ color: result === 0 ? 'green' : 'red' }}>
          {result === 0
            ? 'Your password is strong.'
            : `Your password is weak. Minimum steps required to make it strong = ${result}.`}
        </p>
      )}
      <div className="conditionlist">
        <p> A password is considered strong if:</p>
        <ul>
          <li>It has at least 6 characters and at most 20 characters.</li>
          <li>It contains at least one lowercase letter (a-z), at least one uppercase letter (A-Z), and at least one digit (0-9).</li>
          <li>It does not contain three repeating characters in a row.</li>
          <li>Example: 1337C0d3 (strong), abc1234 (weak)</li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordChecker;