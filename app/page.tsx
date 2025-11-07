"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import ContactForm from "./components/ContactForm";
import useWindowDimensions from "./hooks/useWindowDimensions";

const menu = [
  {
    title: "Nội Dung",
    href: "#content"
  },
  {
    title: "Cộng Đồng",
    href: "#instructor"
  },
  {
    title: "Đánh Giá",
    href: "#feedback"
  },
  {
    title: "Liên Hệ",
    href: "#contact"
  },
]

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{
    width: undefined | number,
    height: undefined | number,
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  React.useEffect(() => {
    (async () => {
      new Promise(async (rs) => {
        await setTimeout(() => {
          rs(setIsLoading(false))
        }, 4000)
      })
    })()
  }, [])
  if (true) {
    return (
      <div className="">
        <video autoPlay={true} muted loop id="myVideo" className="fixed max-h-screen !min-w-screen max-w-none ml-[50vw] translate-x-[-50%]" >
          <source src={`/assets/videos/intro.mp4`} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen bg-black relative overflow-hidden "
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "100% auto",
        backgroundPosition: "center",
      }}
    >
      {/* 🔹 Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b-2 border-red-700 shadow-[0_0_20px_rgba(255,0,0,0.3)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              {
                menu.map((item, index) => {
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-white hover:text-red-500 transition"
                    >
                      {item.title}
                    </a>
                  )
                })
              }

            </div>

            {/* Button Desktop */}
            <div className="hidden md:block p-3 smoothly-scale">
              <a
                onClick={toggleMenu}
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
                onClick={toggleMenu}
                href="#solution"
                className="block px-3 py-2 text-white rounded hover:bg-red-900 transition"
              >
                Giải Pháp
              </a>
              <a
                onClick={toggleMenu}
                href="#content"
                className="block px-3 py-2 text-white rounded hover:bg-red-900 transition"
              >
                Nội Dung
              </a>
              <a
                onClick={toggleMenu}
                href="#instructor"
                className="block px-3 py-2 text-white rounded hover:bg-red-900 transition"
              >
                Cộng đồng
              </a>
              <a
                onClick={toggleMenu}
                href="#feedback"
                className="block px-3 py-2 text-white rounded hover:bg-red-900 transition"
              >
                Đánh Giá
              </a>
              <a
                onClick={toggleMenu}
                href="#contact"
                className="block px-3 py-2 text-white rounded hover:bg-red-900 transition"
              >
                Liên Hệ
              </a>
              <a
                onClick={toggleMenu}
                href="#register"
                className="block px-3 smoothly-scale py-2 bg-red-900/70 backdrop-blur-sm text-center text-white font-bold rounded-md hover:bg-red-700 transition"
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
        className="relative bg-black overflow-hidden bg-cover"
        style={{
          backgroundImage: "url('/background1.jpg')",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8 text-white">
            {/* Title box */}
            <div className="inline-block border-2 border-dashed border-red-600 px-8 py-3 bg-red-900/70 backdrop-blur-sm">
              <p className="text-xl md:text-2xl font-bold uppercase text-center">
                “ TRẢI NGHIỆM THỰC CHIẾN CÙNG CỘNG ĐỒNG CRYPTO ”
              </p>
            </div>

            {/* Headings */}
            <div className="space-y-1">
              <h1 className="text-3xl md:text-4xl font-bold uppercase leading-tight">
                THỰC CHIẾN CÙNG CÁC TRADER
                <br />
                ĂN NGỦ VỚI BIỂU ĐỒ
              </h1>
            </div>

            {/* Badge */}
            <div className="bg-red-900/70 backdrop-blur-sm inline-block px-4 py-2 rounded-md shadow-[0_0_15px_rgba(255,0,0,0.4)]">
              <p className="text-white font-semibold text-base">
                Cầm tay chỉ việc – Học tư duy & hành động như trader chuyên nghiệp
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-200 leading-relaxed text-sm max-w-xl">
              Tham gia cùng đội ngũ trader dày dạn kinh nghiệm,
              được hướng dẫn trực tiếp cách phân tích – vào lệnh – quản lý vốn theo quy trình thực chiến.
              <br />
              Cùng nhau học, thực hành và phát triển qua từng cú lệnh – không một mình giữa thị trường.
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
                Tham gia cồng đồng miễn phí ngay! <br />
                Chỉ dành cho
                <span className="text-red-800 font-bold underline ">
                  {" "}
                  Thành viên
                </span>{" "}
                – đăng ký nhanh nhất!
              </p>
              <ContactForm />
            </div>
          </div>

          {/* RIGHT SIDE - INSTRUCTOR */}
          <div className="relative flex justify-center items-center">
            {/* Instructor Image */}
            <div className="w-full relative">
              <Image
                width={500}
                height={500}
                src="/assets/banner/btc3.png"
                alt="img"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center">
                <div>
                  <div className="flex">
                    <Image
                      width={500}
                      height={500}
                      src="/assets/banner/4.png"
                      alt="img"
                      className="object-cover smoothly-scale w-1/2 h-1/2"
                    />
                    <Image
                      width={500}
                      height={500}
                      src="/assets/banner/5.png"
                      alt="img"
                      className="object-cover smoothly-scale w-1/2 h-1/2"
                    />
                  </div>
                  <div className="flex">
                    <Image
                      width={500}
                      height={500}
                      src="/assets/banner/6.png"
                      alt="img"
                      className="object-cover smoothly-scale w-1/2 h-1/2"
                    />
                    <Image
                      width={500}
                      height={500}
                      src="/assets/banner/3.png"
                      alt="img"
                      className="object-cover smoothly-scale w-1/2 h-1/2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Label */}
            {/* <div className="absolute -bottom-8 px-6 py-3 rounded-md flex justify-center shadow-lg w-[90%] max-w-sm">
              <Image
                width={500}
                height={500}
                src="/assets/banner/btc.png"
                alt="img"
                className="object-cover w-full h-full"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Common Trading Mistakes */}
      {/* Common Trading Mistakes Section */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#180000] bg-cover bg-center"
        style={{ backgroundImage: "url('/background-chart-red.png')" }}
      >
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Image */}
          <div className="flex justify-center">
            <div className="rounded-xl overflow-hidden border-4 border-red-700 shadow-[0_0_30px_rgba(255,0,0,0.4)]">
              <Image
                width={500}
                height={500}
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
                  thua lỗ trong thị trường Crypto
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
                  Giao dịch theo <span className="uppercase italic">cảm tính</span> hoặc
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
            THỰC CHIẾN CÙNG CỘNG ĐỒNG CRYPTO ALPHA NET
          </h3>
          <h4 className="text-2xl md:text-3xl font-bold text-red-500 uppercase mt-2">
            “Hiểu thị trường – Giao dịch có kế hoạch – Phát triển bền vững”
          </h4>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Phương pháp Nến Thanh Khoản & Cấu Trúc Dòng Tiền",
              "Tư duy đọc thị trường theo dấu vết cá mập",
              "Ứng dụng công cụ hỗ trợ độc quyền để xác định vùng thanh khoản & điểm vào hiệu quả",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center bg-red-900/70 border border-red-700 text-white px-6 py-4 rounded-full font-medium shadow-md"
              >
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

        <div className="relative container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 relative z-10">
            {[
              {
                title: 'Không phụ thuộc vào "Chỉ báo màu mè"',
                desc: "Dựa vào hành vi giá thật, đọc cấu trúc thị trường để quyết định.",
              },
              {
                title: "Giảm rủi ro – tối ưu lợi nhuận",
                desc: "Tư duy quản lý vốn và điểm vào/thoát rõ ràng, hạn chế bị “quét SL”.",
              },
              {
                title: "Cầm tay chỉ việc – dễ áp dụng",
                desc: "Quy trình hướng dẫn chi tiết, phù hợp cả cho người mới lẫn trader trung cấp.",
              },
              {
                title: "Học từ cộng đồng thực chiến",
                desc: "Nơi hàng nghìn trader chia sẻ, thảo luận và cùng phát triển mỗi ngày – hoàn toàn miễn phí.",
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
            <Image
              width={500}
              height={500}
              src="/background.jpg"
              alt="img"
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
        <div className="container mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-red-600 uppercase mb-2">
            tại alpha net có
          </h2>
          <h3 className="text-center text-2xl md:text-3xl font-bold text-white mb-10 uppercase">
            “Bí Quyết Sống Sót Cùng Crypto”
          </h3>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT - Course Image */}
            <div className="flex justify-center">
              <Image
                width={500}
                height={500}
                src="/kh.jpeg"
                alt="img"
                className="rounded-xl border-4 border-red-700 shadow-[0_0_25px_rgba(255,0,0,0.4)] max-w-sm"
              />
            </div>

            {/* RIGHT - Session List */}
            <div className="space-y-6">
              {[
                {
                  desc: "Hiểu thị trường từ gốc rễ – Cách dòng tiền thật di chuyển và lý do 90% trader thua lỗ.",
                },
                {
                  desc: "Chiến lược giao dịch thực chiến – Cách xác định xu hướng, điểm vào/ra lệnh và đặt dừng lỗ hợp lý.",
                },
                {
                  desc: "Tư duy & Quản lý vốn thông minh – Giữ tài khoản sống sót và tăng trưởng bền vững giữa biến động.",
                },
                {
                  desc: "Thực hành trực tiếp trên thị trường thật – Cầm tay chỉ việc, đọc biểu đồ – đặt lệnh – rút kinh nghiệm cùng cộng đồng.",
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
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* RIGHT - Image */}
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-red-500 uppercase mb-2">
              BẠN SẼ NHẬN ĐƯỢC GÌ
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white uppercase mb-6">
              SAU KHI THAM GIA ALPHA NET ?
            </h3>
            <div className="inline-block ">
              <Image
                width={500}
                height={500}
                src="/assets/alpha.png"
                alt="Trước Sau Học"
                className="w-full max-w-md object-cover"
              />
            </div>
          </div>
          {/* LEFT - Checklist */}
          <div className="space-y-5">
            {[
              "Hiểu được thị trường và thành thạo các phương pháp scalping",
              "Nhận diện được các mô hình nến và hiểu biết về các công cụ hỗ trợ",
              "Biết quản lí rủi ro và tối ưu lợi nhuận ở thị trường",
              "Nhận diện được các mô hình nến và hiểu biết về các công cụ hỗ trợ",
              "Tự tin chủ động giao dịch mà không phụ thuộc vào ai",
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


        </div>
      </section>

      {/* SECTION: Giới thiệu giảng viên */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#100000] border-t border-red-700"
        id="instructor"
      >
        <div className="container mx-auto bg-gradient-to-br from-black to-[#1a0000] rounded-xl overflow-hidden border border-red-800 shadow-[0_0_30px_rgba(255,0,0,0.3)]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* LEFT - Giảng viên */}
            <div className=" bg-[#1a0000] h-full flex justify-center">
              <video className='' autoPlay={true} muted loop id="myVideo">
                <source src="/assets/videos/alphanet.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>

            {/* RIGHT - Info */}
            <div className="p-8 space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-2">
                GIỚI THIỆU CỘNG ĐỒNG ALPHA NET
              </h2>
              <div className="h-1 w-20 bg-red-600 mb-4"></div>
              <p className="text-gray-300">
                Alpha Net là cộng đồng dành cho những người muốn hiểu rõ thị trường Crypto và giao dịch theo tư duy của dòng tiền lớn – không chạy theo tin đồn hay cảm xúc.
              </p>

              <ul className="space-y-3">
                {[
                  "Cộng đồng thực chiến với hàng nghìn trader tham gia mỗi ngày, nơi mọi kiến thức được chia sẻ minh bạch và miễn phí.",
                  "Đội ngũ hướng dẫn có kinh nghiệm nhiều năm trong thị trường Futures, luôn đồng hành và hỗ trợ trực tiếp từng hội viên.",
                  "Phương pháp trọng tâm: Đọc dòng tiền, nắm bắt vùng thanh khoản & hành vi giá – giúp trader hiểu “vì sao” thay vì chỉ “khi nào vào lệnh”.",
                  "Đã hỗ trợ hơn 1.000 trader, nhiều người đạt được sự ổn định và tự tin trong giao dịch thực tế."
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
              {/* Social icons */}
              <div className="flex gap-5 text-xl text-white">
                <a href='https://t.me/Crypt0vn' target='_blank' className='cursor-pointer border border-[var(--second)] rounded p-2 flex justify-center items-center'>
                  <FaTelegramPlane />
                </a>
                <a href='https://www.facebook.com/profile.php?id=100079515246834' target='_blank' className='cursor-pointer border border-[var(--second)] rounded p-2 flex justify-center items-center'>
                  <FaFacebookF />
                </a>
                <a href='https://zalo.me/g/dxxkfh223' target='_blank' className='cursor-pointer border border-[var(--second)] rounded p-2 flex justify-center items-center'>
                  <SiZalo />
                </a>
                <a href='https://www.tiktok.com/search?q=ALPHANET&t=1760590899718' target='_blank' className='cursor-pointer border border-[var(--second)] rounded p-2 flex justify-center items-center'>
                  <FaTiktok />
                </a>
                <a href='tel:0586636343' target='_blank' className='cursor-pointer border border-[var(--second)] rounded p-2 flex justify-center items-center'>
                  <FaPhoneAlt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#160000] border-t border-red-700">
        <div className="container mx-auto">
          <h3 className="text-center text-2xl md:text-3xl font-semibold text-white mb-10">
            NHỮNG THÀNH TỰU CỦA CỘNG ĐỒNG ALPHA NET
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 text-white text-sm md:text-base">
            <div className="flex text-red-600 items-start space-x-3 mt-8 ">
              <span className="text-red-600 text-5xl mt-0.5">⚙️</span>
              <p>
                Xây dựng cộng đồng hơn 500 trader thực chiến mỗi ngày
                Nơi chia sẻ góc nhìn, tín hiệu và kinh nghiệm thực tế từ thị trường Crypto.
              </p>
            </div>
            <div className="flex text-red-600 items-start space-x-3 mt-8">
              <span className="text-red-600 text-5xl mt-0.5">⚙️</span>
              <p>
                Phát triển phương pháp giao dịch và nhiều công cụ hỗ trợ & Đọc dòng tiền thông minh
                Ứng dụng cấu trúc giá, vùng thanh khoản và hành vi dòng tiền lớn vào thực chiến.
              </p>
            </div>
            <div className="flex text-red-600 items-start space-x-3 mt-8">
              <span className="text-red-600 text-5xl mt-0.5">⚙️</span>
              <p>
                Tạo hệ thống đào tạo & mentoring bài bản
                Từ nền tảng cơ bản đến nâng cao – hướng dẫn cầm tay chỉ việc cho trader mới.
              </p>
            </div>
            <div className="flex text-red-600 items-start space-x-3 mt-8">
              <span className="text-red-600 text-5xl mt-0.5">⚙️</span>
              <p>
                Cung cấp tín hiệu & phân tích thực tế mỗi ngày
                Giúp hội viên hiểu rõ “vì sao vào lệnh” thay vì chỉ “khi nào vào lệnh”.
              </p>
            </div>
            <div className="flex text-red-600 items-start space-x-3 mt-8">
              <span className="text-red-600 text-5xl mt-0.5">⚙️</span>
              <p>Gắn kết & phát triển bền vững
                Môi trường học hỏi, chia sẻ và hỗ trợ lẫn nhau – cùng tiến, cùng hiểu thị trường.
              </p>
            </div>
          </div>
        </div>

        {/* FEEDBACK HỌC VIÊN */}
        <div className="container mx-auto mt-16 text-center" id="feedback">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            FEEDBACK CỦA CÁC THÀNH VIÊN
          </h3>
          <p className="text-red-500 mb-8 uppercase tracking-wide text-3xl">
            SAU KHI THAM GIA CỘNG ĐỒNG
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            <Image
              width={500}
              height={500}
              src="/assets/1.png"
              alt="Feedback 1"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            <Image
              width={500}
              height={500}
              src="/assets/2.png"
              alt="Feedback 2"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            <Image
              width={500}
              height={500}
              src="/assets/3.png"
              alt="Feedback 3"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            <Image
              width={500}
              height={500}
              src="/assets/4.png"
              alt="Feedback 3"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            <Image
              width={500}
              height={500}
              src="/assets/5.png"
              alt="Feedback 3"
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
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT - Image */}
          <div className="flex justify-center">
            <Image
              width={500}
              height={500}
              src="/kh.jpeg"
              alt="Trader Image"
              className="rounded-lg border-4 border-red-700 shadow-[0_0_30px_rgba(255,0,0,0.4)] max-w-md"
            />
          </div>

          {/* RIGHT - Content */}
          <div className="text-white">
            <h3 className="text-red-600 font-bold uppercase text-lg mb-2">
              Cộng Đồng Này
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
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT - Text Content */}
          <div>
            <h3 className="text-red-600 font-bold uppercase text-lg">
              Quyền lợi bạn sẽ nhận được
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-6">
              KHI THAM GIA CỘNG ĐỒNG ALPHANET
            </h2>
            <div className="h-[2px] w-20 bg-red-600 mb-6"></div>

            <div className="space-y-4">
              {[
                "Được hỗ trợ kèm 1-1 từ chuyên gia",
                "Nhận các chỉ miễn phí độc quyền của cộng đồng",
                "Nhận từ 3 - 5 tín hiệu chuẩn phương pháp",
                "Hỗ trợ hoàn Vol giao dịch mỗi tuần",
                "Hỗ thua lỗ nếu vào lệnh rủi ro",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 bg-red-900/70 border border-red-700 px-5 py-3 rounded-md w-full"
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
            <Image
              width={500}
              height={500}
              src="/assets/alpha.png"
              alt="Time is Money"
              className="rounded-lg max-w-md"
            />
          </div>
        </div>
      </section>

      {/* 3 cột nội dung */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#160000] border-t border-red-700">
        <div className="container mx-auto text-center">
          {/* Tiêu đề */}
          <p className="text-red-500 text-sm md:text-base tracking-wide mb-2 uppercase">
            TẠI SAO BẠN PHẢI
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 uppercase">
            THAM GIA alpha net
          </h3>

          {/* Grid 3 Box */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-[#1a0000] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300">
              <Image
                width={500}
                height={500}
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
              <Image
                width={500}
                height={500}
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
              <Image
                width={500}
                height={500}
                src="/trader-chart.jpg"
                alt="img"
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
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-start">
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
                "Khóa học 2 buổi “Bí Quyết Sống Sót Cùng Crypto – Nến Thanh Khoản” trị giá 5.000.000 VNĐ → Nay chỉ 0đ",
                "Chỉ báo Nến Thanh Khoản độc quyền – Chỉ cấp cho các học viên",
                "3–5 tín hiệu chuẩn phương pháp mỗi ngày, trực tiếp từ team phân tích",
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
                Tham gia miễn phí ngay! <br /> Chỉ dành cho{" "}
                <span className="text-white">Thành viên</span> đăng ký nhanh nhất
              </p>

              <ContactForm />

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
                  <span className="font-semibold">Giảng viên:</span> Thế Bảo
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
    </div >
  );
}
