import "./App.css";
function App() {
const products = [
{
id: 1,
title: "Apple AirPods Pro 3 Wireless Earbuds, Active Noise Cancellation, Heart Rate Sensings, USB-C Charging",
price: "₹19,999",
image:
"https://m.media-amazon.com/images/I/61SUj2aKoEL.*AC_SL1500*.jpg",
},
{
id: 2,
title: "Samsung Galaxy Watch",
price: "₹12,999",
image:
"https://m.media-amazon.com/images/I/61y2VVWcGBL.*AC_SL1500*.jpg",
},
{
id: 3,
title: "HP 15.6 FHD Laptop 2026 Edition with Copilot AI, 16GB RAM, 256GB SSD, Intel Processor",
price: "₹54,999",
image:
"https://m.media-amazon.com/images/I/71f5Eu5lJSL.*AC_SL1500*.jpg",
},
{
id: 4,
title: "Apple iPhone 15 Pro Max, 256GB, Silver",
price: "₹69,999",
image:
"https://m.media-amazon.com/images/I/71d7rfSl0wL.*AC_SL1500*.jpg",
},
];

return ( <div className="app"> <header className="header"> <h1 className="logo">amazon</h1>

```
    <input
      type="text"
      placeholder="Search Amazon"
      className="search"
    />

    <div className="nav">
      <p>Hello, Sign In</p>
      <p>Returns & Orders</p>
      <p>Cart 🛒</p>
    </div>
  </header>

  <img className="banner" src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=1800" alt="Amazon Banner" />

  <div className="products">
    {products.map((item) => (
      <div className="card" key={item.id}>
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.price}</p>
        <button>Add to Cart</button>
      </div>
    ))}
  </div>
</div>

);
}

export default App;
