import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sun, Flower2 } from 'lucide-react';

const Hero = () => {
  // Generate random floating leaves
  const leaves = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 10,
    scale: 0.5 + Math.random() * 1
  }));

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-32 px-[5%] overflow-hidden bg-bg-main">
      {/* Decorative floating leaves */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-primary/30 z-0 pointer-events-none"
          initial={{ left: `${leaf.x}%`, top: `${leaf.y}%`, rotate: 0 }}
          animate={{ 
            top: [`${leaf.y}%`, `${leaf.y - 15}%`, `${leaf.y}%`],
            left: [`${leaf.x}%`, `${leaf.x + 10}%`, `${leaf.x}%`],
            rotate: [0, 90, 180, 360] 
          }}
          transition={{ duration: leaf.duration, delay: leaf.delay, repeat: Infinity, ease: "linear" }}
          style={{ scale: leaf.scale }}
        >
          <Leaf className="w-8 h-8 fill-current" />
        </motion.div>
      ))}
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-2 text-primary-dark font-bold mb-6 bg-primary/10 w-max mx-auto lg:mx-0 px-4 py-2 rounded-full">
            <Flower2 className="w-5 h-5 text-primary" />
            <span className="tracking-widest uppercase text-xs font-black">Xanh mát ngôi nhà bạn</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-[#2d4a22] mb-8 leading-[1.2]">
            Phủ xanh <br/>
            <span className="text-primary italic">góc nhỏ bình yên</span>
          </h1>
          
          <p className="text-lg text-[#4a5d23] mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            The little garden mang đến những chậu cây xanh tươi tốt, giúp thanh lọc không khí và điểm tô màu xanh mát mắt cho không gian sống của bạn.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <motion.a 
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full sm:w-auto shadow-xl shadow-primary/30 text-lg"
            >
              Chọn cây ngay
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Decorative background blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-3xl -z-10"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200" 
            alt="Lush green Monstera plants" 
            className="relative z-10 w-full max-w-lg h-[500px] object-cover rounded-[3rem] shadow-2xl shadow-primary/20 animate-float border-[12px] border-white/80 backdrop-blur-sm"
          />
          
          {/* Cute floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-3xl shadow-xl z-20 border-2 border-primary/20 flex items-center gap-4"
          >
            <div className="w-14 h-14 bg-[#e8f5e9] rounded-full flex items-center justify-center text-[#4caf50]">
              <Leaf className="w-8 h-8 fill-current" />
            </div>
            <div>
              <div className="font-black text-base text-[#2d4a22]">100% Cây khỏe</div>
              <div className="text-sm text-[#4a5d23] font-medium">Lọc không khí tốt</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
