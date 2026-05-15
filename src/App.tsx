import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Headset,
  Languages,
  Phone,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Users,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

const VIETNAM_HOTLINE = '0584 556 556';
const VIETNAM_ZALO_URL = 'https://zalo.me/0584556556';
const CAMBODIA_CONTACT = '0907 215 521';
const CAMBODIA_ZALO_URL = 'https://zalo.me/0907215521';
const TIKTOK_URL = 'https://www.tiktok.com/@natusclean';

const slideImages = [
  '/slide/z7780460018725_005_5af3065ff3a6014d1e646d8eaed5ac16.jpg',
  '/slide/z7780460018725_006_37ab2270853394b8d9e8c1be646d8434.jpg',
  '/slide/z7780460018725_007_500a6713fe138b3b6681e4d9a3508dc0.jpg',
  '/slide/z7780460018725_009_11c3a7c18746e827d86bd27e79c0d7a1.jpg',
  '/slide/z7780460018725_010_34d4aab8ffa89d3b29a4216527879bd3.jpg',
];

const realImages = [
  '/hinh-anh-thuc-te/thuc te 1.jpg',
  '/hinh-anh-thuc-te/thuc te 2.jpg',
  '/hinh-anh-thuc-te/thuc te 3.jpg',
];

const copy = {
  vi: {
    topBanner: <>🇻🇳 Thị trường Việt Nam: Hotline {VIETNAM_HOTLINE} · 🇰🇭 Thị trường Campuchia: Telegram/Zalo {CAMBODIA_CONTACT}</>,
    navProduct: 'Sản phẩm thực tế',
    navConsult: 'Liên hệ tư vấn',
    navOrder: 'Đặt Hàng Ngay',
    languageLabel: 'Chọn ngôn ngữ',
    heroBadge: 'Giải pháp làm sạch hoàn hảo',
    heroTitle: 'Siêu Tẩy Đa Năng',
    todayDeal: '🔥 Ưu đãi hôm nay',
    salePrice: 'Giá siêu sale',
    sold: 'Đã bán:',
    heroDescription: 'Sạch nhanh vượt trội, đánh bay mọi vết bẩn cứng đầu trên bếp, nội thất, ghế ô tô với công nghệ Ultra Deep Power 10X.',
    vietnamMarket: 'Thị trường Việt Nam',
    cambodiaMarket: 'Thị trường Campuchia',
    buyNow: 'Mua Ngay Bây Giờ',
    productVideo: 'Xem Video Sản Phẩm',
    wholesaleZalo: 'Zalo Sỉ',
    official: 'Hàng chính hãng',
    fastConsult: 'Tư vấn nhanh',
    ultraClean: '10X Sạch Bóng',
    productDetailTitle: 'THÔNG TIN CHI TIẾT',
    productDetailSubtitle: 'Natus Clean là dung dịch tẩy rửa đa năng dùng cho nhà bếp, nội thất, ghế da, bề mặt xe hơi và nhiều khu vực thường xuyên bám bẩn.',
    productDetailPoints: [
      'Công nghệ Ultra Deep Power 10X giúp thẩm thấu sâu vào mảng bám.',
      'Làm sạch dầu mỡ, vết ố, bụi bẩn và cặn lâu ngày nhanh chóng.',
      'Dễ sử dụng: xịt trực tiếp, chờ vài phút rồi lau sạch bằng khăn.',
      'Phù hợp cho gia đình, cửa hàng chăm sóc xe, đại lý và nhà phân phối.',
    ],
    galleryTitle: 'HÌNH ẢNH SẢN PHẨM',
    gallerySubtitle: '',
    previousSlide: 'Ảnh trước',
    nextSlide: 'Ảnh tiếp theo',
    partnerTitle: 'Tìm Đối Tác Phân Phối Toàn Quốc',
    partnerSubtitle: 'Đại lý cấp 1, cấp 2, đại lý độc quyền khu vực với chính sách cực tốt.',
    partnerCta: 'Đăng Ký Khách Sỉ Zalo',
    featuresTitle: 'Sức Mạnh Từ Công Nghệ 10X',
    featuresSubtitle: <>Chai xịt Natus Clean giải quyết toàn diện <span className="block mt-1 text-slate-600 font-medium">mọi vấn đề làm sạch xung quanh bạn.</span></>,
    featureKitchenTitle: 'Nhà Bếp Siêu Sạch',
    featureKitchenText: 'Đánh bay mảng bám dầu mỡ lâu ngày trên bếp từ, máy hút mùi, xoong nồi chảo chỉ trong tích tắc.',
    featureSurfaceTitle: 'An Toàn Bề Mặt',
    featureSurfaceText: 'Hiệu quả và làm mới trên ghế da ô tô, sofa, phụ kiện đồ mộc, nội thất gia đình mà không làm hỏng chất liệu.',
    featurePowerTitle: '10X Ultra Deep Power',
    featurePowerText: 'Công thức thẩm thấu sâu, làm sạch cực mạnh gấp 10 lần các loại dung dịch tẩy rửa thông thường.',
    reviewsTitle: 'Khách Hàng Nói Gì Về Natus Clean',
    reviewScore: '4.9/5 (10.000+ Đánh giá)',
    reviews: [
      {
        initial: 'H',
        name: 'Hoàng Anh',
        text: '"Rất bất ngờ với hiệu quả. Mình xịt thử lên bếp gas bám đầy dầu mỡ để 5 phút lau lại sạch bong. Đáng đồng tiền!"',
      },
      {
        initial: 'L',
        name: 'Lê Thu',
        text: '"Ghế da ô tô nhà mình bị vết ố bẩn lau mãi không ra, mua thử Natus Clean về lau phát bay luôn. Dung dịch không mùi hắc, rất ưng."',
      },
      {
        initial: 'T',
        name: 'Tuấn Phạm',
        text: '"Sản phẩm chuẩn 10X. Nhập thùng về bán lẻ khách khen liên tục. Shop gói hàng kĩ, giao nhanh. Ủng hộ shop dài."',
      },
    ],
    orderTitle: 'Đặt hàng ngay',
    orderIntro: 'Nhập thông tin để mua lẻ hoặc đăng ký đại lý. Chúng tôi sẽ gọi lại chốt đơn trong 5 phút!',
    deliveryTitle: 'Giao hàng toàn quốc',
    deliveryText: 'Đóng gói kỹ, hỗ trợ giao đến nhiều tỉnh thành',
    genuineTitle: 'Chính hãng 100%',
    genuineText: 'Kiểm tra tem nhãn trước khi nhận',
    supportTitle: 'Hỗ trợ 24/7',
    nameLabel: 'Họ và tên *',
    namePlaceholder: 'Ví dụ: Nguyễn Văn A',
    phoneLabel: 'Số điện thoại *',
    phonePlaceholder: 'Ví dụ: 0987...',
    addressLabel: 'Địa chỉ giao hàng đầy đủ *',
    addressPlaceholder: 'Số nhà, Quận/Huyện, Tỉnh/Thành phố...',
    quantityLabel: 'Chọn số lượng mua sỉ/lẻ *',
    quantityOptions: {
      one: '1 chai lẻ - 86.000đ',
      two: '2 chai lẻ - 172.000đ',
      three: 'Combo 3 chai - 258.000đ',
      carton: 'Mua sỉ từ 1 thùng (25 chai) - Báo giá Zalo',
      tenCartons: 'Mua từ 10 thùng (Đại lý cấp 1) - Báo giá Zalo',
      distributor: 'Đăng ký làm Nhà Phân Phối Tỉnh - Báo giá Zalo',
    },
    noteLabel: 'Ghi chú thêm (Nếu có)',
    notePlaceholder: 'Thời gian nhận hàng ưng ý...',
    submitting: 'Đang Gửi Dữ Liệu...',
    submit: 'Xác Nhận Đặt Hàng',
    footerText: 'Sản phẩm Siêu tẩy đa năng với công nghệ 10X Power Ultra Deep. Sạch bong sáng bóng mọi ngóc ngách, bảo vệ bề mặt hoàn hảo.',
    contactInfo: 'Thông tin liên hệ',
    social: 'Mạng Xã Hội',
    vietnamHotline: 'Hotline Việt Nam',
    cambodiaContact: 'Telegram/Zalo Campuchia',
    wholesaleText: 'Cung cấp số lượng lớn sỉ, CTV, đại lý chiết khấu cao nhất (Đại lý cấp 1, cấp 2, Nhà phân phối).',
    connectZalo: 'Kết nối Telegram/Zalo',
    footerTagline: 'Công nghệ làm sạch Ultra Deep 10X',
    floatingQuote: '🇰🇭 Báo giá',
    popupTitle: 'Ưu Đãi Đặc Biệt!',
    popupSubtitle: 'Dành riêng cho bạn hôm nay',
    popupBody: <>Siêu Tẩy Đa Năng <span className="font-bold text-[#182871]">Natus Clean</span> đánh bay mọi mảng bám cứng đầu nhất chỉ trong 5 phút. Sạch bong sáng bóng!</>,
    popupCta: 'Nhận ưu đãi & Đặt hàng',
    fallbackAlert: 'Hệ thống bị gián đoạn, vui lòng liên hệ Zalo trực tiếp.',
    successAlert: (name: string) => `Đăng ký thành công! Đội ngũ Natus Clean sẽ sớm liên hệ xử lý đơn hàng cho ${name}.`,
    localAlert: (name: string) => `Cảm ơn ${name}! Đơn hàng của bạn đã được ghi nhận.`,
    wholesaleConfirm: `Vui lòng liên hệ trực tiếp qua Zalo ${VIETNAM_HOTLINE} để nhận báo giá Sỉ/Đại lý/Nhà Phân Phối tốt nhất. Bấm OK để chuyển tới ứng dụng Zalo!`,
    videoTitle: 'Video Thực Tế',
    videoSubtitle: 'Xem Natus Clean đánh bay vết bẩn trong các video ngắn thực tế trên TikTok.',
  },
  en: {
    topBanner: <>🇻🇳 Vietnam market: Hotline {VIETNAM_HOTLINE} · 🇰🇭 Cambodia market: Telegram/Zalo {CAMBODIA_CONTACT}</>,
    navProduct: 'Product Photos',
    navConsult: 'Get Advice',
    navOrder: 'Order Now',
    languageLabel: 'Choose language',
    heroBadge: 'Complete cleaning solution',
    heroTitle: 'Multi-Purpose Cleaner',
    todayDeal: '🔥 Today only',
    salePrice: 'Special price',
    sold: 'Sold:',
    heroDescription: 'Fast cleaning power for tough stains on kitchens, interiors, and car seats with Ultra Deep Power 10X technology.',
    vietnamMarket: 'Vietnam Market',
    cambodiaMarket: 'Cambodia Market',
    buyNow: 'Buy Now',
    productVideo: 'Watch Product Video',
    wholesaleZalo: 'Wholesale Zalo',
    official: 'Authentic product',
    fastConsult: 'Fast consultation',
    ultraClean: '10X Deep Clean',
    productDetailTitle: 'PRODUCT DETAILS',
    productDetailSubtitle: 'Natus Clean is a multi-purpose cleaning solution for kitchens, interiors, leather seats, car surfaces, and everyday areas with stubborn buildup.',
    productDetailPoints: [
      'Ultra Deep Power 10X technology penetrates deep into stains and buildup.',
      'Cleans grease, stains, dust, and old residue quickly.',
      'Easy to use: spray directly, wait a few minutes, then wipe clean.',
      'Suitable for homes, car care shops, agents, and distributors.',
    ],
    galleryTitle: 'PRODUCT IMAGES',
    gallerySubtitle: '',
    previousSlide: 'Previous image',
    nextSlide: 'Next image',
    partnerTitle: 'Nationwide Distribution Partners Wanted',
    partnerSubtitle: 'Tier 1, tier 2, and regional exclusive agents with strong partner policies.',
    partnerCta: 'Register Wholesale via Zalo',
    featuresTitle: 'Powered By 10X Technology',
    featuresSubtitle: <>Natus Clean spray handles everyday cleaning problems <span className="block mt-1 text-slate-600 font-medium">around your home, car, and workspace.</span></>,
    featureKitchenTitle: 'Sparkling Kitchens',
    featureKitchenText: 'Cuts through old grease on induction stoves, range hoods, pots, pans, and kitchen surfaces in minutes.',
    featureSurfaceTitle: 'Surface Friendly',
    featureSurfaceText: 'Refreshes leather car seats, sofas, wood accessories, and home interiors without damaging materials.',
    featurePowerTitle: '10X Ultra Deep Power',
    featurePowerText: 'A deep-penetrating formula designed to clean far stronger than ordinary cleaning liquids.',
    reviewsTitle: 'What Customers Say About Natus Clean',
    reviewScore: '4.9/5 (10,000+ Reviews)',
    reviews: [
      {
        initial: 'H',
        name: 'Hoang Anh',
        text: '"I was surprised by the result. I sprayed it on a greasy gas stove, waited 5 minutes, and wiped it clean. Worth the money!"',
      },
      {
        initial: 'L',
        name: 'Le Thu',
        text: '"My car leather seats had stubborn stains. Natus Clean removed them quickly, and the liquid does not smell harsh."',
      },
      {
        initial: 'T',
        name: 'Tuan Pham',
        text: '"True 10X performance. I bought cartons for resale and customers keep praising it. Careful packaging and fast delivery."',
      },
    ],
    orderTitle: 'Order Now',
    orderIntro: 'Enter your details for retail orders or agency registration. Our team will call back within 5 minutes!',
    deliveryTitle: 'Nationwide delivery',
    deliveryText: 'Careful packaging with support for many provinces and cities',
    genuineTitle: '100% authentic',
    genuineText: 'Check label and seal before receiving',
    supportTitle: '24/7 support',
    nameLabel: 'Full name *',
    namePlaceholder: 'Example: Nguyen Van A',
    phoneLabel: 'Phone number *',
    phonePlaceholder: 'Example: 0987...',
    addressLabel: 'Full delivery address *',
    addressPlaceholder: 'House number, district, province/city...',
    quantityLabel: 'Choose retail/wholesale quantity *',
    quantityOptions: {
      one: '1 bottle retail - 86,000 VND',
      two: '2 bottles retail - 172,000 VND',
      three: '3-bottle combo - 258,000 VND',
      carton: 'Wholesale from 1 carton (25 bottles) - Zalo quote',
      tenCartons: 'From 10 cartons (Tier 1 agent) - Zalo quote',
      distributor: 'Register as provincial distributor - Zalo quote',
    },
    noteLabel: 'Additional notes (Optional)',
    notePlaceholder: 'Preferred delivery time...',
    submitting: 'Sending...',
    submit: 'Confirm Order',
    footerText: 'A multi-purpose cleaner powered by 10X Ultra Deep technology. Brilliant cleaning for every corner while protecting surfaces.',
    contactInfo: 'Contact Information',
    social: 'Social',
    vietnamHotline: 'Vietnam Hotline',
    cambodiaContact: 'Cambodia Telegram/Zalo',
    wholesaleText: 'Wholesale supply for collaborators, agents, and distributors with competitive discount policies.',
    connectZalo: 'Connect Telegram/Zalo',
    footerTagline: 'Ultra Deep 10X cleaning technology',
    floatingQuote: '🇰🇭 Quote',
    popupTitle: 'Special Offer!',
    popupSubtitle: 'Available for you today',
    popupBody: <>The <span className="font-bold text-[#182871]">Natus Clean</span> multi-purpose cleaner removes stubborn buildup in just 5 minutes. Bright, clean, and polished!</>,
    popupCta: 'Claim Offer & Order',
    fallbackAlert: 'The system is temporarily interrupted. Please contact us directly via Zalo.',
    successAlert: (name: string) => `Registration successful! The Natus Clean team will contact ${name} soon to process the order.`,
    localAlert: (name: string) => `Thank you, ${name}! Your order has been recorded.`,
    wholesaleConfirm: `Please contact Zalo ${VIETNAM_HOTLINE} directly for the best wholesale/agency/distributor quote. Press OK to open Zalo!`,
    videoTitle: 'Real Demonstrations',
    videoSubtitle: 'Watch Natus Clean in action through these short TikTok demonstrations.',
  },
};

