import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ weight, height, id, date, bmi, deleteCard }) => {
  const handleDelete = () => {
    deleteCard(id);
  };

  const getWeightCategory = () => {
    const bmiValue = parseFloat(bmi);
    const categoryMap = {
      'Kurang': bmiValue < 18.5,
      'Normal': bmiValue >= 18.5 && bmiValue < 25,
      'Berlebih': bmiValue >= 25 && bmiValue < 30,
      'Obesitas': bmiValue >= 30
    };
  
    const category = Object.keys(categoryMap).find(key => categoryMap[key]);
    return category ? `Kategori: ${category}` : 'Kategori tidak ditemukan';
  };



  return (
    <div className="col m6 s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title" data-test="bmi">
            BMI: {bmi}
          </span>
          <span className="card-title">
            {getWeightCategory()}
          </span>
          <div className="card-data">
            <span data-test="weight">Weight: {weight} kg</span>
            <span data-test="height">Height: {height} cm</span>
            <span data-test="date">Date: {date}</span>
          </div>

          <button className="delete-btn" onClick={handleDelete}>
            X
          </button>
          
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  weight: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.string,
  bmi: PropTypes.string,
  deleteCard: PropTypes.func
};

export default Info;
