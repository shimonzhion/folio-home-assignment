import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const formData = JSON.parse(localStorage.getItem('formData'));
  const navigate = useNavigate('');
  const handleDoneClick = () => {
    localStorage.removeItem('formData');
    navigate('/');
  };

  return (
    <div className='thank-you-container'>
      <h1>Hi, {formData.fullName}!</h1>
      <p>
      Thank you for contacting us.<br/>
      We will arrange a tour to {formData.dreamDestination} in a budget of ${formData.travelBudget} in short time.<br/>
      No worries, we will make sure you will not see {formData.fearedAnimal}! <br/>
      Oh, and we will get you a {formData.favoriteColor} shirt.
      </p>
      
      <button className='done-btn' onClick={handleDoneClick}>Done</button>
    </div>
  );
};

export default ThankYouPage;
