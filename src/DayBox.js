import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const DayBox = ({ date, colIndex, onClick, isActive, showForm, cellStyle }) => {
  const [showPlanForm, setShowPlanForm] = useState(false);
  const [plans, setPlans] = useState([]);
  const [newPlan, setNewPlan] = useState('');
  const [newCategory, setNewCategory] = useState('Music');
  const navigate=useNavigate();

  useEffect(() => {
    const savedPlans = JSON.parse(localStorage.getItem(`plans_${date}`)) || [];
    setPlans(savedPlans);
  }, [date]);

  const handleClick = () => {
    if (date !== null && date !== undefined) {
      onClick(date);
      setShowPlanForm(!showPlanForm);
    }
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  const handleAddPlan = () => {
    if (newPlan.trim()) {
      const updatedPlans = [...plans, { plan: newPlan, category: newCategory }];
      setPlans(updatedPlans);
      localStorage.setItem(`plans_${date}`, JSON.stringify(updatedPlans)); // Save immediately to local storage
      setNewPlan('');
      setNewCategory('Music');
      setShowPlanForm(false);
    }
  };

  const handleRemovePlan = (index) => {
    const updatedPlans = plans.filter((_, i) => i !== index);
    setPlans(updatedPlans);
    localStorage.setItem(`plans_${date}`, JSON.stringify(updatedPlans)); // Save updated plans to local storage
    if (updatedPlans.length === 0) {
      setShowPlanForm(false);
    }
  };

  const GotoDayPlan = () => {
    navigate("/DayPlan/" + date);
  };

  const GotoDailyPlan = () => {
    navigate("/DailyPlan");
  };

  return (
    <td key={colIndex} className="calendar-cell" onClick={handleClick} style={cellStyle}>
      {date}
      {isActive && showForm && showPlanForm && (
        <form className="plan-form" onClick={handleFormClick} onSubmit={handleAddPlan}>
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
          <input type="submit" value="Add a Plan"/>
          <button onClick={GotoDayPlan}>Day Plan</button>
          <button onClick={GotoDailyPlan}>Daily Plan</button>
        </form>
      )}
      <ul>
        {plans.map((plan, index) => (
          <li key={index}>
            {plan.plan} - {plan.category}
            <button onClick={() => handleRemovePlan(index)}>Remove</button>
          </li>
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
  showForm: PropTypes.bool.isRequired, // Updated to showForm
  cellStyle: PropTypes.object.isRequired, // Updated to cellStyle
};

export default DayBox;