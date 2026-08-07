import { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const SOCIALS = [
  { label: 'Instagram', url: 'https://www.instagram.com/just_not__be/' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/alexandr-makedonskiy-170aa8405/' },
  { label: 'Telegram', url: 'https://t.me/just_not_be' },
  { label: 'Email', url: 'jabbarovagulsevar04@gmail.com' },
  { label: 'Telefon', url: 'tel:+82 10 6771 0661' },
];

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://myblog-4thg.onrender.com/api/contact/', { email, message })
      .then(() => {
        setStatus('success');
        setEmail('');
        setMessage('');
      })
      .catch(() => setStatus('error'));
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <p className="contact-eyebrow">Contact</p>
        <h1 className="contact-title">Let's connect</h1>
        <p className="contact-subtitle">
          Do you have any offers or questions ?
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="contact-label">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="contact-input"
            placeholder="sen@email.com"
          />
        </label>

        <label className="contact-label">
          Message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="contact-textarea"
            rows={5}
            placeholder="Write your message here "
          />
        </label>

        <button type="submit" className="contact-submit">Send</button>

        {status === 'success' && <p className="contact-status success">Message sent ,Thank you!</p>}
        {status === 'error' && <p className="contact-status error">There is an error</p>}
      </form>

      <div className="contact-socials">
        {SOCIALS.map((s) => (
          
           
         <a 
          key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link">
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;