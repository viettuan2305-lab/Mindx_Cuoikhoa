import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group premium-card overflow-hidden bg-white"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-accent shadow-sm">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-black text-primary">
            {product.price.toLocaleString('vi-VN')}đ
          </span>
          <button 
            onClick={() => onAddToCart(product)}
            className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-600 rounded-full hover:bg-primary hover:text-white transition-all cursor-pointer shadow-sm"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
