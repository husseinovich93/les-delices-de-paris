import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import cafe from './assets/Cafe.png';
import CaféSerré from './assets/Café-serré.webp';
import cafeCreme from './assets/cafe-creme.jpg';
import CafeAmerican from './assets/CafeAmerican.png';
import Cafe_Au_Lait from './assets/Cafe_Au_Lait.png';
import CaféViennois from './assets/Café-Viennois.png';
import CaféLiégeois from './assets/Café-Liégeois.png';
import CaféNoisette from './assets/Café-noisette.png';

import AlmondCroissant from './assets/AmondCroissant.png';
import ButterCroissant from './assets/ButterCroissant.png';
import PainAuChocolate from './assets/PainAuChocolate.png';
import AppleChaussant from './assets/AppleChaussant.png';
import Eclair from './assets/ChocolateEclair.png';
import ParisBrest from './assets/ParisBrest.png';
import TarteTatin from './assets/Tatin.png';
import Mille from './assets/Mille.png';
import Macarons from './assets/Macarons.jpg';
import Creme from './assets/Creme.png';
import Canele from './assets/Canele.png';

import sourdough from './assets/Sourdough.jpeg';
import FrenchBaguette from './assets/FrenchBaguette.png';

import Mansour from './assets/Mansour.png';
import Madame from './assets/Madame.png';
import Tartine from './assets/Figs.png';
import JambonBeurre from './assets/Ham.png';
import AvocadoToast from './assets/AvocadoToast.png';
import OnionSoup from './assets/OnionSoup.png';

import './Menu.css'; // Ensure the styling is correct

