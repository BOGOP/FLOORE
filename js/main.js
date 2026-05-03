// =========================================
// 1. КОМПОНЕНТ ШАПКИ И НАВИГАЦИИ
// =========================================
function renderHeader() {
  const headerContainer = document.getElementById('header-container');
  if (!headerContainer) return;

  const isAuth = localStorage.getItem('isUserLoggedIn') === 'true';

  let userActions = '';
  if (isAuth) {
      userActions = `
        <a href="profile.html#mydata" class="icon-btn" title="Профиль">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </a>
      `;
  } else {
      userActions = `
        <a href="auth.html#register" style="text-decoration:none;"><button class="btn-outline" style="padding: 8px 16px; font-size: 13px;">Зарегистрироваться</button></a>
        <a href="auth.html#login" style="text-decoration:none;"><button class="btn-primary" style="padding: 8px 16px; font-size: 13px; margin-left: 10px;">Войти</button></a>
      `;
  }

  headerContainer.innerHTML = `
  <header>
    <div class="header-top">
      <a href="index.html" class="logo" style="text-decoration:none;">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:48px;height:48px;">
          <path d="M24 8 C18 8 12 14 14 22 C16 30 24 36 24 36 C24 36 32 30 34 22 C36 14 30 8 24 8Z" fill="#6B1F7C" opacity="0.15"/>
          <path d="M24 10 C20 10 15 15 17 21 C19 27 24 33 24 33 C24 33 29 27 31 21 C33 15 28 10 24 10Z" fill="none" stroke="#6B1F7C" stroke-width="1.5"/>
          <path d="M14 16 C10 12 10 20 14 22 C18 24 24 22 24 22" stroke="#6B1F7C" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <path d="M34 16 C38 12 38 20 34 22 C30 24 24 22 24 22" stroke="#6B1F7C" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <line x1="24" y1="33" x2="24" y2="42" stroke="#6B1F7C" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        Petalora
      </a>

      <div class="header-city">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Доставка цветов <strong>Одесса</strong>
      </div>

      <div class="header-icons" style="display: flex; align-items: center;">
        <select id="lang-select" class="lang-select">
            <option value="uk">UA</option>
            <option value="en">EN</option>
            <option value="ru">RU</option>
        </select>
        ${userActions}
        <a href="profile.html#favorites" class="icon-btn" title="Избранное" style="margin-left: 20px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <span class="badge" id="fav-badge">0</span>
        </a>
        <a href="profile.html#cart" class="icon-btn" title="Корзина">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <span class="badge" id="cart-badge">0</span>
        </a>
      </div>
    </div>

    <nav>
      <div class="nav-links">
        <a href="index.html" class="nav-link" data-i18n="nav_bouquets"> Букеты цветов</a>
        <a href="gifts.html" class="nav-link" data-i18n="nav_gifts">Подарки к цветам</a>
        <a href="boxes.html" class="nav-link">Цветы в коробках</a>
        <a href="baskets.html" class="nav-link">Корзины с цветами</a>
      </div>
      <div class="search-wrap">
        <input class="search-input" id="searchInput" type="text" placeholder="Поиск..." oninput="handleSearch(this.value)" onblur="closeSearch()">
        <button class="search-btn" onclick="triggerSearch()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>
        <div class="search-results" id="searchResults"></div>
      </div>
    </nav>
  </header>
  `;
}
renderHeader(); // Отрисовываем шапку сразу

