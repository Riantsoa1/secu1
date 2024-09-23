import { useState } from 'react';

const DateFilter = ({ onFilter }) => {
  const [startDate, setStartDate] = useState('2024-07-01');
  const [endDate, setEndDate] = useState('2024-07-16');

  const handleFilter = () => {
    onFilter(startDate, endDate);
  };

  return (
    <div style={{ border: '1px solid orange', padding: '10px', borderRadius: '5px' }}>
      <h3>Entrées</h3>
      <label>
        De: 
        <input 
          type="date" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
          style={{ marginLeft: '10px', marginRight: '20px' }} 
        />
      </label>
      <label>
        À: 
        <input 
          type="date" 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
          style={{ marginLeft: '10px', marginRight: '20px' }} 
        />
      </label>
      <button onClick={handleFilter} style={{ backgroundColor: 'orange', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '3px' }}>
        Appliquer
      </button>
    </div>
  );
};

export default DateFilter;
