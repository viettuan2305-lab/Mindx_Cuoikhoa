import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';

const ProductList = ({ products, onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = products.filter(p => 
    activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <section id="products" className="py-24 px-[10%] bg-bg-main relative">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#2d4a22]">Bộ Sưu Tập Nổi Bật</h2>
        <p className="text-[#4a5d23] text-lg max-w-2xl mx-auto font-medium">
          Sự kết hợp hoàn hảo giữa những mầm xanh tươi mát và đồ gốm mộc mạc, mang linh hồn thiên nhiên vào góc nhỏ của bạn.
        </p>
        
        <div className="flex justify-center items-center gap-4 mt-10">
            {['all', 'Cây xanh', 'Gốm sứ'].map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer border-2 ${
                  activeFilter === category 
                  ? 'bg-[#4caf50] text-white border-[#4caf50] shadow-md shadow-green-500/20' 
                  : 'bg-transparent text-[#4a5d23] border-[#e8f5e9] hover:border-[#81c784] hover:text-[#2d4a22] hover:bg-[#f2f7ec]'
                }`}
              >
                {category === 'all' ? 'Tất cả' : category}
              </button>
            ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredProducts.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-gray-400 italic font-medium">Không tìm thấy sản phẩm nào trong danh mục này.</p>
        </div>
      )}
    </section>
  );
};

export default ProductList;
