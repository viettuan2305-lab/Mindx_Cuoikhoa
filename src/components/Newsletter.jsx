import React from 'react';
import { motion } from 'framer-motion';
import { Send, Sprout } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-24 px-[5%] bg-bg-main relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-primary-light/10 rounded-[3rem] p-12 md:p-16 text-center border-2 border-primary/10 relative overflow-hidden"
      >
        <Sprout className="w-12 h-12 text-primary mx-auto mb-6" />
        
        <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-6">
          Nhận Cảm Hứng Xanh <br/> Mỗi Tuần
        </h2>
        <p className="text-text-muted text-lg mb-10 max-w-xl mx-auto font-medium">
          Đăng ký để nhận thông tin về các bộ sưu tập gốm mới nhất, mẹo chăm sóc cây từ nghệ nhân và ưu đãi độc quyền.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Địa chỉ email của bạn..." 
            className="flex-grow px-6 py-4 rounded-full border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
            required
          />
          <button type="submit" className="btn-primary shadow-lg shadow-primary/20 whitespace-nowrap">
            Tham gia ngay <Send className="w-4 h-4 ml-2" />
          </button>
        </form>
        <p className="text-xs text-text-muted mt-4 font-medium">
          Chúng tôi tôn trọng sự riêng tư của bạn. Không bao giờ gửi spam.
        </p>
      </motion.div>
    </section>
  );
};

export default Newsletter;
