import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const isFormValid = email.trim() !== '';

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/profile');
    }
  };

  const simulateGoogleLogin = () => {
    setIsGoogleLoading(true);
    setTimeout(() => {
      navigate('/profile');
    }, 1500);
  };

  return (
    <div className="page-container">
      <h1 style={{ marginTop: '20px', marginBottom: '8px' }}>Sign in</h1>
      <p style={{ fontSize: '16px', color: 'var(--color-gray-text)', marginBottom: '40px' }}>
        New user? <Link to="/signup" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '500' }}>Create an account</Link>
      </p>

      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="input-group" style={{ marginBottom: '0' }}>
          <label className="input-label">Email address</label>
          <input 
            type="email" 
            className="input-field" 
            placeholder="Enter email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary" 
          style={{ padding: '16px', marginTop: '10px' }}
          disabled={!isFormValid}
        >
          Sign in
        </button>

        <div style={{ textAlign: 'center', margin: '16px 0', position: 'relative' }}>
          <hr style={{ borderTop: '1px solid var(--color-gray)', margin: '0' }} />
          <span style={{ 
            backgroundColor: 'var(--color-white)', 
            padding: '0 12px', 
            position: 'absolute', 
            top: '-10px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            color: 'var(--color-gray-text)', 
            fontSize: '14px',
            textTransform: 'uppercase'
          }}>
            Or
          </span>
        </div>

        <button 
          type="button" 
          className="btn" 
          disabled={isGoogleLoading}
          style={{ 
            backgroundColor: '#ffffff', 
            border: '1px solid var(--color-gray)', 
            color: 'var(--color-text)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
          }}
          onClick={simulateGoogleLogin}
        >
          {isGoogleLoading ? 'Connecting to Google...' : (
            <>
              {/* Google Icon SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </>
          )}
        </button>
      </form>

      <div className="bottom-align" style={{ alignItems: 'center', gap: '24px' }}>
        <button 
          onClick={() => navigate('/reset-password')} 
          style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontSize: '15px', fontWeight: '500', cursor: 'pointer', textDecoration: 'none' }}
        >
          Reset your password
        </button>
        <button 
          onClick={() => navigate('/other-providers')} 
          style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontSize: '15px', fontWeight: '500', cursor: 'pointer', textDecoration: 'none' }}
        >
          Sign in with a different email address
        </button>
      </div>
    </div>
  );
};

export default Login;
