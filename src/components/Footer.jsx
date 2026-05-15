import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white pt-20 pb-10 px-[10%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="text-3xl font-black text-primary mb-6 brand">The Little Garden</div>
          <p className="text-gray-400 leading-relaxed">
            Nơi kết nối tâm hồn và thiên nhiên qua những tác phẩm thủ công tinh xảo.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-6">Liên Hệ</h4>
          <ul className="space-y-4 text-gray-400">
            <li>Địa chỉ: Hà Nội, Việt Nam</li>
            <li>Hotline: 087 925 4769</li>
            <li>Email: littlegarden2305@gmail.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-6">Theo Dõi</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="https://www.facebook.com/tiemgomvacayxanh" className="hover:text-primary transition-colors">Facebook</a></li>
            <li><a href="https://www.instagram.com/the.little.garden/" className="hover:text-primary transition-colors">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-6">Quản Trị</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="/admin" className="hover:text-primary transition-colors">Xem đơn hàng</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-10 text-center text-sm text-gray-500">
        Trang web được thiết kế bởi Đào Việt Tuấn © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
