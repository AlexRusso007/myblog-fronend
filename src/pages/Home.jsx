import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
  const [resumeUrl, setResumeUrl] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/resume/')
      .then((res) => {
        if (res.data.length > 0) setResumeUrl(res.data[0].file);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="hero-page">
      <div className="hero-right">
        <div className="hero-photo-frame">
          <img src="/portfolio.jpg" alt="Gulsevar Jabbarova" className="hero-photo" />
        </div>
      </div>

      <div className="hero-left">
        <p className="hero-eyebrow">Portfolio &amp; Blog</p>
        <h1 className="hero-name">Gulsevar<br />Jabbarova</h1>
        <p className="hero-tagline">
          <a href=""
          className='hisay'>Hi buddy .  </a> I'm addicted to learning new things. If something sparks my curiosity  I have to figure out how it works. That's how I ended up obsessed with business, AI, and building projects.

I'm always looking for good conversations crazy ideas and people who dream a little bigger than average.
        </p>
        {resumeUrl && (
          
           
         <a   href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta">
            Download CV 
          </a>
        )}
      </div>
    </div>
  );
}

export default Home;