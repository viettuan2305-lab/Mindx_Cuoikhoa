import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

const CartSidebar = ({ isOpen, onClose, cart, onRemove, onCheckout }) => {
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[200] backdrop-blur-sm"
            onClick={onClose}
          ></motion.div>

          {/* Sidebar */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[201] shadow-[-20px_0_50px_rgba(0,0,0,0.1)] flex flex-col"
          >
            <div className="p-10 border-b border-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-normal text-primary" style={{ fontFamily: 'Lora, serif' }}>Giỏ hàng</h2>
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-black rounded-full uppercase tracking-widest">
                  {cart.length} món
                </span>
              </div>
              <button 
                onClick={onClose} 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-10 space-y-8 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="text-center py-32">
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag className="w-10 h-10 text-gray-200" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-400 mb-2">Giỏ hàng trống</h3>
                  <p className="text-gray-400 text-sm mb-8">Hãy chọn cho mình những mầm xanh yêu thích nhé!</p>
                  <button 
                    onClick={onClose}
                    className="text-primary font-black uppercase tracking-widest text-xs hover:underline"
                  >
                    Tiếp tục mua sắm
                  </button>
                </div>
              ) : (
                <AnimatePresence mode='popLayout'>
                  {cart.map(item => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={item.id} 
                      className="flex gap-6 items-center group"
                    >
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full rounded-2xl object-cover shadow-md" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{item.name}</h4>
                        <div className="flex items-center gap-4">
                          <span className="text-primary font-black">
                            {(item.price * item.quantity).toLocaleString('vi-VN')}đ
                          </span>
                          <span className="text-xs text-text-muted font-bold uppercase tracking-widest">
                            SL: {item.quantity}
                          </span>
                        </div>
                      </div>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all cursor-pointer"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            <div className="p-10 border-t border-gray-50 bg-gray-50/50">
              <div className="space-y-4 mb-10">
                <div className="flex justify-between items-center text-sm text-text-muted font-bold uppercase tracking-widest">
                  <span>Tạm tính</span>
                  <span>{totalPrice.toLocaleString('vi-VN')}đ</span>
                </div>
                <div className="flex justify-between items-center text-sm text-text-muted font-bold uppercase tracking-widest">
                  <span>Phí vận chuyển</span>
                  <span>Free</span>
                </div>
                <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-xl font-black">Tổng cộng</span>
                  <span className="text-3xl font-black text-primary">{totalPrice.toLocaleString('vi-VN')}đ</span>
                </div>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onCheckout}
                disabled={cart.length === 0}
                className="w-full py-4 bg-accent text-white rounded-full font-bold text-lg hover:bg-accent/90 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-3"
              >
                Thanh toán <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
