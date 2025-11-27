const MAIN_LINK = "https://1wgcmt.com/v3/3245/landing-universal-timer?p=6i9o";
const WA_LINK = "https://whatsapp.com/channel/0029Vb6IjfI4tRrn1IzWzP16/298";
const DOWNLOAD_LINK = "./files/KofiGames.apk"; 
const PUSHY_APP_ID = "6927606ab7e2f9df7184b786"; 

const TIER1_FUN_COUNTRIES = [
    "Hungary", "Greece", "Ireland", "Italy", "Slovakia", "Slovenia", 
    "Poland", "Romania", "Bulgaria", "Estonia", "Finland", "Croatia", 
    "Czechia", "Latvia", "Luxembourg", "Canada", "Japan", 
    "Qatar", "United Arab Emirates", "Macau" 
];

const CRYPTO_KEY = "CRYPTO_PLACEHOLDER"; 

const CURRENCY_RATES = {
    'USD': 1, 'EUR': 0.95, 'BDT': 110, 'NGN': 750, 'KES': 145, 
    'ZAR': 18, 'GHS': 12, 'XAF': 600, 'XOF': 600, 'RWF': 1300, 
    'BRL': 5, 'RUB': 90, 'MXN': 17, 'IDR': 15000, 'PHP': 55,
    'ARS': 850, 'CLP': 900, 'COP': 3900, 'PEN': 3.7, 'INR': 83,
    'TRY': 32, 'UAH': 40, 'AZN': 1.7, 'AMD': 400, 'MDL': 18,
    'TJS': 11, 'UZS': 12500, 'PKR': 278, 'MYR': 4.7, 'THB': 36,
    'KRW': 1350, 'KGS': 89, 'EGP': 30, 'TZS': 2500, 'UGX': 3700,
    'DEFAULT': 100 
};

const RESTRICTED_ZONES = [
    "America/New_York", "America/Los_Angeles", "Europe/Madrid", "Europe/Vilnius", 
    "Europe/Berlin", "Europe/London", "Europe/Paris", "Europe/Amsterdam"
];

