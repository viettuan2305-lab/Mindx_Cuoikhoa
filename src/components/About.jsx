import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sun, Sprout } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-[5%] bg-bg-main relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-[#e8f5e9] rounded-full text-[#4caf50] shadow-sm mb-6">
            <Sprout className="w-8 h-8 fill-current" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d4a22] mb-6">Tình Yêu Với Mầm Xanh</h2>
          <p className="text-lg text-[#4a5d23] max-w-3xl mx-auto font-medium">
            Mỗi góc nhỏ tại The Little Garden đều được lấp đầy bởi hơi thở của tự nhiên. Chúng tôi chọn lọc những giống cây khỏe mạnh nhất để gửi đến ngôi nhà của bạn.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#81c784]/20 rounded-[3rem] -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1200" 
              alt="Lush green garden" 
              className="w-full h-[500px] object-cover rounded-[3rem] shadow-lg border-[10px] border-white"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-md border-2 border-[#e8f5e9] hover:border-[#81c784] transition-colors">
              <h3 className="text-2xl font-bold text-[#2d4a22] mb-4 flex items-center gap-2">
                <Sun className="w-6 h-6 text-[#ffb300]" /> Lọc không khí tự nhiên
              </h3>
              <p className="text-[#4a5d23] leading-relaxed font-medium">
                Cây xanh không chỉ là vật trang trí, chúng còn là những chiếc máy lọc không khí tự nhiên tuyệt vời nhất, mang đến bầu không khí trong lành cho tổ ấm.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-md border-2 border-[#e8f5e9] hover:border-[#81c784] transition-colors">
              <h3 className="text-2xl font-bold text-[#4caf50] mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 fill-current text-[#ff5252]" /> Lan tỏa năng lượng xanh
              </h3>
              <p className="text-[#4a5d23] leading-relaxed font-medium">
                Sắc xanh của lá cây có khả năng xoa dịu đôi mắt và tâm hồn. Chỉ cần một chậu cây nhỏ đặt trên bàn làm việc cũng đủ để bạn thấy thư giãn hơn rất nhiều.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
