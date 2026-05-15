import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-[10%] bg-primary relative text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-full"
          >
            <img
              src="https://res.cloudinary.com/dsbgb5ite/image/upload/v1778863916/xuongrong2_os7yft.jpg"
              alt="The Little Garden Shop"
              className="w-full h-[600px] object-cover object-center rounded-3xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-normal text-accent mb-6" style={{ fontFamily: 'Lora, serif' }}>
              Về The Little Garden
            </h2>

            <p className="text-white/80 text-lg leading-relaxed font-medium">
              Bắt đầu từ tình yêu với những mầm xanh và sự mộc mạc của đất sét, The Little Garden là nơi chúng tôi gửi gắm những tâm tình vào từng chậu cây, chén gốm.
            </p>

            <p className="text-white/80 text-lg leading-relaxed font-medium">
              Tại đây, mỗi sản phẩm đều kể một câu chuyện riêng về sự tĩnh lặng và nét đẹp thủ công. Chúng tôi tin rằng một góc xanh nhỏ trong nhà có thể mang lại nguồn năng lượng tích cực vô tận.
            </p>

            <div className="pt-4">
              <a
                href="#products"
                className="px-10 py-3 rounded-full bg-accent text-white hover:bg-accent/90 transition-all font-bold inline-block"
              >
                Xem thêm
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

