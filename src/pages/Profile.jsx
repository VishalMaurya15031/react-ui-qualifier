import React, { useState } from 'react';
import { Camera, ChevronRight, User, Bell, Shield, LogOut, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    if (openSection === sectionName) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionName);
    }
  };

  const settingsOptions = [
    {
      id: 'personal',
      title: 'Personal Details',
      icon: <User size={18} />,
      content: 'Here you can edit your personal details such as Name, Email, and Phone Number.'
    },
    {
      id: 'notifications',
      title: 'Notification Preferences',
      icon: <Bell size={18} />,
      content: 'Manage how you receive alerts, emails, and push notifications.'
    },
    {
      id: 'privacy',
      title: 'Privacy & Security',
      icon: <Shield size={18} />,
      content: 'Change your password, set up 2FA, and manage active sessions.'
    }
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="topbar">
        Account Settings
      </div>
      
      <div className="page-container" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
        {/* Profile Header */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ 
              width: '76px', 
              height: '76px', 
              borderRadius: '50%', 
              backgroundColor: '#EBEBEB',
              backgroundImage: 'url("https://i.pravatar.cc/150?img=68")', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />
            <div style={{ 
              position: 'absolute', 
              bottom: '0', 
              right: '-6px', 
              backgroundColor: 'var(--color-primary)', 
              color: 'white', 
              width: '24px', 
              height: '24px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <Camera size={14} />
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-text)', marginBottom: '4px' }}>Marry Doe</h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text)' }}>Marry@Gmail.Com</p>
          </div>
        </div>

        <p style={{ fontSize: '15px', color: 'var(--color-gray-text)', lineHeight: '1.6', marginBottom: '24px' }}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt.
        </p>

        {/* Settings Accordion items (jispe click kare to wahi khule) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {settingsOptions.map((option) => (
            <div key={option.id} style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.4)', 
              borderRadius: '12px', 
              overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <button 
                onClick={() => toggleSection(option.id)}
                style={{ 
                  width: '100%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  padding: '16px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-text)',
                  fontSize: '16px',
                  fontWeight: '500'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>{option.icon}</div>
                  {option.title}
                </div>
                <motion.div
                  animate={{ rotate: openSection === option.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={18} color="var(--color-gray-text)" />
                </motion.div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {openSection === option.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ padding: '0 16px 16px 46px', color: 'var(--color-gray-text)', fontSize: '14px', lineHeight: '1.6' }}>
                      {option.content}
                      <button style={{ 
                        marginTop: '10px', 
                        padding: '8px 16px', 
                        backgroundColor: 'var(--color-primary-light)', 
                        color: 'var(--color-primary)', 
                        border: 'none', 
                        borderRadius: '6px', 
                        cursor: 'pointer',
                        fontWeight: '500'
                      }}>
                        Manage
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Logout Button */}
          <button 
            onClick={() => navigate('/')}
            style={{ 
              width: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              padding: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              border: '1px solid rgba(0,0,0,0.05)',
              borderRadius: '12px',
              cursor: 'pointer',
              color: 'var(--color-danger)',
              fontSize: '16px',
              fontWeight: '500',
              marginTop: '12px'
            }}
          >
            <LogOut size={18} />
            Logout Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
