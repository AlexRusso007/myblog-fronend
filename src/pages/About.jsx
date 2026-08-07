import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-left">
        <p className="about-eyebrow">About Me</p>
        <h1 className="about-title">Hi . I'm Lara</h1>

        <p className="about-text">
          
        </p>

        <p className="about-text">

        I'm an international student in South Korea studying Business while exploring AI and programming. I love learning, building, and connecting ideas from different fields. Why choose one interest when you can stay curious about many?

        </p>

        <p className="about-text">
         When I'm not studying, you'll probably find me reading novels, experimenting in the kitchen, planning my next trip, or diving into something new about technology. I'm always learning—not because I have to, but because I genuinely enjoy discovering new things.
        </p>

        <p
        className='box'>
          I'm not trying to fit into one box. I'm building my own.
        </p>
      </div>

      <div className="about-right">
        <div className="about-photo-frame">
          <img src="/cat-head.png" alt="Gulsevar Jabbarova" className="about-photo" />
        </div>
      </div>
    </div>
  );
}

export default About;