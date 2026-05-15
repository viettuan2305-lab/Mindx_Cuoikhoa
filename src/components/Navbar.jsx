import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, User, Search, LogOut, Menu, X, Leaf } from 'lucide-react';

const Navbar = ({ cartCount, onCartOpen, onLoginOpen, currentUser, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-10 py-5 flex items-center justify-between ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Logo - Left */}
      <div className="flex-shrink-0">
        <span className={`text-4xl font-bold brand ${isScrolled ? 'text-primary' : 'text-white'}`} style={{ fontFamily: 'Dancing Script, cursive' }}>The little garden</span>
      </div>
        
      {/* Search - Center */}
      <div className="hidden md:flex flex-1 justify-center max-w-xl px-8">
        <div className="w-full relative group">
          <input 
            type="text" 
            placeholder="Tìm kiếm cây, bình gốm..." 
            className={`w-full pl-6 pr-12 py-2.5 rounded-full border border-transparent focus:outline-none transition-all text-sm shadow-sm ${
              isScrolled 
                ? 'bg-gray-100/80 focus:bg-white focus:border-primary/30 text-text-main placeholder:text-gray-400' 
                : 'bg-white/20 backdrop-blur-sm focus:bg-white focus:text-text-main text-white placeholder:text-white/80'
            }`}
          />
          <Search className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
            isScrolled ? 'text-gray-400 group-focus-within:text-primary' : 'text-white/80 group-focus-within:text-primary'
          }`} />
        </div>
      </div>

      {/* Menu & Actions - Right */}
      <div className="flex items-center gap-8">
        {/* Navigation Links */}
        <div className={`hidden lg:flex items-center gap-6 text-[12px] font-bold uppercase tracking-widest transition-colors ${
          isScrolled ? 'text-primary' : 'text-white'
        }`}>
          <a href="#home" className="hover:text-accent transition-colors">Trang Chủ</a>
          <a href="#products" className="hover:text-accent transition-colors">Sản Phẩm</a>
          <a href="#about" className="hover:text-accent transition-colors">Về Chúng Tôi</a>
          <a href="#contact" className="hover:text-accent transition-colors">Liên Hệ</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {currentUser ? (
            <div className="flex items-center gap-3">
              <span className={`text-sm font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>{currentUser.name}</span>
              <button onClick={onLogout} className={`text-xs font-bold hover:text-red-500 ${isScrolled ? 'text-red-500' : 'text-white/80'}`}>Đăng xuất</button>
            </div>
          ) : (
            <button 
              onClick={onLoginOpen}
              className={`px-5 py-2 rounded-full border transition-all text-xs font-bold ${
                isScrolled 
                  ? 'border-primary/30 text-primary hover:bg-primary/5' 
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              Đăng Nhập
            </button>
          )}
          
          <button 
            onClick={onCartOpen}
            className="px-5 py-2 rounded-full bg-accent text-white hover:bg-accent/90 transition-all text-xs font-bold shadow-sm"
          >
            Giỏ Hàng {cartCount}
          </button>

          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
