import { CheckCircle, Phone, ShieldCheck, Sparkles, Star, Truck, Users, Headset } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    quantity: '1',
    note: ''
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // ĐƯỜNG DẪN TỚI GOOGLE APPS SCRIPT WEB APP
    const GOOGLE_APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxj85P_dPR0uvkxh8s1iHrdfVp0pkxBIe34fhdOTOEqF399zWsdKQhzGOPl7itwn5T8/exec';

    if (GOOGLE_APP_SCRIPT_URL === 'THAY_DUONG_LINK_Google_Script_CUA_BAN_VAO_DAY' || GOOGLE_APP_SCRIPT_URL === '') {
       alert(`Cảm ơn ${formData.name}! Đơn hàng của bạn đã được ghi nhận. (Hãy thay thế URL Google Script để thấy kết quả trên file excel nhé)`);
       setFormData({ name: '', phone: '', address: '', quantity: '1', note: '' });
       setIsSubmitting(false);
       return;
    }

    try {
      const payload = new URLSearchParams();
      payload.append("name", formData.name);
      payload.append("phone", formData.phone);
      payload.append("address", formData.address);
      payload.append("quantity", formData.quantity);
      payload.append("note", formData.note);

      await fetch(`${GOOGLE_APP_SCRIPT_URL}?${payload.toString()}`, {
        method: 'GET',
        mode: 'no-cors'
      });

      alert(`Đăng ký thành công! Đội ngũ Natus Clean sẽ sớm liên hệ xử lý đơn hàng cho ${formData.name}.`);
      setFormData({ name: '', phone: '', address: '', quantity: '1', note: '' });
    } catch (error) {
      alert("Hệ thống bị gián đoạn, vui lòng liên hệ Zalo trực tiếp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'quantity' && ['thung_1', 'thung_10', 'ctv'].includes(value)) {
      if (window.confirm('Vui lòng liên hệ trực tiếp qua Zalo 058.455.6556 để nhận báo giá Sỉ/Đại lý/Nhà Phân Phối tốt nhất. Bấm OK để chuyển tới ứng dụng Zalo!')) {
         window.open('https://zalo.me/0584556556', '_blank');
      }
      return; // Do not update form state so it stays on previous choice
    }
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      {/* Top Banner */}
      <div className="bg-[#182871] text-white py-2 px-4 text-center text-sm font-medium">
        Miễn phí vận chuyển toàn quốc cho đơn từ 3 chai. Hotline: 058.455.6556
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#182871]/95 backdrop-blur-md border-b border-[#253994]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center h-full py-2 cursor-pointer">
              {/* Logo Placeholder - Can be replaced with actual image src or styled text as fallback */}
              <div className="h-full flex items-center gap-2">
                 <img src="/logo_nutus.png" alt="Natus Clean Logo" className="h-10 w-auto object-contain rounded-md" />
                 <span className="text-2xl font-black tracking-tight text-white leading-none whitespace-nowrap">
                   Natus<span className="text-cyan-400">CLEAN</span>
                 </span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#thuc-te" className="text-sm font-semibold text-slate-200 hover:text-cyan-400">Sản phẩm thực tế</a>
              <a href="https://zalo.me/0584556556" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-200 hover:text-cyan-400 flex items-center gap-1">
                <Headset className="w-4 h-4" /> Liên hệ tư vấn
              </a>
              <a 
                href="#order" 
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-bold rounded-full text-[#182871] bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              >
                Đặt Hàng Ngay
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden bg-[#182871]">
        {/* Subtle background abstract elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[100px]"></div>
          <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[80px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-bold text-cyan-900 bg-cyan-100 mb-6 border border-cyan-200 shadow-sm shadow-cyan-500/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Giải pháp làm sạch hoàn hảo
              </div>
              <h1 className="text-4xl tracking-tight font-black text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl uppercase">
                <span className="block mb-2 text-cyan-400">Siêu Tẩy Đa Năng</span>
                <span className="block italic text-6xl md:text-7xl">Natus</span>
              </h1>
              
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 inline-flex flex-col items-center justify-center min-w-[200px] relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full whitespace-nowrap animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                     🔥 Ưu đãi hôm nay
                  </div>
                  <span className="text-slate-300 text-sm font-semibold uppercase tracking-wider mb-1 mt-1">Giá siêu sale</span>
                  <div className="text-3xl font-black text-cyan-400 flex items-baseline gap-1">
                    86.000<span className="text-xl">đ</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                     <span className="text-slate-400 text-xs line-through">150.000đ</span>
                     <span className="text-red-400 text-xs font-bold bg-red-500/10 px-1.5 py-0.5 rounded">-43%</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2.5">

                   <div className="bg-[#182871]/60 border border-cyan-500/30 px-4 py-2.5 rounded-xl text-sm font-bold text-white flex items-center shadow-inner">
                      <Users className="w-5 h-5 text-cyan-400 mr-2 drop-shadow-md" /> 
                      Đã bán: <span className="text-red-400 ml-1.5 text-base">2,850+</span>
                   </div>
                </div>
              </div>

              <p className="text-pretty mt-6 text-base text-slate-300 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0 font-medium">
                Sạch nhanh vượt trội, đánh bay mọi vết bẩn cứng đầu trên bếp, nội thất, ghế ô tô với công nghệ Ultra Deep Power 10X.
              </p>
              
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#order"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-[#182871] bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all hover:scale-105"
                >
                  Mua Ngay Bây Giờ
                </a>
                <a 
                  href="https://zalo.me/0584556556"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-base font-bold rounded-full text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  <MessageCircleIcon className="w-5 h-5 mr-2" />
                  Zalo Sỉ: 058 455 6556
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm font-medium text-cyan-100">
                <span className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2"/> Hàng chính hãng</span>
                <span className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2"/> Freeship từ 3 chai</span>
              </div>
            </div>
            
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center lg:justify-end">
              <div className="relative mx-auto w-full max-w-[500px] overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/10 group bg-[#101c54] flex flex-col items-center justify-center">
                 {/* Product Hero Image - object-contain prevents cropping */}
                 <img 
                    src="/Gemini_Generated_Image_8l10fw8l10fw8l10-clean.png" 
                    alt="Natus Clean Siêu Tẩy Đa Năng" 
                    className="w-full h-auto max-h-[75vh] object-contain transition-transform duration-700 group-hover:scale-105"
                 />
                 {/* Overlay gradient to ensure text readability */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a1133] via-transparent to-transparent opacity-90 pointer-events-none"></div>
                 
                 <div className="absolute bottom-6 left-0 w-full px-6 flex justify-between items-end pointer-events-none">
                    <div>
                       <div className="bg-[#182871] text-white px-3 py-1 rounded-sm text-xs font-black uppercase inline-block mb-2 tracking-widest shadow-lg">Ultra Deep Power</div>
                       <div className="text-3xl sm:text-4xl font-black text-white italic drop-shadow-lg leading-none">10X Sạch Bóng</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery / Banner Features Section */}
      <section id="gallery" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182871] uppercase tracking-tight text-balance leading-snug">
              Sự Lựa Chọn Của Gia Đình Việt
            </h2>
            <p className="text-pretty mt-4 text-xl text-slate-600 font-medium max-w-3xl mx-auto">
              Trải nghiệm hiệu quả làm sạch tức thì trên nhiều bề mặt khác nhau. Từ nhà bếp đến nội thất ô tô.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Horizontal Full Width Banner Image 1 */}
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl bg-[#182871] group flex flex-col md:flex-row items-center border border-[#253994]">
              <div className="w-full md:w-1/2 flex items-center justify-center p-0 md:order-2">
                <img 
                   src="/anh_bia.png" 
                   alt="Tẩy rửa nhà bếp siêu sạch" 
                   className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-gradient-to-r from-[#182871] to-[#253994] md:order-1 text-center md:text-left">
                 <div className="max-w-xl mx-auto md:mx-0">
                   <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4 drop-shadow-lg text-balance leading-tight">Sạch Bóng Nhà Bếp</h3>
                   <p className="text-pretty text-lg md:text-xl text-cyan-50 font-medium drop-shadow-md">Đánh bay mỡ cứng đầu, trả lại vẻ sáng bóng cho không gian nấu nướng của bạn.</p>
                 </div>
              </div>
            </div>

            {/* Horizontal Full Width Banner Image 2 */}
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl bg-[#182871] group flex flex-col md:flex-row items-center border border-[#253994]">
              <div className="w-full md:w-1/2 flex items-center justify-center p-0">
                <img 
                   src="/Gemini_Generated_Image_fvl5vffvl5vffvl5-clean.png" 
                   alt="Làm mới nội thất ô tô" 
                   className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-gradient-to-l from-[#182871] to-[#253994] text-center md:text-right">
                 <div className="max-w-xl mx-auto md:ml-auto md:mr-0">
                   <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4 drop-shadow-lg text-balance leading-tight">Làm Mới Nội Thất</h3>
                   <p className="text-pretty text-lg md:text-xl text-cyan-50 font-medium drop-shadow-md">Giải pháp làm sạch xe hơi đa năng, loại bỏ bụi bẩn, khử mùi hoàn hảo.</p>
                 </div>
              </div>
            </div>

            {/* Real Photos Grid */}
            <div id="thuc-te" className="w-full mt-24 scroll-mt-24">
               <div className="text-center mb-10">
                 <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182871] uppercase tracking-tight text-balance leading-snug">
                   Sản phẩm thực tế
                 </h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="rounded-3xl overflow-hidden shadow-xl aspect-square border border-slate-200 bg-white">
                     <img src="/thuc te 1.jpg" alt="Hiệu quả làm sạch 1" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"/>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-xl aspect-square border border-slate-200 bg-white">
                     <img src="/thuc te 2.jpg" alt="Hiệu quả làm sạch 2" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"/>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-xl aspect-square border border-slate-200 bg-white">
                     <img src="/thuc te 3.jpg" alt="Hiệu quả làm sạch 3" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"/>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cyan-500 py-12 border-y border-cyan-600">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
               <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#182871] uppercase tracking-tight text-balance leading-snug">Tìm Đối Tác Phân Phối Toàn Quốc</h3>
                  <p className="text-pretty text-[#182871] font-medium mt-1">Đại lý cấp 1, cấp 2, Đại lý độc quyền khu vực với chính sách cực tốt.</p>
               </div>
               <a 
                  href="https://zalo.me/0584556556"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#182871] text-base font-black rounded-full text-[#182871] bg-transparent hover:bg-[#182871] hover:text-cyan-400 shadow-lg transition-all whitespace-nowrap uppercase"
                >
                  <Users className="w-5 h-5 mr-3" />
                  Đăng Ký Khách Sỉ Zalo
                </a>
            </div>
         </div>
      </section>

      {/* Features Detail Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182871] uppercase tracking-tight text-balance leading-snug">
              Sức Mạnh Từ Công Nghệ 10X
            </h2>
            <p className="text-pretty mt-4 max-w-2xl text-xl text-slate-500 mx-auto leading-relaxed">
              Chai xịt Natus Clean giải quyết toàn diện <span className="block mt-1 text-slate-600 font-medium">mọi vấn đề làm sạch xung quanh bạn.</span>
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center text-center p-8 bg-slate-50/80 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-cyan-100 text-[#182871] mb-6 shadow-inner group-hover:bg-[#182871] group-hover:text-cyan-400 transition-colors">
                  <Sparkles className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-[#182871] mb-3">Nhà Bếp Siêu Sạch</h3>
                <p className="text-pretty text-slate-600">Đánh bay mảng bám dầu mỡ lâu ngày trên bếp từ, máy hút mùi, xoong nồi chảo chỉ trong tích tắc.</p>
              </div>

              <div className="flex flex-col items-center text-center p-8 bg-slate-50/80 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-cyan-100 text-[#182871] mb-6 shadow-inner group-hover:bg-[#182871] group-hover:text-cyan-400 transition-colors">
                  <ShieldCheck className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-[#182871] mb-3">An Toàn Bề Mặt</h3>
                <p className="text-pretty text-slate-600">Hiệu quả và làm mới trên ghế da ô tô, sofa, phụ kiện đồ mộc, nội thất gia đình mà không làm hỏng chất liệu.</p>
              </div>

              <div className="flex flex-col items-center text-center p-8 bg-slate-50/80 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-cyan-100 text-[#182871] mb-6 shadow-inner group-hover:bg-[#182871] group-hover:text-cyan-400 transition-colors">
                  <Star className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-[#182871] mb-3">10X Ultra Deep Power</h3>
                <p className="text-pretty text-slate-600">Công thức thẩm thấu sâu, làm sạch cực mạnh gấp 10 lần các loại dung dịch tẩy rửa thông thường.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#182871] sm:text-4xl uppercase tracking-tight">
              Khách Hàng Nói Gì Về Natus Clean
            </h2>
            <div className="flex justify-center items-center mt-4 space-x-1">
               <Star className="w-6 h-6 text-yellow-400 fill-current" />
               <Star className="w-6 h-6 text-yellow-400 fill-current" />
               <Star className="w-6 h-6 text-yellow-400 fill-current" />
               <Star className="w-6 h-6 text-yellow-400 fill-current" />
               <Star className="w-6 h-6 text-yellow-400 fill-current" />
               <span className="ml-2 text-lg font-bold text-slate-700">4.9/5 (10.000+ Đánh giá)</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col">
                <div className="flex items-center mb-4">
                   <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-[#182871] font-bold text-xl mr-4">H</div>
                   <div>
                      <h4 className="font-bold text-slate-800">Hoàng Anh</h4>
                      <div className="flex text-yellow-400 text-sm">
                         <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
                      </div>
                   </div>
                </div>
                <p className="text-pretty text-slate-600 flex-grow italic">"Rất bất ngờ với hiệu quả. Mình xịt thử lên bếp gas bám đầy dầu mỡ để 5 phút lau lại sạch bong. Đáng đồng tiền!"</p>
             </div>
             <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col">
                <div className="flex items-center mb-4">
                   <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-[#182871] font-bold text-xl mr-4">L</div>
                   <div>
                      <h4 className="font-bold text-slate-800">Lê Thu</h4>
                      <div className="flex text-yellow-400 text-sm">
                         <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
                      </div>
                   </div>
                </div>
                <p className="text-pretty text-slate-600 flex-grow italic">"Ghế da ô tô nhà mình bị vết ố bẩn lau mãi không ra, mua thử Natus clean về lau phát bay luôn. Dung dịch không mùi hắc, rất ưng."</p>
             </div>
             <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col">
                <div className="flex items-center mb-4">
                   <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-[#182871] font-bold text-xl mr-4">T</div>
                   <div>
                      <h4 className="font-bold text-slate-800">Tuấn Phạm</h4>
                      <div className="flex text-yellow-400 text-sm">
                         <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
                      </div>
                   </div>
                </div>
                <p className="text-pretty text-slate-600 flex-grow italic">"Sản phẩm chuẩn 10X. Nhập thùng về bán lẻ khách khen tắm tắp. Shop gói hàng kĩ, giao nhanh. Ủng hộ shop dài."</p>
             </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order" className="py-24 bg-[#182871] relative">
        <div className="absolute inset-0 bg-blue-900/40 pattern-grid-lg"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-5/12 p-8 md:p-12 bg-slate-900 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#182871] to-slate-900 opacity-90 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-2 uppercase text-cyan-400">Đặt hàng ngay</h3>
                  <p className="text-pretty text-slate-300 mb-8 font-medium">
                    Nhập thông tin để mua lẻ hoặc đăng ký Đại lý. Chúng tôi sẽ gọi lại chốt đơn trong 5 phút!
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <Truck className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Giao hàng toàn quốc</div>
                        <div className="text-sm text-cyan-200">Miễn phí ship khi mua từ 3 chai</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <ShieldCheck className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Chính hãng 100%</div>
                        <div className="text-sm text-cyan-200">Kiểm tra tem nhãn trước khi nhận</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <Phone className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Hỗ trợ 24/7</div>
                        <a href="https://zalo.me/0584556556" className="text-sm text-cyan-200 hover:text-white inline-block">Đường dây nóng: 058.455.6556</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-7/12 p-8 md:p-12 bg-white">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">Họ và tên *</label>
                      <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-[#182871] focus:ring-[#182871] sm:text-sm bg-slate-50 p-3.5 outline-none transition-colors border" placeholder="Ví dụ: Nguyễn Văn A"/>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1">Số điện thoại *</label>
                      <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-[#182871] focus:ring-[#182871] sm:text-sm bg-slate-50 p-3.5 outline-none transition-colors border" placeholder="Ví dụ: 0987..."/>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-bold text-slate-700 mb-1">Địa chỉ giao hàng đầy đủ *</label>
                    <input type="text" name="address" id="address" required value={formData.address} onChange={handleChange} className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-[#182871] focus:ring-[#182871] sm:text-sm bg-slate-50 p-3.5 outline-none transition-colors border" placeholder="Số nhà, Quận/Huyện, Tỉnh/Thành phố..."/>
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-bold text-slate-700 mb-1">Chọn số lượng mua sỉ/lẻ *</label>
                    <div className="relative">
                      <select name="quantity" id="quantity" value={formData.quantity} onChange={handleChange} className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-[#182871] focus:ring-[#182871] sm:text-sm bg-slate-50 p-3.5 outline-none appearance-none font-medium border text-slate-800 transition-colors">
                        <option value="1">1 chai Lẻ - 86.000đ</option>
                        <option value="2">2 chai Lẻ - 172.000đ</option>
                        <option value="3">3 chai (Miễn phí ship) - 258.000đ</option>
                        <option value="thung_1">Mua sỉ từ 1 Thùng (25 chai) - Báo giá Zalo</option>
                        <option value="thung_10">Mua từ 10 Thùng (Đại lý cấp 1) - Báo giá Zalo</option>
                        <option value="ctv">Đăng ký làm Nhà Phân Phối Tỉnh - Báo giá Zalo</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="note" className="block text-sm font-bold text-slate-700 mb-1">Ghi chú thêm (Nếu có)</label>
                    <textarea name="note" id="note" rows={2} value={formData.note} onChange={handleChange} className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-[#182871] focus:ring-[#182871] sm:text-sm bg-slate-50 p-3.5 outline-none transition-colors border" placeholder="Thời gian nhận hàng ưng ý..."></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-base font-black tracking-wide text-white bg-[#182871] hover:bg-[#121f5e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#182871] transition-transform hover:scale-[1.02] mt-4 uppercase disabled:opacity-75 disabled:cursor-wait">
                    {isSubmitting ? "Đang Gửi Dữ Liệu..." : "Xác Nhận Đặt Hàng"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <p className="text-pretty mt-4 text-sm text-slate-400 leading-relaxed pr-8">
                Sản phẩm Siêu tẩy đa năng với công nghệ 10X Power Ultra Deep. Sạch bong sáng bóng mọi ngóc ngách, bảo vệ bề mặt hoàn hảo.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-5 flex items-center">
                <span className="w-8 h-[2px] bg-cyan-400 mr-3"></span> Thông tin liên hệ
              </h3>
              <ul className="space-y-4">
                <li className="text-sm text-slate-300 flex items-start">
                  <Phone className="w-4 h-4 mr-2 text-cyan-400 mt-0.5" />
                  <span>Holtine/Zalo Sỉ: <span className="font-bold text-white">058.455.6556</span></span>
                </li>
                <li className="text-sm text-slate-300 flex items-start">
                  <Users className="w-4 h-4 mr-2 text-cyan-400 mt-0.5" />
                  <span>Cung cấp số lượng lớn sỉ, CTV, đại lý chiết khấu cao nhất (Đại lý cấp 1, cấp 2, Nhà phân phối).</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-5 flex items-center">
                <span className="w-8 h-[2px] bg-cyan-400 mr-3"></span> Mạng Xã Hội
              </h3>
              <a 
                href="https://zalo.me/0584556556" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-cyan-400 text-sm font-bold rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-[#0b143b] transition-all w-fit"
              >
                <MessageCircleIcon className="w-5 h-5 mr-2" />
                Kết nối Zalo Trực Tiếp
              </a>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-pretty text-sm text-slate-500 font-medium">
              &copy; 2026 Natus Clean. All rights reserved.
            </p>
            <p className="text-pretty text-sm text-slate-500 font-medium mt-2 md:mt-0">
              Công nghệ làm sạch Ultra Deep 10X
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Zalo Button */}
      <a 
        href="https://zalo.me/0584556556" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center group cursor-pointer"
      >
        <div className="absolute inset-0 bg-[#0068ff] rounded-full animate-ping opacity-40"></div>
        <div className="relative bg-[#0068ff] text-white shadow-[0_4px_20px_rgba(0,104,255,0.6)] rounded-full px-5 py-3 sm:px-6 sm:py-3.5 flex items-center gap-3 transform transition-transform group-hover:scale-110">
          <MessageCircleIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="font-black text-sm sm:text-base uppercase tracking-wider">Báo giá tốt</span>
        </div>
      </a>
      {/* 5-second Delay Popup */}
      {showPopup && (
         <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowPopup(false); }}></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-sm w-full animate-[wiggle_0.5s_ease-out]">
               <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowPopup(false); }} className="absolute top-3 right-3 text-white hover:text-slate-200 bg-black/20 hover:bg-black/40 rounded-full p-1.5 z-10 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
               </button>
               <div className="bg-gradient-to-r from-[#182871] to-[#253994] p-6 text-center text-white relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-400 rounded-full blur-[30px] opacity-50"></div>
                  <h3 className="text-2xl font-black uppercase italic mb-1 drop-shadow-lg">Ưu Đãi Đặc Biệt!</h3>
                  <p className="text-pretty font-medium text-cyan-200 text-sm">Dành riêng cho bạn hôm nay</p>
               </div>
               <div className="p-8 text-center bg-slate-50">
                  <div className="mb-2">
                     <span className="text-5xl font-black text-[#182871] tracking-tighter">86K</span>
                     <span className="text-slate-400 line-through ml-2 text-lg">150K</span>
                  </div>
                  <p className="text-pretty text-slate-600 text-sm mb-6 leading-relaxed">Siêu Tẩy Đa Năng <span className="font-bold text-[#182871]">Natus Clean</span> đánh bay mọi mảng bám cứng đầu nhất chỉ trong 5 phút. Sạch bong sáng bóng!</p>
                  <a 
                     href="#order"
                     onClick={() => setShowPopup(false)}
                     className="block w-full py-3.5 px-4 bg-[#182871] hover:bg-[#121f5e] text-white font-black rounded-xl shadow-[0_4px_15px_rgba(24,40,113,0.4)] transition-all hover:scale-105 uppercase tracking-wide border border-[#182871]"
                  >
                     Nhận ưu đãi & Đặt hàng
                  </a>
               </div>
            </div>
         </div>
      )}
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
  )
}

