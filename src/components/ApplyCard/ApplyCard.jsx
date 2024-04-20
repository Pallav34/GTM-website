
import { useState } from 'react';
import './ApplyCard.module.css'; // Import CSS file for styling

const ApplyCard = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullName,email,phone,coverLetter,resume);
    setFullName('');
    setEmail('');
    setPhone('');
    setCoverLetter('');
    setResume('');
  };

  return (
    <div className="apply-card">
      <h2>Apply for the Position</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">
            Full Name<span>*</span>
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">
            Phone<span>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="coverLetter">
            Cover Letter<span>*</span>
          </label>
          <textarea
            id="coverLetter"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="resume">
            Upload CV/Resume<span>*</span> (.PDF, .DOC, .DOCX)
          </label>
          <input
            type="file"
            id="resume"
            accept=".pdf, .doc, .docx"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
        </div>
        <div className="form-group">
          <p>By using this form you agree with the storage and handling of your data by this website.</p>
        </div>
        <button type="submit" className='submit-btn'>Submit</button>
      </form>
    </div>
  );
};

export default ApplyCard;