// =========================================
// 2. МУЛЬТИЯЗЫЧНОСТЬ (СЛОВАРЬ И ФУНКЦИИ)
// =========================================
const translations = {
    "uk": {
        "bestsellers": "Хіт продажів",
        "hero_title": "Нехай квіти говорять за вас",
        "price": "грн",
        "nav_bouquets": "🎁 Букети квітів",
        "nav_gifts": "Подарунки до квітів",
        "nav_boxes": "Квіти в коробках",
        "nav_baskets": "Кошики з квітами",
        "search_placeholder": "Пошук...",
        "auth_login_tab": "Вхід",
        "auth_register_tab": "Реєстрація",
        "auth_email": "Email або телефон",
        "auth_pass": "Пароль",
        "auth_forgot": "Забули пароль?",
        "auth_login_btn": "Увійти",
        "auth_or_login": "або увійдіть через",
        "auth_no_account": "Немає акаунту?",
        "auth_register_link": "Зареєструватися",
        "auth_name": "Ім'я",
        "auth_surname": "Прізвище",
        "auth_email_only": "Email",
        "auth_phone": "Телефон",
        "auth_pass_repeat": "Повторіть пароль",
        "auth_agree": "Я погоджуюсь з",
        "auth_privacy": "політикою конфіденційності",
        "auth_and": "та",
        "auth_terms": "умовами використання",
        "auth_register_btn": "Створити акаунт",
        "auth_or_register": "або зареєструйтесь через",
        "auth_has_account": "Вже є акаунт?",
        "auth_login_link": "Увійти",
        "cart_empty": "Кошик порожній. Виберіть квіти!",
        "fav_empty": "В обраному поки нічого немає. Додавайте товари!",
        "add_to_cart": "В кошик"
    },
    "en": {
        "bestsellers": "Bestsellers",
        "hero_title": "Let flowers speak for you",
        "price": "UAH",
        "nav_bouquets": "🎁 Flower Bouquets",
        "nav_gifts": "Gifts for flowers",
        "nav_boxes": "Flowers in boxes",
        "nav_baskets": "Flower baskets",
        "search_placeholder": "Search...",
        "auth_login_tab": "Login",
        "auth_register_tab": "Register",
        "auth_email": "Email or phone",
        "auth_pass": "Password",
        "auth_forgot": "Forgot password?",
        "auth_login_btn": "Sign In",
        "auth_or_login": "or sign in with",
        "auth_no_account": "Don't have an account?",
        "auth_register_link": "Sign Up",
        "auth_name": "First Name",
        "auth_surname": "Last Name",
        "auth_email_only": "Email",
        "auth_phone": "Phone",
        "auth_pass_repeat": "Repeat password",
        "auth_agree": "I agree to the",
        "auth_privacy": "Privacy Policy",
        "auth_and": "and",
        "auth_terms": "Terms of Use",
        "auth_register_btn": "Create Account",
        "auth_or_register": "or sign up with",
        "auth_has_account": "Already have an account?",
        "auth_login_link": "Sign In",
        "cart_empty": "Your cart is empty. Choose some flowers!",
        "fav_empty": "Your wishlist is empty. Add some items!",
        "add_to_cart": "Add to cart"
    },
    "ru": {
        "bestsellers": "Хит продаж",
        "hero_title": "Пусть цветы говорят за вас",
        "price": "грн",
        "nav_bouquets": "🎁 Букеты цветов",
        "nav_gifts": "Подарки к цветам",
        "nav_boxes": "Цветы в коробках",
        "nav_baskets": "Корзины с цветами",
        "search_placeholder": "Поиск...",
        "auth_login_tab": "Вход",
        "auth_register_tab": "Регистрация",
        "auth_email": "Email или телефон",
        "auth_pass": "Пароль",
        "auth_forgot": "Забыли пароль?",
        "auth_login_btn": "Войти",
        "auth_or_login": "или войдите через",
        "auth_no_account": "Нет аккаунта?",
        "auth_register_link": "Зарегистрироваться",
        "auth_name": "Имя",
        "auth_surname": "Фамилия",
        "auth_email_only": "Email",
        "auth_phone": "Телефон",
        "auth_pass_repeat": "Повторите пароль",
        "auth_agree": "Я согласен(а) с",
        "auth_privacy": "политикой конфиденциальности",
        "auth_and": "и",
        "auth_terms": "условиями использования",
        "auth_register_btn": "Создать аккаунт",
        "auth_or_register": "или зарегистрируйтесь через",
        "auth_has_account": "Уже есть аккаунт?",
        "auth_login_link": "Войти",
        "cart_empty": "Корзина пуста. Выберите цветы!",
        "fav_empty": "В избранном пока ничего нет. Добавляйте товары!",
        "add_to_cart": "В корзину"
    }
};

