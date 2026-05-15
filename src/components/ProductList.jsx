import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';

const ProductList = ({ products, onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = products.filter(p => 
    activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <section id="products" className="py-24 px-[10%] relative">
      
      <div className="text-center mb-16">
        <h2 className="text-5xl font-normal mb-6 text-primary" style={{ fontFamily: 'Lora, serif' }}>Bộ Sưu Tập Nổi Bật</h2>
        <p className="text-text-main text-lg max-w-2xl mx-auto">
          Những sản phẩm được tuyển chọn kỹ lưỡng dành riêng cho không gian của bạn
        </p>
        
        <div className="flex justify-center items-center gap-4 mt-10">
            {['all', 'Cây xanh', 'Gốm sứ'].map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-8 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer border ${
                  activeFilter === category 
                  ? 'bg-accent text-white border-accent shadow-md' 
                  : 'bg-transparent text-text-muted border-[#d1c8c1] hover:border-accent hover:text-accent'
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
