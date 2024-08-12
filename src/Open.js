import React, { useState } from 'react';

const Open = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState({});

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/json') {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          const daysWithChanges = {};

          // Filter day1 to day_31 for non-empty arrays
          Object.keys(jsonData).forEach((key) => {
            if (key.startsWith("day") && jsonData[key].length > 0) {
              daysWithChanges[key] = jsonData[key];
            }
          });

          // Filter dayPlans and dailyPlan for non-empty arrays or non-empty strings
          const dayPlansWithChanges = jsonData.dayPlans.filter(plan =>
            plan.some(item => item.some(subItem => subItem !== ""))
          );
          if (dayPlansWithChanges.length > 0) {
            daysWithChanges.dayPlans = dayPlansWithChanges;
          }

          const dailyPlanWithChanges = jsonData.dailyPlan.filter(plan =>
            plan.some(item => item !== "")
          );
          if (dailyPlanWithChanges.length > 0) {
            daysWithChanges.dailyPlan = dailyPlanWithChanges;
          }

          setData(jsonData);
          setFilteredData(daysWithChanges);
        } catch (error) {
          console.error('Invalid JSON file:', error);
        }
      };
      reader.readAsText(file);
    } else {
      console.error('Please select a valid JSON file.');
    }
  };

  return (
    <div>
      <input type="file" accept=".json" onChange={handleFileChange} />
      {filteredData && Object.keys(filteredData).length > 0 && (
        <div>
          <h3>Days:</h3>
          <pre>{JSON.stringify(filteredData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Open;









