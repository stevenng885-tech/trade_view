"use client";

import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      className="min-h-screen bg-black relative overflow-hidden"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "100% auto",
        backgroundPosition: "center",
      }}
    >
      {/* 🔹 Background Decorative Elements (viền đỏ góc mờ nhẹ) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-16 -left-16 w-72 h-72 border border-red-600 rotate-45"></div>
        <div className="absolute top-24 right-10 w-64 h-64 border border-red-600 rotate-45"></div>
        <div className="absolute bottom-10 left-1/3 w-48 h-48 border border-red-600 rotate-45"></div>
      </div>

      {/* 🔹 Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b-2 border-red-700 shadow-[0_0_20px_rgba(255,0,0,0.3)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo / Home */}
            <div className="flex-shrink-0">
              <a href="#" className="text-white hover:text-red-500 transition">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </a>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-10 tracking-wide">
              <a
                href="#solution"
                className="text-white hover:text-red-500 transition"
              >
                Giải Pháp
              </a>
              <a
                href="#content"
                className="text-white hover:text-red-500 transition"
              >
                Nội Dung
              </a>
              <a
                href="#instructor"
                className="text-white hover:text-red-500 transition"
              >
                Giảng Viên
              </a>
              <a
                href="#feedback"
                className="text-white hover:text-red-500 transition"
              >
                Đánh Giá
              </a>
              <a
                href="#contact"
                className="text-white hover:text-red-500 transition"
              >
                Liên Hệ
              </a>
            </div>

            {/* Button Desktop */}
            <div className="hidden md:block p-3">
              <a
                href="#register"
                className="bg-red-900/70 backdrop-blur-sm text-white px-7 py-3 rounded-md font-bold shadow-md hover:bg-red-700 transition"
              >
                THAM GIA MIỄN PHÍ
              </a>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <button
              className="md:hidden text-white hover:text-red-500 transition"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-red-600 animate-slide-down">
            <div className="px-4 pt-3 pb-4 space-y-2">
              <a
                href="#solution"
                className="block px-3 py-2 text-white rounded hover:bg-red-900 transition"
              >
                Giải Pháp
              </a>
              <a
                href="#content"
                className="block px-3 py-2 text-white rounded hover:bg-red-900 transition"
              >
                Nội Dung
              </a>
              <a
                href="#instructor"
                className="block px-3 py-2 text-white rounded hover:bg-red-900 transition"
              >
                Giảng Viên
              </a>
              <a
                href="#feedback"
                className="block px-3 py-2 text-white rounded hover:bg-red-900 transition"
              >
                Đánh Giá
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-white rounded hover:bg-red-900 transition"
              >
                Liên Hệ
              </a>
              <a
                href="#register"
                className="block px-3 py-2 bg-red-900/70 backdrop-blur-sm text-center text-white font-bold rounded-md hover:bg-red-700 transition"
              >
                THAM GIA MIỄN PHÍ
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* 🔥 HERO SECTION */}
      <section
        id="hero"
        className="relative bg-black overflow-hidden"
        style={{
          backgroundImage: "url('/background1.jpg')",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8 text-white">
            {/* Title box */}
            <div className="inline-block border-2 border-dashed border-red-600 px-8 py-3 bg-red-900/70 backdrop-blur-sm">
              <p className="text-xl md:text-2xl font-bold uppercase text-center">
                “ Bí Quyết Sống Sót Cùng Forex ”
              </p>
            </div>

            {/* Headings */}
            <div className="space-y-1">
              <h1 className="text-3xl md:text-4xl font-bold uppercase leading-tight">
                Khoá học Trading
                <br />
                Scaping lướt sóng với
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 uppercase tracking-widest">
                Nến Thanh Khoản
              </h2>
            </div>

            {/* Badge */}
            <div className="bg-red-900/70 backdrop-blur-sm inline-block px-4 py-2 rounded-md shadow-[0_0_15px_rgba(255,0,0,0.4)]">
              <p className="text-white font-semibold text-base">
                Phương pháp chỉ dành cho 10% Trader Thắng Cuộc
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-200 leading-relaxed text-sm max-w-xl">
              Khóa học miễn phí 3 buổi online, giúp bạn đọc vị dòng tiền cá mập
              và giao dịch Vàng XAUUSD an toàn – lợi nhuận ổn định.Chỉ cần 1
              công cụ & 1 tư duy đúng – không còn sợ cháy tài khoản.
            </p>

            {/* FORM REGISTER */}
            <div
              id="register"
              className="bg-gradient-to-b from-red-900/80 to-black/80 p-8 rounded-xl w-full max-w-md mt-10 border border-red-700 shadow-[0_0_25px_rgba(255,0,0,0.3)]"
            >
              <h3 className="text-2xl font-bold uppercase text-white mb-2">
                Điền thông tin bên dưới
              </h3>
              <p className="text-sm font-bold uppercase text-white mb-2">
                Tham gia khoá học miễn phí ngay! <br />
                Chỉ dành cho
                <span className="text-red-800 font-bold underline ">
                  {" "}
                  100 slot
                </span>{" "}
                – đăng ký nhanh nhất!
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Họ và Tên"
                  className="w-full px-4 py-3 rounded-md bg-white text-black focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full px-4 py-3 rounded-md bg-white text-black focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md bg-white text-black focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white font-bold uppercase py-3 rounded-md hover:bg-red-700 transition-all duration-300 shadow-lg"
                >
                  Đăng ký tham gia ngay!
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE - INSTRUCTOR */}
          <div className="relative flex justify-center items-center">
            {/* Instructor Image */}
            <div className="relative w-[600px] h-[600px] rounded-full overflow-hidden border-4 border-red-600 shadow-[0_0_40px_rgba(255,0,0,0.6)]">
              <img
                src="/mter.jpg"
                alt="Giảng viên Master Phúc"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Label */}
            <div className="absolute -bottom-8 bg-red-700 px-6 py-3 rounded-md text-center shadow-lg w-[90%] max-w-sm">
              <p className="font-bold text-white text-lg uppercase">
                Giảng viên: MASTER PHÚC
              </p>
              <p className="text-sm text-gray-200">
                Nhà giao dịch chuyên nghiệp với hơn 6 năm kinh nghiệm Forex
                &amp; XAUUSD
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Trading Mistakes */}
      {/* Common Trading Mistakes Section */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#180000] bg-cover bg-center"
        style={{ backgroundImage: "url('/background-chart-red.png')" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Image */}
          <div className="flex justify-center">
            <div className="rounded-xl overflow-hidden border-4 border-red-700 shadow-[0_0_30px_rgba(255,0,0,0.4)]">
              <img
                src="/trader-chart.jpg"
                alt="Trader nhìn biểu đồ"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">
              TRADE MỚI THUA LỖ HAY GẶP PHẢI!
            </h2>

            <ul className="space-y-3 text-lg text-gray-200">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">▶</span>
                <span>
                  <span className="text-red-500 font-semibold">90%</span> trader
                  thua lỗ trong thị trường Forex
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">▶</span>
                <span>
                  Học rất nhiều khoá học giao dịch nhưng vẫn{" "}
                  <span className="text-red-500 font-semibold">thua lỗ</span>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">▶</span>
                <span>
                  Giao dịch theo <span className="italic">"cảm tính"</span> hoặc
                  tín hiệu từ người khác{" "}
                  <span className="text-red-500 font-semibold">
                    → Cháy tài khoản
                  </span>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">▶</span>
                <span>
                  Trader{" "}
                  <span className="text-red-500 font-semibold">
                    không kiểm soát được tâm lý
                  </span>{" "}
                  và vốn
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">▶</span>
                <span>
                  Không hiểu được{" "}
                  <span className="text-red-500 font-semibold">
                    tâm lý thị trường
                  </span>{" "}
                  đằng sau mô hình giá
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#100000] bg-cover bg-center">
        {/* FREE COURSE CTA */}
        <div className="max-w-5xl mx-auto mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white uppercase">
            KHÓA HỌC MIỄN PHÍ <span className="text-red-500">3 BUỔI</span>
          </h3>
          <h4 className="text-2xl md:text-3xl font-bold text-red-500 uppercase mt-2">
            “Bí Quyết Chinh Phục Thị Trường Forex”
          </h4>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Phương pháp Scalping với Nến Thanh Khoản",
              "Tư duy đọc thị trường theo dòng tiền lớn",
              "Ứng dụng công cụ độc quyền để tăng xác suất thắng",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center bg-red-900/70 border border-red-700 text-white px-6 py-4 rounded-full font-medium shadow-md"
              >
                <svg
                  className="w-5 h-5 mr-2 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Benefits */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#180000] bg-cover bg-center"
        style={{ backgroundImage: "url('/background1.jpg')" }}
      >
        {/* Overlay tối nhẹ để nổi chữ */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 relative z-10">
            {[
              {
                title: 'Không phụ thuộc vào "Chỉ báo màu mè"',
                desc: "Dựa vào hành vi giá thật, đọc cấu trúc thị trường để quyết định.",
              },
              {
                title: "Giảm rủi ro bị quét SL",
                desc: "Đặt SL ngoài swing kèm buffer, ưu tiên vào sau khi quét đỉnh/đáy và giá quay lại vùng.",
              },
              {
                title: "Tối ưu điểm vào/ra lệnh",
                desc: "Chờ pullback về vùng hợp lưu, TP ở đỉnh–đáy hoặc trailing SL để tối đa lợi nhuận.",
              },
              {
                title: "Dễ dàng áp dụng",
                desc: "Quy trình các bước dễ dàng dành cho trader mới và trung cấp.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 hover:translate-y-[-2px] transition-transform duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-white shadow-md">
                    <svg
                      className="w-4 h-4 text-red-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg leading-snug">
                    {item.title}
                  </p>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="flex justify-center relative z-10">
            <img
              src="/background.jpg"
              alt="Khóa học này sẽ giúp bạn"
              className="rounded-xl border-4 border-red-700 shadow-[0_0_40px_rgba(255,0,0,0.5)] w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-red-600 bg-[#0f0000]"
        id="content"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-red-600 uppercase mb-2">
            NỘI DUNG KHÓA HỌC
          </h2>
          <h3 className="text-center text-2xl md:text-3xl font-bold text-white mb-10 uppercase">
            “Bí Quyết Sống Sót Cùng Forex”
          </h3>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT - Course Image */}
            <div className="flex justify-center">
              <img
                src="/kh.jpeg"
                alt="Khóa học Nến Thanh Khoản"
                className="rounded-xl border-4 border-red-700 shadow-[0_0_25px_rgba(255,0,0,0.4)] max-w-sm"
              />
            </div>

            {/* RIGHT - Session List */}
            <div className="space-y-6">
              {[
                {
                  title: "BUỔI 1",
                  desc: "Thức tỉnh – Sự thật về Forex & nỗi đau của trader",
                },
                {
                  title: "BUỔI 2",
                  desc: "Thấu hiểu – Nến Thanh Khoản & chỉ báo độc quyền",
                },
                {
                  title: "BUỔI 3",
                  desc: "Tự chủ – Quản lý vốn, tâm lý & thực chiến",
                },
              ].map((session, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-gradient-to-r from-[#2a0000] to-black border border-red-700 rounded-lg overflow-hidden"
                >
                  <div className="bg-[url('/money-bg.jpg')] bg-cover bg-center w-24 h-24 flex items-center justify-center border-r border-red-700">
                    <span className="text-3xl font-bold text-yellow-400">
                      {idx + 1}
                    </span>
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-red-500 uppercase">
                      {session.title}
                    </h4>
                    <p className="text-gray-200">{session.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Get */}
      {/* SECTION: Bạn sẽ nhận được gì */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#190000] bg-cover bg-center"
        style={{ backgroundImage: "url('/background2.jpg')" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT - Checklist */}
          <div className="space-y-5">
            {[
              "Hiểu luật chơi của thị trường FOREX và Market Maker điều khiển giá",
              "Nhận diện Nến Thanh Khoản và vùng thanh khoản quan trọng nơi có dòng tiền cá mập",
              "Sở hữu công thức setup lệnh chuẩn xác theo phương pháp",
              "Quản trị vốn và tâm lý giao dịch tốt hơn",
              "Tự tin tự chủ động giao dịch mà không cần phụ thuộc vào ai",
            ].map((text, i) => (
              <div
                key={i}
                className=" flex items-start space-x-4 bg-gradient-to-r from-[#2a0000] border border-red-700 rounded-md p-4 hover:translate-x-1 transition"
              >
                <div className="flex-shrink-0 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                  <svg
                    className="w-4 h-4 text-red-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-white text-base md:text-lg leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT - Image */}
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-red-500 uppercase mb-2">
              BẠN SẼ NHẬN ĐƯỢC GÌ
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white uppercase mb-6">
              SAU KHI THAM GIA KHÓA HỌC ?
            </h3>
            <div className="inline-block border-4 border-red-700 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(255,0,0,0.4)]">
              <img
                src="/lic.jpg"
                alt="Trước Sau Học"
                className="w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Giới thiệu giảng viên */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#100000] border-t border-red-700"
        id="instructor"
      >
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-black to-[#1a0000] rounded-xl overflow-hidden border border-red-800 shadow-[0_0_30px_rgba(255,0,0,0.3)]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* LEFT - Giảng viên */}
            <div className="relative bg-[#1a0000] h-full">
              <div className="bg-red-700 text-white text-sm font-bold px-4 py-2 absolute top-0 left-0 rounded-br-lg">
                Master Phúc
              </div>
              <img
                src="/mter.jpg"
                alt="Master Phúc"
                className="w-full h-full object-cover rounded-tl-xl md:rounded-tl-xl md:rounded-bl-xl"
              />
            </div>

            {/* RIGHT - Info */}
            <div className="p-8 space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-2">
                GIỚI THIỆU GIẢNG VIÊN
              </h2>
              <div className="h-1 w-20 bg-red-600 mb-4"></div>
              <p className="text-gray-300">
                Nhà giao dịch chuyên nghiệp với hơn{" "}
                <b>6 năm kinh nghiệm Forex & chuyên sâu XAUUSD</b>
              </p>

              <ul className="space-y-3">
                {[
                  "Chuyên gia trong lĩnh vực Trade Forex với hơn 6 năm kinh nghiệm",
                  "Người sáng tạo phương pháp Scalping Nến Thanh Khoản và chỉ báo độc quyền",
                  "Đã huấn luyện hơn 500 trader, nhiều học viên đạt mức tăng trưởng ổn định hàng tháng 15-40% tài khoản",
                ].map((text, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <svg
                      className="w-5 h-5 text-red-600 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="text-gray-200">{text}</p>
                  </li>
                ))}
              </ul>

              <div className="bg-red-700/90 rounded-lg p-4 text-white text-sm mt-6">
                Master Phúc sẽ hướng dẫn bạn từng bước để làm chủ phương pháp
                Nến Thanh Khoản để giao dịch
              </div>

              {/* Social icons */}
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition"
                >
                  <i className="fab fa-whatsapp text-white"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition"
                >
                  <i className="fab fa-facebook-f text-white"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-500 hover:bg-sky-600 transition"
                >
                  <i className="fab fa-telegram-plane text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#160000] border-t border-red-700">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-2xl md:text-3xl font-semibold text-white mb-10">
            NHỮNG KẾT QUẢ MÀ MÌNH ĐÃ LÀM ĐƯỢC
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 text-white text-sm md:text-base">
            <div className="flex text-red-600 items-start space-x-3 mt-8 ">
              <span className="text-red-600 text-5xl mt-0.5">⚙️</span>
              <p>
                Phát triển phương pháp Nến Thanh Khoản dựa trên Wyckoff, VSA kết
                hợp Price Action
              </p>
            </div>
            <div className="flex text-red-600 items-start space-x-3 mt-8">
              <span className="text-red-600 text-5xl mt-0.5">⚙️</span>
              <p>Xây dựng chỉ báo Nến Thanh Khoản độc quyền</p>
            </div>
            <div className="flex text-red-600 items-start space-x-3 mt-8">
              <span className="text-red-600 text-5xl mt-0.5">⚙️</span>
              <p>
                Nhiều học viên đạt lợi nhuận 15–40%/tháng ổn định và bền vững
              </p>
            </div>
            <div className="flex text-red-600 items-start space-x-3 mt-8">
              <span className="text-red-600 text-5xl mt-0.5">⚙️</span>
              <p>
                Hệ thống đào tạo từ cơ bản đến nâng cao – thực chiến trực tiếp
              </p>
            </div>
            <div className="flex text-red-600 items-start space-x-3 mt-8">
              <span className="text-red-600 text-5xl mt-0.5">⚙️</span>
              <p>Nhóm cộng đồng hơn 2000 thành viên giao dịch mỗi ngày</p>
            </div>
          </div>
        </div>

        {/* FEEDBACK HỌC VIÊN */}
        <div className="max-w-6xl mx-auto mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            FEEDBACK CỦA HỌC VIÊN
          </h3>
          <p className="text-red-500 mb-8 uppercase tracking-wide text-3xl">
            Sau khi tham gia khóa học
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            <img
              src="/fb.jpg"
              alt="Feedback 1"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            <img
              src="/fb.jpg"
              alt="Feedback 2"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            <img
              src="/fb.jpg"
              alt="Feedback 3"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            <img
              src="/fb.jpg"
              alt="Feedback 3"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            <img
              src="/fb.jpg"
              alt="Feedback 3"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <img
              src="/fb.jpg"
              alt="Feedback học viên offline"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            <img
              src="/fb.jpg"
              alt="Feedback học viên offline"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            <img
              src="/fb.jpg"
              alt="Feedback học viên offline"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Target Audience */}
      {/* SECTION: Khóa học dành cho ai */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#190000] bg-cover bg-center"
        style={{ backgroundImage: "url('/background3.jpg')" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT - Image */}
          <div className="flex justify-center">
            <img
              src="/kh.jpeg"
              alt="Trader Image"
              className="rounded-lg border-4 border-red-700 shadow-[0_0_30px_rgba(255,0,0,0.4)] max-w-md"
            />
          </div>

          {/* RIGHT - Content */}
          <div className="text-white">
            <h3 className="text-red-600 font-bold uppercase text-lg mb-2">
              Khóa học này
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
              Dành cho những ai?
            </h2>

            <ul className="space-y-3 text-gray-200">
              {[
                "Trader mới bắt đầu",
                "Trader đã giao dịch nhưng thua lỗ",
                "Doanh nhân hoặc nhà đầu tư có vốn nhàn rỗi muốn mở rộng kênh đầu tư",
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <svg
                    className="w-4 h-4 text-red-500 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4 10.586a1 1 0 111.414-1.414L8.414 12.172l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION: Quyền lợi bạn sẽ nhận được */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0000] border-t border-red-700">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT - Text Content */}
          <div>
            <h3 className="text-red-600 font-bold uppercase text-lg">
              Quyền lợi bạn sẽ nhận được
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-6">
              Khi tham gia khóa học
            </h2>
            <div className="h-[2px] w-20 bg-red-600 mb-6"></div>

            <div className="space-y-4">
              {[
                "Thành thạo 1 phương pháp scalping Vàng với tỉ lệ thắng cao và lợi nhuận ổn định",
                "Hỗ trợ cấp miễn phí Chỉ báo Nến Thanh Khoản độc quyền",
                "Hỗ trợ 3–5 tín hiệu XAUUSD chuẩn phương pháp hàng ngày",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 bg-red-900/70 border border-red-700 px-5 py-3 rounded-md"
                >
                  <div className="w-4 h-4 bg-red-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-100 text-sm md:text-base">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Image */}
          <div className="flex justify-center">
            <img
              src="/lic.jpg"
              alt="Time is Money"
              className="rounded-lg border-4 border-red-700 shadow-[0_0_25px_rgba(255,0,0,0.4)] max-w-md"
            />
          </div>
        </div>
      </section>

      {/* 3 cột nội dung */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#160000] border-t border-red-700">
        <div className="max-w-6xl mx-auto text-center">
          {/* Tiêu đề */}
          <p className="text-red-500 text-sm md:text-base tracking-wide mb-2 uppercase">
            TẠI SAO BẠN PHẢI
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 uppercase">
            THAM GIA CHƯƠNG TRÌNH NÀY
          </h3>

          {/* Grid 3 Box */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-[#1a0000] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300">
              <img
                src="/kh.jpeg"
                alt="Phương pháp thực chiến"
                className="w-full aspect-[16/9] object-cover"
              />
              <div className="bg-gradient-to-b from-[#1a0000] to-[#2a0000] py-4 px-4">
                <p className="text-white text-sm md:text-base font-medium">
                  Đây là phương pháp thực chiến, không phải lý thuyết suông
                </p>
              </div>
              <div className="h-1 bg-red-600 w-full"></div>
            </div>

            {/* Box 2 */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-[#1a0000] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300">
              <img
                src="/trader-chart.jpg"
                alt="Chỉ báo độc quyền"
                className="w-full aspect-[16/9] object-cover"
              />
              <div className="bg-gradient-to-b from-[#1a0000] to-[#2a0000] py-4 px-4">
                <p className="text-white text-sm md:text-base font-medium">
                  Có chỉ báo độc quyền hỗ trợ xác định cơ hội
                </p>
              </div>
              <div className="h-1 bg-red-600 w-full"></div>
            </div>

            {/* Box 3 */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-[#1a0000] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300">
              <img
                src="/trader-chart.jpg"
                alt="Miễn phí khóa học"
                className="w-full aspect-[16/9] object-cover"
              />
              <div className="bg-gradient-to-b from-[#1a0000] to-[#2a0000] py-4 px-4">
                <p className="text-white text-sm md:text-base font-medium">
                  100% miễn phí – chỉ cần bạn thật sự nghiêm túc
                </p>
              </div>
              <div className="h-1 bg-red-600 w-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      {/* SECTION: ƯU ĐÃI & FORM ĐĂNG KÝ */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#250000] bg-cover bg-center"
        style={{ backgroundImage: "url('/background-final.jpg')" }}
        id="contact"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE - Offers */}
          <div>
            <h3 className="text-red-500 uppercase tracking-wide font-semibold mb-2">
              Khi đăng ký ngay hôm nay
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-8">
              Bạn sẽ nhận miễn phí
            </h2>

            <div className="space-y-4">
              {[
                "Khóa học 2 buổi “Bí Quyết Sống Sót Cùng Forex – Nến Thanh Khoản” trị giá 5.000.000 VNĐ → Nay chỉ 0đ",
                "Chỉ báo Nến Thanh Khoản độc quyền – Chỉ cấp cho các học viên",
                "3–5 tín hiệu XAUUSD chuẩn phương pháp mỗi ngày, trực tiếp từ Master Phúc và team phân tích",
                "Bộ tài liệu Wyckoff / VSA / Price Action (10.000.000 VNĐ) – để bạn hiểu sâu cấu trúc thị trường.",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 bg-black/60 border border-red-700 px-5 py-3 rounded-md shadow-lg"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-700 text-white font-bold">
                    {i + 1}
                  </div>
                  <p className="text-gray-200 text-base md:text-lg">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Price Box + Form */}
          <div className="space-y-6">
            {/* Price Box */}
            <div className="bg-black/80 border-2 border-red-700 p-6 text-center rounded-lg">
              <p className="text-xl md:text-2xl font-bold text-white mb-1">
                Tổng trị giá hơn :{" "}
                <span className="line-through text-gray-400">
                  15.000.000 VNĐ
                </span>
              </p>
              <p className="text-lg md:text-xl text-yellow-400 font-semibold">
                Nhưng{" "}
                <span className="text-red-500 font-bold">MIỄN PHÍ 100%</span>{" "}
                nếu bạn đăng ký hôm nay
              </p>
            </div>

            {/* Registration Form */}
            <div className="bg-red-700/90 border border-red-600 p-8 rounded-lg shadow-[0_0_30px_rgba(255,0,0,0.3)]">
              <h3 className="text-2xl font-bold text-white uppercase mb-2 text-center">
                Điền thông tin bên dưới
              </h3>
              <p className="text-yellow-300 text-center font-semibold mb-4 text-sm md:text-base">
                Tham gia khóa học miễn phí ngay! <br /> Chỉ dành cho{" "}
                <span className="text-white">100 slot</span> đăng ký nhanh nhất
              </p>

              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Họ và Tên"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-600 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-600 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-600 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white font-bold py-3 rounded-md text-lg uppercase hover:bg-gray-900 transition border border-white"
                >
                  Đăng ký tham gia ngay!
                </button>
              </form>

              <p className="text-center text-xs text-gray-100 mt-3">
                Sau khi đủ chỗ, form đăng ký sẽ tự động đóng lại và ưu đãi sẽ bị
                hủy.
              </p>
            </div>
          </div>
        </div>

        {/* Footer message */}
        <div className="text-center text-2xl mt-12">
          <p className="text-gray-200 font-medium">
            Đừng để bạn tiếp tục thua lỗ thêm một ngày nào nữa.
          </p>
          <p className="text-red-500 font-bold uppercase">
            Hãy cho bản thân 3 buổi để thay đổi cách bạn nhìn thị trường – mãi
            mãi.
          </p>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#160000] border-t border-red-700">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
            Thông tin chương trình
          </h3>

          <div className="grid md:grid-cols-2 gap-8 text-sm md:text-base">
            {/* Cột trái */}
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <span className="text-red-600 text-lg mt-0.5">▶</span>
                <p className="text-white">
                  <span className="font-semibold">Hình thức:</span> Zoom Online
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-red-600 text-lg mt-0.5">▶</span>
                <p className="text-white">
                  <span className="font-semibold">Thời lượng:</span> 90
                  phút/buổi – 2 buổi
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-red-600 text-lg mt-0.5">▶</span>
                <p className="text-white">
                  <span className="font-semibold">Lịch học:</span> Thứ 6 – Thứ 7
                </p>
              </div>
            </div>

            {/* Cột phải */}
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <span className="text-red-600 text-lg mt-0.5">▶</span>
                <p className="text-white">
                  <span className="font-semibold">Giảng viên:</span> Master Phúc
                  – HP Trading
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-red-600 text-lg mt-0.5">▶</span>
                <p className="text-white">
                  <span className="font-semibold">Phí tham gia:</span> Hoàn toàn
                  miễn phí
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
