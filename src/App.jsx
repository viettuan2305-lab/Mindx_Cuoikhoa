import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import LoginModal from './components/LoginModal';
import CheckoutModal from './components/CheckoutModal';

const INITIAL_PRODUCTS = [
  { id: 1, name: "Chậu Sen Đá Cầm Tay", price: 150000, image: "https://res.cloudinary.com/dsbgb5ite/image/upload/v1778781697/senda_kkpzzx.jpg", category: "Cây xanh" },
  { id: 2, name: "Cây Cẩm Nhung", price: 25000, image: "https://res.cloudinary.com/dsbgb5ite/image/upload/v1778781116/camnhung_h4mcsh.jpg", category: "Gốm sứ" },
  { id: 3, name: "Cây Fittonia Cẩm Nhung", price: 50000, image: "https://res.cloudinary.com/dsbgb5ite/image/upload/v1778781304/camnhungFittonia_mgt9y1.jpg", category: "Cây xanh" },
  { id: 4, name: "Gốm Men Lam", price: 100000, image: "https://res.cloudinary.com/dsbgb5ite/image/upload/v1778781432/gom_qqjgll.jpg", category: "Gốm sứ" },
  { id: 5, name: "Cây Xương Rồng Tai Thỏ", price: 75000, image: "https://res.cloudinary.com/dsbgb5ite/image/upload/v1778781583/xuongrongtaitho_juwlyh.jpg", category: "Cây xanh" },
  { id: 6, name: "Tách Trà Gốm Mộc", price: 120000, image: "https://res.cloudinary.com/dsbgb5ite/image/upload/v1778781758/tachtra_s69kmc.jpg", category: "Gốm sứ" }
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('tlg_user');
    if (savedUser) setCurrentUser(JSON.parse(savedUser));

    const savedCart = localStorage.getItem('tlg_cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('tlg_cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem('tlg_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('tlg_user', JSON.stringify(user));
      setIsLoginOpen(false);
      alert(`Chào mừng quay trở lại, ${user.name}!`);
    } else {
      alert('Email hoặc mật khẩu không chính xác!');
    }
  };

  const handleRegister = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('tlg_users') || '[]');
    if (users.some(u => u.email === email)) {
      alert('Email này đã được đăng ký!');
      return;
    }
    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    localStorage.setItem('tlg_users', JSON.stringify(users));
    alert('Đăng ký thành công! Bạn có thể đăng nhập ngay.');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('tlg_user');
    alert('Đã đăng xuất thành công!');
  };

  const handleCheckout = (details) => {
    const order = {
      id: Date.now(),
      customer: details,
      items: cart,
      total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      date: new Date().toLocaleString('vi-VN')
    };
    const orders = JSON.parse(localStorage.getItem('tlg_orders') || '[]');
    orders.push(order);
    localStorage.setItem('tlg_orders', JSON.stringify(orders));

    alert('Chúc mừng! Đơn hàng của bạn đã được tiếp nhận.');
    setCart([]);
    setIsCheckoutOpen(false);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen">
      <Navbar
        cartCount={cartCount}
        onCartOpen={() => setIsCartOpen(true)}
        onLoginOpen={() => setIsLoginOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      <main>
        <Hero />
        <ProductList products={INITIAL_PRODUCTS} onAddToCart={handleAddToCart} />
        <About />
        <Newsletter />
      </main>

      <Footer />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemove={handleRemoveFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
        onRegister={handleRegister}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onSubmit={handleCheckout}
      />

      {/* Floating Zalo Button */}
      <motion.a
        href="https://zalo.me/0879254769"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#0068ff] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#0068ff]/40 transition-all z-[90] font-black text-sm uppercase tracking-widest"
      >
        Zalo
      </motion.a>
    </div>
  );
};

export default App;
