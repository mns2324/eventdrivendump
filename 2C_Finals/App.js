import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  // dictionary for the map functions
  const productsData = [
    {
      id: 1,
      name: 'Tacos',
      price: 10,
      image:
        'https://brandsitesplatform-res.cloudinary.com/image/fetch/w_1540,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Foldelpaso%2Foldelpaso-us%2Frecipes%2Fqtcu578og0gukdk_kb_rmg_gmi_hi_res_jpeg.jpeg%3F%201540w',
    },
    {
      id: 2,
      name: 'Pizza',
      price: 15,
      image:
        'https://www.allrecipes.com/thmb/kgZB2WpV5NUBsd0XPOkcOOV9SEY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23290-pizza-dough-iii-VAT-Beauty-4x3-06192801c8fa48fe8afaadfea28f532b.jpg',
    },
    {
      id: 3,
      name: 'Beef Steak',
      price: 20,
      image:
        'https://hips.hearstapps.com/hmg-prod/images/how-to-cook-steak-in-the-oven-index-66a3eda7b9f52.jpg?crop=0.502xw:1.00xh;0.147xw,0&resize=1200:*',
    },
    {
      id: 4,
      name: 'Hotdog',
      price: 25,
      image:
        'https://www.belbrandsfoodservice.com/wp-content/uploads/2018/05/recipe-desktop-merkts-cheesy-hot-dawg.jpg',
    },
    {
      id: 5,
      name: 'Ice (Premium)',
      price: 30,
      image:
        'https://media.springernature.com/full/springer-static/image/art%3A10.1038%2F494027a/MediaObjects/41586_2013_BF494027a_Figa_HTML.jpg',
    },
    {
      id: 6,
      name: 'Beef Wellington',
      price: 35,
      image:
        'https://www.southernliving.com/thmb/QI-j5dAPC1Y-nPYHZ41qoO4TL8E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/28038_SupT_BeefWelling_180-d9e47dc2d56e4a39bff22da26328d99a.jpg',
    },
  ];
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    // increase quantity if the item already exists in the cart
    if (exists) {
      // ignore other items and their values except for the one
      // with the matching id, and increase its quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleSubmit = () => {
    if (cart.length === 0) {
      alert('Cart is empty');
      return;
    }

    // create the order list, easier way of for loop + concatenation
    const orderList = cart
      .map((item) => `${item.name}: ${item.quantity}x`)
      .join('\n');

    alert(`
      Order Submitted! \n 
      ${orderList} \n
      Total Price: $${getTotal()}
    `);

    // reset the cart
    setCart([]);
  };

  return (
    <div className="App">
      <h1>Hello, Welcome to Store Store!</h1>
      <p>Add some products to cart before proceeding to checkout.</p>
      <div className="main-container">
        <div className="products-container">
          {/* works like a foreach loop, map each product's data into a new div */}
          {productsData.map((product) => (
            <div key={product.id} style={{ margin: 10 + 'px' }}>
              <img src={product.image} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>

        <div className={`cart-container ${cart.length === 0 ? 'hidden' : ''}`}>
          <h2>Shopping Cart</h2>

          <table>
            <thead>
              <tr>
                <th className="th">Product</th>
                <th className="th">Price</th>
                <th className="th">Quantity</th>
                <th className="th">Subtotal</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="td">{item.name}</td>
                  <td className="td">${item.price}</td>
                  <td className="td">{item.quantity}</td>
                  <td className="td">${item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-footer">
            <div className="total">Grand Total: ${getTotal()}</div>
            <button onClick={handleSubmit} className="btn-submit">
              Submit Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