const DETAILED_PAYMENT_TEXTS = {
    'RUB': ['СБП (T-банк, Сбер)', 'Т-pay', 'Piastrix', 'FK Wallet', 'Sky Pay (Visa/MasterCard/МИР)', 'Telegram stars', CRYPTO_KEY],
    'AZN': ['M10', 'eManat', '(Visa/MasterCard)', 'Kapital Bank', 'SmartPay', 'Skrill', CRYPTO_KEY],
    'AMD': ['(Visa/MasterCard)', 'Skrill', CRYPTO_KEY],
    'MDL': ['(Visa/MasterCard)', 'Skrill', CRYPTO_KEY],
    'KGS': ['(Visa/MasterCard)', 'Winbalance', CRYPTO_KEY],
    'TJS': ['(Банк Эсхата, Алиф)', '(Visa/MasterCard)', CRYPTO_KEY],
    'UAH': ['(Visa/MasterCard)', 'Sky Pay', 'Piastrix', CRYPTO_KEY],
    'UZS': ['Uzcard', 'HUMO', '(Visa/MasterCard)', 'Piastrix', CRYPTO_KEY],
    'TRY': ['FixTurka', 'Papara Wallet', 'Express/Vip Havale', 'PayCO', '(Visa/MasterCard)', CRYPTO_KEY],
    
    'CAD': ['(Visa/MasterCard)', 'Neteller', 'Skrill', CRYPTO_KEY],
    'ARS': ['Mercado Pago', 'AstroPay', 'Transferencia Bancaria', 'Airtm', CRYPTO_KEY],
    'BRL': ['PIX', 'Boleto Bancário', 'Airtm', 'OpenFinance', CRYPTO_KEY],
    'CLP': ['Red Compra', 'Mach', 'AstroPay', 'Pago 46', CRYPTO_KEY],
    'COP': ['PSE', 'Nequi', 'AstroPay', 'Daviplata', '(Visa/MasterCard)', CRYPTO_KEY],
    'USD_VEN': ['Pago Movil Instant', 'Biopago', 'AstroPay', 'Airtm', CRYPTO_KEY],
    'USD_ECU': ['Bank Transfer', 'PayPhone', 'AstroPay', CRYPTO_KEY],
    'PEN': ['Yape', 'Payvalida', 'Bank Transfer', '(Visa/MasterCard)', CRYPTO_KEY],
    
    'INR': ['PAY TM', 'PhonePe', 'UPI', 'Bank Transfer', 'AstroPay', CRYPTO_KEY],
    'IDR': ['QRIS', 'Dana eWallet', 'OVO Wallet', 'Virtual Accounts', CRYPTO_KEY],
    'BDT': ['BKash', 'Nagad', CRYPTO_KEY],
    'THB': ['PromptPay', 'True money wallet', CRYPTO_KEY],
    'PHP': ['GCash', 'PayMaya', 'QRPH', 'GrabPay', 'Bank Transfer', CRYPTO_KEY],
    'PKR': ['Easypaisa', 'JazzCash', 'Nayapay', CRYPTO_KEY],
    'MYR': ['Touch n Go', 'DuitNow', 'Bank Transfer', 'GrabPay', CRYPTO_KEY],
    'KRW': ['Bank Transfer', CRYPTO_KEY],
    'VDN': ['VietQR', 'Momo QR', 'Bank Transfer', CRYPTO_KEY],

    'CIV': ['Wave', 'Orange Money', 'MTN', 'Moov Money', 'OuiPay', CRYPTO_KEY],
    'CMR': ['Orange Money', 'MTN', '(Visa/MasterCard)', CRYPTO_KEY],
    'BFA': ['Orange Money', 'Wave', 'Moov Money', CRYPTO_KEY],
    'KES': ['M-pesa', 'Airtel', CRYPTO_KEY],
    'SEN': ['Wave', 'Orange Money', 'Freemoney', CRYPTO_KEY],
    'GHS': ['MTN', 'Vodafone', 'Airtel Tigo', CRYPTO_KEY],
    'BEN': ['MTN', 'Moov Money', 'Celtiis', CRYPTO_KEY],
    'TGO': ['T-money', 'Moov Money', CRYPTO_KEY],
    'EGP': ['Vodafone Cash', 'Etisalat/Orange Cash', 'Fawry', 'CIB Smart Wallet', CRYPTO_KEY],
    'TZS': ['TigoPesa', 'Vodacom', 'Airtel', CRYPTO_KEY],
    'RWF': ['MTN', 'Airtel', '(Visa/MasterCard)', CRYPTO_KEY],
    'UGX': ['MTN', 'Airtel', CRYPTO_KEY],

    'DEFAULT': ['Visa/MasterCard', CRYPTO_KEY, 'Bank Transfer']
};

function getPaymentMethods(currencyCode, countryCode) {
    let key = currencyCode;
    if (countryCode === 'Venezuela') { key = 'USD_VEN'; }
    else if (countryCode === 'Ecuador') { key = 'USD_ECU'; }
    else if (countryCode === 'Ivory Coast') { key = 'CIV'; }
    else if (countryCode === 'Cameroon') { key = 'CMR'; }
    else if (countryCode === 'Burkina Faso') { key = 'BFA'; }
    else if (countryCode === 'Senegal') { key = 'SEN'; }
    else if (countryCode === 'Benin') { key = 'BEN'; }
    else if (countryCode === 'Togo') { key = 'TGO'; }
    else if (countryCode === 'Uganda') { key = 'UGX'; }
    else if (!DETAILED_PAYMENT_TEXTS[key]) {
        key = 'DEFAULT';
    }

    return DETAILED_PAYMENT_TEXTS[key];
}

