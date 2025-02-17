import React from 'react';
import './assets/style/MapNote.css';

const MapNote = ({ onClose, onSave }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const text = e.target.textContent.trim();
      if (text) {
        onSave(text);
        onClose();
      }
    }
  };

  const handleBlur = (e) => {
    const text = e.target.textContent.trim();
    if (text) {
      onSave(text);
    }
  };

  return (
    <div className="custom-popup">
      <div className="popup-header">
        <div className="popup-user-icon"></div>
        <span className="popup-username">user1092</span>
        <button 
          type="button" 
          className="popup-close-btn" 
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
      </div>
      <hr className="popup-divider" />
      <div className="popup-body">
        <div
          className="popup-text"
          contentEditable="true"
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          suppressContentEditableWarning={true}
        ></div>
      </div>
    </div>
  );
};

export default MapNote;