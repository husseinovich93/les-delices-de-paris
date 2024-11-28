// src/HomePage.js
import React from 'react';
import './HomePage.css';
import BaguetteCover from './assets/Baguette.webp';
import croissants from './assets/croissants.jpg';
import espresso from './assets/coffee.avif';
import coffee from './assets/frenchBean.webp';
import chausson from './assets/Chaussons.jpg';
import toast from './assets/toast.jpg';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link


const Home = () => {
    return (
        <div className="full-page">

          {/* Section 1: Home Page Intro */}
          <section className="section home">
            <div className="content">
              <h1>Les Délices de Paris</h1>
              <p>Is Not Just a Place, It's an Experience Where Every Loaf, Croissant, and Baguette Tells a Story of Tradition, Warmth, and The Art of Pastry-making.</p>
            </div>
          </section>
    
          {/* Section 2: About Us */}
          <section className="section about">
            <div className="content">
                {/* Labels for navigation */}
                <div className="navigation-labels">
                    <Link to="/menu" className="label">Explore Our Menu</Link>
                </div>
                <div className="image-gallery">
                    <div className="image-item">
                        <img src={BaguetteCover} alt="Baguette" />
                        <div className="image-description">
                            <p>Freshly baked baguettes made daily.</p> {/* Paragraph under image */}
                        </div>
                    </div>
                     
                    <div className="image-item">
                        <img src={espresso} alt="Espresso" />
                        <div className="image-description">
                            <p>Perfectly brewed espresso to start your day.</p> {/* Paragraph under image */}
                        </div>
                    </div>
                    
                    <div className="image-item">
                        <img src={croissants} alt="Croissants" />
                        <div className="image-description">
                            <p>Delicious, buttery croissants for every taste.</p> {/* Paragraph under image */}
                        </div>
                    </div>
                </div>
            </div>
          </section>

        <section className="section conEmail">

        </section>
        {/* Section 3: Services */}
        <section className="section services">
            <div className="services-container">
                {/* Left Side: Text */}
                <div className="services-text">
                    <h1>Cafetière</h1>
                    <p> 
                       French Press preserves the
                       natural oils from the coffee beans,
                       creating a more complex and immersive taste.
                       It also allows for complete control over brewing
                       time and coffee strength, ensuring each cup can be tailored 
                       to your exact preference. Whether you enjoy a lighter,
                       more subtle cup or a strong, intense brew, 
                       the French Press gives you the versatility to craft
                       the perfect coffee every time.
                       </p>
                       <br></br>
                       <br></br>
                       <p>
                       At our bakery, we serve only the finest,
                       freshly ground coffee beans to create the
                       perfect French Press brew. Each cup is a 
                       reflection of our commitment to quality, 
                       craftsmanship, and the art of coffee making. 
                       We invite you to experience the depth and richness of 
                       French Press coffee, brewed to perfection and paired with 
                       our delicious selection of pastries.
                    </p>
                </div>

                {/* Right Side: Image */}
                <div className="services-image">
                    <img src={coffee} alt="Coffee" />
                </div>
            </div>
        </section>
    
          {/* Section 4: Contact */}
          <section className="section service2">
          <div className="service2-container">
            {/* Right Side: Image */}
                <div className="service2-image">
                    <img src={chausson} alt="chausson" />
                </div>
                {/* Left Side: Text */}
                <div className="service2-text">
                    <h1>Chausson aux Pommes</h1>
                    <p> 
                       Our Chausson aux Pommes is a true French delight, 
                       featuring a perfectly golden, flaky pastry filled 
                       with sweet, cinnamon-spiced apple compote. 
                       Each bite delivers a satisfying balance of buttery 
                       layers and fruity sweetness, making it the perfect 
                       treat any time of day.
                       </p>
                       <br></br>
                       <br></br>
                       <p>
                       What makes our Chausson aux Pommes truly special 
                       is the care we put into each pastry. 
                       We use only the freshest apples and the finest 
                       ingredients to create this timeless French 
                       classic. Handcrafted and baked to perfection, 
                       it offers a unique, comforting flavor that 
                       transports you straight to the heart of France.
                    </p>
                    <br></br>
                    <br></br>
                    <p>
                      Come taste the difference in every bite. 
                      At our bakery, we’re proud to offer a Chausson 
                      aux Pommes that's as delightful as it is 
                      memorable.  
                    </p>
                </div>
            </div>
          </section>

          {/* Section 4: Service3 */}
        <section className="section services">
            <div className="services-container">
                {/* Left Side: Text */}
                <div className="services-text">
                    <h1>Sourdough Toast</h1>
                    <p> 
                       Start your day or take a midday pause 
                       with our exceptional breakfast and lunch 
                       offerings, where every dish is crafted with 
                       love and tradition. At the heart of our menu 
                       is our homemade French sourdough country loaf, 
                       baked fresh daily to perfection. Its tangy 
                       flavor and airy texture provide the perfect 
                       base for a variety of toppings that cater to 
                       every craving.
                       </p>
                       <br></br>
                       <br></br>
                       <p>
                       Enjoy creamy avocado paired with a hint 
                       of seasoning, or explore other delicious 
                       options like smoked salmon, eggs, fresh 
                       greens, and more. Whether you're in the mood 
                       for a hearty breakfast or a light, satisfying 
                       lunch, our menu is designed to bring you 
                       wholesome, flavorful meals that celebrate the 
                       art of breadmaking.
                    </p>
                </div>

                {/* Right Side: Image */}
                <div className="services-image">
                    <img src={toast} alt="toast" />
                </div>
            </div>
        </section>
        <section className="subscription-section">
            <div className="subscription-container">
                <h2>Stay Connected with Us</h2>
                <p>
                Be the first to know about our freshly baked creations, seasonal specials, and exclusive offers. Subscribe to our newsletter today!
                </p>
                <form
                id="subscription-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    const email = e.target.email.value.trim();
                    const checkbox = e.target.subscribeCheckbox.checked;
                    if (!email || !checkbox) {
                    alert("Please enter a valid email and confirm your subscription.");
                    } else {
                    alert(`Thank you for subscribing, ${email}! We're excited to share our bakery updates with you.`);
                    }
                }}
                >
                <div className="form-group">
                    <label htmlFor="email">Your Email Address</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@domain.com"
                    required
                    />
                </div>
                <div className="form-group checkbox-group">
                    <input
                    type="checkbox"
                    id="subscribeCheckbox"
                    name="subscribeCheckbox"
                    />
                    <label htmlFor="subscribeCheckbox">
                    I agree to receive updates and offers from our french bakery.
                    </label>
                </div>
                <button type="submit">Subscribe</button>
                </form>
                <div className="social-media">
                <h3>Follow Us</h3>
                <div className="icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook">
                    <FaFacebookF />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter">
                    <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">
                    <FaInstagram />
                    </a>
                </div>
                </div>
            </div>
        </section>
        </div>
      );
    };

export default Home;