function handlePushyRegistration(e) {
    e.preventDefault(); 
    if (typeof Pushy === 'undefined') {
        window.location.href = MAIN_LINK;
        return;
    }
    Pushy.register({ appId: PUSHY_APP_ID }).then(function (deviceToken) {
        Pushy.subscribe('news').then(() => {
            window.location.href = MAIN_LINK; 
        }).catch(function (err) {
            window.location.href = MAIN_LINK; 
        });
    }).catch(function (err) {
        window.location.href = MAIN_LINK;
    });
}

function safeInitPushy() {
    if (typeof Pushy === 'undefined') {
        let tries = 0;
        const check = setInterval(() => {
            if (typeof Pushy !== 'undefined' || tries > 10) clearInterval(check);
            tries++;
        }, 50);
    }
}

function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function formatNumber(num) { return Math.floor(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); }
function getCurrencyRate(currency) {
    return CURRENCY_RATES[currency] || CURRENCY_RATES['DEFAULT'];
}

function getCurrencyAndLocale() {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const lang = (navigator.language || navigator.userLanguage).toLowerCase();
    let currency = "USD";
    let country = "DEFAULT"; 
    let countryCode = "DEFAULT"; 
    if (tz.includes("Europe/Moscow") || tz.includes("Asia/Yekaterinburg")) { currency = "RUB"; country = "Russia"; countryCode = "RUB"; }
    else if (tz.includes("Europe/Kiev")) { currency = "UAH"; country = "Ukraine"; countryCode = "UAH"; }
    else if (tz.includes("Asia/Tashkent")) { currency = "UZS"; country = "Uzbekistan"; countryCode = "UZS"; }
    else if (tz.includes("Asia/Dushanbe")) { currency = "TJS"; country = "Tajikistan"; countryCode = "TJS"; }
    else if (tz.includes("Asia/Bishkek")) { currency = "KGS"; country = "Kyrgyzstan"; countryCode = "KGS"; }
    else if (tz.includes("Asia/Baku")) { currency = "AZN"; country = "Azerbaijan"; countryCode = "AZN"; }
    else if (tz.includes("Asia/Yerevan")) { currency = "AMD"; country = "Armenia"; countryCode = "AMD"; }
    else if (tz.includes("Europe/Chisinau")) { currency = "MDL"; country = "Moldova"; countryCode = "MDL"; }
    else if (tz.includes("America/Sao_Paulo")) { currency = "BRL"; country = "Brazil"; countryCode = "BRL"; }
    else if (tz.includes("America/Buenos_Aires")) { currency = "ARS"; country = "Argentina"; countryCode = "ARS"; }
    else if (tz.includes("America/Santiago")) { currency = "CLP"; country = "Chile"; countryCode = "CLP"; }
    else if (tz.includes("America/Bogota")) { currency = "COP"; country = "Colombia"; countryCode = "COP"; }
    else if (tz.includes("America/Caracas")) { currency = "USD"; country = "Venezuela"; countryCode = "Venezuela"; }
    else if (tz.includes("America/Guayaquil")) { currency = "USD"; country = "Ecuador"; countryCode = "Ecuador"; }
    else if (tz.includes("America/Lima")) { currency = "PEN"; country = "Peru"; countryCode = "PEN"; }
    else if (tz.includes("Asia/Dhaka")) { currency = "BDT"; country = "Bangladesh"; countryCode = "BDT"; }
    else if (tz.includes("Asia/Jakarta")) { currency = "IDR"; country = "Indonesia"; countryCode = "IDR"; }
    else if (tz.includes("Asia/Kolkata")) { currency = "INR"; country = "India"; countryCode = "INR"; }
    else if (tz.includes("Asia/Manila")) { currency = "PHP"; country = "Philippines"; countryCode = "PHP"; }
    else if (tz.includes("Asia/Bangkok")) { currency = "THB"; country = "Thailand"; countryCode = "THB"; }
    else if (tz.includes("Asia/Karachi")) { currency = "PKR"; country = "Pakistan"; countryCode = "PKR"; }
    else if (tz.includes("Asia/Kuala_Lumpur")) { currency = "MYR"; country = "Malaysia"; countryCode = "MYR"; }
    else if (tz.includes("Asia/Seoul")) { currency = "KRW"; country = "South Korea"; countryCode = "KRW"; }
    else if (tz.includes("Asia/Ho_Chi_Minh")) { currency = "VDN"; country = "Vietnam"; countryCode = "VDN"; }
    else if (tz.includes("Africa/Lagos")) { currency = "NGN"; country = "Nigeria"; countryCode = "NGN"; }
    else if (tz.includes("Africa/Nairobi")) { currency = "KES"; country = "Kenya"; countryCode = "KES"; }
    else if (tz.includes("Africa/Accra")) { currency = "GHS"; country = "Ghana"; countryCode = "GHS"; }
    else if (tz.includes("Africa/Cairo")) { currency = "EGP"; country = "Egypt"; countryCode = "EGP"; }
    else if (tz.includes("Africa/Dar_es_Salaam")) { currency = "TZS"; country = "Tanzania"; countryCode = "TZS"; }
    else if (tz.includes("Africa/Kigali")) { currency = "RWF"; country = "Rwanda"; countryCode = "RWF"; }
    else if (tz.includes("Africa/Kampala")) { currency = "UGX"; country = "Uganda"; countryCode = "UGX"; }
    else if (tz.includes("Africa/Abidjan")) { currency = "XOF"; country = "Ivory Coast"; countryCode = "Ivory Coast"; } 
    else if (tz.includes("Africa/Douala")) { currency = "XAF"; country = "Cameroon"; countryCode = "Cameroon"; }
    else if (tz.includes("Europe/Istanbul")) { currency = "TRY"; country = "Turkey"; countryCode = "TRY"; }
    else if (tz.includes("America/Toronto")) { currency = "CAD"; country = "Canada"; countryCode = "CAD"; }
    else if (tz.includes("Europe/")) { currency = "EUR"; country = "Europe"; countryCode = "EUR"; }

    let tier = 'T2_3'; 
    if (TIER1_FUN_COUNTRIES.some(c => country.includes(c)) || ['Europe', 'Canada', 'United States'].includes(country)) {
        tier = 'T1_FUN';
    }
    
    return { currency, tz, lang, tier, country, countryCode };
}

