import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';

const LoginModal = ({ isOpen, onClose, onLogin, onRegister }) => {
  const [mode, setMode] = useState('login');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

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
            className="bg-white rounded-[3rem] w-full max-w-xl relative shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[600px]"
          >
            {/* Left side: Artistic */}
            <div className="hidden md:flex w-[40%] bg-primary relative p-12 flex-col justify-between overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://res.cloudinary.com/dsbgb5ite/image/upload/v1778863916/xuongrong2_os7yft.jpg')] opacity-20 mix-blend-overlay object-cover"></div>
              <div className="relative z-10">
                <div className="text-2xl font-black text-white brand">The Little Garden</div>
              </div>
              <div className="relative z-10 text-white/80 text-sm leading-relaxed italic">
                "Nơi bắt đầu của những điều tốt đẹp và bình yên nhất."
              </div>
            </div>

            {/* Right side: Form */}
            <div className="flex-grow p-10 md:p-14 flex flex-col justify-center relative">
              <button onClick={onClose} className="absolute top-8 right-10 p-2 hover:bg-gray-50 rounded-full transition-colors cursor-pointer">
                <X className="w-6 h-6 text-text-muted" />
              </button>

              <div className="mb-10">
                <h2 className="text-4xl font-normal text-primary mb-2" style={{ fontFamily: 'Lora, serif' }}>
                  {mode === 'login' ? 'Chào mừng trở lại' : 'Tạo tài khoản mới'}
                </h2>
                <p className="text-text-muted">Vui lòng nhập thông tin của bạn.</p>
              </div>

              <form onSubmit={(e) => {
                e.preventDefault();
                if (mode === 'login') onLogin(formData.email, formData.password);
                else onRegister(formData.name, formData.email, formData.password);
              }} className="space-y-6">
                {mode === 'register' && (
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <input
                      type="text"
                      required
                      placeholder="Họ và Tên"
                      className="w-full pl-14 pr-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                )}
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                  <input
                    type="email"
                    required
                    placeholder="Địa chỉ Email"
                    className="w-full pl-14 pr-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                  <input
                    type="password"
                    required
                    placeholder="Mật khẩu"
                    className="w-full pl-14 pr-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-accent text-white rounded-full font-bold text-lg hover:bg-accent/90 transition-all shadow-sm flex items-center justify-center gap-3 cursor-pointer"
                >
                  {mode === 'login' ? 'Đăng Nhập' : 'Đăng Ký'} <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>

              <div className="mt-10 pt-10 border-t border-gray-50 text-center">
                <p className="text-text-muted text-sm font-medium">
                  {mode === 'login' ? (
                    <>Chưa có tài khoản? <button onClick={() => setMode('register')} className="text-primary font-black hover:underline cursor-pointer ml-1">Đăng ký ngay</button></>
                  ) : (
                    <>Đã có tài khoản? <button onClick={() => setMode('login')} className="text-primary font-black hover:underline cursor-pointer ml-1">Đăng nhập</button></>
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
