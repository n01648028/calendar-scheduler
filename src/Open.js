import React, { useState } from 'react';

const Open = () => {
  const [data, setData] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/json') {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          setData(jsonData);
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
      {data && (
        <div>
          <h3> Day Schedule :</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Open;










