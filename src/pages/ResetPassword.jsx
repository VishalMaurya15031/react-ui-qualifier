import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSendLink = (e) => {
    e.preventDefault();
    if (email) setStep(2);
  };

  const handleReset = (e) => {
    e.preventDefault();
    if (newPassword && newPassword === confirmPassword) {
      setStep(3);
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="page-container" style={{ justifyContent: step === 3 ? 'center' : 'flex-start' }}>
      {step === 1 && (
        <>
          <h1 style={{ marginTop: '20px', marginBottom: '8px' }}>Reset Password</h1>
          <p style={{ fontSize: '15px', color: 'var(--color-gray-text)', marginBottom: '30px' }}>
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <form onSubmit={handleSendLink} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="input-group">
              <label className="input-label">Email address</label>
              <input 
                type="email" 
                className="input-field" 
                placeholder="Enter email address" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ padding: '16px' }}>
              Send Reset Link
            </button>
          </form>
          
          <button 
            className="btn" 
            onClick={() => navigate('/login')} 
            style={{ backgroundColor: 'transparent', color: 'var(--color-text)', marginTop: '20px' }}
          >
            Cancel
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h1 style={{ marginTop: '20px', marginBottom: '8px' }}>Create New Password</h1>
          <p style={{ fontSize: '15px', color: 'var(--color-gray-text)', marginBottom: '30px' }}>
            Your new password must be different from previous used passwords.
          </p>

          <form onSubmit={handleReset} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="input-group">
              <label className="input-label">New Password</label>
              <input 
                type="password" 
                className="input-field" 
                placeholder="Must be at least 8 characters" 
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label className="input-label">Confirm Password</label>
              <input 
                type="password" 
                className="input-field" 
                placeholder="Confirm your password" 
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ padding: '16px' }}>
              Reset Password
            </button>
          </form>
        </>
      )}

      {step === 3 && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#e2f5ec', color: '#10b981', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '30px' 
          }}>
            ✓
          </div>
          <h1 style={{ marginBottom: '8px' }}>Password Reset done</h1>
          <p style={{ fontSize: '15px', color: 'var(--color-gray-text)', marginBottom: '30px' }}>
            Your password has been successfully reset. Click below to log in magically.
          </p>
          <button onClick={() => navigate('/login')} className="btn btn-primary" style={{ padding: '16px' }}>
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
