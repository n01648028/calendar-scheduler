import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DayBox = ({ date, colIndex, onClick, isActive }) => {
  const [showPlanForm, setShowPlanForm] = useState(false);
  const [plans, setPlans] = useState([]);
  const [newPlan, setNewPlan] = useState('');
  const [newCategory, setNewCategory] = useState('Music');

  useEffect(() => {
    // Load plans for the specific date from local storage
    const savedPlans = JSON.parse(localStorage.getItem(`plans_${date}`)) || [];
    setPlans(savedPlans);
  }, [date]);

  const handleClick = () => {
    if (date !== null && date !== undefined) {
      onClick(date);
      setShowPlanForm(true);
      console.log('Cell clicked, showPlanForm:', true);
    }
  };

  const handleAddPlan = () => {
    if (newPlan.trim()) {
      const updatedPlans = [
        ...plans,
        { plan: newPlan, category: newCategory },
      ];
      setPlans(updatedPlans);
      localStorage.setItem(`plans_${date}`, JSON.stringify(updatedPlans)); // Save plans specific to this date
      setNewPlan('');
      setNewCategory('Music');
      setShowPlanForm(false);
      console.log('Plan added:', { plan: newPlan, category: newCategory });
    }
  };

  return (
    <td
      key={colIndex}
      className="calendar-cell"
      onClick={handleClick}
    >
      {date}
      {isActive && showPlanForm && (
        <div className="plan-form">
          <input
            type="text"
            value={newPlan}
            onChange={(e) => setNewPlan(e.target.value)}
            placeholder="Add new plan"
          />
          <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
            <option value="Music">Music Concert</option>
            <option value="Event">Event</option>
          </select>
          <button onClick={handleAddPlan}>Add a Plan</button>
        </div>
      )}
      <ul>
        {plans.map((plan, index) => (
          <li key={index}>{plan.plan} - {plan.category}</li>
        ))}
      </ul>
    </td>
  );
};

DayBox.propTypes = {
  colIndex: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default DayBox;
