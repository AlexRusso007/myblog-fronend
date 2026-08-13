import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
  const [resumeUrl, setResumeUrl] = useState(null);

  // useEffect(() => {
  //   axios.get('https://myblog-4thg.onrender.com/api/resume/')
  //     .then((res) => {
  //       if (res.data.length > 0) setResumeUrl(res.data[0].file);
  //     })
  //     .catch(() => {});
  // }, []);


  useEffect(() => {
  axios.get('https://myblog-4thg.onrender.com/api/resume/')
    .then((res) => {
      console.log("Resume response:", res.data);

      if (res.data.length > 0) {
        setResumeUrl(res.data[0].file);
      }
    })
    .catch((err) => {
      console.error("Resume error:", err);
    });
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
        <h1 className="hero-name">Lara Smith</h1>
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