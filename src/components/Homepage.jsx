import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import Hero from "../assets/hero-image.jpeg"

export default function Homepage() {
  return (
    <div>
      <div className="hero-container">
        <div className="image-box">
          <img src={Hero} alt="heroimage" />
          <div class="text-overlay">
            <p>
              "Global Flavor Fusion: Your Culinary Passport to Multicuisine
              Delights"
            </p>
          </div>
        </div>
      </div>
      <div className="main-section">
        <div div className="flex-container">
          <h2>UKRAINIAN CUISINE</h2>
          <p>
            Ukrainian cuisine is a hearty and flavorful reflection of the
            country's rich agricultural heritage. It features a diverse array of
            dishes that combine locally-sourced ingredients to create delicious
            and satisfying meals. From the iconic beet-based borscht to the
            comforting potato-filled varenyky and the savory stuffed cabbage
            rolls known as holubtsi, Ukrainian dishes are known for their bold
            flavors <br />
            and generous use of ingredients like potatoes, cabbage, meat, and
            dairy products.{" "}
          </p>
        </div>
        <div className="flex-container">
          <h2>BRITISH CUISINE</h2>
          <p>
            British cuisine is a blend of traditions, flavors, and influences
            that have evolved over centuries. It's characterized by a mix of
            hearty and comforting dishes. Fish and chips, a quintessential
            British meal, features battered and deep-fried fish served with
            thick-cut potatoes. Another iconic dish is the full English
            breakfast, consisting of eggs, bacon, sausages, beans, grilled
            tomatoes, mushrooms, and toast.
          </p>
        </div>

        <div class="flex-container">
          <h2>SLOVAKIA CUISINE</h2>
          <p>
            Slovak cuisine is a reflection of the country's Central European
            location and its historical influences, resulting in hearty and
            flavorful dishes. Traditional Slovak cuisine features a variety of
            meats, dairy, and potatoes, often prepared in rustic and satisfying
            ways. Slovak cuisine places a strong emphasis on seasonal and
            locally-sourced ingredients, and many dishes have been passed down
            through generations, preserving the country's culinary heritage. The
            cuisine's richness and diversity make it a delightful exploration of
            Slovak culture and traditions.
          </p>
        </div>
        <div className="flex-container">
          <h2>INDIAN CUISINE</h2>
          <p>
            Indian cuisine is renowned for its diversity, bold flavors, and
            vibrant spices. It's a reflection of India's rich cultural and
            regional variations, with a wide range of dishes to suit various
            tastes and preferences. Indian cuisine varies greatly from region to
            region, offering a rich tapestry of flavors, ingredients, and
            culinary techniques. It's a testament to India's cultural diversity
            and is celebrated worldwide for its deliciousness and complexity.
          </p>
        </div>
      </div>
      <div className="homepageCardsContainer">
        <div className="cardContainer">
          <NavLink to="starter" className="homepageCardsHeader">
            Starters{" "}
          </NavLink>
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-931516_11-1671880.jpg"
            className="homepageCardsImg"
          />
        </div>
        <div className="cardContainer">
          <NavLink to="main" className="homepageCardsHeader">
            Main Course{" "}
          </NavLink>
          <img
            src="https://static.foodrhythms.com/images/recipes/original/_HKEE7FtR.jpg"
            className="homepageCardsImg"
          />
        </div>
        <div className="cardContainer">
          <NavLink to="dessert" className="homepageCardsHeader">
            Desserts{" "}
          </NavLink>
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/2/2021/11/Croquembouche-profiterole-tower-ceb1da8.jpg?quality=90&resize=556,505"
            className="homepageCardsImg"
          />
        </div>
        <div className="cardContainer">
          <NavLink to="drink" className="homepageCardsHeader">
            Drinks
          </NavLink>
          <img
            src="https://i.guim.co.uk/img/media/8788c2bfe2001984ff398571739b266876fc9c25/0_200_5943_3567/master/5943.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f6ead86998ed1ae44691911d0e5b6835"
            className="homepageCardsImg"
          />
        </div>
      </div>
    </div>
  );
}