// Функция для получения текста прямо внутри JavaScript (если понадобится для уведомлений)
window.t = function(key) {
    const lang = localStorage.getItem('site_lang') || 'uk';
    return translations[lang][key] || key;
};
// Функция для получения текста прямо внутри JavaScript
function t(key) {
    const lang = localStorage.getItem('site_lang') || 'uk';
    return translations[lang][key] || key;
    showToast('✅ Успешный вход!')
    showToast( t('toast_login') );
}

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    localStorage.setItem('site_lang', lang);
    const langSelect = document.getElementById('lang-select');
    if (langSelect) langSelect.value = lang;
}

// =========================================
// 3. БАЗА ДАННЫХ И КОРЗИНА
// =========================================
const PRODUCTS = [
  { id:1, name:'Букет «Розовая нежность»', price:890, emoji:'🌹', category:'roses', desc:'25 роз, упаковка' },
  { id:2, name:'Тюльпаны микс 25 шт',      price:450, emoji:'🌷', category:'tulips', desc:'Весенний микс' },
  { id:3, name:'Пионы белые 15 шт',        price:680, emoji:'🌸', category:'peonies', desc:'Нежные пионы' },
  { id:4, name:'Ромашки полевые',          price:320, emoji:'🌼', category:'chamomile', desc:'Полевой букет' },
  { id:5, name:'Орхидея в горшке',         price:540, emoji:'🪻', category:'orchid', desc:'Фаленопсис' },
  { id:6, name:'Лилии белые 7 шт',         price:420, emoji:'💐', category:'lily', desc:'Крупные бутоны' },
  { id:7, name:'Подсолнухи 10 шт',         price:380, emoji:'🌻', category:'sunflower', desc:'Яркий букет' },
  { id:8, name:'Гортензия голубая',        price:560, emoji:'🌿', category:'hydrangea', desc:'В коробке' },
  { id:9, name:'Розы красные 51 шт',       price:1650, emoji:'🥀', category:'roses', desc:'Классика' },
];

let favorites = [1,3,7];
let cart = [
  { id:2, qty:1 },
  { id:5, qty:2 },
  { id:6, qty:1 },
];

window.addToCart = function(productName) {
    let currentCount = parseInt(localStorage.getItem('tempCartCount')) || 0;
    currentCount += 1;
    localStorage.setItem('tempCartCount', currentCount);
    updateBadges();
    showToast(`🛒 "${productName}" добавлен в корзину!`);
};

// =========================================
// 4. ЛОГИКА АВТОРИЗАЦИИ (auth.html)
// =========================================
function switchAuthTab(target) {
    const loginTab = document.getElementById('tabLogin');
    const registerTab = document.getElementById('tabRegister');
    const loginForm = document.getElementById('formLogin');
    const registerForm = document.getElementById('formRegister');
    
    if(!loginTab || !registerTab) return;
    
    if (target === 'register') {
        loginTab.classList.remove('active');
        registerTab.classList.add('active');
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    } else {
        registerTab.classList.remove('active');
        loginTab.classList.add('active');
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
    }
}

const togglePasswordBtns = document.querySelectorAll('.toggle-password');
togglePasswordBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const input = this.previousElementSibling;
        const icon = this.querySelector('i');
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});
// Обработка отправки формы Входа
const formLoginElement = document.getElementById('formLogin');
if (formLoginElement) {
    formLoginElement.addEventListener('submit', function(event) {
        event.preventDefault(); // Запрещаем стандартную перезагрузку страницы
        
        // Здесь в будущем будет проверка логина и пароля через сервер
        // А пока просто "симулируем" успешный вход:
        
        localStorage.setItem('isUserLoggedIn', 'true'); // Записываем в память, что мы вошли
        showToast('✅ Успешный вход!'); // Показываем красивое уведомление
        
        // Ждем полсекунды (чтобы юзер увидел уведомление) и переносим в профиль
        setTimeout(() => {
            window.location.href = 'profile.html'; 
        }, 500);
    });
}

