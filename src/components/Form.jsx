import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Contactus_mini_chckbox from './Contactus_mini_chckbox';
import '../css/Form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [showOtherInput, setShowOtherInput] = useState(false);
  const [checkedOptions, setCheckedOptions] = useState({
    Standard: false,
    Gold: false,
    Business: false,
    Others: false,
  });

  const handleCheckboxChange = (value, checked) => {
    setCheckedOptions(prev => ({
      ...prev,
      [value]: checked,
    }));

    if (value === 'Others') {
      setShowOtherInput(checked);
      if (!checked) {
        setFormData(prev => ({ ...prev, message: '' }));
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_o7ubtm7', 'template_cehactg', formData, '5kjb9jMkP5QJLFlkz')
      .then((result) => {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        setShowOtherInput(false);
        setCheckedOptions({
          Standard: false,
          Gold: false,
          Business: false,
          Others: false,
        });
      }, (error) => {
        alert('Failed to send form. Try again.');
      });
  };

  return (
    <form className='form_container' onSubmit={handleSubmit}>
      <div className='form_container_1'>
        <div className='form_container_1_mini'>
          <span className='Form_Header'>Your Name</span>
          <input
            name="name"
            className='form_container_1_mini_input'
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <span className='Form_Header'>Your Email</span>
          <input
            name="email"
            className='form_container_1_mini_input'
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span className='Form_Header'>Phone Number</span>
          <input
            name="phone"
            className='form_container_1_mini_input'
            type="text"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className='form_container_2_mini'>
          <span className='Form_Header'>Requirement</span>
          <Contactus_mini_chckbox
            lable1="Standard"
            lable2="Gold"
            checkedOptions={checkedOptions}
            onCheckboxChange={handleCheckboxChange}
          />
          <Contactus_mini_chckbox
            lable1="Business"
            lable2="Others"
            checkedOptions={checkedOptions}
            onCheckboxChange={handleCheckboxChange}
          />

          {showOtherInput && (
            <textarea
              name="message"
              className='form_container_1_mini_input'
              rows="4"
              style={{ marginTop: '10px' }}
              value={formData.message}
              onChange={handleChange}
            />
          )}
        </div>

        <button className='Submit_button' type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
