import React from 'react';
import './About.css'; // Assuming you put the CSS in About.css
import baker1 from './assets/baker1.jpg';
import baker2 from './assets/baker2.avif';
import interior from './assets/interior.jpg';
import baking from './assets/baking.webp'
import product from './assets/Mille.png';

const About = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <section className="about-intro">
        <div className="intro-overlay">
          <h1>Bienvenue to Les Délices de Paris</h1>
          <p>Experience the heart of France in every bite</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <h2>Our Story</h2>
        <p>
        Founded in 2024, Les Délices de Paris is a love letter
        to the timeless charm and exquisite flavors of France, 
        nestled in the heart of New York City. Our journey began with 
        a simple yet profound desire: to bring the soul of French 
        patisserie to life in every bite. From the cobblestone 
        streets of Paris to the vibrant energy of NYC, our bakery 
        captures the essence of both worlds – blending traditional 
        French techniques with a modern twist.
        <br/>
        
        Every pastry we craft is a labor of love, 
        meticulously handmade with the finest ingredients 
        sourced locally and from France. Whether it's the buttery, 
        flaky croissants, the delicate éclairs, or the rich, 
        melt-in-your-mouth tarts, each creation at Les Délices 
        de Paris is a masterpiece born from passion and precision. 
        We believe that baking is not just a craft but an art form – 
        one that connects generations, preserves traditions, 
        and invites everyone to experience the joy and magic 
        of French pastry.
        <br/>
        
        At our bakery, you’re not just tasting a pastry – you’re 
        savoring a story. Each bite reflects a deep respect for 
        time-honored recipes, passed down through generations, 
        and a commitment to creating something truly special. 
        We take pride in every detail, from the perfect rise of 
        our baguettes to the silky smoothness of our crème pâtissière. 
        It’s all part of our mission to bring a little piece of Paris 
        to the bustling streets of New York, where tradition meets 
        innovation and every visit feels like stepping into a Parisian 
        café.
        <br/>
        
        At Les Délices de Paris, our story is one of passion, 
        creativity, and an unwavering love for the craft of French 
        baking. We invite you to indulge in our handcrafted pastries 
        and experience the magic that happens when tradition, artistry, 
        and the finest ingredients come together.
        </p>
      </section>


      {/* Meet the Team */}
      <section className="meet-the-team">
        <h2>Meet Our Passionate Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={baker1} alt="Baker Name" />
            <p><strong>Victor Bogba</strong></p>
            <p>Head Baker</p>
          </div>
          <div className="team-member">
            <img src={baker2} alt="Baker Name" />
            <p><strong>Antonio Morales</strong></p>
            <p>Pastry Chef</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <h2>Our Bakery in Photos</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={interior} alt="Bakery Interior" />
          </div>
          <div className="gallery-item">
            <img src={baking} alt="Baking Process" />
          </div>
          <div className="gallery-item">
            <img src={product} alt="Pastry Product" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial-item">
            <blockquote>"Les Délices de Paris has the best croissants I've ever had!" – Angelina March</blockquote>
          </div>
          <div className="testimonial-item"> 
            <blockquote>"I always feel like I'm in Paris when I walk into this bakery." – Michael Adam.</blockquote>
          </div>
          <div className="testimonial-item">
            <blockquote>"I can't stop coming back for the mille-feuille! The layers are so perfectly crisp, and the pastry cream is just the right sweetness. Truly a masterpiece!"– Marc Leclerc</blockquote>
          </div>
          <div className="testimonial-item"> 
            <blockquote>"If you're looking for authentic French pastries, Les Délices de Paris is the place. The pain au chocolat is perfect, and the staff is always so warm and welcoming."
            – Pierre Gautier</blockquote>
          </div>
          <div className="testimonial-item">
            <blockquote>"Les Délices de Paris has the best croissants I've ever had!" – Angelina March</blockquote>
          </div>
          <div className="testimonial-item"> 
            <blockquote>"The baguettes are perfection – crispy on the outside and soft on the inside. I feel like I’m in the heart of Paris every time I stop by."
            – Lucie Bérenger</blockquote>
          </div>
          <div className="testimonial-item">
            <blockquote>"This bakery is the real deal. I tried the tarte tatin for the first time, and it was absolutely perfect. I can't wait to come back for more!"
            – Julien Bernard</blockquote>
          </div>
        </div>
      </section>

      {/* Footer Call-to-Action */}
      
    </div>
  );
};

export default About;
