import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center px-[10%] overflow-hidden">
      {/* Full screen background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dsbgb5ite/image/upload/v1778863843/anhbia2_by2ahl.jpg"
          alt="Tiệm Gốm và Cây Xanh"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-2xl text-left pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-normal text-white mb-6 leading-tight drop-shadow-lg"
          style={{ fontFamily: 'Lora, serif' }}
        >
          Mang Thiên <br />
          Nhiên Vào Tổ Ấm
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 mb-10 max-w-lg leading-relaxed font-medium"
        >
          Hành trình tìm lại sự bình yên qua từng chậu cây xanh và những tác phẩm gốm thủ công mộc mạc.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#products"
            className="px-10 py-4 rounded-full bg-accent text-white hover:bg-accent/90 transition-all font-bold text-lg inline-block shadow-lg"
          >
            Khám phá ngay
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

