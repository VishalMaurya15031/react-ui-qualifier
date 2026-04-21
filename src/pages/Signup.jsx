import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="page-container" style={{ paddingBottom: '0' }}>
      <h1 style={{ marginTop: '20px', marginBottom: '30px' }}>Create your<br />PopX account</h1>

      <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="input-group">
            <label className="input-label" style={{ color: 'var(--color-primary)' }}>Full Name<span style={{color:'var(--color-danger)'}}>*</span></label>
            <input 
              type="text" 
              name="name"
              className="input-field" 
              placeholder="Enter name"
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label className="input-label" style={{ color: 'var(--color-primary)' }}>Phone number<span style={{color:'var(--color-danger)'}}>*</span></label>
            <input 
              type="tel" 
              name="phone"
              className="input-field" 
              placeholder="Enter phone number" 
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label className="input-label" style={{ color: 'var(--color-primary)' }}>Email address<span style={{color:'var(--color-danger)'}}>*</span></label>
            <input 
              type="email" 
              name="email"
              className="input-field" 
              placeholder="Enter email address" 
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label className="input-label" style={{ color: 'var(--color-primary)' }}>Password<span style={{color:'var(--color-danger)'}}>*</span></label>
            <input 
              type="password" 
              name="password"
              className="input-field" 
              placeholder="Enter password" 
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label className="input-label" style={{ color: 'var(--color-primary)' }}>Company name</label>
            <input 
              type="text" 
              name="company"
              className="input-field" 
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          {/* Agency Selection */}
          <div style={{ marginTop: '20px' }}>
            <p style={{ fontSize: '15px', color: 'var(--color-text)', marginBottom: '12px' }}>Are you an Agency?<span style={{color:'var(--color-danger)'}}>*</span></p>
            <div style={{ display: 'flex', gap: '30px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '15px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: formData.isAgency === 'yes' ? '6px solid var(--color-primary)' : '1px solid var(--color-gray)', transition: 'all 0.2s', backgroundColor: formData.isAgency === 'yes' ? 'transparent' : 'transparent' }} />
                <input 
                  type="radio" 
                  name="isAgency" 
                  value="yes" 
                  checked={formData.isAgency === 'yes'} 
                  onChange={handleChange}
                  style={{ display: 'none' }} 
                />
                Yes
              </label>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '15px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: formData.isAgency === 'no' ? '6px solid var(--color-primary)' : '1px solid var(--color-gray)', transition: 'all 0.2s', backgroundColor: formData.isAgency === 'no' ? 'transparent' : 'transparent' }} />
                <input 
                  type="radio" 
                  name="isAgency" 
                  value="no" 
                  checked={formData.isAgency === 'no'} 
                  onChange={handleChange}
                  style={{ display: 'none' }} 
                />
                No
              </label>
            </div>
          </div>
        </div>

        <div style={{ padding: '24px 0', borderTop: 'none', backgroundColor: 'var(--color-white)' }}>
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