const Menu = () => {
  const [cart, setCart] = useState({});
  const navigate = useNavigate();

  const menuItems = {
    Coffees: [
      { id: 1, name: 'Café Américain', description: 'A smooth, mild coffee perfect for a relaxed morning or afternoon break.', price: '$2.50', image: CafeAmerican },
      { id: 2, name: 'Café', description: 'A bold espresso that delivers a rich, unfiltered coffee experience.', price: '$3.00', image: cafe },
      { id: 3, name: 'Café Serré', description: 'A strong, concentrated espresso shot for those who love their coffee intense.', price: '$3.50', image: CaféSerré },
      { id: 4, name: 'Café Noisette', description: 'A smooth espresso with a touch of creamy milk, offering a subtle nutty flavor.', price: '$4.50', image: CaféNoisette },
      { id: 5, name: 'Café Viennois', description: 'A velvety espresso topped with whipped cream for a luxurious treat.', price: '$5.50', image: CaféViennois },
      { id: 6, name: 'Café Crème', description: 'Rich espresso with steamed milk, delivering a creamy and balanced cup.', price: '$5.00', image: cafeCreme },
      { id: 7, name: 'Café Au Lait', description: 'A comforting blend of brewed coffee and steamed milk, perfect for any time of day.', price: '$3.50', image: Cafe_Au_Lait },
      { id: 8, name: 'Café Liégeois', description: 'Chilled coffee with vanilla ice cream, whipped cream, and a touch of sweetness.', price: '$5.00', image: CaféLiégeois },
    ],
    Pastries: [
      { id: 1, name: 'Croissant', description: 'Flaky, buttery, and golden, our classic croissant is the perfect way to start your day.', price: '$2.50', image: ButterCroissant },
      { id: 2, name: 'Pain Au Chocolat', description: 'A rich, buttery pastry filled with smooth chocolate, a sweet escape in every bite.', price: '$3.00', image: PainAuChocolate },
      { id: 3, name: 'Croissant aux Amandes', description: 'A delicate croissant filled with almond paste and topped with toasted almonds, a nutty indulgence.', price: '$4.00', image: AlmondCroissant },
      { id: 4, name: 'Chausson Aux Pommes', description: 'A sweet, flaky pastry filled with spiced apples, a delightful taste of French autumn.', price: '$4.00', image: AppleChaussant },
      { id: 5, name: 'Éclair', description: 'A light choux pastry filled with rich vanilla cream, topped with a glossy chocolate glaze.', price: '$5.99', image: Eclair },
      { id: 6, name: 'Le Paris Brest', description: 'A round choux pastry filled with creamy praline-flavored filling, inspired by the famous Paris-Brest race.', price: '$6.50', image: ParisBrest },
      { id: 7, name: 'Tarte Tatin', description: 'A warm, upside-down caramelized apple tart with a buttery, flaky crust—a true French classic.', price: '$4.99', image: TarteTatin },
      { id: 8, name: 'Millefeuille', description: 'Layers of delicate puff pastry and rich vanilla cream, a French pastry masterpiece.', price: '$6.50', image: Mille },
      { id: 9, name: 'Macarons', description: 'Delicate almond meringue cookies sandwiched with luscious fillings, available in an array of flavors.', price: '$2.00 (per piece)', image: Macarons },
      { id: 10, name: 'Crème Brûlée', description: 'A velvety custard topped with a perfectly caramelized sugar crust, a luxurious French dessert.', price: '$4.99', image: Creme },
      { id: 11, name: 'Canelé', description: 'A small, rum-flavored pastry with a crispy caramelized exterior and a soft, custardy center.', price: '$3.50', image: Canele },
    ],
    Bread: [
      { id: 1, name: 'Country Loaf', description: 'A rustic bread with a tangy flavor and a golden, crunchy crust. Inside, it’s soft and airy, perfect for any meal.', price: '$7.99', image: sourdough },
      { id: 2, name: 'French Baguette', description: 'A crisp, golden crust with a soft, fluffy interior. Perfect for sandwiches or served with cheese and wine.', price: '$6.50', image: FrenchBaguette },
    ],
    Sandwiches: [
      { id: 1, name: 'Croque Monsieur', description: 'A classic French ham and cheese sandwich with creamy béchamel and melted Gruyère.', price: '$7.99', image: Mansour },
      { id: 2, name: 'Croque Madame', description: 'The Croque Monsieur with a twist! Topped with a perfectly fried egg for extra indulgence.', price: '$8.50', image: Madame },
      { id: 3, name: 'Avocado Toast', description: 'Fresh avocado spread on toasted sourdough, drizzled with olive oil and a sprinkle of sea salt.', price: '$5.50', image: AvocadoToast },
      { id: 4, name: 'Tartine', description: 'Goat cheese, figs, prosciutto, and herbs on rustic French bread.', price: '$6.99', image: Tartine },
      { id: 5, name: 'Jambon-Beurre', description: 'A simple yet delicious French baguette filled with premium ham and butter, a beloved Parisian classic.', price: '$7.99', image: JambonBeurre },
      { id: 6, name: 'French Onion Soup', description: 'Savory caramelized onion soup topped with melted cheese and toasted baguette.', price: '$6.00', image: OnionSoup },
    ]
  };

  const handleQuantityChange = (item, change) => {
    setCart((prevCart) => {
      const newQuantity = (prevCart[item.name]?.quantity || 0) + change;
      if (newQuantity <= 0) {
        const { [item.name]: removed, ...rest } = prevCart;
        return rest;
      }
      return {
        ...prevCart,
        [item.name]: { ...item, quantity: newQuantity },
      };
    });
  };

  const goToCheckout = () => {
    navigate('/checkout', { state: { cart } });
  };

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <p>Savor the taste of France with our selection of handcrafted pastries, savory delights, and authentic coffee creations.</p>

      {Object.entries(menuItems).map(([category, items]) => (
        <div key={category} className="menu-category">
          <h2>{category}</h2>
          <div className="menu-grid">
            {items.map((item) => (
              <div className="menu-item" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              
              <div className="menu-info">
                <h3>{item.name}</h3>
                <span className="menu-price">{item.price}</span>
              </div>
            
              <p>{item.description}</p>
            
              <div className="menu-footer">
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(item, -1)}>-</button>
                  <span>{cart[item.name]?.quantity || 0}</span>
                  <button onClick={() => handleQuantityChange(item, 1)}>+</button>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      ))}

      <button className="checkout-btn" onClick={goToCheckout}>
        Go to Checkout
      </button>
    </div>
  );
};

export default Menu;
