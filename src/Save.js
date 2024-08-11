import React, { useEffect, useState } from 'react';

const SavePage = () => {
  const [allPlans, setAllPlans] = useState([]);

  const loadPlansFromStorage = () => {
    const savedPlans = [];
    for (let i = 1; i <= 31; i++) {
      const plans = JSON.parse(localStorage.getItem(`plans_${i}`)) || [];
      if (plans.length > 0) {
        savedPlans.push({ date: i, plans });
      }
    }
    setAllPlans(savedPlans);
  };

  useEffect(() => {
    loadPlansFromStorage(); // Load plans whenever the SavePage is rendered
  }, []);

  const handleSaveAll = () => {
    alert('All plans have been saved successfully!');
  };

  return (
    <div className="save-page-container">
      <h1>Review and Save Plans</h1>
      <ul>
        {allPlans.length > 0 ? (
          allPlans.map(({ date, plans }) => (
            <li key={date}>
              <h3>Date: {date}</h3>
              <ul>
                {plans.map((plan, index) => (
                  <li key={index}>
                    {plan.plan} - {plan.category}
                  </li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <p>No plans have been made yet.</p>
        )}
      </ul>
      <button onClick={handleSaveAll}>Save All Plans</button>
    </div>
  );
};

export default SavePage;

