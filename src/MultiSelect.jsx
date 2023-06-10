import React, { useState } from 'react';

const MultiSelect = ({ value, readonly }) => {
  const options = [
    { label: 'India', value: 'India' },
    { label: 'Australia', value: 'Australia' },
    { label: 'Bermuda', value: 'Bermuda' },
    { label: 'Canada', value: 'Canada' },
    { label: 'Cameroon', value: 'Cameroon' },
    { label: 'Denmark', value: 'Denmark' },
    { label: 'France', value: 'France' },
    { label: 'Finland', value: 'Finland' },
    { label: 'Germany', value: 'Germany' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(value);

  const handleToggle = () => {
    if (!readonly) {
      setIsOpen(!isOpen);
    }
  };

  const handleItemClick = (value) => {
    if (!readonly) {
      const isSelected = selectedItems.includes(value);
      const updatedSelectedItems = isSelected
        ? selectedItems.filter((item) => item !== value)
        : [...selectedItems, value];

      setSelectedItems(updatedSelectedItems);
    }
  };

  return (
    <div className="container">
      <div className={`select-btn ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        <span className="btn-text">
          {selectedItems.length > 0 ? `${selectedItems.length} Selected` : 'Select Country'}
        </span>
        <span className="arrow-dwn">
          <i className="fas fa-chevron-down"></i>
        </span>
      </div>

      <ul className={`list-items ${isOpen ? 'open' : ''}`}>
        {options.map((option) => (
          <li
            key={option.value}
            className={`item ${selectedItems.includes(option.value) ? 'checked' : ''}`}
            onClick={() => handleItemClick(option.value)}
          >
            <span className="checkbox">
              {selectedItems.includes(option.value) && (
                <i className="fas fa-check check-icon"></i>
              )}
            </span>
            <span className="item-text">{option.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiSelect;