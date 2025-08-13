import React from 'react';

const FilterButtons = ({ showAvailableOnly, setShowAvailableOnly }) => {
  return (
    <div className="flex justify-center mt-6 mb-8">
      <div className='inline-flex'>
        <button
          onClick={() => setShowAvailableOnly(false)}
          className={`px-4 py-2 rounded-lg font-semibold ${!showAvailableOnly ? 'bg-card-secondary text-text-primary' : 'text-text-primary'}`}
        >
          All Products
        </button>
        <button
          onClick={() => setShowAvailableOnly(true)}
          className={`px-4 py-2 rounded-lg font-semibold ${showAvailableOnly ? 'bg-card-secondary text-text-primary' : 'text-text-primary'}`}
        >
          Available Now
        </button>
      </div>
    </div>
  );
};

export default FilterButtons;
