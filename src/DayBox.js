import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DayBox = ({ date, colIndex, onClick, isActive }) => {
  const [showPlanForm, setShowPlanForm] = useState(false);
  const [plans, setPlans] = useState([]);
  const [newPlan, setNewPlan] = useState('');
  const [newCategory, setNewCategory] = useState('Music');

  const handleClick = () => {
    if (date !== null && date !== undefined) { // Ensure date is valid
      onClick(date);
      setShowPlanForm(true);
      console.log('Cell clicked, showPlanForm:', true); // Debugging line
    }
  };

  const handleAddPlan = () => {
    if (newPlan.trim()) {
      setPlans((prevPlans) => [
        ...prevPlans,
        { plan: newPlan, category: newCategory },
      ]);
      setNewPlan('');
      setNewCategory('Music');
      setShowPlanForm(false);
      console.log('Plan added:', { plan: newPlan, category: newCategory }); // Debugging line
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