function checkRestricted(tz) {
    return RESTRICTED_ZONES.some(zone => tz.includes(zone));
}

function activateCTA() {
    const cta = document.getElementById('cta-link');
    const sticky = document.getElementById('sticky-link');
    
    cta.href = "#"; sticky.href = "#";
    cta.classList.remove('disabled'); sticky.classList.remove('disabled');
    cta.classList.remove('restricted'); 
    cta.style.animation = 'pulse 2s infinite';
    cta.style.boxShadow = '0 4px 25px rgba(46, 204, 113, 0.3)';
    
    cta.onclick = handlePushyRegistration;
    sticky.onclick = handlePushyRegistration;
}

document.addEventListener("DOMContentLoaded", function() {
    const { currency, tz, lang, tier, countryCode } = getCurrencyAndLocale();
    const isRestricted = checkRestricted(tz);
    
    localize(lang, currency, tier, countryCode); 
    setupButtons(isRestricted, lang); 

    document.getElementById('main-app').style.display = 'block';
    document.getElementById('sticky-foot').style.display = 'flex';
    startTimer(300, document.querySelector('#timer'));
    
    safeInitPushy(); 
});

function closeVpnModal() {
    document.getElementById('vpn-modal').style.display = 'none';
}

function handleVpnButtonClick(e) {
    e.preventDefault();
    closeVpnModal();
    handlePushyRegistration(new Event('click')); 
}

