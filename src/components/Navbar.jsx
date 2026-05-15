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
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-[5%] py-6 flex items-center justify-between ${
        isScrolled ? 'glass-nav py-5' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-16">
        <div className="flex items-center gap-3">
          <Leaf className="w-10 h-10 text-primary" />
          <span className="text-4xl font-bold text-primary" style={{ fontFamily: 'Caveat, cursive' }}>The little garden</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-[15px] font-semibold uppercase tracking-widest text-text-main/70">
          <a href="#home" className="hover:text-primary transition-colors relative group">
            Trang Chủ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#products" className="hover:text-primary transition-colors relative group">
            Sản Phẩm
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#about" className="hover:text-primary transition-colors relative group">
            Về Chúng Tôi
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#contact" className="hover:text-primary transition-colors relative group">
            Liên Hệ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex relative group">
          <input 
            type="text" 
            placeholder="Tìm kiếm..." 
            className="w-56 focus:w-80 px-6 py-3 rounded-full bg-white/50 border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all text-base"
          />
          <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-focus-within:text-primary" />
        </div>

        <div className="flex items-center gap-3">
          {currentUser ? (
            <div className="flex items-center gap-4 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs uppercase">
                  {currentUser.name[0]}
                </div>
                <span className="text-sm font-bold hidden sm:inline">{currentUser.name}</span>
              </div>
              <button 
                onClick={onLogout}
                className="p-1 hover:text-red-500 transition-colors"
                title="Đăng xuất"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button 
              onClick={onLoginOpen}
              className="p-3.5 rounded-full border border-primary/20 hover:bg-primary/5 transition-all"
              title="Đăng nhập"
            >
              <User className="w-6 h-6 text-primary" />
            </button>
          )}
          
          <button 
            onClick={onCartOpen}
            className="group relative p-3.5 rounded-full bg-primary text-white hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
          >
            <ShoppingCart className="w-6 h-6" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1 bg-accent text-[10px] font-black rounded-full border-2 border-white"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
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
