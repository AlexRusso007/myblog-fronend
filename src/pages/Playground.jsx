import { useState, useEffect } from 'react';
import axios from 'axios';
import './Playground.css';

const TELEGRAM_BOT_LINK = 'https://t.me/QuestionUz_Robot?start=5f5284a5a6844b';

function Playground() {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/thoughts/')
      .then((res) => setThoughts(res.data))
      .catch(() => {});
  }, []);

  return (
    <div className="pg-page">
      <div className="pg-header">
        <p className="pg-eyebrow">Playground</p>
        <h1 className="pg-title">Trash thoughts</h1>
        <p className="pg-subtitle">
        Night thoughts, Existential crisis
        </p>
        
          
       <a  href={TELEGRAM_BOT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="pg-anon-btn">
          Send me questions anonymously
        </a>
      </div>

      <div className="pg-thoughts">
        {thoughts.map((t) => (
          <div className="pg-thought" key={t.id}>
            <p className="pg-thought-text">{t.text}</p>
            <p className="pg-thought-date">
              {new Date(t.created_at).toLocaleDateString('uz-UZ', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playground;