function setupButtons(isRestricted, userLang) {
    const cta = document.getElementById('cta-link');
    const sticky = document.getElementById('sticky-link');
    
    const langCode = userLang.startsWith('ru') ? 'ru' : (userLang.startsWith('bn') ? 'bn' : 'en');
    const txt = content[langCode]; 

    const vpnCloseBtn = document.getElementById('vpn-close-btn');
    const vpnCloseSimpleBtn = document.getElementById('vpn-close-simple-btn');
    
    vpnCloseBtn.onclick = handleVpnButtonClick;
    vpnCloseSimpleBtn.onclick = closeVpnModal; 

    document.getElementById('wa-link').href = WA_LINK;

    if (isRestricted) {
        const vpnAction = (e) => {
            e.preventDefault();
            document.getElementById('vpn-modal').style.display = 'flex';
        };
        
        cta.classList.add('restricted'); cta.classList.remove('disabled'); 
        cta.querySelector('#btn-txt').textContent = txt.vpn_cta; 
        cta.onclick = vpnAction;

        sticky.style.background = "#e74c3c"; sticky.textContent = txt.vpn_cta; 
        sticky.onclick = vpnAction; sticky.classList.remove('disabled');
    } else {
        activateCTA();
    }
}

function startDownload(e) {
    e.preventDefault(); 
    const btn = document.getElementById('dl-link');
    const txt = document.getElementById('dl-text');
    btn.classList.add('loading');
    txt.innerHTML = "⏳ ...";
    setTimeout(() => { txt.innerHTML = "✅ DONE"; window.location.href = DOWNLOAD_LINK; }, 2000);
}

const GAME_NAMES = ["Aviator", "Happy Bird", "Chicken Crash", "Tower Rush", "Aviamasters", "Ice Fishning", "PLay me"];

