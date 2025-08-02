import React from 'react';

interface FormData {
  name: string;
  surname: string;
}
interface FinalStepFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}
const FinalStepForm = ({ formData, setFormData }: FinalStepFormProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Final Step: Confirm your details</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
        />
        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={formData.surname || ''}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default FinalStepForm;