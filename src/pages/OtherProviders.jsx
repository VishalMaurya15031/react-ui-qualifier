import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OtherProviders = () => {
  const navigate = useNavigate();
  const [loadingProvider, setLoadingProvider] = useState(null);

  const simulateLogin = (provider) => {
    setLoadingProvider(provider);
    setTimeout(() => {
      navigate('/profile');
    }, 1500); // simulate network request before redirecting
  };

  return (
    <div className="page-container">
      <h1 style={{ marginTop: '20px', marginBottom: '8px' }}>Log in via Social</h1>
      <p style={{ fontSize: '15px', color: 'var(--color-gray-text)', marginBottom: '30px' }}>
        Select a different provider to access your account securely.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '10px' }}>
        
        {/* Facebook */}
        <button 
          className="btn" 
          disabled={loadingProvider !== null}
          onClick={() => simulateLogin('Facebook')}
          style={{ backgroundColor: '#1877F2', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', border: 'none' }}
        >
          {loadingProvider === 'Facebook' ? 'Connecting...' : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.093 10.125 24v-8.437H7.078v-3.49h3.047V9.406c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.093 24 18.1 24 12.073z" />
              </svg>
              Continue with Facebook
            </>
          )}
        </button>

        {/* Apple */}
        <button 
          className="btn" 
          disabled={loadingProvider !== null}
          onClick={() => simulateLogin('Apple')}
          style={{ backgroundColor: '#000000', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', border: 'none' }}
        >
          {loadingProvider === 'Apple' ? 'Connecting...' : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.126 3.792 3.04 1.52-.087 2.116-.924 3.96-.924 1.832 0 2.386.924 3.987.89 1.636-.027 2.668-1.497 3.655-2.95 1.144-1.636 1.62-3.232 1.65-3.32-.04-.012-3.115-1.196-3.14-4.814-.026-3.03 2.483-4.49 2.597-4.56-1.428-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.41-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.442 2.34-.14 3.684 1.341.104 2.686-.688 3.427-1.672z" />
              </svg>
              Continue with Apple
            </>
          )}
        </button>

        {/* Microsoft */}
        <button 
          className="btn" 
          disabled={loadingProvider !== null}
          onClick={() => simulateLogin('Microsoft')}
          style={{ backgroundColor: '#ffffff', color: '#5e5e5e', border: '1px solid #8c8c8c', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}
        >
          {loadingProvider === 'Microsoft' ? 'Connecting...' : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#f35325" d="M11.4 11.4H0V0h11.4v11.4z" />
                <path fill="#81bc06" d="M24 11.4H12.6V0H24v11.4z" />
                <path fill="#05a6f0" d="M11.4 24H0V12.6h11.4V24z" />
                <path fill="#ffba08" d="M24 24H12.6V12.6H24V24z" />
              </svg>
              Continue with Microsoft
            </>
          )}
        </button>

        {/* Kakao */}
        <button 
          className="btn" 
          disabled={loadingProvider !== null}
          onClick={() => simulateLogin('Kakao')}
          style={{ backgroundColor: '#FEE500', color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', border: 'none' }}
        >
          {loadingProvider === 'Kakao' ? 'Connecting...' : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3c-5.522 0-10 3.535-10 7.896 0 2.825 1.83 5.3 4.673 6.666-.3 1.134-1.077 4.14-1.11 4.316-.041.22.078.21.164.155.112-.07 3.51-2.392 4.095-2.793.684.077 1.41.119 2.178.119 5.522 0 10-3.534 10-7.896C22 6.535 17.522 3 12 3" />
              </svg>
              Continue with Kakao
            </>
          )}
        </button>

      </div>

      <div className="bottom-align">
        <button 
          onClick={() => navigate('/login')} 
          style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontSize: '15px', fontWeight: '500', cursor: 'pointer' }}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default OtherProviders;
