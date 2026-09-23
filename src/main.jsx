import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const services = ["General Checkups", "Vaccination Guidance", "Pet Wellness", "Appointment Support"];
const images = ["https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1400&q=85", "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=85"];

function App(){
  const wa = 'https://wa.me/923342266388?text=' + encodeURIComponent('Assalamualaikum, I would like to know more about Pet Clinic services.');
  return <div className="site">
    <header className="nav wrap">
      <a className="brand" href="#top"><span className="brandDot"></span><span>Pet Clinic</span></a>
      <nav><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a></nav>
      <a className="navCta" href={wa} target="_blank" rel="noreferrer">Book Appointment</a>
    </header>

    <main id="top">
      <section className="hero wrap">
        <div className="heroCopy">
          <div className="eyebrow">VETERINARY CARE • SCHEME 33, KARACHI</div>
          <h1>Kind care for every paw, whisker and wag.</h1>
          <p>Friendly veterinary care, routine checkups and appointment support for pets and the people who love them.</p>
          <div className="heroActions">
            <a className="primary" href={wa} target="_blank" rel="noreferrer">Book Appointment</a>
            <a className="secondary" href="tel:+923342266388">Call 0334 2266388</a>
          </div>
          <div className="trustRow"><span>Mobile friendly</span><span>Direct booking</span><span>Karachi based</span></div>
        </div>
        <div className="heroMedia">
          <img src={images[0]} alt="Veterinary Clinic showcase" />
          <div className="floatingCard"><small>QUICK CONTACT</small><strong>0334 2266388</strong><span>Tap to book on WhatsApp</span></div>
        </div>
      </section>

      <section className="ticker"><div>Pet Clinic • Veterinary Clinic • Pet Clinic • Veterinary Clinic • Pet Clinic • Veterinary Clinic •</div></section>

      <section id="work" className="section wrap">
        <div className="sectionHead"><div><span className="eyebrow">SELECTED HIGHLIGHTS</span><h2>A visual-first presentation that sells the experience.</h2></div><p>Demo imagery is used for presentation. It can be replaced with the business's real work before launch.</p></div>
        <div className="gallery">
          {images.slice(1).map((src,i)=><figure key={src}><img src={src} alt={'Pet Clinic highlight '+(i+1)} /><figcaption>0{i+1} / Featured</figcaption></figure>)}
        </div>
      </section>

      <section id="services" className="section alt">
        <div className="wrap">
          <div className="eyebrow">SERVICES</div><h2>Everything important, easy to understand.</h2>
          <div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>Clear service information with a direct route to enquiry and booking.</p></article>)}</div>
        </div>
      </section>

      <section id="about" className="section wrap about">
        <div><div className="eyebrow">ABOUT THE CONCEPT</div><h2>Built to turn local discovery into direct enquiries.</h2></div>
        <div><p>A warm, reassuring clinic website concept that makes it easy for pet owners to understand services, contact the clinic and request an appointment.</p><div className="miniStats"><div><b>01</b><span>Fast mobile experience</span></div><div><b>02</b><span>WhatsApp-first conversion</span></div><div><b>03</b><span>Easy to customize</span></div></div></div>
      </section>

      <section className="ctaBand wrap">
        <div><span className="eyebrow">READY TO BOOK?</span><h2>Make the next enquiry one tap away.</h2></div>
        <div className="ctaButtons"><a className="primary" href={wa} target="_blank" rel="noreferrer">WhatsApp 0334 2266388</a><a className="secondary" href="tel:+923342266388">Call now</a></div>
      </section>
    </main>

    <footer className="wrap"><div className="brand"><span className="brandDot"></span><span>Pet Clinic</span></div><p>Demo website concept • VETERINARY CARE • SCHEME 33, KARACHI</p></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />);
