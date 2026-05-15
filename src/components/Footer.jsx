import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1A2F25] text-white pt-20 pb-10 px-[10%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="text-5xl font-bold text-accent mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>The little garden</div>
          <p className="text-gray-400 leading-relaxed font-medium">
            Nơi kết nối tâm hồn và thiên nhiên qua những tác phẩm thủ công tinh xảo.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-6 text-white" style={{ fontFamily: 'Lora, serif' }}>Liên Hệ</h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li>Địa chỉ: Hà Nội, Việt Nam</li>
            <li>Hotline: 087 925 4769</li>
            <li>Email: littlegarden2305@gmail.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-6 text-white" style={{ fontFamily: 'Lora, serif' }}>Theo Dõi</h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li><a href="https://www.facebook.com/tiemgomvacayxanh" className="hover:text-accent transition-colors">Facebook</a></li>
            <li><a href="https://www.instagram.com/the.little.garden/" className="hover:text-accent transition-colors">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-6 text-white" style={{ fontFamily: 'Lora, serif' }}>Quản Trị</h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li><a href="/admin" className="hover:text-accent transition-colors">Xem đơn hàng</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-10 text-center text-sm text-gray-400 font-medium">
        Trang web được thiết kế bởi Đào Việt Tuấn © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
