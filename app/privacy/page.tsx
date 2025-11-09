import React from 'react'

const Page = () => {
    return (
        <section className={`mx-auto max-w-3xl px-6 py-10 leading-relaxed `}>
            <header className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-semibold">⚠️ CHÍNH SÁCH BẢO MẬT THÔNG TIN</h1>
                <p className="mt-2 text-sm text-gray-500">Cập nhật lần cuối: 20/10/2025</p>
            </header>


            <div className="space-y-8 text-base">
                <section>
                    <h2 className="text-xl font-semibold">Cảnh Báo Quan Trọng</h2>
                    <p className="mt-3">
                        Cộng đồng Alpha Net cam kết bảo vệ quyền riêng tư và dữ liệu cá nhân của bạn. Chính sách này giải thích cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ thông tin người dùng khi bạn truy cập hoặc sử dụng các nền tảng của Alpha Net.
                    </p>

                </section>


                <section>
                    <h2 className="text-xl font-semibold">1. Mục Đích Thông Tin</h2>
                    <p className="mt-3">
                        Chúng tôi có thể thu thập các loại thông tin sau:
                    </p>
                    <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li>Thông tin cá nhân: Họ tên, số điện thoại, email, tài khoản mạng xã hội (nếu bạn đăng ký qua Zalo, Telegram, Facebook, v.v.)</li>
                        <li>Thông tin kỹ thuật: Địa chỉ IP, loại trình duyệt, hệ điều hành, thiết bị sử dụng.</li>
                        <li>Dữ liệu sử dụng: Thời gian truy cập, hành vi duyệt web, các trang đã xem, lượt click.</li>
                        <li>Cookies và công nghệ tương tự: Nhằm lưu trữ tùy chọn người dùng, cải thiện tốc độ tải trang, và tối ưu trải nghiệm tổng thể.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">2. Mục Đích Sử Dụng Thông Tin</h2>
                    <p className="mt-3">
                        Chúng tôi sử dụng thông tin thu thập được để:
                    </p>
                    <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li>Cung cấp dịch vụ và hỗ trợ thành viên trong các nhóm, khóa học hoặc sự kiện của Alpha Net.</li>
                        <li>Cải thiện chất lượng dịch vụ, website và trải nghiệm người dùng.</li>
                        <li>Gửi thông tin, cập nhật, hoặc thông báo liên quan đến hoạt động cộng đồng (không phải khuyến nghị đầu tư).</li>
                        <li>Tuân thủ yêu cầu pháp lý, bảo mật hoặc quy định từ cơ quan chức năng.</li>
                    </ul>
                </section>


                <section>
                    <h2 className="text-xl font-semibold">3. Bảo Mật Dữ Liệu Cá Nhân</h2>
                    <p className="mt-3">Chúng tôi áp dụng nhiều biện pháp kỹ thuật và tổ chức để bảo vệ thông tin của bạn:</p>
                    <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li>Mã hóa SSL/TLS cho toàn bộ dữ liệu truyền tải giữa trình duyệt và máy chủ.</li>
                        <li>Lưu trữ dữ liệu trên hệ thống máy chủ bảo mật cao, đặt tại trung tâm dữ liệu đạt chuẩn quốc tế.</li>
                        <li>Kiểm soát truy cập nghiêm ngặt, chỉ cho phép nhân sự có thẩm quyền được tiếp cận thông tin cần thiết.</li>
                        <li>Sao lưu dữ liệu định kỳ để ngăn ngừa mất mát.</li>
                        <li>Giám sát hệ thống 24/7 nhằm phát hiện và xử lý sớm các rủi ro bảo mật.</li>
                    </ul>
                    <p className="mt-3">Tuy nhiên, không có hệ thống nào an toàn tuyệt đối. Bạn cần giữ kín thông tin tài khoản cá nhân và không chia sẻ với bên thứ ba.</p>
                </section>


                <section>
                    <h2 className="text-xl font-semibold">4. Chia Sẻ Thông Tin</h2>
                    <p className="mt-3">Alpha Net cam kết KHÔNG BAO GIỜ:</p>
                    <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li>Bán, cho thuê hoặc trao đổi thông tin cá nhân của người dùng.</li>
                        <li>Chia sẻ thông tin với bên thứ ba không liên quan đến dịch vụ hoặc nghĩa vụ pháp lý.</li>
                        <li>Sử dụng thông tin cho mục đích spam hoặc quảng cáo không mong muốn.</li>
                        <li>Tiết lộ thông tin cá nhân nếu không có sự đồng ý của bạn, trừ khi được yêu cầu hợp pháp bởi cơ quan chức năng.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl font-semibold">5. Quyền Của Người Dùng</h2>
                    <p className="mt-3">Theo chính sách bảo mật của Alpha Net, bạn có quyền:</p>
                    <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li>Truy cập và xem lại thông tin cá nhân mà chúng tôi lưu trữ.</li>
                        <li>Yêu cầu chỉnh sửa, cập nhật hoặc xóa thông tin nếu thấy không chính xác.</li>
                        <li>Từ chối nhận email marketing hoặc thông báo quảng cáo.</li>
                        <li>Khiếu nại về việc xử lý dữ liệu cá nhân, và chúng tôi cam kết phản hồi trong thời gian sớm nhất.</li>
                        <li>Mọi yêu cầu có thể được gửi qua email: truyenthongalpha01@gmail.com </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">6. Sử Dụng Cookies</h2>
                    <p className="mt-3">Website của chúng tôi sử dụng cookies để ghi nhớ tùy chọn của người dùng, phân tích hành vi truy cập và cải thiện trải nghiệm tổng thể.</p>
                    <p className="mt-3">Bạn có thể tắt cookies trong phần cài đặt trình duyệt, tuy nhiên điều này có thể làm giảm chức năng của website.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">7. Thời Gian Lưu Trữ Dữ Liệu</h2>
                    <p className="mt-3">Thông tin cá nhân của bạn được lưu trữ chỉ trong thời gian cần thiết để thực hiện các mục đích nêu trên, hoặc lâu hơn nếu được yêu cầu bởi pháp luật. Sau khi hết thời hạn, dữ liệu sẽ được xóa hoặc ẩn danh hóa an toàn.</p>
                </section>
                <section>
                    <h2 className="text-xl font-semibold">8. Liên Hệ Với Chúng Tôi</h2>
                    <p className="mt-3">
                        Nếu bạn có bất kỳ câu hỏi, yêu cầu, hoặc phản hồi nào liên quan đến Chính sách Bảo mật này, vui lòng liên hệ: {" "}
                        <a className="underline" href={`mailto:truyenthongalpha01@gmail.com`}>truyenthongalpha01@gmail.com</a>.
                    </p>
                </section>
            </div>
        </section>
    )
}

export default Page