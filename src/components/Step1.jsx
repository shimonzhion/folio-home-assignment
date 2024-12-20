const Step1 = ({ formData, handleInputChange, nextStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };
  const colors = ['Blue', 'Purple', 'Pink', 'Red'];

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>Full Name</label>
      <input
        className='inputs'
        type='text'
        value={formData.fullName}
        onChange={(e) => handleInputChange('fullName', e.target.value)}
        required
      />

      <label>Favorite Color</label>
      <select
        className='inputs custom-select'
        value={formData.favoriteColor}
        onChange={(e) => handleInputChange('favoriteColor', e.target.value)}
        required
      >
        <option value=''>Select Color</option>
        {colors.map((color, i) => (
          <option key={i} value={color}>
            {color}
          </option>
        ))}
      </select>

      <label>Dream Destination</label>
      <input
        className='inputs'
        type='text'
        value={formData.dreamDestination}
        onChange={(e) => handleInputChange('dreamDestination', e.target.value)}
        required
      />

      <button type='submit' className='next-btn'>
        Next
      </button>
    </form>
  );
};

export default Step1;