type Language = keyof typeof copy;

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    quantity: '1',
    note: '',
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [language, setLanguage] = useState<Language>('vi');
  const [slideIndex, setSlideIndex] = useState(0);
  const t = copy[language];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((current) => (current + 1) % slideImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const goToPreviousSlide = () => {
    setSlideIndex((current) => (current - 1 + slideImages.length) % slideImages.length);
  };

  const goToNextSlide = () => {
    setSlideIndex((current) => (current + 1) % slideImages.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const GOOGLE_APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxj85P_dPR0uvkxh8s1iHrdfVp0pkxBIe34fhdOTOEqF399zWsdKQhzGOPl7itwn5T8/exec';

    if (GOOGLE_APP_SCRIPT_URL === 'THAY_DUONG_LINK_Google_Script_CUA_BAN_VAO_DAY' || GOOGLE_APP_SCRIPT_URL === '') {
      alert(t.localAlert(formData.name));
      setFormData({ name: '', phone: '', address: '', quantity: '1', note: '' });
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = new URLSearchParams();
      payload.append('name', formData.name);
      payload.append('phone', formData.phone);
      payload.append('address', formData.address);
      payload.append('quantity', formData.quantity);
      payload.append('note', formData.note);

      await fetch(`${GOOGLE_APP_SCRIPT_URL}?${payload.toString()}`, {
        method: 'GET',
        mode: 'no-cors',
      });

      alert(t.successAlert(formData.name));
      setFormData({ name: '', phone: '', address: '', quantity: '1', note: '' });
    } catch (error) {
      alert(t.fallbackAlert);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'quantity' && ['thung_1', 'thung_10', 'ctv'].includes(value)) {
      if (window.confirm(t.wholesaleConfirm)) {
        window.open(VIETNAM_ZALO_URL, '_blank');
      }
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      <div className="bg-[#182871] text-white py-2 px-4 text-center text-sm font-medium">
        {t.topBanner}
      </div>

      <nav className="sticky top-0 z-50 bg-[#182871]/95 backdrop-blur-md border-b border-[#253994]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center h-full py-2 cursor-pointer">
              <div className="h-full flex items-center gap-2">
                <img src="/logo_nutus.png" alt="Natus Clean Logo" className="h-10 w-auto object-contain rounded-md" />
                <span className="text-2xl font-black tracking-tight text-white leading-none whitespace-nowrap">
                  Natus<span className="text-cyan-400">CLEAN</span>
                </span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#hinh-anh-thuc-te" className="text-sm font-semibold text-slate-200 hover:text-cyan-400">{t.navProduct}</a>
              <a href={VIETNAM_ZALO_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-200 hover:text-cyan-400 flex items-center gap-1">
                <Headset className="w-4 h-4" /> {t.navConsult}
              </a>
              <LanguageToggle language={language} setLanguage={setLanguage} label={t.languageLabel} showIcon />
              <a
                href="#order"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-bold rounded-full text-[#182871] bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              >
                {t.navOrder}
              </a>
            </div>
            <div className="md:hidden">
              <LanguageToggle language={language} setLanguage={setLanguage} label={t.languageLabel} />
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-16 pb-24 overflow-hidden bg-[#182871]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[100px]"></div>
          <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[80px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-bold text-cyan-900 bg-cyan-100 mb-6 border border-cyan-200 shadow-sm shadow-cyan-500/20">
                <Sparkles className="w-4 h-4 mr-2" />
                {t.heroBadge}
              </div>
              <h1 className="text-4xl tracking-tight font-black text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl uppercase">
                <span className="block mb-2 text-cyan-400">{t.heroTitle}</span>
                <span className="block italic text-6xl md:text-7xl">Natus</span>
              </h1>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 inline-flex flex-col items-center justify-center min-w-[200px] relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full whitespace-nowrap animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                    {t.todayDeal}
                  </div>
                  <span className="text-slate-300 text-sm font-semibold uppercase tracking-wider mb-1 mt-1">{t.salePrice}</span>
                  <div className="text-3xl font-black text-cyan-400 flex items-baseline gap-1">
                    86.000<span className="text-xl">đ</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-slate-400 text-xs line-through">150.000đ</span>
                    <span className="text-red-400 text-xs font-bold bg-red-500/10 px-1.5 py-0.5 rounded">-43%</span>
                  </div>
                </div>

                <div className="bg-[#182871]/60 border border-cyan-500/30 px-4 py-2.5 rounded-xl text-sm font-bold text-white flex items-center shadow-inner">
                  <Users className="w-5 h-5 text-cyan-400 mr-2 drop-shadow-md" />
                  {t.sold} <span className="text-red-400 ml-1.5 text-base">2,850+</span>
                </div>
              </div>

              <p className="text-pretty mt-6 text-base text-slate-300 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0 font-medium">
                {t.heroDescription}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:max-w-xl sm:mx-auto lg:mx-0">
                <a
                  href={`tel:${VIETNAM_HOTLINE.replaceAll(' ', '')}`}
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 text-left text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  <span className="text-3xl leading-none" aria-hidden="true">🇻🇳</span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-cyan-200">{t.vietnamMarket}</span>
                    <span className="block text-base font-black sm:text-lg">{VIETNAM_HOTLINE}</span>
                  </span>
                </a>
                <a
                  href={CAMBODIA_ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 text-left text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  <span className="text-3xl leading-none" aria-hidden="true">🇰🇭</span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-cyan-200">{t.cambodiaMarket}</span>
                    <span className="block text-base font-black sm:text-lg">Telegram/Zalo {CAMBODIA_CONTACT}</span>
                  </span>
                </a>
              </div>

              <div className="mt-8 sm:max-w-xl sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
                <a
                  href="#order"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-[#182871] bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all hover:scale-105"
                >
                  {t.buyNow}
                </a>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-300 text-base font-bold rounded-full text-cyan-100 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  {t.productVideo}
                </a>
                <a
                  href={VIETNAM_ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-base font-bold rounded-full text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  <MessageCircleIcon className="w-5 h-5 mr-2" />
                  {t.wholesaleZalo}: {VIETNAM_HOTLINE}
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm font-medium text-cyan-100">
                <span className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" /> {t.official}</span>
                <span className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" /> {t.fastConsult}</span>
              </div>
            </div>

            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center lg:justify-end">
              <div className="relative mx-auto w-full max-w-[500px] overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/10 group bg-[#101c54] flex flex-col items-center justify-center">
                <img
                  src="/Gemini_Generated_Image_8l10fw8l10fw8l10-clean.png"
                  alt="Natus Clean"
                  className="w-full h-auto max-h-[75vh] object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1133] via-transparent to-transparent opacity-90 pointer-events-none"></div>
                <div className="absolute bottom-6 left-0 w-full px-6 flex justify-between items-end pointer-events-none">
                  <div>
                    <div className="bg-[#182871] text-white px-3 py-1 rounded-sm text-xs font-black uppercase inline-block mb-2 tracking-widest shadow-lg">Ultra Deep Power</div>
                    <div className="text-3xl sm:text-4xl font-black text-white italic drop-shadow-lg leading-none">{t.ultraClean}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="chi-tiet-san-pham" className="py-20 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ProductSlider
              images={slideImages}
              slideIndex={slideIndex}
              setSlideIndex={setSlideIndex}
              onPrevious={goToPreviousSlide}
              onNext={goToNextSlide}
              title={t.productDetailTitle}
              previousLabel={t.previousSlide}
              nextLabel={t.nextSlide}
            />

            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-10">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-black text-[#182871] bg-cyan-100 mb-5 uppercase">
                <Sparkles className="w-4 h-4 mr-2" />
                Ultra Deep Power 10X
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#182871] uppercase tracking-tight leading-tight">
                {t.productDetailTitle}
              </h2>
              <p className="text-pretty mt-5 text-lg text-slate-600 font-medium leading-relaxed">
                {t.productDetailSubtitle}
              </p>
              <div className="mt-7 space-y-4">
                {t.productDetailPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-cyan-500" />
                    <span className="text-pretty font-medium leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-[#182871] text-sm font-black rounded-full text-[#182871] bg-white hover:bg-[#182871] hover:text-white transition-all"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  {t.productVideo}
                </a>
                <a
                  href="#order"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-black rounded-full text-[#182871] bg-cyan-400 hover:bg-cyan-300 transition-all"
                >
                  {t.navOrder}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hinh-anh-thuc-te" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182871] uppercase tracking-tight text-balance leading-snug">
              {t.galleryTitle}
            </h2>
            {t.gallerySubtitle && (
              <p className="text-pretty mt-4 text-xl text-slate-600 font-medium max-w-3xl mx-auto">
                {t.gallerySubtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realImages.map((image, index) => (
              <div key={image} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl">
                <img
                  src={image}
                  alt={`${t.galleryTitle} ${index + 1}`}
                  className="h-full min-h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tiktok-videos" className="py-20 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-black text-white bg-black mb-4 uppercase">
              <PlayCircle className="w-4 h-4 mr-2 text-cyan-400" />
              TikTok Feed
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182871] uppercase tracking-tight text-balance leading-snug">
              {t.videoTitle}
            </h2>
            <p className="text-pretty mt-4 text-xl text-slate-600 font-medium max-w-3xl mx-auto">
              {t.videoSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              '7639629764872899847',
              '7638881245300002055',
              '7637687547455360263',
              '7637323156809649416'
            ].map((id) => (
              <div key={id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex justify-center">
                <blockquote 
                  className="tiktok-embed" 
                  cite={`https://www.tiktok.com/@natusclean/video/${id}`} 
                  data-video-id={id} 
                  style={{ maxWidth: '605px', minWidth: '325px' }}
                >
                  <section>
                    <a target="_blank" title="@natusclean" href={`https://www.tiktok.com/@natusclean/video/${id}?refer=embed`}>@natusclean</a>
                  </section>
                </blockquote>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-black text-base font-black rounded-full text-black bg-white hover:bg-black hover:text-white transition-all shadow-lg"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Xem thêm trên TikTok
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cyan-500 py-12 border-y border-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#182871] uppercase tracking-tight text-balance leading-snug">{t.partnerTitle}</h3>
              <p className="text-pretty text-[#182871] font-medium mt-1">{t.partnerSubtitle}</p>
            </div>
            <a
              href={VIETNAM_ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#182871] text-base font-black rounded-full text-[#182871] bg-transparent hover:bg-[#182871] hover:text-cyan-400 shadow-lg transition-all whitespace-nowrap uppercase"
            >
              <Users className="w-5 h-5 mr-3" />
              {t.partnerCta}
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182871] uppercase tracking-tight text-balance leading-snug">
              {t.featuresTitle}
            </h2>
            <p className="text-pretty mt-4 max-w-2xl text-xl text-slate-500 mx-auto leading-relaxed">
              {t.featuresSubtitle}
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <FeatureCard icon={<Sparkles className="h-10 w-10" />} title={t.featureKitchenTitle} text={t.featureKitchenText} />
              <FeatureCard icon={<ShieldCheck className="h-10 w-10" />} title={t.featureSurfaceTitle} text={t.featureSurfaceText} />
              <FeatureCard icon={<Star className="h-10 w-10" />} title={t.featurePowerTitle} text={t.featurePowerText} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#182871] sm:text-4xl uppercase tracking-tight">
              {t.reviewsTitle}
            </h2>
            <div className="flex justify-center items-center mt-4 space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-lg font-bold text-slate-700">{t.reviewScore}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.reviews.map((review) => (
              <div key={review.name} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-[#182871] font-bold text-xl mr-4">{review.initial}</div>
                  <div>
                    <h4 className="font-bold text-slate-800">{review.name}</h4>
                    <div className="flex text-yellow-400 text-sm">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-pretty text-slate-600 flex-grow italic">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-24 bg-[#182871] relative">
        <div className="absolute inset-0 bg-blue-900/40 pattern-grid-lg"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-5/12 p-8 md:p-12 bg-slate-900 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#182871] to-slate-900 opacity-90 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-2 uppercase text-cyan-400">{t.orderTitle}</h3>
                  <p className="text-pretty text-slate-300 mb-8 font-medium">{t.orderIntro}</p>
                  <div className="space-y-6">
                    <InfoRow icon={<Truck className="w-5 h-5 text-cyan-400" />} title={t.deliveryTitle} text={t.deliveryText} />
                    <InfoRow icon={<ShieldCheck className="w-5 h-5 text-cyan-400" />} title={t.genuineTitle} text={t.genuineText} />
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <Phone className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="font-bold text-white">{t.supportTitle}</div>
                        <a href={VIETNAM_ZALO_URL} className="text-sm text-cyan-200 hover:text-white inline-block">🇻🇳 Hotline: {VIETNAM_HOTLINE}</a>
                        <a href={CAMBODIA_ZALO_URL} className="block text-sm text-cyan-200 hover:text-white">🇰🇭 Telegram/Zalo: {CAMBODIA_CONTACT}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-7/12 p-8 md:p-12 bg-white">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">{t.nameLabel}</label>
                      <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-[#182871] focus:ring-[#182871] sm:text-sm bg-slate-50 p-3.5 outline-none transition-colors border" placeholder={t.namePlaceholder} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1">{t.phoneLabel}</label>
                      <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-[#182871] focus:ring-[#182871] sm:text-sm bg-slate-50 p-3.5 outline-none transition-colors border" placeholder={t.phonePlaceholder} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-bold text-slate-700 mb-1">{t.addressLabel}</label>
                    <input type="text" name="address" id="address" required value={formData.address} onChange={handleChange} className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-[#182871] focus:ring-[#182871] sm:text-sm bg-slate-50 p-3.5 outline-none transition-colors border" placeholder={t.addressPlaceholder} />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-bold text-slate-700 mb-1">{t.quantityLabel}</label>
                    <div className="relative">
                      <select name="quantity" id="quantity" value={formData.quantity} onChange={handleChange} className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-[#182871] focus:ring-[#182871] sm:text-sm bg-slate-50 p-3.5 outline-none appearance-none font-medium border text-slate-800 transition-colors">
                        <option value="1">{t.quantityOptions.one}</option>
                        <option value="2">{t.quantityOptions.two}</option>
                        <option value="3">{t.quantityOptions.three}</option>
                        <option value="thung_1">{t.quantityOptions.carton}</option>
                        <option value="thung_10">{t.quantityOptions.tenCartons}</option>
                        <option value="ctv">{t.quantityOptions.distributor}</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="note" className="block text-sm font-bold text-slate-700 mb-1">{t.noteLabel}</label>
                    <textarea name="note" id="note" rows={2} value={formData.note} onChange={handleChange} className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-[#182871] focus:ring-[#182871] sm:text-sm bg-slate-50 p-3.5 outline-none transition-colors border" placeholder={t.notePlaceholder}></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-base font-black tracking-wide text-white bg-[#182871] hover:bg-[#121f5e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#182871] transition-transform hover:scale-[1.02] mt-4 uppercase disabled:opacity-75 disabled:cursor-wait">
                    {isSubmitting ? t.submitting : t.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b143b] border-t border-[#182871]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo_nutus.png" alt="Natus Clean Logo" className="h-12 w-auto object-contain rounded-md block bg-white" />
                <span className="text-2xl font-black tracking-tight text-white block">
                  Natus<span className="text-cyan-400">CLEAN</span>
                </span>
              </div>
              <p className="text-pretty mt-4 text-sm text-slate-400 leading-relaxed pr-8">{t.footerText}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-5 flex items-center">
                <span className="w-8 h-[2px] bg-cyan-400 mr-3"></span> {t.contactInfo}
              </h3>
              <ul className="space-y-4">
                <li className="text-sm text-slate-300 flex items-start">
                  <Phone className="w-4 h-4 mr-2 text-cyan-400 mt-0.5" />
                  <span>🇻🇳 {t.vietnamHotline}: <span className="font-bold text-white">{VIETNAM_HOTLINE}</span></span>
                </li>
                <li className="text-sm text-slate-300 flex items-start">
                  <MessageCircleIcon className="w-4 h-4 mr-2 text-cyan-400 mt-0.5" />
                  <span>🇰🇭 {t.cambodiaContact}: <span className="font-bold text-white">{CAMBODIA_CONTACT}</span></span>
                </li>
                <li className="text-sm text-slate-300 flex items-start">
                  <Users className="w-4 h-4 mr-2 text-cyan-400 mt-0.5" />
                  <span>{t.wholesaleText}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-5 flex items-center">
                <span className="w-8 h-[2px] bg-cyan-400 mr-3"></span> {t.social}
              </h3>
              <div className="flex flex-col items-start gap-3">
                <a
                  href={CAMBODIA_ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-cyan-400 text-sm font-bold rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-[#0b143b] transition-all w-fit"
                >
                  <MessageCircleIcon className="w-5 h-5 mr-2" />
                  {t.connectZalo}
                </a>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-white/30 text-sm font-bold rounded-lg text-white hover:bg-white hover:text-[#0b143b] transition-all w-fit"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  {t.productVideo}
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-pretty text-sm text-slate-500 font-medium">&copy; 2026 Natus Clean. All rights reserved.</p>
            <p className="text-pretty text-sm text-slate-500 font-medium mt-2 md:mt-0">{t.footerTagline}</p>
          </div>
        </div>
      </footer>

      <a
        href={CAMBODIA_ZALO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t.connectZalo} ${CAMBODIA_CONTACT}`}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex items-center group cursor-pointer"
      >
        <div className="absolute inset-0 bg-[#0068ff] rounded-full animate-ping opacity-40"></div>
        <div className="relative bg-[#0068ff] text-white shadow-[0_4px_20px_rgba(0,104,255,0.6)] rounded-full p-4 sm:px-6 sm:py-3.5 flex items-center gap-3 transform transition-transform group-hover:scale-110">
          <MessageCircleIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="hidden font-black text-sm uppercase tracking-wider sm:inline sm:text-base">{t.floatingQuote}</span>
        </div>
      </a>

      {showPopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowPopup(false); }}></div>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-sm w-full animate-[wiggle_0.5s_ease-out]">
            <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowPopup(false); }} className="absolute top-3 right-3 text-white hover:text-slate-200 bg-black/20 hover:bg-black/40 rounded-full p-1.5 z-10 transition-colors" aria-label="Close">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="bg-gradient-to-r from-[#182871] to-[#253994] p-6 text-center text-white relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-400 rounded-full blur-[30px] opacity-50"></div>
              <h3 className="text-2xl font-black uppercase italic mb-1 drop-shadow-lg">{t.popupTitle}</h3>
              <p className="text-pretty font-medium text-cyan-200 text-sm">{t.popupSubtitle}</p>
            </div>
            <div className="p-8 text-center bg-slate-50">
              <div className="mb-2">
                <span className="text-5xl font-black text-[#182871] tracking-tighter">86K</span>
                <span className="text-slate-400 line-through ml-2 text-lg">150K</span>
              </div>
              <p className="text-pretty text-slate-600 text-sm mb-6 leading-relaxed">{t.popupBody}</p>
              <a
                href="#order"
                onClick={() => setShowPopup(false)}
                className="block w-full py-3.5 px-4 bg-[#182871] hover:bg-[#121f5e] text-white font-black rounded-xl shadow-[0_4px_15px_rgba(24,40,113,0.4)] transition-all hover:scale-105 uppercase tracking-wide border border-[#182871]"
              >
                {t.popupCta}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function LanguageToggle({
  language,
  setLanguage,
  label,
  showIcon = false,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  label: string;
  showIcon?: boolean;
}) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-1.5 py-1" aria-label={label}>
      {showIcon && <Languages className="w-4 h-4 text-cyan-300 ml-1" />}
      <button
        type="button"
        onClick={() => setLanguage('vi')}
        className={`rounded-full px-2.5 py-1 text-xs font-black transition-colors ${language === 'vi' ? 'bg-cyan-400 text-[#182871]' : 'text-slate-200 hover:text-white'}`}
        aria-pressed={language === 'vi'}
      >
        🇻🇳 VI
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`rounded-full px-2.5 py-1 text-xs font-black transition-colors ${language === 'en' ? 'bg-cyan-400 text-[#182871]' : 'text-slate-200 hover:text-white'}`}
        aria-pressed={language === 'en'}
      >
        🇬🇧 EN
      </button>
    </div>
  );
}

function ProductSlider({
  images,
  slideIndex,
  setSlideIndex,
  onPrevious,
  onNext,
  title,
  previousLabel,
  nextLabel,
}: {
  images: string[];
  slideIndex: number;
  setSlideIndex: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  title: string;
  previousLabel: string;
  nextLabel: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#253994]/30 bg-[#182871] shadow-2xl">
      <img
        src={images[slideIndex]}
        alt={`${title} ${slideIndex + 1}`}
        className="w-full aspect-[4/5] sm:aspect-[16/13] lg:aspect-[4/5] object-cover object-center transition-opacity duration-500"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#0b143b]/80 to-transparent p-4 sm:p-6">
        <div className="flex gap-2">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSlideIndex(index)}
              aria-label={`${title} ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${slideIndex === index ? 'w-8 bg-cyan-300' : 'w-2.5 bg-white/60 hover:bg-white'}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onPrevious}
            aria-label={previousLabel}
            className="h-10 w-10 rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 flex items-center justify-center"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label={nextLabel}
            className="h-10 w-10 rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 flex items-center justify-center"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-slate-50/80 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all hover:-translate-y-1 group">
      <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-cyan-100 text-[#182871] mb-6 shadow-inner group-hover:bg-[#182871] group-hover:text-cyan-400 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#182871] mb-3">{title}</h3>
      <p className="text-pretty text-slate-600">{text}</p>
    </div>
  );
}

function InfoRow({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <div className="font-bold text-white">{title}</div>
        <div className="text-sm text-cyan-200">{text}</div>
      </div>
    </div>
  );
}

function MessageCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}
