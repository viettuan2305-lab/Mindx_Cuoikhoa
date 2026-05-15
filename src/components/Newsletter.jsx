import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-24 px-[10%] bg-[#F4F1EA] relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center relative"
      >
        <h2 className="text-4xl md:text-5xl font-normal text-primary mb-6" style={{ fontFamily: 'Lora, serif' }}>
          Nhận Cảm Hứng Xanh Mỗi Tuần
        </h2>
        <p className="text-text-muted text-lg mb-10 font-medium">
          Đăng ký để nhận thông tin về các bộ sưu tập gốm mới nhất, mẹo chăm sóc cây từ nghệ nhân và ưu đãi độc quyền.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Địa chỉ email của bạn..." 
            className="flex-grow px-6 py-3 rounded-full border border-[#DCD6C8] outline-none focus:border-accent bg-white/50 text-text-main placeholder-gray-400"
            required
          />
          <button type="submit" className="px-8 py-3 rounded-full bg-accent text-white hover:bg-accent/90 transition-all font-bold whitespace-nowrap shadow-sm">
            Đăng ký
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;
