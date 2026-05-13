const products = [
    {
        id: 1,
        name: "Chậu Sen Đá Cầm Tay",
        price: 150000,
        image: "assets/product1.png",
        category: "Cây xanh"
    },
    {
        id: 2,
        name: "Bộ Gốm Men Lam Thủ Công",
        price: 450000,
        image: "assets/product2.png",
        category: "Gốm sứ"
    },
    {
        id: 3,
        name: "Bình Gốm Terracotta",
        price: 280000,
        image: "assets/hero.png", 
        category: "Gốm sứ"
    },
    {
        id: 4,
        name: "Cây Đuôi Công Xanh",
        price: 195000,
        image: "assets/duoicong.jpg",
        category: "Cây xanh"
    },
    {
        id: 5,
        name: "Cây Lưỡi Hổ Mini",
        price: 100000,
        image: "assets/luoiho.png",
        category: "Cây xanh"
    },
    {
        id: 6,
        name: "Cây Cẩm Nhung Xanh Fittonia",
        price: 85000,
        image: "assets/camnhung.jpg",
        category: "Cây xanh"
    }
];

let cart = [];

const productGrid = document.getElementById('productGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartOpenBtn = document.getElementById('cartOpenBtn');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const cartItemsContainer = document.getElementById('cartItems');
const totalPriceEl = document.getElementById('totalPrice');
const cartCountEl = document.getElementById('cartCount');
const searchInput = document.getElementById('searchInput');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutForm = document.getElementById('checkoutForm');
const loginModal = document.getElementById('loginModal');
const loginOpenBtn = document.getElementById('loginOpenBtn');
const userProfile = document.getElementById('userProfile');
const userNameDisplay = document.getElementById('userNameDisplay');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginFormContainer = document.getElementById('loginFormContainer');
const registerFormContainer = document.getElementById('registerFormContainer');

let currentUser = JSON.parse(localStorage.getItem('tlg_user')) || null;

// Render Products
function renderProducts(filter = 'all', query = '') {
    let filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);

    if (query) {
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <p style="font-size: 0.8rem; color: #d4a373; font-weight: 600; text-transform: uppercase;">${product.category}</p>
                <h3>${product.name}</h3>
                <span class="price">${product.price.toLocaleString('vi-VN')}đ</span>
                <button class="add-btn" onclick="addToCart(${product.id})">Thêm vào giỏ</button>
            </div>
        </div>
    `).join('');
}

function filterProducts(category) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText === category || (category === 'all' && btn.innerText === 'Tất cả'));
    });
    
    renderProducts(category);
}

// Cart Functions
function toggleCart() {
    cartSidebar.classList.toggle('active');
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    if(!cartSidebar.classList.contains('active')) toggleCart();
}

function updateCart() {
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div style="flex-grow: 1;">
                <h4 style="font-family: inherit; font-size: 1rem;">${item.name}</h4>
                <p>${item.quantity} x ${item.price.toLocaleString('vi-VN')}đ</p>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background: none; border: none; cursor: pointer; color: #ff6b6b;">&times;</button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPriceEl.innerText = total.toLocaleString('vi-VN') + 'đ';
    cartCountEl.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Event Listeners
cartOpenBtn.addEventListener('click', toggleCart);
cartCloseBtn.addEventListener('click', toggleCart);

searchInput.addEventListener('input', (e) => {
    renderProducts('all', e.target.value);
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Giỏ hàng của bạn đang trống!');
        return;
    }
    toggleCart(); // Close cart
    checkoutModal.classList.add('active');
});

function closeCheckout() {
    checkoutModal.classList.remove('active');
}

// Auth Functions
function updateAuthUI() {
    if (currentUser) {
        loginOpenBtn.style.display = 'none';
        userProfile.style.display = 'flex';
        userNameDisplay.innerText = `Chào, ${currentUser.name}`;
    } else {
        loginOpenBtn.style.display = 'block';
        userProfile.style.display = 'none';
    }
}

function openLogin() {
    loginModal.classList.add('active');
    switchAuthMode('login');
}

function closeLogin() {
    loginModal.classList.remove('active');
}

function switchAuthMode(mode) {
    if (mode === 'login') {
        loginFormContainer.style.display = 'block';
        registerFormContainer.style.display = 'none';
    } else {
        loginFormContainer.style.display = 'none';
        registerFormContainer.style.display = 'block';
    }
}

function logout() {
    localStorage.removeItem('tlg_user');
    currentUser = null;
    updateAuthUI();
    alert('Đã đăng xuất thành công!');
}

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Create order object
    const orderData = {
        id: Date.now(),
        customer: {
            name: e.target.querySelector('input[type="text"]').value,
            phone: e.target.querySelector('input[type="tel"]').value,
            address: e.target.querySelector('textarea').value
        },
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        date: new Date().toLocaleString('vi-VN')
    };

    // Save to LocalStorage
    const orders = JSON.parse(localStorage.getItem('tlg_orders') || '[]');
    orders.push(orderData);
    localStorage.setItem('tlg_orders', JSON.stringify(orders));

    alert('Chúc mừng! Đơn hàng của bạn đã được tiếp nhận. Chúng tôi sẽ liên hệ sớm nhất.');
    cart = [];
    updateCart();
    closeCheckout();
    e.target.reset();
});

// Login Form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('tlg_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('tlg_user', JSON.stringify(user));
        updateAuthUI();
        closeLogin();
        alert(`Chào mừng quay trở lại, ${user.name}!`);
    } else {
        alert('Email hoặc mật khẩu không chính xác!');
    }
});

// Register Form
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    const users = JSON.parse(localStorage.getItem('tlg_users') || '[]');
    
    if (users.some(u => u.email === email)) {
        alert('Email này đã được đăng ký!');
        return;
    }

    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    localStorage.setItem('tlg_users', JSON.stringify(users));

    alert('Đăng ký thành công! Bạn có thể đăng nhập ngay.');
    switchAuthMode('login');
});

loginOpenBtn.addEventListener('click', openLogin);

// Init
renderProducts();
updateAuthUI();

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Global functions for onclick
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.filterProducts = filterProducts;
window.closeCheckout = closeCheckout;
window.closeLogin = closeLogin;
window.switchAuthMode = switchAuthMode;
window.logout = logout;
