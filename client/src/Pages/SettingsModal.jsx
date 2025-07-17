import React from 'react';
import './SettingsModal.css';

const SettingsModal = ({ onClose }) => {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className="settings-modal-overlay">
      <div className="settings-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Settings</h2>
        <div className="setting-option">
          <label htmlFor="darkModeToggle">Dark Mode:</label>
          <input
            type="checkbox"
            id="darkModeToggle"
            onChange={toggleDarkMode}
            defaultChecked={document.body.classList.contains('dark-mode')}
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
