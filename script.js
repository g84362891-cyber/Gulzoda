// 1. HERO SLIDER MA'LUMOTLARI (Har 5 soniyada almashadi)
const heroSlides = [
  {
    title: "Olovda pishgan haqiqiy Burgerlar",
    desc: "100% halol mol go‘shti, eritilgan chedder pishlog‘i va maxsus tutunli sous uyg‘unligi.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80"
  },
  {
    title: "Issiq va Qarsildoq Pepperoni Pitsa",
    desc: "Yupqa xamir, cho‘ziluvchan motsarella pishlog‘i va achchiq pepperoni kolbasalari.",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80"
  },
  {
    title: "Qirollik Tandir Lavash va Donar",
    desc: "Grilda qovurilgan suvli go‘sht, yangi sabzavotlar va maxsus sarimsoqli sous.",
    img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80"
  },
  {
    title: "KFC Uslubidagi Qarsildoq Tovuq",
    desc: "11 xil ziravorlar bilan marinadlangan, sirti qarsildoq, ichi yumshoq tovuq qanotchalari.",
    img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80"
  }
];

let currentSlide = 0;
function initSlider() {
  const dotsContainer = document.getElementById("sliderDots");
  if (!dotsContainer) return;
  dotsContainer.innerHTML = heroSlides.map((_, i) =>
    `<span class="dot ${i === 0 ? 'active' : ''}" onclick="setSlide(${i})"></span>`
  ).join("");

  setInterval(() => {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    setSlide(currentSlide);
  }, 5000);
}

function setSlide(index) {
  currentSlide = index;
  const slide = heroSlides[index];
  const imgEl = document.getElementById("heroImg");
  const titleEl = document.getElementById("heroTitle");
  const descEl = document.getElementById("heroDesc");
  if (!imgEl) return;

  imgEl.style.opacity = 0.2;
  setTimeout(() => {
    imgEl.src = slide.img;
    titleEl.textContent = slide.title;
    descEl.textContent = slide.desc;
    imgEl.style.opacity = 1;
  }, 250);

  document.querySelectorAll(".dot").forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });
}

