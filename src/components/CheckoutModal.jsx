import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const CheckoutModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-[3rem] w-full max-w-2xl relative shadow-2xl overflow-hidden p-10 md:p-14"
          >
            <button onClick={onClose} className="absolute top-8 right-10 p-2 hover:bg-gray-50 rounded-full transition-colors cursor-pointer">
              <X className="w-6 h-6 text-text-muted" />
            </button>
            
            <div className="mb-12">
              <div className="flex items-center gap-3 text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                <CheckCircle className="w-4 h-4" />
                Step 2 of 2
              </div>
              <h2 className="text-4xl font-black text-text-main">Thông Tin Thanh Toán</h2>
              <p className="text-text-muted mt-2">Chúng tôi cần một vài thông tin để giao những mầm xanh đến bạn.</p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              onSubmit(formData);
              onClose();
            }} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-text-muted ml-1">Họ và Tên</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <input 
                      type="text" 
                      required 
                      placeholder="Nguyễn Văn A" 
                      className="w-full pl-14 pr-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-text-muted ml-1">Số Điện Thoại</label>
                  <div className="relative">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <input 
                      type="tel" 
                      required 
                      placeholder="0901 234 567" 
                      className="w-full pl-14 pr-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-text-muted ml-1">Địa Chỉ Giao Hàng</label>
                <div className="relative">
                  <MapPin className="absolute left-5 top-6 w-5 h-5 text-text-muted" />
                  <textarea 
                    required 
                    placeholder="Số nhà, tên đường, phường/xã, quận/huyện..." 
                    className="w-full pl-14 pr-6 py-5 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium h-32 resize-none"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  ></textarea>
                </div>
              </div>
              
              <div className="pt-6">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full py-5 bg-primary text-white rounded-2xl font-black text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 cursor-pointer"
                >
                  Xác Nhận Đặt Hàng <ArrowRight className="w-6 h-6" />
                </motion.button>
                <p className="text-center text-xs text-text-muted mt-6">
                  Bằng cách nhấn xác nhận, bạn đồng ý với các <span className="underline cursor-pointer">Điều khoản dịch vụ</span> của chúng tôi.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
