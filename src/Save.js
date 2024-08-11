import React from 'react';
import { useNavigate } from 'react-router-dom';

const Save = () => {
  const navigate = useNavigate();

  const saveAllPlans = () => {
    // Gather all plans from local storage and convert to JSON
    const days = Array.from({ length: 31 }, (_, i) => i + 1); // Adjust this as per your calendar
    const allPlans = {};

    days.forEach(day => {
      const plans = JSON.parse(localStorage.getItem(`plans_${day}`)) || [];
      allPlans[`day_${day}`] = plans;
    });

    // Save to local storage
    localStorage.setItem('all_plans', JSON.stringify(allPlans));

    // Create a JSON blob and download it
    const blob = new Blob([JSON.stringify(allPlans, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'all_plans.json';
    a.click();
    URL.revokeObjectURL(url);

    alert('All plans saved and downloaded successfully!');
  };

  const discardAllPlans = () => {
    // Clear all plans from local storage
    const days = Array.from({ length: 31 }, (_, i) => i + 1); // Adjust this as per your calendar

    days.forEach(day => {
      localStorage.removeItem(`plans_${day}`);
    });

    // Clear saved all plans
    localStorage.removeItem('all_plans');
    alert('All changes discarded!');
  };

  return (
    <div>
      <h2>Save and Discard Plans</h2>
      <button onClick={saveAllPlans}>Save All Plans</button>
      <button onClick={discardAllPlans}>Discard All Changes</button>
      <button onClick={() => navigate("/calendar")}>Back to Calendar</button>
    </div>
  );
};

export default Save;
