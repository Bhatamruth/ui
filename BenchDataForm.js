import React, { useState } from 'react';
import './BenchDataForm.css'; // Import the CSS file for styling
import Axios from 'axios';
function BenchDataForm() {
  const [formData, setFormData] = useState({
    // ... form field initial values
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await Axios.post('/api/submit', formData);
      
      // Handle success
      console.log('Form data submitted:', formData);
      console.log('Response from server:', response.data);
      
      // Clear the form or perform any other necessary actions
      setFormData({
        // ... form field initial values
      });
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
    }
  };
  

  return (
    <div className="form-container">
      <div className="darkcyan-background">
        <h1 className="form-heading">Bench Data Form Template</h1>
        <h4 className="form-paragraph">Dear Team,</h4>
        <h4 className="form-paragraph">
          Your latest information is crucial for us to provide you with the best support and stay connected. Please take a moment to update your details to ensure accuracy. Your contribution matters!
        </h4>
        <h4 className="form-paragraph">Thank you for your cooperation.</h4>
        <div className="azure-background">
        <p className="form-paragraph">Hi, {formData.name}. When you submit this form, the owner will see your name and email address.</p>
      </div></div><div className="azure-background">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-label">1. Name <span class="required-field">*</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label className="form-label">2. Business Email <span class="required-field">*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label className="form-label">3. Your Base Location <span class="required-field">*</span></label>
          <input
            type="text"
            name="baseLocation"
            value={formData.baseLocation}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label className="form-label">4. Are you currently reporting to your base location? <span class="required-field">*</span></label>
          <div className="form-radio">
            <input
              type="radio"
              name="reportingToBaseLocation"
              value="Yes"
              checked={formData.reportingToBaseLocation === 'Yes'}
              onChange={handleChange}
              className="form-radio-input"
            />
            <label className="form-radio-label">Yes</label>
          </div>
          <div className="form-radio">
            <input
              type="radio"
              name="reportingToBaseLocation"
              value="No"
              checked={formData.reportingToBaseLocation === 'No'}
              onChange={handleChange}
              className="form-radio-input"
            />
            <label className="form-radio-label">No</label>
          </div>
        </div>
        {formData.reportingToBaseLocation === 'No' && (
          <div className="form-row">
            <label className="form-label">5. In Case your selection to the above question was NO. Could you provide an explanation for why you are not currently reporting to the designated base location? <span class="required-field">*</span></label>
            <textarea
              name="explanation"
              value={formData.explanation}
              onChange={handleChange}
              className="form-textarea"
            />
          </div>
        )}
        <div className="form-row">
          <label className="form-label">6. Enter Certification Achieved so far (comma separated)<span class="required-field">*</span></label>
          <input
            type="text"
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label className="form-label">7. What is your Current Bench Status:<span class="required-field">*</span></label>
          <select
            name="benchStatus"
            value={formData.benchStatus}
            onChange={handleChange}
            className="form-select"
          >
            <option value="On Bench">On Bench</option>
            <option value="On Shadow Project (On project but not billable yet)">On Shadow Project (On project but not billable yet)</option>
            <option value="On Billable Project (Have confirmation Email)">On Billable Project (Have confirmation Email)</option>
          </select>
        </div>
        <button type="submit" className="form-submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default BenchDataForm;
