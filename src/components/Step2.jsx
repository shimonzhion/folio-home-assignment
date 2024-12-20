import { useNavigate } from 'react-router-dom';

const Step2 = ({ formData, handleInputChange, prevStep }) => {
  const navigate = useNavigate('')

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/thankYou');
  };
  const budgets = [1000, 2000, 3000, 4000];
  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>Feared Animal</label>
      <input
        className='inputs'
        type='text'
        value={formData.fearedAnimal}
        onChange={(e) => handleInputChange('fearedAnimal', e.target.value)}
        required
      />

      <label>Travel Budget</label>
      <select
        className='inputs'
        value={formData.travelBudget}
        onChange={(e) => handleInputChange('travelBudget', e.target.value)}
        required
      >
        <option value=''>Select Budget</option>
        {budgets.map((budget, i) => (
          <option key={i} value={`${budget}`}>
            ${budget}
          </option>
        ))}
      </select>

      <div className='step2-buttons-container'>
        <button type='button' onClick={prevStep}>
          Back
        </button>
        <button type='submit' id='submit-btn'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Step2;
