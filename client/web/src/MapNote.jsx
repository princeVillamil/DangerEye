import React, { useState, useEffect, useRef } from 'react';
import './assets/style/MapNote.css';

const HAZARD_TYPES = [
  { id: 'hazard', label: '⚠️ Hazard' },
  { id: 'crime', label: '🚨 Crime' },
  { id: 'earthquake', label: '🌋 Earthquake Prone' },
  { id: 'flood', label: '🌊 Flood Risk' },
  { id: 'accident', label: '🚗 Accident Prone' }
];

const TAGS = [
  'Emergency', 'Warning', 'Caution', 'Safety', 'Alert',
  'Danger', 'Risk', 'Report', 'Update', 'Notice'
];

const MapNote = ({ onClose, onSave, initialNote = '', initialTags = [], initialHazardType = '' }) => {
  const [isEditing, setIsEditing] = useState(!initialNote);
  const [selectedTags, setSelectedTags] = useState(initialTags);
  const [hazardType, setHazardType] = useState(initialHazardType);
  const [isLabelDropdownOpen, setIsLabelDropdownOpen] = useState(false);
  const [isTagDropdownOpen, setIsTagDropdownOpen] = useState(false);
  const textRef = useRef(null);
  const labelDropdownRef = useRef(null);
  const tagDropdownRef = useRef(null);

  useEffect(() => {
    if (textRef.current && initialNote && !isEditing) {
      textRef.current.textContent = initialNote;
    }
  }, [initialNote, isEditing]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (labelDropdownRef.current && !labelDropdownRef.current.contains(event.target)) {
        setIsLabelDropdownOpen(false);
      }
      if (tagDropdownRef.current && !tagDropdownRef.current.contains(event.target)) {
        setIsTagDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSaveClick = () => {
    const text = textRef.current.textContent.trim();
    if (text) {
      onSave({
        note: text,
        tags: selectedTags,
        hazardType
      });
      setIsEditing(false);
    }
  };

  const handleDiscardClick = () => {
    if (initialNote) {
      textRef.current.textContent = initialNote;
      setSelectedTags(initialTags);
      setHazardType(initialHazardType);
      setIsEditing(false);
    } else {
      onClose();
    }
  };

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  const removeTag = (tag) => {
    setSelectedTags(prev => prev.filter(t => t !== tag));
  };

  const selectLabel = (labelId) => {
    setHazardType(labelId);
    setIsLabelDropdownOpen(false);
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
          ref={textRef}
          className={`popup-text ${isEditing ? 'editing' : ''}`}
          contentEditable={isEditing}
          suppressContentEditableWarning={true}
        ></div>

        {/* Label Section */}
        <div className="dropdown-controls">
          <div ref={labelDropdownRef} className="dropdown-wrapper">
            {!hazardType ? (
              <button 
                className="add-label-btn" 
                onClick={() => setIsLabelDropdownOpen(prev => !prev)}
              >
                + Add Label
              </button>
            ) : (
              <div className="selected-label">
                {HAZARD_TYPES.find(h => h.id === hazardType)?.label}
                <button className="remove-label-btn" onClick={() => setHazardType('')}>✕</button>
              </div>
            )}
            <div className={`dropdown-menu ${isLabelDropdownOpen ? 'show' : ''}`}>
              {HAZARD_TYPES.map(label => (
                <div 
                  key={label.id} 
                  className={`dropdown-item ${hazardType === label.id ? 'active' : ''}`}
                  onClick={() => selectLabel(label.id)}
                >
                  {label.label}
                </div>
              ))}
            </div>
          </div>

          {/* Tags Section */}
          <div ref={tagDropdownRef} className="dropdown-wrapper">
            {!isTagDropdownOpen && selectedTags.length < 5 && (
              <button 
                className="add-tag-btn" 
                onClick={() => setIsTagDropdownOpen(true)}
              >
                + Add Tag
              </button>
            )}
            <div className={`dropdown-menu ${isTagDropdownOpen ? 'show' : ''}`}>
              {TAGS.map(tag => (
                <div 
                  key={tag} 
                  className={`dropdown-item ${selectedTags.includes(tag) ? 'active' : ''}`}
                  onClick={() => toggleTag(tag)}
                  style={{ 
                    pointerEvents: selectedTags.length >= 5 && !selectedTags.includes(tag) 
                      ? 'none' 
                      : 'auto',
                    opacity: selectedTags.length >= 5 && !selectedTags.includes(tag) 
                      ? '0.5' 
                      : '1'
                  }}
                >
                  #{tag}
                </div>
              ))}
            </div>
          </div>

          {/* Display Selected Tags */}
          <div className="selected-tags">
            {selectedTags.map(tag => (
              <span key={tag} className="tag-chip">
                #{tag} 
                <button className="remove-tag-btn" onClick={() => removeTag(tag)}>✕</button>
              </span>
            ))}
          </div>
        </div>

        <div className="popup-actions">
          {!isEditing ? (
            <button 
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          ) : (
            <>
              <button 
                className="save-btn"
                onClick={handleSaveClick}
              >
                Save
              </button>
              <button 
                className="discard-btn"
                onClick={handleDiscardClick}
              >
                Discard
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapNote;
