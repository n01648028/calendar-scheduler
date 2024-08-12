import React from 'react';
import { useNavigate } from 'react-router-dom';

const Save = (props) => {
  const navigate = useNavigate();

  const saveAllPlans = () => {
    // Gather all plans from local storage and convert to JSON
    const days = Array.from({ length: 31 }, (_, i) => i + 1); // Adjust this as per your calendar
    const allPlans = {};

    days.forEach(day => {
      const plans = JSON.parse(localStorage.getItem(`plans_${day}`)) || [];
      allPlans[`day_${day}`] = plans;

    });

    localStorage.setItem('all_plans', JSON.stringify(allPlans));


    const saveJson = (data, filename) => {
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    };
    allPlans.dayPlans=props.dayPlans;
    allPlans.dailyPlan=props.dailyPlan;
    saveJson(allPlans, 'all_plans.json');

    alert('All plans saved and downloaded successfully!');
  };

  const discardAllPlans = () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1); // Adjust this as per your calendar

    days.forEach(day => {
      localStorage.removeItem(`plans_${day}`);
    });

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