// Обработка отправки формы Регистрации
const formRegisterElement = document.getElementById('formRegister');
if (formRegisterElement) {
    formRegisterElement.addEventListener('submit', function(event) {
        event.preventDefault(); // Запрещаем стандартную перезагрузку страницы
        
        localStorage.setItem('isUserLoggedIn', 'true'); // Записываем в память, что мы вошли
        showToast('🎉 Регистрация успешна!'); 
        
        setTimeout(() => {
            window.location.href = 'profile.html'; 
        }, 500);
    });
}
function logout() {
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('tempCartCount');
    window.location.href = 'index.html';
}

// =========================================
// 5. ЛОГИКА ПРОФИЛЯ И ТАБОВ (profile.html)
// =========================================
function switchTab(tab) {
  document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.content-card').forEach(el => el.classList.remove('active'));
  
  const tabBtn = document.getElementById('tab-'+tab);
  const panel = document.getElementById('panel-'+tab);
  
  if(tabBtn) tabBtn.classList.add('active');
  if(panel) panel.classList.add('active');
  
  if (tab === 'favorites') renderFavorites();
  if (tab === 'cart') renderCart();
}

function handleHashTabs() {
  if (document.getElementById('tab-mydata')) {
    const hash = window.location.hash.replace('#', '');
    const validTabs = ['mydata', 'orders', 'favorites', 'cart', 'addresses'];
    if (validTabs.includes(hash)) {
      switchTab(hash);
    } else {
      switchTab('mydata'); 
    }
  }
  // Для страницы авторизации
  if (document.getElementById('tabLogin')) {
      if (window.location.hash === '#register') switchAuthTab('register');
      else switchAuthTab('login');
  }
}

function renderFavorites() {
  const grid = document.getElementById('fav-grid');
  if(!grid) return;
  if (favorites.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <div class="empty-icon">🤍</div>
      <p>В избранном пока ничего нет.<br>Добавляйте понравившиеся товары!</p>
    </div>`;
    return;
  }
  grid.innerHTML = favorites.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    return `<div class="fav-card" id="fav-${id}">
      <div class="fav-img">${p.emoji}</div>
      <button class="fav-remove" onclick="removeFavorite(${id})" title="Убрать">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="fav-info">
        <div class="fav-name">${p.name}</div>
        <div class="fav-price">${p.price} грн</div>
        <button class="fav-add-cart" onclick="addToCartFromFav(${id})">В корзину</button>
      </div>
    </div>`;
  }).join('');
  updateBadges();
}

function removeFavorite(id) {
  const card = document.getElementById('fav-'+id);
  if (card) { card.style.opacity='0'; card.style.transform='scale(0.9)'; card.style.transition='all .3s'; }
  setTimeout(() => {
    favorites = favorites.filter(x => x !== id);
    renderFavorites();
    updateBadges();
    showToast('💔 Удалено из избранного');
  }, 300);
}

function addToCartFromFav(id) {
  const existing = cart.find(x => x.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({id, qty:1}); }
  updateBadges();
  showToast('🛒 Добавлено в корзину!');
}

function renderCart() {
  const list = document.getElementById('cart-items-list');
  if(!list) return;
  if (cart.length === 0) {
    list.innerHTML = `<div class="empty-state">
      <div class="empty-icon">🛒</div>
      <p>Корзина пуста. Выберите цветы!</p>
    </div>`;
    document.getElementById('cart-items-count').textContent = '0';
    document.getElementById('sum-items').textContent = '0 грн';
    document.getElementById('sum-total').textContent = '0 грн';
    return;
  }
  list.innerHTML = cart.map(c => {
    const p = PRODUCTS.find(x => x.id === c.id);
    return `<div class="cart-item" id="cart-item-${c.id}">
      <div class="cart-item-img">${p.emoji}</div>
      <div class="cart-item-details">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-desc">${p.desc}</div>
        <div class="cart-item-price">${p.price * c.qty} грн</div>
      </div>
      <div class="qty-control">
        <button class="qty-btn" onclick="changeQty(${c.id},-1)">−</button>
        <span class="qty-value" id="qty-${c.id}">${c.qty}</span>
        <button class="qty-btn" onclick="changeQty(${c.id},1)">+</button>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${c.id})" title="Удалить">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
      </button>
    </div>`;
  }).join('');
  calcCart();
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  const el = document.getElementById('qty-'+id);
  if (el) el.textContent = item.qty;
  const p = PRODUCTS.find(x => x.id === id);
  const priceEl = document.querySelector(`#cart-item-${id} .cart-item-price`);
  if (priceEl) priceEl.textContent = `${p.price * item.qty} грн`;
  calcCart(); updateBadges();
}

