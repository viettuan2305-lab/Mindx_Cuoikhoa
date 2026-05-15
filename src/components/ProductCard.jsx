import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col cursor-pointer"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
            {product.category}
          </span>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
        
        {/* Add to Cart Button floating on hover */}
        <div className="absolute bottom-6 left-0 w-full flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-20">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-white text-primary px-8 py-3 rounded-full font-bold text-sm hover:bg-accent hover:text-white transition-all shadow-xl flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" /> Thêm vào giỏ
          </button>
        </div>
      </div>
      
      <div className="pt-6 pb-2 text-center px-4">
        <h3 className="text-xl font-medium text-text-main mb-2 group-hover:text-accent transition-colors line-clamp-1" style={{ fontFamily: 'Lora, serif' }}>
          {product.name}
        </h3>
        <p className="text-lg font-bold text-primary">
          {product.price.toLocaleString('vi-VN')}đ
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
