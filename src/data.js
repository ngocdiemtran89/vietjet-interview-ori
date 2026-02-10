export const database = {
    // Loại 1: KHÁCH HÀNG ĐÚNG -> Lỗi dịch vụ, sự cố khách quan
    customer_service: [
        {
            q: "A passenger complains about late meal service. (Khách đúng - Lỗi dịch vụ)",
            framework: "Công thức: L.E.A.P (Listen - Empathize - Apologize - Problem Solve)",
            hint: "Tư duy chuyên gia:\n- Đây là lúc khách ĐÚNG. Đừng bào chữa.\n- Tông giọng: Nhẹ nhàng, hối lỗi (Apologetic tone).\n- Key: Xin lỗi chân thành -> Giải thích ngắn -> Mời nước/snack ngay.",
            sample: "• [Listen & Empathize]: I would listen fully without interrupting to show I care.\n• [Apologize]: 'I am terribly sorry for the delay, sir.'\n• [Problem Solve]: 'Please allow me to bring you some nuts and a drink immediately while we prepare your meal.'\nResult: Turn a complaint into a compliment."
        },
        {
            q: "You accidentally spilled a drink on a passenger. (Khách đúng - Lỗi của bạn)",
            framework: "Công thức: H.E.A.T (Hear - Empathize - Apologize - Take Action)",
            hint: "Tư duy chuyên gia:\n- Lỗi thuộc về BẠN 100%.\n- Hành động: Khăn giấy ngay lập tức -> Xin lỗi -> Hỗ trợ làm sạch -> Đề nghị bồi thường (Dry cleaning).\n- Tuyệt đối không đổ lỗi cho nhiễu động (turbulence) nếu không có.",
            sample: "• [Immediate Action]: I would immediately offer towels to help clean up.\n• [Apologize]: 'I am so sorry, this was clumsy of me.'\n• [Take Action]: I would provide wet wipes, offer a proactive amenity kit, and inform the Purser to arrange dry cleaning compensation upon arrival."
        },
        {
            q: "A passenger's TV screen is broken. (Khách đúng - Lỗi thiết bị)",
            framework: "Công thức: Validate & Compensate",
            hint: "Tư duy chuyên gia:\n- Thiết bị hỏng làm giảm trải nghiệm 5 sao.\n- Giải pháp: Reset -> Đổi chỗ (nếu còn) -> Offer dịch vụ khác (báo, tạp chí, iPad dự phòng).",
            sample: "• [Validate]: I would apologize for the inconvenience as entertainment is important.\n• [Solve]: I will try to reset the system. If it fails, I will check for an empty seat to move him.\n• [Compensate]: If the flight is full, I will offer extra snacks, magazines, or a tablet if available to keep him entertained."
        }
    ],

    // Loại 2: KHÁCH HÀNG SAI / VI PHẠM -> An toàn là trên hết
    customer_compliance: [
        {
            q: "A passenger refuses to fasten the seatbelt during turbulence. (Khách sai - An toàn)",
            framework: "Công thức: E.E.C (Empathize - Explain - Choice/Consequence)",
            hint: "Tư duy chuyên gia:\n- Đừng xin lỗi! An toàn là quy định.\n- Tông giọng: Assertive (Quả quyết) nhưng không thô lỗ.\n- Cách nói: 'Vì sự an toàn của BẠN' (For your safety) chứ không phải 'Vì luật của tôi'.",
            sample: "• [Empathize]: 'I know it is uncomfortable, sir.'\n• [Explain]: 'However, we are passing through turbulence and it is unsafe to be loose.'\n• [Choice/Instruction]: 'Please fasten it now so we can ensure your safety.' (Do not ask 'Can you?', say 'Please do it')."
        },
        {
            q: "You catch a passenger smoking in the lavatory. (Khách sai - Vi phạm luật)",
            framework: "Công thức: Zero Tolerance (Không khoan nhượng)",
            hint: "Tư duy chuyên gia:\n- Đây là tình huống nguy hiểm cháy nổ.\n- Hành động: Yêu cầu dập thuốc NGAY -> Cảnh báo -> Báo cáo cơ trưởng.\n- Không cười cợt, mặt nghiêm nghị (Serious face).",
            sample: "• [Immediate Action]: I would knock and firmly ask the passenger to extinguish the cigarette immediately.\n• [Explain]: 'Smoking is strictly prohibited and poses a fire hazard to the entire aircraft.'\n• [Enforce]: I would remind him that this is a violation of aviation law and I must report this to the Captain. Safety is non-negotiable."
        },
        {
            q: "A drunk passenger asks for more alcohol. (Khách sai - Kiểm soát)",
            framework: "Công thức: Traffic Light System (Green -> Yellow -> Red)",
            hint: "Tư duy chuyên gia:\n- Ngừng phục vụ (Stop serving) là bắt buộc.\n- Kỹ thuật: Đừng nói 'No'. Hãy nói 'Not now' hoặc mời nước ngọt.\n- Đổ lỗi cho quy định: 'It's against the law to serve intoxicated passengers'.",
            sample: "• [Assess]: I notice his behavior is disruptive (Red light).\n• [Refuse politely]: 'I'm afraid I cannot serve you more alcohol right now as per safety regulations.'\n• [Alternative]: 'Would you like a glass of water or some coffee instead to help you refresh?'"
        }
    ],

    intro_motivation: [
        {
            q: "Please introduce yourself.",
            framework: "Công thức: P.P.F (Past - Present - Future)",
            hint: "Past: Tên, tuổi, quê quán, học vấn/kinh nghiệm cũ.\nPresent: Tính cách, kỹ năng nổi bật hiện tại.\nFuture: Mục tiêu nghề nghiệp, lý do thi tuyển.",
            sample: "• [Past]: My name is [Name], 22 years old. I have a degree in Tourism and 1 year of experience in customer service.\n• [Present]: I am a person with high energy and a 'can-do' attitude. I love taking care of others and working in a team.\n• [Future]: That is why I want to become a cabin crew member at Vietjet, where I can turn my passion for service into a professional career."
        },
        {
            q: "Why Vietjet Air?",
            framework: "Công thức: Culture Match (Sự phù hợp văn hóa)",
            hint: "Identify: Đặc điểm hãng (Trẻ, Năng động, Giá rẻ, Mạng lưới rộng).\nConnect: Đặc điểm của BẠN (Thích thử thách, Nhanh nhẹn, Hướng ngoại).",
            sample: "• [Identify]: I admire Vietjet because of its dynamic, youthful, and fast-growing culture. It’s an airline that makes flying possible for everyone.\n• [Connect]: This matches my personality perfectly. I am young, adaptable, and I thrive in fast-paced environments. I want to grow my career along with the airline's expansion."
        }
    ],
    coworker_difficulty: [
        {
            q: "Your colleague is very slow in serving passengers. What would you do?",
            framework: "Công thức: Support First - Discuss Later",
            hint: "Mindset: Khách hàng là ưu tiên số 1.\nAction 1: Cover (Làm giúp phần của bạn để đảm bảo dịch vụ).\nAction 2: Private Chat (Hỏi thăm riêng sau khi xong việc).",
            sample: "• [Support First]: During the service, my priority is the passengers. I would speed up my section and then immediately go over to assist her without complaining.\n• [Discuss Later]: After the flight, I would have a private conversation to ask if she was feeling unwell or facing any difficulties, so we can improve together next time."
        }
    ],
    stress: [
        {
            q: "How do you handle stress on long flights?",
            framework: "Công thức: Physical & Mental Balance",
            hint: "Physical: Uống nước, hít thở, giãn cơ.\nMental: Chia nhỏ công việc, giữ thái độ tích cực.",
            sample: "• [Physical]: To handle stress physically, I stay hydrated and take deep breaths whenever I have a few seconds of break.\n• [Mental]: Mentally, I focus on one task at a time instead of worrying about everything. I remind myself that a smiling crew makes happy passengers, and that motivates me to keep going."
        }
    ]
};