function removeFromCart(id) {
  const el = document.getElementById('cart-item-'+id);
  if (el) { el.style.opacity='0'; el.style.transform='translateX(20px)'; el.style.transition='all .3s'; }
  setTimeout(() => {
    cart = cart.filter(x => x.id !== id);
    renderCart(); updateBadges();
    showToast('🗑️ Товар удалён из корзины', 'error');
  }, 300);
}

function calcCart() {
  const total = cart.reduce((s,c) => { const p = PRODUCTS.find(x=>x.id===c.id); return s + p.price*c.qty; }, 0);
  const count = cart.reduce((s,c) => s+c.qty, 0);
  document.getElementById('cart-items-count').textContent = count;
  document.getElementById('sum-items').textContent = total.toLocaleString('uk-UA') + ' грн';
  document.getElementById('sum-total').textContent = total.toLocaleString('uk-UA') + ' грн';
  updateBadges();
}

function updateBadges() {
  const favCount = favorites.length;
  const localCount = parseInt(localStorage.getItem('tempCartCount')) || 0;
  const cartCount = cart.reduce((s,c) => s+c.qty, 0) + localCount;
  
  ['fav-badge','fav-count-badge'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = favCount;
  });
  ['cart-badge','cart-count-badge'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = cartCount;
  });
}

function saveProfile() {
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  document.querySelector('.sidebar-name').textContent = `${fname} ${lname}`;
  const success = document.getElementById('save-success');
  success.classList.add('show');
  showToast('✅ Данные успешно сохранены!');
  setTimeout(() => success.classList.remove('show'), 3000);
}

// =========================================
// 6. ПОИСК И УВЕДОМЛЕНИЯ
// =========================================
let toastTimeout;
function showToast(msg, type = 'success') {
  let t = document.getElementById('toast');
  if(!t) {
      t = document.createElement('div');
      t.id = 'toast';
      t.className = 'toast';
      document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = 'toast show' + (type === 'error' ? ' error' : '');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => { t.classList.remove('show'); }, 2800);
}

let searchTimeout;
function handleSearch(val) {
  clearTimeout(searchTimeout);
  if (!val.trim()) { closeSearchResults(); return; }
  searchTimeout = setTimeout(() => doSearch(val.trim()), 200);
}

function doSearch(query) {
  const q = query.toLowerCase();
  const results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
  renderSearchResults(results, query);
}

function renderSearchResults(results, query) {
  const box = document.getElementById('searchResults');
  if(!box) return;
  if (results.length === 0) {
    box.innerHTML = `<div class="search-no-results">😔 По запросу «${query}» ничего не найдено</div>`;
  } else {
    box.innerHTML = results.map(p => `
      <div class="search-result-item" onclick="addToCartSearch(${p.id})">
        <div class="search-result-img">${p.emoji}</div>
        <div class="search-result-info">
          <div class="search-result-name">${highlight(p.name, query)}</div>
          <div class="search-result-price">${p.price} грн</div>
        </div>
      </div>
    `).join('');
  }
  box.classList.add('active');
}