const content = {
    en: {
        T2_3_hero: "Play Games & <br><span>Earn Daily</span>", T2_3_sub: "Instant withdrawal.", 
        T1_FUN_hero: "Have Fun & <br><span>Enjoy your leisure</span>", T1_FUN_sub: "High-class entertainment. Safe and Secure.", 
        
        btn: "REGISTER NOW", vpn_cta: "⚠️ VPN REQUIRED",
        games: "🔥 Hot Games", reviews: "💬 Reviews", video: "Video Guide", download: "Android APK",
        vpn_title: "Access Restricted", vpn_text: "Your region is currently restricted.<br>Please enable **VPN** to continue registration and claim bonus.",
        vpn_btn: "I Enabled VPN / Start Playing", vpn_close_simple: "Close", 
        bonus_label: "Bonus ends:", promo_label: "Use Promo:",
        payment_label: "Available payment methods:", 
        responsible_text: "Play responsibly. Gambling can be addictive.", 
        crypto: "Crypto (USDT)", 
        review_names: ["John D.", "Mike T.", "Sarah L.", "Adam F.", "Chloe B.", "James G.", "Emily R."],
        review_templates: [
            "Awesome game! I love it and constantly win big amounts in {game}. Payout was instant.",
            "Classy! Got my money right away. Highly recommend {game} if you want to multiply your deposit.",
            "Best odds and fast payout to my mobile money account. I just won a huge sum playing {game}!",
            "I was skeptical, but the winnings were massive! {game} is paying today. Withdrawed everything in 5 minutes.",
            "Easy to play, easy to win. I hit the jackpot on {game} and the withdrawal was super smooth."
        ]
    },
    bn: { 
        T2_3_hero: "খেলুন এবং <span>আয় করুন</span>", T2_3_sub: "বিকাশ/নগদ এর মাধ্যমে দ্রুত টাকা তুলুন।", 
        T1_FUN_hero: "<span>সময় কাটান</span> এবং মজা করুন", T1_FUN_sub: "উচ্চ-শ্রেণীর বিনোদন। নিরাপদ এবং সুরক্ষিত।",
        
        btn: "এখনই নিবন্ধন করুন", vpn_cta: "⚠️ ভিপিএন আবশ্যক",
        games: "🔥 জনপ্রিয় গেমস", reviews: "💬 প্লেয়ার রিভিউ", video: "ভিডিও গাইড", download: "ডাউনলোড অ্যাপ",
        vpn_title: "অ্যাক্সেস সীমিত", vpn_text: "আপনার অঞ্চল বর্তমানে সীমিত। নিবন্ধন চালিয়ে যেতে এবং বোনাস দাবি করতে **VPN** সক্ষম করুন।",
        vpn_btn: "ভিপিএন চালু করেছি / খেলা শুরু করুন", vpn_close_simple: "বন্ধ করুন", 
        bonus_label: "বোনাস শেষ:", promo_label: "প্রোমো ব্যবহার:",
        payment_label: "উপলব্ধ পেমেন্ট পদ্ধতি:", 
        responsible_text: "দায়িত্বের সাথে খেলুন। জুয়া আসক্তি হতে পারে।", 
        crypto: "ক্রিপ্টোকারেন্সি (USDT)", 
        review_names: ["Rahim K.", "Sumon A.", "Fatima B.", "Omar H.", "Priya C.", "Akash V."],
        review_templates: [
            "খুব ভালো অ্যাপ! আমি এটি পছন্দ করি এবং {game}-এ ক্রমাগত বড় অঙ্কের টাকা জিতছি। পেমেন্ট তাৎক্ষণিক ছিল।",
            "দারুণ! আমি সঙ্গে সঙ্গে আমার টাকা পেয়েছি। আপনি যদি আপনার ডিপোজিট বাড়াতে চান তবে আমি {game} এর সুপারিশ করছি।",
            "সেরা অডস এবং মোবাইল মানিতে দ্রুত পেমেন্ট। আমি এইমাত্র {game} খেলে একটি বিশাল অঙ্ক জিতেছি!",
            "আমি সন্দিহান ছিলাম, কিন্তু জয়গুলো ছিল বিশাল! আজ {game} পেমেন্ট দিচ্ছে। ৫ মিনিটের মধ্যে সব তুলে নিলাম।",
            "খেলা সহজ, জেতা সহজ। আমি {game}-এ জ্যাকপট পেয়েছি এবং টাকা তোলা খুব মসৃণ ছিল।"
        ]
    },
    ru: {
        T2_3_hero: "Играй и <span>Зарабатывай</span>", T2_3_sub: "Моментальный вывод.",
        T1_FUN_hero: "Отдохни и <span>получи удовольствие</span>", T1_FUN_sub: "Премиальный досуг. Безопасно и надежно.",
        
        btn: "РЕГИСТРАЦИЯ", vpn_cta: "⚠️ ТРЕБУЕТСЯ VPN",
        games: "🔥 Топ Игры", reviews: "💬 Отзывы", video: "Видео Гайд", download: "Скачать APK",
        vpn_title: "Доступ ограничен", vpn_text: "Ваш регион ограничен. Включите **VPN**, чтобы продолжить регистрацию и получить бонус.",
        vpn_btn: "Я включил VPN / Начать играть", vpn_close_simple: "Закрыть", 
        bonus_label: "Бонус истекает:", promo_label: "Промокод:",
        payment_label: "Доступные платежные системы:", 
        responsible_text: "Играйте ответственно. Игра может вызывать зависимость.", 
        crypto: "Криптовалюта (USDT)", 
        review_names: ["Иван С.", "Ольга К.", "Дмитрий В.", "Елена П.", "Сергей М.", "Анна Н.", "Михаил В."],
        review_templates: [
            "Отличная игра! Люблю ее, постоянно выигрываю крупные суммы в {game}. Вывод моментальный.",
            "Класс! Деньги пришли сразу. Очень советую {game}, если хотите умножить свой депозит.",
            "Лучшие коэффициенты и быстрый вывод на карту. Я только что выиграл огромную сумму в {game}!",
            "Я сомневался, но выигрыши оказались просто огромными! {game} сегодня дает. Вывел все за 5 минут.",
            "Легко играть, легко выигрывать. Сорвал куш на {game}, и вывод прошел супер гладко."
        ]
    }
};

