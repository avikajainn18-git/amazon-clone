import "./App.css";

function App() {
const products = [
{
name: "Nike Air Max 270 Men's Running Shoes",
price: "₹12,995",
oldPrice: "₹15,995",
discount: "19% off",
image:
"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
},
{
name: "Ray-Ban Aviator Classic Sunglasses",
price: "₹6,490",
oldPrice: "₹7,990",
discount: "19% off",
image:
"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800",
},
{
name: "BIBA Women's Floral Print Kurta",
price: "₹999",
oldPrice: "₹2,499",
discount: "60% off",
image:
"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
},
{
name: "Fossil Men's Neutra Watch",
price: "₹8,995",
oldPrice: "₹14,995",
discount: "40% off",
image:
"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
},
{
name: "Adidas Ultraboost Running Shoes",
price: "₹14,999",
oldPrice: "₹17,999",
discount: "17% off",
image:
"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
},
{
name: "Apple iPhone",
price: "₹69,999",
oldPrice: "₹79,999",
discount: "12% off",
image:
"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
},
{
  name: "Sony Wireless Headphones",
  price: "₹7,999",
  oldPrice: "₹9,999",
  discount: "20% off",
  image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
},
{
  name: "Dell Inspiron Laptop",
  price: "₹54,999",
  oldPrice: "₹64,999",
  discount: "15% off",
  image:
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
},
];

return (
<> <div className="header"> <div className="logo">amazon</div>

```
    <div className="location">
      <small>Delivering to</small>
      <strong>Delhi 110001</strong>
    </div>

    <div className="search">
      <select>
        <option>All</option>
      </select>
      <input placeholder="Search Amazon.in" />
      <button>🔍</button>
    </div>

    <div className="nav-links">
      <div>
        <small>Hello, Sign in</small>
        <strong>Account & Lists</strong>
      </div>

      <div>
        <small>Returns</small>
        <strong>& Orders</strong>
      </div>

      <div className="cart">🛒 Cart</div>
    </div>
  </div>

  <div className="subnav">
    <span>☰ All</span>
    <span>Fresh</span>
    <span>MiniTV</span>
    <span>Sell</span>
    <span>Best Sellers</span>
    <span>Today's Deals</span>
    <span>Mobiles</span>
    <span>Customer Service</span>
    <span>Electronics</span>
    <span>Fashion</span>
    <span>Prime</span>
  </div>

  <div className="banner">
    <h1>Great Summer Sale</h1>
    <p>Up to 70% off on Top Brands</p>
  </div>

  <div className="product-section">
    {products.map((item, index) => (
      <div className="product-card" key={index}>
        <img src={item.image} alt="" />

        <h4>{item.name}</h4>

        <div className="stars">★★★★★</div>

        <div className="price">
          <span className="new">{item.price}</span>
          <span className="old">{item.oldPrice}</span>
          <span className="off">{item.discount}</span>
        </div>

        <button>Add to Cart</button>
      </div>
    ))}
  </div>

  <div className="back-top">
    Back to top
  </div>

  <footer className="footer">
    <div>
      <h3>Get to Know Us</h3>
      <p>About Amazon</p>
      <p>Careers</p>
      <p>Press Releases</p>
      <p>Investor Relations</p>
    </div>

    <div>
      <h3>Connect with Us</h3>
      <p>Facebook</p>
      <p>Twitter</p>
      <p>Instagram</p>
      <p>YouTube</p>
    </div>

    <div>
      <h3>Make Money with Us</h3>
      <p>Sell on Amazon</p>
      <p>Advertise Products</p>
      <p>Amazon Associates</p>
      <p>Amazon Pay</p>
    </div>

    <div>
      <h3>Let Us Help You</h3>
      <p>Your Account</p>
      <p>Returns Centre</p>
      <p>Help</p>
      <p>100% Purchase Protection</p>
    </div>
  </footer>
</>


);
}

export default App;