function highlight(text, query) {
  const re = new RegExp(`(${query})`, 'gi');
  return text.replace(re, '<mark style="background:rgba(240,64,122,0.2);border-radius:2px;padding:0 2px">$1</mark>');
}

function closeSearch() { setTimeout(() => closeSearchResults(), 150); }
function closeSearchResults() {
  const box = document.getElementById('searchResults');
  if(box) box.classList.remove('active');
}

function triggerSearch() {
  const input = document.getElementById('searchInput');
  if (input && input.value.trim()) doSearch(input.value.trim());
}

function addToCartSearch(id) {
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty++;
  else cart.push({id, qty:1});
  updateBadges();
  const p = PRODUCTS.find(x => x.id === id);
  showToast(`🛒 «${p.name}» добавлен в корзину!`);
  closeSearchResults();
  document.getElementById('searchInput').value = '';
}

// =========================================
// 7. ЧАТ ВИДЖЕТ
// =========================================
function initChat() {
    const chatWidget = document.getElementById('chatWidget');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const openChatBtn = document.getElementById('openChatBtn');

    if (openChatBtn && closeChatBtn && chatWidget) {
        openChatBtn.addEventListener('click', () => {
            chatWidget.style.display = 'block'; 
            openChatBtn.style.display = 'none'; 
        });

        closeChatBtn.addEventListener('click', () => {
            chatWidget.style.display = 'none'; 
            openChatBtn.style.display = 'flex'; 
        });
    }
}

// =========================================
// 8. ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ САЙТА
// =========================================
// Этот блок объединяет все функции, которые должны сработать при открытии страницы
document.addEventListener('DOMContentLoaded', () => {
    // 1. Инициализируем табы (корзина, профиль) и хеши
    handleHashTabs();
    window.addEventListener('hashchange', handleHashTabs);

    // 2. Инициализируем язык
    const savedLang = localStorage.getItem('site_lang') || 'uk';
    setLanguage(savedLang);

    // 3. Подключаем слушатель к переключателю языков
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.addEventListener('change', (event) => {
            setLanguage(event.target.value);
        });
    }

    // 4. Обновляем счетчики корзины
    updateBadges();

    // 5. Инициализируем чат
    initChat();
    
    // 6. Подключаем клики по табам авторизации
    const loginTab = document.getElementById('tabLogin');
    const registerTab = document.getElementById('tabRegister');
    const toRegisterLink = document.getElementById('toRegister');
    const toLoginLink = document.getElementById('toLogin');
    
    if (loginTab && registerTab) {
        loginTab.addEventListener('click', () => switchAuthTab('login'));
        registerTab.addEventListener('click', () => switchAuthTab('register'));
        if(toRegisterLink) toRegisterLink.addEventListener('click', () => switchAuthTab('register'));
        if(toLoginLink) toLoginLink.addEventListener('click', () => switchAuthTab('login'));
    }
});
// --- ЖЕЛЕЗОБЕТОННЫЙ ВХОД И РЕГИСТРАЦИЯ (Без системных окон) ---
window.forceLogin = function() {
    localStorage.setItem('isUserLoggedIn', 'true'); // Записываем вход
    
    // Показываем красивое уведомление (если функция существует)
    if (typeof showToast === 'function') {
        showToast('✅ Успешный вход!');
    }
    
    // Ждем 400 миллисекунд (чтобы пользователь заметил уведомление) и мягко переносим в профиль
    setTimeout(() => {
        window.location.href = 'profile.html';
    }, 400);
};

window.forceRegister = function() {
    localStorage.setItem('isUserLoggedIn', 'true');
    
    if (typeof showToast === 'function') {
        showToast('🎉 Аккаунт создан!');
    }
    
    setTimeout(() => {
        window.location.href = 'profile.html';
    }, 400);
};