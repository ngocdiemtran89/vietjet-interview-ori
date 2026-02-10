export const database = {
    // ═══════════════════════════════════════════════════════════
    // LOẠI 1: KHÁCH HÀNG ĐÚNG -> Lỗi dịch vụ, sự cố khách quan
    // ═══════════════════════════════════════════════════════════
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
        },
        {
            q: "A passenger's luggage was placed in the wrong overhead bin by another crew. (Khách đúng - Lỗi phi hành đoàn)",
            framework: "Công thức: Own It & Fix It",
            hint: "Tư duy chuyên gia:\n- Không đổ lỗi cho đồng nghiệp trước mặt khách.\n- Hành động: Xin lỗi -> Tìm và trả lại hành lý -> Đảm bảo hành lý an toàn.",
            sample: "• [Own It]: 'I apologize for the mix-up, let me locate your bag right away.'\n• [Fix It]: I would quickly find the luggage and place it in the correct bin near the passenger's seat.\n• [Reassure]: 'Your bag is now safely stored above your seat. Please let me know if you need anything else.'"
        },
        {
            q: "A passenger complains the cabin is too cold. (Khách đúng - Môi trường)",
            framework: "Công thức: Acknowledge & Act",
            hint: "Tư duy chuyên gia:\n- Nhiệt độ cabin ảnh hưởng comfort trực tiếp.\n- Giải pháp: Cung cấp chăn -> Báo cáo điều chỉnh nhiệt độ -> Follow up.",
            sample: "• [Acknowledge]: 'I'm sorry you feel cold. Let me help you right away.'\n• [Act]: I would provide a blanket immediately and offer a hot drink.\n• [Follow Up]: I would contact the flight deck to check if cabin temperature can be adjusted, then return to confirm the passenger feels more comfortable."
        },
        {
            q: "A passenger did not receive their pre-ordered special meal. (Khách đúng - Lỗi hệ thống)",
            framework: "Công thức: Apologize - Investigate - Compensate",
            hint: "Tư duy chuyên gia:\n- Đây là lời hứa chưa được thực hiện (broken promise).\n- Kiểm tra manifest -> Xin lỗi -> Tìm giải pháp thay thế gần nhất.\n- Báo cáo Purser để ghi nhận incident.",
            sample: "• [Apologize]: 'I sincerely apologize. Your special meal should have been loaded and I understand your frustration.'\n• [Investigate]: I would check with the galley and the catering manifest to find out what happened.\n• [Compensate]: 'While I investigate, may I offer you a selection from our regular menu that is closest to your dietary needs? I will also file a report so this does not happen again.'"
        },
        {
            q: "A passenger's seat recline function is not working. (Khách đúng - Lỗi kỹ thuật)",
            framework: "Công thức: Try - Relocate - Compensate",
            hint: "Tư duy chuyên gia:\n- Ghế hỏng = giảm comfort, đặc biệt chuyến bay dài.\n- Thử fix -> Đổi chỗ -> Nếu không được, compensate bằng dịch vụ.",
            sample: "• [Try]: I would first try to adjust the seat manually or reset the mechanism.\n• [Relocate]: If it cannot be fixed, I would check for available seats and offer to move the passenger.\n• [Compensate]: If no seat is available, I would provide extra pillows for comfort and offer complimentary refreshments with a sincere apology."
        },
        {
            q: "A family with a baby complains there is no bassinet available. (Khách đúng - Thiếu thiết bị)",
            framework: "Công thức: Empathize - Solution - Extra Care",
            hint: "Tư duy chuyên gia:\n- Gia đình có em bé = nhạy cảm, cần xử lý tinh tế.\n- Kiểm tra lại inventory -> Đổi chỗ bulkhead nếu có -> Hỗ trợ tối đa.",
            sample: "• [Empathize]: 'I completely understand how important this is for you and your baby. I'm sorry for the inconvenience.'\n• [Solution]: I would check if a bulkhead row is available for the bassinet. If not, I would provide extra blankets to create a comfortable setup.\n• [Extra Care]: I would check on the family regularly and offer priority assistance throughout the flight."
        },
        {
            q: "A passenger's connecting flight information was given incorrectly by ground staff. (Khách đúng - Lỗi thông tin)",
            framework: "Công thức: Clarify - Correct - Coordinate",
            hint: "Tư duy chuyên gia:\n- Thông tin sai từ mặt đất = stress cho khách.\n- Bình tĩnh xác minh -> Cung cấp thông tin đúng -> Liên hệ ground team.",
            sample: "• [Clarify]: 'Let me check the correct information for your connecting flight right away.'\n• [Correct]: I would use the flight information system to confirm the gate, time, and terminal.\n• [Coordinate]: I would contact ground staff at the destination to arrange assistance if the connection is tight, and reassure the passenger that they will be taken care of."
        },
        {
            q: "A passenger complains about a strong odor from the lavatory. (Khách đúng - Vệ sinh)",
            framework: "Công thức: Act Fast - Apologize - Prevent",
            hint: "Tư duy chuyên gia:\n- Vệ sinh ảnh hưởng trực tiếp đến trải nghiệm.\n- Hành động nhanh: Kiểm tra -> Làm sạch -> Xịt khử mùi -> Xin lỗi khách.",
            sample: "• [Act Fast]: I would immediately check and clean the lavatory, using air freshener and sanitizer.\n• [Apologize]: 'I'm sorry about the discomfort. I've taken care of it now.'\n• [Prevent]: I would increase the frequency of lavatory checks for the rest of the flight and offer to move the passenger if possible."
        }
    ],

    // ═══════════════════════════════════════════════════════════
    // LOẠI 2: KHÁCH HÀNG SAI / VI PHẠM -> An toàn là trên hết
    // ═══════════════════════════════════════════════════════════
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
        },
        {
            q: "A passenger refuses to put their seat upright for landing. (Khách sai - Quy định)",
            framework: "Công thức: Regulation First - Firm & Kind",
            hint: "Tư duy chuyên gia:\n- Ghế phải thẳng khi cất/hạ cánh là quy định bắt buộc.\n- Giải thích lý do an toàn (evacuation path) -> Yêu cầu rõ ràng.",
            sample: "• [Explain]: 'Sir/Ma'am, all seats must be in the upright position for landing. This is required so that the passengers behind you have a clear path in case of emergency.'\n• [Firm Request]: 'Please bring your seat upright now. Thank you for your cooperation.'\n• [Escalate]: If the passenger still refuses, I would inform the Purser immediately as we cannot proceed with landing until all seats are upright."
        },
        {
            q: "A passenger uses their phone during takeoff despite announcements. (Khách sai - Thiết bị điện tử)",
            framework: "Công thức: Polite Reminder - Explain Why - Final Warning",
            hint: "Tư duy chuyên gia:\n- Thiết bị điện tử có thể gây nhiễu sóng.\n- Lần 1: Nhắc nhẹ. Lần 2: Giải thích. Lần 3: Báo Purser.",
            sample: "• [Polite Reminder]: 'Excuse me, may I kindly ask you to switch your phone to airplane mode? We are about to take off.'\n• [Explain Why]: 'Electronic devices can interfere with the aircraft's navigation system during critical phases of flight.'\n• [Final Warning]: If they still refuse, 'I understand, but this is a mandatory safety regulation. I will need to inform my senior crew member if you cannot comply.'"
        },
        {
            q: "Two passengers are arguing loudly and disturbing others. (Khách sai - Gây rối)",
            framework: "Công thức: Separate - De-escalate - Report",
            hint: "Tư duy chuyên gia:\n- Ưu tiên: Tách 2 người -> Bình tĩnh hóa -> Báo cáo.\n- Không chọn phe. Giữ trung lập.\n- Nếu có thể, đổi chỗ 1 trong 2 người.",
            sample: "• [Separate]: I would calmly approach and say 'Excuse me, I can see there is a disagreement. Let me help.'\n• [De-escalate]: I would speak to each person individually, listen to both sides, and offer to move one passenger to another seat.\n• [Report]: I would inform the Purser about the situation and keep monitoring to ensure the issue does not escalate further."
        },
        {
            q: "A passenger stands up and opens the overhead bin during turbulence. (Khách sai - Nguy hiểm)",
            framework: "Công thức: Immediate Safety Action",
            hint: "Tư duy chuyên gia:\n- Đứng dậy khi có turbulence = nguy hiểm cho bản thân và người khác.\n- Hành động: Yêu cầu ngồi xuống NGAY -> Hỗ trợ lấy đồ SAU khi an toàn.",
            sample: "• [Immediate]: 'Sir/Ma'am, please sit down immediately! The seatbelt sign is on for your safety.'\n• [Assist]: 'I will be happy to get whatever you need from your bag once the turbulence has passed. Please remain seated with your seatbelt fastened.'\n• [Follow Up]: Once safe, I would retrieve the item for the passenger and explain the dangers of standing during turbulence."
        },
        {
            q: "A passenger blocks the aisle with their belongings. (Khách sai - Cản lối đi)",
            framework: "Công thức: Safety Compliance - Helpful Tone",
            hint: "Tư duy chuyên gia:\n- Lối đi phải thông thoáng cho evacuate.\n- Giúp khách cất đồ thay vì chỉ yêu cầu.",
            sample: "• [Approach]: 'I notice you have some items in the aisle. For everyone's safety, the aisle needs to remain clear at all times.'\n• [Help]: 'Let me help you store these in the overhead bin or under the seat in front of you.'\n• [Explain]: 'In case of an emergency, a clear aisle is essential for a quick evacuation. Thank you for understanding.'"
        },
        {
            q: "A passenger tries to switch to a premium seat without paying. (Khách sai - Vi phạm quy định)",
            framework: "Công thức: Polite Boundary - Firm Policy",
            hint: "Tư duy chuyên gia:\n- Không được phép tự ý đổi chỗ lên hạng cao hơn.\n- Giữ thái độ lịch sự nhưng kiên quyết.\n- Nếu khách aggressive, báo Purser.",
            sample: "• [Polite]: 'I can see you've moved to this seat. Unfortunately, this is a premium seat that requires an upgrade fee.'\n• [Firm]: 'I need to ask you to return to your assigned seat. I apologize for any inconvenience.'\n• [Alternative]: 'If you are interested in upgrading, I can check if that option is available and let you know the cost.'"
        },
        {
            q: "A passenger verbally abuses you because of a flight delay. (Khách sai - Lăng mạ)",
            framework: "Công thức: Stay Calm - Set Boundary - Escalate",
            hint: "Tư duy chuyên gia:\n- KHÔNG bao giờ phản ứng lại bằng cảm xúc.\n- Giữ khoảng cách an toàn, giọng bình tĩnh.\n- Sau 2 lần cảnh báo, báo Purser/Captain.",
            sample: "• [Stay Calm]: I would remain composed and say 'I understand your frustration about the delay. I am here to help.'\n• [Set Boundary]: 'However, I would appreciate it if we could communicate respectfully so I can assist you better.'\n• [Escalate]: If the behavior continues, I would say 'I need to involve my senior crew member to help resolve this for you' and inform the Purser immediately."
        }
    ],

    // ═══════════════════════════════════════════════════════════
    // LOẠI 3: GIỚI THIỆU BẢN THÂN & ĐỘNG LỰC
    // ═══════════════════════════════════════════════════════════
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
            sample: "• [Identify]: I admire Vietjet because of its dynamic, youthful, and fast-growing culture. It's an airline that makes flying possible for everyone.\n• [Connect]: This matches my personality perfectly. I am young, adaptable, and I thrive in fast-paced environments. I want to grow my career along with the airline's expansion."
        },
        {
            q: "Why do you want to become a cabin crew member?",
            framework: "Công thức: Passion - Skills - Vision",
            hint: "Passion: Đam mê phục vụ, du lịch, giao tiếp.\nSkills: Kỹ năng bạn đã có phù hợp (communication, problem-solving).\nVision: Tầm nhìn dài hạn trong ngành hàng không.",
            sample: "• [Passion]: Ever since I was young, I have been passionate about traveling and meeting people from different cultures.\n• [Skills]: With my background in hospitality, I have developed strong communication and problem-solving skills.\n• [Vision]: Being a cabin crew member combines everything I love — service, travel, and teamwork. I see this as a long-term career where I can grow professionally."
        },
        {
            q: "What are your strengths?",
            framework: "Công thức: Strength + Evidence + Relevance",
            hint: "Chọn 2-3 điểm mạnh liên quan đến cabin crew.\nĐưa ra ví dụ cụ thể (STAR method).\nKết nối với công việc tiếp viên.",
            sample: "• [Strength 1]: My greatest strength is adaptability. In my previous job at a hotel, I had to handle unexpected situations daily, from VIP complaints to last-minute event changes.\n• [Strength 2]: I am also a strong team player. I believe cabin crew is about working as one unit, and I always support my colleagues.\n• [Relevance]: These skills are exactly what a Vietjet cabin crew needs — the ability to adapt quickly and work seamlessly with the team."
        },
        {
            q: "What is your biggest weakness?",
            framework: "Công thức: Honest Weakness + Action to Improve",
            hint: "Chọn điểm yếu thật nhưng KHÔNG critical cho công việc.\nChứng minh bạn đang cải thiện.\nKhông nói: 'I have no weakness' hoặc 'I'm a perfectionist'.",
            sample: "• [Honest]: I used to be nervous when speaking in front of large groups.\n• [Action]: To overcome this, I joined a public speaking club and practiced regularly. Now I feel much more confident presenting to groups of any size.\n• [Result]: This experience taught me that weaknesses can become strengths with dedication."
        },
        {
            q: "Tell me about a time you provided excellent customer service.",
            framework: "Công thức: S.T.A.R (Situation - Task - Action - Result)",
            hint: "Chọn tình huống thực tế.\nNhấn mạnh hành động CHỦ ĐỘNG (proactive) của bạn.\nKết quả phải positive (khách hài lòng, feedback tốt).",
            sample: "• [Situation]: At my previous hotel job, a guest arrived exhausted after a cancelled flight and was very upset.\n• [Task]: I needed to calm the guest and make their stay special.\n• [Action]: I upgraded their room, arranged a welcome fruit basket, and personally ensured a quiet room away from the elevator.\n• [Result]: The guest left a 5-star review mentioning my name and became a returning customer."
        },
        {
            q: "Where do you see yourself in 5 years?",
            framework: "Công thức: Growth Within the Company",
            hint: "Thể hiện commitment dài hạn với hãng.\nMục tiêu: Cabin crew -> Senior crew -> Purser/Trainer.\nĐừng nói 'I want to be a pilot' hoặc 'I want to open my own business'.",
            sample: "• [Short-term]: In the first 2 years, I want to master all safety procedures and become a reliable crew member that my team can count on.\n• [Mid-term]: By year 3-4, I aim to become a senior cabin crew and mentor new recruits.\n• [Long-term]: In 5 years, I hope to become a Purser or training instructor, contributing to Vietjet's service excellence."
        },
        {
            q: "What do you know about Vietjet Air?",
            framework: "Công thức: Facts - Values - Impression",
            hint: "Facts: Năm thành lập 2011, LCC lớn nhất VN, bay hơn 100 đường bay.\nValues: Safe, Fun, Affordable.\nImpression: Cảm nhận cá nhân liên kết với hãng.",
            sample: "• [Facts]: Vietjet Air was established in 2011 and has grown to become Vietnam's largest low-cost carrier with over 100 routes across Asia.\n• [Values]: The airline's motto is to make flying affordable and enjoyable for everyone, with the brand image of being young, dynamic, and innovative.\n• [Impression]: What impresses me most is how Vietjet has made air travel accessible to millions of Vietnamese people who previously could not afford to fly."
        },
        {
            q: "Describe yourself in 3 words.",
            framework: "Công thức: Word + Why + Example",
            hint: "Chọn 3 từ liên quan cabin crew: Adaptable, Caring, Energetic, etc.\nMỗi từ kèm 1 câu giải thích ngắn.\nĐừng chọn quá chung chung (nice, good, kind).",
            sample: "• [Word 1 - Adaptable]: I can adjust quickly to any situation. Whether it's a schedule change or an unexpected passenger request, I stay calm and find a solution.\n• [Word 2 - Empathetic]: I genuinely care about people's feelings. This helps me connect with passengers and provide personalized service.\n• [Word 3 - Resilient]: I don't give up easily. Long hours and challenging situations motivate me to push harder."
        },
        {
            q: "What makes you different from other candidates?",
            framework: "Công thức: Unique Selling Point (USP)",
            hint: "Tìm điểm ĐẶC BIỆT của bạn (kinh nghiệm, kỹ năng, tính cách).\nKhông nói xấu ứng viên khác.\nThể hiện sự tự tin nhưng không kiêu ngạo.",
            sample: "• [USP]: What sets me apart is my combination of hospitality experience and language skills. I speak Vietnamese, English fluently, and conversational Korean.\n• [Evidence]: This allows me to serve a wider range of passengers, especially on Vietjet's growing international routes to Korea and Japan.\n• [Attitude]: Beyond skills, I bring genuine passion. I don't just want a job — I want to build a career that I wake up excited about every day."
        }
    ],

    // ═══════════════════════════════════════════════════════════
    // LOẠI 4: ĐỒNG NGHIỆP KHÓ KHĂN / LÀM VIỆC NHÓM
    // ═══════════════════════════════════════════════════════════
    coworker_difficulty: [
        {
            q: "Your colleague is very slow in serving passengers. What would you do?",
            framework: "Công thức: Support First - Discuss Later",
            hint: "Mindset: Khách hàng là ưu tiên số 1.\nAction 1: Cover (Làm giúp phần của bạn để đảm bảo dịch vụ).\nAction 2: Private Chat (Hỏi thăm riêng sau khi xong việc).",
            sample: "• [Support First]: During the service, my priority is the passengers. I would speed up my section and then immediately go over to assist her without complaining.\n• [Discuss Later]: After the flight, I would have a private conversation to ask if she was feeling unwell or facing any difficulties, so we can improve together next time."
        },
        {
            q: "A senior crew member gives you an unfair amount of work. What do you do?",
            framework: "Công thức: Accept - Adapt - Address",
            hint: "Tư duy chuyên gia:\n- Đừng từ chối trước mặt hành khách.\n- Hoàn thành nhiệm vụ trước, nói chuyện riêng sau.\n- Thể hiện tinh thần teamwork, không phàn nàn.",
            sample: "• [Accept]: I would first complete all assigned tasks without complaint, as the flight operation comes first.\n• [Adapt]: I would manage my time efficiently and ask other colleagues for quick help if needed.\n• [Address]: After the flight, I would respectfully speak with the senior crew member: 'I want to do my best. Could we discuss task distribution so the team works even more efficiently?'"
        },
        {
            q: "You notice a colleague making a mistake in the safety demonstration. What do you do?",
            framework: "Công thức: Safety First - Discreet Correction",
            hint: "An toàn không được phép sai!\nSửa kín đáo, không làm mất mặt đồng nghiệp trước khách.\nNếu nghiêm trọng, báo Purser.",
            sample: "• [Discreet]: I would subtly step closer and demonstrate the correct procedure myself so the colleague can notice and correct.\n• [Private]: If it's a serious error, I would quietly whisper the correction or use a hand signal.\n• [Report]: After the demonstration, I would mention it privately. If it's a critical safety issue, I would inform the Purser because safety cannot be compromised."
        },
        {
            q: "How do you handle a disagreement with a colleague during a flight?",
            framework: "Công thức: Professionalism Over Personal",
            hint: "Trên máy bay = không tranh cãi.\nĐồng ý tạm -> Giải quyết sau chuyến bay.\nLuôn đặt khách hàng lên trên mâu thuẫn cá nhân.",
            sample: "• [Principle]: I believe personal disagreements should never affect our service. Passengers must never see crew members arguing.\n• [Action]: During the flight, I would agree to follow the senior crew's decision and focus 100% on service.\n• [Resolve]: After the flight, I would have an open and honest conversation with my colleague to find a compromise."
        },
        {
            q: "A new crew member is struggling and looks overwhelmed. How do you help?",
            framework: "Công thức: Mentor Mindset",
            hint: "Đặt mình vào vị trí người mới.\nHỗ trợ bằng hành động, không chỉ lời nói.\nKhuyến khích, không chỉ trích.",
            sample: "• [Approach]: I would approach them with a warm smile and say 'Hey, I remember my first flights too. Let me show you a few tricks.'\n• [Action]: I would take over their most difficult task first, then guide them through it step by step.\n• [Encourage]: 'You're doing great. Everyone was new once. Just take it one task at a time, and I'm here if you need me.'"
        },
        {
            q: "Your colleague takes credit for something you did. How do you react?",
            framework: "Công thức: Focus on Work - Not on Credit",
            hint: "Không đối đầu trước mặt người khác.\nNói chuyện riêng, bình tĩnh và chuyên nghiệp.\nThể hiện: Bạn làm vì team, không vì credit.",
            sample: "• [Mindset]: I believe good work speaks for itself. I would not make a scene.\n• [Private Talk]: I would privately say 'I noticed the report mentioned your idea. I'm glad the team benefited, but I want to make sure we communicate accurately in the future.'\n• [Move On]: Ultimately, I focus on doing my job well. My managers and colleagues will notice consistent effort over time."
        },
        {
            q: "How do you deal with a colleague who has a bad attitude?",
            framework: "Công thức: Kill with Kindness",
            hint: "Không bị cuốn vào negativity.\nGiữ thái độ tích cực, chuyên nghiệp.\nNếu ảnh hưởng đến service, báo cáo.",
            sample: "• [Stay Positive]: I would maintain my own positive attitude regardless of their behavior. Negativity is contagious, but so is positivity.\n• [Communicate]: I might say 'Are you okay? Is there anything I can help with?' Sometimes bad attitudes come from personal issues.\n• [Escalate if needed]: If their attitude consistently affects the team's performance and passenger service, I would discreetly inform the Purser."
        },
        {
            q: "How would you handle a situation where crew members are gossiping about a passenger?",
            framework: "Công thức: Professional Boundaries",
            hint: "Nói xấu khách = thiếu chuyên nghiệp, vi phạm đạo đức.\nKhông tham gia, chuyển chủ đề.\nNếu cần, nhắc nhở nhẹ nhàng.",
            sample: "• [Don't Participate]: I would not join in or laugh along. I would change the topic naturally.\n• [Gentle Reminder]: 'Let's be careful — you never know who might hear us. We should keep things professional.'\n• [Lead by Example]: I would always speak about passengers respectfully, setting the standard for the team."
        },
        {
            q: "How do you build good teamwork with crew members you've never met?",
            framework: "Công thức: Connect Fast - Work Together",
            hint: "Hàng không = team mới mỗi chuyến bay.\nKey: Briefing tốt, giao tiếp rõ, hỗ trợ nhau.\nChủ động làm quen, tạo không khí thoải mái.",
            sample: "• [Connect]: Before the flight, I would introduce myself during the briefing with a genuine smile and ask about their experience and preferences.\n• [Communicate]: During the flight, I would use clear communication — 'I'll handle rows 1-10, shall I help with yours after?'\n• [Support]: I always offer help without being asked. Small gestures like handing a colleague a water bottle during service build trust quickly."
        },
        {
            q: "Your team leader makes a decision you disagree with. What do you do?",
            framework: "Công thức: Respect Chain of Command",
            hint: "Tôn trọng quyết định của leader trước.\nThực hiện trước, thảo luận sau.\nĐưa ra ý kiến một cách xây dựng (constructive).",
            sample: "• [Respect]: In the moment, I would follow the team leader's decision. There is a reason they are in charge, and unity is important during operations.\n• [Execute]: I would carry out the task to the best of my ability.\n• [Discuss]: After the flight, I would approach the leader respectfully: 'I fully supported your decision today. For future reference, may I share an alternative approach I had in mind? I'd love your feedback.'"
        }
    ],

    // ═══════════════════════════════════════════════════════════
    // LOẠI 5: QUẢN LÝ ÁP LỰC / STRESS
    // ═══════════════════════════════════════════════════════════
    stress: [
        {
            q: "How do you handle stress on long flights?",
            framework: "Công thức: Physical & Mental Balance",
            hint: "Physical: Uống nước, hít thở, giãn cơ.\nMental: Chia nhỏ công việc, giữ thái độ tích cực.",
            sample: "• [Physical]: To handle stress physically, I stay hydrated and take deep breaths whenever I have a few seconds of break.\n• [Mental]: Mentally, I focus on one task at a time instead of worrying about everything. I remind myself that a smiling crew makes happy passengers, and that motivates me to keep going."
        },
        {
            q: "How do you stay motivated during repetitive work?",
            framework: "Công thức: Find Meaning in Routine",
            hint: "Mỗi hành khách là mới, mỗi chuyến bay khác nhau.\nTìm niềm vui nhỏ trong công việc.\nĐặt mục tiêu cá nhân cho mỗi chuyến bay.",
            sample: "• [Perspective]: Even though the tasks may seem repetitive, every passenger is unique. A smile from a grateful passenger makes my day.\n• [Goal Setting]: I set small personal goals for each flight — like learning one new phrase in another language or making at least 3 passengers smile.\n• [Growth]: I also focus on improving my skills every day, whether it's my announcement voice or my service speed."
        },
        {
            q: "Tell me about a time you worked under pressure.",
            framework: "Công thức: S.T.A.R under Pressure",
            hint: "Chọn tình huống có deadline hoặc khối lượng lớn.\nNhấn mạnh cách bạn GIỮ BÌNH TĨNH.\nKết quả: Hoàn thành tốt mặc dù áp lực.",
            sample: "• [Situation]: During a hotel event, 200 guests arrived at the same time due to a schedule mix-up.\n• [Task]: I needed to check in all guests within 30 minutes.\n• [Action]: I took a deep breath, prioritized VIP guests first, asked two colleagues to help, and set up an express check-in line.\n• [Result]: All guests were checked in within 25 minutes, and the manager praised our team's quick response."
        },
        {
            q: "How do you deal with jet lag and irregular schedules?",
            framework: "Công thức: Routine Within Chaos",
            hint: "Sleep hygiene: Ngủ đúng giờ, dùng eye mask.\nNutrition: Ăn healthy, tránh caffeine quá muộn.\nExercise: Vận động nhẹ, yoga.",
            sample: "• [Sleep]: I practice good sleep hygiene — I use an eye mask, earplugs, and keep my hotel room dark. I try to sleep as soon as I can after a flight.\n• [Nutrition]: I eat light, healthy meals and avoid heavy food or caffeine 6 hours before sleep.\n• [Routine]: Even with changing schedules, I maintain a personal routine — a short workout, journaling, or calling family. This keeps me grounded."
        },
        {
            q: "A passenger is rude to you after a long exhausting flight. How do you react?",
            framework: "Công thức: Emotional Shield",
            hint: "Đừng cá nhân hóa (Don't take it personally).\nHọ đang stress, không phải ghét bạn.\nGiữ nụ cười chuyên nghiệp, xử lý nhanh.",
            sample: "• [Shield]: I would remind myself that the passenger's frustration is about the situation, not about me personally.\n• [Professional]: I would respond with a calm smile: 'I understand you've had a long day. Let me see what I can do to help.'\n• [Self-care]: After the flight, I would take time to decompress — call a friend, take a warm shower, or do something I enjoy to recharge."
        },
        {
            q: "How do you manage homesickness while being away frequently?",
            framework: "Công thức: Stay Connected - Stay Grounded",
            hint: "Công nghệ: Video call, chat thường xuyên.\nMindset: Biết ơn cơ hội được đi khắp nơi.\nSupport system: Bạn bè đồng nghiệp = gia đình thứ 2.",
            sample: "• [Stay Connected]: I make it a habit to video call my family every day, even if it's just 5 minutes. This keeps me emotionally connected.\n• [Gratitude]: I remind myself that not everyone gets to explore different countries as part of their job. I take photos and share them with my family.\n• [Support]: My crew members become my second family. We look after each other during layovers, share meals, and create great memories together."
        },
        {
            q: "How do you handle multiple tasks at once during service?",
            framework: "Công thức: Prioritize - Organize - Execute",
            hint: "Priority: An toàn > Khách cần hỗ trợ > Dịch vụ bình thường.\nOrganize: Chia khu vực, làm theo thứ tự.\nKhông hoảng, giữ nhịp đều.",
            sample: "• [Prioritize]: Safety always comes first. Then I handle urgent passenger needs, followed by routine service.\n• [Organize]: I work systematically row by row, keeping my trolley organized so I don't waste time.\n• [Execute]: I stay calm, focused, and efficient. If I'm overwhelmed, I ask a colleague for quick help. Teamwork makes multitasking manageable."
        },
        {
            q: "What do you do to maintain your physical fitness for this job?",
            framework: "Công thức: Active Lifestyle",
            hint: "Cabin crew cần: Sức bền, dẻo dai, ngoại hình.\nWorkout: Cardio, yoga, stretching.\nDiet: Ăn sạch, uống đủ nước.",
            sample: "• [Exercise]: I maintain a regular workout routine — 30 minutes of cardio 4 times a week and yoga for flexibility.\n• [Diet]: I eat a balanced diet rich in vegetables, lean protein, and fruits. I avoid excessive sugar and processed food.\n• [Consistency]: Even during layovers, I try to use the hotel gym or go for a walk to explore the city. Staying active keeps me energized for demanding flights."
        },
        {
            q: "How do you recover from a bad day at work?",
            framework: "Công thức: Reset - Reflect - Recharge",
            hint: "Reset: Tách khỏi công việc sau khi kết thúc.\nReflect: Rút ra bài học, không tự trách.\nRecharge: Làm điều mình thích.",
            sample: "• [Reset]: As soon as I leave the aircraft, I mentally 'clock out.' I change clothes and do something completely unrelated to work.\n• [Reflect]: I think about what happened and what I can learn. But I don't dwell on it — I ask 'What would I do differently?' and move on.\n• [Recharge]: I recharge by doing things I love — reading a book, cooking, or watching a movie. A good night's sleep always makes tomorrow feel like a fresh start."
        },
        {
            q: "How do you stay professional when you're having a bad personal day?",
            framework: "Công thức: Compartmentalize (Tách biệt cá nhân - công việc)",
            hint: "Uniform on = professional mode.\nKhách hàng không biết chuyện cá nhân của bạn.\nTìm năng lượng từ việc phục vụ người khác.",
            sample: "• [Compartmentalize]: When I put on my uniform, I switch to 'professional mode.' My personal issues stay outside the aircraft door.\n• [Focus on Others]: Taking care of passengers actually helps me feel better. Making someone else's day brighter lifts my own mood.\n• [Support System]: If I'm really struggling, I would briefly confide in a trusted colleague. Sometimes just saying 'I'm having a tough day' helps me release the pressure."
        }
    ],

    // ═══════════════════════════════════════════════════════════
    // LOẠI 6: CẤP CỨU / AN TOÀN / SƠ TÁN (MỚI)
    // ═══════════════════════════════════════════════════════════
    emergency_safety: [
        {
            q: "A passenger is having a heart attack mid-flight. What do you do?",
            framework: "Công thức: A.B.C.D (Assess - Broadcast - Care - Document)",
            hint: "Tư duy chuyên gia:\n- Gọi PA announcement tìm bác sĩ -> First Aid Kit -> AED -> Báo Captain.\n- Giữ bình tĩnh, hướng dẫn rõ ràng.\n- Nếu cần hạ cánh khẩn cấp, Captain quyết định.",
            sample: "• [Assess]: I would quickly assess the passenger's condition — are they conscious, breathing, responsive?\n• [Broadcast]: I would make a PA: 'If there is a doctor or medical professional on board, please identify yourself to the crew.'\n• [Care]: I would retrieve the first aid kit and AED, administer first aid as trained, and follow medical guidance if a doctor is available.\n• [Document]: I would inform the Captain immediately for possible diversion, and document all actions taken."
        },
        {
            q: "There is a fire in the galley. How do you respond?",
            framework: "Công thức: P.A.S.S (Pull - Aim - Squeeze - Sweep)",
            hint: "Tư duy chuyên gia:\n- Xác định loại cháy (electrical, grease, etc.).\n- Dùng bình chữa cháy đúng loại.\n- Báo Captain NGAY -> Sơ tán hành khách khỏi khu vực.",
            sample: "• [Alert]: I would shout 'FIRE!' to alert nearby crew and immediately inform the Captain.\n• [Fight]: Using the correct fire extinguisher (Halon for electrical, water for paper/fabric), I would apply the P.A.S.S technique.\n• [Evacuate Area]: I would move passengers away from the galley area and close the galley curtain to contain smoke.\n• [Monitor]: Even after extinguishing, I would monitor for re-ignition and keep the Captain updated."
        },
        {
            q: "The aircraft needs to make an emergency landing on water (ditching). What is your role?",
            framework: "Công thức: Brief - Brace - Evacuate",
            hint: "Tư duy chuyên gia:\n- Briefing: 'Brace Position' cho hk -> Life vest -> Cửa thoát hiểm.\n- ĐỢI lệnh Captain, KHÔNG tự ý mở cửa.\n- Ưu tiên: Trẻ em, người già, người khuyết tật.",
            sample: "• [Brief Passengers]: 'BRACE BRACE! HEAD DOWN, STAY DOWN!' I would demonstrate the brace position and ensure everyone knows where the nearest exit is.\n• [Life Vests]: I would instruct passengers to put on life vests but NOT inflate them inside the aircraft.\n• [Evacuate]: Upon the Captain's command, I would open designated exits, deploy the escape slides/rafts, and direct passengers: 'COME THIS WAY! JUMP AND SLIDE!'\n• [Priority]: I would assist children, elderly, and disabled passengers first."
        },
        {
            q: "A passenger is choking during the meal service. What do you do?",
            framework: "Công thức: Recognize - Respond - Recover",
            hint: "Tư duy chuyên gia:\n- Dấu hiệu: Tay ôm cổ, không nói được, tím tái.\n- Hành động: Heimlich Maneuver (Đẩy bụng).\n- Nếu bất tỉnh: CPR -> Gọi bác sĩ trên chuyến bay.",
            sample: "• [Recognize]: I would ask 'Are you choking? Can you speak?' If they cannot respond, it's a complete blockage.\n• [Respond]: I would immediately perform the Heimlich maneuver — standing behind them, placing my fist above the navel, and giving firm upward thrusts.\n• [Recover]: Once the object is cleared, I would help them sit down, offer water, and monitor their condition. I would also call for a medical professional on board and report to the Captain."
        },
        {
            q: "Severe turbulence hits unexpectedly. How do you handle the cabin?",
            framework: "Công thức: Secure - Command - Calm",
            hint: "Tư duy chuyên gia:\n- Ưu tiên: TỰ bảo vệ mình trước -> Hướng dẫn khách.\n- Nếu đang phục vụ: Lock trolley, ngồi xuống ngay.\n- Giọng nói: Rõ ràng, bình tĩnh, quyền uy.",
            sample: "• [Secure]: I would immediately secure the service trolley and sit in the nearest available seat. My safety comes first so I can help others.\n• [Command]: Using a loud, clear voice: 'PLEASE REMAIN SEATED WITH YOUR SEATBELTS FASTENED. HOLD ON TO YOUR ARMRESTS.'\n• [Calm]: After the turbulence passes, I would walk through the cabin checking for injuries, offering water, and reassuring nervous passengers: 'Everything is under control. Is everyone alright?'"
        },
        {
            q: "You smell smoke in the cabin but cannot identify the source. What do you do?",
            framework: "Công thức: Investigate - Inform - Isolate",
            hint: "Tư duy chuyên gia:\n- Khói = mối đe dọa hàng đầu trên máy bay.\n- Kiểm tra: Lavatory, overhead bins, galley, dưới ghế.\n- Báo Captain NGAY, không đợi xác nhận.",
            sample: "• [Investigate]: I would systematically check all areas — lavatories, galley equipment, overhead bins, and under seats for any source of smoke or burning smell.\n• [Inform]: I would immediately notify the Captain and Purser, even before identifying the exact source. 'Captain, we detected a smell of smoke in the cabin. Investigating now.'\n• [Isolate]: If found, I would isolate the source, use appropriate fire equipment, and prepare crew for possible emergency procedures."
        },
        {
            q: "A passenger faints during the flight. What is your protocol?",
            framework: "Công thức: Assess - Aid - Announce",
            hint: "Tư duy chuyên gia:\n- Đặt khách nằm xuống, nâng chân cao.\n- Kiểm tra nhịp thở, mạch đập.\n- First Aid Kit -> Oxy -> Gọi bác sĩ.",
            sample: "• [Assess]: I would check if the passenger is breathing and has a pulse. I would lay them flat and elevate their legs to improve blood flow.\n• [Aid]: I would loosen any tight clothing, provide supplemental oxygen from the portable bottle, and use smelling salts if available.\n• [Announce]: I would make a PA announcement calling for medical assistance and inform the Captain.\n• [Monitor]: I would stay with the passenger until they regain consciousness and continue monitoring their condition."
        },
        {
            q: "During an emergency evacuation, a passenger insists on taking their carry-on luggage. What do you do?",
            framework: "Công thức: Firm Command - No Compromise",
            hint: "Tư duy chuyên gia:\n- ĐỒ ĐẠC = MẤT THỜI GIAN = NGUY HIỂM TÍNH MẠNG.\n- 90 giây để sơ tán toàn bộ máy bay.\n- Giọng HÉT: 'LEAVE EVERYTHING!'",
            sample: "• [Firm Command]: 'LEAVE YOUR BAGS! COME THIS WAY NOW!' — There is absolutely no room for negotiation during an evacuation.\n• [Physical Action]: If necessary, I would physically block access to the overhead bin or remove the bag from their hands.\n• [Explain Later]: In an evacuation, every second counts. Bags can block the aisle and damage the slide. Lives are more important than luggage. No exception."
        },
        {
            q: "What would you do if cabin pressure drops and oxygen masks deploy?",
            framework: "Công thức: Self First - Assist Others",
            hint: "Tư duy chuyên gia:\n- ĐEO MẶT NẠ CHO MÌNH TRƯỚC (như hướng dẫn).\n- Tại sao? Bạn có 15-20 giây trước khi mất ý thức.\n- Sau đó hỗ trợ khách, đặc biệt trẻ em.",
            sample: "• [Self First]: I would immediately put on my own oxygen mask. I cannot help anyone if I lose consciousness.\n• [Assist]: Then I would walk through the cabin helping passengers who are struggling — especially children, elderly, and those with disabilities.\n• [Communicate]: Using a calm but firm voice: 'PULL THE MASK TOWARDS YOU. PLACE IT OVER YOUR NOSE AND MOUTH. BREATHE NORMALLY.'\n• [Prepare]: I would prepare for possible emergency descent and follow all Captain commands."
        },
        {
            q: "A passenger has a severe allergic reaction (anaphylaxis) during the flight. How do you respond?",
            framework: "Công thức: Recognize - React - Report",
            hint: "Tư duy chuyên gia:\n- Dấu hiệu: Sưng mặt/cổ, khó thở, nổi mẩn đỏ.\n- EpiPen trong Emergency Medical Kit.\n- Liên hệ bác sĩ trên máy bay + MedLink (nếu có).",
            sample: "• [Recognize]: Swelling of face/throat, difficulty breathing, hives — these are signs of anaphylaxis.\n• [React]: I would retrieve the Emergency Medical Kit, locate the EpiPen/epinephrine, and administer it following training protocols. I would also provide supplemental oxygen.\n• [Announce]: PA announcement for any medical professional on board.\n• [Report]: Inform the Captain for possible medical diversion and contact ground medical support (MedLink) for real-time guidance."
        }
    ]
};