// 2. 20 XIL ORIGINAL RASMLI FAST-FOOD TAOMLAR
const defaultFoods = [
  { id: 1, name: "Ember Classic Burger", desc: "Mol go‘shti kotleti, chedder pishloq, pomidor va maxsus sous.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", variants: [{ name: "Standart", price: 32000 }, { name: "Double", price: 46000 }, { name: "Kombo", price: 54000 }] },
  { id: 2, name: "Double Cheese Burger", desc: "Ikki qavat mol go‘shti va ikki hissa eritilgan chedder pishlog‘i.", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80", variants: [{ name: "2x Kotlet", price: 44000 }, { name: "3x Kotlet", price: 58000 }, { name: "Kombo", price: 65000 }] },
  { id: 3, name: "BBQ Bacon Burger", desc: "Dudlangan mol go‘shti, qarsildoq piyoz halqalari va barbekyu sousi.", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80", variants: [{ name: "Standart", price: 38000 }, { name: "Katta", price: 49000 }, { name: "Kombo", price: 58000 }] },
  { id: 4, name: "Crispy Chicken Burger", desc: "Qarsildoq tovuq filesi, aysberg salati va mayonezli sous.", img: "https://images.unsplash.com/photo-1615297928064-24977384d0da?w=600&q=80", variants: [{ name: "Oddiy", price: 29000 }, { name: "Achchiq", price: 31000 }, { name: "Kombo", price: 45000 }] },
  { id: 5, name: "Tandir Mol Go‘shtli Lavash", desc: "Yupqa lavash xamiri, gril mol go‘shti, chips va pomidor sousi.", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80", variants: [{ name: "Mini", price: 27000 }, { name: "Standart", price: 34000 }, { name: "Pishloqli", price: 39000 }] },
  { id: 6, name: "Tovuqli Klassik Lavash", desc: "Ziravorlangan tovuq go‘shti, bodring, pomidor va oq sous.", img: "https://images.unsplash.com/photo-1642783944285-b33b18ef6c3b?w=600&q=80", variants: [{ name: "Mini", price: 25000 }, { name: "Standart", price: 31000 }, { name: "Pishloqli", price: 36000 }] },
  { id: 7, name: "Pepperoni Pitsa", desc: "Motsarella pishlog‘i, dudlangan pepperoni va italyan tomat sousi.", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80", variants: [{ name: "25 sm", price: 55000 }, { name: "30 sm", price: 72000 }, { name: "35 sm", price: 89000 }] },
  { id: 8, name: "Margarita Pitsa", desc: "Yangi rayhon barglari, motsarella va maxsus pomidor qaylasi.", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80", variants: [{ name: "25 sm", price: 48000 }, { name: "30 sm", price: 64000 }, { name: "35 sm", price: 79000 }] },
  { id: 9, name: "4 Pishloqli Pitsa", desc: "Motsarella, chedder, parmezan va dor-blyu pishloqlari uyg‘unligi.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80", variants: [{ name: "25 sm", price: 59000 }, { name: "30 sm", price: 76000 }, { name: "35 sm", price: 94000 }] },
  { id: 10, name: "Qirollik Hot-Dog", desc: "Grilda pishgan sosiska, xantal, ketchup va qovurilgan piyoz.", img: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=600&q=80", variants: [{ name: "Klassik", price: 18000 }, { name: "Double", price: 26000 }, { name: "Pishloqli", price: 24000 }] },
  { id: 11, name: "KFC Qarsildoq Qanotchalar", desc: "Maxsus panirovkada qovurilgan achchiq tovuq qanotchalari.", img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80", variants: [{ name: "6 dona", price: 28000 }, { name: "12 dona", price: 52000 }, { name: "20 dona", price: 82000 }] },
  { id: 12, name: "Tovuq Stripslari", desc: "Suyaksiz yumshoq tovuq filesi bo‘lakchalari va sous.", img: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=600&q=80", variants: [{ name: "5 dona", price: 24000 }, { name: "9 dona", price: 41000 }, { name: "Kombo", price: 49000 }] },
  { id: 13, name: "Tovuq Naggetslari", desc: "Oltin rangda qovurilgan tovuq naggetslari pishloqli sous bilan.", img: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=600&q=80", variants: [{ name: "6 dona", price: 19000 }, { name: "9 dona", price: 27000 }, { name: "15 dona", price: 42000 }] },
  { id: 14, name: "Kartoshka Fri", desc: "Tashqi tomoni qarsildoq, ichi yumshoq saralangan kartoshka.", img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=600&q=80", variants: [{ name: "Kichik", price: 14000 }, { name: "O‘rta", price: 18000 }, { name: "Katta", price: 23000 }] },
  { id: 15, name: "Qishloqcha Kartoshka", desc: "Ziravorlar bilan pechda pishirilgan yirik kartoshka bo‘laklari.", img: "https://images.unsplash.com/photo-1623238913973-21e45cced554?w=600&q=80", variants: [{ name: "Standart", price: 17000 }, { name: "Katta", price: 22000 }, { name: "Pishloqli", price: 27000 }] },
  { id: 16, name: "Club Sendvich", desc: "Toster noni, tovuq go‘shti, pishloq, tuxum va fri kartoshkasi.", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80", variants: [{ name: "Tovuqli", price: 32000 }, { name: "Mol go‘shtli", price: 36000 }, { name: "Mega", price: 44000 }] },
  { id: 17, name: "Meksikancha Tako", desc: "Makkajo‘xori tortilyasi, qiyma go‘sht, loviya va salsa sousi.", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80", variants: [{ name: "2 dona", price: 28000 }, { name: "3 dona", price: 39000 }, { name: "Achchiq 3x", price: 41000 }] },
  { id: 18, name: "Shaurma Donar", desc: "Issiq non ichida go‘sht, tuzlangan bodring va maxsus sous.", img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80", variants: [{ name: "Standart", price: 26000 }, { name: "Katta", price: 33000 }, { name: "Pishloqli", price: 37000 }] },
  { id: 19, name: "Shokoladli Milkshake", desc: "Muzqaymoq, sut va haqiqiy Belgiya shokoladidan tayyorlangan kokteyl.", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80", variants: [{ name: "0.3 L", price: 20000 }, { name: "0.5 L", price: 27000 }, { name: "Oreo bilan", price: 32000 }] },
  { id: 20, name: "Muzdek Moxito", desc: "Yangi yalpiz barglari, laym va gazlangan muzdek ichimlik.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80", variants: [{ name: "Klassik", price: 16000 }, { name: "Qulupnayli", price: 19000 }, { name: "1 L Grafin", price: 35000 }] }
];

let foods = JSON.parse(localStorage.getItem("ember_foods")) || defaultFoods;
if (!localStorage.getItem("ember_foods")) {
  localStorage.setItem("ember_foods", JSON.stringify(foods));
}

let cart = JSON.parse(localStorage.getItem("ember_cart")) || [];
let favorites = JSON.parse(localStorage.getItem("ember_favs")) || [];
let selectedVariants = {};

// 3. O'ZBEKISTONNING 12 TA VILOYATI VA TUMANLARI
const uzbekistanRegions = {
  "Toshkent viloyati": ["Angren sh.", "Bekobod", "Bo‘stonliq", "Chinoz", "Chirchiq sh.", "Olmaliq sh.", "Parkent", "Qibray", "Yangiyo‘l", "Zangiota"],
  "Samarqand viloyati": ["Samarqand sh.", "Bulung‘ur", "Ishtixon", "Jomboy", "Kattaqo‘rg‘on", "Narpay", "Oqdaryo", "Pastdarg‘om", "Payariq", "Urgut"],
  "Buxoro viloyati": ["Buxoro sh.", "G‘ijduvon", "Jondor", "Kogon", "Olot", "Peshku", "Qorako‘l", "Romitan", "Shofirkon", "Vobkent"],
  "Andijon viloyati": ["Andijon sh.", "Asaka", "Baliqchi", "Bo‘ston", "Buloqboshi", "Izboskan", "Jalaquduq", "Marhamat", "Oltinko‘l", "Shahrixon"],
  "Farg‘ona viloyati": ["Farg‘ona sh.", "Bag‘dod", "Beshariq", "Buvayda", "Dang‘ara", "Marg‘ilon sh.", "Oltiariq", "Qo‘qon sh.", "Quva", "Rishton"],
  "Namangan viloyati": ["Namangan sh.", "Chortoq", "Chust", "Kosonsoy", "Mingbuloq", "Norin", "Pop", "To‘raqo‘rg‘on", "Uchqo‘rg‘on", "Uychi"],
  "Qashqadaryo viloyati": ["Qarshi sh.", "Chiroqchi", "Dehqonobod", "G‘uzor", "Kasbi", "Kitob", "Koson", "Muborak", "Nishon", "Shahrisabz"],
  "Surxondaryo viloyati": ["Termiz sh.", "Angor", "Boysun", "Denov", "Jarqo‘rg‘on", "Muzrabot", "Oltinsoy", "Qiziriq", "Qumqo‘rg‘on", "Sherobod"],
  "Xorazm viloyati": ["Urganch sh.", "Bog‘ot", "Gurlan", "Hazorasp", "Xiva sh.", "Xonqa", "Qo‘shko‘pir", "Shovot", "Tuproqqal’a", "Yangiariq"],
  "Navoiy viloyati": ["Navoiy sh.", "Karmana", "Konimex", "Navbahor", "Nurota", "Qiziltepa", "Tomdi", "Uchquduq", "Xatirchi", "Zarafshon sh."],
  "Jizzax viloyati": ["Jizzax sh.", "Arnasoy", "Baxmal", "Do‘stlik", "Forish", "G‘allaorol", "Mirzacho‘l", "Paxtakor", "Sharof Rashidov", "Zomin"],
  "Sirdaryo viloyati": ["Guliston sh.", "Boyovut", "Mirzaobod", "Oqoltin", "Sardoba", "Sayxunobod", "Shirin sh.", "Sirdaryo", "Xovos", "Yangiyer sh."]
};

function populateRegions() {
  const regSelect = document.getElementById("regionSelect");
  if (!regSelect) return;
  Object.keys(uzbekistanRegions).forEach(region => {
    const opt = document.createElement("option");
    opt.value = region;
    opt.textContent = region;
    regSelect.appendChild(opt);
  });
}

function updateDistricts() {
  const reg = document.getElementById("regionSelect").value;
  const distSelect = document.getElementById("districtSelect");
  distSelect.innerHTML = '<option value="">Tumanni tanlang</option>';
  if (reg && uzbekistanRegions[reg]) {
    uzbekistanRegions[reg].forEach(dist => {
      const opt = document.createElement("option");
      opt.value = dist;
      opt.textContent = dist;
      distSelect.appendChild(opt);
    });
  }
}

// 4. MENYUNI CHIZISH
function renderMenu() {
  const grid = document.getElementById("foodGrid");
  if (!grid) return;
  foods = JSON.parse(localStorage.getItem("ember_foods")) || defaultFoods;

  grid.innerHTML = foods.map(food => {
    const vIdx = selectedVariants[food.id] || 0;
    const activeVar = food.variants[vIdx];
    const isLiked = favorites.includes(food.id);

    return `
      <div class="food-card">
        <button class="fav-heart ${isLiked ? 'liked' : ''}" onclick="toggleFavorite(${food.id})" title="Yoqtirganlarga qo'shish">
          <i class="fa-solid fa-heart"></i>
        </button>
        <img src="${food.img}" alt="${food.name}" loading="lazy">
        <div class="food-info">
          <h3>${food.name}</h3>
          <p>${food.desc}</p>
          <div class="variant-selector">
            ${food.variants.map((v, idx) => `
              <button class="var-btn ${idx === vIdx ? 'active' : ''}" onclick="selectVariant(${food.id}, ${idx})">
                ${v.name}
              </button>
            `).join("")}
          </div>
          <div class="food-bottom">
            <span class="price">${activeVar.price.toLocaleString()} so‘m</span>
            <button class="add-cart-btn" onclick="addToCart(${food.id})">
              <i class="fa-solid fa-cart-plus"></i> Savatga
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function selectVariant(foodId, variantIndex) {
  selectedVariants[foodId] = variantIndex;
  renderMenu();
}

// 5. SAVAT VA YOQTIRGANLAR
function addToCart(foodId) {
  const food = foods.find(f => f.id === foodId);
  const vIdx = selectedVariants[foodId] || 0;
  const variant = food.variants[vIdx];
  const cartKey = `${foodId}_${vIdx}`;

  const existing = cart.find(item => item.key === cartKey);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key: cartKey,
      name: food.name,
      variant: variant.name,
      price: variant.price,
      img: food.img,
      qty: 1
    });
  }
  saveAndUpdateUI();
  showToast(`"${food.name} (${variant.name})" savatga qo‘shildi!`);
}

function changeCartQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.key !== key);
  }
  saveAndUpdateUI();
}

function toggleFavorite(foodId) {
  if (favorites.includes(foodId)) {
    favorites = favorites.filter(id => id !== foodId);
    showToast("Yoqtirganlardan olib tashlandi");
  } else {
    favorites.push(foodId);
    showToast("Yoqtirganlarga qo‘shildi ❤️");
  }
  localStorage.setItem("ember_favs", JSON.stringify(favorites));
  renderMenu();
  updateBadges();
}

function saveAndUpdateUI() {
  localStorage.setItem("ember_cart", JSON.stringify(cart));
  updateBadges();
  renderCartModal();
}

function updateBadges() {
  const cartEl = document.getElementById("cartCount");
  const favEl = document.getElementById("favCount");
  if (cartEl) cartEl.textContent = cart.reduce((sum, i) => sum + i.qty, 0);
  if (favEl) favEl.textContent = favorites.length;
}

function renderCartModal() {
  const list = document.getElementById("cartItemsList");
  const totalEl = document.getElementById("cartTotalPrice");
  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = "<p style='color:#9ca3af; text-align:center;'>Savatingiz hozircha bo‘sh.</p>";
    totalEl.textContent = "0";
    return;
  }

  let total = 0;
  list.innerHTML = cart.map(item => {
    total += item.price * item.qty;
    return `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}">
        <div style="flex-grow:1;">
          <strong>${item.name}</strong> <small style="color:#ff5500;">(${item.variant})</small><br>
          <span>${(item.price * item.qty).toLocaleString()} so‘m</span>
        </div>
        <div>
          <button class="var-btn" onclick="changeCartQty('${item.key}', -1)">-</button>
          <span style="margin:0 8px;">${item.qty}</span>
          <button class="var-btn" onclick="changeCartQty('${item.key}', 1)">+</button>
        </div>
      </div>
    `;
  }).join("");
  totalEl.textContent = total.toLocaleString();
}

function renderFavModal() {
  const list = document.getElementById("favItemsList");
  if (!list) return;
  const favFoods = foods.filter(f => favorites.includes(f.id));
  if (favFoods.length === 0) {
    list.innerHTML = "<p style='color:#9ca3af; text-align:center;'>Yoqtirgan taomlar yo‘q.</p>";
    return;
  }
  list.innerHTML = favFoods.map(f => `
    <div class="cart-item">
      <img src="${f.img}" alt="${f.name}">
      <div style="flex-grow:1;">
        <strong>${f.name}</strong><br>
        <small>${f.variants[0].price.toLocaleString()} so‘mdan</small>
      </div>
      <button class="add-cart-btn" onclick="addToCart(${f.id})">Savatga</button>
    </div>
  `).join("");
}

// 6. MANZIL REJIMI
function toggleAddressMode() {
  const mode = document.querySelector('input[name="addrType"]:checked').value;
  document.getElementById("manualAddressBox").style.display = mode === "manual" ? "block" : "none";
  document.getElementById("mapAddressBox").style.display = mode === "map" ? "block" : "none";
}

function getLiveLocation() {
  const coordInput = document.getElementById("mapCoords");
  const frame = document.getElementById("gmapFrame");
  if (!navigator.geolocation) {
    showToast("Brauzeringiz GPS ni qo‘llab-quvvatlamaydi");
    return;
  }
  coordInput.value = "Joylashuv aniqlanmoqda...";
  navigator.geolocation.getCurrentPosition(
    pos => {
      const lat = pos.coords.latitude.toFixed(5);
      const lng = pos.coords.longitude.toFixed(5);
      coordInput.value = `https://maps.google.com/?q=${lat},${lng}`;
      frame.src = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
      showToast("Google Maps joylashuvi olindi!");
    },
    () => {
      coordInput.value = "Toshkent (GPS ruxsati berilmadi)";
      showToast("GPS ruxsatini yoqing");
    }
  );
}

// 7. BUYURTMANI YUBORISH
function submitOrder(e) {
  e.preventDefault();
  if (cart.length === 0) {
    showToast("Avval savatga taom qo‘shing!");
    return;
  }
  const mode = document.querySelector('input[name="addrType"]:checked').value;
  const address = mode === "manual"
    ? document.getElementById("manualAddress").value
    : document.getElementById("mapCoords").value;

  if (!address) {
    showToast("Iltimos, manzilni kiriting yoki xaritadan belgilang!");
    return;
  }

  const orders = JSON.parse(localStorage.getItem("ember_orders")) || [];
  orders.unshift({
    id: Date.now(),
    customer: document.getElementById("custName").value,
    phone: document.getElementById("custPhone").value,
    region: document.getElementById("regionSelect").value,
    district: document.getElementById("districtSelect").value,
    address: address,
    items: cart,
    total: document.getElementById("cartTotalPrice").textContent,
    time: new Date().toLocaleString()
  });

  localStorage.setItem("ember_orders", JSON.stringify(orders));
  cart = [];
  saveAndUpdateUI();
  closeModal("cartModal");
  showToast("✅ Buyurtmangiz qabul qilindi! Tez orada bog‘lanamiz.");
}

function registerUser(e) {
  e.preventDefault();
  const name = document.getElementById("regName").value;
  localStorage.setItem("ember_user", name);
  document.getElementById("authBtn").innerHTML = `<i class="fa-solid fa-user-check"></i> <span>${name}</span>`;
  closeModal("authModal");
  showToast(`Xush kelibsiz, ${name}!`);
}

// 8. ADMIN PANEL XAVFSIZLIK VA BOSHQARUV TIZIMI
function checkAdminAuth(e) {
  e.preventDefault();
  const u = document.getElementById("admUser").value.trim();
  const p = document.getElementById("admPass").value.trim();

  if (u === "admin" && p === "ember2026") {
    sessionStorage.setItem("ember_admin_token", "SECURE_ACTIVE_2026");
    initAdminPanel();
  } else {
    document.getElementById("loginError").textContent = "❌ Login yoki parol noto‘g‘ri! (Login: admin | Parol: ember2026)";
  }
}

function adminLogout() {
  sessionStorage.removeItem("ember_admin_token");
  location.reload();
}

function initAdminPanel() {
  const loginBox = document.getElementById("adminLoginScreen");
  const dash = document.getElementById("adminDashboard");
  if (!loginBox || !dash) return;

  if (sessionStorage.getItem("ember_admin_token") === "SECURE_ACTIVE_2026") {
    loginBox.style.display = "none";
    dash.style.display = "block";
    renderAdminFoods();
    renderAdminOrders();
  }
}

function addNewFood(e) {
  e.preventDefault();
  const newFood = {
    id: Date.now(),
    name: document.getElementById("newFoodName").value,
    img: document.getElementById("newFoodImg").value,
    desc: document.getElementById("newFoodDesc").value,
    variants: [
      { name: document.getElementById("v1Name").value, price: Number(document.getElementById("v1Price").value) },
      { name: document.getElementById("v2Name").value, price: Number(document.getElementById("v2Price").value) },
      { name: document.getElementById("v3Name").value, price: Number(document.getElementById("v3Price").value) }
    ]
  };

  foods.unshift(newFood);
  localStorage.setItem("ember_foods", JSON.stringify(foods));
  e.target.reset();
  renderAdminFoods();
  showToast("✅ Yangi taom asosiy saytga qo‘shildi!");
}

function deleteFood(id) {
  if (!confirm("Rostdan ham bu taomni saytdan o‘chirmoqchimisiz?")) return;
  foods = foods.filter(f => f.id !== id);
  localStorage.setItem("ember_foods", JSON.stringify(foods));
  renderAdminFoods();
  showToast("🗑️ Taom o‘chirildi!");
}

function renderAdminFoods() {
  const list = document.getElementById("adminFoodList");
  const count = document.getElementById("totalFoodCount");
  if (!list) return;
  count.textContent = foods.length;
  list.innerHTML = foods.map(f => `
    <div class="admin-food-item">
      <img src="${f.img}" alt="${f.name}">
      <div style="flex-grow:1;">
        <strong>${f.name}</strong><br>
        <small>${f.variants[0].price.toLocaleString()} so‘m</small>
      </div>
      <button class="btn-danger" onclick="deleteFood(${f.id})"><i class="fa-solid fa-trash"></i></button>
    </div>
  `).join("");
}

function renderAdminOrders() {
  const list = document.getElementById("adminOrdersList");
  const count = document.getElementById("orderCount");
  if (!list) return;
  const orders = JSON.parse(localStorage.getItem("ember_orders")) || [];
  count.textContent = orders.length;

  if (orders.length === 0) {
    list.innerHTML = "<p style='color:#9ca3af;'>Hozircha buyurtmalar yo‘q.</p>";
    return;
  }

  list.innerHTML = orders.map(o => `
    <div class="order-card-adm">
      <strong>👤 ${o.customer}</strong> | 📞 ${o.phone} | 🕒 ${o.time}<br>
      📍 <strong>Manzil:</strong> ${o.region}, ${o.district}, ${o.address}<br>
      🍔 <strong>Taomlar:</strong> ${o.items.map(i => `${i.name} (${i.variant}) x${i.qty}`).join(", ")}<br>
      💰 <strong>Jami:</strong> <span style="color:#ff5500;">${o.total} so‘m</span>
    </div>
  `).join("");
}

function openModal(id) {
  document.getElementById(id).style.display = "flex";
  if (id === "cartModal") renderCartModal();
  if (id === "favModal") renderFavModal();
}
function closeModal(id) { document.getElementById(id).style.display = "none"; }
function toggleMobileMenu() { document.getElementById("navLinks").classList.toggle("show"); }
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.display = "block";
  setTimeout(() => { t.style.display = "none"; }, 3000);
}

window.addEventListener("storage", () => {
  renderMenu();
  renderAdminFoods();
  renderAdminOrders();
});

document.addEventListener("DOMContentLoaded", () => {
  initSlider();
  populateRegions();
  renderMenu();
  updateBadges();
  initAdminPanel();

  const savedUser = localStorage.getItem("ember_user");
  if (savedUser && document.getElementById("authBtn")) {
    document.getElementById("authBtn").innerHTML = `<i class="fa-solid fa-user-check"></i> <span>${savedUser}</span>`;
  }
});