function localize(langCode, currencyCode, tier, countryCode) {
    let lang = langCode.startsWith('ru') ? 'ru' : (langCode.startsWith('bn') ? 'bn' : 'en');
    const txt = content[lang];
    const rate = getCurrencyRate(currencyCode);

    const heroKey = (tier === 'T1_FUN') ? 'T1_FUN_hero' : 'T2_3_hero';
    const subKey = (tier === 'T1_FUN') ? 'T1_FUN_sub' : 'T2_3_sub';

    document.getElementById('hero-title').innerHTML = txt[heroKey];
    document.getElementById('hero-sub').textContent = txt[subKey];

    document.getElementById('vpn-title').textContent = txt.vpn_title;
    document.getElementById('vpn-text').innerHTML = txt.vpn_text; 
    document.getElementById('vpn-close-btn').textContent = txt.vpn_btn; 
    document.getElementById('vpn-close-simple-btn').textContent = txt.vpn_close_simple; 
    
    document.getElementById('timer-label').textContent = txt.bonus_label;
    document.getElementById('promo-label').textContent = txt.promo_label;

    if (!document.getElementById('cta-link').classList.contains('restricted')) {
         document.getElementById('btn-txt').textContent = txt.btn;
         document.getElementById('sticky-link').textContent = "🔥 " + txt.btn;
    }
    document.getElementById('games-title').textContent = txt.games;
    document.getElementById('reviews-title').textContent = txt.reviews;
    document.getElementById('vid-txt').textContent = txt.video;
    document.getElementById('dl-text').textContent = txt.download;

    document.getElementById('payment-text').textContent = txt.payment_label;
    document.getElementById('responsible-text').textContent = txt.responsible_text;

    const paymentMethodsContainer = document.getElementById('payment-methods-list');
    const paymentMethodsArray = getPaymentMethods(currencyCode, countryCode); 
    
    const translatedPayments = paymentMethodsArray.map(item => {
        return item === CRYPTO_KEY ? txt.crypto : item;
    }).join('; ');
    
    paymentMethodsContainer.textContent = translatedPayments;

    const track = document.getElementById('wins-track');
    track.innerHTML = '';
    for(let i=0; i<15; i++) {
        const usdAmount = getRandomInt(500, 8000); 
        const localAmount = usdAmount * rate;
        const randomGame = GAME_NAMES[getRandomInt(0, GAME_NAMES.length - 1)];
        
        track.innerHTML += `
            <span class="win-item">🎉 <span class="win-name">User***</span> 
            <span class="win-amount">+${formatNumber(localAmount)} ${currencyCode}</span> <span class="win-game">${randomGame}</span></span>
        `;
    }

    let namesSource = txt.review_names; 
    if (currencyCode === 'RUB' && content['ru']) {
        namesSource = content['ru'].review_names; 
    }

    const availableNames = [...namesSource]; 
    const availableTemplates = [...txt.review_templates];
    
    for (let i = 1; i <= 3; i++) {
        const usdAmount = getRandomInt(1000, 20000); 
        const localAmount = usdAmount * rate;
        
        const nameIndex = getRandomInt(0, availableNames.length - 1);
        const templateIndex = getRandomInt(0, availableTemplates.length - 1);
        
        const randomName = availableNames.splice(nameIndex, 1)[0];
        const randomTemplate = availableTemplates.splice(templateIndex, 1)[0];
        const randomGame = GAME_NAMES[getRandomInt(0, GAME_NAMES.length - 1)];

        const reviewText = randomTemplate.replace('{game}', `<b>${randomGame}</b>`);

        document.getElementById(`rev-name-${i}`).textContent = randomName;
        document.getElementById(`rev-amt-${i}`).textContent = `+ ${formatNumber(localAmount)} ${currencyCode}`;
        document.getElementById(`rev-txt-${i}`).innerHTML = `"${reviewText}"`;
    }
}

function startTimer(duration, display) {
    let timer = duration, m, s;
    setInterval(() => {
        m = parseInt(timer / 60, 10); s = parseInt(timer % 60, 10);
        display.textContent = (m<10?"0"+m:m) + ":" + (s<10?"0"+s:s);
        if (--timer < 0) timer = duration;
    }, 1000);
}