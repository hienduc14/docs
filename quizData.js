
const quizData = [
    [
        {
            "question": "Câu Hỏi 1: Đâu là phát biểu KHÔNG ĐÚNG về overlay?",
            "type": "multiple-choice",
            "options": [
                "a. Nó cho phép một tiến trình lớn hơn bộ nhớ có thể chạy",
                "b. Overlay tải mô-đun theo yêu cầu (khi cần thiết)",
                "c. Overlay được hỗ trợ trong tất cả các ngôn ngữ lập trình cấp cao",
                "d. Lập trình viên cần tổ chức chương trình thành các mô-đun"
            ],
            "correctAnswer": "c. Overlay được hỗ trợ trong tất cả các ngôn ngữ lập trình cấp cao"
        },
        {
            "question": "Câu Hỏi 2: Kỹ thuật nào sau đây giúp giảm thiểu tình trạng nhàn rỗi của CPU hoặc các thiết bị vào/ra khi hệ điều hành đơn vi xử lý ?",
            "type": "multiple-choice",
            "options": [
                "a. Sử dụng hành đợi",
                "b. Hệ điều hành phân tán",
                "c. sử dụng pipe",
                "d. Đa chương trình"
            ],
            "correctAnswer": "d. Đa chương trình"
        },
        {
            "question": "Câu Hỏi 3: ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch LOOK là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196 --> 12",
                "b. 50 --> 12 --> 0 -->199 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "c. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "d. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196"
            ],
            "correctAnswer": "d. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196"
        },
        {
            "question": "Câu Hỏi 4: Phát biểu nào ĐÚNG về mục tiêu của điều kiện loại trừ lẫn nhau của khu vực quan trọng?",
            "type": "multiple-choice",
            "options": [
                "a. Nó làm cho việc thực hiện của hệ điều hành đơn giản hơn",
                "b. Nó cố gắng sử dụng tài nguyên được chia sẻ một cách hiệu quả hơn",
                "c. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ",
                "d. Nó hỗ trợ sự ưu tiên của các tiến trình"
            ],
            "correctAnswer": "c. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ"
        },
        {
            "question": "Câu Hỏi 5: Một tiến trình sử dụng 5 trang 1,2,3,4,5 theo trình tự: 1,2,4,5,2,1,2,4. Nếu sử dụng thuật toán thay thế trang FIFO, số lỗi trang xảy ra khi tăng từ 3 frame lên 4 frame:",
            "type": "multiple-choice",
            "options": [
                "a. tăng X",
                "b. giảm",
                "c. vẫn giữ nguyên",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 6: Mục tiêu ĐÚNG của điều kiện tiến triển của khu vực quan trọng là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Nó làm cho việc thực hiện HĐH đơn giản hơn",
                "b. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ X",
                "c. Nó làm giảm thời gian chờ đợi của các tiến trình được yêu cầu",
                "d. Nó hỗ trợ sự ưu tiên của các tiến trình"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 7: Ba tiến trình sau chia sẻ semaphore nhị phân S1, S2, S3 (khởi tạo bằng 0): Tiến trình P1 {wait (S1); print (\"A\"); signal (S2);} Tiến trình P2 { wait (S2); print (\"B\"); signal (S3);} Tiến trình P3 { signal (S3); print (\"C\"); signal (S1);} Thông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Chuỗi kết quả in ra màn hình sau khi cả ba tiến trình kết thúc thực thi ?",
            "type": "multiple-choice",
            "options": [
                "a. CAB",
                "b. BAC",
                "c. BCA",
                "d. ABC"
            ],
            "correctAnswer": "b. BAC"
        },
        {
            "question": "Câu Hỏi 8: Giả sử một hệ thống sử dụng thuật toán lập lịch Không cho phép dừng SJF, thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là:P1 (0,7), P2 (2,4), P3 (4,1), P4 (5,4). Đâu là thông lượng của hệ thống?",
            "type": "multiple-choice",
            "options": [
                "a. 0,35",
                "b. 0,45 X",
                "c. 0,65",
                "d. 0,25"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 9: Thời gian truy cập hiệu quả là tỷ lệ thuận với",
            "type": "multiple-choice",
            "options": [
                "a. Tỷ kệ lỗi trang",
                "b. Các phương án trên đều sai",
                "c. Thời gian truy cập bộ nhớ",
                "d. Tỷ lệ trúng"
            ],
            "correctAnswer": "b. Các phương án trên đều sai"
        },
        {
            "question": "Câu Hỏi 10: Đâu là phát biểu KHÔNG ĐÚNG về phân trang (bảng trang cấp 1)?",
            "type": "multiple-choice",
            "options": [
                "a. Một tham chiếu có dạng (p, d)",
                "b. Địa chỉ vật lý của tham chiếu là p * frame_size + d",
                "c. Cần có bảng trang để ánh xạ địa chỉ logic thành địa chỉ vật lý X",
                "d. Địa chỉ vật lý của tham chiếu là f* frame_size + d, trong đó f là khung tương ứng của số trang p"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 11: Giả sử một hệ thống sử dụng phân bổ tỷ lệ dựa trên kích thước của các tiến trình. Có hai tiến trình A và B với kích thước tương ứng là 10 và 127 khung. Nếu bộ nhớ có kích thước 64 khung, tính số khung được phân bổ cho A và B? (Số khung được phân bổ cho A và B được viết liền nhau theo thứ tự tương ứng và ngăn cách bởi dấu phẩy. VD: 3,35)",
            "type": "fill-in-the-blank",
            "correctAnswer": "5,59"
        },
        {
            "question": "Câu Hỏi 12: Điều gì là KHÔNG ĐÚNG về các trạng thái của một tiến trình?",
            "type": "multiple-choice",
            "options": [
                "a. Các trạng thái hợp lệ là new, ready, running, waiting và terminated",
                "b. Một tiến trình có thể được chuyển từ trạng thái running sang trạng thái waiting",
                "c. Số lượng trạng thái của một tiến trình là như nhau trong tất cả các hệ điều hành",
                "d. Một tiến trình có thể được chuyển từ trạng thái running sang trạng thái ready"
            ],
            "correctAnswer": "c. Số lượng trạng thái của một tiến trình là như nhau trong tất cả các hệ điều hành"
        },
        {
            "question": "Câu Hỏi 13: Có 5 tiến trình P1, P2, P3, P4, P5 với thời gian chạy CPU (ms), thời gian đến (ms) và số hiệu ưu tiên như sau:\nThời gian chạy Số hiệu ưu tiên Thời gian đến\nP1 2 2 0\nP2 3 1 3\nP3 8 4 5\nP4 4 5 7\nP5 5 3 9\nSử dụng thuật toán SJF cho phép dừng. Khẳng định nào sau đây là đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Thời gian phản hồi của P4 dài hơn thời gian phản hồi của P5",
                "b. Thời gian chờ của P4 dài hơn thời gian chờ của P3",
                "c. Thời gian chờ của P2 dài hơn thời gian chờ của P3",
                "d. Thời gian chờ của P3 dài hơn thời gian chờ của P5"
            ],
            "correctAnswer": "d. Thời gian chờ của P3 dài hơn thời gian chờ của P5"
        },
        {
            "question": "Câu Hỏi 14: Một hệ thống sử dụng phương pháp cấp phát bộ nhớ theo tỷ lệ. Có 3 tiến trình trong hệ thống là P1, P2 và P3 với kích thước lần lượt là 138KB, 96KB và 164KB. Giả sử kích thước bộ nhớ là 180KB và kích thước khung là 2KB, hãy tính số lượng khung được phân bổ cho các tiến trình P1, P2, P3? (Số khung của các tiến trình P1, P2, P3 được viết liền nhau, ngăn cách nhau bởi dấu phẩy. VD: 1,2,3)",
            "type": "fill-in-the-blank",
            "correctAnswer": "31,22,37"
        },
        {
            "question": "Câu Hỏi 15: Đâu không phải là một thực hiện của khu vực quan trọng?",
            "type": "multiple-choice",
            "options": [
                "a. Điều kiện",
                "b. Giải pháp Peterson",
                "c. Semaphore",
                "d. Giám sát"
            ],
            "correctAnswer": "a. Điều kiện"
        },
        {
            "question": "Câu Hỏi 16: Semaphore dùng để",
            "type": "multiple-choice",
            "options": [
                "a. thực thi nhiện vụ vào/ra dữ liệu",
                "b. quản lý bộ nhớ",
                "c. đồng bộ hoá các tài nguyên quan trọng nhằm tránh hiện tượng tranh chấp",
                "d. đồng bộ hoá các tài nguyên quan trọng nhằm tránh bế tắc"
            ],
            "correctAnswer": "c. đồng bộ hoá các tài nguyên quan trọng nhằm tránh hiện tượng tranh chấp"
        },
        {
            "question": "Câu Hỏi 17: Thuật toán lập lịch CPU nào thường cho thời gian phản hồi trung bình nhỏ nhất:",
            "type": "multiple-choice",
            "options": [
                "a. Round Robin với time quantum nhỏ",
                "b. SJF cho phép dừng",
                "c. Thứ tự ưu tiên cho phép dừng",
                "d. FCFS"
            ],
            "correctAnswer": "a. Round Robin với time quantum nhỏ"
        },
        {
            "question": "Câu Hỏi 18: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa SSTF được sử dụng, tính tổng số trụ mà đầu phải di chuyển để phục vụ các yêu cầu trên?",
            "type": "fill-in-the-blank",
            "correctAnswer": "236"
        },
        {
            "question": "Câu Hỏi 19: Điều nào KHÔNG ĐÚNG về truyền thông giữa các tiến trình (IPC - Inter-process communication)?",
            "type": "multiple-choice",
            "options": [
                "a. Cơ chế IPC trong các hệ điều hành khác nhau có thể khác nhau",
                "b. IPC chỉ có thể được sử dụng giữa các tiến trình trong cùng hệ thống",
                "c. Trong hệ điều hành đơn chương trình có thể KHÔNG cần IPC cục bộ",
                "d. Ví dụ về cơ chế IPC trong Linux là hàng đợi tin nhắn, semaphore, bộ nhớ dùng chung, ..."
            ],
            "correctAnswer": "b. IPC chỉ có thể được sử dụng giữa các tiến trình trong cùng hệ thống"
        },
        {
            "question": "Câu Hỏi 20: Đâu là phát biểu ĐÚNG về bộ nhớ kết (associative memory)?",
            "type": "multiple-choice",
            "options": [
                "a. Đó là RAM",
                "b. Đó là bộ đệm được sử dụng trong tiến trình dịch địa chỉ",
                "c. Đó là bộ đệm hệ thống",
                "d. Đó là một phần của RAM"
            ],
            "correctAnswer": "b. Đó là bộ đệm được sử dụng trong tiến trình dịch địa chỉ"
        },
        {
            "question": "Câu Hỏi 21: Giả sử một hệ thống sử dụng thuật toán lập lịch CPU FCFS, thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là: P1 (0,21), P2 (30,10), P3 (20,40), P4 (40,25). Tính thời gian chờ trung bình của các tiến trình?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 22: Giả sử một hệ thống có RAM 4GB được phân trang kích thước khung là 1KB. Loại dữ liệu của cột khung trong bảng trang là gì?",
            "type": "multiple-choice",
            "options": [
                "a. long (64 bit)",
                "b. double (64 bit)",
                "c. float (32 bit)",
                "d. int (32 bit)"
            ],
            "correctAnswer": "d. int (32 bit)"
        },
        {
            "question": "Câu Hỏi 23: Đâu là lý do TỐT NHẤT để chúng ta cần lập lịch trình tiến trình?",
            "type": "multiple-choice",
            "options": [
                "a. Vì nhiều lý do như: nhiều tiến trình, sử dụng tài nguyên hệ thống hiệu quả hơn, không để người dùng phải chờ đợi,",
                "b. Vì hệ thống có nhiều tiến trình để chạy và chúng cần được đối xử bình đẳng",
                "c. Vì hệ thống có nhiều tiến trình để chạy",
                "d. Vì chúng ta cần sử dụng bộ nhớ hiệu quả hơn"
            ],
            "correctAnswer": "a. Vì nhiều lý do như: nhiều tiến trình, sử dụng tài nguyên hệ thống hiệu quả hơn, không để người dùng phải chờ đợi,"
        },
        {
            "question": "Câu Hỏi 24: Tình huống mà một số tiến trình truy cập và thao tác đồng thời trên cùng một vùng dữ liệu và kết quả của việc thực hiện phụ thuộc vào thứ tự các tiến trình truy cập vào vùng dữ liệu được gọi là:",
            "type": "multiple-choice",
            "options": [
                "a. nạn đói",
                "b. điều kiện tương tranh",
                "c. tính nhất quán dữ liệu",
                "d. quá trình lão hóa"
            ],
            "correctAnswer": "b. điều kiện tương tranh"
        },
        {
            "question": "Câu Hỏi 25: Đâu là phát biểu KHÔNG ĐÚNG về đĩa cứng?",
            "type": "multiple-choice",
            "options": [
                "a. Tốc độ truyền (Transfer rate) là tốc độ dữ liệu giữa ổ đĩa và máy tính",
                "b. Thời gian tìm kiếm (Seek time) là thời gian để di chuyển đầu đọc (head) đến trụ (cylinder) mong muốn",
                "c. Tốc độ truyền (Transfer rate) là yếu tố quan trọng nhất đối với các thuật toán lập lịch cho ổ đĩa",
                "d. Độ trễ chuyển động quay của trục (Rotation latency) là thời gian chờ đợi để khu vực (sector) mong muốn đến đầu đọc (head)"
            ],
            "correctAnswer": "c. Tốc độ truyền (Transfer rate) là yếu tố quan trọng nhất đối với các thuật toán lập lịch cho ổ đĩa"
        },
        {
            "question": "Câu Hỏi 26: Khó khăn của cấp phát liên tục là",
            "type": "multiple-choice",
            "options": [
                "a. Việc tìm không gian cho tập tin mới",
                "b. Không hiệu quả",
                "c. Mất nhiều thời gian",
                "d. Giá thành cao"
            ],
            "correctAnswer": "a. Việc tìm không gian cho tập tin mới"
        },
        {
            "question": "Câu Hỏi 27: Đoạn mã sử dụng sai mục đích được gọi là",
            "type": "multiple-choice",
            "options": [
                "a. Mã sửa đổi ngăn xếp",
                "b. Trojan",
                "c. Trộm nội bộ",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "d. Các phương án trên đều sai"
        },
        {
            "question": "Câu Hỏi 28: Hệ điều hành Linux có",
            "type": "multiple-choice",
            "options": [
                "a. Nhân (kernel) monolithic",
                "b. Các phương án trên đều sai",
                "c. Vi nhân (microkernel)",
                "d. Nhân (kernel) monolithic có modules"
            ],
            "correctAnswer": "d. Nhân (kernel) monolithic có modules"
        },
        {
            "question": "Câu Hỏi 29: Nếu hệ thống bị sự cố trước khi các thay đổi của một giao dịch được lưu vào log thì chúng sẽ được",
            "type": "multiple-choice",
            "options": [
                "a. lưu và thực hiện lại giao dịch",
                "b. chuyển vào bộ nhớ trong",
                "c. huỷ bỏ",
                "d. lưu"
            ],
            "correctAnswer": "c. huỷ bỏ"
        },
        {
            "question": "Câu Hỏi 30: Windows XP thuộc loại hệ điều hành nào?",
            "type": "multiple-choice",
            "options": [
                "a. Đơn chương trình",
                "b. Mục đích đặc biệt",
                "c. Đa chương trình",
                "d. Nhúng"
            ],
            "correctAnswer": "c. Đa chương trình"
        },
        {
            "question": "Câu Hỏi 31: Đâu là phát biểu KHÔNG ĐÚNG về Hệ thống tệp ảo (VFS - Virtual File System)?",
            "type": "multiple-choice",
            "options": [
                "a. VFS cho phép một hệ thống có một số hệ thống tệp khác nhau",
                "b. VFS có sẵn trong tất cả các hệ điều hành",
                "c. VFS ẩn việc triển khai chi tiết hệ thống tệp riêng lẻ",
                "d. VFS cung cấp Giao diện lập trình ứng dụng (API - Application Programming Interface) hợp nhất cho các hệ thống tệp khác nhau"
            ],
            "correctAnswer": "b. VFS có sẵn trong tất cả các hệ điều hành"
        },
        {
            "question": "Câu Hỏi 32: Để bảo vệ hệ thống, một tiến trình nên được truy cập",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các phương án trên",
                "b. Tất cả các nguồn tài nguyên",
                "c. Một số ít tài nguyên nhưng việc cấp quyền là không cần thiết",
                "d. Chỉ những nguồn tài nguyên mà nó được cấp quyền"
            ],
            "correctAnswer": "d. Chỉ những nguồn tài nguyên mà nó được cấp quyền"
        },
        {
            "question": "Câu Hỏi 33: Trên ổ đĩa các khối 2,3,4,5,8,9,10,11,12,13 còn trống, các khối còn lại đã được sử dụng, bit map dùng để quản lý không gian trống của khối 0 đến 15 là",
            "type": "multiple-choice",
            "options": [
                "a. 0111100111110000",
                "b. 0011110011111100",
                "с. 1000011000000111",
                "d. 1100001100001110"
            ],
            "correctAnswer": "a. 0111100111110000"
        },
        {
            "question": "Câu Hỏi 34: Có 4 tiến trình P1, P2, P3, P4 và 2 kiểu tài nguyên A, B. Tại thời điểm t, trạng thái của hệ thống như sau:\nĐã cấp phát Yêu cầu\nA B A B\nP1 1 3 1 2\nP2 4 1 4 3\nP3 1 2 1 7\nP4 2 0 5 1\nA còn 2 đơn vị tài nguyên, B còn 4 đơn vị tài nguyên. Hệ thống đang ở trạng thái nào:",
            "type": "multiple-choice",
            "options": [
                "a. An toàn",
                "b. Bế tắc",
                "c. Được bảo vệ",
                "d. Không có bế tắc"
            ],
            "correctAnswer": "a. An toàn"
        },
        {
            "question": "Câu Hỏi 35: Round Robin là phiên bản cho phép dừng của thuật toán nào sau đây ?",
            "type": "multiple-choice",
            "options": [
                "a. LJF (thời gian ngắn nhất trước)",
                "b. SJF",
                "c. FCFS",
                "d. Priority (Thứ tự ưu tiên)"
            ],
            "correctAnswer": "c. FCFS"
        },
        {
            "question": "Câu Hỏi 36: Đâu không phải là một phương pháp xử lý bế tắc?",
            "type": "multiple-choice",
            "options": [
                "a. phòng ngừa bế tắc",
                "b. bỏ qua bế tắc",
                "c. dự đoán bế tắc",
                "d. tránh bế tắc"
            ],
            "correctAnswer": "c. dự đoán bế tắc"
        },
        {
            "question": "Câu Hỏi 37: Phát biểu nào KHÔNG ĐÚNG về phương pháp xử lý phục hồi bế tắc?",
            "type": "multiple-choice",
            "options": [
                "a. Không bao giờ cho phép hệ thống đi vào trạng thái bế tắc",
                "b. Sử dụng thuật toán phát hiện bế tắc",
                "c. Khôi phục hệ thống từ bế tắc",
                "d. Cho phép hệ thống đi vào trạng thái bế tắc X"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 38: Tập hợp các thao tác để thực thi một nhiệm vụ gọi là",
            "type": "multiple-choice",
            "options": [
                "a. một tiến trình",
                "b. mã chương trình",
                "c. một giao dịch",
                "d. một chương trình"
            ],
            "correctAnswer": "c. một giao dịch"
        },
        {
            "question": "Câu Hỏi 39: Điều kiện loại trừ lẫn nhau có thể được đảm bảo bằng cách sử dụng",
            "type": "multiple-choice",
            "options": [
                "a. Khoá mutex",
                "b. Cả ba phương án trên đều sai",
                "c. Khoá mutex và Semaphore nhị phân",
                "d. Semaphore nhị phân"
            ],
            "correctAnswer": "a. Khoá mutex"
        },
        {
            "question": "Câu Hỏi 40: Có 5 tiến trình P0, P1, P2, P3, P4 và 4 kiểu tài nguyên A, B, C, D. Tại thời điểm t0, trạng thái của hệ thống như sau:\nĐã cấp phát Cần tối đa Còn\nA B C D A B C D A B C D\nP0 2 0 0 1 4 2 1 2 3 3 2 1\nP1 3 1 2 1 5 2 5 2\nP2 2 1 0 3 2 3 1 6\nP3 1 3 1 2 1 4 2 4\nP4 1 4 3 2 3 6 6 5\nYêu cầu (0,2,1,0) của P4 sẽ dẫn hệ thống đến trạng thái nào:",
            "type": "multiple-choice",
            "options": [
                "a. Không an toàn",
                "b. Được bảo vệ",
                "c. An toàn",
                "d. Bế tắc"
            ],
            "correctAnswer": "c. An toàn"
        },
        {
            "question": "Câu Hỏi 41: Giả sử một hệ thống sử dụng thuật toán lập lịch SRTF, thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là: P1 (0,21), P2 (30,10), P3 (20,40), P4 (40,15). Hiển thị thứ tự mà các tiến trình được chạy (các tiến trình được viết liền nhau và ngăn cách bởi dấu phẩy. VD: P1,P2,P3,P4)?",
            "type": "fill-in-the-blank",
            "correctAnswer": "P1,P3,P2,P4,P3"
        },
        {
            "question": "Câu Hỏi 42: Hệ điều hành cung cấp phương thức nào để truy cập đến các dịch vụ của hệ điều hành:",
            "type": "multiple-choice",
            "options": [
                "a. API",
                "b. Các thư viện",
                "c. Các hàm hệ thống",
                "d. Các lệnh assembly"
            ],
            "correctAnswer": "c. Các hàm hệ thống"
        },
        {
            "question": "Câu Hỏi 43: Các cuộc tấn công làm cho một máy tính hoặc mạng lưới tài nguyên không phục vụ được người dùng như dự kiến được gọi là",
            "type": "multiple-choice",
            "options": [
                "a. Tấn công từ chối dịch vụ",
                "b. Tấn công nạn đói",
                "c. Tấn công giả mạo",
                "d. Tấn công đọc chậm"
            ],
            "correctAnswer": "a. Tấn công từ chối dịch vụ"
        },
        {
            "question": "Câu Hỏi 44: Đoạn mã trong một phần mềm nào đó sẽ gây ra một số nguy hiểm trong một số điều kiện nhất định được gọi là",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. Mã sửa đổi ngăn xếp",
                "c. Bom logic",
                "d. Cửa sập"
            ],
            "correctAnswer": "c. Bom logic"
        },
        {
            "question": "Câu Hỏi 45: Có 5 tiến trình P1, P2, P3, P4, P5 với thời gian chạy CPU (ms), thời gian đến (ms) như sau:\nThời gian chạy Thời gian đến\nP1 3 0\nP2 12 4\nP3 4 6\nP4 7 8\nP5 3 11\nSử dụng thuật toán FCFS. Khẳng định nào sau đây là đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Hiện tượng đoàn hộ tống xảy ra với tiến trình P1",
                "b. Hiện tượng đoàn hộ tống không xảy ra với tiến trình P5",
                "c. Hiện tượng đoàn hộ tống xảy ra với tiến trình P4",
                "d. Hiện tượng đoàn hộ tống xảy ra với tiến trình P2"
            ],
            "correctAnswer": "d. Hiện tượng đoàn hộ tống xảy ra với tiến trình P2"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Khi nào hệ điều hành nên kiểm tra bế tắc ?",
            "type": "multiple-choice",
            "options": [
                "a. mỗi khi có yêu cầu sử dụng tài nguyên của tiến trình và theo khoảng thời gian cố định",
                "b. Tất cả các phương án trên đều sai",
                "c. theo khoảng thời gian cố định",
                "d. mỗi khi có yêu cầu sử dụng tài nguyên của tiến trình X"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 2: Nếu một ổ đĩa gặp sự cố trong RAID cấp độ ___ thì phục hồi lại dữ liệu bị mất là đơn giản nhất so với RAID ở các cấp độ khác.",
            "type": "multiple-choice",
            "options": [
                "a. 2",
                "b. 1",
                "c. 3",
                "d. 4"
            ],
            "correctAnswer": "b. 1"
        },
        {
            "question": "Câu Hỏi 3: Đâu là phát biểu KHÔNG ĐÚNG về thuật toán phân bổ bộ nhớ cho Đa chương trình với số nhiệm vụ thay đổi (MVT - Multiprogramming with a Variable number of Tasks )?",
            "type": "multiple-choice",
            "options": [
                "a. Bộ nhớ được chia trước thành các phân vùng",
                "b. Có sự phân mảnh bộ nhớ",
                "c. Một tiến trình nằm trong vùng nhớ liền kề",
                "d. Bộ nhớ không được phân chia trước thành các phân vùng"
            ],
            "correctAnswer": "a. Bộ nhớ được chia trước thành các phân vùng"
        },
        {
            "question": "Câu Hỏi 4: Thuật toán First fit và Best fit chịu ảnh hưởng của",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên",
                "b. Hiện tượng phân mảnh trong",
                "c. Nạn đói",
                "d. Hiện tượng phân mảnh ngoài"
            ],
            "correctAnswer": "d. Hiện tượng phân mảnh ngoài"
        },
        {
            "question": "Câu Hỏi 5: Trong môi trường đa nhiệm, khi một tiến trình luôn bị từ chối cho phép dùng tài nguyên nó được gọi là:",
            "type": "multiple-choice",
            "options": [
                "a. lão hóa",
                "b. đảo ngược",
                "c. nạn đói",
                "d. bế tắc"
            ],
            "correctAnswer": "c. nạn đói"
        },
        {
            "question": "Câu Hỏi 6: Một tiến trình sử dụng 5 trang 1,2,3,4,5 theo trình tự: 1,2,4,5,2,1,2,4. Nếu sử dụng thuật toán thay thế trang FIFO, số lỗi trang xảy ra khi dùng 3 frame là:",
            "type": "multiple-choice",
            "options": [
                "a. 8",
                "b. 7",
                "c. 5",
                "d. 6"
            ],
            "correctAnswer": "d. 6"
        },
        {
            "question": "Câu Hỏi 7: Chọn mô tả đúng nhất về những gì một máy tính thuần túy (một máy tính không có hệ điều hành) có thể làm",
            "type": "multiple-choice",
            "options": [
                "a. Cung cấp các chương trình ứng dụng cho người dùng",
                "b. CPU có thể thực hiện tính toán số học, phát hiện các thiết bị có sẵn như RAM, đĩa, ...",
                "c. Cung cấp giao diện người dùng đồ họa",
                "d. Cung cấp ứng dụng và kết nối mạng cho người dùng"
            ],
            "correctAnswer": "b. CPU có thể thực hiện tính toán số học, phát hiện các thiết bị có sẵn như RAM, đĩa, ..."
        },
        {
            "question": "Câu Hỏi 8: Kỹ thuật nào sau đây giúp giảm thiểu tình trạng nhàn rỗi của CPU hoặc các thiết bị vào/ra khi hệ điều hành đơn vị xử lý ?",
            "type": "multiple-choice",
            "options": [
                "a. sử dụng pipe",
                "b. Sử dụng hành đợi",
                "c. Đa chương trình",
                "d. Hệ điều hành phân tán"
            ],
            "correctAnswer": "c. Đa chương trình"
        },
        {
            "question": "Câu Hỏi 9: Giả sử một hệ thống sử dụng Bộ đệm chuyển đổi (TLB - Translation Look-aside Buffer) để dịch địa chỉ trong phân trang (bảng trang cấp 1). Phát biểu nào là KHÔNG ĐÚNG?",
            "type": "multiple-choice",
            "options": [
                "a. Trong trường hợp xấu nhất, chúng ta cần truy cập cả TLB và bảng trang trong tiến trình dịch địa chỉ",
                "b. Kích thước của TLB thường nhỏ (cỡ thường từ 64 đến 1024)",
                "c. TLB giúp tăng tốc tiến trình dịch địa chỉ",
                "d. Trong mọi trường hợp, trong tiến trình dịch địa chỉ, chúng ta chỉ cần truy cập TLB"
            ],
            "correctAnswer": "d. Trong mọi trường hợp, trong tiến trình dịch địa chỉ, chúng ta chỉ cần truy cập TLB"
        },
        {
            "question": "Câu Hỏi 10: Có 5 tiến trình P1, P2, P3, P4, P5 với thời gian chạy CPU (ms), thời gian đến (ms) và số hiệu ưu tiên như sau:\nThời gian chạy Số hiệu ưu tiên Thời gian đến\nP1 2 2 0\nP2 3 1 3\nP3 8 4 5\nP4 4 5 7\nP5 5 3 9\nSử dụng thuật toán Round Robin với time quantum $q=4$ ms. Khẳng định nào sau đây là đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Thời phản hồi của P3 dài hơn thời phản hồi của P5",
                "b. Thời gian chờ của P3 và thời gian chờ của P5 giống nhau",
                "c. Thời gian phản hồi của P4 dài hơn thời gian phản hồi của P5",
                "d. Thời gian chờ của P4 dài hơn thời gian chờ của P3"
            ],
            "correctAnswer": "d. Thời gian chờ của P4 dài hơn thời gian chờ của P3"
        },
        {
            "question": "Câu Hỏi 11: RAID cấp độ ___ sử dụng chế độ phân dải dữ liệu cấp độ khối và bit chẵn lẻ cho mỗi khối và khối bit chẵn lẻ được lưu trên ổ đĩa riêng.",
            "type": "multiple-choice",
            "options": [
                "a. 2",
                "b. 5",
                "c. 3",
                "d. 4"
            ],
            "correctAnswer": "d. 4"
        },
        {
            "question": "Câu Hỏi 12: Chọn ngôn ngữ mà một CPU có thể hiểu được",
            "type": "multiple-choice",
            "options": [
                "a. C",
                "b. Assembly",
                "c. Mã nhị phân (0110010110)",
                "d. C ++"
            ],
            "correctAnswer": "c. Mã nhị phân (0110010110)"
        },
        {
            "question": "Câu Hỏi 13: Đâu là lý do TỐT NHẤT để chúng ta cần lập lịch trình tiến trình?",
            "type": "multiple-choice",
            "options": [
                "a. Vì hệ thống có nhiều tiến trình để chạy và chúng cần được đối xử bình đẳng",
                "b. Vì nhiều lý do như: nhiều tiến trình, sử dụng tài nguyên hệ thống hiệu quả hơn, không để người dùng phải chờ đợi,",
                "c. Vì hệ thống có nhiều tiến trình để chạy",
                "d. Vì chúng ta cần sử dụng bộ nhớ hiệu quả hơn"
            ],
            "correctAnswer": "b. Vì nhiều lý do như: nhiều tiến trình, sử dụng tài nguyên hệ thống hiệu quả hơn, không để người dùng phải chờ đợi,"
        },
        {
            "question": "Câu Hỏi 14: Những điều kiện ĐÚNG của khu vực quan trọng là gì?",
            "type": "multiple-choice",
            "options": [
                "a. loại trừ lẫn nhau, bảo vệ, giới hạn sử dụng",
                "b. loại trừ lẫn nhau, bảo vệ, chờ đợi ràng buộc",
                "c. loại trừ lẫn nhau, tiến bộ, chờ đợi ràng buộc",
                "d. loại trừ lẫn nhau, chờ đợi ràng buộc, tiến triển"
            ],
            "correctAnswer": "c. loại trừ lẫn nhau, tiến bộ, chờ đợi ràng buộc"
        },
        {
            "question": "Câu Hỏi 15: Trong hệ thống chia sẻ thời gian, thuật toán lập lịch Round Robin:",
            "type": "multiple-choice",
            "options": [
                "a. Sử dụng time quantum rất lớn để chuyển thành thuật toán SJF",
                "b. Sử dụng time quantum rất lớn để chuyển thành thuật toán FCFS",
                "c. Sử dụng time quantum rất nhỏ để chuyển thành thuật toán FCFS",
                "d. Sử dụng time quantum rất nhỏ để tăng hiệu suất thực thi"
            ],
            "correctAnswer": "b. Sử dụng time quantum rất lớn để chuyển thành thuật toán FCFS"
        },
        {
            "question": "Câu Hỏi 16: Cửa ập trong một chương trình là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Một lỗ hổng bảo mật được cho vào trong hệ thống lúc lập trình nhằm mục đích sử dụng sau này",
                "b. Lỗ hổng bảo mật trong mạng",
                "c. Một loại chương trình chống virus",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "a. Một lỗ hổng bảo mật được cho vào trong hệ thống lúc lập trình nhằm mục đích sử dụng sau này"
        },
        {
            "question": "Câu Hỏi 17: Hai tiến trình sau chia sẻ một biến chung X:\nTiến trình A\n{Int Y;\nA1: $Y=X^{*}2;$\nA2: $X=Y;$\n}\nTiến trình B\n{Int Z;\nB1:Z=X+1\nB2: X=Z;\n}\nX được khởi tạo bằng 5 trước khi các tiến trình bắt đầu thực thi. Thông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Có bao nhiêu giá trị khác nhau của X có thể sau khi cả hai tiến trình kết thúc thực thi?",
            "type": "multiple-choice",
            "options": [
                "a. tám",
                "b. hai",
                "c. bốn",
                "d. ba"
            ],
            "correctAnswer": "c. bốn"
        },
        {
            "question": "Câu Hỏi 18: Đâu là phát biểu KHÔNG ĐÚNG về sự phân mảnh?",
            "type": "multiple-choice",
            "options": [
                "a. Có hai loại: phân mảnh bên trong và bên ngoài",
                "b. Không có sự phân mảnh trên ổ đĩa",
                "c. Sự phân mảnh dẫn đến việc sử dụng bộ nhớ kém hiệu quả",
                "d. Sự phân mảnh có thể dẫn đến tình huống một tiến trình không thể chạy mặc dù tổng bộ nhớ trống lớn hơn kích thước tiến trình"
            ],
            "correctAnswer": "b. Không có sự phân mảnh trên ổ đĩa"
        },
        {
            "question": "Câu Hỏi 19: Mô tả ĐÚNG của thư mục là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Một thư mục lưu trữ cả FCB và dữ liệu của tệp",
                "b. Một thư mục lưu trữ tất cả dữ liệu của các tập tin của nó",
                "c. Một thư mục là một phân vùng đĩa",
                "d. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó"
            ],
            "correctAnswer": "d. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó"
        },
        {
            "question": "Câu Hỏi 20: Mục tiêu TỐT NHẤT của stripping trong RAID (Redundant Array of Inexpensive Disks) là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Để tăng tốc độ vào ra (I/O speed)",
                "b. Để tăng kích thước tệp",
                "c. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng",
                "d. Để tăng dung lượng đĩa"
            ],
            "correctAnswer": "a. Để tăng tốc độ vào ra (I/O speed)"
        },
        {
            "question": "Câu Hỏi 21: Khó khăn của cấp phát liên tục là",
            "type": "multiple-choice",
            "options": [
                "a. Việc tìm không gian cho tập tin mới",
                "b. Giá thành cao",
                "c. Không hiệu quả",
                "d. Mất nhiều thời gian"
            ],
            "correctAnswer": "a. Việc tìm không gian cho tập tin mới"
        },
        {
            "question": "Câu Hỏi 22: Vấn đề khó khăn của bộ lập lịch ngắn hạn khi sử dụng SJF là:",
            "type": "multiple-choice",
            "options": [
                "a. Thuật toán sử dụng quá nhiều tài nguyên của hệ thống",
                "b. Thuật toán rất khó hiểu",
                "c. Thuật toán không tối ưu về thời gian chờ",
                "d. Không biết được độ dài của phiên sử dụng CPU tiếp theo của tiến trình"
            ],
            "correctAnswer": "d. Không biết được độ dài của phiên sử dụng CPU tiếp theo của tiến trình"
        },
        {
            "question": "Câu Hỏi 23: Đâu không phải là một thực hiện của khu vực quan trọng?",
            "type": "multiple-choice",
            "options": [
                "a. Giám sát",
                "b. Giải pháp Peterson",
                "c. Điều kiện",
                "d. Semaphore"
            ],
            "correctAnswer": "c. Điều kiện"
        },
        {
            "question": "Câu Hỏi 24: Nguyên tắc nào mà các chương trình, người sử dụng và hệ thống chỉ được cấp đủ quyền để thực hiện nhiệm vụ của chúng?",
            "type": "multiple-choice",
            "options": [
                "a. Nguyên tắc của hệ điều hành",
                "b. Nguyên tắc lập lịch tiến trình",
                "c. Các phương án trên đều sai",
                "d. Nguyên tắc quyền tối thiểu"
            ],
            "correctAnswer": "d. Nguyên tắc quyền tối thiểu"
        },
        {
            "question": "Câu Hỏi 25: Miền bảo vệ của một tiến trình bao gồm",
            "type": "multiple-choice",
            "options": [
                "a. Tập các quyền",
                "b. Tên đối tượng",
                "c. Tên đối tượng và tập các quyền",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "c. Tên đối tượng và tập các quyền"
        },
        {
            "question": "Câu Hỏi 26: Giả sử một hệ thống sử dụng thuật toán lập lịch không cho phép dừng SJF, thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là:P1 (0,7), P2 (2,4), P3 (4,1), P4 (5,5). Tính thời gian quay vòng của P3?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4"
        },
        {
            "question": "Câu Hỏi 27: Có 5 tiến trình P1, P2, P3, P4, P5 với thời gian chạy CPU (ms), thời gian đến (ms) và số hiệu ưu tiên như sau:\nThời gian chạy Số hiệu ưu tiên Thời gian đến\nP1 2 2 0\nP2 3 1 3\nP3 8 4 5\nP4 4 5 7\nP5 5 3 9\nSử dụng thuật toán số hiệu ưu tiên cho phép dừng (tiến trình có số hiệu ưu tiên cao hơn sẽ chạy trước). Khẳng định nào sau đây là đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Thời gian chờ của P2 gấp đôi thời gian chờ của P3",
                "b. Thời gian phản hồi của P4 dài hơn thời gian phản hồi của P5",
                "c. Thời gian chờ của P5 gấp đôi thời gian chờ của P3",
                "d. Thời gian chờ của P4 dài hơn thời gian chờ của P3"
            ],
            "correctAnswer": "d. Thời gian chờ của P4 dài hơn thời gian chờ của P3"
        },
        {
            "question": "Câu Hỏi 28: Điều nào ĐÚNG về mục tiêu của điều kiện tiến triển của khu vực quan trọng?",
            "type": "multiple-choice",
            "options": [
                "a. Nó hỗ trợ sự ưu tiên của các tiến trình",
                "b. Nó làm cho việc sử dụng tài nguyên được chia sẻ một cách hiệu quả",
                "c. Nó làm cho thuật toán phức tạp khi thực hiện",
                "d. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ"
            ],
            "correctAnswer": "b. Nó làm cho việc sử dụng tài nguyên được chia sẻ một cách hiệu quả"
        },
        {
            "question": "Câu Hỏi 29: Giả sử một hệ thống sử dụng thuật toán lập lịch RR, thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là: P1 (0,20), P2 (30,10), P3 (20,40), P4 (40,25) và lượng tử thời gian là 15. Tổng thời gian chờ của các tiến trình là gì?",
            "type": "multiple-choice",
            "options": [
                "a. 40",
                "b. 60",
                "c. 70",
                "d. 50"
            ],
            "correctAnswer": "d. 50"
        },
        {
            "question": "Câu Hỏi 30: Sử dụng kỹ thuật phân trang:",
            "type": "multiple-choice",
            "options": [
                "a. giảm thời gian swapping",
                "b. giảm dung lượng bộ nhớ ảo",
                "c. làm tăng thời gian swapping X",
                "d. làm tăng dung lượng bộ nhớ vật lý cần thiết"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 31: Hệ điều hành cung cấp phương thức nào để truy cập đến các dịch vụ của hệ điều hành:",
            "type": "multiple-choice",
            "options": [
                "a. Các hàm hệ thống",
                "b. Các thư viện",
                "c. API",
                "d. Các lệnh assembly"
            ],
            "correctAnswer": "a. Các hàm hệ thống"
        },
        {
            "question": "Câu Hỏi 32: Nếu không gian được cấp phát cho một tập tin quá ít,",
            "type": "multiple-choice",
            "options": [
                "a. sẽ không có bất kỳ không gian cho dữ liệu vì khối điều khiển tập tin chiếm tất cả",
                "b. tập tin sẽ không làm việc",
                "c. tập tin không thể mở rộng được",
                "d. tập tin không thể mở được"
            ],
            "correctAnswer": "c. tập tin không thể mở rộng được"
        },
        {
            "question": "Câu Hỏi 33: Tình huống mà một số tiến trình truy cập và thao tác đồng thời trên cùng một vùng dữ liệu và kết quả của việc thực hiện phụ thuộc vào thứ tự các tiến trình truy cập vào vùng dữ liệu được gọi là:",
            "type": "multiple-choice",
            "options": [
                "a. quá trình lão hóa",
                "b. điều kiện tương tranh",
                "c. tính nhất quán dữ liệu",
                "d. nạn đói"
            ],
            "correctAnswer": "b. điều kiện tương tranh"
        },
        {
            "question": "Câu Hỏi 34: Truyền thông giữa các tiến trình",
            "type": "multiple-choice",
            "options": [
                "a. không bao giờ cần",
                "b. cho phép tiến trình đồng bộ hoá hoạt động",
                "c. là cần thiết đối với tất cả các tiến trình",
                "d. được thực hiện thông qua ổ đĩa"
            ],
            "correctAnswer": "b. cho phép tiến trình đồng bộ hoá hoạt động"
        },
        {
            "question": "Câu Hỏi 35: Các câu lệnh đang được thực thi cần:",
            "type": "multiple-choice",
            "options": [
                "a. ở trong thiết bị",
                "b. Các phương án trên đều sai",
                "c. ở trong bộ nhớ logic",
                "d. ở trong bộ nhớ vật lý"
            ],
            "correctAnswer": "d. ở trong bộ nhớ vật lý"
        },
        {
            "question": "Câu Hỏi 36: Hạn chế của thuật toán banker là gì ?",
            "type": "multiple-choice",
            "options": [
                "a. nguồn tài nguyên đang có sẵn có thể không còn",
                "b. ít khi biết trước tiến trình cần bao nhiêu tài nguyên",
                "c. số lượng các tiến trình thay đổi theo thời gian",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "d. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 37: Đâu là lý do tại sao một tiến trình có thể chạy khi chỉ một phần của nó được tải vào bộ nhớ?",
            "type": "multiple-choice",
            "options": [
                "a. Vì chỉ có một lệnh được thực thi tại một thời điểm",
                "b. Vì các câu lệnh liên quan luôn nằm trong cùng một nhóm",
                "c. Bởi vì chúng có thể chỉ ra các câu lệnh nào để chạy",
                "d. Bởi vì các câu lệnh của một tiến trình là độc lập"
            ],
            "correctAnswer": "a. Vì chỉ có một lệnh được thực thi tại một thời điểm"
        },
        {
            "question": "Câu Hỏi 38: Bảng ma trận truy cập toàn cục chứa",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các phương án trên",
                "b. Tập các quyền",
                "c. Miền",
                "d. Đối tượng"
            ],
            "correctAnswer": "a. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 39: Đâu là phát biểu ĐÚNG về tình huống tương tranh (race condition)?",
            "type": "multiple-choice",
            "options": [
                "a. Nó xảy ra khi nhiều tiến trình đồng thời thao tác với một tài nguyên được chia sẻ",
                "b. Nó xảy ra ngay cả trong trường hợp chỉ có một tiến trình",
                "c. Nó xảy ra khi nhiều tiến trình thao tác tuần tự một tài nguyên được chia sẻ",
                "d. Nó xảy ra khi có nhiều tiến trình trong hệ thống"
            ],
            "correctAnswer": "a. Nó xảy ra khi nhiều tiến trình đồng thời thao tác với một tài nguyên được chia sẻ"
        },
        {
            "question": "Câu Hỏi 40: Điều kiện loại trừ lẫn nhau có thể được đảm bảo bằng cách sử dụng",
            "type": "multiple-choice",
            "options": [
                "a. Khoá mutex và Semaphore nhị phân",
                "b. Khoá mutex",
                "c. Cả ba phương án trên đều sai",
                "d. Semaphore nhị phân"
            ],
            "correctAnswer": "a. Khoá mutex và Semaphore nhị phân"
        },
        {
            "question": "Câu Hỏi 41: Chương trình sau đây bao gồm 3 tiến trình đang chạy và 3 semaphore nhị phân. Các semaphore được khởi tạo như sau $S0=1$, $S1=0,$ $S2=0$. Tiến trình PO Tiến trình P1 Tiến trình P2 while(true) { wait(S1); wait(S2); wait(S0); signal (SO); signal (SO); print '0'; signal(S1); signal (S2);} Bao nhiêu lần P0 sẽ in '0'?",
            "type": "multiple-choice",
            "options": [
                "a. Chính xác hai lần",
                "b. Chính xác ba lần",
                "c. Chính xác một lần",
                "d. Có ít nhất hai lần"
            ],
            "correctAnswer": "c. Chính xác một lần"
        },
        {
            "question": "Câu Hỏi 42: Cấp phát chỉ mục ___ truy cập trực tiếp.",
            "type": "multiple-choice",
            "options": [
                "a. không liên quan đến",
                "b. không hỗ trợ",
                "c. hỗ trợ",
                "d. Cả ba phương án trên đều sai"
            ],
            "correctAnswer": "c. hỗ trợ"
        },
        {
            "question": "Câu Hỏi 43: Nếu tất cả các tiến trình liên tục vào/ra dữ liệu thì hàng đợi sẵn sàng sẽ luôn........ bộ lập lịch ngắn hạn sẽ làm việc ..",
            "type": "multiple-choice",
            "options": [
                "a. trống rỗng, rất nhiều X",
                "b. trống rỗng, ít",
                "c. đầy, rất nhiều",
                "d. đầy, ít"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 44: Đâu là điều KHÔNG ĐÚNG về hệ thống theo mẻ/hàng loạt?",
            "type": "multiple-choice",
            "options": [
                "a. Là một hệ điều hành đơn giản.",
                "b. Có thể sử dụng cơ chế FIFO",
                "c. Cho phép nhiều người sử dụng máy tính đồng thời",
                "d. Không giống hệ thống chia sẻ thời gian"
            ],
            "correctAnswer": "c. Cho phép nhiều người sử dụng máy tính đồng thời"
        },
        {
            "question": "Câu Hỏi 45: Đâu là phát biểu KHÔNG ĐÚNG về phân trang (bảng trang cấp 1)?",
            "type": "multiple-choice",
            "options": [
                "a. Các trang có kích thước bằng nhau",
                "b. Kích thước trang bằng kích thước khung",
                "c. Không gian ảo cũng được chia thành các trang",
                "d. Đây là một phương pháp cấp phát bộ nhớ liền kề"
            ],
            "correctAnswer": "d. Đây là một phương pháp cấp phát bộ nhớ liền kề"
        }
    ]
    , [
        {
            "question": "Câu Hỏi 1: Tập tin virus thường được gắn với",
            "type": "multiple-choice",
            "options": [
                "a. Tập tin thực thi",
                "b. Tất cả các phương án trên",
                "c. Tập tin đối tượng",
                "d. Tập tin nguồn"
            ],
            "correctAnswer": "a. Tập tin thực thi"
        },
        {
            "question": "Câu Hỏi 2: Truyền thông giữa các tiến trình",
            "type": "multiple-choice",
            "options": [
                "a. không bao giờ cần",
                "b. cho phép tiến trình đồng bộ hoá hoạt động",
                "c. được thực hiện thông qua ổ đĩa",
                "d. là cần thiết đối với tất cả các tiến trình"
            ],
            "correctAnswer": "b. cho phép tiến trình đồng bộ hoá hoạt động"
        },
        {
            "question": "Câu Hỏi 3: Cho chuỗi tham chiếu: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Giả sử hệ thống sử dụng thuật toán thay thế trang Least Recent Used(LRU) với 3 khung. Hãy tính tổng số lỗi trang?",
            "type": "fill-in-the-blank",
            "correctAnswer": "10"
        },
        {
            "question": "Câu Hỏi 4: Chọn ngôn ngữ mà một CPU có thể hiểu được",
            "type": "multiple-choice",
            "options": [
                "a. C ++",
                "b. C",
                "c. Assembly",
                "d. Mã nhị phân (0110010110)"
            ],
            "correctAnswer": "d. Mã nhị phân (0110010110)"
        },
        {
            "question": "Câu Hỏi 5: Cho chuỗi tham chiếu: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Giả sử thuật toán Tối ưu (thay thế trang) được sử dụng với 4 khung, hãy tính toán tổng số lỗi trang?",
            "type": "fill-in-the-blank",
            "correctAnswer": "6"
        },
        {
            "question": "Câu Hỏi 6: Phòng ngừa bế tắc là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Khôi phục hệ thống nếu tồn tại bế tắc",
                "b. Tránh một trong bốn điều kiện bế tắc xảy ra",
                "c. Bất cứ khi nào hệ thống phân bổ tài nguyên, nó sẽ kiểm tra xem hệ thống có ở trạng thái bế tắc không",
                "d. Luôn kiểm tra xem hệ thống có ở trạng thái bế tắc không"
            ],
            "correctAnswer": "b. Tránh một trong bốn điều kiện bế tắc xảy ra"
        },
        {
            "question": "Câu Hỏi 7: ___ là một cách tiếp cận để hạn chế quyền truy cập hệ thống đối với người dùng được uỷ quyền.",
            "type": "multiple-choice",
            "options": [
                "a. Kiểm soát truy cập dựa trên vai trò",
                "b. Kiểm soát truy cập dựa trên nhiệm vụ",
                "c. Các phương án trên đều sai",
                "d. Kiểm soát truy cập dựa trên tiến trình"
            ],
            "correctAnswer": "a. Kiểm soát truy cập dựa trên vai trò"
        },
        {
            "question": "Câu Hỏi 8: Hệ thống truyền thông điệp cho phép các tiến trình:",
            "type": "multiple-choice",
            "options": [
                "a. chia sẻ dữ liệu",
                "b. Trao đổi với nhau mà không cần đến chia sẻ dữ liệu",
                "c. Trao đổi với nhau bằng cách chia sẻ dữ liệu",
                "d. Định danh người gửi và người nhận thông điệp"
            ],
            "correctAnswer": "b. Trao đổi với nhau mà không cần đến chia sẻ dữ liệu"
        },
        {
            "question": "Câu Hỏi 9: Đâu không phải là một phương pháp xử lý bế tắc?",
            "type": "multiple-choice",
            "options": [
                "a. phòng ngừa bế tắc",
                "b. dự đoán bế tắc",
                "c. bỏ qua bế tắc",
                "d. tránh bế tắc"
            ],
            "correctAnswer": "c. bỏ qua bế tắc"
        },
        {
            "question": "Câu Hỏi 10: Có 5 tiến trình P1, P2, P3, P4, P5 với thời gian chạy CPU (ms), thời gian đến (ms) như sau:\nThời gian chạy Thời gian đến\nP1 3 0\nP2 12 4\nP3 4 6\nP4 7 8\nP5 3 11\nSử dụng thuật toán SJF cho phép dừng. Khẳng định nào sau đây là đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Thời gian chờ của P2 và thời gian chờ của P5 giống nhau",
                "b. Thời gian chờ của P2 dài hơn thời gian chờ của P4",
                "c. Thời phản hồi của P3 dài hơn thời phản hồi của P4",
                "d. Thời gian chờ của P3 dài hơn thời gian chờ của P2"
            ],
            "correctAnswer": "d. Thời gian chờ của P3 dài hơn thời gian chờ của P2"
        },
        {
            "question": "Câu Hỏi 11: Nếu thời gian truy cập bộ nhớ được ký hiệu là 'ma' và 'p' là xác suất bị lỗi trang (0 <= p <= 1), thì thời gian truy cập hiệu quả cho một bộ nhớ phân trang theo yêu cầu là:",
            "type": "multiple-choice",
            "options": [
                "a. p x ma + (1-p) x thời gian phát sinh do lỗi trang",
                "b. Các phương án trên đều sai",
                "c. ma + thời gian phát sinh do lỗi trang",
                "d. (1-p) x ma + p x thời gian phát sinh do lỗi trang"
            ],
            "correctAnswer": "d. (1-p) x ma + p x thời gian phát sinh do lỗi trang"
        },
        {
            "question": "Câu Hỏi 12: Trong truyền thông gián tiếp giữa tiến trình P và Q:",
            "type": "multiple-choice",
            "options": [
                "a. có một máy giữa hai tiến trình để giúp cho việc truyền thông",
                "b. Cả ba phương án trên đều sai",
                "c. có một hộp thư để giúp cho việc truyền thông giữa P và Q",
                "d. có một tiến trình xử lý và truyền các thông điệp giữa P và Q"
            ],
            "correctAnswer": "c. có một hộp thư để giúp cho việc truyền thông giữa P và Q"
        },
        {
            "question": "Câu Hỏi 13: Chọn mô tả tốt nhất về hệ điều hành cho máy tính",
            "type": "multiple-choice",
            "options": [
                "a. Chúng là phần mềm",
                "b. Chúng là các chương trình ứng dụng",
                "c. Chúng là phần mềm nằm giữa người dùng và phần cứng máy tính",
                "d. Chúng là những thư viện"
            ],
            "correctAnswer": "c. Chúng là phần mềm nằm giữa người dùng và phần cứng máy tính"
        },
        {
            "question": "Câu Hỏi 14: Ý nào KHÔNG ĐÚNG về việc không cho phép dừng trong các thuật toán lập lịch CPU?",
            "type": "multiple-choice",
            "options": [
                "a. Chỉ có tiến trình hiện tại có thể sử dụng CPU",
                "b. Tiến trình hiện tại sẽ luôn được chạy cho đến khi chấm dứt",
                "c. Tiến trình hiện tại có thể được chuyển sang trạng waiting",
                "d. FIFO là một thuật toán lập lịch không cho phép dừng"
            ],
            "correctAnswer": "c. Tiến trình hiện tại có thể được chuyển sang trạng waiting"
        },
        {
            "question": "Câu Hỏi 15: Đâu là phát biểu KHÔNG ĐÚNG về Hệ thống tệp ảo (VFS - Virtual File System)?",
            "type": "multiple-choice",
            "options": [
                "a. VFS cung cấp Giao diện lập trình ứng dụng (API - Application Programming Interface) hợp nhất cho các hệ thống tệp khác nhau",
                "b. VFS cho phép một hệ thống có một số hệ thống tệp khác nhau",
                "c. VFS ẩn việc triển khai chi tiết hệ thống tệp riêng lẻ",
                "d. VFS có sẵn trong tất cả các hệ điều hành"
            ],
            "correctAnswer": "d. VFS có sẵn trong tất cả các hệ điều hành"
        },
        {
            "question": "Câu Hỏi 16: Để bảo vệ hệ thống, một tiến trình nên được truy cập",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các phương án trên",
                "b. Một số ít tài nguyên nhưng việc cấp quyền là không cần thiết",
                "c. Chỉ những nguồn tài nguyên mà nó được cấp quyền",
                "d. Tất cả các nguồn tài nguyên"
            ],
            "correctAnswer": "c. Chỉ những nguồn tài nguyên mà nó được cấp quyền"
        },
        {
            "question": "Câu Hỏi 17: RAID cấp độ ___ phân bố bịt chẵn lẻ và dữ liệu trên tất cả $N+1$ ổ đĩa thay vì lưu dữ liệu trên N ổ đĩa và bịt chẵn lẻ trên một ổ đĩa riêng.",
            "type": "multiple-choice",
            "options": [
                "a. 2",
                "b. 4",
                "c. 3",
                "d. 5"
            ],
            "correctAnswer": "d. 5"
        },
        {
            "question": "Câu Hỏi 18: Đâu không phải là phương pháp cấp phát không gian trên ổ đĩa:",
            "type": "multiple-choice",
            "options": [
                "a. chỉ mục",
                "b. liên tục",
                "c. liên kết",
                "d. băm"
            ],
            "correctAnswer": "d. băm"
        },
        {
            "question": "Câu Hỏi 19: Mô tả ĐÚNG của thư mục là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó",
                "b. Một thư mục lưu trữ cả FCB và dữ liệu của tệp",
                "c. Một thư mục là một phân vùng đĩa",
                "d. Một thư mục lưu trữ tất cả dữ liệu của các tập tin của nó"
            ],
            "correctAnswer": "a. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó"
        },
        {
            "question": "Câu Hỏi 20: Semaphore là một ___ để giải quyết bài toán khu vực quan trọng.",
            "type": "multiple-choice",
            "options": [
                "a. chương trình đặc biệt của một hệ thống",
                "b. luồng trong hệ thống",
                "c. biến số nguyên",
                "d. phần cứng của hệ thống"
            ],
            "correctAnswer": "c. biến số nguyên"
        },
        {
            "question": "Câu Hỏi 21: Đâu là phát biểu ĐÚNG về biến số Work trong thuật toán banker?",
            "type": "multiple-choice",
            "options": [
                "a. Đây là một biến dư thừa",
                "b. Nó lưu trữ số lượng phiên bản tài nguyên của mỗi tiến trình",
                "c. Nó lưu trữ số lượng các thể hiện tài nguyên có sẵn khi một tiến trình bị chấm dứt",
                "d. Nó lưu trữ trạng thái của hệ thống"
            ],
            "correctAnswer": "d. Nó lưu trữ trạng thái của hệ thống"
        },
        {
            "question": "Câu Hỏi 22: Mục đích của đa chương trình là:",
            "type": "multiple-choice",
            "options": [
                "a. Tối đa hoá việc sử dụng CPU",
                "b. Tối đa hoá mức sử dụng bộ nhớ",
                "c. Tối đa hoá mức sử dụng các thiết bị vào ra",
                "d. Có nhiều chương trình chờ trong hàng đợi sẵn sàng để chạy"
            ],
            "correctAnswer": "a. Tối đa hoá việc sử dụng CPU"
        },
        {
            "question": "Câu Hỏi 23: Nội dung nào sau đây không được lưu khi chuyển trạng giữa các tiến trình:",
            "type": "multiple-choice",
            "options": [
                "a. Các thanh ghi thông thường X",
                "b. TLB",
                "c. Tất cả các phương án trên",
                "d. Bộ đếm chương trình"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 24: Mỗi tập tin có _______________ chứa thông tin về tập tin như quyền sở hữu, quyền truy cập, vị trí nội dung tập tin.",
            "type": "multiple-choice",
            "options": [
                "a. Metadata",
                "b. Khối điểu khiển tiến trình",
                "c. Bảng chỉ mục",
                "d. Khối điều khiển tập tin"
            ],
            "correctAnswer": "d. Khối điều khiển tập tin"
        },
        {
            "question": "Câu Hỏi 25: Giả sử một hệ thống sử dụng phân bổ bộ nhớ phân đoạn. Nội dung của bảng phân đoạn (giới hạn, cơ sở) của một tiến trình là [(1000, 1400), (400, 6300), (400, 4300), (1100, 3200), (1000, 4700)]. Tính địa chỉ vật lý của tham chiếu (1, 106)?",
            "type": "fill-in-the-blank",
            "correctAnswer": "6406"
        },
        {
            "question": "Câu Hỏi 26: Nếu tập các nguồn tài nguyên sẵn có cho một tiến trình là cố định trong suốt cuộc đời của nó thì miền của tiến trình đó là ____________",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. Tĩnh",
                "c. Động",
                "d. Không phải tĩnh cũng không phải động"
            ],
            "correctAnswer": "b. Tĩnh"
        },
        {
            "question": "Câu Hỏi 27: Hệ điều hành Linux có",
            "type": "multiple-choice",
            "options": [
                "a. Vi nhân (microkernel)",
                "b. Các phương án trên đều sai",
                "c. Nhân (kernel) monolithic có modules",
                "d. Nhân (kernel) monolithic"
            ],
            "correctAnswer": "c. Nhân (kernel) monolithic có modules"
        },
        {
            "question": "Câu Hỏi 28: Nếu không gian được cấp phát cho một tập tin quá ít,",
            "type": "multiple-choice",
            "options": [
                "a. tập tin không thể mở rộng được",
                "b. sẽ không có bất kỳ không gian cho dữ liệu vì khối điều khiển tập tin chiếm tất cả",
                "c. tập tin không thể mở được",
                "d. tập tin sẽ không làm việc"
            ],
            "correctAnswer": "a. tập tin không thể mở rộng được"
        },
        {
            "question": "Câu Hỏi 29: Một tiến trình có thể bị dừng do:",
            "type": "multiple-choice",
            "options": [
                "a. Bị giết chết bởi một tiến trình khác",
                "b. Thực thi kết thúc bình thường",
                "c. Tất cả các phương án trên",
                "d. Bị lỗi nghiêm trọng"
            ],
            "correctAnswer": "c. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 30: Hai tiến trình, P1 và P2, cần truy cập vào khu vực quan trọng. Xem xét đoạn mã đồng bộ hóa sau được sử dụng bởi các tiến trình:\nP1:\nwhile(true)\n{\nw1 = true;\nwhile(w2 == true);\nCritical section\nw1 = false;\n}\nRemainder Section\nP2 :\nwhile(true)\n{\nw2 = true;\nwhile(w1 == true);\nCritical section\nw2 = false;\n}\nRemainder Section\nỞ đây, w1 và w2 là các biến chia sẻ, được khởi tạo bằng false. Điều nào dưới đây là đúng về đoạn mã trên ?",
            "type": "multiple-choice",
            "options": [
                "a. Các tiến trình lần lượt vào khu vực quan trọng",
                "b. Nó không đảm bảo tính loại trừ lẫn nhau",
                "c. Nó không đảm bảo tính chờ đợi có giới hạn",
                "d. Bế tắc có thể xảy ra, nhưng đảm bảo tính loại trừ lẫn nhau"
            ],
            "correctAnswer": "d. Bế tắc có thể xảy ra, nhưng đảm bảo tính loại trừ lẫn nhau"
        },
        {
            "question": "Câu Hỏi 31: Đâu là điều KHÔNG ĐÚNG về một chương trình ứng dụng?",
            "type": "multiple-choice",
            "options": [
                "a. Nó phục vụ một nhiệm vụ nhất định cho người dùng hoặc lập trình viên",
                "b. Nó có thể được tổ chức thành nhiều tập tin trên đĩa.",
                "c. Nó kiểm soát vào/ra (chẳng hạn như thao tác đọc /ghi trên đĩa)",
                "d. Hệ thống quản lý cơ sở dữ liệu là một ví dụ về ứng dụng"
            ],
            "correctAnswer": "c. Nó kiểm soát vào/ra (chẳng hạn như thao tác đọc /ghi trên đĩa)"
        },
        {
            "question": "Câu Hỏi 32: Round Robin là phiên bản cho phép dừng của thuật toán nào sau đây ?",
            "type": "multiple-choice",
            "options": [
                "a. SJF",
                "b. FCFS",
                "c. LJF (thời gian ngắn nhất trước)",
                "d. Priority (Thứ tự ưu tiên)"
            ],
            "correctAnswer": "b. FCFS"
        },
        {
            "question": "Câu Hỏi 33: Phát biểu nào KHÔNG ĐÚNG về thuật toán phát hiện bế tắc dựa trên biểu đồ?",
            "type": "multiple-choice",
            "options": [
                "a. Các đỉnh của biểu đồ có thể biểu thị các tiến trình hoặc tài nguyên",
                "b. Một cạnh từ đỉnh này sang đỉnh khác có nghĩa là một tiến trình đang chờ tài nguyên được giữ bởi tiến trình khác",
                "c. Nếu có một chu kỳ, hệ thống ở trạng thái bế tắc",
                "d. Các đỉnh của đồ thị biểu thị các tiến trình"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 34: Mục tiêu chính xác của điều kiện tiến triển của khu vực quan trọng là gì?",
            "type": "multiple-choice",
            "options": [
                "a. tối đa hóa việc sử dụng RAM",
                "b. tối đa hóa việc sử dụng CPU",
                "c. tối đa hóa việc sử dụng tài nguyên được chia sẻ",
                "d. tối đa hóa việc sử dụng ổ đĩa"
            ],
            "correctAnswer": "c. tối đa hóa việc sử dụng tài nguyên được chia sẻ"
        },
        {
            "question": "Câu Hỏi 35: Giả sử một hệ thống sử dụng phân bổ tỷ lệ dựa trên kích thước của các tiến trình. Có hai tiến trình A và B với kích thước tương ứng là 10 và 127 khung. Nếu bộ nhớ có kích thước 64 khung, tính số khung được phân bổ cho A và B? (Số khung được phân bổ cho A và B được viết liền nhau theo thứ tự tương ứng và ngăn cách bởi dấu phẩy. VD: 3,35)",
            "type": "fill-in-the-blank",
            "correctAnswer": "5,59"
        },
        {
            "question": "Câu Hỏi 36: Khi một tiến trình kết thúc:",
            "type": "multiple-choice",
            "options": [
                "a. Nó bị loại ra khỏi tất cả các hàng đợi",
                "b. Nó bị loại ra khỏi tất cả các hàng đợi trừ hàng đợi nhiệm vụ",
                "c. Khối điều khiển tiến trình của nó được lưu ở tập tin log của hệ thống",
                "d. Nó vào hàng đợi kết thúc"
            ],
            "correctAnswer": "a. Nó bị loại ra khỏi tất cả các hàng đợi"
        },
        {
            "question": "Câu Hỏi 37: Trong thuật toán lập lịch đa cấp phản hồi,",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình không thể chuyển đổi giữa các cấp hàng đợi",
                "b. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác",
                "c. tiến trình không bị phân thành các nhóm khác nhau",
                "d. tiến trình liên tục gửi thông điệp cho hệ thống"
            ],
            "correctAnswer": "b. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác"
        },
        {
            "question": "Câu Hỏi 38: Hai tiến trình sau chia sẻ một biến chung X (khởi tạo bằng 5), và hai semaphore nhị phân S1, S2 (khởi tạo bằng 0):\nTiến trình A\n{int Y;\nwait(S1);\nA1: Y = X*2;\nsignal(S2);\nwait(S1);\nA2: X = Y;\n}\nTiến trình B\n{int Z;\nB1: Z=X+1;\nsignal(S1);\nwait(S2);\nB2: X=Z;\nsignal(S1);\n}\nThông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Giá trị cuối cùng của X sau khi thực thi xong hai tiến trình A và B sẽ là:",
            "type": "multiple-choice",
            "options": [
                "a. 12",
                "b. 11",
                "c. 10",
                "d. 6"
            ],
            "correctAnswer": "b. 11"
        },
        {
            "question": "Câu Hỏi 39: Đâu là phát biểu KHÔNG ĐÚNG về bảo vệ bộ nhớ trong phân trang?",
            "type": "multiple-choice",
            "options": [
                "a. Nếu bit là valid, trang tương ứng đã được tải vào bộ nhớ",
                "b. Mỗi mục trong bảng trang có một bit valid/invalid",
                "c. Nếu bit là invalid , trang tương ứng KHÔNG được tải vào bộ nhớ",
                "d. Nếu bit là NULL, trang tương ứng KHÔNG được tải vào bộ nhớ"
            ],
            "correctAnswer": "d. Nếu bit là NULL, trang tương ứng KHÔNG được tải vào bộ nhớ"
        },
        {
            "question": "Câu Hỏi 40: Chương trình sau đây bao gồm 3 tiến trình đang chạy và 3 semaphore nhị phân. Các semaphore được khởi tạo như sau S0 = 1, S1 = 0, S2 = 0. Tiến trình P0 Tiến trình P1 Tiến trình P2 while(true) { wait(S1); wait(S2); wait(S0); signal (S0); signal (S0); print ‘0’; signal(S1); signal (S2);} Bao nhiêu lần P0 sẽ in '0'?",
            "type": "multiple-choice",
            "options": [
                "a. Chính xác ba lần",
                "b. Chính xác hai lần",
                "c. Chính xác một lần",
                "d. Có ít nhất hai lần"
            ],
            "correctAnswer": "c. Chính xác một lần"
        },
        {
            "question": "Câu Hỏi 41: Mô-đun nào giao quyền kiểm soát CPU cho tiến trình được lựa chọn bởi bộ lập lịch ngắn hạn ?",
            "type": "multiple-choice",
            "options": [
                "a. ngắt",
                "b. bộ lập lịch",
                "c. bộ điều phối",
                "d. Cả ba phương án trên"
            ],
            "correctAnswer": "c. bộ điều phối"
        },
        {
            "question": "Câu Hỏi 42: Giả sử một hệ thống có RAM 4GB được phân trang với kích thước khung là 1KB. Đâu là kích thước tối đa của một bảng trang?",
            "type": "multiple-choice",
            "options": [
                "a. 2 MB",
                "b. 1 MB",
                "c. 4 MB",
                "d. 8 MB"
            ],
            "correctAnswer": "c. 4 MB"
        },
        {
            "question": "Câu Hỏi 43: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba.Tính số khối chỉ mục tối đa nếu con trỏ gián tiếp kép được sử dụng?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 44: Đâu là phát biểu KHÔNG ĐÚNG về phân đoạn (trong phân bổ bộ nhớ)?",
            "type": "multiple-choice",
            "options": [
                "a. Một bit valid/invalid là cần thiết để bảo vệ bộ nhớ",
                "b. Có sự phân mảnh bên trong",
                "c. Đây là trường hợp đặc biệt của Đa chương trình với số nhiệm vụ thay đổi (MVT - Multiprogramming with a Variable number of Tasks ), trong đó mỗi tiến trình (trong MVT) tương ứng với một phân đoạn (trong phân đoạn)",
                "d. Đó là phân bổ bộ nhớ không liền kề"
            ],
            "correctAnswer": "b. Có sự phân mảnh bên trong"
        },
        {
            "question": "Câu Hỏi 45: ______________________ không xảy ra với cấp phát liên kết.",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên",
                "b. Nạn đói",
                "c. Hiện tượng phân mảnh ngoài",
                "d. Hiện tượng phân mảnh trong"
            ],
            "correctAnswer": "c. Hiện tượng phân mảnh ngoài"
        }
    ]
    ,
    [
        {
            "question": "Câu Hỏi 1: Chọn mô tả tốt nhất về hệ điều hành cho máy tính",
            "type": "multiple-choice",
            "options": [
                "a. Chúng là phần mềm nằm giữa người dùng và phần cứng máy tính",
                "b. Chúng là những thư viện",
                "c. Chúng là các chương trình ứng dụng",
                "d. Chúng là phần mềm"
            ],
            "correctAnswer": "a. Chúng là phần mềm nằm giữa người dùng và phần cứng máy tính"
        },
        {
            "question": "Câu Hỏi 2: Nội dung nào sau đây không được lưu khi chuyển trạng giữa các tiến trình:",
            "type": "multiple-choice",
            "options": [
                "a. TLB",
                "b. Các thanh ghi thông thường",
                "c. Bộ đếm chương trình",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 3: Đâu là thuật toán lập lịch CPU không cho phép dừng?",
            "type": "multiple-choice",
            "options": [
                "a. FIFO",
                "b. Round robin",
                "c. SRTF",
                "d. Không có thuật toán nào"
            ],
            "correctAnswer": "a. FIFO"
        },
        {
            "question": "Câu Hỏi 4: Chọn mã chương trình mà một CPU có thể hiểu và thực thi được",
            "type": "multiple-choice",
            "options": [
                "a. a = a + b",
                "b. 0110010110",
                "c. c.open ();",
                "d. add AX, BX"
            ],
            "correctAnswer": "b. 0110010110"
        },
        {
            "question": "Câu Hỏi 5: Điều kiện loại trừ lẫn nhau có thể được đảm bảo bằng cách sử dụng _________.",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên đều sai",
                "b. Khoá mutex và Semaphore nhị phân",
                "c. Semaphore nhị phân",
                "d. Khoá mutex"
            ],
            "correctAnswer": "b. Khoá mutex và Semaphore nhị phân"
        },
        {
            "question": "Câu Hỏi 6: Giả sử một hệ thống sử dụng thuật toán lập lịch FCFS, thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là: P1 (0,21), P2 (30,10), P3 (20,40), P4 (50,15). Hiển thị thứ tự mà các tiến trình được chạy (các tiến trình được viết liền nhau và ngăn cách bởi dấu phấy. VD: P1,P2,P3,P4)?",
            "type": "fill-in-the-blank",
            "correctAnswer": "P1,P3,P2,P4"
        },
        {
            "question": "Câu Hỏi 7: Nếu một ổ đĩa gặp sự cố trong RAID cấp độ ___________ thì phục hồi lại dữ liệu bị mất là đơn giản nhất so với RAID ở các cấp độ khác.",
            "type": "multiple-choice",
            "options": [
                "a. 3",
                "b. 2",
                "c. 4",
                "d. 1"
            ],
            "correctAnswer": "d. 1"
        },
        {
            "question": "Câu Hỏi 8: Semaphore dùng để _____________________",
            "type": "multiple-choice",
            "options": [
                "a. đồng bộ hoá các tài nguyên quan trọng nhằm tránh bế tắc",
                "b. thực thi nhiện vụ vào/ra dữ liệu",
                "c. đồng bộ hoá các tài nguyên quan trọng nhằm tránh hiện tượng tranh chấp",
                "d. quản lý bộ nhớ"
            ],
            "correctAnswer": "c. đồng bộ hoá các tài nguyên quan trọng nhằm tránh hiện tượng tranh chấp"
        },
        {
            "question": "Câu Hỏi 9: Đâu là một TIÊU CHUẨN để hủy bỏ một tiến trình trong bế tắc để phục hồi hệ thống?",
            "type": "multiple-choice",
            "options": [
                "a. Tổng số tài nguyên có sẵn trong hệ thống",
                "b. Số lượng tài nguyên mà tiến trình cần để kết thúc",
                "c. Số lượng tiến trình trong hệ thống",
                "d. Bộ nhớ khả dụng"
            ],
            "correctAnswer": "b. Số lượng tài nguyên mà tiến trình cần để kết thúc"
        },
        {
            "question": "Câu Hỏi 10: Giả sử một hệ thống có RAM 4GB được phân trang với kích thước khung là 1KB. Đâu là kích thước tối đa của một bảng trang?",
            "type": "multiple-choice",
            "options": [
                "a. 8 MB",
                "b. 4 MB",
                "c. 2 MB",
                "d. 1 MB"
            ],
            "correctAnswer": "b. 4 MB"
        },
        {
            "question": "Câu Hỏi 11: Windows XP thuộc loại hệ điều hành nào?",
            "type": "multiple-choice",
            "options": [
                "a. Đa chương trình",
                "b. Mục đích đặc biệt",
                "c. Nhúng",
                "d. Đơn chương trình"
            ],
            "correctAnswer": "a. Đa chương trình"
        },
        {
            "question": "Câu Hỏi 12: Để bảo vệ hệ thống, một tiến trình nên được truy cập__________",
            "type": "multiple-choice",
            "options": [
                "a. Chỉ những nguồn tài nguyên mà nó được cấp quyền",
                "b. Một số ít tài nguyên nhưng việc cấp quyền là không cần thiết",
                "c. Tất cả các phương án trên",
                "d. Tất cả các nguồn tài nguyên"
            ],
            "correctAnswer": "a. Chỉ những nguồn tài nguyên mà nó được cấp quyền"
        },
        {
            "question": "Câu Hỏi 13: Đâu là phát biểu KHÔNG ĐÚNG về phân đoạn (trong phân bổ bộ nhớ)?",
            "type": "multiple-choice",
            "options": [
                "a. Một bit valid/invalid được bao gồm để bảo vệ bộ nhớ",
                "b. Một bảng trang là cần thiết để dịch địa chỉ",
                "c. Đó là phân bổ bộ nhớ không liền kề",
                "d. Cần có bảng phân đoạn để dịch địa chỉ"
            ],
            "correctAnswer": "b. Một bảng trang là cần thiết để dịch địa chỉ"
        },
        {
            "question": "Câu Hỏi 14: Nhược điểm của thư mục có cấu trúc danh sách tuyến tính là_______________",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên",
                "b. Không tin cậy",
                "c. Tìm kiếm tập tin một cách tuần tự",
                "d. Kích thước của danh sách tuyến tính trong bộ nhớ"
            ],
            "correctAnswer": "c. Tìm kiếm tập tin một cách tuần tự"
        },
        {
            "question": "Câu Hỏi 15: Miền bảo vệ của một tiến trình bao gồm",
            "type": "multiple-choice",
            "options": [
                "a. Tên đối tượng",
                "b. Tập các quyền",
                "c. Các phương án trên đều sai",
                "d. Tên đối tượng và tập các quyền"
            ],
            "correctAnswer": "d. Tên đối tượng và tập các quyền"
        },
        {
            "question": "Câu Hỏi 16: Hai tiến trình sau chia sẻ một semaphore nhị phân S (khởi tạo bằng 0):\nTiến trình P1\n{ wait (S);\nprint (\"1\"); print (\"2\"); }\nTiến trình P2\n{ print (\"3\"); print (\"4\");\nsignal (S);}\nThông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Chuỗi kết quả in ra màn hình sau khi cả hai tiến trình kết thúc thực thi ?",
            "type": "multiple-choice",
            "options": [
                "a. 3421",
                "b. 3412",
                "c. 1234",
                "d. 1324"
            ],
            "correctAnswer": "b. 3412"
        },
        {
            "question": "Câu Hỏi 17: Ai có thể sử dụng máy tính mà không cần HĐH",
            "type": "multiple-choice",
            "options": [
                "a. Bất kỳ người dùng bình thường nào",
                "b. Những nhà phát triển ứng dụng bình thường",
                "c. Người quản trị mạng",
                "d. Hầu như không có ai"
            ],
            "correctAnswer": "d. Hầu như không có ai"
        },
        {
            "question": "Câu Hỏi 18: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53 và hướng về phía trụ 199; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa C-SCAN được sử dụng, hãy hiển thị thứ tự của các yêu cầu được phục vụ? (Các yêu cầu được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy).",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 19: Truyền thông giữa các tiến trình__________________",
            "type": "multiple-choice",
            "options": [
                "a. cho phép tiến trình đồng bộ hoá hoạt động",
                "b. là cần thiết đối với tất cả các tiến trình",
                "c. không bao giờ cần",
                "d. được thực hiện thông qua ổ đĩa"
            ],
            "correctAnswer": "a. cho phép tiến trình đồng bộ hoá hoạt động"
        },
        {
            "question": "Câu Hỏi 20: Cho chuỗi tham chiếu: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1. Thuật toán tối ưu (thay thế trang)) được sử dụng với 3 khung. Tính tổng số lỗi trang.",
            "type": "fill-in-the-blank",
            "correctAnswer": "9"
        },
        {
            "question": "Câu Hỏi 21: Tình huống mà một số tiến trình truy cập và thao tác đồng thời trên cùng một vùng dữ liệu và kết quả của việc thực hiện phụ thuộc vào thứ tự các tiến trình truy cập vào vùng dữ liệu được gọi là:",
            "type": "multiple-choice",
            "options": [
                "a. điều kiện tương tranh",
                "b. tính nhất quán dữ liệu",
                "c. nạn đói",
                "d. quá trình lão hóa"
            ],
            "correctAnswer": "a. điều kiện tương tranh"
        },
        {
            "question": "Câu Hỏi 22: Xem xét bài toán nhà sản xuất - người tiêu dùng với hai tiến trình chia sẻ bộ đệm tròn, phát biểu nào sau đây là ĐÚNG?",
            "type": "multiple-choice",
            "options": [
                "a. Không có khu vực quan trọng",
                "b. Các câu lệnh vận dụng biến đếm để tạo ra một khu vực quan trọng",
                "c. Các câu lệnh vận dụng biến bộ đệm để tạo một khu vực quan trọng",
                "d. Các câu lệnh vận dụng cả biến đếm và biến bộ đệm để tạo ra một khu vực quan trọng"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 23: Round Robin là phiên bản cho phép dừng của thuật toán nào sau đây ?",
            "type": "multiple-choice",
            "options": [
                "a. FCFS",
                "b. SJF",
                "c. Priority (Thứ tự ưu tiên)",
                "d. LJF (thời gian ngắn nhất trước)"
            ],
            "correctAnswer": "a. FCFS"
        },
        {
            "question": "Câu Hỏi 24: Khi sử dụng bộ đếm để triển khai LRU, chúng ta thay thế trang có:",
            "type": "multiple-choice",
            "options": [
                "a. giá trị thời gian lớn nhất",
                "b. giá trị thời gian nhỏ nhất",
                "c. Các phương án trên đều sai",
                "d. kích thước lớn nhất"
            ],
            "correctAnswer": "b. giá trị thời gian nhỏ nhất"
        },
        {
            "question": "Câu Hỏi 25: Đâu là định nghĩa TỐT NHẤT về bế tắc?",
            "type": "multiple-choice",
            "options": [
                "a. Bế tắc là một tập hợp các tiến trình, trong đó mỗi tiến trình nắm giữ một số tài nguyên và chờ đợi các tài nguyên khác được giữ bởi một tiến trình khác",
                "b. Bế tắc là một tập hợp các tiến trình, trong đó mỗi tiến trình nắm giữ một số tài nguyên và chờ đợi các tài nguyên khác được giữ bởi một tiến trình khác. Có một sự chờ đợi vòng tròn trong số các tiến trình.",
                "c. Bế tắc là một tiến trình chờ đợi một tài nguyên nhất định",
                "d. Bế tắc là một tập hợp các tiến trình đang chờ một tài nguyên được chia sẻ"
            ],
            "correctAnswer": "b. Bế tắc là một tập hợp các tiến trình, trong đó mỗi tiến trình nắm giữ một số tài nguyên và chờ đợi các tài nguyên khác được giữ bởi một tiến trình khác. Có một sự chờ đợi vòng tròn trong số các tiến trình."
        },
        {
            "question": "Câu Hỏi 26: Điều nào KHÔNG ĐÚNG về Biểu đồ phân bổ tài nguyên (RAG - Resource Allocation Graph)?",
            "type": "multiple-choice",
            "options": [
                "a. Một hình chữ nhật đại diện cho một tiến trình",
                "b. Một vòng tròn đại diện cho một tiến trình",
                "c. Một cạnh yêu cầu là từ đỉnh tiến trình đến đỉnh tài nguyên",
                "d. Một cạnh từ đỉnh tài nguyên đến đỉnh tiến trình thể hiện tài nguyên được phân bổ cho tiến trình"
            ],
            "correctAnswer": "a. Một hình chữ nhật đại diện cho một tiến trình"
        },
        {
            "question": "Câu Hỏi 27: Đâu không phải là phương pháp cấp phát không gian trên ổ đĩa:",
            "type": "multiple-choice",
            "options": [
                "a. chỉ mục",
                "b. liên tục",
                "c. băm",
                "d. liên kết"
            ],
            "correctAnswer": "c. băm"
        },
        {
            "question": "Câu Hỏi 28: Hệ thống truyền thông điệp cho phép các tiến trình:",
            "type": "multiple-choice",
            "options": [
                "a. Định danh người gửi và người nhận thông điệp",
                "b. chia sẻ dữ liệu",
                "c. Trao đổi với nhau bằng cách chia sẻ dữ liệu",
                "d. Trao đổi với nhau mà không cần đến chia sẻ dữ liệu"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 29: Giả sử một hệ thống sử dụng thuật toán lập lịch không cho phép dừng SJF , thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là:P1 (0,7), P2 (2,4), P3 (4,1), P4 (5,5). Tính thời gian quay vòng của P1?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 30: Trong chế độ không chờ gửi:",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình gửi liên tục gửi cho đến khi nó nhận được một thông điệp",
                "b. tiến trình gửi liên tục gửi cho đến khi thông điệp được nhận",
                "c. tiến trình gửi sẽ gửi thông điệp và rồi quay lại thực thi",
                "d. Cả ba phương án trên đều sai"
            ],
            "correctAnswer": "c. tiến trình gửi sẽ gửi thông điệp và rồi quay lại thực thi"
        },
        {
            "question": "Câu Hỏi 31: Đâu là phát biểu KHÔNG ĐÚNG về phân đoạn (trong phân bổ bộ nhớ)?",
            "type": "multiple-choice",
            "options": [
                "a. Đó là phân bổ bộ nhớ không liền kề",
                "b. Một bit valid/invalid là cần thiết để bảo vệ bộ nhớ",
                "c. Có sự phân mảnh bên trong",
                "d. Đây là trường hợp đặc biệt của Đa chương trình với số nhiệm vụ thay đổi (MVT - Multiprogramming with a Variable number of Tasks ), trong đó mỗi tiến trình (trong MVT) tương ứng với một phân đoạn (trong phân đoạn)"
            ],
            "correctAnswer": "c. Có sự phân mảnh bên trong"
        },
        {
            "question": "Câu Hỏi 32: Trong thuật toán lập lịch đa cấp phản hồi,",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình liên tục gửi thông điệp cho hệ thống",
                "b. tiến trình không bị phân thành các nhóm khác nhau",
                "c. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác",
                "d. tiến trình không thể chuyển đổi giữa các cấp hàng đợi"
            ],
            "correctAnswer": "c. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác"
        },
        {
            "question": "Câu Hỏi 33: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53 và hướng về trụ 0; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa SCAN được sử dụng, tính tổng số trụ mà đầu đọc phải di chuyển để phục vụ các yêu cầu trên?",
            "type": "fill-in-the-blank",
            "correctAnswer": "208"
        },
        {
            "question": "Câu Hỏi 34: _______ là một cách tiếp cận để hạn chế quyền truy cập hệ thống đối với người dùng được uỷ quyền.",
            "type": "multiple-choice",
            "options": [
                "a. Kiểm soát truy cập dựa trên tiến trình",
                "b. Các phương án trên đều sai",
                "c. Kiểm soát truy cập dựa trên vai trò",
                "d. Kiểm soát truy cập dựa trên nhiệm vụ"
            ],
            "correctAnswer": "c. Kiểm soát truy cập dựa trên vai trò"
        },
        {
            "question": "Câu Hỏi 35: Các cuộc tấn công làm cho một máy tính hoặc mạng lưới tài nguyên không phục vụ được người dùng như dự kiến được gọi là __________",
            "type": "multiple-choice",
            "options": [
                "a. Tấn công nạn đói",
                "b. Tấn công đọc chậm",
                "c. Tấn công giả mạo",
                "d. Tấn công từ chối dịch vụ"
            ],
            "correctAnswer": "d. Tấn công từ chối dịch vụ"
        },
        {
            "question": "Câu Hỏi 36: Hiện tượng phân mảnh ngoài xảy ra khi:",
            "type": "multiple-choice",
            "options": [
                "a. một yêu cầu không thể được đáp ứng ngay cả khi bộ nhớ hoàn toàn trống",
                "b. tổng dung lượng bộ nhớ đủ để đáp ứng yêu cầu nhưng nó không liên tục",
                "c. tổng dung lượng bộ nhớ không đủ để đáp ứng yêu cầu",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "b. tổng dung lượng bộ nhớ đủ để đáp ứng yêu cầu nhưng nó không liên tục"
        },
        {
            "question": "Câu Hỏi 37: Thuật toán lập lịch CPU nào thường cho thời gian phản hồi trung bình nhỏ nhất:",
            "type": "multiple-choice",
            "options": [
                "a. Round Robin với time quantum nhỏ",
                "b. Thứ tự ưu tiên cho phép dừng",
                "c. FCFS",
                "d. SJF cho phép dừng"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 38: Đâu là phát biểu ĐÚNG về tình huống tương tranh (race condition)?",
            "type": "multiple-choice",
            "options": [
                "a. Nó xảy ra ngay cả trong trường hợp chỉ có một tiến trình",
                "b. Nó xảy ra khi nhiều tiến trình thao tác tuần tự một tài nguyên được chia sẻ",
                "c. Nó xảy ra khi nhiều tiến trình đồng thời thao tác với một tài nguyên được chia sẻ",
                "d. Nó xảy ra khi có nhiều tiến trình trong hệ thống"
            ],
            "correctAnswer": "c. Nó xảy ra khi nhiều tiến trình đồng thời thao tác với một tài nguyên được chia sẻ"
        },
        {
            "question": "Câu Hỏi 39: Đâu không phải là một trạng thái của tiến trình:",
            "type": "multiple-choice",
            "options": [
                "a. sẵn sàng",
                "b. ưu tiên",
                "c. chờ đợi",
                "d. đang chạy"
            ],
            "correctAnswer": "b. ưu tiên"
        },
        {
            "question": "Câu Hỏi 40: Với kiểu truy cập tập tin bất kỳ, cấp phát liên tục yêu cầu ________________ truy cập để đọc khối dữ liệu trên ổ đĩa.",
            "type": "multiple-choice",
            "options": [
                "a. đúng hai lần",
                "b. ít nhất hai lần",
                "c. cả ba phương án trên đều sai",
                "d. đúng một lần"
            ],
            "correctAnswer": "d. đúng một lần"
        },
        {
            "question": "Câu Hỏi 41: Nếu không gian được cấp phát cho một tập tin quá ít,",
            "type": "multiple-choice",
            "options": [
                "a. tập tin không thể mở được",
                "b. tập tin sẽ không làm việc",
                "c. tập tin không thể mở rộng được",
                "d. sẽ không có bất kỳ không gian cho dữ liệu vì khối điều khiển tập tin chiếm tất cả"
            ],
            "correctAnswer": "c. tập tin không thể mở rộng được"
        },
        {
            "question": "Câu Hỏi 42: Cho chuỗi tham chiếu: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1. Giả sử hệ thống sử dụng thay thế trang FIFO với 3 khung. Hiển thị thứ tự các trang được chọn là nạn nhân sẽ được hoán đổi? (Các trang được viết liền nhau, ngăn cách nhau bởi dấu phẩy. VD: 7,0,2,3)",
            "type": "fill-in-the-blank",
            "correctAnswer": "7,0,1,2,3,0,4,2,3,0,1,2"
        },
        {
            "question": "Câu Hỏi 43: Phát biểu nào sau đây là đúng:\n(I) Thuật toán lập lịch SJF có thể gây ra nạn đói.\n(II) Thuật toán lập lịch ưu tiên có thể gây ra nạn đói.\n(III)Thuật toán Round Robin tốt hơn FCFS về thời gian phản hồi",
            "type": "multiple-choice",
            "options": [
                "a. chỉ I",
                "b. chỉ I và III",
                "c. cả I, II, và III",
                "d. chỉ II và III"
            ],
            "correctAnswer": "c. cả I, II, và III"
        },
        {
            "question": "Câu Hỏi 44: Đâu là phát biểu KHÔNG ĐÚNG về việc thay thế trang?",
            "type": "multiple-choice",
            "options": [
                "a. Trang bị tráo đổi chỉ được ghi vào đĩa nếu nó được sửa đổi",
                "b. Một nạn nhân sẽ được chọn để tráo đổi",
                "c. Trang bị tráo đổi luôn được ghi vào đĩa",
                "d. Bảng trang của tiến trình có trang bị tráo đổi sẽ được cập nhật"
            ],
            "correctAnswer": "c. Trang bị tráo đổi luôn được ghi vào đĩa"
        },
        {
            "question": "Câu Hỏi 45: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa SSTF được sử dụng, tính tổng số trụ mà đầu phải di chuyển để phục vụ các yêu cầu trên?",
            "type": "fill-in-the-blank",
            "correctAnswer": "236"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Virus đa phần (multipartite virus) thường tấn công",
            "type": "multiple-choice",
            "options": [
                "a. Các tập tin",
                "b. Tất cả các phương án trên",
                "c. Boot sector",
                "d. Bộ nhớ"
            ],
            "correctAnswer": "b. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 2: Cho chuỗi tham chiếu: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1. Giả sử hệ thống sử dụng thuật toán thay thế trang Least Recent Used(LRU) với 3 khung. Đâu là THỨ TỰ của các trang được chọn là nạn nhân sẽ bị tráo đổi?",
            "type": "multiple-choice",
            "options": [
                "a. 7 1 2 3 1 4 1 3 2",
                "b. 7 2 1 3 0 4 2 3 2",
                "c. 7 1 2 3 0 4 1 2 3",
                "d. 7 1 2 3 0 4 0 3 2"
            ],
            "correctAnswer": "a. 7 1 2 3 1 4 1 3 2"
        },
        {
            "question": "Câu Hỏi 3: Mục tiêu TỐT NHẤT của stripping trong RAID (Redundant Array of Inexpensive Disks) là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Để tăng dung lượng đĩa",
                "b. Để tăng tốc độ vào ra (I/O speed)",
                "c. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng",
                "d. Để tăng kích thước tệp"
            ],
            "correctAnswer": "b. Để tăng tốc độ vào ra (I/O speed)"
        },
        {
            "question": "Câu Hỏi 4: Đâu là phát biểu ĐÚNG về counting semaphore?",
            "type": "multiple-choice",
            "options": [
                "a. Về cơ bản nó giống như semaphore nhị phân",
                "b. Giá trị của semaphore không thể âm trong tất cả các triển khai semaphore",
                "c. Giá trị của semaphore có thể lớn hơn 1",
                "d. Giá trị của semaphore là 0 hoặc 1"
            ],
            "correctAnswer": "c. Giá trị của semaphore có thể lớn hơn 1"
        },
        {
            "question": "Câu Hỏi 5: Thuật toán First fit và Best fit chịu ảnh hưởng của _______________",
            "type": "multiple-choice",
            "options": [
                "a. Nạn đói",
                "b. Cả ba phương án trên",
                "c. Hiện tượng phân mảnh ngoài",
                "d. Hiện tượng phân mảnh trong"
            ],
            "correctAnswer": "c. Hiện tượng phân mảnh ngoài"
        },
        {
            "question": "Câu Hỏi 6: Cho chuỗi tham chiếu: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Giả sử một hệ thống sử dụng thuật toán thay thế trang FIFO với 3 khung. Tính tổng số lỗi trang?",
            "type": "fill-in-the-blank",
            "correctAnswer": "9"
        },
        {
            "question": "Câu Hỏi 7: Hai tiến trình sau chia sẻ một semaphore nhị phân S (khởi tạo bằng 0):\nTiến trình P1\n{ wait (S);\nprint (\"1\"); print (\"2\"); }\nTiến trình P2\n{ print (\"3\"); print (\"4\");\nsignal (S);}\nThông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Chuỗi kết quả in ra màn hình sau khi cả hai tiến trình kết thúc thực thi ?",
            "type": "multiple-choice",
            "options": [
                "a. 3421",
                "b. 3412",
                "c. 1324",
                "d. 1234"
            ],
            "correctAnswer": "b. 3412"
        },
        {
            "question": "Câu Hỏi 8: Điều nào KHÔNG ĐÚNG về truyền thông giữa các tiến trình (IPC - Inter-process communication)?",
            "type": "multiple-choice",
            "options": [
                "a. Trong hệ điều hành đơn chương trình có thể KHÔNG cần IPC cục bộ",
                "b. IPC chỉ có thể được sử dụng giữa các tiến trình trong cùng hệ thống",
                "c. Cơ chế IPC trong các hệ điều hành khác nhau có thể khác nhau",
                "d. Ví dụ về cơ chế IPC trong Linux là hàng đợi tin nhắn, semaphore, bộ nhớ dùng chung, ..."
            ],
            "correctAnswer": "b. IPC chỉ có thể được sử dụng giữa các tiến trình trong cùng hệ thống"
        },
        {
            "question": "Câu Hỏi 9: Hệ điều hành Linux có",
            "type": "multiple-choice",
            "options": [
                "a. Vi nhân (microkernel)",
                "b. Nhân (kernel) monolithic có modules",
                "c. Nhân (kernel) monolithic",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "b. Nhân (kernel) monolithic có modules"
        },
        {
            "question": "Câu Hỏi 10: Tập hợp các thuật toán thay thế trang không bao giờ có hiện tượng bất thường Belady:",
            "type": "multiple-choice",
            "options": [
                "a. Các thuật toán hàng đợi",
                "b. Các phương án trên đều sai",
                "c. Các thuật toán chuỗi",
                "d. Các thuật toán ngăn xếp"
            ],
            "correctAnswer": "d. Các thuật toán ngăn xếp"
        },
        {
            "question": "Câu Hỏi 11: Có 4 tiến trình P1, P2, P3, P4 và 2 kiểu tài nguyên A, B. Tại thời điểm t, trạng thái của hệ thống như sau:\nĐã cấp phát Yêu cầu\nA B A B\nP1 1 3 1 2\nP2 4 1 4 3\nP3 1 2 1 7\nP4 2 0 5 1\nA còn 1 đơn vị tài nguyên, B còn 4 đơn vị tài nguyên. Hệ thống đang ở trạng thái nào:",
            "type": "multiple-choice",
            "options": [
                "a. Bế tắc",
                "b. Không an toàn, nhưng không có bế tắc",
                "c. An toàn",
                "d. Được bảo vệ"
            ],
            "correctAnswer": "b. Không an toàn, nhưng không có bế tắc"
        },
        {
            "question": "Câu Hỏi 12: Chọn mã chương trình mà một CPU có thể hiểu và thực thi được",
            "type": "multiple-choice",
            "options": [
                "a. c.open ();",
                "b. 0110010110",
                "c. a = a + b",
                "d. add AX, BX"
            ],
            "correctAnswer": "b. 0110010110"
        },
        {
            "question": "Câu Hỏi 13: Trên ổ đĩa các khối 2,3,4,5,8,9,10,11,12,13 còn trống, các khối còn lại đã được sử dụng, bit map dùng để quản lý không gian trống của khối 0 đến 15 là _____________ ",
            "type": "multiple-choice",
            "options": [
                "a. 0111100111110000",
                "b. 0011110011111100",
                "c. 1000011000000111",
                "d. 1100001100001110"
            ],
            "correctAnswer": "a. 0111100111110000"
        },
        {
            "question": "Câu Hỏi 14: VFS (hệ thống tập tin ảo) kích hoạt một số hàm của hệ thống tập tin để xử lý các yêu cầu dựa trên _______ .",
            "type": "multiple-choice",
            "options": [
                "a. kiểu hệ thống tập tin",
                "b. nhãn thời gian",
                "c. lệnh",
                "d. kích thước"
            ],
            "correctAnswer": "a. kiểu hệ thống tập tin"
        },
        {
            "question": "Câu Hỏi 15: Đối với một miền, _______ là một danh sách các đối tượng cùng với các quyền cho phép các đối tượng đó.",
            "type": "multiple-choice",
            "options": [
                "a. Danh mục khả năng và danh sách truy cập",
                "b. Danh sách truy cập",
                "c. Danh mục khả năng",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "c. Danh mục khả năng"
        },
        {
            "question": "Câu Hỏi 16: Mô tả TỐT NHẤT về trạng thái an toàn là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Đây là trạng thái để làm cho một tiến trình chấm dứt bình thường",
                "b. Đây là trạng thái của các tiến trình trong hệ thống",
                "c. Đây là trạng thái của một tiến trình",
                "d. Đó là một trật tự trong đó các tiến trình kết thúc để đảm bảo không có bế tắc"
            ],
            "correctAnswer": "d. Đó là một trật tự trong đó các tiến trình kết thúc để đảm bảo không có bế tắc"
        },
        {
            "question": "Câu Hỏi 17: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa FCFS được sử dụng, tính tổng số trụ mà đầu phải di chuyển để phục vụ các yêu cầu trên?",
            "type": "fill-in-the-blank",
            "correctAnswer": "640"
        },
        {
            "question": "Câu Hỏi 18: Đâu là phát biểu KHÔNG ĐÚNG về phân đoạn (trong phân bổ bộ nhớ)?",
            "type": "multiple-choice",
            "options": [
                "a. RAM được chia thành các phân đoạn có kích thước bằng nhau",
                "b. Mỗi phân đoạn được phân bổ một vùng nhớ liền kề",
                "c. Mỗi phân đoạn là một đơn vị logic (chẳng hạn như hàm, thủ tục, …)",
                "d. Một tiến trình được chia thành các phân đoạn"
            ],
            "correctAnswer": "a. RAM được chia thành các phân đoạn có kích thước bằng nhau"
        },
        {
            "question": "Câu Hỏi 19: Mô-đun nào giao quyền kiểm soát CPU cho tiến trình được lựa chọn bởi bộ lập lịch ngắn hạn ?",
            "type": "multiple-choice",
            "options": [
                "a. bộ lập lịch",
                "b. Cả ba phương án trên",
                "c. bộ điều phối",
                "d. ngắt"
            ],
            "correctAnswer": "c. bộ điều phối"
        },
        {
            "question": "Câu Hỏi 20: Hiện tượng phân mảnh ngoài xảy ra khi:",
            "type": "multiple-choice",
            "options": [
                "a. một yêu cầu không thể được đáp ứng ngay cả khi bộ nhớ hoàn toàn trống",
                "b. tổng dung lượng bộ nhớ đủ để đáp ứng yêu cầu nhưng nó không liên tục",
                "c. tổng dung lượng bộ nhớ không đủ để đáp ứng yêu cầu",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "b. tổng dung lượng bộ nhớ đủ để đáp ứng yêu cầu nhưng nó không liên tục"
        },
        {
            "question": "Câu Hỏi 21: Ở trang thái chờ, tiến trình _____________________",
            "type": "multiple-choice",
            "options": [
                "a. đã kết thúc",
                "b. đang chờ cho kết thúc của việc vào/ra dữ liệu",
                "c. đang chạy",
                "d. đang chờ bộ vi xử lý trong hàng đợi sẵn sàng"
            ],
            "correctAnswer": "b. đang chờ cho kết thúc của việc vào/ra dữ liệu"
        },
        {
            "question": "Câu Hỏi 22: Thời gian truy cập hiệu quả là tỷ lệ thuận với",
            "type": "multiple-choice",
            "options": [
                "a. Tỷ kệ lỗi trang",
                "b. Thời gian truy cập bộ nhớ",
                "c. Các phương án trên đều sai",
                "d. Tỷ lệ trúng"
            ],
            "correctAnswer": "c. Các phương án trên đều sai"
        },
        {
            "question": "Câu Hỏi 23: Đoạn mã sử dụng sai mục đích được gọi là ____________",
            "type": "multiple-choice",
            "options": [
                "a. Trojan",
                "b. Trộm nội bộ",
                "c. Mã sửa đổi ngăn xếp",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "d. Các phương án trên đều sai"
        },
        {
            "question": "Câu Hỏi 24: Trong truyền thông giữa các tiến trình, vùng đệm với kích thước 0:",
            "type": "multiple-choice",
            "options": [
                "a. Người nhận định kỳ lấy thông điệp từ vùng đệm",
                "b. Người gửi gửi liên tục, và các thông điệp không đợi trong vùng đệm",
                "c. Vùng đệm có thể lưu ít nhất một thông điệp",
                "d. Vùng đệm không chứa thông điệp nào và người gửi bị chặn cho đến khi thông điệp được nhận"
            ],
            "correctAnswer": "d. Vùng đệm không chứa thông điệp nào và người gửi bị chặn cho đến khi thông điệp được nhận"
        },
        {
            "question": "Câu Hỏi 25: Tiến trình được phân thành các nhóm khác nhau trong:",
            "type": "multiple-choice",
            "options": [
                "a. thuật toán lập lịch Round Robin",
                "b. thuật toán lập lịch ưu tiên",
                "c. thuật toán lập lịch hàng đợi đa cấp",
                "d. thuật toán lập lịch SJF"
            ],
            "correctAnswer": "c. thuật toán lập lịch hàng đợi đa cấp"
        },
        {
            "question": "Câu Hỏi 26: Hai tiến trình sau :\nTiến trình P1\n{ print (\"1\"); print (\"2\"); \n}\nTiến trình P2\n{ print (\"3\"); print (\"4\"); }\nThông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Có bao nhiêu chuỗi kết quả khác nhau có thể được in ra màn hình sau khi cả hai tiến trình kết thúc thực thi ?",
            "type": "multiple-choice",
            "options": [
                "a. sáu",
                "b. hai",
                "c. một",
                "d. bốn"
            ],
            "correctAnswer": "a. sáu"
        },
        {
            "question": "Câu Hỏi 27: Giả sử một hệ thống sử dụng Bộ đệm chuyển đổi (TLB - Translation Look-aside Buffer) để dịch địa chỉ trong phân trang (bảng trang cấp 1). Phát biểu nào là KHÔNG ĐÚNG?",
            "type": "multiple-choice",
            "options": [
                "a. Kích thước của TLB thường nhỏ (cỡ thường từ 64 đến 1024)",
                "b. Trong mọi trường hợp, trong tiến trình dịch địa chỉ, chúng ta chỉ cần truy cập TLB",
                "c. Trong trường hợp xấu nhất, chúng ta cần truy cập cả TLB và bảng trang trong tiến trình dịch địa chỉ",
                "d. TLB giúp tăng tốc tiến trình dịch địa chỉ"
            ],
            "correctAnswer": "b. Trong mọi trường hợp, trong tiến trình dịch địa chỉ, chúng ta chỉ cần truy cập TLB"
        },
        {
            "question": "Câu Hỏi 28: Nếu một ổ đĩa gặp sự cố trong RAID cấp độ ___________ thì phục hồi lại dữ liệu bị mất là đơn giản nhất so với RAID ở các cấp độ khác.",
            "type": "multiple-choice",
            "options": [
                "a. 2",
                "b. 3",
                "c. 4",
                "d. 1"
            ],
            "correctAnswer": "d. 1"
        },
        {
            "question": "Câu Hỏi 29: Trong thuật toán lập lịch đa cấp phản hồi,",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác",
                "b. tiến trình liên tục gửi thông điệp cho hệ thống",
                "c. tiến trình không bị phân thành các nhóm khác nhau",
                "d. tiến trình không thể chuyển đổi giữa các cấp hàng đợi"
            ],
            "correctAnswer": "a. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác"
        },
        {
            "question": "Câu Hỏi 30: Điều kiện giữ và chờ (trong bế tắc) xảy ra khi:",
            "type": "multiple-choice",
            "options": [
                "a. Tiến trình nắm giữ ít nhất một tài nguyên, và không chờ để lấy thêm tài nguyên",
                "b. Các phương án trên đều sai",
                "c. Tiến trình không giữ tài nguyên, và chờ cho một tài nguyên được giải phóng",
                "d. Tiến trình nắm giữ ít nhất một tài nguyên, và chờ cho một tài nguyên đang được nắm giữ bởi tiến trình khác"
            ],
            "correctAnswer": "d. Tiến trình nắm giữ ít nhất một tài nguyên, và chờ cho một tài nguyên đang được nắm giữ bởi tiến trình khác"
        },
        {
            "question": "Câu Hỏi 31: Thuật toán lập lịch CPU nào thường cho thời gian phản hồi trung bình nhỏ nhất:",
            "type": "multiple-choice",
            "options": [
                "a. Round Robin với time quantum nhỏ",
                "b. SJF cho phép dừng",
                "c. FCFS",
                "d. Thứ tự ưu tiên cho phép dừng"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 32: Tình huống mà một số tiến trình truy cập và thao tác đồng thời trên cùng một vùng dữ liệu và kết quả của việc thực hiện phụ thuộc vào thứ tự các tiến trình truy cập vào vùng dữ liệu được gọi là:",
            "type": "multiple-choice",
            "options": [
                "a. điều kiện tương tranh",
                "b. quá trình lão hóa",
                "c. nạn đói",
                "d. tính nhất quán dữ liệu"
            ],
            "correctAnswer": "a. điều kiện tương tranh"
        },
        {
            "question": "Câu Hỏi 33: Điều kiện loại trừ lẫn nhau có thể được đảm bảo bằng cách sử dụng _________.",
            "type": "multiple-choice",
            "options": [
                "a. Semaphore nhị phân",
                "b. Khoá mutex và Semaphore nhị phân",
                "c. Khoá mutex",
                "d. Cả ba phương án trên đều sai"
            ],
            "correctAnswer": "b. Khoá mutex và Semaphore nhị phân"
        },
        {
            "question": "Câu Hỏi 34: Trong chế độ chờ nhận:",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình nhận liên tục gửi và nhận thông điệp từ hệ thống",
                "b. tiến trình nhận phải chờ cho đến khi nhận được thông điệp",
                "c. tiến trình nhận không hoạt động",
                "d. tiến trình nhận sẽ nhận thông điệp và rồi quay lại thực thi"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 35: Giả sử một hệ thống sử dụng thuật toán lập lịch không cho phép dừng SJF, thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là:P1 (0,7), P2 (2,4), P3 (4,1), P4 (5,5). Tính thời gian quay vòng của P3?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 36: Nguyên tắc nào mà các chương trình, người sử dụng và hệ thống chỉ được cấp đủ quyền để thực hiện nhiệm vụ của chúng?",
            "type": "multiple-choice",
            "options": [
                "a. Nguyên tắc lập lịch tiến trình",
                "b. Các phương án trên đều sai",
                "c. Nguyên tắc quyền tối thiểu",
                "d. Nguyên tắc của hệ điều hành"
            ],
            "correctAnswer": "c. Nguyên tắc quyền tối thiểu"
        },
        {
            "question": "Câu Hỏi 37: Chọn mô tả tốt nhất về hệ điều hành cho máy tính",
            "type": "multiple-choice",
            "options": [
                "a. Chúng là phần mềm",
                "b. Chúng là phần mềm nằm giữa người dùng và phần cứng máy tính",
                "c. Chúng là các chương trình ứng dụng",
                "d. Chúng là những thư viện"
            ],
            "correctAnswer": "b. Chúng là phần mềm nằm giữa người dùng và phần cứng máy tính"
        },
        {
            "question": "Câu Hỏi 38: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53 và hướng về phía trụ 199; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa C-SCAN được sử dụng, hãy hiển thị thứ tự của các yêu cầu được phục vụ? (Các yêu cầu được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy).",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 39: Giả sử một hệ thống sử dụng thuật toán lập lịch không cho phép dừng SJF , thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là:P1 (0,7), P2 (2,4), P3 (4,1), P4 (5,5). Thời gian đáp ứng của tiến trình P4 là bao nhiêu?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 40: Trong cấp phát chỉ mục, ______________________",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên đều sai",
                "b. Mỗi tập tin là một danh sách liên kết của các khối trên ổ đĩa",
                "c. Mỗi tập tin được lưu trên một tập các khối liên tục trên ổ đĩa",
                "d. Tất cả các con trỏ đến các khối nằm rải rác được đặt trong một khu vực"
            ],
            "correctAnswer": "d. Tất cả các con trỏ đến các khối nằm rải rác được đặt trong một khu vực"
        },
        {
            "question": "Câu Hỏi 41: Giả sử một hệ thống sử dụng thuật toán lập lịch Không cho phép dừng SJF , thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là:P1 (0,7), P2 (2,4), P3 (4,1), P4 (5,5). Thời gian đáp ứng của tiến trình P2 là bao nhiêu?",
            "type": "multiple-choice",
            "options": [
                "a. 10",
                "b. 12",
                "c. 6",
                "d. 8"
            ],
            "correctAnswer": "c. 6"
        },
        {
            "question": "Câu Hỏi 42: Giả sử một hệ thống sử dụng thuật toán lập lịch Round Robin (RR), thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là: P1 (0,21), P2 (30,10), P3 (20,40), P4 (40,25) và lượng tử thời gian là 15. Hiển thị thứ tự mà các tiến trình được chạy (các tiến trình được viết liền nhau và ngăn cách bởi dấu phấy. VD: P1,P2,P3,P4)?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 43: Khi vùng bộ nhớ cấp phát cho một tiến trình lớn hơn một chút so với kích thước tiến trình thì:",
            "type": "multiple-choice",
            "options": [
                "a. phân mảnh ngoài xảy ra",
                "b. cả phân mảnh ngoài và phân mảnh trong không xảy ra",
                "c. phân mảnh trong xảy ra",
                "d. cả phân mảnh ngoài và phân mảnh trong xảy ra"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 44: Kỹ thuật nào sau đây giúp giảm thiểu tình trạng nhàn rỗi của CPU hoặc các thiết bị vào/ra khi hệ điều hành đơn vi xử lý ?",
            "type": "multiple-choice",
            "options": [
                "a. sử dụng pipe",
                "b. Hệ điều hành phân tán",
                "c. Đa chương trình",
                "d. Sử dụng hành đợi"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 45: Tiến trình nào có thể ảnh hưởng đến / bị ảnh hưởng bởi các tiến trình khác đang thực thi trong hệ thống ?",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình init",
                "b. tiến trình con",
                "c. tiến trình cha mẹ",
                "d. tiến trình hợp tác"
            ],
            "correctAnswer": "d. tiến trình hợp tác"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Đâu KHÔNG PHẢI là thuật toán phân bổ động được sử dụng trong các hệ thống MVT và MFT?",
            "type": "multiple-choice",
            "options": [
                "a. First fit",
                "b. Worst fit",
                "c. Well fit",
                "d. Best fit"
            ],
            "correctAnswer": "c. Well fit"
        },
        {
            "question": "Câu Hỏi 2: Ánh xạ bộ nhớ ảo 2GB lên bộ nhớ vật lý có 256 frame, mỗi frame có kích thước 4 KB. Kích thước mỗi đơn vị bộ nhớ là 1 byte. Số bit cần dùng để đánh địa chỉ vật lý cho bộ nhớ chính ?",
            "type": "multiple-choice",
            "options": [
                "a. 20 bit",
                "b. 8 bit",
                "c. 19 bit",
                "d. 18 bit"
            ],
            "correctAnswer": "a. 20 bit"
        },
        {
            "question": "Câu Hỏi 3: Kỹ thuật nào sau đây giúp giảm thiểu tình trạng nhàn rỗi của CPU hoặc các thiết bị vào/ra khi hệ điều hành đơn vi xử lý ?",
            "type": "multiple-choice",
            "options": [
                "a. Đa chương trình",
                "b. Hệ điều hành phân tán",
                "c. sử dụng pipe",
                "d. Sử dụng hành đợi"
            ],
            "correctAnswer": "a. Đa chương trình"
        },
        {
            "question": "Câu Hỏi 4: Một ổ cứng có các thông số sau: Tốc độ trục quay 400 RPM, mỗi track chứa 12 sector, mỗi sector có dung lượng 1024 byte. Tốc độ truyền dữ liệu là:",
            "type": "multiple-choice",
            "options": [
                "a. 1024 Kbps",
                "b. 400 Kbps",
                "c. 800 Kbps",
                "d. 640 Kbps"
            ],
            "correctAnswer": "c. 800 Kbps"
        },
        {
            "question": "Câu Hỏi 5: Phát biểu nào KHÔNG ĐÚNG về phương pháp xử lý phục hồi bế tắc?",
            "type": "multiple-choice",
            "options": [
                "a. Khôi phục hệ thống từ bế tắc",
                "b. Không bao giờ cho phép hệ thống đi vào trạng thái bế tắc",
                "c. Sử dụng thuật toán phát hiện bế tắc",
                "d. Cho phép hệ thống đi vào trạng thái bế tắc"
            ],
            "correctAnswer": "b. Không bao giờ cho phép hệ thống đi vào trạng thái bế tắc"
        },
        {
            "question": "Câu Hỏi 6: Giả sử một hệ thống sử dụng cấp phát bộ nhớ liền kề với các thông tin sau: địa chỉ cơ sở là 13400; thanh ghi giới hạn là 1200; và một tham chiếu là 1246. Đâu là kết quả của Đơn vị quản lý bộ nhớ (MMU - Memory Management Unit)?",
            "type": "multiple-choice",
            "options": [
                "a. Một lỗi",
                "b. 14154",
                "c. 1446",
                "d. 14646"
            ],
            "correctAnswer": "a. Một lỗi"
        },
        {
            "question": "Câu Hỏi 7: Trong chế độ không chờ gửi:",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình gửi sẽ gửi thông điệp và rồi quay lại thực thi",
                "b. Cả ba phương án trên đều sai",
                "c. tiến trình gửi liên tục gửi cho đến khi thông điệp được nhận",
                "d. tiến trình gửi liên tục gửi cho đến khi nó nhận được một thông điệp"
            ],
            "correctAnswer": "a. tiến trình gửi sẽ gửi thông điệp và rồi quay lại thực thi"
        },
        {
            "question": "Câu Hỏi 8: Khi các thay đổi được lưu vào log thì giao dịch được coi là ________________",
            "type": "multiple-choice",
            "options": [
                "a. được chuyển vào bộ nhớ trong",
                "b. cập nhật",
                "c. hoàn thành",
                "d. bị lỗi"
            ],
            "correctAnswer": "c. hoàn thành"
        },
        {
            "question": "Câu Hỏi 9: Mô hình ma trận truy cập để xác thực người dùng có chứa________",
            "type": "multiple-choice",
            "options": [
                "a. Một hàm trả về kiểu của một đối tượng",
                "b. Một danh sách các miền",
                "c. Tất cả các phương án trên",
                "d. Một danh sách các đối tượng"
            ],
            "correctAnswer": "c. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 10: Đối với một miền, _______ là một danh sách các đối tượng cùng với các quyền cho phép các đối tượng đó.",
            "type": "multiple-choice",
            "options": [
                "a. Danh mục khả năng và danh sách truy cập",
                "b. Danh sách truy cập",
                "c. Danh mục khả năng",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "c. Danh mục khả năng"
        },
        {
            "question": "Câu Hỏi 11: Nếu tiến trình có sự có, hầu hết các hệ điều hành ghi các thông tin lỗi tại:",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. Tập tin mới",
                "c. Một tiến trình khác đang chạy",
                "d. Tập tin log"
            ],
            "correctAnswer": "d. Tập tin log"
        },
        {
            "question": "Câu Hỏi 12: Giả sử một hệ thống sử dụng thuật toán lập lịch SRTF, thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là: P1 (0,21), P2 (30,10), P3 (20,40), P4 (40,15). Hiển thị thứ tự mà các tiến trình được chạy (các tiến trình được viết liền nhau và ngăn cách bởi dấu phấy. VD: P1,P2,P3,P4)?",
            "type": "fill-in-the-blank",
            "correctAnswer": "P1,P3,P2,P4,P3"
        },
        {
            "question": "Câu Hỏi 13: Tại một thời điểm, giá trị của một semaphore đếm là 7. Sau khi thực thi 20 lần wait () và 15 lần signal() trên semaphore này, giá trị của semaphore sẽ là:",
            "type": "multiple-choice",
            "options": [
                "a. 12",
                "b. 42",
                "c. 7",
                "d. 2"
            ],
            "correctAnswer": "d. 2"
        },
        {
            "question": "Câu Hỏi 14: Giả sử một hệ thống sử dụng thuật toán lập lịch CPU FCFS, thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là: P1 (21), P2 (10), P3 (6). Tính tổng thời gian chờ của các tiến trình?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 15: Có 5 tiến trình P1, P2, P3, P4, P5 với thời gian chạy CPU (ms), thời gian đến (ms) và số hiệu ưu tiên như sau:\nThời gian chạy Số hiệu ưu tiên Thời gian đến\nP1 2 2 0\nP2 3 1 3\nP3 8 4 5\nP4 4 5 7\nP5 5 3 9\nSử dụng thuật toán SJF cho phép dừng. Khẳng định nào sau đây là đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Thời gian chờ của P4 dài hơn thời gian chờ của P3",
                "b. Thời gian chờ của P3 dài hơn thời gian chờ của P5",
                "c. Thời gian chờ của P2 dài hơn thời gian chờ của P3",
                "d. Thời gian phản hồi của P4 dài hơn thời gian phản hồi của P5"
            ],
            "correctAnswer": "b. Thời gian chờ của P3 dài hơn thời gian chờ của P5"
        },
        {
            "question": "Câu Hỏi 16: Hai tiến trình sau chia sẻ một biến chung X (khởi tạo bằng 5), và hai semaphore nhị phân S1, S2 (khởi tạo bằng 0):\nTiến trình A\n{int Y;\nwait(S1);\nA1: Y = X*2;\nsignal(S2);\nwait(S1);\nA2: X = Y;\n}\nTiến trình B\n{int Z;\nB1: Z=X+1;\nsignal(S1);\nwait(S2);\nB2: X=Z;\nsignal(S1);\n}\nThông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Giá trị cuối cùng của X sau khi thực thi xong hai tiến trình A và B sẽ là:",
            "type": "multiple-choice",
            "options": [
                "a. 6",
                "b. 11",
                "c. 10",
                "d. 12"
            ],
            "correctAnswer": "b. 11"
        },
        {
            "question": "Câu Hỏi 17: Mô hình tập hợp các trang đang làm việc thay thế trang được dựa trên",
            "type": "multiple-choice",
            "options": [
                "a. khu vực toàn cục",
                "b. khu vực địa phương",
                "c. truy cập ngẫu nhiên",
                "d. khu vực mô-đun"
            ],
            "correctAnswer": "b. khu vực địa phương"
        },
        {
            "question": "Câu Hỏi 18: Miền bảo vệ của một tiến trình bao gồm",
            "type": "multiple-choice",
            "options": [
                "a. Tên đối tượng và tập các quyền",
                "b. Tên đối tượng",
                "c. Tập các quyền",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "a. Tên đối tượng và tập các quyền"
        },
        {
            "question": "Câu Hỏi 19: Những điều kiện ĐÚNG của khu vực quan trọng là gì?",
            "type": "multiple-choice",
            "options": [
                "a. loại trừ lẫn nhau, tiến bộ, chờ đợi ràng buộc",
                "b. loại trừ lẫn nhau, bảo vệ, giới hạn sử dụng",
                "c. loại trừ lẫn nhau, chờ đợi ràng buộc, tiến triển",
                "d. loại trừ lẫn nhau, bảo vệ, chờ đợi ràng buộc"
            ],
            "correctAnswer": "a. loại trừ lẫn nhau, tiến bộ, chờ đợi ràng buộc"
        },
        {
            "question": "Câu Hỏi 20: Tiến trình được phân thành các nhóm khác nhau trong:",
            "type": "multiple-choice",
            "options": [
                "a. thuật toán lập lịch ưu tiên",
                "b. thuật toán lập lịch Round Robin",
                "c. thuật toán lập lịch hàng đợi đa cấp",
                "d. thuật toán lập lịch SJF"
            ],
            "correctAnswer": "c. thuật toán lập lịch hàng đợi đa cấp"
        },
        {
            "question": "Câu Hỏi 21: Điều nào ĐÚNG về mục tiêu của điều kiện tiến triển của khu vực quan trọng?",
            "type": "multiple-choice",
            "options": [
                "a. Nó làm cho thuật toán phức tạp khi thực hiện",
                "b. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ",
                "c. Nó hỗ trợ sự ưu tiên của các tiến trình",
                "d. Nó làm cho việc sử dụng tài nguyên được chia sẻ một cách hiệu quả"
            ],
            "correctAnswer": "d. Nó làm cho việc sử dụng tài nguyên được chia sẻ một cách hiệu quả"
        },
        {
            "question": "Câu Hỏi 22: Một hệ thống sử dụng phân bổ theo chỉ mục 2 cấp với kích thước khối 4KB; kích thước con trỏ 4 byte. Tính kích thước tối đa (theo MB) của một tập tin mà hệ thống có thể tạo ra?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4096"
        },
        {
            "question": "Câu Hỏi 23: Hệ thống truyền thông điệp cho phép các tiến trình:",
            "type": "multiple-choice",
            "options": [
                "a. chia sẻ dữ liệu",
                "b. Định danh người gửi và người nhận thông điệp",
                "c. Trao đổi với nhau bằng cách chia sẻ dữ liệu",
                "d. Trao đổi với nhau mà không cần đến chia sẻ dữ liệu"
            ],
            "correctAnswer": "d. Trao đổi với nhau mà không cần đến chia sẻ dữ liệu"
        },
        {
            "question": "Câu Hỏi 24: Đâu là phát biểu KHÔNG ĐÚNG về thuật toán phân bổ bộ nhớ cho Đa chương trình với số nhiệm vụ thay đổi (MVT - Multiprogramming with a Variable number of Tasks )?",
            "type": "multiple-choice",
            "options": [
                "a. Có sự phân mảnh bộ nhớ",
                "b. Một tiến trình nằm trong vùng nhớ liền kề",
                "c. Bộ nhớ được chia trước thành các phân vùng",
                "d. Bộ nhớ không được phân chia trước thành các phân vùng"
            ],
            "correctAnswer": "c. Bộ nhớ được chia trước thành các phân vùng"
        },
        {
            "question": "Câu Hỏi 25: Thuật toán lập lịch CPU nào thường cho thời gian phản hồi trung bình nhỏ nhất:",
            "type": "multiple-choice",
            "options": [
                "a. Thứ tự ưu tiên cho phép dừng",
                "b. Round Robin với time quantum nhỏ",
                "c. SJF cho phép dừng",
                "d. FCFS"
            ],
            "correctAnswer": "b. Round Robin với time quantum nhỏ"
        },
        {
            "question": "Câu Hỏi 26: Chương trình sau đây bao gồm 3 tiến trình đang chạy và 3 semaphore nhị phân. Các semaphore được khởi tạo như sau S0 = 1, S1 = 0, S2 = 0.\nTiến trình P0 Tiến trình P1 Tiến trình P2\nwhile(true) { wait(S1); wait(S2);\nwait(S0); signal (S0); signal (S0);\nprint ‘0’;\nsignal(S1);\nsignal (S2);}\nBao nhiêu lần P0 sẽ in '0'?",
            "type": "multiple-choice",
            "options": [
                "a. Có ít nhất hai lần",
                "b. Chính xác một lần",
                "c. Chính xác ba lần",
                "d. Chính xác hai lần"
            ],
            "correctAnswer": "b. Chính xác một lần"
        },
        {
            "question": "Câu Hỏi 27: Giả sử một hệ thống sử dụng phân bổ đĩa dạng danh sách liên kết. Đâu là lý do tại sao chúng ta không thể có quyền truy cập ngẫu nhiên?",
            "type": "multiple-choice",
            "options": [
                "a. Vì không thể biết vị trí của khối thứ n từ khối thứ nhất",
                "b. Vì thông tin về khối dữ liệu của tệp bị ẩn",
                "c. Vì các khối dữ liệu của một tệp không liền kề nhau",
                "d. Vì lý do bảo mật"
            ],
            "correctAnswer": "a. Vì không thể biết vị trí của khối thứ n từ khối thứ nhất"
        },
        {
            "question": "Câu Hỏi 28: Nếu hệ thống bị sự cố trước khi các thay đổi của một giao dịch được lưu vào log thì chúng sẽ được ________________",
            "type": "multiple-choice",
            "options": [
                "a. huỷ bỏ",
                "b. chuyển vào bộ nhớ trong",
                "c. lưu và thực hiện lại giao dịch",
                "d. lưu"
            ],
            "correctAnswer": "a. huỷ bỏ"
        },
        {
            "question": "Câu Hỏi 29: Đôi khi việc quản lý vùng trống cần dung lượng bộ nhớ:",
            "type": "multiple-choice",
            "options": [
                "a. lớn hơn so với kích thước vùng trống",
                "b. rất nhỏ",
                "c. lớn hơn so với bộ nhớ",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "a. lớn hơn so với kích thước vùng trống"
        },
        {
            "question": "Câu Hỏi 30: Trên ổ đĩa các khối 2,3,4,5,8,9,10,11,12,13 còn trống, các khối còn lại đã được sử dụng, bit map dùng để quản lý không gian trống của khối 0 đến 15 là _____________ ",
            "type": "multiple-choice",
            "options": [
                "a. 1000011000000111",
                "b. 0111100111110000",
                "c. 0011110011111100",
                "d. 1100001100001110"
            ],
            "correctAnswer": "b. 0111100111110000"
        },
        {
            "question": "Câu Hỏi 31: Nội dung nào sau đây không được lưu khi chuyển trạng giữa các tiến trình:",
            "type": "multiple-choice",
            "options": [
                "a. Bộ đếm chương trình",
                "b. Các thanh ghi thông thường",
                "c. TLB",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "c. TLB"
        },
        {
            "question": "Câu Hỏi 32: Một cách để đảm bảo điều kiện chờ đợi vòng tròn không xảy ra:",
            "type": "multiple-choice",
            "options": [
                "a. Cho phép tiến trình chỉ chờ đợi một nguồn tài nguyên tại một thời điểm",
                "b. Không bao giờ để một tiến trình có được nguồn tài nguyên đang nắm giữ bởi tiến trình khác",
                "c. Tạo một trình tự sử dụng các loại tài nguyên",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "c. Tạo một trình tự sử dụng các loại tài nguyên"
        },
        {
            "question": "Câu Hỏi 33: Có 5 tiến trình P1, P2, P3, P4, P5 với thời gian chạy CPU (ms), thời gian đến (ms) như sau:\nThời gian chạy Thời gian đến\nP1 3 0\nP2 12 4\nP3 4 6\nP4 7 8\nP5 3 11\nSử dụng thuật toán SJF cho phép dừng. Khẳng định nào sau đây là đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Thời gian chờ của P2 dài hơn thời gian chờ của P4",
                "b. Thời gian chờ của P2 và thời gian chờ của P5 giống nhau",
                "c. Thời gian chờ của P3 dài hơn thời gian chờ của P2",
                "d. Thời phản hồi của P3 dài hơn thời phản hồi của P4"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 34: Ý nào KHÔNG ĐÚNG về thuật toán lập lịch CPU Shortest Job First (SJF) ?",
            "type": "multiple-choice",
            "options": [
                "a. Một tên khác của thuật toán là Shortest Job Next (SJN)",
                "b. Đây cũng là một thuật toán lập lịch ưu tiên",
                "c. Tiến trình ngắn nhất sẽ được chọn để chạy",
                "d. Thuật toán lập lịch CPU Shortest remaining time first (SRTF) giống như SJF"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 35: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch SCAN là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196 --> 12",
                "b. 50 --> 12 --> 0 -->199 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "c. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "d. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196"
            ],
            "correctAnswer": "d. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196"
        },
        {
            "question": "Câu Hỏi 36: Đâu là phát biểu KHÔNG ĐÚNG về đồ thị phân bổ tài nguyên (RAG - Resource Allocation Graph)?",
            "type": "multiple-choice",
            "options": [
                "a. Nếu một chu kỳ tồn tại và mỗi tài nguyên được chia sẻ có nhiều thể hiện, có thể có một bế tắc",
                "b. Nếu một chu kỳ tồn tại và mỗi tài nguyên được chia sẻ chỉ có một thể hiện, sẽ có một bế tắc",
                "c. Nếu một chu kỳ tồn tại và mỗi tài nguyên được chia sẻ có nhiều thể hiện, sẽ có một bế tắc",
                "d. Không có bế tắc nếu không có chu kỳ tồn tại"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 37: Trong môi trường đa nhiệm, khi một tiến trình luôn bị từ chối cho phép dùng tài nguyên nó được gọi là:",
            "type": "multiple-choice",
            "options": [
                "a. đảo ngược",
                "b. lão hóa",
                "c. nạn đói",
                "d. bế tắc"
            ],
            "correctAnswer": "c. nạn đói"
        },
        {
            "question": "Câu Hỏi 38: Đâu là một trong các chức năng của hệ điều hành ?",
            "type": "multiple-choice",
            "options": [
                "a. cả ba phương án trên",
                "b. quản lý tài nguyên",
                "c. quản lý bộ nhớ",
                "d. khôi phục lỗi"
            ],
            "correctAnswer": "b. cả ba phương án trên"
        },
        {
            "question": "Câu Hỏi 39: Trong mã hóa bất đối xứng",
            "type": "multiple-choice",
            "options": [
                "a. Khoá mã hóa và khoá giải mã giống nhau",
                "b. Khoá mã hóa và khoá giải mã khác nhau",
                "c. Không cần khóa để mã hóa và giải mã",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "b. Khoá mã hóa và khoá giải mã khác nhau"
        },
        {
            "question": "Câu Hỏi 40: Ý nào KHÔNG ĐÚNG về việc không cho phép dừng trong các thuật toán lập lịch CPU?",
            "type": "multiple-choice",
            "options": [
                "a. Tiến trình hiện tại sẽ luôn được chạy cho đến khi chấm dứt",
                "b. FIFO là một thuật toán lập lịch không cho phép dừng",
                "c. Tiến trình hiện tại có thể được chuyển sang trạng waiting",
                "d. Chỉ có tiến trình hiện tại có thể sử dụng CPU"
            ],
            "correctAnswer": "a. Tiến trình hiện tại sẽ luôn được chạy cho đến khi chấm dứt"
        },
        {
            "question": "Câu Hỏi 41: Khi tỷ lệ lỗi trang thấp:",
            "type": "multiple-choice",
            "options": [
                "a. thời gian truy cập hiệu quả tăng",
                "b. thời gian truy cập hiệu quả giảm",
                "c. thời gian hoàn thành tăng",
                "d. thời gian hoàn thành tăng và thời gian truy cập hiệu quả tăng"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 42: Chức năng chính của chương trình biên dịch dòng lệnh là:",
            "type": "multiple-choice",
            "options": [
                "a. Cung cấp các giao diện giữa các API và chương trình ứng dụng",
                "b. Xử lý các tập tin trong hệ điều hành",
                "c. Các phương án trên đều sai",
                "d. Nhận và thực thi lệnh tiếp theo của người dùng"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 43: Điều kiện loại trừ lẫn nhau có thể được đảm bảo bằng cách sử dụng _________.",
            "type": "multiple-choice",
            "options": [
                "a. Khoá mutex",
                "b. Cả ba phương án trên đều sai",
                "c. Semaphore nhị phân",
                "d. Khoá mutex và Semaphore nhị phân"
            ],
            "correctAnswer": "a. Khoá mutex"
        },
        {
            "question": "Câu Hỏi 44: Đâu là lý do tại sao một tiến trình có thể chạy khi chỉ một phần của nó được tải vào bộ nhớ?",
            "type": "multiple-choice",
            "options": [
                "a. Bởi vì chúng có thể chỉ ra các câu lệnh nào để chạy",
                "b. Vì các câu lệnh liên quan luôn nằm trong cùng một nhóm",
                "c. Vì chỉ có một lệnh được thực thi tại một thời điểm",
                "d. Bởi vì các câu lệnh của một tiến trình là độc lập"
            ],
            "correctAnswer": "c. Vì chỉ có một lệnh được thực thi tại một thời điểm"
        },
        {
            "question": "Câu Hỏi 45: Thuật toán First fit và Best fit chịu ảnh hưởng của _______________",
            "type": "multiple-choice",
            "options": [
                "a. Nạn đói",
                "b. Hiện tượng phân mảnh trong",
                "c. Cả ba phương án trên",
                "d. Hiện tượng phân mảnh ngoài"
            ],
            "correctAnswer": "d. Hiện tượng phân mảnh ngoài"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Một số thông tin của thư mục được lưu trên bộ nhớ trong hoặc cache để________________",
            "type": "multiple-choice",
            "options": [
                "a. làm đầy bộ cache",
                "b. tăng tốc độ truy cập",
                "c. giảm không gian trống của bộ nhớ ngoài",
                "d. tăng không gian trống của bộ nhớ ngoài"
            ],
            "correctAnswer": "b. tăng tốc độ truy cập"
        },
        {
            "question": "Câu Hỏi 2: Trường hợp nào KHÔNG phù hợp để sử dụng counting semaphore?",
            "type": "multiple-choice",
            "options": [
                "a. Tài nguyên được chia sẻ có một số thể hiện",
                "b. Tài nguyên được chia sẻ có hai thể hiện",
                "c. Tài nguyên được chia sẻ có 3 thể hiện",
                "d. Tài nguyên được chia sẻ chỉ có một thể hiện (instance)"
            ],
            "correctAnswer": "d. Tài nguyên được chia sẻ chỉ có một thể hiện (instance)"
        },
        {
            "question": "Câu Hỏi 3: Điều nào ĐÚNG về điều kiện chờ đợi giới hạn của khu vực quan trọng?",
            "type": "multiple-choice",
            "options": [
                "a. Nó sử dụng tài nguyên được chia sẻ một cách hiệu quả",
                "b. Nó đảm bảo rằng không có tiến trình nào không bao giờ có thể vào khu vực quan trọng của nó hoặc đảm bảo tính công bằng giữa các tiến trình",
                "c. Nó hỗ trợ sự ưu tiên của các tiến trình",
                "d. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ"
            ],
            "correctAnswer": "b. Nó đảm bảo rằng không có tiến trình nào không bao giờ có thể vào khu vực quan trọng của nó hoặc đảm bảo tính công bằng giữa các tiến trình"
        },
        {
            "question": "Câu Hỏi 4: Semaphore dùng để _____________________",
            "type": "multiple-choice",
            "options": [
                "a. đồng bộ hoá các tài nguyên quan trọng nhằm tránh bế tắc",
                "b. đồng bộ hoá các tài nguyên quan trọng nhằm tránh hiện tượng tranh chấp",
                "c. quản lý bộ nhớ",
                "d. thực thi nhiện vụ vào/ra dữ liệu"
            ],
            "correctAnswer": "b. đồng bộ hoá các tài nguyên quan trọng nhằm tránh hiện tượng tranh chấp"
        },
        {
            "question": "Câu Hỏi 5: Đâu là phát biểu ĐÚNG về thuật toán banker?",
            "type": "multiple-choice",
            "options": [
                "a. Nó tìm ra trạng thái an toàn của hệ thống",
                "b. Nó không phát hiện trạng thái không an toàn của hệ thống",
                "c. Nó tìm ra trình tự an toàn của hệ thống khi một tiến trình yêu cầu tài nguyên",
                "d. Nó phát hiện bế tắc trong hệ thống"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 6: Đâu không phải là phương pháp cấp phát không gian trên ổ đĩa:",
            "type": "multiple-choice",
            "options": [
                "a. liên tục",
                "b. liên kết",
                "c. chỉ mục",
                "d. băm"
            ],
            "correctAnswer": "d. băm"
        },
        {
            "question": "Câu Hỏi 7: Round Robin là phiên bản cho phép dừng của thuật toán nào sau đây ?",
            "type": "multiple-choice",
            "options": [
                "a. SJF",
                "b. LJF (thời gian ngắn nhất trước)",
                "c. FCFS",
                "d. Priority (Thứ tự ưu tiên)"
            ],
            "correctAnswer": "c. FCFS"
        },
        {
            "question": "Câu Hỏi 8: Một hệ thống sử dụng phân bổ đĩa dạng danh sách liên kết với kích thước khối là 2KB; kích thước con trỏ 4 byte. Giả sử một tệp có kích thước 15,5 MB. Tính phần offset trong khối chứa dữ liệu ở vị trí tệp 15,25KB?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 9: Tiến trình xảy ra Thrashing khi:",
            "type": "multiple-choice",
            "options": [
                "a. Nó dành nhiều thời gian thực thi hơn thời gian chuyển trang ra/vào",
                "b. Nó dành nhiều thời gian chuyển trang ra/vào hơn thời gian thực thi",
                "c. Không được cấp phát bộ nhớ trong",
                "d. Tất cả các phương án trên đều sai"
            ],
            "correctAnswer": "b. Nó dành nhiều thời gian chuyển trang ra/vào hơn thời gian thực thi"
        },
        {
            "question": "Câu Hỏi 10: Để bảo vệ hệ thống, một tiến trình nên được truy cập__________",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các nguồn tài nguyên",
                "b. Một số ít tài nguyên nhưng việc cấp quyền là không cần thiết",
                "c. Tất cả các phương án trên",
                "d. Chỉ những nguồn tài nguyên mà nó được cấp quyền"
            ],
            "correctAnswer": "d. Chỉ những nguồn tài nguyên mà nó được cấp quyền"
        },
        {
            "question": "Câu Hỏi 11: Điều nào KHÔNG ĐÚNG về truyền thông giữa các tiến trình (IPC - Inter-process communication)?",
            "type": "multiple-choice",
            "options": [
                "a. IPC có thể được sử dụng để đồng bộ hóa",
                "b. IPC có thể được sử dụng để xử lý khu vực quan trọng",
                "c. IPC có thể được sử dụng để quản lý bộ nhớ",
                "d. IPC có thể được sử dụng để truyền thông dữ liệu"
            ],
            "correctAnswer": "c. IPC có thể được sử dụng để quản lý bộ nhớ"
        },
        {
            "question": "Câu Hỏi 12: Thuật toán lập lịch CPU nào thường cho thời gian phản hồi trung bình nhỏ nhất:",
            "type": "multiple-choice",
            "options": [
                "a. Thứ tự ưu tiên cho phép dừng",
                "b. SJF cho phép dừng",
                "c. Round Robin với time quantum nhỏ",
                "d. FCFS"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 13: Semaphore được sử dụng chủ yếu để:",
            "type": "multiple-choice",
            "options": [
                "a. Bảo vệ hệ thống",
                "b. Tạo các hàm hệ thống",
                "c. Cả ba phương án trên đều sai",
                "d. Làm phương tiện cho truyền thông giữa các tiến trình"
            ],
            "correctAnswer": "d. Làm phương tiện cho truyền thông giữa các tiến trình"
        },
        {
            "question": "Câu Hỏi 14: Đâu không phải là một cuộc tấn công, nhưng nó tìm kiếm các lỗ hổng để tấn công?",
            "type": "multiple-choice",
            "options": [
                "a. Quét cổng",
                "b. Từ chối dịch vụ",
                "c. Vi phạm truy cập bộ nhớ",
                "d. Tái chế"
            ],
            "correctAnswer": "a. Quét cổng"
        },
        {
            "question": "Câu Hỏi 15: Nếu chúng ta đảm bảo hệ thống không bao giờ rơi vào bế tắc, đó là loại phương pháp xử lý bế tắc này?",
            "type": "multiple-choice",
            "options": [
                "a. Ngăn chặn bế tắc",
                "b. Phát hiện bế tắc",
                "c. Bỏ qua bế tắc",
                "d. Phục hồi bế tắc"
            ],
            "correctAnswer": "a. Ngăn chặn bế tắc"
        },
        {
            "question": "Câu Hỏi 16: Nếu tất cả các tiến trình liên tục vào/ra dữ liệu thì hàng đợi sẵn sàng sẽ luôn......., bộ lập lịch ngắn hạn sẽ làm việc ........",
            "type": "multiple-choice",
            "options": [
                "a. đầy, ít",
                "b. đầy, rất nhiều",
                "c. trống rỗng, ít",
                "d. trống rỗng, rất nhiều"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 17: Một tiến trình có thể bị dừng do:",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các phương án trên",
                "b. Bị lỗi nghiêm trọng",
                "c. Bị giết chết bởi một tiến trình khác",
                "d. Thực thi kết thúc bình thường"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 18: Mô tả ĐÚNG của thư mục là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Một thư mục là một phân vùng đĩa",
                "b. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó",
                "c. Một thư mục lưu trữ cả FCB và dữ liệu của tệp",
                "d. Một thư mục lưu trữ tất cả dữ liệu của các tập tin của nó"
            ],
            "correctAnswer": "b. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó"
        },
        {
            "question": "Câu Hỏi 19: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67 Giả sử thuật toán lập lịch cho ổ đĩa SSTF được sử dụng, hãy hiển thị thứ tự của các yêu cầu được phục vụ? (Các yêu cầu được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy).",
            "type": "fill-in-the-blank",
            "correctAnswer": "65,67,37,14,98,122,124,183"
        },
        {
            "question": "Câu Hỏi 20: Mục tiêu ĐÚNG của điều kiện tiến triển của khu vực quan trọng là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Nó làm cho việc thực hiện HĐH đơn giản hơn",
                "b. Nó hỗ trợ sự ưu tiên của các tiến trình",
                "c. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ",
                "d. Nó làm giảm thời gian chờ đợi của các tiến trình được yêu cầu"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 21: Đâu là một trong các chức năng của hệ điều hành ?",
            "type": "multiple-choice",
            "options": [
                "a. quản lý tài nguyên",
                "b. cả ba phương án trên",
                "c. quản lý bộ nhớ",
                "d. khôi phục lỗi"
            ],
            "correctAnswer": "b. cả ba phương án trên"
        },
        {
            "question": "Câu Hỏi 22: Kỹ thuật phân trang không có hiện tượng phân mảnh ________.",
            "type": "multiple-choice",
            "options": [
                "a. trong và ngoài",
                "b. trong",
                "c. ngoài",
                "d. giữa"
            ],
            "correctAnswer": "c. ngoài"
        },
        {
            "question": "Câu Hỏi 23: Hai tiến trình sau chia sẻ một semaphore nhị phân S (khởi tạo bằng 0):\nTiến trình P1\n{ wait (S);\nprint (\"1\"); print (\"2\"); }\nTiến trình P2\n{ print (\"3\"); print (\"4\");\nsignal (S);}\nThông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Chuỗi kết quả in ra màn hình sau khi cả hai tiến trình kết thúc thực thi ?",
            "type": "multiple-choice",
            "options": [
                "a. 3421",
                "b. 3412",
                "c. 1324",
                "d. 1234"
            ],
            "correctAnswer": "b. 3412"
        },
        {
            "question": "Câu Hỏi 24: Đâu là phát biểu KHÔNG ĐÚNG về sự phân mảnh?",
            "type": "multiple-choice",
            "options": [
                "a. Có hai loại: phân mảnh bên trong và bên ngoài",
                "b. Sự phân mảnh dẫn đến việc sử dụng bộ nhớ kém hiệu quả",
                "c. Không có sự phân mảnh trên ổ đĩa",
                "d. Sự phân mảnh có thể dẫn đến tình huống một tiến trình không thể chạy mặc dù tổng bộ nhớ trống lớn hơn kích thước tiến trình"
            ],
            "correctAnswer": "c. Không có sự phân mảnh trên ổ đĩa"
        },
        {
            "question": "Câu Hỏi 25: Trong thuật toán lập lịch đa cấp phản hồi,",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác",
                "b. tiến trình không thể chuyển đổi giữa các cấp hàng đợi",
                "c. tiến trình liên tục gửi thông điệp cho hệ thống",
                "d. tiến trình không bị phân thành các nhóm khác nhau"
            ],
            "correctAnswer": "a. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác"
        },
        {
            "question": "Câu Hỏi 26: Nếu không có frame trống, bắt buộc có _____ thao tác chuyển trang.",
            "type": "multiple-choice",
            "options": [
                "a. một",
                "b. hai",
                "c. ba",
                "d. bốn"
            ],
            "correctAnswer": "b. hai"
        },
        {
            "question": "Câu Hỏi 27: Phát biểu nào ĐÚNG về mục tiêu của điều kiện loại trừ lẫn nhau của khu vực quan trọng?",
            "type": "multiple-choice",
            "options": [
                "a. Nó hỗ trợ sự ưu tiên của các tiến trình",
                "b. Nó làm cho việc thực hiện của hệ điều hành đơn giản hơn",
                "c. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ",
                "d. Nó cố gắng sử dụng tài nguyên được chia sẻ một cách hiệu quả hơn"
            ],
            "correctAnswer": "c. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ"
        },
        {
            "question": "Câu Hỏi 28: Câu nào sau đây không đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Nhân (kernel) bao gồm các mô-đun khác nhau không thể được nạp khi hệ điều hành đang chạy",
                "b. Nhân (kernel) ở trong bộ nhớ trong suốt phiên làm việc của máy tính",
                "c. Nhân (kernel) là chương trình tạo nên lõi trung tâm của hệ điều hành",
                "d. Nhân (kernel) là phần đầu tiên của hệ điều hành để nạp vào bộ nhớ lúc khởi động"
            ],
            "correctAnswer": "a. Nhân (kernel) bao gồm các mô-đun khác nhau không thể được nạp khi hệ điều hành đang chạy"
        },
        {
            "question": "Câu Hỏi 29: Đâu là phát biểu ĐÚNG về tình huống tương tranh (race condition)?",
            "type": "multiple-choice",
            "options": [
                "a. Nó xảy ra khi nhiều tiến trình đồng thời thao tác với một tài nguyên được chia sẻ",
                "b. Nó xảy ra khi có nhiều tiến trình trong hệ thống",
                "c. Nó xảy ra khi nhiều tiến trình thao tác tuần tự một tài nguyên được chia sẻ",
                "d. Nó xảy ra ngay cả trong trường hợp chỉ có một tiến trình"
            ],
            "correctAnswer": "a. Nó xảy ra khi nhiều tiến trình đồng thời thao tác với một tài nguyên được chia sẻ"
        },
        {
            "question": "Câu Hỏi 30: Đâu là phát biểu KHÔNG ĐÚNG về bảo vệ bộ nhớ trong phân trang?",
            "type": "multiple-choice",
            "options": [
                "a. Nếu bit là valid, trang tương ứng đã được tải vào bộ nhớ",
                "b. Mỗi mục trong bảng trang có một bit valid/invalid",
                "c. Nếu bit là invalid , trang tương ứng KHÔNG được tải vào bộ nhớ",
                "d. Nếu bit là NULL, trang tương ứng KHÔNG được tải vào bộ nhớ"
            ],
            "correctAnswer": "d. Nếu bit là NULL, trang tương ứng KHÔNG được tải vào bộ nhớ"
        },
        {
            "question": "Câu Hỏi 31: Giả sử một hệ thống sử dụng phân bổ đĩa dạng danh sách liên kết. Đâu là lý do tại sao chúng ta không thể có quyền truy cập ngẫu nhiên?",
            "type": "multiple-choice",
            "options": [
                "a. Vì không thể biết vị trí của khối thứ n từ khối thứ nhất",
                "b. Vì các khối dữ liệu của một tệp không liền kề nhau",
                "c. Vì lý do bảo mật",
                "d. Vì thông tin về khối dữ liệu của tệp bị ẩn"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 32: Trong mã hóa bất đối xứng",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. Không cần khóa để mã hóa và giải mã",
                "c. Khoá mã hóa và khoá giải mã giống nhau",
                "d. Khoá mã hóa và khoá giải mã khác nhau"
            ],
            "correctAnswer": "d. Khoá mã hóa và khoá giải mã khác nhau"
        },
        {
            "question": "Câu Hỏi 33: Sự khác biệt chính giữa bộ lập lịch ngắn hạn và bộ lập lịch dài hạn là:",
            "type": "multiple-choice",
            "options": [
                "a. Loại tiến trình mà chúng lên lịch",
                "b. Tần số thực thi",
                "c. Độ dài của hàng đợi",
                "d. Cả ba phương án trên đều sai"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 34: Giả sử một hệ thống sử dụng thuật toán lập lịch không cho phép dừng SJF, thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là:P1 (0,7), P2 (2,4), P3 (4,1), P4 (5,5). Tính thời gian quay vòng của P3?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4"
        },
        {
            "question": "Câu Hỏi 35: Kỹ thuật nào sau đây giúp giảm thiểu tình trạng nhàn rỗi của CPU hoặc các thiết bị vào/ra khi hệ điều hành đơn vi xử lý ?",
            "type": "multiple-choice",
            "options": [
                "a. Hệ điều hành phân tán",
                "b. Đa chương trình",
                "c. Sử dụng hành đợi",
                "d. sử dụng pipe"
            ],
            "correctAnswer": "b. Đa chương trình"
        },
        {
            "question": "Câu Hỏi 36: Điều kiện loại trừ lẫn nhau có thể được đảm bảo bằng cách sử dụng _________.",
            "type": "multiple-choice",
            "options": [
                "a. Khoá mutex",
                "b. Cả ba phương án trên đều sai",
                "c. Khoá mutex và Semaphore nhị phân",
                "d. Semaphore nhị phân"
            ],
            "correctAnswer": "a. Khoá mutex"
        },
        {
            "question": "Câu Hỏi 37: Tiến trình được phân thành các nhóm khác nhau trong:",
            "type": "multiple-choice",
            "options": [
                "a. thuật toán lập lịch hàng đợi đa cấp",
                "b. thuật toán lập lịch SJF",
                "c. thuật toán lập lịch Round Robin",
                "d. thuật toán lập lịch ưu tiên"
            ],
            "correctAnswer": "a. thuật toán lập lịch hàng đợi đa cấp"
        },
        {
            "question": "Câu Hỏi 38: Một hệ thống sử dụng phương pháp cấp phát bộ nhớ theo tỷ lệ. Có 3 tiến trình trong hệ thống là P1, P2 và P3 với kích thước lần lượt là 138KB, 96KB và 164KB. Giả sử kích thước bộ nhớ là 180KB và kích thước khung là 2KB, hãy tính số lượng khung được phân bổ cho các tiến trình P1, P2, P3? (Số khung của các tiến trình P1, P2, P3 được viết liền nhau, ngăn cách nhau bởi dấu phẩy. VD: 1,2,3)",
            "type": "fill-in-the-blank",
            "correctAnswer": "31,22,37"
        },
        {
            "question": "Câu Hỏi 39: Trong UNIX, chuyển đổi miền được thực hiện thông qua",
            "type": "multiple-choice",
            "options": [
                "a. Hệ thống tập tin",
                "b. Các phương án trên đều sai",
                "c. Người dùng",
                "d. Người quản trị hệ thống"
            ],
            "correctAnswer": "a. Hệ thống tập tin"
        },
        {
            "question": "Câu Hỏi 40: Bộ phận hoán đổi (swapper) làm việc với ___________, trong khi bộ phân phân trang làm việc với _______ của một tiến trình.",
            "type": "multiple-choice",
            "options": [
                "a. toàn bộ tiến trình, các bộ phận",
                "b. tất cả các trang của một tiến trình, phân đoạn",
                "c. Các phương án trên đều sai",
                "d. toàn bộ tiến trình, các trang"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 41: Nếu không gian được cấp phát cho một tập tin quá ít,",
            "type": "multiple-choice",
            "options": [
                "a. tập tin không thể mở được",
                "b. tập tin không thể mở rộng được",
                "c. sẽ không có bất kỳ không gian cho dữ liệu vì khối điều khiển tập tin chiếm tất cả",
                "d. tập tin sẽ không làm việc"
            ],
            "correctAnswer": "b. tập tin không thể mở rộng được"
        },
        {
            "question": "Câu Hỏi 42: Trong cấp phát liên kết, ______________________",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên đều sai",
                "b. Mỗi tập tin là một danh sách liên kết của các khối trên ổ đĩa",
                "c. Mỗi tập tin được lưu trên một tập các khối liên tục trên ổ đĩa",
                "d. Tất cả các con trỏ đến các khối nằm rải rác được đặt trong một khu vực"
            ],
            "correctAnswer": "b. Mỗi tập tin là một danh sách liên kết của các khối trên ổ đĩa"
        },
        {
            "question": "Câu Hỏi 43: Hệ điều hành cung cấp phương thức nào để truy cập đến các dịch vụ của hệ điều hành:",
            "type": "multiple-choice",
            "options": [
                "a. Các lệnh assembly",
                "b. Các hàm hệ thống",
                "c. API",
                "d. Các thư viện"
            ],
            "correctAnswer": "b. Các hàm hệ thống"
        },
        {
            "question": "Câu Hỏi 44: Đâu KHÔNG PHẢI là cấu trúc hệ điều hành?",
            "type": "multiple-choice",
            "options": [
                "a. Vi nhân (micro-kernel)",
                "b. Mô-đun",
                "c. Phân lớp (layered)",
                "d. Hướng đối tượng (Object-oriented)"
            ],
            "correctAnswer": "d. Hướng đối tượng (Object-oriented)"
        },
        {
            "question": "Câu Hỏi 45: Đâu là phát biểu KHÔNG ĐÚNG về bảo vệ bộ nhớ trong phân trang?",
            "type": "multiple-choice",
            "options": [
                "a. Nó đảm bảo tham chiếu luôn trỏ đến một vị trí trong bộ nhớ",
                "b. Nó đảm bảo tiến trình không bao giờ tham chiếu đến vị trí bộ nhớ không hợp lệ",
                "c. Nó đảm bảo một tiến trình luôn truy cập vào các vị trí trong không gian bộ nhớ của nó",
                "d. Nó đảm bảo trang tương ứng với một tham chiếu được tải vào bộ nhớ trước khi truy cập"
            ],
            "correctAnswer": "d. Nó đảm bảo trang tương ứng với một tham chiếu được tải vào bộ nhớ trước khi truy cập"
        }
    ],
    // Đề 7 (Bắt đầu từ trang 153 - Vũ Thị Oanh)
    [
        {
            "question": "Câu Hỏi 1: Có 4 tiến trình P1, P2, P3, P4 và 2 kiểu tài nguyên A, B. Tại thời điểm t, trạng thái của hệ thống như sau:\nĐã cấp phát Yêu cầu\nA B A B\nP1 1 3 1 2\nP2 4 1 4 3\nP3 1 2 1 7\nP4 2 0 5 1\nA còn 2 đơn vị tài nguyên, B còn 4 đơn vị tài nguyên. Hệ thống đang ở trạng thái nào:",
            "type": "multiple-choice",
            "options": [
                "a. An toàn",
                "b. Bế tắc",
                "c. Được bảo vệ",
                "d. Không có bế tắc"
            ],
            "correctAnswer": "a. An toàn"
        },
        {
            "question": "Câu Hỏi 2: Mục tiêu TỐT NHẤT của mirroring trong RAID (Redundant Array of Inexpensive Disks) là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Để tăng dung lượng đĩa",
                "b. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng",
                "c. Để tăng kích thước tệp",
                "d. Để tăng tốc độ vào ra (I/O speed)"
            ],
            "correctAnswer": "b. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng"
        },
        {
            "question": "Câu Hỏi 3: Nhược điểm của thư mục có cấu trúc danh sách tuyến tính là_______________",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên",
                "b. Kích thước của danh sách tuyến tính trong bộ nhớ",
                "c. Không tin cậy",
                "d. Tìm kiếm tập tin một cách tuần tự"
            ],
            "correctAnswer": "d. Tìm kiếm tập tin một cách tuần tự"
        },
        {
            "question": "Câu Hỏi 4: Để tránh xảy ra điều kiện không dừng, nếu một tiến trình đang nắm giữ một số tài nguyên và yêu cầu một nguồn tài nguyên không thể ngay lập tức cấp phát cho nó:",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình tiếp tục thực thi mà không được cấp phát nguồn tài nguyên nó cần",
                "b. tiến trình liên tục gửi yêu cầu cho đến khi tài nguyên được cấp phát cho nó",
                "c. thì tất cả các tài nguyên hiện đang bị giữ sẽ được giải phóng",
                "d. thì tiến trình chờ đợi các tài nguyên sẽ được cấp phát cho nó"
            ],
            "correctAnswer": "c. thì tất cả các tài nguyên hiện đang bị giữ sẽ được giải phóng"
        },
        {
            "question": "Câu Hỏi 5: Ba tiến trình sau chia sẻ semaphore nhị phân S1, S2, S3 (khởi tạo bằng 0):\nTiến trình P1\n{ wait (S1); print (\"A\"); signal (S2);}\nTiến trình P2\n{ wait (S2); print (\"B\"); signal (S3);}\nTiến trình P3\n{ signal (S3); print (\"C\"); signal (S1);}\nThông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Chuỗi kết quả in ra màn hình sau khi cả ba tiến trình kết thúc thực thi ?",
            "type": "multiple-choice",
            "options": [
                "a. BCA",
                "b. ABC",
                "c. BAC",
                "d. CAB"
            ],
            "correctAnswer": "a. BCA"
        },
        {
            "question": "Câu Hỏi 6: Khi các thay đổi được lưu vào log thì giao dịch được coi là ________________",
            "type": "multiple-choice",
            "options": [
                "a. được chuyển vào bộ nhớ trong",
                "b. hoàn thành",
                "c. cập nhật",
                "d. bị lỗi"
            ],
            "correctAnswer": "b. hoàn thành"
        },
        {
            "question": "Câu Hỏi 7: Nguyên tắc nào mà các chương trình, người sử dụng và hệ thống chỉ được cấp đủ quyền để thực hiện nhiệm vụ của chúng?",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. Nguyên tắc quyền tối thiểu",
                "c. Nguyên tắc lập lịch tiến trình",
                "d. Nguyên tắc của hệ điều hành"
            ],
            "correctAnswer": "b. Nguyên tắc quyền tối thiểu"
        },
        {
            "question": "Câu Hỏi 8: Chọn mô tả đúng nhất về những gì một máy tính thuần túy (một máy tính không có hệ điều hành) có thể làm",
            "type": "multiple-choice",
            "options": [
                "a. Cung cấp các chương trình ứng dụng cho người dùng",
                "b. Cung cấp ứng dụng và kết nối mạng cho người dùng",
                "c. Cung cấp giao diện người dùng đồ họa",
                "d. CPU có thể thực hiện tính toán số học, phát hiện các thiết bị có sẵn như RAM, đĩa, ..."
            ],
            "correctAnswer": "d. CPU có thể thực hiện tính toán số học, phát hiện các thiết bị có sẵn như RAM, đĩa, ..."
        },
        {
            "question": "Câu Hỏi 9: Đâu là phát biểu ĐÚNG về biến số Work trong thuật toán banker?",
            "type": "multiple-choice",
            "options": [
                "a. Nó lưu trữ số lượng các thể hiện tài nguyên có sẵn khi một tiến trình bị chấm dứt",
                "b. Nó lưu trữ số lượng phiên bản tài nguyên của mỗi tiến trình",
                "c. Đây là một biến dư thừa",
                "d. Nó lưu trữ trạng thái của hệ thống"
            ],
            "correctAnswer": "a. Nó lưu trữ số lượng các thể hiện tài nguyên có sẵn khi một tiến trình bị chấm dứt"
        },
        {
            "question": "Câu Hỏi 10: Trong truyền thông giữa các tiến trình, vùng đệm với kích thước 0:",
            "type": "multiple-choice",
            "options": [
                "a. Người gửi gửi liên tục, và các thông điệp không đợi trong vùng đệm",
                "b. Vùng đệm có thể lưu ít nhất một thông điệp",
                "c. Người nhận định kỳ lấy thông điệp từ vùng đệm",
                "d. Vùng đệm không chứa thông điệp nào và người gửi bị chặn cho đến khi thông điệp được nhận"
            ],
            "correctAnswer": "d. Vùng đệm không chứa thông điệp nào và người gửi bị chặn cho đến khi thông điệp được nhận"
        },
        {
            "question": "Câu Hỏi 11: Mục tiêu TỐT NHẤT của stripping trong RAID (Redundant Array of Inexpensive Disks) là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Để tăng dung lượng đĩa",
                "b. Để tăng tốc độ vào ra (I/O speed)",
                "c. Để tăng kích thước tệp",
                "d. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng"
            ],
            "correctAnswer": "b. Để tăng tốc độ vào ra (I/O speed)"
        },
        {
            "question": "Câu Hỏi 12: Có 5 tiến trình P1, P2, P3, P4, P5 với thời gian chạy CPU (ms), thời gian đến (ms) như sau:\nThời gian chạy Thời gian đến\nP1 3 0\nP2 12 4\nP3 4 6\nP4 7 8\nP5 3 11\nSử dụng thuật toán FCFS. Khẳng định nào sau đây là đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Hiện tượng đoàn hộ tống xảy ra với tiến trình P4",
                "b. Hiện tượng đoàn hộ tống xảy ra với tiến trình P1",
                "c. Hiện tượng đoàn hộ tống xảy ra với tiến trình P2",
                "d. Hiện tượng đoàn hộ tống không xảy ra với tiến trình P5"
            ],
            "correctAnswer": "c. Hiện tượng đoàn hộ tống xảy ra với tiến trình P2"
        },
        {
            "question": "Câu Hỏi 13: Trong cấp phát liên kết, ______________________",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các con trỏ đến các khối nằm rải rác được đặt trong một khu vực",
                "b. Cả ba phương án trên đều sai",
                "c. Mỗi tập tin được lưu trên một tập các khối liên tục trên ổ đĩa",
                "d. Mỗi tập tin là một danh sách liên kết của các khối trên ổ đĩa"
            ],
            "correctAnswer": "d. Mỗi tập tin là một danh sách liên kết của các khối trên ổ đĩa"
        },
        {
            "question": "Câu Hỏi 14: Miền bảo vệ của một tiến trình bao gồm",
            "type": "multiple-choice",
            "options": [
                "a. Tên đối tượng và tập các quyền",
                "b. Tên đối tượng",
                "c. Tập các quyền",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "a. Tên đối tượng và tập các quyền"
        },
        {
            "question": "Câu Hỏi 15: Một tiến trình sử dụng 5 trang 1,2,3,4,5 theo trình tự: 1,2,4,5,2,1,2,4. Nếu sử dụng thuật toán thay thế trang FIFO, số lỗi trang xảy ra khi tăng từ 3 frame lên 4 frame :",
            "type": "multiple-choice",
            "options": [
                "a. giảm",
                "b. Các phương án trên đều sai",
                "c. vẫn giữ nguyên",
                "d. tăng"
            ],
            "correctAnswer": "d. tăng"
        },
        {
            "question": "Câu Hỏi 16: Giả sử một hệ thống sử dụng thuật toán lập lịch Round Robin (RR), thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là: P1 (0,21), P2 (30,10), P3 (20,40), P4 (40,25) và lượng tử thời gian là 15. Hiển thị thứ tự mà các tiến trình được chạy (các tiến trình được viết liền nhau và ngăn cách bởi dấu phấy. VD: P1,P2,P3,P4)?",
            "type": "fill-in-the-blank",
            "correctAnswer": "P1,P2,P4,P3"
        },
        {
            "question": "Câu Hỏi 17: Hai tiến trình, P1 và P2, cần truy cập vào khu vực quan trọng. Xem xét đoạn mã đồng bộ hóa sau được sử dụng bởi các tiến trình:\nP1:\nwhile(true)\n{\nw1 = true;\nwhile(w2 == true);\nCritical section\nw1 = false;\n}\nRemainder Section\nP2 :\nwhile(true)\n{\nw2 = true;\nwhile(w1 == true);\nCritical section\nw2 = false;\n}\nRemainder Section\nỞ đây, w1 và w2 là các biến chia sẻ, được khởi tạo bằng false. Điều nào dưới đây là đúng về đoạn mã trên ?",
            "type": "multiple-choice",
            "options": [
                "a. Nó không đảm bảo tính chờ đợi có giới hạn",
                "b. Các tiến trình lần lượt vào khu vực quan trọng",
                "c. Bế tắc có thể xảy ra, nhưng đảm bảo tính loại trừ lẫn nhau",
                "d. Nó không đảm bảo tính loại trừ lẫn nhau"
            ],
            "correctAnswer": "c. Bế tắc có thể xảy ra, nhưng đảm bảo tính loại trừ lẫn nhau"
        },
        {
            "question": "Câu Hỏi 18: Bộ phận hoán đổi (swapper) làm việc với ___________, trong khi bộ phân phân trang làm việc với _______ của một tiến trình.",
            "type": "multiple-choice",
            "options": [
                "a. toàn bộ tiến trình, các trang",
                "b. toàn bộ tiến trình, các bộ phận",
                "c. tất cả các trang của một tiến trình, phân đoạn",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "a. toàn bộ tiến trình, các trang"
        },
        {
            "question": "Câu Hỏi 19: RAID cấp độ ___________ sử dụng chế độ phân dải dữ liệu cấp độ khối và bit chẵn lẻ cho mỗi khối và khối bit chẵn lẻ được lưu trên ổ đĩa riêng.",
            "type": "multiple-choice",
            "options": [
                "a. 2",
                "b. 5",
                "c. 3",
                "d. 4"
            ],
            "correctAnswer": "d. 4"
        },
        {
            "question": "Câu Hỏi 20: Trong chế độ không chờ gửi:",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình gửi liên tục gửi cho đến khi nó nhận được một thông điệp",
                "b. tiến trình gửi sẽ gửi thông điệp và rồi quay lại thực thi",
                "c. tiến trình gửi liên tục gửi cho đến khi thông điệp được nhận",
                "d. Cả ba phương án trên đều sai"
            ],
            "correctAnswer": "b. tiến trình gửi sẽ gửi thông điệp và rồi quay lại thực thi"
        },
        {
            "question": "Câu Hỏi 21: Phát biểu nào ĐÚNG về mục tiêu của điều kiện loại trừ lẫn nhau của khu vực quan trọng?",
            "type": "multiple-choice",
            "options": [
                "a. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ",
                "b. Nó cố gắng sử dụng tài nguyên được chia sẻ một cách hiệu quả hơn",
                "c. Nó làm cho việc thực hiện của hệ điều hành đơn giản hơn",
                "d. Nó hỗ trợ sự ưu tiên của các tiến trình"
            ],
            "correctAnswer": "a. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ"
        },
        {
            "question": "Câu Hỏi 22: Chọn mô tả KHÔNG ĐÚNG về các tác vụ chính của hệ điều hành",
            "type": "multiple-choice",
            "options": [
                "a. Cung cấp hệ thống quản lý cơ sở dữ liệu",
                "b. Quản lý tiến trình",
                "c. Phân bổ tài nguyên (cho các tiến trình)",
                "d. Cung cấp Giao diện lập trình ứng dụng (API) cho các nhà phát triển ứng dụng"
            ],
            "correctAnswer": "a. Cung cấp hệ thống quản lý cơ sở dữ liệu"
        },
        {
            "question": "Câu Hỏi 23: Có 5 tiến trình P1, P2, P3, P4, P5 với thời gian chạy CPU (ms), thời gian đến (ms) như sau:\nThời gian chạy Thời gian đến\nP1 3 0\nP2 12 4\nP3 4 6\nP4 7 8\nP5 3 11\nSử dụng thuật toán SJF cho phép dừng. Khẳng định nào sau đây là đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Thời phản hồi của P3 dài hơn thời phản hồi của P4",
                "b. Thời gian chờ của P2 dài hơn thời gian chờ của P4",
                "c. Thời gian chờ của P3 dài hơn thời gian chờ của P2",
                "d. Thời gian chờ của P2 và thời gian chờ của P5 giống nhau"
            ],
            "correctAnswer": "d. Thời gian chờ của P2 và thời gian chờ của P5 giống nhau"
        },
        {
            "question": "Câu Hỏi 24: Một hệ thống sử dụng phương pháp cấp phát bộ nhớ theo tỷ lệ. Có 3 tiến trình trong hệ thống là P1, P2 và P3 với kích thước lần lượt là 138KB, 96KB và 164KB. Giả sử kích thước bộ nhớ là 180KB và kích thước khung là 2KB, hãy tính số lượng khung được phân bổ cho các tiến trình P1, P2, P3? (Số khung của các tiến trình P1, P2, P3 được viết liền nhau, ngăn cách nhau bởi dấu phẩy. VD: 1,2,3)",
            "type": "fill-in-the-blank",
            "correctAnswer": "31,22,37"
        },
        {
            "question": "Câu Hỏi 25: Giả sử một hệ thống sử dụng phân bổ bộ nhớ phân đoạn. Nội dung của bảng phân đoạn (giới hạn, cơ sở) của một tiến trình là [(1000, 1400), (400, 6300), (400, 4300), (1100, 3200), (1000, 4700)]. Tính địa chỉ vật lý của tham chiếu (1, 106)?",
            "type": "fill-in-the-blank",
            "correctAnswer": "6406"
        },
        {
            "question": "Câu Hỏi 26: Đâu là phát biểu KHÔNG ĐÚNG về semaphore?",
            "type": "multiple-choice",
            "options": [
                "a. Semaphore không thỏa mãn các điều kiện của khu vực quan trọng",
                "b. Semaphore là một giải pháp để giải quyết khu vực quan trọng",
                "c. Một semaphore thường bao gồm một số nguyên",
                "d. Semaphore có các hoạt động nguyên tử"
            ],
            "correctAnswer": "a. Semaphore không thỏa mãn các điều kiện của khu vực quan trọng"
        },
        {
            "question": "Câu Hỏi 27: Đâu không phải là một cuộc tấn công, nhưng nó tìm kiếm các lỗ hổng để tấn công?",
            "type": "multiple-choice",
            "options": [
                "a. Từ chối dịch vụ",
                "b. Quét cổng",
                "c. Tái chế",
                "d. Vi phạm truy cập bộ nhớ"
            ],
            "correctAnswer": "b. Quét cổng"
        },
        {
            "question": "Câu Hỏi 28: Đâu không phải là phương pháp cấp phát không gian trên ổ đĩa:",
            "type": "multiple-choice",
            "options": [
                "a. liên tục",
                "b. liên kết",
                "c. chỉ mục",
                "d. băm"
            ],
            "correctAnswer": "d. băm"
        },
        {
            "question": "Câu Hỏi 29: Trong chế độ chờ gửi:",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình gửi liên tục gửi cho đến khi nó nhận được một thông điệp",
                "b. tiến trình gửi không hoạt động",
                "c. tiến trình gửi phải chờ cho đến khi thông điệp được nhận",
                "d. tiến trình gửi sẽ gửi thông điệp và rồi quay lại thực thi"
            ],
            "correctAnswer": "c. tiến trình gửi phải chờ cho đến khi thông điệp được nhận"
        },
        {
            "question": "Câu Hỏi 30: Người dùng _______ tiến trình của họ đang chạy trên một hệ thống phân trang.",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. nhận thức được",
                "c. không nhận thức được",
                "d. nhận thức được và chủ động điều khiển"
            ],
            "correctAnswer": "c. không nhận thức được"
        },
        {
            "question": "Câu Hỏi 31: Windows XP thuộc loại hệ điều hành nào?",
            "type": "multiple-choice",
            "options": [
                "a. Nhúng",
                "b. Mục đích đặc biệt",
                "c. Đơn chương trình",
                "d. Đa chương trình"
            ],
            "correctAnswer": "d. Đa chương trình"
        },
        {
            "question": "Câu Hỏi 32: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba. Tính số khối chỉ mục tối đa mà hệ thống có thể sử dụng để tạo tập tin?",
            "type": "fill-in-the-blank",
            "correctAnswer": "107"
        },
        {
            "question": "Câu Hỏi 33: Đâu là phát biểu KHÔNG ĐÚNG về bảo vệ bộ nhớ trong phân trang?",
            "type": "multiple-choice",
            "options": [
                "a. Mỗi mục trong bảng trang có một bit valid/invalid",
                "b. Nếu bit là valid, trang tương ứng đã được tải vào bộ nhớ",
                "c. Nếu bit là NULL, trang tương ứng KHÔNG được tải vào bộ nhớ",
                "d. Nếu bit là invalid , trang tương ứng KHÔNG được tải vào bộ nhớ"
            ],
            "correctAnswer": "c. Nếu bit là NULL, trang tương ứng KHÔNG được tải vào bộ nhớ"
        },
        {
            "question": "Câu Hỏi 34: Tính thời gian trung bình truy cập bộ nhớ cho một hệ thống có tỉ suất trúng cache là 80% khi thời gian truy cập cache là 10 ns, thời gian truy cập bộ nhớ chính là 100 ns.",
            "type": "multiple-choice",
            "options": [
                "a. 28 ns",
                "b. 82 ns",
                "c. 80 ns",
                "d. 8 ns"
            ],
            "correctAnswer": "a. 28 ns"
        },
        {
            "question": "Câu Hỏi 35: Virus đa phần (multipartite virus) thường tấn công",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các phương án trên",
                "b. Boot sector",
                "c. Bộ nhớ",
                "d. Các tập tin"
            ],
            "correctAnswer": "a. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 36: Hai tiến trình sau chia sẻ một biến chung X (khởi tạo bằng 5), và hai semaphore nhị phân S1, S2 (khởi tạo bằng 0):\nTiến trình A\n{int Y; wait(S1); A1: Y = X*2; signal(S2); wait(S1); A2: X = Y; }\nTiến trình B\n{int Z; B1: Z=X+1; signal(S1); wait(S2); B2: X=Z; signal(S1); }\nThông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Giá trị cuối cùng của X sau khi thực thi xong hai tiến trình A và B sẽ là:",
            "type": "multiple-choice",
            "options": [
                "a. 10",
                "b. 6",
                "c. 12",
                "d. 11"
            ],
            "correctAnswer": "d. 11"
        },
        {
            "question": "Câu Hỏi 37: Mục đích của đa chương trình là:",
            "type": "multiple-choice",
            "options": [
                "a. Tối đa hoá việc sử dụng CPU",
                "b. Tối đa hoá mức sử dụng các thiết bị vào ra",
                "c. Tối đa hoá mức sử dụng bộ nhớ",
                "d. Có nhiều chương trình chờ trong hàng đợi sẵn sàng để chạy"
            ],
            "correctAnswer": "a. Tối đa hoá việc sử dụng CPU"
        },
        {
            "question": "Câu Hỏi 38: Trong thuật toán lập lịch đa cấp phản hồi,",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình liên tục gửi thông điệp cho hệ thống",
                "b. tiến trình không thể chuyển đổi giữa các cấp hàng đợi",
                "c. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác",
                "d. tiến trình không bị phân thành các nhóm khác nhau"
            ],
            "correctAnswer": "c. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác"
        },
        {
            "question": "Câu Hỏi 39: Đâu là phát biểu KHÔNG ĐÚNG về bảo vệ bộ nhớ trong phân trang?",
            "type": "multiple-choice",
            "options": [
                "a. Nó đảm bảo tham chiếu luôn trỏ đến một vị trí trong bộ nhớ",
                "b. Nó đảm bảo một tiến trình luôn truy cập vào các vị trí trong không gian bộ nhớ của nó",
                "c. Nó đảm bảo tiến trình không bao giờ tham chiếu đến vị trí bộ nhớ không hợp lệ",
                "d. Nó đảm bảo trang tương ứng với một tham chiếu được tải vào bộ nhớ trước khi truy cập"
            ],
            "correctAnswer": "a. Nó đảm bảo tham chiếu luôn trỏ đến một vị trí trong bộ nhớ"
        },
        {
            "question": "Câu Hỏi 40: Chọn mã chương trình mà một CPU có thể hiểu và thực thi được",
            "type": "multiple-choice",
            "options": [
                "a. c.open ();",
                "b. a = a + b",
                "c. 0110010110",
                "d. add AX, BX"
            ],
            "correctAnswer": "c. 0110010110"
        },
        {
            "question": "Câu Hỏi 41: Mức độ đa chương trình là:",
            "type": "multiple-choice",
            "options": [
                "a. Số lượng các tiến trình thực thi trong một đơn vị thời gian",
                "b. Số lượng các tiến trình trong bộ nhớ",
                "c. Số lượng các tiến trình trong hàng đợi sẵn sàng",
                "d. Số lượng các tiến trình trong hàng đợi vào ra"
            ],
            "correctAnswer": "b. Số lượng các tiến trình trong bộ nhớ"
        },
        {
            "question": "Câu Hỏi 42: Thuật toán lập lịch Round Robin là ______________________",
            "type": "multiple-choice",
            "options": [
                "a. thuật toán lập lịch phân tiến trình thành các nhóm khác nhau",
                "b. thuật toán lập lịch không cho phép dừng",
                "c. thuật toán lập lịch cho phép dừng",
                "d. thuật toán lập lịch lúc cho phép dừng, lúc không cho phép dừng"
            ],
            "correctAnswer": "c. thuật toán lập lịch cho phép dừng"
        },
        {
            "question": "Câu Hỏi 43: Giả sử một hệ thống sử dụng thuật toán lập lịch Không cho phép dừng SJF , thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là:P1 (0,7), P2 (2,4), P3 (4,1), P4 (5,5). Thời gian quay vòng của tiến trình P2 là bao nhiêu?",
            "type": "multiple-choice",
            "options": [
                "a. 10",
                "b. 8",
                "c. 6",
                "d. 12"
            ],
            "correctAnswer": "b. 8"
        },
        {
            "question": "Câu Hỏi 44: Đâu không phải là hàng đợi cho các tiến trình:",
            "type": "multiple-choice",
            "options": [
                "a. Hàng đợi khối điều khiển tiến trình",
                "b. Hàng đợi nhiệm vụ",
                "c. Hàng đợi sẵn sàng",
                "d. Hàng đợi thiết bị"
            ],
            "correctAnswer": "a. Hàng đợi khối điều khiển tiến trình"
        },
        {
            "question": "Câu Hỏi 45: Mô tả TỐT NHẤT về tránh bế tắc là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Cho phép hệ thống đi vào bế tắc và khôi phục hệ thống",
                "b. Đảm bảo rằng không có sự chờ đợi vòng tròn giữa các tiến trình",
                "c. Đảm bảo một trong bốn điều kiện bế tắc không bao giờ xảy ra",
                "d. Đảm bảo hệ thống không bao giờ rơi vào trạng thái bế tắc"
            ],
            "correctAnswer": "d. Đảm bảo hệ thống không bao giờ rơi vào trạng thái bế tắc"
        }
    ],
    // Đề 8 (Bắt đầu từ trang 167 - Ngọc Đăng Lương - Bài kiểm tra thứ ba)
    [
        {
            "question": "Câu Hỏi 1: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch C-SCAN là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 -->156 --> 161 --> 181 -->196",
                "b. 50 --> 12 --> 0 -->199 -->196 --> 181 --> 161 --> 156 -->149 --> 103 --> 80 --> 69 --> 55",
                "c. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196 --> 12",
                "d. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55"
            ],
            "correctAnswer": "b. 50 --> 12 --> 0 -->199 -->196 --> 181 --> 161 --> 156 -->149 --> 103 --> 80 --> 69 --> 55"
        },
        {
            "question": "Câu Hỏi 2: Cửa ập trong một chương trình là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Lỗ hổng bảo mật trong mạng",
                "b. Các phương án trên đều sai",
                "c. Một lỗ hổng bảo mật được cho vào trong hệ thống lúc lập trình nhằm mục đích sử dụng sau này",
                "d. Một loại chương trình chống virus"
            ],
            "correctAnswer": "c. Một lỗ hổng bảo mật được cho vào trong hệ thống lúc lập trình nhằm mục đích sử dụng sau này"
        },
        {
            "question": "Câu Hỏi 3: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba. Tính kích thước tệp tối đa (theo KB) nếu con trỏ gián tiếp kép được sử dụng?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4144"
        },
        {
            "question": "Câu Hỏi 4: Nếu một ổ đĩa gặp sự cố trong RAID cấp độ ___________ thì phục hồi lại dữ liệu bị mất là đơn giản nhất so với RAID ở các cấp độ khác.",
            "type": "multiple-choice",
            "options": [
                "a. 2",
                "b. 1",
                "c. 3",
                "d. 4"
            ],
            "correctAnswer": "b. 1"
        },
        {
            "question": "Câu Hỏi 5: Tập tin virus thường được gắn với",
            "type": "multiple-choice",
            "options": [
                "a. Tập tin đối tượng",
                "b. Tất cả các phương án trên",
                "c. Tập tin thực thi",
                "d. Tập tin nguồn"
            ],
            "correctAnswer": "c. Tập tin thực thi"
        },
        {
            "question": "Câu Hỏi 6: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53 và hướng về phía trụ 199; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa C-SCAN được sử dụng, hãy hiển thị thứ tự của các yêu cầu được phục vụ? (Các yêu cầu được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy).",
            "type": "fill-in-the-blank",
            "correctAnswer": "65,67,98,122,124,183,190,0,14,37"
        },
        {
            "question": "Câu Hỏi 7: Trên ổ đĩa các khối 2,3,4,5,8,9,10,11,12,13 còn trống, các khối còn lại đã được sử dụng, bit map dùng để quản lý không gian trống của khối 0 đến 15 là _____________",
            "type": "multiple-choice",
            "options": [
                "a. 1100001100001110",
                "b. 0011110011111100",
                "c. 0111100111110000",
                "d. 1000011000000111"
            ],
            "correctAnswer": "c. 0111100111110000"
        },
        {
            "question": "Câu Hỏi 8: Mô hình ma trận truy cập để xác thực người dùng có chứa________",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các phương án trên",
                "b. Một hàm trả về kiểu của một đối tượng",
                "c. Một danh sách các miền",
                "d. Một danh sách các đối tượng"
            ],
            "correctAnswer": "a. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 9: Mục tiêu TỐT NHẤT của mirroring trong RAID (Redundant Array of Inexpensive Disks) là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Để tăng dung lượng đĩa",
                "b. Để tăng kích thước tệp",
                "c. Để tăng tốc độ vào ra (I/O speed)",
                "d. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng"
            ],
            "correctAnswer": "d. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng"
        },
        {
            "question": "Câu Hỏi 10: RAID cấp độ ___________ sử dụng chế độ phân dải dữ liệu cấp độ bit và bit chẵn lẻ cho mỗi byte.",
            "type": "multiple-choice",
            "options": [
                "a. 4",
                "b. 2",
                "c. 5",
                "d. 3"
            ],
            "correctAnswer": "b. 2"
        },
        {
            "question": "Câu Hỏi 11: Nếu hệ thống bị sự cố trước khi các thay đổi của một giao dịch được lưu vào log thì chúng sẽ được ________________",
            "type": "multiple-choice",
            "options": [
                "a. huỷ bỏ",
                "b. chuyển vào bộ nhớ trong",
                "c. lưu và thực hiện lại giao dịch",
                "d. lưu"
            ],
            "correctAnswer": "a. huỷ bỏ"
        },
        {
            "question": "Câu Hỏi 12: Khó khăn của cấp phát liên tục là_______________",
            "type": "multiple-choice",
            "options": [
                "a. Giá thành cao",
                "b. Mất nhiều thời gian",
                "c. Không hiệu quả",
                "d. Việc tìm không gian cho tập tin mới"
            ],
            "correctAnswer": "d. Việc tìm không gian cho tập tin mới"
        },
        {
            "question": "Câu Hỏi 13: Giả sử một hệ thống sử dụng phân bổ theo chỉ mục (1 cấp) với kích thước khối 4KB; kích thước con trỏ 4 byte. Tính kích thước tập tin tối đa (tính theo MB) mà hệ thống có thể tạo ra?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4"
        },
        {
            "question": "Câu Hỏi 14: Mỗi tập tin có _______________ chứa thông tin về tập tin như quyền sở hữu, quyền truy cập, vị trí nội dung tập tin.",
            "type": "multiple-choice",
            "options": [
                "a. Bảng chỉ mục",
                "b. Metadata",
                "c. Khối điểu khiển tiến trình",
                "d. Khối điều khiển tập tin"
            ],
            "correctAnswer": "d. Khối điều khiển tập tin"
        },
        {
            "question": "Câu Hỏi 15: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba. Tính kích thước tệp tối đa (theo KB) khi chỉ sử dụng con trỏ trực tiếp?",
            "type": "fill-in-the-blank",
            "correctAnswer": "48"
        },
        {
            "question": "Câu Hỏi 16: VFS (hệ thống tập tin ảo) kích hoạt một số hàm của hệ thống tập tin để xử lý các yêu cầu dựa trên _______ .",
            "type": "multiple-choice",
            "options": [
                "a. kiểu hệ thống tập tin",
                "b. kích thước",
                "c. lệnh",
                "d. nhãn thời gian"
            ],
            "correctAnswer": "a. kiểu hệ thống tập tin"
        },
        {
            "question": "Câu Hỏi 17: Virus đa phần (multipartite virus) thường tấn công",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các phương án trên",
                "b. Boot sector",
                "c. Các tập tin",
                "d. Bộ nhớ"
            ],
            "correctAnswer": "a. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 18: Đâu là phát biểu KHÔNG ĐÚNG về đĩa cứng?",
            "type": "multiple-choice",
            "options": [
                "a. Độ trễ chuyển động quay của trục ( Rotation latency) là thời gian chờ đợi để khu vực (sector) mong muốn đến đầu đọc (head)",
                "b. Tốc độ truyền (Transfer rate) là yếu tố quan trọng nhất đối với các thuật toán lập lịch cho ổ đĩa",
                "c. Thời gian tìm kiếm (Seek time) là thời gian để di chuyển đầu đọc (head) đến trụ (cylinder) mong muốn",
                "d. Tốc độ truyền (Transfer rate) là tốc độ dữ liệu giữa ổ đĩa và máy tính"
            ],
            "correctAnswer": "b. Tốc độ truyền (Transfer rate) là yếu tố quan trọng nhất đối với các thuật toán lập lịch cho ổ đĩa"
        },
        {
            "question": "Câu Hỏi 19: Thuật toán First fit và Best fit chịu ảnh hưởng của _______________",
            "type": "multiple-choice",
            "options": [
                "a. Hiện tượng phân mảnh ngoài",
                "b. Nạn đói",
                "c. Cả ba phương án trên",
                "d. Hiện tượng phân mảnh trong"
            ],
            "correctAnswer": "a. Hiện tượng phân mảnh ngoài"
        },
        {
            "question": "Câu Hỏi 20: Đoạn mã sử dụng sai mục đích được gọi là ____________",
            "type": "multiple-choice",
            "options": [
                "a. Trộm nội bộ",
                "b. Trojan",
                "c. Các phương án trên đều sai",
                "d. Mã sửa đổi ngăn xếp"
            ],
            "correctAnswer": "b. Trojan"
        },
        {
            "question": "Câu Hỏi 21: Một hệ thống sử dụng phân bổ khối chỉ mục được liên kết với kích thước khối là 2KB; kích thước con trỏ 4 byte. Giả sử một tệp có kích thước 20MB. Tính số khối chỉ mục (bắt đầu từ 0) của tệp tại vị trí 15,5 MB.",
            "type": "fill-in-the-blank",
            "correctAnswer": "15"
        },
        {
            "question": "Câu Hỏi 22: Các cuộc tấn công làm cho một máy tính hoặc mạng lưới tài nguyên không phục vụ được người dùng như dự kiến được gọi là __________",
            "type": "multiple-choice",
            "options": [
                "a. Tấn công từ chối dịch vụ",
                "b. Tấn công giả mạo",
                "c. Tấn công nạn đói",
                "d. Tấn công đọc chậm"
            ],
            "correctAnswer": "a. Tấn công từ chối dịch vụ"
        },
        {
            "question": "Câu Hỏi 23: Một số thông tin của thư mục được lưu trên bộ nhớ trong hoặc cache để________________",
            "type": "multiple-choice",
            "options": [
                "a. làm đầy bộ cache",
                "b. tăng tốc độ truy cập",
                "c. tăng không gian trống của bộ nhớ ngoài",
                "d. giảm không gian trống của bộ nhớ ngoài"
            ],
            "correctAnswer": "b. tăng tốc độ truy cập"
        },
        {
            "question": "Câu Hỏi 24: Giả sử một hệ thống sử dụng phân bổ đĩa dạng danh sách liên kết. Đâu là lý do tại sao chúng ta không thể có quyền truy cập ngẫu nhiên?",
            "type": "multiple-choice",
            "options": [
                "a. Vì các khối dữ liệu của một tệp không liền kề nhau",
                "b. Vì lý do bảo mật",
                "c. Vì thông tin về khối dữ liệu của tệp bị ẩn",
                "d. Vì không thể biết vị trí của khối thứ n từ khối thứ nhất"
            ],
            "correctAnswer": "d. Vì không thể biết vị trí của khối thứ n từ khối thứ nhất"
        },
        {
            "question": "Câu Hỏi 25: Khi các thay đổi được lưu vào log thì giao dịch được coi là ________________",
            "type": "multiple-choice",
            "options": [
                "a. được chuyển vào bộ nhớ trong",
                "b. hoàn thành",
                "c. cập nhật",
                "d. bị lỗi"
            ],
            "correctAnswer": "b. hoàn thành"
        },
        {
            "question": "Câu Hỏi 26: Đâu là cách một tiến trình sử dụng các cơ chế tự sinh sôi để giảm hiệu năng hệ thống?",
            "type": "multiple-choice",
            "options": [
                "a. Sâu",
                "b. Vi rút",
                "c. Trojan",
                "d. Đe dọa"
            ],
            "correctAnswer": "a. Sâu"
        },
        {
            "question": "Câu Hỏi 27: Đâu là phát biểu KHÔNG ĐÚNG về Hệ thống tệp ảo (VFS - Virtual File System)?",
            "type": "multiple-choice",
            "options": [
                "a. VFS có sẵn trong tất cả các hệ điều hành",
                "b. VFS ẩn việc triển khai chi tiết hệ thống tệp riêng lẻ",
                "c. VFS cho phép một hệ thống có một số hệ thống tệp khác nhau",
                "d. VFS cung cấp Giao diện lập trình ứng dụng (API - Application Programming Interface) hợp nhất cho các hệ thống tệp khác nhau"
            ],
            "correctAnswer": "a. VFS có sẵn trong tất cả các hệ điều hành"
        },
        {
            "question": "Câu Hỏi 28: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53 và hướng về trụ 0; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa SCAN được sử dụng, hãy hiển thị thứ tự của các yêu cầu được phục vụ? (Các yêu cầu được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy).",
            "type": "fill-in-the-blank",
            "correctAnswer": "37,14,65,67,98,122,124,183"
        },
        {
            "question": "Câu Hỏi 29: Mô tả ĐÚNG của thư mục là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Một thư mục là một phân vùng đĩa",
                "b. Một thư mục lưu trữ tất cả dữ liệu của các tập tin của nó",
                "c. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó",
                "d. Một thư mục lưu trữ cả FCB và dữ liệu của tệp"
            ],
            "correctAnswer": "c. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó"
        },
        {
            "question": "Câu Hỏi 30: Một hệ thống sử dụng phân bổ đĩa dạng danh sách liên kết với kích thước khối là 2KB; kích thước con trỏ 4 byte. Giả sử một tệp có kích thước 15,5 MB. Tính chỉ số của khối (bắt đầu từ 0) của vị trí tại vị trí của tệp là 15,25KB?",
            "type": "fill-in-the-blank",
            "correctAnswer": "50"
        }
    ],
    // Đề 9 (Bắt đầu từ trang 178 - Xuân Lâm Đỗ - Bài kiểm tra thứ ba)
    [
        {
            "question": "Câu Hỏi 1: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch SSTF là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 12 --> 0 --> 199 --> 196 -->181 --> 161 -->156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "b. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161--> 181--> 196 --> 12",
                "c. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196",
                "d. 50 --> 12 --> 196 --> 181 --> 161--> 156 --> 149 --> 103-->80 --> 69 --> 55"
            ],
            "correctAnswer": "b. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161--> 181--> 196 --> 12"
        },
        {
            "question": "Câu Hỏi 2: Bảng ma trận truy cập toàn cục chứa________",
            "type": "multiple-choice",
            "options": [
                "a. Miền",
                "b. Đối tượng",
                "c. Tập các quyền",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "d. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 3: Một hệ thống sử dụng phân bổ theo chỉ mục 2 cấp với kích thước khối 4KB; kích thước con trỏ 4 byte. Tính kích thước tối đa (theo MB) của một tập tin mà hệ thống có thể tạo ra?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4096"
        },
        {
            "question": "Câu Hỏi 4: Các cuộc tấn công làm cho một máy tính hoặc mạng lưới tài nguyên không phục vụ được người dùng như dự kiến được gọi là __________",
            "type": "multiple-choice",
            "options": [
                "a. Tấn công đọc chậm",
                "b. Tấn công từ chối dịch vụ",
                "c. Tấn công giả mạo",
                "d. Tấn công nạn đói"
            ],
            "correctAnswer": "b. Tấn công từ chối dịch vụ"
        },
        {
            "question": "Câu Hỏi 5: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch LOOK là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "b. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196",
                "c. 50 --> 12 --> 0 --> 199 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "d. 50 --> 12 --> 55 --> 69 --> 80 -->103 --> 149 --> 156 --> 161 --> 181 --> 196"
            ],
            "correctAnswer": "d. 50 --> 12 --> 55 --> 69 --> 80 -->103 --> 149 --> 156 --> 161 --> 181 --> 196"
        },
        {
            "question": "Câu Hỏi 6: Để bảo vệ hệ thống, một tiến trình nên được truy cập__________",
            "type": "multiple-choice",
            "options": [
                "a. Chỉ những nguồn tài nguyên mà nó được cấp quyền",
                "b. Một số ít tài nguyên nhưng việc cấp quyền là không cần thiết",
                "c. Tất cả các nguồn tài nguyên",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "a. Chỉ những nguồn tài nguyên mà nó được cấp quyền"
        },
        {
            "question": "Câu Hỏi 7: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba.Tính số khối chỉ mục tối đa nếu con trỏ gián tiếp kép được sử dụng?",
            "type": "fill-in-the-blank",
            "correctAnswer": "1026"
        },
        {
            "question": "Câu Hỏi 8: Nguyên tắc nào mà các chương trình, người sử dụng và hệ thống chỉ được cấp đủ quyền để thực hiện nhiệm vụ của chúng?",
            "type": "multiple-choice",
            "options": [
                "a. Nguyên tắc quyền tối thiểu",
                "b. Nguyên tắc lập lịch tiến trình",
                "c. Các phương án trên đều sai",
                "d. Nguyên tắc của hệ điều hành"
            ],
            "correctAnswer": "a. Nguyên tắc quyền tối thiểu"
        },
        {
            "question": "Câu Hỏi 9: Trong cấp phát liên kết, ______________________",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên đều sai",
                "b. Tất cả các con trỏ đến các khối nằm rải rác được đặt trong một khu vực",
                "c. Mỗi tập tin được lưu trên một tập các khối liên tục trên ổ đĩa",
                "d. Mỗi tập tin là một danh sách liên kết của các khối trên ổ đĩa"
            ],
            "correctAnswer": "d. Mỗi tập tin là một danh sách liên kết của các khối trên ổ đĩa"
        },
        {
            "question": "Câu Hỏi 10: Trong UNIX, chuyển đổi miền được thực hiện thông qua",
            "type": "multiple-choice",
            "options": [
                "a. Người dùng",
                "b. Các phương án trên đều sai",
                "c. Người quản trị hệ thống",
                "d. Hệ thống tập tin"
            ],
            "correctAnswer": "d. Hệ thống tập tin"
        },
        {
            "question": "Câu Hỏi 11: Một số thông tin của thư mục được lưu trên bộ nhớ trong hoặc cache để________________",
            "type": "multiple-choice",
            "options": [
                "a. làm đầy bộ cache",
                "b. tăng không gian trống của bộ nhớ ngoài",
                "c. tăng tốc độ truy cập",
                "d. giảm không gian trống của bộ nhớ ngoài"
            ],
            "correctAnswer": "c. tăng tốc độ truy cập"
        },
        {
            "question": "Câu Hỏi 12: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch SCAN là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "b. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196 --> 12",
                "c. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196",
                "d. 50 --> 12 --> 0 -->199 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55"
            ],
            "correctAnswer": "c. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196"
        },
        {
            "question": "Câu Hỏi 13: Giả sử một hệ thống sử dụng phân bổ đĩa liền kề với kích thước khối là 2KB. Một tệp có kích thước 12,3 MB. Vị trí chính xác của vị trí tệp 50,5KB là gì?",
            "type": "multiple-choice",
            "options": [
                "a. (block index, offset)=(25, 512)",
                "b. (block index, offset)=(24, 511)",
                "c. (block index, offset)=(25, 511)",
                "d. (block index, offset)=(24, 512)"
            ],
            "correctAnswer": "a. (block index, offset)=(25, 512)"
        },
        {
            "question": "Câu Hỏi 14: ______________________ không xảy ra với cấp phát liên kết.",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên",
                "b. Hiện tượng phân mảnh ngoài",
                "c. Nạn đói",
                "d. Hiện tượng phân mảnh trong"
            ],
            "correctAnswer": "b. Hiện tượng phân mảnh ngoài"
        },
        {
            "question": "Câu Hỏi 15: Khi tiến trình yêu cầu truy cập tập tin thì nó cần _______________",
            "type": "multiple-choice",
            "options": [
                "a. Sử dụng hàm hệ thống open() và close()",
                "b. Chạy một chương trình riêng biệt khác",
                "c. Sử dụng các ngắt đặc biệt",
                "d. Gửi yêu cầu đến khối điều khiển tập tin"
            ],
            "correctAnswer": "a. Sử dụng hàm hệ thống open() và close()"
        },
        {
            "question": "Câu Hỏi 16: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch C-SCAN là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "b. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196 --> 12",
                "c. 50 --> 12 --> 0 -->199 -->196 --> 181 --> 161 --> 156 -->149 --> 103 --> 80 --> 69 --> 55",
                "d. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 -->156 --> 161 --> 181 -->196"
            ],
            "correctAnswer": "c. 50 --> 12 --> 0 -->199 -->196 --> 181 --> 161 --> 156 -->149 --> 103 --> 80 --> 69 --> 55"
        },
        {
            "question": "Câu Hỏi 17: Miền bảo vệ của một tiến trình bao gồm",
            "type": "multiple-choice",
            "options": [
                "a. Tên đối tượng và tập các quyền",
                "b. Tên đối tượng",
                "c. Tập các quyền",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "a. Tên đối tượng và tập các quyền"
        },
        {
            "question": "Câu Hỏi 18: Đâu là phát biểu KHÔNG ĐÚNG về Hệ thống tệp ảo (VFS - Virtual File System)?",
            "type": "multiple-choice",
            "options": [
                "a. VFS có sẵn trong tất cả các hệ điều hành",
                "b. VFS cho phép một hệ thống có một số hệ thống tệp khác nhau",
                "c. VFS ẩn việc triển khai chi tiết hệ thống tệp riêng lẻ",
                "d. VFS cung cấp Giao diện lập trình ứng dụng (API - Application Programming Interface) hợp nhất cho các hệ thống tệp khác nhau"
            ],
            "correctAnswer": "a. VFS có sẵn trong tất cả các hệ điều hành"
        },
        {
            "question": "Câu Hỏi 19: VFS (hệ thống tập tin ảo) kích hoạt một số hàm của hệ thống tập tin để xử lý các yêu cầu dựa trên _______ .",
            "type": "multiple-choice",
            "options": [
                "a. kích thước",
                "b. kiểu hệ thống tập tin",
                "c. lệnh",
                "d. nhãn thời gian"
            ],
            "correctAnswer": "b. kiểu hệ thống tập tin"
        },
        {
            "question": "Câu Hỏi 20: Đâu không phải là một cuộc tấn công, nhưng nó tìm kiếm các lỗ hổng để tấn công?",
            "type": "multiple-choice",
            "options": [
                "a. Tái chế",
                "b. Quét cổng",
                "c. Từ chối dịch vụ",
                "d. Vi phạm truy cập bộ nhớ"
            ],
            "correctAnswer": "b. Quét cổng"
        },
        {
            "question": "Câu Hỏi 21: Khó khăn của cấp phát liên tục là_______________",
            "type": "multiple-choice",
            "options": [
                "a. Không hiệu quả",
                "b. Giá thành cao",
                "c. Việc tìm không gian cho tập tin mới",
                "d. Mất nhiều thời gian"
            ],
            "correctAnswer": "c. Việc tìm không gian cho tập tin mới"
        },
        {
            "question": "Câu Hỏi 22: FAT có cấu trúc giống như ______________________",
            "type": "multiple-choice",
            "options": [
                "a. Danh sách liên kết",
                "b. Bảng băm",
                "c. Bảng chỉ mục",
                "d. Ngăn xếp"
            ],
            "correctAnswer": "a. Danh sách liên kết"
        },
        {
            "question": "Câu Hỏi 23: RAID cấp độ ___________ sử dụng chế độ phân dải dữ liệu cấp độ khối và bit chẵn lẻ cho mỗi khối và khối bit chẵn lẻ được lưu trên ổ đĩa riêng.",
            "type": "multiple-choice",
            "options": [
                "a. 2",
                "b. 3",
                "c. 4",
                "d. 5"
            ],
            "correctAnswer": "c. 4"
        },
        {
            "question": "Câu Hỏi 24: Đâu không phải là phương pháp cấp phát không gian trên ổ đĩa:",
            "type": "multiple-choice",
            "options": [
                "a. liên kết",
                "b. băm",
                "c. liên tục",
                "d. chỉ mục"
            ],
            "correctAnswer": "b. băm"
        },
        {
            "question": "Câu Hỏi 25: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba. Tính kích thước tập tin tối đa (theo KB) mà hệ thống có thể tạo ra?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4299165744"
        },
        {
            "question": "Câu Hỏi 26: Giả sử một hệ thống sử dụng phân bổ theo chỉ mục (1 cấp) với kích thước khối 4KB; kích thước con trỏ 4 byte. Một tệp có kích thước 3MB. Đâu là vị trí chính xác của vị trí tệp tin 35KB?",
            "type": "multiple-choice",
            "options": [
                "a. (block index, offset)=(8, 3071)",
                "b. (block index, offset)=(9, 3072)",
                "c. (block index, offset)=(8, 3072)",
                "d. (block index, offset)=(9, 3071)"
            ],
            "correctAnswer": "c. (block index, offset)=(8, 3072)"
        },
        {
            "question": "Câu Hỏi 27: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53 và hướng về phía xi lanh 199; chuỗi các yêu cầu đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa C-LOOK được sử dụng, hãy hiển thị thứ tự của các yêu cầu được phục vụ? (Các yêu cầu được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy).",
            "type": "fill-in-the-blank",
            "correctAnswer": "37,14,65,67,98,122,124,183"
        },
        {
            "question": "Câu Hỏi 28: Giả sử một hệ thống sử dụng phân bổ theo chỉ mục (1 cấp) với kích thước khối 4KB; kích thước con trỏ 4 byte. Tính kích thước tập tin tối đa (tính theo MB) mà hệ thống có thể tạo ra?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4"
        },
        {
            "question": "Câu Hỏi 29: Một ổ cứng có các thông số sau: Tốc độ trục quay 700 RPM, mỗi track chứa 12 sector, mỗi sector có dung lượng 1024 byte. Tốc độ truyền dữ liệu là:",
            "type": "multiple-choice",
            "options": [
                "a. 1120 Kbps",
                "b. 700 Kbps",
                "c. 1024 Kbps",
                "d. 800 Kbps"
            ],
            "correctAnswer": "a. 1120 Kbps"
        },
        {
            "question": "Câu Hỏi 30: Trong RAID cấp độ 4, để đọc mỗi khối dữ liệu cần truy cập ___________",
            "type": "multiple-choice",
            "options": [
                "a. chỉ một ổ đĩa",
                "b. đồng thời một số ổ đĩa",
                "c. lần lượt từng ổ đĩa một",
                "d. đồng thời tất cả các ổ đĩa"
            ],
            "correctAnswer": "a. chỉ một ổ đĩa"
        }
    ],
    // Đề 10 (Bắt đầu từ trang 190 - Văn Ngọc Nguyễn - Bài kiểm tra thứ ba)
    [
        {
            "question": "Câu Hỏi 1: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch LOOK là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "b. 50 --> 12 --> 0 --> 199 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "c. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196",
                "d. 50 --> 12 --> 55 --> 69 --> 80 -->103 --> 149 --> 156 --> 161 --> 181 --> 196"
            ],
            "correctAnswer": "d. 50 --> 12 --> 55 --> 69 --> 80 -->103 --> 149 --> 156 --> 161 --> 181 --> 196"
        },
        {
            "question": "Câu Hỏi 2: Mục tiêu TỐT NHẤT của stripping trong RAID (Redundant Array of Inexpensive Disks) là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Để tăng dung lượng đĩa",
                "b. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng",
                "c. Để tăng tốc độ vào ra (I/O speed)",
                "d. Để tăng kích thước tệp"
            ],
            "correctAnswer": "c. Để tăng tốc độ vào ra (I/O speed)"
        },
        {
            "question": "Câu Hỏi 3: Trên ổ đĩa các khối 2,3,4,5,8,9,10,11,12,13 còn trống, các khối còn lại đã được sử dụng, bit map dùng để quản lý không gian trống của khối 0 đến 15 là _____________",
            "type": "multiple-choice",
            "options": [
                "a. 1100001100001110",
                "b. 1000011000000111",
                "c. 0011110011111100",
                "d. 0111100111110000"
            ],
            "correctAnswer": "d. 0111100111110000"
        },
        {
            "question": "Câu Hỏi 4: ______________________ không xảy ra với cấp phát liên kết.",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên",
                "b. Hiện tượng phân mảnh trong",
                "c. Hiện tượng phân mảnh ngoài",
                "d. Nạn đói"
            ],
            "correctAnswer": "c. Hiện tượng phân mảnh ngoài"
        },
        {
            "question": "Câu Hỏi 5: RAID cấp độ ___________ sử dụng chế độ phân dải dữ liệu cấp độ bit và bit chẵn lẻ cho mỗi byte.",
            "type": "multiple-choice",
            "options": [
                "a. 2",
                "b. 3",
                "c. 4",
                "d. 5"
            ],
            "correctAnswer": "a. 2"
        },
        {
            "question": "Câu Hỏi 6: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba. Tính số khối chỉ mục tối đa mà hệ thống có thể sử dụng để tạo tập tin?",
            "type": "fill-in-the-blank",
            "correctAnswer": "48"
        },
        {
            "question": "Câu Hỏi 7: Bộ kiểm tra tính nhất quán ________________ và cố sửa các lỗi không nhất quán mà nó tìm thấy.",
            "type": "multiple-choice",
            "options": [
                "a. so sánh dữ liệu trong bộ nhớ ngoài với dữ liệu trong cache",
                "b. so sánh dữ liệu của hệ thống tạo ra với dữ liệu ra mà người dùng yêu cầu",
                "c. so sánh dữ liệu trong cấu trúc thư mục với khối dữ liệu trên ổ đĩa",
                "d. cả ba phương án trên"
            ],
            "correctAnswer": "c. so sánh dữ liệu trong cấu trúc thư mục với khối dữ liệu trên ổ đĩa"
        },
        {
            "question": "Câu Hỏi 8: Nếu hệ thống bị sự cố trước khi các thay đổi của một giao dịch được lưu vào log thì chúng sẽ được ________________",
            "type": "multiple-choice",
            "options": [
                "a. lưu",
                "b. chuyển vào bộ nhớ trong",
                "c. huỷ bỏ",
                "d. lưu và thực hiện lại giao dịch"
            ],
            "correctAnswer": "c. huỷ bỏ"
        },
        {
            "question": "Câu Hỏi 9: Đoạn mã sử dụng sai mục đích được gọi là ____________",
            "type": "multiple-choice",
            "options": [
                "a. Trojan",
                "b. Mã sửa đổi ngăn xếp",
                "c. Các phương án trên đều sai",
                "d. Trộm nội bộ"
            ],
            "correctAnswer": "a. Trojan"
        },
        {
            "question": "Câu Hỏi 10: Đâu là phát biểu KHÔNG ĐÚNG về Khối điều khiển tệp (FCB - File Control Block)?",
            "type": "multiple-choice",
            "options": [
                "a. inode trong Linux là một ví dụ về FCB",
                "b. Đây là cấu trúc dữ liệu lưu trữ thông tin cần thiết để thao tác với tệp",
                "c. Đây là cấu trúc dữ liệu lưu trữ dữ liệu của tệp",
                "d. FCB của tệp thường được lưu trữ trên đĩa (hoặc thiết bị lưu trữ)"
            ],
            "correctAnswer": "c. Đây là cấu trúc dữ liệu lưu trữ dữ liệu của tệp"
        },
        {
            "question": "Câu Hỏi 11: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch SSTF là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 12 --> 0 --> 199 --> 196 -->181 --> 161 -->156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "b. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196",
                "c. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161--> 181--> 196 --> 12",
                "d. 50 --> 12 --> 196 --> 181 --> 161--> 156 --> 149 --> 103-->80 --> 69 --> 55"
            ],
            "correctAnswer": "c. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161--> 181--> 196 --> 12"
        },
        {
            "question": "Câu Hỏi 12: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch C-LOOK là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 -->196",
                "b. 50 --> 55 --> 69--> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196 -->12",
                "c. 50 --> 12 --> 0 --> 199 --> 196 --> 181 --> 161 --> 156 --> 149 -->103 --> 80 --> 69 --> 55",
                "d. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55"
            ],
            "correctAnswer": "b. 50 --> 55 --> 69--> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196 -->12"
        },
        {
            "question": "Câu Hỏi 13: Giả sử một hệ thống sử dụng phân bổ đĩa dạng danh sách liên kết. Đâu là lý do tại sao chúng ta không thể có quyền truy cập ngẫu nhiên?",
            "type": "multiple-choice",
            "options": [
                "a. Vì thông tin về khối dữ liệu của tệp bị ẩn",
                "b. Vì không thể biết vị trí của khối thứ n từ khối thứ nhất",
                "c. Vì các khối dữ liệu của một tệp không liền kề nhau",
                "d. Vì lý do bảo mật"
            ],
            "correctAnswer": "b. Vì không thể biết vị trí của khối thứ n từ khối thứ nhất"
        },
        {
            "question": "Câu Hỏi 14: Mỗi tập tin có _______________ chứa thông tin về tập tin như quyền sở hữu, quyền truy cập, vị trí nội dung tập tin.",
            "type": "multiple-choice",
            "options": [
                "a. Metadata",
                "b. Bảng chỉ mục",
                "c. Khối điều khiển tập tin",
                "d. Khối điểu khiển tiến trình"
            ],
            "correctAnswer": "c. Khối điều khiển tập tin"
        },
        {
            "question": "Câu Hỏi 15: Đâu là phát biểu KHÔNG ĐÚNG về Hệ thống tệp ảo (VFS - Virtual File System)?",
            "type": "multiple-choice",
            "options": [
                "a. VFS có sẵn trong tất cả các hệ điều hành",
                "b. VFS cho phép một hệ thống có một số hệ thống tệp khác nhau",
                "c. VFS cung cấp Giao diện lập trình ứng dụng (API - Application Programming Interface) hợp nhất cho các hệ thống tệp khác nhau",
                "d. VFS ẩn việc triển khai chi tiết hệ thống tệp riêng lẻ"
            ],
            "correctAnswer": "a. VFS có sẵn trong tất cả các hệ điều hành"
        },
        {
            "question": "Câu Hỏi 16: Trong mã hóa bất đối xứng",
            "type": "multiple-choice",
            "options": [
                "a. Không cần khóa để mã hóa và giải mã",
                "b. Khoá mã hóa và khoá giải mã giống nhau",
                "c. Các phương án trên đều sai",
                "d. Khoá mã hóa và khoá giải mã khác nhau"
            ],
            "correctAnswer": "d. Khoá mã hóa và khoá giải mã khác nhau"
        },
        {
            "question": "Câu Hỏi 17: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa FCFS được sử dụng, tính tổng số trụ mà đầu phải di chuyển để phục vụ các yêu cầu trên?",
            "type": "fill-in-the-blank",
            "correctAnswer": "640"
        },
        {
            "question": "Câu Hỏi 18: Nếu không gian được cấp phát cho một tập tin quá ít,",
            "type": "multiple-choice",
            "options": [
                "a. tập tin không thể mở được",
                "b. tập tin không thể mở rộng được",
                "c. tập tin sẽ không làm việc",
                "d. sẽ không có bất kỳ không gian cho dữ liệu vì khối điều khiển tập tin chiếm tất cả"
            ],
            "correctAnswer": "b. tập tin không thể mở rộng được"
        },
        {
            "question": "Câu Hỏi 19: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53 và hướng về trụ 0; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa SCAN được sử dụng, hãy hiển thị thứ tự của các yêu cầu được phục vụ? (Các yêu cầu được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy).",
            "type": "fill-in-the-blank",
            "correctAnswer": "37,14,65,67,98,122,124,183"
        },
        {
            "question": "Câu Hỏi 20: Đâu là phát biểu KHÔNG ĐÚNG về hệ thống tập tin?",
            "type": "multiple-choice",
            "options": [
                "a. Thông tin dữ liệu meta của tệp được lưu trữ dưới dạng tiêu đề của tệp",
                "b. Các ví dụ về thông tin dữ liệu meta là: tên tệp, kích thước tệp, thời gian truy cập, thời gian sửa đổi, v.v.",
                "c. Một số thông tin dữ liệu meta của tệp được lưu trữ trong một thư mục",
                "d. Một tệp thường bao gồm hai phần: dữ liệu meta (thông tin về tệp) và dữ liệu"
            ],
            "correctAnswer": "a. Thông tin dữ liệu meta của tệp được lưu trữ dưới dạng tiêu đề của tệp"
        },
        {
            "question": "Câu Hỏi 21: Một ổ cứng có các thông số sau: Tốc độ trục quay 700 RPM, mỗi track chứa 12 sector, mỗi sector có dung lượng 1024 byte. Tốc độ truyền dữ liệu là:",
            "type": "multiple-choice",
            "options": [
                "a. 800 Kbps",
                "b. 700 Kbps",
                "c. 1024 Kbps",
                "d. 1120 Kbps"
            ],
            "correctAnswer": "d. 1120 Kbps"
        },
        {
            "question": "Câu Hỏi 22: Mô tả ĐÚNG của thư mục là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Một thư mục lưu trữ tất cả dữ liệu của các tập tin của nó",
                "b. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó",
                "c. Một thư mục là một phân vùng đĩa",
                "d. Một thư mục lưu trữ cả FCB và dữ liệu của tệp"
            ],
            "correctAnswer": "b. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó"
        },
        {
            "question": "Câu Hỏi 23: Trong UNIX, chuyển đổi miền được thực hiện thông qua",
            "type": "multiple-choice",
            "options": [
                "a. Người quản trị hệ thống",
                "b. Người dùng",
                "c. Hệ thống tập tin",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "c. Hệ thống tập tin"
        },
        {
            "question": "Câu Hỏi 24: Trong cấp phát liên kết, thư mục chứa con trỏ trỏ đến______________________",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các khối của tập tin",
                "b. Khối đầu tiên của tập tin",
                "c. Khối đầu tiên và cuối cùng của tập tin",
                "d. Khối cuối cùng của tập tin"
            ],
            "correctAnswer": "b. Khối đầu tiên của tập tin"
        },
        {
            "question": "Câu Hỏi 25: _______ là một cách tiếp cận để hạn chế quyền truy cập hệ thống đối với người dùng được uỷ quyền.",
            "type": "multiple-choice",
            "options": [
                "a. Kiểm soát truy cập dựa trên tiến trình",
                "b. Các phương án trên đều sai",
                "c. Kiểm soát truy cập dựa trên vai trò",
                "d. Kiểm soát truy cập dựa trên nhiệm vụ"
            ],
            "correctAnswer": "c. Kiểm soát truy cập dựa trên vai trò"
        },
        {
            "question": "Câu Hỏi 26: Nếu tập các nguồn tài nguyên sẵn có cho một tiến trình là cố định trong suốt cuộc đời của nó thì miền của tiến trình đó là ____________",
            "type": "multiple-choice",
            "options": [
                "a. Tĩnh",
                "b. Động",
                "c. Không phải tĩnh cũng không phải động",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "a. Tĩnh"
        },
        {
            "question": "Câu Hỏi 27: Giả sử một hệ thống sử dụng phân bổ đĩa liền kề với kích thước khối là 2KB. Một tệp có kích thước 12,3 MB. Vị trí chính xác của vị trí tệp 50,5KB là gì?",
            "type": "multiple-choice",
            "options": [
                "a. (block index, offset)=(24, 511)",
                "b. (block index, offset)=(25, 511)",
                "c. (block index, offset)=(24, 512)",
                "d. (block index, offset)=(25, 512)"
            ],
            "correctAnswer": "d. (block index, offset)=(25, 512)"
        },
        {
            "question": "Câu Hỏi 28: Với kiểu truy cập tập tin bất kỳ, cấp phát liên tục yêu cầu ________________ truy cập để đọc khối dữ liệu trên ổ đĩa.",
            "type": "multiple-choice",
            "options": [
                "a. đúng hai lần",
                "b. ít nhất hai lần",
                "c. cả ba phương án trên đều sai",
                "d. đúng một lần"
            ],
            "correctAnswer": "d. đúng một lần"
        },
        {
            "question": "Câu Hỏi 29: Virus đa phần (multipartite virus) thường tấn công",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các phương án trên",
                "b. Các tập tin",
                "c. Boot sector",
                "d. Bộ nhớ"
            ],
            "correctAnswer": "a. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 30: Đoạn mã trong một phần mềm nào đó sẽ gây ra một số nguy hiểm trong một số điều kiện nhất định được gọi là ____________",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. Mã sửa đổi ngăn xếp",
                "c. Cửa sập",
                "d. Bom logic"
            ],
            "correctAnswer": "d. Bom logic"
        }
    ],
    // Đề 11 (Bắt đầu từ trang 202 - Quốc Khánh Lê - Bài kiểm tra thứ ba)
    [
        {
            "question": "Câu Hỏi 1: Đoạn mã trong một phần mềm nào đó sẽ gây ra một số nguy hiểm trong một số điều kiện nhất định được gọi là ____________",
            "type": "multiple-choice",
            "options": [
                "a. Cửa sập",
                "b. Các phương án trên đều sai",
                "c. Mã sửa đổi ngăn xếp",
                "d. Bom logic"
            ],
            "correctAnswer": "d. Bom logic"
        },
        {
            "question": "Câu Hỏi 2: Giả sử một hệ thống sử dụng phân bổ đĩa dạng danh sách liên kết. Đâu là cách để truy cập khối dữ liệu thứ n của tệp?",
            "type": "multiple-choice",
            "options": [
                "a. Đọc khối 10 đầu tiên để suy ra vị trí của khối thứ n",
                "b. Đọc đệ quy khối n-1 trước đó để tìm vị trí của khối thứ n",
                "c. Đọc khối đầu tiên để suy ra vị trí của khối thứ n",
                "d. Vị trí của khối thứ n có thể được tính thông qua bản đồ"
            ],
            "correctAnswer": "b. Đọc đệ quy khối n-1 trước đó để tìm vị trí của khối thứ n"
        },
        {
            "question": "Câu Hỏi 3: Khi các thay đổi được lưu vào log thì giao dịch được coi là ________________",
            "type": "multiple-choice",
            "options": [
                "a. bị lỗi",
                "b. hoàn thành",
                "c. được chuyển vào bộ nhớ trong",
                "d. cập nhật"
            ],
            "correctAnswer": "b. hoàn thành"
        },
        {
            "question": "Câu Hỏi 4: Đâu là cách một tiến trình sử dụng các cơ chế tự sinh sôi để giảm hiệu năng hệ thống?",
            "type": "multiple-choice",
            "options": [
                "a. Đe dọa",
                "b. Vi rút",
                "c. Trojan",
                "d. Sâu"
            ],
            "correctAnswer": "d. Sâu"
        },
        {
            "question": "Câu Hỏi 5: Một hệ thống sử dụng phân bổ đĩa dạng danh sách liên kết với kích thước khối là 2KB; kích thước con trỏ 4 byte. Giả sử một tệp có kích thước 15,5 MB. Tính phần offset trong khối chứa dữ liệu ở vị trí tệp 15,25KB?",
            "type": "fill-in-the-blank",
            "correctAnswer": "7"
        },
        {
            "question": "Câu Hỏi 6: Đối với một miền, _______ là một danh sách các đối tượng cùng với các quyền cho phép các đối tượng đó.",
            "type": "multiple-choice",
            "options": [
                "a. Danh mục khả năng",
                "b. Danh mục khả năng và danh sách truy cập",
                "c. Danh sách truy cập",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "c. Danh sách truy cập"
        },
        {
            "question": "Câu Hỏi 7: Giả sử một hệ thống sử dụng phân bổ đĩa dạng danh sách liên kết. Đâu là lý do tại sao chúng ta không thể có quyền truy cập ngẫu nhiên?",
            "type": "multiple-choice",
            "options": [
                "a. Vì các khối dữ liệu của một tệp không liền kề nhau",
                "b. Vì thông tin về khối dữ liệu của tệp bị ẩn",
                "c. Vì không thể biết vị trí của khối thứ n từ khối thứ nhất",
                "d. Vì lý do bảo mật"
            ],
            "correctAnswer": "c. Vì không thể biết vị trí của khối thứ n từ khối thứ nhất"
        },
        {
            "question": "Câu Hỏi 8: Mục tiêu TỐT NHẤT của mirroring trong RAID (Redundant Array of Inexpensive Disks) là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng",
                "b. Để tăng tốc độ vào ra (I/O speed)",
                "c. Để tăng dung lượng đĩa",
                "d. Để tăng kích thước tệp"
            ],
            "correctAnswer": "a. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng"
        },
        {
            "question": "Câu Hỏi 9: VFS (hệ thống tập tin ảo) kích hoạt một số hàm của hệ thống tập tin để xử lý các yêu cầu dựa trên _______ .",
            "type": "multiple-choice",
            "options": [
                "a. nhãn thời gian",
                "b. kích thước",
                "c. lệnh",
                "d. kiểu hệ thống tập tin"
            ],
            "correctAnswer": "d. kiểu hệ thống tập tin"
        },
        {
            "question": "Câu Hỏi 10: Để bảo vệ hệ thống, một tiến trình nên được truy cập__________",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các nguồn tài nguyên",
                "b. Một số ít tài nguyên nhưng việc cấp quyền là không cần thiết",
                "c. Tất cả các phương án trên",
                "d. Chỉ những nguồn tài nguyên mà nó được cấp quyền"
            ],
            "correctAnswer": "d. Chỉ những nguồn tài nguyên mà nó được cấp quyền"
        },
        {
            "question": "Câu Hỏi 11: RAID cấp độ ___________ sử dụng chế độ phân dải dữ liệu cấp độ bit và bit chẵn lẻ cho mỗi byte.",
            "type": "multiple-choice",
            "options": [
                "a. 2",
                "b. 5",
                "c. 4",
                "d. 3"
            ],
            "correctAnswer": "a. 2"
        },
        {
            "question": "Câu Hỏi 12: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba. Tính kích thước tệp tối đa (theo KB) khi con trỏ gián tiếp đơn được sử dụng?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4144"
        },
        {
            "question": "Câu Hỏi 13: Mục tiêu TỐT NHẤT của stripping trong RAID (Redundant Array of Inexpensive Disks) là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng",
                "b. Để tăng tốc độ vào ra (I/O speed)",
                "c. Để tăng kích thước tệp",
                "d. Để tăng dung lượng đĩa"
            ],
            "correctAnswer": "b. Để tăng tốc độ vào ra (I/O speed)"
        },
        {
            "question": "Câu Hỏi 14: Đoạn mã sử dụng sai mục đích được gọi là ____________",
            "type": "multiple-choice",
            "options": [
                "a. Trojan",
                "b. Trộm nội bộ",
                "c. Mã sửa đổi ngăn xếp",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "a. Trojan"
        },
        {
            "question": "Câu Hỏi 15: Nếu hệ thống bị sự cố trước khi các thay đổi của một giao dịch được lưu vào log thì chúng sẽ được ________________",
            "type": "multiple-choice",
            "options": [
                "a. lưu",
                "b. huỷ bỏ",
                "c. lưu và thực hiện lại giao dịch",
                "d. chuyển vào bộ nhớ trong"
            ],
            "correctAnswer": "b. huỷ bỏ"
        },
        {
            "question": "Câu Hỏi 16: Trong mã hóa bất đối xứng",
            "type": "multiple-choice",
            "options": [
                "a. Khoá mã hóa và khoá giải mã khác nhau",
                "b. Các phương án trên đều sai",
                "c. Khoá mã hóa và khoá giải mã giống nhau",
                "d. Không cần khóa để mã hóa và giải mã"
            ],
            "correctAnswer": "a. Khoá mã hóa và khoá giải mã khác nhau"
        },
        {
            "question": "Câu Hỏi 17: Một ổ cứng có các thông số sau: Tốc độ trục quay 700 RPM, mỗi track chứa 12 sector, mỗi sector có dung lượng 1024 byte. Tốc độ truyền dữ liệu là:",
            "type": "multiple-choice",
            "options": [
                "a. 800 Kbps",
                "b. 700 Kbps",
                "c. 1120 Kbps",
                "d. 1024 Kbps"
            ],
            "correctAnswer": "c. 1120 Kbps"
        },
        {
            "question": "Câu Hỏi 18: Đâu là phát biểu KHÔNG ĐÚNG về đĩa cứng?",
            "type": "multiple-choice",
            "options": [
                "a. Thời gian tìm kiếm (Seek time) là thời gian để di chuyển đầu đọc (head) đến trụ (cylinder) mong muốn",
                "b. Tốc độ truyền (Transfer rate) là tốc độ dữ liệu giữa ổ đĩa và máy tính",
                "c. Tốc độ truyền (Transfer rate) là yếu tố quan trọng nhất đối với các thuật toán lập lịch cho ổ đĩa",
                "d. Độ trễ chuyển động quay của trục ( Rotation latency) là thời gian chờ đợi để khu vực (sector) mong muốn đến đầu đọc (head)"
            ],
            "correctAnswer": "c. Tốc độ truyền (Transfer rate) là yếu tố quan trọng nhất đối với các thuật toán lập lịch cho ổ đĩa"
        },
        {
            "question": "Câu Hỏi 19: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba. Tính kích thước tệp tối đa (theo KB) nếu con trỏ gián tiếp kép được sử dụng?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4198448"
        },
        {
            "question": "Câu Hỏi 20: Trong cấp phát chỉ mục, ______________________",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên đều sai",
                "b. Tất cả các con trỏ đến các khối nằm rải rác được đặt trong một khu vực",
                "c. Mỗi tập tin được lưu trên một tập các khối liên tục trên ổ đĩa",
                "d. Mỗi tập tin là một danh sách liên kết của các khối trên ổ đĩa"
            ],
            "correctAnswer": "b. Tất cả các con trỏ đến các khối nằm rải rác được đặt trong một khu vực"
        },
        {
            "question": "Câu Hỏi 21: FAT có cấu trúc giống như ______________________",
            "type": "multiple-choice",
            "options": [
                "a. Ngăn xếp",
                "b. Bảng băm",
                "c. Bảng chỉ mục",
                "d. Danh sách liên kết"
            ],
            "correctAnswer": "d. Danh sách liên kết"
        },
        {
            "question": "Câu Hỏi 22: ______________________ không xảy ra với cấp phát liên kết.",
            "type": "multiple-choice",
            "options": [
                "a. Hiện tượng phân mảnh trong",
                "b. Hiện tượng phân mảnh ngoài",
                "c. Cả ba phương án trên",
                "d. Nạn đói"
            ],
            "correctAnswer": "b. Hiện tượng phân mảnh ngoài"
        },
        {
            "question": "Câu Hỏi 23: Tập hợp các thao tác để thực thi một nhiệm vụ gọi là ________________",
            "type": "multiple-choice",
            "options": [
                "a. một tiến trình",
                "b. mã chương trình",
                "c. một giao dịch",
                "d. một chương trình"
            ],
            "correctAnswer": "c. một giao dịch"
        },
        {
            "question": "Câu Hỏi 24: Trong RAID cấp độ 4, để đọc mỗi khối dữ liệu cần truy cập ___________",
            "type": "multiple-choice",
            "options": [
                "a. đồng thời tất cả các ổ đĩa",
                "b. lần lượt từng ổ đĩa một",
                "c. đồng thời một số ổ đĩa",
                "d. chỉ một ổ đĩa"
            ],
            "correctAnswer": "d. chỉ một ổ đĩa"
        },
        {
            "question": "Câu Hỏi 25: Cửa ập trong một chương trình là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. Một loại chương trình chống virus",
                "c. Lỗ hổng bảo mật trong mạng",
                "d. Một lỗ hổng bảo mật được cho vào trong hệ thống lúc lập trình nhằm mục đích sử dụng sau này"
            ],
            "correctAnswer": "d. Một lỗ hổng bảo mật được cho vào trong hệ thống lúc lập trình nhằm mục đích sử dụng sau này"
        },
        {
            "question": "Câu Hỏi 26: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch SCAN là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196 --> 12",
                "b. 50 --> 12 --> 0 -->199 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "c. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "d. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196"
            ],
            "correctAnswer": "d. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196"
        },
        {
            "question": "Câu Hỏi 27: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53 và hướng về trụ 0; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa SCAN được sử dụng, hãy hiển thị thứ tự của các yêu cầu được phục vụ? (Các yêu cầu được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy).",
            "type": "fill-in-the-blank",
            "correctAnswer": "37,14,65,67,98,122,124,183"
        },
        {
            "question": "Câu Hỏi 28: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch C-LOOK là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "b. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 -->196",
                "c. 50 --> 55 --> 69--> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196 -->12",
                "d. 50 --> 12 --> 0 --> 199 --> 196 --> 181 --> 161 --> 156 --> 149 -->103 --> 80 --> 69 --> 55"
            ],
            "correctAnswer": "c. 50 --> 55 --> 69--> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196 -->12"
        },
        {
            "question": "Câu Hỏi 29: Nếu một ổ đĩa gặp sự cố trong RAID cấp độ ___________ thì phục hồi lại dữ liệu bị mất là đơn giản nhất so với RAID ở các cấp độ khác.",
            "type": "multiple-choice",
            "options": [
                "a. 1",
                "b. 2",
                "c. 3",
                "d. 4"
            ],
            "correctAnswer": "a. 1"
        },
        {
            "question": "Câu Hỏi 30: Một số thông tin của thư mục được lưu trên bộ nhớ trong hoặc cache để________________",
            "type": "multiple-choice",
            "options": [
                "a. tăng tốc độ truy cập",
                "b. tăng không gian trống của bộ nhớ ngoài",
                "c. làm đầy bộ cache",
                "d. giảm không gian trống của bộ nhớ ngoài"
            ],
            "correctAnswer": "a. tăng tốc độ truy cập"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Đâu không phải là phương pháp cấp phát không gian trên ổ đĩa:",
            "type": "multiple-choice",
            "options": [
                "a. liên tục",
                "b. liên kết",
                "c. chỉ mục",
                "d. băm"
            ],
            "correctAnswer": "d. băm"
        },
        {
            "question": "Câu Hỏi 2: Đoạn mã trong một phần mềm nào đó sẽ gây ra một số nguy hiểm trong một số điều kiện nhất định được gọi là ____________",
            "type": "multiple-choice",
            "options": [
                "a. Mã sửa đổi ngăn xếp",
                "b. Các phương án trên đều sai",
                "c. Cửa sập",
                "d. Bom logic"
            ],
            "correctAnswer": "d. Bom logic"
        },
        {
            "question": "Câu Hỏi 3: Khi tiến trình yêu cầu truy cập tập tin thì nó cần _______________",
            "type": "multiple-choice",
            "options": [
                "a. Gửi yêu cầu đến khối điều khiển tập tin",
                "b. Chạy một chương trình riêng biệt khác",
                "c. Sử dụng các ngắt đặc biệt",
                "d. Sử dụng hàm hệ thống open() và close()"
            ],
            "correctAnswer": "d. Sử dụng hàm hệ thống open() và close()"
        },
        {
            "question": "Câu Hỏi 4: Một số thông tin của thư mục được lưu trên bộ nhớ trong hoặc cache để________________",
            "type": "multiple-choice",
            "options": [
                "a. tăng không gian trống của bộ nhớ ngoài",
                "b. tăng tốc độ truy cập",
                "c. giảm không gian trống của bộ nhớ ngoài",
                "d. làm đầy bộ cache"
            ],
            "correctAnswer": "b. tăng tốc độ truy cập"
        },
        {
            "question": "Câu Hỏi 5: Phát sinh do con trỏ trong cấp phát chỉ mục thường ______________________ phát sinh do con trỏ trong cấp phát liên kết.",
            "type": "multiple-choice",
            "options": [
                "a. nhỏ hơn",
                "b. tương đương",
                "c. lớn hơn",
                "d. lúc lớn hơn, lúc nhỏ hơn"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 6: Đâu là phát biểu KHÔNG ĐÚNG về đĩa cứng?",
            "type": "multiple-choice",
            "options": [
                "a. Độ trễ chuyển động quay của trục ( Rotation latency) là thời gian chờ đợi để khu vực (sector) mong muốn đến đầu đọc (head)",
                "b. Thời gian tìm kiếm (Seek time) là thời gian để di chuyển đầu đọc (head) đến trụ (cylinder) mong muốn",
                "c. Tốc độ truyền (Transfer rate) là yếu tố quan trọng nhất đối với các thuật toán lập lịch cho ổ đĩa",
                "d. Tốc độ truyền (Transfer rate) là tốc độ dữ liệu giữa ổ đĩa và máy tính"
            ],
            "correctAnswer": "c. Tốc độ truyền (Transfer rate) là yếu tố quan trọng nhất đối với các thuật toán lập lịch cho ổ đĩa"
        },
        {
            "question": "Câu Hỏi 7: Miền bảo vệ của một tiến trình bao gồm",
            "type": "multiple-choice",
            "options": [
                "a. Tên đối tượng",
                "b. Tập các quyền",
                "c. Tên đối tượng và tập các quyền",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "c. Tên đối tượng và tập các quyền"
        },
        {
            "question": "Câu Hỏi 8: Đâu là phát biểu KHÔNG ĐÚNG về phân bổ đĩa liền kề?",
            "type": "multiple-choice",
            "options": [
                "a. Nó không hỗ trợ truy cập ngẫu nhiên",
                "b. Lãng phí không gian đĩa",
                "c. Tập tin không thể phát triển",
                "d. Nó đơn giản"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 9: Đâu không phải là một cuộc tấn công, nhưng nó tìm kiếm các lỗ hổng để tấn công?",
            "type": "multiple-choice",
            "options": [
                "a. Quét cổng",
                "b. Tái chế",
                "c. Từ chối dịch vụ",
                "d. Vi phạm truy cập bộ nhớ"
            ],
            "correctAnswer": "a. Quét cổng"
        },
        {
            "question": "Câu Hỏi 10: Để bảo vệ hệ thống, một tiến trình nên được truy cập__________",
            "type": "multiple-choice",
            "options": [
                "a. Một số ít tài nguyên nhưng việc cấp quyền là không cần thiết",
                "b. Tất cả các phương án trên",
                "c. Chỉ những nguồn tài nguyên mà nó được cấp quyền",
                "d. Tất cả các nguồn tài nguyên"
            ],
            "correctAnswer": "c. Chỉ những nguồn tài nguyên mà nó được cấp quyền"
        },
        {
            "question": "Câu Hỏi 11: Bảng ma trận truy cập toàn cục chứa________",
            "type": "multiple-choice",
            "options": [
                "a. Tập các quyền",
                "b. Miền",
                "c. Tất cả các phương án trên",
                "d. Đối tượng"
            ],
            "correctAnswer": "c. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 12: Giả sử một hệ thống sử dụng phân bổ theo chỉ mục (1 cấp) với kích thước khối 4KB; kích thước con trỏ 4 byte. Một tệp có kích thước 3MB. Đâu là vị trí chính xác của vị trí tệp tin 35KB?",
            "type": "multiple-choice",
            "options": [
                "a. (block index, offset)=(8, 3072)",
                "b. (block index, offset)=(9, 3071)",
                "c. (block index, offset)=(9, 3072)",
                "d. (block index, offset)=(8, 3071)"
            ],
            "correctAnswer": "a. (block index, offset)=(8, 3072)"
        },
        {
            "question": "Câu Hỏi 13: Nhược điểm của thư mục có cấu trúc danh sách tuyến tính là_______________",
            "type": "multiple-choice",
            "options": [
                "a. Tìm kiếm tập tin một cách tuần tự",
                "b. Kích thước của danh sách tuyến tính trong bộ nhớ",
                "c. Không tin cậy",
                "d. Cả ba phương án trên"
            ],
            "correctAnswer": "a. Tìm kiếm tập tin một cách tuần tự"
        },
        {
            "question": "Câu Hỏi 14: Phân vùng đĩa là 500GB (1GB = 1024MB, 1MB = 1024KB, …); kích thước khối là 1KB. Giả sử một hệ thống sử dụng phân bổ đĩa dạng danh sách liên kết. Kiểu dữ liệu của con trỏ là gì?",
            "type": "multiple-choice",
            "options": [
                "a. int",
                "b. float",
                "c. double",
                "d. char"
            ],
            "correctAnswer": "a. int"
        },
        {
            "question": "Câu Hỏi 15: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch C-LOOK là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 55 --> 69--> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196 -->12",
                "b. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "c. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 -->196",
                "d. 50 --> 12 --> 0 --> 199 --> 196 --> 181 --> 161 --> 156 --> 149 -->103 --> 80 --> 69 --> 55"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 16: Trên ổ đĩa các khối 2,3,4,5,8,9,10,11,12,13 còn trống, các khối còn lại đã được sử dụng, bit map dùng để quản lý không gian trống của khối 0 đến 15 là _____________ ",
            "type": "multiple-choice",
            "options": [
                "a. 1000011000000111",
                "b. 1100001100001110",
                "c. 0111100111110000",
                "d. 0011110011111100"
            ],
            "correctAnswer": "d. 0011110011111100"
        },
        {
            "question": "Câu Hỏi 17: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba. Tính kích thước tệp tối đa (theo KB) nếu con trỏ gián tiếp kép được sử dụng?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4198448"
        },
        {
            "question": "Câu Hỏi 18: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba. Tính kích thước tệp tối đa (theo KB) khi chỉ sử dụng con trỏ trực tiếp?",
            "type": "fill-in-the-blank",
            "correctAnswer": "48"
        },
        {
            "question": "Câu Hỏi 19: Trong cấp phát liên kết, thư mục chứa con trỏ trỏ đến______________________",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các khối của tập tin",
                "b. Khối đầu tiên của tập tin",
                "c. Khối cuối cùng của tập tin",
                "d. Khối đầu tiên và cuối cùng của tập tin"
            ],
            "correctAnswer": "b. Khối đầu tiên của tập tin"
        },
        {
            "question": "Câu Hỏi 20: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch SSTF là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161--> 181--> 196 --> 12",
                "b. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196",
                "c. 50 --> 12 --> 196 --> 181 --> 161--> 156 --> 149 --> 103-->80 --> 69 --> 55",
                "d. 50 --> 12 --> 0 --> 199 --> 196 -->181 --> 161 -->156 --> 149 --> 103 --> 80 --> 69 --> 55"
            ],
            "correctAnswer": "a. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161--> 181--> 196 --> 12"
        },
        {
            "question": "Câu Hỏi 21: _______ là một cách tiếp cận để hạn chế quyền truy cập hệ thống đối với người dùng được uỷ quyền.",
            "type": "multiple-choice",
            "options": [
                "a. Kiểm soát truy cập dựa trên nhiệm vụ",
                "b. Kiểm soát truy cập dựa trên vai trò",
                "c. Các phương án trên đều sai",
                "d. Kiểm soát truy cập dựa trên tiến trình"
            ],
            "correctAnswer": "b. Kiểm soát truy cập dựa trên vai trò"
        },
        {
            "question": "Câu Hỏi 22: Với kiểu truy cập tập tin bất kỳ, cấp phát liên tục yêu cầu ________________ truy cập để đọc khối dữ liệu trên ổ đĩa.",
            "type": "multiple-choice",
            "options": [
                "a. đúng một lần",
                "b. cả ba phương án trên đều sai",
                "c. ít nhất hai lần",
                "d. đúng hai lần"
            ],
            "correctAnswer": "a. đúng một lần"
        },
        {
            "question": "Câu Hỏi 23: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa FCFS được sử dụng, tính tổng số trụ mà đầu phải di chuyển để phục vụ các yêu cầu trên?",
            "type": "fill-in-the-blank",
            "correctAnswer": "640"
        },
        {
            "question": "Câu Hỏi 24: RAID cấp độ ___________ phân bố bit chẵn lẻ và dữ liệu trên tất cả N+1 ổ đĩa thay vì lưu dữ liệu trên N ổ đĩa và bit chẵn lẻ trên một ổ đĩa riêng.",
            "type": "multiple-choice",
            "options": [
                "a. 5",
                "b. 3",
                "c. 2",
                "d. 4"
            ],
            "correctAnswer": "a. 5"
        },
        {
            "question": "Câu Hỏi 25: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch SCAN là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "b. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196",
                "c. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196 --> 12",
                "d. 50 --> 12 --> 0 -->199 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55"
            ],
            "correctAnswer": "b. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196"
        },
        {
            "question": "Câu Hỏi 26: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa SSTF được sử dụng, tính tổng số trụ mà đầu phải di chuyển để phục vụ các yêu cầu trên?",
            "type": "fill-in-the-blank",
            "correctAnswer": "236"
        },
        {
            "question": "Câu Hỏi 27: Cửa ập trong một chương trình là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Một loại chương trình chống virus",
                "b. Lỗ hổng bảo mật trong mạng",
                "c. Một lỗ hổng bảo mật được cho vào trong hệ thống lúc lập trình nhằm mục đích sử dụng sau này",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "c. Một lỗ hổng bảo mật được cho vào trong hệ thống lúc lập trình nhằm mục đích sử dụng sau này"
        },
        {
            "question": "Câu Hỏi 28: Giả sử một hệ thống sử dụng phân bổ đĩa dạng danh sách liên kết. Đâu là lý do tại sao chúng ta không thể có quyền truy cập ngẫu nhiên?",
            "type": "multiple-choice",
            "options": [
                "a. Vì lý do bảo mật",
                "b. Vì không thể biết vị trí của khối thứ n từ khối thứ nhất",
                "c. Vì các khối dữ liệu của một tệp không liền kề nhau",
                "d. Vì thông tin về khối dữ liệu của tệp bị ẩn"
            ],
            "correctAnswer": "b. Vì không thể biết vị trí của khối thứ n từ khối thứ nhất"
        },
        {
            "question": "Câu Hỏi 29: Đâu là phát biểu KHÔNG ĐÚNG về Khối điều khiển tệp (FCB - File Control Block)?",
            "type": "multiple-choice",
            "options": [
                "a. Đây là cấu trúc dữ liệu lưu trữ dữ liệu của tệp",
                "b. inode trong Linux là một ví dụ về FCB",
                "c. FCB của tệp thường được lưu trữ trên đĩa (hoặc thiết bị lưu trữ)",
                "d. Đây là cấu trúc dữ liệu lưu trữ thông tin cần thiết để thao tác với tệp"
            ],
            "correctAnswer": "a. Đây là cấu trúc dữ liệu lưu trữ dữ liệu của tệp"
        },
        {
            "question": "Câu Hỏi 30: Một hệ thống sử dụng phân bổ đĩa dạng danh sách liên kết với kích thước khối là 2KB; kích thước con trỏ 4 byte. Giả sử một tệp có kích thước 15,5 MB. Tính chỉ số của khối (bắt đầu từ 0) của vị trí tại vị trí của tệp là 15,25KB?",
            "type": "fill-in-the-blank",
            "correctAnswer": "7"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Cho chuỗi tham chiếu: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Giả sử hệ thống sử dụng thuật toán thay thế trang Least Recent Used(LRU) được dùng với 4 khung. Hãy tính tổng số lỗi trang?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 2: Giả sử một hệ thống sử dụng phân trang với bảng trang 2 cấp mà không cần Bộ đệm chuyển đổi (TLB - Translation Look-aside Buffer). Đâu là phát biểu KHÔNG ĐÚNG?",
            "type": "multiple-choice",
            "options": [
                "a. Mất 3 lượt truy cập bộ nhớ cho một tham chiếu",
                "b. Thanh ghi địa chỉ được phân chia như sau: p1, p2, d, trong đó p1 dài m bit, p2 dài n bit, d dài k bit",
                "c. Một tham chiếu có dạng (p, d)",
                "d. Địa chỉ vật lý của một tham chiếu là f1 * 2m + f2 * 2n + d, trong đó f1 và f2 tương ứng là các giá trị từ các bảng trang bên ngoài và bên trong"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 3: Đâu là phát biểu KHÔNG ĐÚNG về phân đoạn (trong phân bổ bộ nhớ)?",
            "type": "multiple-choice",
            "options": [
                "a. Có sự phân mảnh bên trong",
                "b. Đó là phân bổ bộ nhớ không liền kề",
                "c. Đây là trường hợp đặc biệt của Đa chương trình với số nhiệm vụ thay đổi (MVT - Multiprogramming with a Variable number of Tasks ), trong đó mỗi tiến trình (trong MVT) tương ứng với một phân đoạn (trong phân đoạn)",
                "d. Một bit valid/invalid là cần thiết để bảo vệ bộ nhớ"
            ],
            "correctAnswer": "c. Đây là trường hợp đặc biệt của Đa chương trình với số nhiệm vụ thay đổi (MVT - Multiprogramming with a Variable number of Tasks ), trong đó mỗi tiến trình (trong MVT) tương ứng với một phân đoạn (trong phân đoạn)"
        },
        {
            "question": "Câu Hỏi 4: Cho chuỗi tham chiếu: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1. Giả sử hệ thống sử dụng thuật toán thay thế trang Least Recent Used(LRU) với 3 khung. Đâu là THỨ TỰ của các trang được chọn là nạn nhân sẽ bị tráo đổi?",
            "type": "multiple-choice",
            "options": [
                "a. 7 1 2 3 1 4 1 3 2",
                "b. 7 2 1 3 0 4 2 3 2",
                "c. 7 1 2 3 0 4 0 3 2",
                "d. 7 1 2 3 0 4 1 2 3"
            ],
            "correctAnswer": "c. 7 1 2 3 0 4 0 3 2"
        },
        {
            "question": "Câu Hỏi 5: Thrashing làm _______ mức sử dụng CPU:",
            "type": "multiple-choice",
            "options": [
                "a. tăng",
                "b. lúc tăng, lúc giảm",
                "c. giảm",
                "d. giữ nguyên"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 6: Một hệ thống KHÔNG sử dụng Bộ đệm chuyển đổi (TLB - Translation Look-aside Buffer) để dịch địa chỉ trong phân trang (bảng trang cấp 1). Giả sử thời gian truy cập của bộ nhớ là 200ms. Thời gian truy cập hiệu quả (EAT - Effective Access Time) của hệ thống là gì?",
            "type": "multiple-choice",
            "options": [
                "a. 180 ms",
                "b. 200 ms",
                "c. 160 ms",
                "d. 400 ms"
            ],
            "correctAnswer": "d. 400 ms"
        },
        {
            "question": "Câu Hỏi 7: Một tiến trình sửu dụng 5 trang 1,2,3,4,5 theo trình tự: 1,2,4,5,2,1,2,4. Nếu sử dụng thuật toán thay thế trang OPT (tối ưu), số lỗi trang xảy ra khi dùng 3 frame là:",
            "type": "multiple-choice",
            "options": [
                "a. 5",
                "b. 8",
                "c. 7",
                "d. 6"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 8: Tính thời gian truy cập bộ nhớ hiệu quả cho một hệ thống sử dụng kỹ thuật phân trang có tỉ suất trúng TLB là 60% khi thời gian truy cập cache là 10 ns, thời gian truy cập bộ nhớ chính là 100 ns.",
            "type": "multiple-choice",
            "options": [
                "a. 66 ns",
                "b. 120 ns",
                "c. 150 ns",
                "d. 84 ns"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 9: Giả sử một hệ thống sử dụng thuật toán thay thế trang FIFO với 3 khung. Cho chuỗi tham chiếu: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Hãy hiển thị các trang (theo thứ tự xuất hiện) gây ra lỗi trang. (Các trang được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy. VD: 1,2,4,3)",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 10: Đôi khi việc quản lý vùng trống cần dung lượng bộ nhớ:",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các phương án trên",
                "b. lớn hơn so với bộ nhớ",
                "c. lớn hơn so với kích thước vùng trống",
                "d. rất nhỏ"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 11: Nhược điểm khi di chuyển tất cả tiến trình về một phía của bộ nhớ và tất cả các vùng trống về phía khác nhằm tạo một vùng trống lớn hơn trong bộ nhớ:",
            "type": "multiple-choice",
            "options": [
                "a. sử dụng nhiều dung lượng bộ nhớ",
                "b. chi phí",
                "c. sử dụng nhiều CPU",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 12: Thuật toán thay thế trang nào lựa chọn trang không được sử dụng lâu nhất ?",
            "type": "multiple-choice",
            "options": [
                "a. thuật toán thay thế trang dựa vào bộ đếm",
                "b. LRU",
                "c. FIFO",
                "d. thuật toán sử dụng reference bit"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 13: Đâu là phát biểu KHÔNG ĐÚNG về lỗi trang?",
            "type": "multiple-choice",
            "options": [
                "a. nó xảy ra trong phân trang theo yêu cầu",
                "b. nó xảy ra khi có một tham chiếu đến một trang không có trong bộ nhớ",
                "c. khi xảy ra lỗi trang, tiến trình tương ứng sẽ bị chấm dứt",
                "d. một trình xử lý lỗi trang được gọi bất cứ khi nào nó xảy ra"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 14: Ánh xạ bộ nhớ ảo 2GB lên bộ nhớ vật lý có 256 frame, mỗi frame có kích thước 4 KB. Kích thước mỗi đơn vị bộ nhớ là 1 byte. Số bit cần dùng để đánh số hiệu trang là ?",
            "type": "multiple-choice",
            "options": [
                "a. 8 bit",
                "b. 19 bit",
                "c. 18 bit",
                "d. 20 bit"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 15: Giả sử một hệ thống sử dụng thuật toán thay thế trang FIFO với 3 khung. Cho chuỗi tham chiếu: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Hãy hiển thị các trang (theo thứ tự xuất hiện) được chọn là nạn nhân bị tráo đổi?(Các trang được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy. VD: 1,2,4,3)",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 16: Khi valid-invalid bit có giá trị true có nghĩa là trang:",
            "type": "multiple-choice",
            "options": [
                "a. ở trong TLB",
                "b. có dữ liệu",
                "c. ở trong bộ nhớ trong",
                "d. ở trong ổ đĩa"
            ],
            "correctAnswer": "c. ở trong bộ nhớ trong"
        },
        {
            "question": "Câu Hỏi 17: Kỹ thuật phân trang (Paging) tăng thời gian ______.",
            "type": "multiple-choice",
            "options": [
                "a. chuyển đổi trạng thái",
                "b. Tất cả các phương án trên",
                "c. chờ đợi",
                "d. thực thi"
            ],
            "correctAnswer": "a. chuyển đổi trạng thái"
        },
        {
            "question": "Câu Hỏi 18: Đâu là phát biểu KHÔNG ĐÚNG về phân trang (bảng trang cấp 1)?",
            "type": "multiple-choice",
            "options": [
                "a. Hệ thống tìm n khung liên tiếp sao cho tích n * frame_size lớn hơn hoặc bằng kích thước tiến trình",
                "b. Bộ nhớ được chia thành các khung bằng nhau",
                "c. Hệ thống tìm n khung sao cho tích n * frame_size lớn hơn hoặc bằng kích thước tiến trình",
                "d. Có sự phân mảnh bên trong"
            ],
            "correctAnswer": "a. Hệ thống tìm n khung liên tiếp sao cho tích n * frame_size lớn hơn hoặc bằng kích thước tiến trình"
        },
        {
            "question": "Câu Hỏi 19: Khi cấp phát các vùng trống của bộ nhớ chính, _____________________",
            "type": "multiple-choice",
            "options": [
                "a. thuật toán best-fit luôn nhanh hơn thuật toán first-fit",
                "b. mức sử dụng bộ nhớ của thuật toán best-fit luôn tốt hơn thuật toán first-fit",
                "c. cả ba phương án trên đều sai",
                "d. hiệu quả của thuật toán first-fit hoàn toàn phụ thuộc vào chuỗi yêu cầu dung lượng bộ nhớ của các tiến trình"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 20: Các thuật toán thay thế phân đoạn phức tạp hơn so với các thuật toán thay thế trang vì:",
            "type": "multiple-choice",
            "options": [
                "a. Sử dụng phân trang tốt hơn so sử dụng phân đoạn",
                "b. Phân đoạn tốt hơn so với phân trang",
                "c. Các phân đoạn có kích thước cố định",
                "d. Các phân đoạn có kích thước thay đổi"
            ],
            "correctAnswer": "d. Các phân đoạn có kích thước thay đổi"
        },
        {
            "question": "Câu Hỏi 21: Cho chuỗi tham chiếu: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1. Thuật toán tối ưu (thay thế trang)) được sử dụng với 3 khung. Tính tổng số lỗi trang.",
            "type": "fill-in-the-blank",
            "correctAnswer": "9"
        },
        {
            "question": "Câu Hỏi 22: Cho chuỗi tham chiếu: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Giả sử hệ thống sử dụng thuật toán thay thế trang Least Recent Used(LRU) với 3 khung. Hãy tính tổng số lỗi trang?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 23: Đâu là phát biểu KHÔNG ĐÚNG về phân trang (bảng trang cấp 1)?",
            "type": "multiple-choice",
            "options": [
                "a. Đây là một phương pháp cấp phát bộ nhớ liền kề",
                "b. Không gian ảo cũng được chia thành các trang",
                "c. Các trang có kích thước bằng nhau",
                "d. Kích thước trang bằng kích thước khung"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 24: Một tiến trình sử dụng 5 trang A, B, C, D, E theo trình tự: A, B, C, D, A, B, E, A, B, C, D, E. Nếu sử dụng thuật toán thay thế trang LRU, số lỗi trang xảy ra khi dùng 3 frame là:",
            "type": "multiple-choice",
            "options": [
                "a. 10",
                "b. 8",
                "c. 7",
                "d. 9"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 25: Thrashing là ____________",
            "type": "multiple-choice",
            "options": [
                "a. do thuật toán phân trang không tốt",
                "b. có thể tránh được bằng cách sử dụng swapping",
                "c. luôn xảy ra trên các máy tính lớn",
                "d. hệ quả tự nhiên của hệ thống sử dụng bộ nhớ ảo"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 26: Để khắc phục hiên tượng phân mảnh ngoài, _______________ cần được thực thi định kỳ.",
            "type": "multiple-choice",
            "options": [
                "a. Kiểm tra dữ liệu",
                "b. Thay thế bộ nhớ",
                "c. Định dạng lại (formatting)",
                "d. Kỹ thuật nén (compaction)"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 27: Khi lỗi trang xảy ra, trạng thái của tiến trình:",
            "type": "multiple-choice",
            "options": [
                "a. được lưu",
                "b. không hợp lệ",
                "c. bị gián đoạn",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 28: Giả sử một hệ thống có RAM 4GB được phân trang kích thước khung là 1KB. Loại dữ liệu của cột khung trong bảng trang là gì?",
            "type": "multiple-choice",
            "options": [
                "a. long (64 bit)",
                "b. float (32 bit)",
                "c. double (64 bit)",
                "d. int (32 bit)"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 29: Bộ nhớ ảo cho phép:",
            "type": "multiple-choice",
            "options": [
                "a. thực thi một tiến trình không có trong bộ nhớ trong",
                "b. thực thi một tiến trình mà có thể không được tải hoàn toàn vào bộ nhớ trong",
                "c. lưu nội dung một tiến trình trên thanh ghi",
                "d. một chương trình có dung lượng lớn hơn bộ nhớ ngoài"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 30: Giả sử một hệ thống sử dụng cấp phát bộ nhớ liền kề với các thông tin sau: địa chỉ cơ sở là 13400; thanh ghi giới hạn là 1200; và một tham chiếu là 246. Tính địa chỉ vật lý của tham chiếu trên?",
            "type": "fill-in-the-blank",
            "correctAnswer": "13646"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Giả sử một hệ thống sử dụng phân trang theo yêu cầu mà không có Bảng chuyển đổi (TLB - Translation Look-aside Table). Thời gian truy cập bộ nhớ là 200 ns; thời gian phục vụ lỗi trang là 8ms; tỷ lệ lỗi trang là 1/1000. Tính Thời gian truy cập hiệu quả (EAT - Effective Access Time) (tính theo ms) của hệ thống?",
            "type": "fill-in-the-blank",
            "options": [],
            "correctAnswer": "8,2"
        },
        {
            "question": "Câu Hỏi 2: Để khắc phục hiên tượng phân mảnh ngoài, _______________ cần được thực thi định kỳ.",
            "type": "multiple-choice",
            "options": [
                "a. Định dạng lại (formatting)",
                "b. Thay thế bộ nhớ",
                "c. Kiểm tra dữ liệu",
                "d. Kỹ thuật nén (compaction)"
            ],
            "correctAnswer": "d. Kỹ thuật nén (compaction)"
        },
        {
            "question": "Câu Hỏi 3: Khi tỷ lệ lỗi trang thấp:",
            "type": "multiple-choice",
            "options": [
                "a. thời gian truy cập hiệu quả tăng",
                "b. thời gian hoàn thành tăng và thời gian truy cập hiệu quả tăng",
                "c. thời gian hoàn thành tăng",
                "d. thời gian truy cập hiệu quả giảm"
            ],
            "correctAnswer": "d. thời gian truy cập hiệu quả giảm"
        },
        {
            "question": "Câu Hỏi 4: Một tiến trình sử dụng 5 trang A, B, C, D, E theo trình tự: A, B, C, D, A, B, E, A, B, C, D, E. Nếu sử dụng thuật toán thay thế trang FIFO, số lỗi trang xảy ra khi tăng từ 3 frame lên 4 frame :",
            "type": "multiple-choice",
            "options": [
                "a. giảm",
                "b. vẫn giữ nguyên",
                "c. tăng",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "c. tăng"
        },
        {
            "question": "Câu Hỏi 5: Đâu là phát biểu KHÔNG ĐÚNG về phân đoạn (trong phân bổ bộ nhớ)?",
            "type": "multiple-choice",
            "options": [
                "a. Đó là phân bổ bộ nhớ không liền kề",
                "b. Đây là trường hợp đặc biệt của Đa chương trình với số nhiệm vụ thay đổi (MVT - Multiprogramming with a Variable number of Tasks ), trong đó mỗi tiến trình (trong MVT) tương ứng với một phân đoạn (trong phân đoạn)",
                "c. Một bit valid/invalid là cần thiết để bảo vệ bộ nhớ",
                "d. Có sự phân mảnh bên trong"
            ],
            "correctAnswer": "d. Có sự phân mảnh bên trong"
        },
        {
            "question": "Câu Hỏi 6: Tính số lượng lỗi trang (page fault) khi trình tự sử dụng các trang là 1, 2, 3, 4, 2, 1, 5, 6, 2, 1, 2, 3, 7, 6, 3, 2, 1, 2, 3, 6. Giả định rằng bộ nhớ chính cấp phát cho tiến trình 4 frame, và thuật toán LRU được sử dụng.",
            "type": "multiple-choice",
            "options": [
                "a. 8",
                "b. 11",
                "c. 14",
                "d. 10"
            ],
            "correctAnswer": "d. 10"
        },
        {
            "question": "Câu Hỏi 7: Hai cách để triển khai thuật toán thay thế trang LRU trong phần cứng là:",
            "type": "multiple-choice",
            "options": [
                "a. Cache và bộ nhớ ảo",
                "b. Bộ đếm và ngăn xếp",
                "c. Luồng và Pipe",
                "d. RAM và Thanh ghi"
            ],
            "correctAnswer": "b. Bộ đếm và ngăn xếp"
        },
        {
            "question": "Câu Hỏi 8: Một hệ thống sử dụng phương pháp cấp phát bộ nhớ theo tỷ lệ. Có 3 tiến trình trong hệ thống là P1, P2 và P3 với kích thước lần lượt là 138KB, 96KB và 164KB. Giả sử kích thước bộ nhớ là 180KB và kích thước khung là 2KB, hãy tính số lượng khung được phân bổ cho các tiến trình P1, P2, P3? (Số khung của các tiến trình P1, P2, P3 được viết liền nhau, ngăn cách nhau bởi dấu phẩy. VD: 1,2,3)",
            "type": "fill-in-the-blank",
            "options": [],
            "correctAnswer": "31,22,37"
        },
        {
            "question": "Câu Hỏi 9: Đôi khi việc quản lý vùng trống cần dung lượng bộ nhớ:",
            "type": "multiple-choice",
            "options": [
                "a. rất nhỏ",
                "b. lớn hơn so với bộ nhớ",
                "c. Tất cả các phương án trên",
                "d. lớn hơn so với kích thước vùng trống"
            ],
            "correctAnswer": "d. lớn hơn so với kích thước vùng trống"
        },
        {
            "question": "Câu Hỏi 10: Đâu là phát biểu KHÔNG ĐÚNG về thuật toán phân bổ bộ nhớ cho Đa chương trình với số nhiệm vụ thay đổi (MVT - Multiprogramming with a Variable number of Tasks )?",
            "type": "multiple-choice",
            "options": [
                "a. Có sự phân mảnh bộ nhớ",
                "b. Bộ nhớ được chia trước thành các phân vùng",
                "c. Một tiến trình nằm trong vùng nhớ liền kề",
                "d. Bộ nhớ không được phân chia trước thành các phân vùng"
            ],
            "correctAnswer": "b. Bộ nhớ được chia trước thành các phân vùng"
        },
        {
            "question": "Câu Hỏi 11: Giả sử một hệ thống sử dụng phân trang (bảng trang cấp 1) và thời gian truy cập của bộ nhớ là 200 ms. Tính thời gian để truy cập bộ nhớ (theo ms) từ một tham chiếu (p, d)?",
            "type": "fill-in-the-blank",
            "options": [],
            "correctAnswer": "400"
        },
        {
            "question": "Câu Hỏi 12: Giả sử một hệ thống sử dụng thuật toán thay thế trang FIFO với 3 khung. Cho chuỗi tham chiếu: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Hãy hiển thị các trang (theo thứ tự xuất hiện) được chọn là nạn nhân bị tráo đổi?(Các trang được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy. VD: 1,2,4,3)",
            "type": "fill-in-the-blank",
            "options": [],
            "correctAnswer": "1,2,3,4,1,2"
        },
        {
            "question": "Câu Hỏi 13: Tập hợp các thuật toán thay thế trang không bao giờ có hiện tượng bất thường Belady:",
            "type": "multiple-choice",
            "options": [
                "a. Các thuật toán chuỗi",
                "b. Các phương án trên đều sai",
                "c. Các thuật toán hàng đợi",
                "d. Các thuật toán ngăn xếp"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 14: Người dùng _______ tiến trình của họ đang chạy trên một hệ thống phân trang.",
            "type": "multiple-choice",
            "options": [
                "a. không nhận thức được",
                "b. nhận thức được và chủ động điều khiển",
                "c. Các phương án trên đều sai",
                "d. nhận thức được"
            ],
            "correctAnswer": "a. không nhận thức được"
        },
        {
            "question": "Câu Hỏi 15: Ánh xạ bộ nhớ ảo 2GB lên bộ nhớ vật lý có 256 frame, mỗi frame có kích thước 4 KB. Kích thước mỗi đơn vị bộ nhớ là 1 byte. Số bit cần dùng để đánh số hiệu trang là ?",
            "type": "multiple-choice",
            "options": [
                "a. 19 bit",
                "b. 20 bit",
                "c. 8 bit",
                "d. 18 bit"
            ],
            "correctAnswer": "a. 19 bit"
        },
        {
            "question": "Câu Hỏi 16: Mô hình tập hợp các trang đang làm việc thay thế trang được dựa trên",
            "type": "multiple-choice",
            "options": [
                "a. truy cập ngẫu nhiên",
                "b. khu vực toàn cục",
                "c. khu vực địa phương",
                "d. khu vực mô-đun"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 17: Đâu là phát biểu KHÔNG ĐÚNG về phân đoạn (trong phân bổ bộ nhớ)?",
            "type": "multiple-choice",
            "options": [
                "a. Mỗi phân đoạn là một đơn vị logic (chẳng hạn như hàm, thủ tục, …)",
                "b. RAM được chia thành các phân đoạn có kích thước bằng nhau",
                "c. Mỗi phân đoạn được phân bổ một vùng nhớ liền kề",
                "d. Một tiến trình được chia thành các phân đoạn"
            ],
            "correctAnswer": "b. RAM được chia thành các phân đoạn có kích thước bằng nhau"
        },
        {
            "question": "Câu Hỏi 18: Lý do sử dụng thuật toán thay thế trang MFU là:",
            "type": "multiple-choice",
            "options": [
                "a. một trang ít được sử dụng có nhiều cơ hội được sử dụng lại",
                "b. vì thuật toán rất hiệu quả và tối ưu",
                "c. một trang đã được dùng nhiều có nhiều cơ hội được sử dụng lại",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 19: Đâu là phát biểu KHÔNG ĐÚNG về sự trì trệ (thrashing)?",
            "type": "multiple-choice",
            "options": [
                "a. Hiệu suất sử dụng CPU thấp khi xảy ra sự trì trệ",
                "b. Mô hình tập làm việc (Working set model) có thể ngăn chặn sự trì trệ",
                "c. Đó là tình huống mà tỷ lệ lỗi trang cao, thời gian phục vụ lỗi trang cao",
                "d. Thuật toán thay thế trang LRU có thể ngăn chặn sự trì trệ"
            ],
            "correctAnswer": "c. Đó là tình huống mà tỷ lệ lỗi trang cao, thời gian phục vụ lỗi trang cao"
        },
        {
            "question": "Câu Hỏi 20: Tiến trình xảy ra Thrashing khi:",
            "type": "multiple-choice",
            "options": [
                "a. Không được cấp phát bộ nhớ trong",
                "b. Nó dành nhiều thời gian chuyển trang ra/vào hơn thời gian thực thi",
                "c. Tất cả các phương án trên đều sai",
                "d. Nó dành nhiều thời gian thực thi hơn thời gian chuyển trang ra/vào"
            ],
            "correctAnswer": "b. Nó dành nhiều thời gian chuyển trang ra/vào hơn thời gian thực thi"
        },
        {
            "question": "Câu Hỏi 21: Khi một chương trình truy cập một trang có ánh xạ trong không gian địa chỉ nhưng chưa được tải vào bộ nhớ vật lý thì:",
            "type": "multiple-choice",
            "options": [
                "a. không có lỗi xảy ra",
                "b. lỗi nghiêm trọng xảy ra",
                "c. lỗi phân đoạn (segmentation fault) xảy ra",
                "d. lỗi trang (page fault) xảy ra"
            ],
            "correctAnswer": "d. lỗi trang (page fault) xảy ra"
        },
        {
            "question": "Câu Hỏi 22: Một tiến trình sử dụng 5 trang A, B, C, D, E theo trình tự: A, B, C, D, A, B, E, A, B, C, D, E. Nếu sử dụng thuật toán thay thế trang LRU, số lỗi trang xảy ra khi dùng 3 frame là:",
            "type": "multiple-choice",
            "options": [
                "a. 8",
                "b. 9",
                "c. 7",
                "d. 10"
            ],
            "correctAnswer": "d. 10"
        },
        {
            "question": "Câu Hỏi 23: Một trang bộ nhớ chứa một biến được sử dụng rất nhiều, được tải vào bộ nhớ từ lúc đầu nhưng đến lượt hiện tại thì bị loại bỏ, thì thuật toán thay thế trang là:",
            "type": "multiple-choice",
            "options": [
                "a. LFU",
                "b. LRU",
                "c. Các phương án trên đều sai",
                "d. FIFO"
            ],
            "correctAnswer": "c. Các phương án trên đều sai"
        },
        {
            "question": "Câu Hỏi 24: Một hệ thống sử dụng Bộ đệm chuyển đổi (TLB - Translation Look-aside Buffer) để dịch địa chỉ trong phân trang (bảng trang cấp 1). Giả sử thời gian truy cập của TLB là a; thời gian truy cập của bộ nhớ là b; và tỷ lệ trúng của TLB là c. Thời gian truy cập hiệu quả (EAT - Effective Access Time) của hệ thống là gì?",
            "type": "multiple-choice",
            "options": [
                "a. c * a + b",
                "b. 2*b + a",
                "c. 2*b + c * a",
                "d. 2*b + a-c * b"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 25: Giả sử một hệ thống sử dụng cấp phát bộ nhớ liền kề với các thông tin sau: địa chỉ cơ sở là 13400; thanh ghi giới hạn là 1200; và một tham chiếu là 1246. Đâu là kết quả của Đơn vị quản lý bộ nhớ (MMU - Memory Management Unit)?",
            "type": "multiple-choice",
            "options": [
                "a. 1446",
                "b. Một lỗi",
                "c. 14154",
                "d. 14646"
            ],
            "correctAnswer": "b. Một lỗi"
        },
        {
            "question": "Câu Hỏi 26: Thuật toán LRU sử dụng thông tin ______ của mỗi trang.",
            "type": "multiple-choice",
            "options": [
                "a. thời điểm đưa vào bộ nhớ",
                "b. thời điểm cuối cùng sử dụng",
                "c. trang trước và trang sau",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "b. thời điểm cuối cùng sử dụng"
        },
        {
            "question": "Câu Hỏi 27: Giả sử một hệ thống sử dụng phân trang (bảng trang cấp 1) với Bộ đệm chuyển đổi (TLB - Translation Look-aside Buffer) để dịch địa chỉ. Phát biểu nào là KHÔNG ĐÚNG?",
            "type": "multiple-choice",
            "options": [
                "a. Một tham chiếu có dạng (p, d)",
                "b. Phải mất ít nhất một truy cập TLB và một truy cập bộ nhớ để tham chiếu (p, d)",
                "c. Luôn mất ít nhất một lần truy cập TLB và 2 lần truy cập bộ nhớ để tham chiếu (p, d)",
                "d. Địa chỉ vật lý là f * frame_size + d, trong đó f là khung tương ứng của p"
            ],
            "correctAnswer": "d. Địa chỉ vật lý là f * frame_size + d, trong đó f là khung tương ứng của p"
        },
        {
            "question": "Câu Hỏi 28: Thuật toán thay thế trang tối ưu:",
            "type": "multiple-choice",
            "options": [
                "a. Thay thế các trang đã không được sử dụng trong một thời gian dài",
                "b. Thay thế các trang sẽ không được sử dụng trong một thời gian dài",
                "c. Các phương án trên đều sai",
                "d. Thay thế các trang đã được sử dụng trong một thời gian dài"
            ],
            "correctAnswer": "b. Thay thế các trang sẽ không được sử dụng trong một thời gian dài"
        },
        {
            "question": "Câu Hỏi 29: Đâu là phát biểu KHÔNG ĐÚNG về phân trang (bảng trang cấp 1)?",
            "type": "multiple-choice",
            "options": [
                "a. Có sự phân mảnh bên trong",
                "b. Hệ thống tìm n khung liên tiếp sao cho tích n * frame_size lớn hơn hoặc bằng kích thước tiến trình",
                "c. Hệ thống tìm n khung sao cho tích n * frame_size lớn hơn hoặc bằng kích thước tiến trình",
                "d. Bộ nhớ được chia thành các khung bằng nhau"
            ],
            "correctAnswer": "b. Hệ thống tìm n khung liên tiếp sao cho tích n * frame_size lớn hơn hoặc bằng kích thước tiến trình"
        },
        {
            "question": "Câu Hỏi 30: Đâu là phát biểu KHÔNG ĐÚNG về phân trang (bảng trang cấp 1)?",
            "type": "multiple-choice",
            "options": [
                "a. Địa chỉ vật lý của tham chiếu là p * frame_size + d",
                "b. Địa chỉ vật lý của tham chiếu là f * frame_size + d, trong đó f là khung tương ứng của số trang p",
                "c. Một tham chiếu có dạng (p, d)",
                "d. Cần có bảng trang để ánh xạ địa chỉ logic thành địa chỉ vật lý"
            ],
            "correctAnswer": "d. Cần có bảng trang để ánh xạ địa chỉ logic thành địa chỉ vật lý"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Khi valid-invalid bit có giá trị true có nghĩa là trang:",
            "type": "multiple-choice",
            "options": [
                "a. ở trong bộ nhớ trong",
                "b. ở trong TLB",
                "c. ở trong ổ đĩa",
                "d. có dữ liệu"
            ],
            "correctAnswer": "a. ở trong bộ nhớ trong"
        },
        {
            "question": "Câu Hỏi 2: Đâu là phát biểu KHÔNG ĐÚNG về phân đoạn (trong phân bổ bộ nhớ)?",
            "type": "multiple-choice",
            "options": [
                "a. Cấu trúc bảng phân đoạn giống như cấu trúc của bảng trang",
                "b. Nó bắt nguồn từ quan điểm của lập trình viên",
                "c. Phân đoạn có thể có kích thước khác nhau",
                "d. Đó là phân bổ bộ nhớ không liền kề"
            ],
            "correctAnswer": "a. Cấu trúc bảng phân đoạn giống như cấu trúc của bảng trang"
        },
        {
            "question": "Câu Hỏi 3: Cho chuỗi tham chiếu: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Giả sử thuật toán Tối ưu (thay thế trang) được sử dụng với 4 khung, hãy tính toán tổng số lỗi trang?",
            "type": "fill-in-the-blank",
            "options": [],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 4: Mô hình tập hợp các trang đang làm việc thay thế trang được dựa trên",
            "type": "multiple-choice",
            "options": [
                "a. khu vực toàn cục",
                "b. khu vực địa phương",
                "c. khu vực mô-đun",
                "d. truy cập ngẫu nhiên"
            ],
            "correctAnswer": "b. khu vực địa phương"
        },
        {
            "question": "Câu Hỏi 5: Các câu lệnh đang được thực thi cần:",
            "type": "multiple-choice",
            "options": [
                "a. ở trong thiết bị",
                "b. ở trong bộ nhớ vật lý",
                "c. ở trong bộ nhớ logic",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "b. ở trong bộ nhớ vật lý"
        },
        {
            "question": "Câu Hỏi 6: Một tiến trình sử dụng 5 trang A, B, C, D, E theo trình tự: A, B, C, D, A, B, E, A, B, C, D, E. Nếu sử dụng thuật toán thay thế trang FIFO, số lỗi trang xảy ra khi tăng từ 3 frame lên 4 frame :",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. vẫn giữ nguyên",
                "c. giảm",
                "d. tăng"
            ],
            "correctAnswer": "d. tăng"
        },
        {
            "question": "Câu Hỏi 7: Giả sử một hệ thống sử dụng thuật toán thay thế trang Second Chance với 6 khung. Giá trị của các bit tham chiếu của các khung là 1 1 0 1 1 0. Vị trí hiện tại của con trỏ nằm ở khung thứ 2. Khi thay thế trang được gọi, hiển thị các giá trị của các bit tham chiếu? ?(Các bit tham chiếu được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy. VD: 1,0,0,1)",
            "type": "fill-in-the-blank",
            "options": [],
            "correctAnswer": "1,0,0,1,1,0"
        },
        {
            "question": "Câu Hỏi 8: Cho chuỗi tham chiếu: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1. Thuật toán tối ưu (thay thế trang) được sử dụng với 3 khung. Hãy hiển thị các trang (theo thứ tự xuất hiện ) được chọn là nạn nhân để được trao đổi.",
            "type": "multiple-choice",
            "options": [
                "a. 7 0 1 4 3 2",
                "b. 7 1 4 1 3 2",
                "c. 7 1 0 4 3 2",
                "d. 7 1 0 3 4 2"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 9: Cho chuỗi tham chiếu: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1. Giả sử hệ thống sử dụng thuật toán thay thế trang Least Recent Used(LRU) với 3 khung. Đâu là THỨ TỰ của các trang được chọn là nạn nhân sẽ bị tráo đổi?",
            "type": "multiple-choice",
            "options": [
                "a. 7 2 1 3 0 4 2 3 2",
                "b. 7 1 2 3 0 4 0 3 2",
                "c. 7 1 2 3 0 4 1 2 3",
                "d. 7 1 2 3 1 4 1 3 2"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 10: Đâu là phát biểu KHÔNG ĐÚNG về thuật toán phân bổ bộ nhớ cho Đa chương trình với số nhiệm vụ thay đổi (MVT - Multiprogramming with a Variable number of Tasks )?",
            "type": "multiple-choice",
            "options": [
                "a. Bộ nhớ không được phân chia trước thành các phân vùng",
                "b. Có sự phân mảnh bộ nhớ",
                "c. Một tiến trình nằm trong vùng nhớ liền kề",
                "d. Bộ nhớ được chia trước thành các phân vùng"
            ],
            "correctAnswer": "a. Bộ nhớ không được phân chia trước thành các phân vùng"
        },
        {
            "question": "Câu Hỏi 11: Đâu KHÔNG PHẢI là thuật toán phân bổ động được sử dụng trong các hệ thống MVT và MFT?",
            "type": "multiple-choice",
            "options": [
                "a. Best fit",
                "b. Worst fit",
                "c. First fit",
                "d. Well fit"
            ],
            "correctAnswer": "d. Well fit"
        },
        {
            "question": "Câu Hỏi 12: Khi cấp phát các vùng trống của bộ nhớ chính, _____________________",
            "type": "multiple-choice",
            "options": [
                "a. hiệu quả của thuật toán first-fit hoàn toàn phụ thuộc vào chuỗi yêu cầu dung lượng bộ nhớ của các tiến trình",
                "b. mức sử dụng bộ nhớ của thuật toán best-fit luôn tốt hơn thuật toán first-fit",
                "c. thuật toán best-fit luôn nhanh hơn thuật toán first-fit",
                "d. cả ba phương án trên đều sai"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 13: Đâu là phát biểu KHÔNG ĐÚNG về swapping?",
            "type": "multiple-choice",
            "options": [
                "a. Swapping giống như overlay",
                "b. Swapping cho phép hệ thống hoạt động trong trường hợp tổng kích thước của các tiến trình (trong hệ thống) lớn hơn kích thước bộ nhớ",
                "c. Một tiến trình ưu tiên thấp có thể được chọn để hoán đổi nếu tiến trình ưu tiên cao hơn cần chạy",
                "d. Swapping sử dụng đĩa cứng làm kho lưu trữ"
            ],
            "correctAnswer": "d. Swapping sử dụng đĩa cứng làm kho lưu trữ"
        },
        {
            "question": "Câu Hỏi 14: Khi tỷ lệ lỗi trang thấp:",
            "type": "multiple-choice",
            "options": [
                "a. thời gian truy cập hiệu quả tăng",
                "b. thời gian hoàn thành tăng và thời gian truy cập hiệu quả tăng",
                "c. thời gian hoàn thành tăng",
                "d. thời gian truy cập hiệu quả giảm"
            ],
            "correctAnswer": "a. thời gian truy cập hiệu quả tăng"
        },
        {
            "question": "Câu Hỏi 15: Đâu là phát biểu KHÔNG ĐÚNG về phân đoạn (trong phân bổ bộ nhớ)?",
            "type": "multiple-choice",
            "options": [
                "a. Mỗi phân đoạn là một đơn vị logic (chẳng hạn như hàm, thủ tục, …)",
                "b. Một tiến trình được chia thành các phân đoạn",
                "c. RAM được chia thành các phân đoạn có kích thước bằng nhau",
                "d. Mỗi phân đoạn được phân bổ một vùng nhớ liền kề"
            ],
            "correctAnswer": "c. RAM được chia thành các phân đoạn có kích thước bằng nhau"
        },
        {
            "question": "Câu Hỏi 16: Giả sử một hệ thống sử dụng phân trang (bảng trang cấp 1) với kích thước khung là 4KB; bảng trang của một tiến trình là [56, 120, 3]. Địa chỉ vật lý của tham chiếu (1, 1296) là gì?",
            "type": "multiple-choice",
            "options": [
                "a. 120 * 4096 + 1296",
                "b. 3 * 4096 + 1296",
                "c. 560 * 4096 + 1296",
                "d. 120 * 1024 + 1296"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 17: Ánh xạ bộ nhớ ảo 2GB lên bộ nhớ vật lý có 256 frame, mỗi frame có kích thước 4 KB. Kích thước mỗi đơn vị bộ nhớ là 1 byte. Kích thước bảng phân trang nghịch đảo là ?",
            "type": "multiple-choice",
            "options": [
                "a. 4864 bit",
                "b. 2048 bit",
                "c. 3200 bit",
                "d. 6912 bit"
            ],
            "correctAnswer": "d. 6912 bit"
        },
        {
            "question": "Câu Hỏi 18: Đâu là phát biểu KHÔNG ĐÚNG về overlay?",
            "type": "multiple-choice",
            "options": [
                "a. Nó cho phép một tiến trình lớn hơn bộ nhớ có thể chạy",
                "b. Lập trình viên cần tổ chức chương trình thành các mô-đun",
                "c. Overlay được hỗ trợ trong tất cả các ngôn ngữ lập trình cấp cao",
                "d. Overlay tải mô-đun theo yêu cầu (khi cần thiết)"
            ],
            "correctAnswer": "c. Overlay được hỗ trợ trong tất cả các ngôn ngữ lập trình cấp cao"
        },
        {
            "question": "Câu Hỏi 19: Đâu là phát biểu KHÔNG ĐÚNG về sự trì trệ (thrashing)?",
            "type": "multiple-choice",
            "options": [
                "a. Hiệu suất sử dụng CPU thấp khi xảy ra sự trì trệ",
                "b. Mô hình tập làm việc (Working set model) có thể ngăn chặn sự trì trệ",
                "c. Đó là tình huống mà tỷ lệ lỗi trang cao, thời gian phục vụ lỗi trang cao",
                "d. Thuật toán thay thế trang LRU có thể ngăn chặn sự trì trệ"
            ],
            "correctAnswer": "c. Đó là tình huống mà tỷ lệ lỗi trang cao, thời gian phục vụ lỗi trang cao"
        },
        {
            "question": "Câu Hỏi 20: Tiến trình xảy ra Thrashing khi:",
            "type": "multiple-choice",
            "options": [
                "a. Không được cấp phát bộ nhớ trong",
                "b. Nó dành nhiều thời gian chuyển trang ra/vào hơn thời gian thực thi",
                "c. Tất cả các phương án trên đều sai",
                "d. Nó dành nhiều thời gian thực thi hơn thời gian chuyển trang ra/vào"
            ],
            "correctAnswer": "b. Nó dành nhiều thời gian chuyển trang ra/vào hơn thời gian thực thi"
        },
        {
            "question": "Câu Hỏi 21: Khi một chương trình truy cập một trang có ánh xạ trong không gian địa chỉ nhưng chưa được tải vào bộ nhớ vật lý thì:",
            "type": "multiple-choice",
            "options": [
                "a. không có lỗi xảy ra",
                "b. lỗi nghiêm trọng xảy ra",
                "c. lỗi phân đoạn (segmentation fault) xảy ra",
                "d. lỗi trang (page fault) xảy ra"
            ],
            "correctAnswer": "d. lỗi trang (page fault) xảy ra"
        },
        {
            "question": "Câu Hỏi 22: Một tiến trình sử dụng 5 trang A, B, C, D, E theo trình tự: A, B, C, D, A, B, E, A, B, C, D, E. Nếu sử dụng thuật toán thay thế trang LRU, số lỗi trang xảy ra khi dùng 3 frame là:",
            "type": "multiple-choice",
            "options": [
                "a. 8",
                "b. 9",
                "c. 7",
                "d. 10"
            ],
            "correctAnswer": "d. 10"
        },
        {
            "question": "Câu Hỏi 23: Một trang bộ nhớ chứa một biến được sử dụng rất nhiều, được tải vào bộ nhớ từ lúc đầu nhưng đến lượt hiện tại thì bị loại bỏ, thì thuật toán thay thế trang là:",
            "type": "multiple-choice",
            "options": [
                "a. LFU",
                "b. LRU",
                "c. Các phương án trên đều sai",
                "d. FIFO"
            ],
            "correctAnswer": "c. Các phương án trên đều sai"
        },
        {
            "question": "Câu Hỏi 24: Đâu là phát biểu KHÔNG ĐÚNG về bảo vệ bộ nhớ trong phân trang?",
            "type": "multiple-choice",
            "options": [
                "a. Nếu bit là NULL, trang tương ứng KHÔNG được tải vào bộ nhớ",
                "b. Nếu bit là invalid , trang tương ứng KHÔNG được tải vào bộ nhớ",
                "c. Nếu bit là valid, trang tương ứng đã được tải vào bộ nhớ",
                "d. Mỗi mục trong bảng trang có một bit valid/invalid"
            ],
            "correctAnswer": "a. Nếu bit là NULL, trang tương ứng KHÔNG được tải vào bộ nhớ"
        },
        {
            "question": "Câu Hỏi 25: Với mô hình cửa sổ các trang đang làm việc, chuỗi trình tự các trang được sử dụng là 2 6 1 5 7 7 7 7 5 1 6 2 3 4 1 2 3 4 4 4 3 4 3 4 4 4 1 3 2 3. Nếu Delta=10 thì tập các trang đang làm việc tại thời điểm t1 (… 7 5 1) là:",
            "type": "multiple-choice",
            "options": [
                "a. {1, 6, 5, 7, 2}",
                "b. {2, 1, 6, 7, 3}",
                "c. {1, 2, 3, 4, 5}",
                "d. {1, 2, 4, 5, 6}"
            ],
            "correctAnswer": "a. {1, 6, 5, 7, 2}"
        },
        {
            "question": "Câu Hỏi 26: Sử dụng kỹ thuật phân trang :",
            "type": "multiple-choice",
            "options": [
                "a. làm tăng dung lượng bộ nhớ vật lý cần thiết",
                "b. giảm dung lượng bộ nhớ ảo",
                "c. giảm thời gian swapping",
                "d. làm tăng thời gian swapping"
            ],
            "correctAnswer": "a. làm tăng dung lượng bộ nhớ vật lý cần thiết"
        },
        {
            "question": "Câu Hỏi 27: Nhược điểm khi di chuyển tất cả tiến trình về một phía của bộ nhớ và tất cả các vùng trống về phía khác nhằm tạo một vùng trống lớn hơn trong bộ nhớ:",
            "type": "multiple-choice",
            "options": [
                "a. sử dụng nhiều dung lượng bộ nhớ",
                "b. chi phí",
                "c. sử dụng nhiều CPU",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "b. chi phí"
        },
        {
            "question": "Câu Hỏi 28: Kỹ thuật phân trang không có hiện tượng phân mảnh ________.",
            "type": "multiple-choice",
            "options": [
                "a. trong",
                "b. giữa",
                "c. ngoài",
                "d. trong và ngoài"
            ],
            "correctAnswer": "c. ngoài"
        },
        {
            "question": "Câu Hỏi 29: Giả sử một hệ thống sử dụng cấp phát bộ nhớ liền kề với các thông tin sau: địa chỉ cơ sở là 13400; thanh ghi giới hạn là 1200; và một tham chiếu là 1246. Đâu là kết quả của Đơn vị quản lý bộ nhớ (MMU - Memory Management Unit)?",
            "type": "multiple-choice",
            "options": [
                "a. 14646",
                "b. 1446",
                "c. 14154",
                "d. Một lỗi"
            ],
            "correctAnswer": "d. Một lỗi"
        },
        {
            "question": "Câu Hỏi 30: Giả sử một hệ thống sử dụng thuật toán phân bổ bộ nhớ cho Đa chương trình với số nhiệm vụ cố định (MFT - Multiprogramming with a Fixed number of Tasks) với n phân vùng và m tiến trình (m > n). Đâu là phát biểu KHÔNG ĐÚNG?",
            "type": "multiple-choice",
            "options": [
                "a. Số lượng tiến trình được phân bổ tối đa là n",
                "b. Một tiến trình có thể trải rộng trên một số phân vùng",
                "c. Toàn bộ tiến trình nằm trong một phân vùng",
                "d. Có thể có trường hợp, số lượng tiến trình được phân bổ ít hơn n."
            ],
            "correctAnswer": "b. Một tiến trình có thể trải rộng trên một số phân vùng"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Một trang bộ nhớ chứa một biến được sử dụng rất nhiều, được tải vào bộ nhớ từ lúc đầu nhưng đến lượt hiện tại thì bị loại bỏ, thì thuật toán thay thế trang là:",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. LRU",
                "c. FIFO",
                "d. LFU"
            ],
            "correctAnswer": "c. FIFO"
        },
        {
            "question": "Câu Hỏi 2: Mô hình tập hợp các trang đang làm việc thay thế trang được dựa trên",
            "type": "multiple-choice",
            "options": [
                "a. khu vực toàn cục",
                "b. khu vực địa phương",
                "c. khu vực mô-đun",
                "d. truy cập ngẫu nhiên"
            ],
            "correctAnswer": "b. khu vực địa phương"
        },
        {
            "question": "Câu Hỏi 3: Cho chuỗi tham chiếu: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Giả sử một hệ thống sử dụng thuật toán thay thế trang FIFO với 3 khung. Tính tổng số lỗi trang?",
            "type": "fill-in-the-blank",
            "options": [],
            "correctAnswer": "9"
        },
        {
            "question": "Câu Hỏi 4: Thuật toán thay thế trang tối ưu rất khó thực thi bởi vì:",
            "type": "multiple-choice",
            "options": [
                "a. nó quá phức tạp",
                "b. nó đòi hỏi thông tin về chuỗi sử dụng trang trong tương lai",
                "c. vô cùng tốn kém",
                "d. nó đòi hỏi rất nhiều thông tin"
            ],
            "correctAnswer": "b. nó đòi hỏi thông tin về chuỗi sử dụng trang trong tương lai"
        },
        {
            "question": "Câu Hỏi 5: Giả sử một hệ thống sử dụng phân trang (bảng trang cấp 1) và thời gian truy cập của bộ nhớ là 200 ms. Tính thời gian để truy cập bộ nhớ (theo ms) từ một tham chiếu (p, d)?",
            "type": "fill-in-the-blank",
            "options": [],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 6: Một hệ thống sử dụng phương pháp cấp phát bộ nhớ theo tỷ lệ. Có 3 tiến trình trong hệ thống là P1, P2 và P3 với kích thước lần lượt là 138KB, 96KB và 164KB. Giả sử kích thước bộ nhớ là 180KB và kích thước khung là 2KB, hãy tính số lượng khung được phân bổ cho các tiến trình P1, P2, P3? (Số khung của các tiến trình P1, P2, P3 được viết liền nhau, ngăn cách nhau bởi dấu phẩy. VD: 1,2,3)",
            "type": "fill-in-the-blank",
            "options": [],
            "correctAnswer": "31,22,37"
        },
        {
            "question": "Câu Hỏi 7: Khi một tiến trình bắt đầu thực thi mà không có trang nào trong bộ nhớ:",
            "type": "multiple-choice",
            "options": [
                "a. lỗi trang xảy để tải trang cần thiết vào bộ nhớ",
                "b. tiến trình không thể thực thi",
                "c. Các phương án trên đều sai",
                "d. tiến trình gây sự cố cho hệ thống"
            ],
            "correctAnswer": "a. lỗi trang xảy để tải trang cần thiết vào bộ nhớ"
        },
        {
            "question": "Câu Hỏi 8: Giả sử một hệ thống sử dụng phân trang theo yêu cầu mà không có Bảng chuyển đổi (TLB - Translation Look-aside Table). Thời gian truy cập bộ nhớ là 200 ns; thời gian phục vụ lỗi trang là 8ms; tỷ lệ lỗi trang là 1/1000. Tính Thời gian truy cập hiệu quả (EAT - Effective Access Time) (tính theo ms) của hệ thống?",
            "type": "fill-in-the-blank",
            "options": [],
            "correctAnswer": "8,2"
        },
        {
            "question": "Câu Hỏi 9: Một hệ thống KHÔNG sử dụng Bộ đệm chuyển đổi (TLB - Translation Look-aside Buffer) để dịch địa chỉ trong phân trang (bảng trang cấp 1). Giả sử thời gian truy cập của bộ nhớ là 200ms. Thời gian truy cập hiệu quả (EAT - Effective Access Time) của hệ thống là gì?",
            "type": "multiple-choice",
            "options": [
                "a. 400 ms",
                "b. 200 ms",
                "c. 180 ms",
                "d. 160 ms"
            ],
            "correctAnswer": "a. 400 ms"
        },
        {
            "question": "Câu Hỏi 10: Tăng dung lượng RAM của máy tính thường cải thiện hiệu suất vì:",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. Ít xảy ra lỗi trang",
                "c. Bộ nhớ ảo tăng",
                "d. RAM lớn hơn thì nhanh hơn"
            ],
            "correctAnswer": "b. Ít xảy ra lỗi trang"
        },
        {
            "question": "Câu Hỏi 11: Giả sử một hệ thống sử dụng thuật toán thay thế trang FIFO với 3 khung. Cho chuỗi tham chiếu: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Hãy hiển thị các trang (theo thứ tự xuất hiện) được chọn là nạn nhân bị tráo đổi?(Các trang được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy. VD: 1,2,4,3)",
            "type": "fill-in-the-blank",
            "options": [],
            "correctAnswer": "1,2,3,4,1,2"
        },
        {
            "question": "Câu Hỏi 12: Giả sử một hệ thống sử dụng phân trang với bảng trang 2 cấp mà không cần Bộ đệm chuyển đổi (TLB - Translation Look-aside Buffer). Đâu là phát biểu KHÔNG ĐÚNG?",
            "type": "multiple-choice",
            "options": [
                "a. Thanh ghi địa chỉ được phân chia như sau: p1, p2, d, trong đó p1 dài m bit, p2 dài n bit, d dài k bit",
                "b. Một tham chiếu có dạng (p, d)",
                "c. Địa chỉ vật lý của một tham chiếu là f1 * 2m + f2 * 2n + d, trong đó f1 và f2 tương ứng là các giá trị từ các bảng trang bên ngoài và bên trong",
                "d. Mất 3 lượt truy cập bộ nhớ cho một tham chiếu"
            ],
            "correctAnswer": "c. Địa chỉ vật lý của một tham chiếu là f1 * 2m + f2 * 2n + d, trong đó f1 và f2 tương ứng là các giá trị từ các bảng trang bên ngoài và bên trong"
        },
        {
            "question": "Câu Hỏi 13: Giả sử một hệ thống sử dụng phân trang (bảng trang cấp 1) với kích thước khung là 4KB; bảng trang của một tiến trình là [56, 120, 3]. Địa chỉ vật lý của tham chiếu (1, 1296) là gì?",
            "type": "multiple-choice",
            "options": [
                "a. 120 * 4096 + 1296",
                "b. 560 * 4096 + 1296",
                "c. 120 * 1024 + 1296",
                "d. 3 * 4096 + 1296"
            ],
            "correctAnswer": "a. 120 * 4096 + 1296"
        },
        {
            "question": "Câu Hỏi 14: Cho chuỗi tham chiếu: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Giả sử hệ thống sử dụng thuật toán thay thế trang Least Recent Used(LRU) với 3 khung. Hãy tính tổng số lỗi trang?",
            "type": "fill-in-the-blank",
            "options": [],
            "correctAnswer": "10"
        },
        {
            "question": "Câu Hỏi 15: Đâu là phát biểu KHÔNG ĐÚNG về phân trang (bảng trang cấp 1)?",
            "type": "multiple-choice",
            "options": [
                "a. Số trang được lưu trữ trong các bit quan trọng nhất, trong khi offset được lưu trữ trong các bit ít quan trọng nhất",
                "b. Kích thước khung không ảnh hưởng đến hiệu suất hệ thống",
                "c. Kích thước khung ảnh hưởng đến hiệu suất hệ thống",
                "d. Thanh ghi địa chỉ được chia thành hai phần để lưu trữ số trang và offset"
            ],
            "correctAnswer": "b. Kích thước khung không ảnh hưởng đến hiệu suất hệ thống"
        },
        {
            "question": "Câu Hỏi 16: Đâu là lý do tại sao một tiến trình có thể chạy khi chỉ một phần của nó được tải vào bộ nhớ?",
            "type": "multiple-choice",
            "options": [
                "a. Bởi vì chúng có thể chỉ ra các câu lệnh nào để chạy",
                "b. Bởi vì các câu lệnh của một tiến trình là độc lập",
                "c. Vì các câu lệnh liên quan luôn nằm trong cùng một nhóm",
                "d. Vì chỉ có một lệnh được thực thi tại một thời điểm"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 17: Đâu là phát biểu KHÔNG ĐÚNG về sự phân mảnh?",
            "type": "multiple-choice",
            "options": [
                "a. Có hai loại: phân mảnh bên trong và bên ngoài",
                "b. Không có sự phân mảnh trên ổ đĩa",
                "c. Sự phân mảnh có thể dẫn đến tình huống một tiến trình không thể chạy mặc dù tổng bộ nhớ trống lớn hơn kích thước tiến trình",
                "d. Sự phân mảnh dẫn đến việc sử dụng bộ nhớ kém hiệu quả"
            ],
            "correctAnswer": "b. Không có sự phân mảnh trên ổ đĩa"
        },
        {
            "question": "Câu Hỏi 18: Hiện tượng phân mảnh ngoài sẽ không xảy ra khi:",
            "type": "multiple-choice",
            "options": [
                "a. Best fit được sử dụng",
                "b. Worst fit được sử dụng",
                "c. First fit được sử dụng",
                "d. Dù sử dụng bất cứ thuật toán nào thì nó vẫn luôn xảy ra"
            ],
            "correctAnswer": "d. Dù sử dụng bất cứ thuật toán nào thì nó vẫn luôn xảy ra"
        },
        {
            "question": "Câu Hỏi 19: Đâu là phát biểu KHÔNG ĐÚNG về việc thay thế trang?",
            "type": "multiple-choice",
            "options": [
                "a. Một nạn nhân sẽ được chọn để tráo đổi",
                "b. Trang bị tráo đổi chỉ được ghi vào đĩa nếu nó được sửa đổi",
                "c. Trang bị tráo đổi luôn được ghi vào đĩa",
                "d. Bảng trang của tiến trình có trang bị tráo đổi sẽ được cập nhật"
            ],
            "correctAnswer": "a. Một nạn nhân sẽ được chọn để tráo đổi"
        },
        {
            "question": "Câu Hỏi 20: Tiến trình xảy ra Thrashing khi:",
            "type": "multiple-choice",
            "options": [
                "a. Nó dành nhiều thời gian chuyển trang ra/vào hơn thời gian thực thi",
                "b. Không được cấp phát bộ nhớ trong",
                "c. Tất cả các phương án trên đều sai",
                "d. Nó dành nhiều thời gian thực thi hơn thời gian chuyển trang ra/vào"
            ],
            "correctAnswer": "a. Nó dành nhiều thời gian chuyển trang ra/vào hơn thời gian thực thi"
        },
        {
            "question": "Câu Hỏi 21: Giả sử một hệ thống có RAM 4GB được phân trang kích thước khung là 1KB. Loại dữ liệu của cột khung trong bảng trang là gì?",
            "type": "multiple-choice",
            "options": [
                "a. long (64 bit)",
                "b. float (32 bit)",
                "c. int (32 bit)",
                "d. double (64 bit)"
            ],
            "correctAnswer": "c. int (32 bit)"
        },
        {
            "question": "Câu Hỏi 22: Trong thuật toán thay thế trang FIFO, khi một trang được thay thế nếu là",
            "type": "multiple-choice",
            "options": [
                "a. Trang lâu nhất",
                "b. Các phương án trên đều sai",
                "c. Trang ngẫu nhiên được chọn",
                "d. Trang mới nhất"
            ],
            "correctAnswer": "a. Trang lâu nhất"
        },
        {
            "question": "Câu Hỏi 23: Bộ phận hoán đổi (swapper) làm việc với ___________, trong khi bộ phân phân trang làm việc với _______ của một tiến trình.",
            "type": "multiple-choice",
            "options": [
                "a. tất cả các trang của một tiến trình, phân đoạn",
                "b. toàn bộ tiến trình, các trang",
                "c. Các phương án trên đều sai",
                "d. toàn bộ tiến trình, các bộ phận"
            ],
            "correctAnswer": "b. toàn bộ tiến trình, các trang"
        },
        {
            "question": "Câu Hỏi 24: Đâu là phát biểu KHÔNG ĐÚNG về phần cứng bảo vệ địa chỉ?",
            "type": "multiple-choice",
            "options": [
                "a. Nó trả về địa chỉ vật lý nếu tham chiếu hợp lệ",
                "b. Nó tạo ra lỗi nếu tham chiếu không hợp lệ",
                "c. Nó trả về giá trị 0 nếu tham chiếu không hợp lệ",
                "d. Nó kiểm tra tính hợp lệ của một tham chiếu"
            ],
            "correctAnswer": "c. Nó trả về giá trị 0 nếu tham chiếu không hợp lệ"
        },
        {
            "question": "Câu Hỏi 25: Giả sử một hệ thống sử dụng phân bổ bộ nhớ phân đoạn. Nội dung của bảng phân đoạn (giới hạn, cơ sở) của một tiến trình là [(1000, 1400), (400, 6300), (400, 4300), (1100, 3200), (1000, 4700)]. Tính địa chỉ vật lý của tham chiếu (1, 106)?",
            "type": "fill-in-the-blank",
            "options": [],
            "correctAnswer": "6406"
        },
        {
            "question": "Câu Hỏi 26: Đâu là phát biểu KHÔNG ĐÚNG về phân trang (bảng trang cấp 1)?",
            "type": "multiple-choice",
            "options": [
                "a. Không gian ảo cũng được chia thành các trang",
                "b. Đây là một phương pháp cấp phát bộ nhớ liền kề",
                "c. Kích thước trang bằng kích thước khung",
                "d. Các trang có kích thước bằng nhau"
            ],
            "correctAnswer": "b. Đây là một phương pháp cấp phát bộ nhớ liền kề"
        },
        {
            "question": "Câu Hỏi 27: Nhược điểm khi di chuyển tất cả tiến trình về một phía của bộ nhớ và tất cả các vùng trống về phía khác nhằm tạo một vùng trống lớn hơn trong bộ nhớ:",
            "type": "multiple-choice",
            "options": [
                "a. sử dụng nhiều dung lượng bộ nhớ",
                "b. chi phí",
                "c. sử dụng nhiều CPU",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "b. chi phí"
        },
        {
            "question": "Câu Hỏi 28: Kỹ thuật phân trang không có hiện tượng phân mảnh ________.",
            "type": "multiple-choice",
            "options": [
                "a. trong",
                "b. giữa",
                "c. ngoài",
                "d. trong và ngoài"
            ],
            "correctAnswer": "c. ngoài"
        },
        {
            "question": "Câu Hỏi 29: Giả sử một hệ thống sử dụng cấp phát bộ nhớ liền kề với các thông tin sau: địa chỉ cơ sở là 13400; thanh ghi giới hạn là 1200; và một tham chiếu là 1246. Đâu là kết quả của Đơn vị quản lý bộ nhớ (MMU - Memory Management Unit)?",
            "type": "multiple-choice",
            "options": [
                "a. 14646",
                "b. 1446",
                "c. 14154",
                "d. Một lỗi"
            ],
            "correctAnswer": "d. Một lỗi"
        },
        {
            "question": "Câu Hỏi 30: Giả sử một hệ thống sử dụng thuật toán phân bổ bộ nhớ cho Đa chương trình với số nhiệm vụ cố định (MFT - Multiprogramming with a Fixed number of Tasks) với n phân vùng và m tiến trình (m > n). Đâu là phát biểu KHÔNG ĐÚNG?",
            "type": "multiple-choice",
            "options": [
                "a. Số lượng tiến trình được phân bổ tối đa là n",
                "b. Một tiến trình có thể trải rộng trên một số phân vùng",
                "c. Toàn bộ tiến trình nằm trong một phân vùng",
                "d. Có thể có trường hợp, số lượng tiến trình được phân bổ ít hơn n."
            ],
            "correctAnswer": "b. Một tiến trình có thể trải rộng trên một số phân vùng"
        }
    ],
    [
        {
            "question": "Câu Hỏi 12: Chọn ngôn ngữ mà một CPU có thể hiểu được",
            "type": "multiple-choice",
            "options": [
                "a. C",
                "b. Assembly",
                "c. Mã nhị phân (0110010110)",
                "d. C ++"
            ],
            "correctAnswer": "c. Mã nhị phân (0110010110)"
        },
        {
            "question": "Câu Hỏi 13: Đâu là lý do TỐT NHẤT để chúng ta cần lập lịch trình tiến trình?",
            "type": "multiple-choice",
            "options": [
                "a. Vì hệ thống có nhiều tiến trình để chạy và chúng cần được đối xử bình đẳng",
                "b. Vì nhiều lý do như: nhiều tiến trình, sử dụng tài nguyên hệ thống hiệu quả hơn, không để người dùng phải chờ đợi, ....",
                "c. Vì hệ thống có nhiều tiến trình để chạy",
                "d. Vì chúng ta cần sử dụng bộ nhớ hiệu quả hơn"
            ],
            "correctAnswer": "b. Vì nhiều lý do như: nhiều tiến trình, sử dụng tài nguyên hệ thống hiệu quả hơn, không để người dùng phải chờ đợi, ...."
        },
        {
            "question": "Câu Hỏi 14: Những điều kiện ĐÚNG của khu vực quan trọng là gì?",
            "type": "multiple-choice",
            "options": [
                "a. loại trừ lẫn nhau, bảo vệ, giới hạn sử dụng",
                "b. loại trừ lẫn nhau, bảo vệ, chờ đợi ràng buộc",
                "c. loại trừ lẫn nhau, tiến bộ, chờ đợi ràng buộc",
                "d. loại trừ lẫn nhau, chờ đợi ràng buộc, tiến triển"
            ],
            "correctAnswer": "d. loại trừ lẫn nhau, chờ đợi ràng buộc, tiến triển"
        },
        {
            "question": "Câu Hỏi 15: Trong hệ thống chia sẻ thời gian, thuật toán lập lịch Round Robin:",
            "type": "multiple-choice",
            "options": [
                "a. Sử dụng time quantum rất lớn để chuyển thành thuật toán SJF",
                "b. Sử dụng time quantum rất lớn để chuyển thành thuật toán FCFS",
                "c. Sử dụng time quantum rất nhỏ để chuyển thành thuật toán FCFS",
                "d. Sử dụng time quantum rất nhỏ để tăng hiệu suất thực thi"
            ],
            "correctAnswer": "b. Sử dụng time quantum rất lớn để chuyển thành thuật toán FCFS"
        },
        {
            "question": "Câu Hỏi 16: Cửa ập trong một chương trình là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Một lỗ hổng bảo mật được cho vào trong hệ thống lúc lập trình nhằm mục đích sử dụng sau này",
                "b. Lỗ hổng bảo mật trong mạng",
                "c. Một loại chương trình chống virus",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "a. Một lỗ hổng bảo mật được cho vào trong hệ thống lúc lập trình nhằm mục đích sử dụng sau này"
        },
        {
            "question": "Câu Hỏi 17: Hai tiến trình sau chia sẻ một biến chung X:\nTiến trình A\n{Int Y;\nA1: Y = X * 2;\nA2: X = Y;\n}\nTiến trình B\n{Int Z;\nB1: Z = X + 1;\nB2: X = Z;\n}\nX được khởi tạo bằng 5 trước khi các tiến trình bắt đầu thực thi. Thông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Có bao nhiêu giá trị khác nhau của X có thể sau khi cả hai tiến trình kết thúc thực thi?",
            "type": "multiple-choice",
            "options": [
                "a. tám",
                "b. hai",
                "c. bốn",
                "d. ba"
            ],
            "correctAnswer": "c. bốn"
        },
        {
            "question": "Câu Hỏi 18: Đâu là phát biểu KHÔNG ĐÚNG về sự phân mảnh?",
            "type": "multiple-choice",
            "options": [
                "a. Có hai loại: phân mảnh bên trong và bên ngoài",
                "b. Không có sự phân mảnh trên ổ đĩa",
                "c. Sự phân mảnh dẫn đến việc sử dụng bộ nhớ kém hiệu quả",
                "d. Sự phân mảnh có thể dẫn đến tình huống một tiến trình không thể chạy mặc dù tổng bộ nhớ trống lớn hơn kích thước tiến trình"
            ],
            "correctAnswer": "b. Không có sự phân mảnh trên ổ đĩa"
        },
        {
            "question": "Câu Hỏi 19: Mô tả ĐÚNG của thư mục là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Một thư mục lưu trữ cả FCB và dữ liệu của tệp",
                "b. Một thư mục lưu trữ tất cả dữ liệu của các tập tin của nó",
                "c. Một thư mục là một phân vùng đĩa",
                "d. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó"
            ],
            "correctAnswer": "d. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó"
        },
        {
            "question": "Câu Hỏi 20: Mục tiêu TỐT NHẤT của stripping trong RAID (Redundant Array of Inexpensive Disks) là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Để tăng tốc độ vào ra (I/O speed)",
                "b. Để tăng kích thước tệp",
                "c. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng",
                "d. Để tăng dung lượng đĩa"
            ],
            "correctAnswer": "a. Để tăng tốc độ vào ra (I/O speed)"
        },
        {
            "question": "Câu Hỏi 21: Khó khăn của cấp phát liên tục là_______________",
            "type": "multiple-choice",
            "options": [
                "a. Việc tìm không gian cho tập tin mới",
                "b. Giá thành cao",
                "c. Không hiệu quả",
                "d. Mất nhiều thời gian"
            ],
            "correctAnswer": "a. Việc tìm không gian cho tập tin mới"
        },
        {
            "question": "Câu Hỏi 22: Vấn đề khó khăn của bộ lập lịch ngắn hạn khi sử dụng SJF là:",
            "type": "multiple-choice",
            "options": [
                "a. Thuật toán sử dụng quá nhiều tài nguyên của hệ thống",
                "b. Thuật toán rất khó hiểu",
                "c. Thuật toán không tối ưu về thời gian chờ",
                "d. Không biết được độ dài của phiên sử dụng CPU tiếp theo của tiến trình"
            ],
            "correctAnswer": "d. Không biết được độ dài của phiên sử dụng CPU tiếp theo của tiến trình"
        },
        {
            "question": "Câu Hỏi 23: Đâu không phải là một thực hiện của khu vực quan trọng?",
            "type": "multiple-choice",
            "options": [
                "a. Giám sát",
                "b. Giải pháp Peterson",
                "c. Điều kiện",
                "d. Semaphore"
            ],
            "correctAnswer": "c. Điều kiện"
        },
        {
            "question": "Câu Hỏi 24: Nguyên tắc nào mà các chương trình, người sử dụng và hệ thống chỉ được cấp đủ quyền để thực hiện nhiệm vụ của chúng?",
            "type": "multiple-choice",
            "options": [
                "a. Nguyên tắc của hệ điều hành",
                "b. Nguyên tắc lập lịch tiến trình",
                "c. Các phương án trên đều sai",
                "d. Nguyên tắc quyền tối thiểu"
            ],
            "correctAnswer": "d. Nguyên tắc quyền tối thiểu"
        },
        {
            "question": "Câu Hỏi 25: Miền bảo vệ của một tiến trình bao gồm",
            "type": "multiple-choice",
            "options": [
                "a. Tập các quyền",
                "b. Tên đối tượng",
                "c. Tên đối tượng và tập các quyền",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "c. Tên đối tượng và tập các quyền"
        },
        {
            "question": "Câu Hỏi 26: Giả sử một hệ thống sử dụng thuật toán lập lịch không cho phép dừng SJF, thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là:P1 (0,7), P2 (2,4), P3 (4,1), P4 (5,5). Tính thời gian quay vòng của P3?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4"
        },
        {
            "question": "Câu Hỏi 27: Có 5 tiến trình P1, P2, P3, P4, P5 với thời gian chạy CPU (ms), thời gian đến (ms) và số hiệu ưu tiên như sau:\nThời gian chạy Số hiệu ưu tiên Thời gian đến\nP1 2 2 0\nP2 3 1 3\nP3 8 4 5\nP4 4 5 7\nP5 5 3 9\nSử dụng thuật toán số hiệu ưu tiên cho phép dừng (tiến trình có số hiệu ưu tiên cao hơn sẽ chạy trước). Khẳng định nào sau đây là đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Thời gian chờ của P2 gấp đôi thời gian chờ của P3",
                "b. Thời gian phản hồi của P4 dài hơn thời gian phản hồi của P5",
                "c. Thời gian chờ của P5 gấp đôi thời gian chờ của P3",
                "d. Thời gian chờ của P4 dài hơn thời gian chờ của P3"
            ],
            "correctAnswer": "c. Thời gian chờ của P5 gấp đôi thời gian chờ của P3"
        },
        {
            "question": "Câu Hỏi 28: Điều nào ĐÚNG về mục tiêu của điều kiện tiến triển của khu vực quan trọng?",
            "type": "multiple-choice",
            "options": [
                "a. Nó hỗ trợ sự ưu tiên của các tiến trình",
                "b. Nó làm cho việc sử dụng tài nguyên được chia sẻ một cách hiệu quả",
                "c. Nó làm cho thuật toán phức tạp khi thực hiện",
                "d. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ"
            ],
            "correctAnswer": "b. Nó làm cho việc sử dụng tài nguyên được chia sẻ một cách hiệu quả"
        },
        {
            "question": "Câu Hỏi 29: Giả sử một hệ thống sử dụng thuật toán lập lịch RR, thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là:P1 (0,20), P2 (30,10), P3 (20,40), P4 (40,25) và lượng tử thời gian là 15. Tổng thời gian chờ của các tiến trình là gì?",
            "type": "multiple-choice",
            "options": [
                "a. 40",
                "b. 60",
                "c. 70",
                "d. 50"
            ],
            "correctAnswer": "b. 60"
        },
        {
            "question": "Câu Hỏi 30: Sử dụng kỹ thuật phân trang :",
            "type": "multiple-choice",
            "options": [
                "a. giảm thời gian swapping",
                "b. giảm dung lượng bộ nhớ ảo",
                "c. làm tăng thời gian swapping",
                "d. làm tăng dung lượng bộ nhớ vật lý cần thiết"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 31: Hệ điều hành cung cấp phương thức nào để truy cập đến các dịch vụ của hệ điều hành:",
            "type": "multiple-choice",
            "options": [
                "a. Các hàm hệ thống",
                "b. Các thư viện",
                "c. API",
                "d. Các lệnh assembly"
            ],
            "correctAnswer": "a. Các hàm hệ thống"
        },
        {
            "question": "Câu Hỏi 32: Nếu không gian được cấp phát cho một tập tin quá ít,",
            "type": "multiple-choice",
            "options": [
                "a. sẽ không có bất kỳ không gian cho dữ liệu vì khối điều khiển tập tin chiếm tất cả",
                "b. tập tin sẽ không làm việc",
                "c. tập tin không thể mở rộng được",
                "d. tập tin không thể mở được"
            ],
            "correctAnswer": "c. tập tin không thể mở rộng được"
        },
        {
            "question": "Câu Hỏi 33: Tình huống mà một số tiến trình truy cập và thao tác đồng thời trên cùng một vùng dữ liệu và kết quả của việc thực hiện phụ thuộc vào thứ tự các tiến trình truy cập vào vùng dữ liệu được gọi là:",
            "type": "multiple-choice",
            "options": [
                "a. quá trình lão hóa",
                "b. điều kiện tương tranh",
                "c. tính nhất quán dữ liệu",
                "d. nạn đói"
            ],
            "correctAnswer": "b. điều kiện tương tranh"
        },
        {
            "question": "Câu Hỏi 34: Truyền thông giữa các tiến trình__________________",
            "type": "multiple-choice",
            "options": [
                "a. không bao giờ cần",
                "b. cho phép tiến trình đồng bộ hoá hoạt động",
                "c. là cần thiết đối với tất cả các tiến trình",
                "d. được thực hiện thông qua ổ đĩa"
            ],
            "correctAnswer": "b. cho phép tiến trình đồng bộ hoá hoạt động"
        },
        {
            "question": "Câu Hỏi 35: Các câu lệnh đang được thực thi cần:",
            "type": "multiple-choice",
            "options": [
                "a. ở trong thiết bị",
                "b. Các phương án trên đều sai",
                "c. ở trong bộ nhớ logic",
                "d. ở trong bộ nhớ vật lý"
            ],
            "correctAnswer": "d. ở trong bộ nhớ vật lý"
        },
        {
            "question": "Câu Hỏi 36: Hạn chế của thuật toán banker là gì ?",
            "type": "multiple-choice",
            "options": [
                "a. nguồn tài nguyên đang có sẵn có thể không còn",
                "b. ít khi biết trước tiến trình cần bao nhiêu tài nguyên",
                "c. số lượng các tiến trình thay đổi theo thời gian",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "d. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 37: Đâu là lý do tại sao một tiến trình có thể chạy khi chỉ một phần của nó được tải vào bộ nhớ?",
            "type": "multiple-choice",
            "options": [
                "a. Vì chỉ có một lệnh được thực thi tại một thời điểm",
                "b. Vì các câu lệnh liên quan luôn nằm trong cùng một nhóm",
                "c. Bởi vì chúng có thể chỉ ra các câu lệnh nào để chạy",
                "d. Bởi vì các câu lệnh của một tiến trình là độc lập"
            ],
            "correctAnswer": "a. Vì chỉ có một lệnh được thực thi tại một thời điểm"
        },
        {
            "question": "Câu Hỏi 38: Bảng ma trận truy cập toàn cục chứa________",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các phương án trên",
                "b. Tập các quyền",
                "c. Miền",
                "d. Đối tượng"
            ],
            "correctAnswer": "a. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 39: Đâu là phát biểu ĐÚNG về tình huống tương tranh (race condition)?",
            "type": "multiple-choice",
            "options": [
                "a. Nó xảy ra khi nhiều tiến trình đồng thời thao tác với một tài nguyên được chia sẻ",
                "b. Nó xảy ra ngay cả trong trường hợp chỉ có một tiến trình",
                "c. Nó xảy ra khi nhiều tiến trình thao tác tuần tự một tài nguyên được chia sẻ",
                "d. Nó xảy ra khi có nhiều tiến trình trong hệ thống"
            ],
            "correctAnswer": "a. Nó xảy ra khi nhiều tiến trình đồng thời thao tác với một tài nguyên được chia sẻ"
        },
        {
            "question": "Câu Hỏi 40: Điều kiện loại trừ lẫn nhau có thể được đảm bảo bằng cách sử dụng _________.",
            "type": "multiple-choice",
            "options": [
                "a. Khoá mutex và Semaphore nhị phân",
                "b. Khoá mutex",
                "c. Cả ba phương án trên đều sai",
                "d. Semaphore nhị phân"
            ],
            "correctAnswer": "a. Khoá mutex và Semaphore nhị phân"
        },
        {
            "question": "Câu Hỏi 41: Chương trình sau đây bao gồm 3 tiến trình đang chạy và 3 semaphore nhị phân. Các semaphore được khởi tạo như sau S0 = 1, S1 = 0, S2 = 0.\nTiến trình P0 Tiến trình P1 Tiến trình P2\nwhile(true) { wait(S1); wait(S2);\nwait(S0); signal (S0); signal (S0);\nprint ‘0’;\nsignal(S1);\nsignal (S2);}\nBao nhiêu lần P0 sẽ in '0'?",
            "type": "multiple-choice",
            "options": [
                "a. Chính xác hai lần",
                "b. Chính xác ba lần",
                "c. Chính xác một lần",
                "d. Có ít nhất hai lần"
            ],
            "correctAnswer": "d. Có ít nhất hai lần"
        },
        {
            "question": "Câu Hỏi 42: Cấp phát chỉ mục ______________________ truy cập trực tiếp.",
            "type": "multiple-choice",
            "options": [
                "a. không liên quan đến",
                "b. không hỗ trợ",
                "c. hỗ trợ",
                "d. Cả ba phương án trên đều sai"
            ],
            "correctAnswer": "c. hỗ trợ"
        },
        {
            "question": "Câu Hỏi 43: Nếu tất cả các tiến trình liên tục vào/ra dữ liệu thì hàng đợi sẵn sàng sẽ luôn......., bộ lập lịch ngắn hạn sẽ làm việc ........",
            "type": "multiple-choice",
            "options": [
                "a. trống rỗng, rất nhiều",
                "b. trống rỗng, ít",
                "c. đầy, rất nhiều",
                "d. đầy, ít"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 44: Đâu là điều KHÔNG ĐÚNG về hệ thống theo mẻ/hàng loạt?",
            "type": "multiple-choice",
            "options": [
                "a. Là một hệ điều hành đơn giản.",
                "b. Có thể sử dụng cơ chế FIFO",
                "c. Cho phép nhiều người sử dụng máy tính đồng thời",
                "d. Không giống hệ thống chia sẻ thời gian"
            ],
            "correctAnswer": "c. Cho phép nhiều người sử dụng máy tính đồng thời"
        },
        {
            "question": "Câu Hỏi 45: Đâu là phát biểu KHÔNG ĐÚNG về phân trang (bảng trang cấp 1)?",
            "type": "multiple-choice",
            "options": [
                "a. Các trang có kích thước bằng nhau",
                "b. Kích thước trang bằng kích thước khung",
                "c. Không gian ảo cũng được chia thành các trang",
                "d. Đây là một phương pháp cấp phát bộ nhớ liền kề"
            ],
            "correctAnswer": "d. Đây là một phương pháp cấp phát bộ nhớ liền kề"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Tập tin virus thường được gắn với",
            "type": "multiple-choice",
            "options": [
                "a. Tập tin thực thi",
                "b. Tất cả các phương án trên",
                "c. Tập tin đối tượng",
                "d. Tập tin nguồn"
            ],
            "correctAnswer": "a. Tập tin thực thi"
        },
        {
            "question": "Câu Hỏi 2: Truyền thông giữa các tiến trình__________________",
            "type": "multiple-choice",
            "options": [
                "a. không bao giờ cần",
                "b. cho phép tiến trình đồng bộ hoá hoạt động",
                "c. được thực hiện thông qua ổ đĩa",
                "d. là cần thiết đối với tất cả các tiến trình"
            ],
            "correctAnswer": "b. cho phép tiến trình đồng bộ hoá hoạt động"
        },
        {
            "question": "Câu Hỏi 3: Cho chuỗi tham chiếu: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Giả sử hệ thống sử dụng thuật toán thay thế trang Least Recent Used(LRU) với 3 khung. Hãy tính tổng số lỗi trang?",
            "type": "fill-in-the-blank",
            "correctAnswer": "10"
        },
        {
            "question": "Câu Hỏi 4: Chọn ngôn ngữ mà một CPU có thể hiểu được",
            "type": "multiple-choice",
            "options": [
                "a. C ++",
                "b. C",
                "c. Assembly",
                "d. Mã nhị phân (0110010110)"
            ],
            "correctAnswer": "d. Mã nhị phân (0110010110)"
        },
        {
            "question": "Câu Hỏi 5: Cho chuỗi tham chiếu: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Giả sử thuật toán Tối ưu (thay thế trang) được sử dụng với 4 khung, hãy tính toán tổng số lỗi trang?",
            "type": "fill-in-the-blank",
            "correctAnswer": "6"
        },
        {
            "question": "Câu Hỏi 6: Phòng ngừa bế tắc là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Khôi phục hệ thống nếu tồn tại bế tắc",
                "b. Tránh một trong bốn điều kiện bế tắc xảy ra",
                "c. Bất cứ khi nào hệ thống phân bổ tài nguyên, nó sẽ kiểm tra xem hệ thống có ở trạng thái bế tắc không",
                "d. Luôn kiểm tra xem hệ thống có ở trạng thái bế tắc không"
            ],
            "correctAnswer": "b. Tránh một trong bốn điều kiện bế tắc xảy ra"
        },
        {
            "question": "Câu Hỏi 7: _______ là một cách tiếp cận để hạn chế quyền truy cập hệ thống đối với người dùng được uỷ quyền.",
            "type": "multiple-choice",
            "options": [
                "a. Kiểm soát truy cập dựa trên vai trò",
                "b. Kiểm soát truy cập dựa trên nhiệm vụ",
                "c. Các phương án trên đều sai",
                "d. Kiểm soát truy cập dựa trên tiến trình"
            ],
            "correctAnswer": "a. Kiểm soát truy cập dựa trên vai trò"
        },
        {
            "question": "Câu Hỏi 8: Hệ thống truyền thông điệp cho phép các tiến trình:",
            "type": "multiple-choice",
            "options": [
                "a. chia sẻ dữ liệu",
                "b. Trao đổi với nhau mà không cần đến chia sẻ dữ liệu",
                "c. Trao đổi với nhau bằng cách chia sẻ dữ liệu",
                "d. Định danh người gửi và người nhận thông điệp"
            ],
            "correctAnswer": "b. Trao đổi với nhau mà không cần đến chia sẻ dữ liệu"
        },
        {
            "question": "Câu Hỏi 9: Đâu không phải là một phương pháp xử lý bế tắc?",
            "type": "multiple-choice",
            "options": [
                "a. phòng ngừa bế tắc",
                "b. dự đoán bế tắc",
                "c. bỏ qua bế tắc",
                "d. tránh bế tắc"
            ],
            "correctAnswer": "b. dự đoán bế tắc"
        },
        {
            "question": "Câu Hỏi 10: Có 5 tiến trình P1, P2, P3, P4, P5 với thời gian chạy CPU (ms), thời gian đến (ms) như sau:\nThời gian chạy Thời gian đến\nP1 3 0\nP2 12 4\nP3 4 6\nP4 7 8\nP5 3 11\nSử dụng thuật toán SJF cho phép dừng. Khẳng định nào sau đây là đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Thời gian chờ của P2 và thời gian chờ của P5 giống nhau",
                "b. Thời gian chờ của P2 dài hơn thời gian chờ của P4",
                "c. Thời phản hồi của P3 dài hơn thời phản hồi của P4",
                "d. Thời gian chờ của P3 dài hơn thời gian chờ của P2"
            ],
            "correctAnswer": "b. Thời gian chờ của P2 dài hơn thời gian chờ của P4"
        },
        {
            "question": "Câu Hỏi 11: Nếu thời gian truy cập bộ nhớ được ký hiệu là 'ma' và 'p' là xác suất bị lỗi trang (0 <= p <= 1), thì thời gian truy cập hiệu quả cho một bộ nhớ phân trang theo yêu cầu là:",
            "type": "multiple-choice",
            "options": [
                "a. p x ma + (1-p) x thời gian phát sinh do lỗi trang",
                "b. Các phương án trên đều sai",
                "c. ma + thời gian phát sinh do lỗi trang",
                "d. (1-p) x ma + p x thời gian phát sinh do lỗi trang"
            ],
            "correctAnswer": "d. (1-p) x ma + p x thời gian phát sinh do lỗi trang"
        },
        {
            "question": "Câu Hỏi 12: Trong truyền thông gián tiếp giữa tiến trình P và Q:",
            "type": "multiple-choice",
            "options": [
                "a. có một máy giữa hai tiến trình để giúp cho việc truyền thông",
                "b. Cả ba phương án trên đều sai",
                "c. có một hộp thư để giúp cho việc truyền thông giữa P và Q",
                "d. có một tiến trình xử lý và truyền các thông điệp giữa P và Q"
            ],
            "correctAnswer": "c. có một hộp thư để giúp cho việc truyền thông giữa P và Q"
        },
        {
            "question": "Câu Hỏi 13: Chọn mô tả tốt nhất về hệ điều hành cho máy tính",
            "type": "multiple-choice",
            "options": [
                "a. Chúng là phần mềm",
                "b. Chúng là các chương trình ứng dụng",
                "c. Chúng là phần mềm nằm giữa người dùng và phần cứng máy tính",
                "d. Chúng là những thư viện"
            ],
            "correctAnswer": "c. Chúng là phần mềm nằm giữa người dùng và phần cứng máy tính"
        },
        {
            "question": "Câu Hỏi 14: Ý nào KHÔNG ĐÚNG về việc không cho phép dừng trong các thuật toán lập lịch CPU?",
            "type": "multiple-choice",
            "options": [
                "a. Chỉ có tiến trình hiện tại có thể sử dụng CPU",
                "b. Tiến trình hiện tại sẽ luôn được chạy cho đến khi chấm dứt",
                "c. Tiến trình hiện tại có thể được chuyển sang trạng waiting",
                "d. FIFO là một thuật toán lập lịch không cho phép dừng"
            ],
            "correctAnswer": "c. Tiến trình hiện tại có thể được chuyển sang trạng waiting"
        },
        {
            "question": "Câu Hỏi 15: Đâu là phát biểu KHÔNG ĐÚNG về Hệ thống tệp ảo (VFS - Virtual File System)?",
            "type": "multiple-choice",
            "options": [
                "a. VFS cung cấp Giao diện lập trình ứng dụng (API - Application Programming Interface) hợp nhất cho các hệ thống tệp khác nhau",
                "b. VFS cho phép một hệ thống có một số hệ thống tệp khác nhau",
                "c. VFS ẩn việc triển khai chi tiết hệ thống tệp riêng lẻ",
                "d. VFS có sẵn trong tất cả các hệ điều hành"
            ],
            "correctAnswer": "d. VFS có sẵn trong tất cả các hệ điều hành"
        },
        {
            "question": "Câu Hỏi 16: Để bảo vệ hệ thống, một tiến trình nên được truy cập__________",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các phương án trên",
                "b. Một số ít tài nguyên nhưng việc cấp quyền là không cần thiết",
                "c. Chỉ những nguồn tài nguyên mà nó được cấp quyền",
                "d. Tất cả các nguồn tài nguyên"
            ],
            "correctAnswer": "c. Chỉ những nguồn tài nguyên mà nó được cấp quyền"
        },
        {
            "question": "Câu Hỏi 17: RAID cấp độ ___________ phân bố bit chẵn lẻ và dữ liệu trên tất cả N+1 ổ đĩa thay vì lưu dữ liệu trên N ổ đĩa và bit chẵn lẻ trên một ổ đĩa riêng.",
            "type": "multiple-choice",
            "options": [
                "a. 2",
                "b. 4",
                "c. 3",
                "d. 5"
            ],
            "correctAnswer": "d. 5"
        },
        {
            "question": "Câu Hỏi 18: Đâu không phải là phương pháp cấp phát không gian trên ổ đĩa:",
            "type": "multiple-choice",
            "options": [
                "a. chỉ mục",
                "b. liên tục",
                "c. liên kết",
                "d. băm"
            ],
            "correctAnswer": "d. băm"
        },
        {
            "question": "Câu Hỏi 19: Mô tả ĐÚNG của thư mục là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó",
                "b. Một thư mục lưu trữ cả FCB và dữ liệu của tệp",
                "c. Một thư mục là một phân vùng đĩa",
                "d. Một thư mục lưu trữ tất cả dữ liệu của các tập tin của nó"
            ],
            "correctAnswer": "a. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó"
        },
        {
            "question": "Câu Hỏi 20: Semaphore là một _______ để giải quyết bài toán khu vực quan trọng.",
            "type": "multiple-choice",
            "options": [
                "a. chương trình đặc biệt của một hệ thống",
                "b. luồng trong hệ thống",
                "c. biến số nguyên",
                "d. phần cứng của hệ thống"
            ],
            "correctAnswer": "c. biến số nguyên"
        },
        {
            "question": "Câu Hỏi 21: Đâu là phát biểu ĐÚNG về biến số Work trong thuật toán banker?",
            "type": "multiple-choice",
            "options": [
                "a. Đây là một biến dư thừa",
                "b. Nó lưu trữ số lượng phiên bản tài nguyên của mỗi tiến trình",
                "c. Nó lưu trữ số lượng các thể hiện tài nguyên có sẵn khi một tiến trình bị chấm dứt",
                "d. Nó lưu trữ trạng thái của hệ thống"
            ],
            "correctAnswer": "c. Nó lưu trữ số lượng các thể hiện tài nguyên có sẵn khi một tiến trình bị chấm dứt"
        },
        {
            "question": "Câu Hỏi 22: Mục đích của đa chương trình là:",
            "type": "multiple-choice",
            "options": [
                "a. Tối đa hoá việc sử dụng CPU",
                "b. Tối đa hoá mức sử dụng bộ nhớ",
                "c. Tối đa hoá mức sử dụng các thiết bị vào ra",
                "d. Có nhiều chương trình chờ trong hàng đợi sẵn sàng để chạy"
            ],
            "correctAnswer": "a. Tối đa hoá việc sử dụng CPU"
        },
        {
            "question": "Câu Hỏi 23: Nội dung nào sau đây không được lưu khi chuyển trạng giữa các tiến trình:",
            "type": "multiple-choice",
            "options": [
                "a. Các thanh ghi thông thường",
                "b. TLB",
                "c. Tất cả các phương án trên",
                "d. Bộ đếm chương trình"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 24: Mỗi tập tin có _______________ chứa thông tin về tập tin như quyền sở hữu, quyền truy cập, vị trí nội dung tập tin.",
            "type": "multiple-choice",
            "options": [
                "a. Metadata",
                "b. Khối điểu khiển tiến trình",
                "c. Bảng chỉ mục",
                "d. Khối điều khiển tập tin"
            ],
            "correctAnswer": "d. Khối điều khiển tập tin"
        },
        {
            "question": "Câu Hỏi 25: Giả sử một hệ thống sử dụng phân bổ bộ nhớ phân đoạn. Nội dung của bảng phân đoạn (giới hạn, cơ sở) của một tiến trình là [(1000, 1400), (400, 6300), (400, 4300), (1100, 3200), (1000, 4700)]. Tính địa chỉ vật lý của tham chiếu (1, 106)?",
            "type": "fill-in-the-blank",
            "correctAnswer": "6406"
        },
        {
            "question": "Câu Hỏi 26: Nếu tập các nguồn tài nguyên sẵn có cho một tiến trình là cố định trong suốt cuộc đời của nó thì miền của tiến trình đó là ____________",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. Tĩnh",
                "c. Động",
                "d. Không phải tĩnh cũng không phải động"
            ],
            "correctAnswer": "b. Tĩnh"
        },
        {
            "question": "Câu Hỏi 27: Hệ điều hành Linux có",
            "type": "multiple-choice",
            "options": [
                "a. Vi nhân (microkernel)",
                "b. Các phương án trên đều sai",
                "c. Nhân (kernel) monolithic có modules",
                "d. Nhân (kernel) monolithic"
            ],
            "correctAnswer": "c. Nhân (kernel) monolithic có modules"
        },
        {
            "question": "Câu Hỏi 28: Nếu không gian được cấp phát cho một tập tin quá ít,",
            "type": "multiple-choice",
            "options": [
                "a. tập tin không thể mở rộng được",
                "b. sẽ không có bất kỳ không gian cho dữ liệu vì khối điều khiển tập tin chiếm tất cả",
                "c. tập tin không thể mở được",
                "d. tập tin sẽ không làm việc"
            ],
            "correctAnswer": "a. tập tin không thể mở rộng được"
        },
        {
            "question": "Câu Hỏi 29: Một tiến trình có thể bị dừng do:",
            "type": "multiple-choice",
            "options": [
                "a. Bị giết chết bởi một tiến trình khác",
                "b. Thực thi kết thúc bình thường",
                "c. Tất cả các phương án trên",
                "d. Bị lỗi nghiêm trọng"
            ],
            "correctAnswer": "c. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 30: Hai tiến trình, P1 và P2, cần truy cập vào khu vực quan trọng. Xem xét đoạn mã đồng bộ hóa sau được sử dụng bởi các tiến trình:\nP1:\nwhile(true)\n{\nw1 = true;\nwhile(w2 == true);\nCritical section\nw1 = false;\n}\nRemainder Section\nP2 :\nwhile(true)\n{\nw2 = true;\nwhile(w1 == true);\nCritical section\nw2 = false;\n}\nRemainder Section\nỞ đây, w1 và w2 là các biến chia sẻ, được khởi tạo bằng false. Điều nào dưới đây là đúng về đoạn mã trên?",
            "type": "multiple-choice",
            "options": [
                "a. Các tiến trình lần lượt vào khu vực quan trọng",
                "b. Nó không đảm bảo tính loại trừ lẫn nhau",
                "c. Nó không đảm bảo tính chờ đợi có giới hạn",
                "d. Bế tắc có thể xảy ra, nhưng đảm bảo tính loại trừ lẫn nhau"
            ],
            "correctAnswer": "d. Bế tắc có thể xảy ra, nhưng đảm bảo tính loại trừ lẫn nhau"
        },
        {
            "question": "Câu Hỏi 31: Đâu là điều KHÔNG ĐÚNG về một chương trình ứng dụng?",
            "type": "multiple-choice",
            "options": [
                "a. Nó phục vụ một nhiệm vụ nhất định cho người dùng hoặc lập trình viên",
                "b. Nó có thể được tổ chức thành nhiều tập tin trên đĩa.",
                "c. Nó kiểm soát vào/ra (chẳng hạn như thao tác đọc /ghi trên đĩa)",
                "d. Hệ thống quản lý cơ sở dữ liệu là một ví dụ về ứng dụng"
            ],
            "correctAnswer": "c. Nó kiểm soát vào/ra (chẳng hạn như thao tác đọc /ghi trên đĩa)"
        },
        {
            "question": "Câu Hỏi 32: Round Robin là phiên bản cho phép dừng của thuật toán nào sau đây ?",
            "type": "multiple-choice",
            "options": [
                "a. SJF",
                "b. FCFS",
                "c. LJF (thời gian ngắn nhất trước)",
                "d. Priority (Thứ tự ưu tiên)"
            ],
            "correctAnswer": "b. FCFS"
        },
        {
            "question": "Câu Hỏi 33: Phát biểu nào KHÔNG ĐÚNG về thuật toán phát hiện bế tắc dựa trên biểu đồ?",
            "type": "multiple-choice",
            "options": [
                "a. Các đỉnh của biểu đồ có thể biểu thị các tiến trình hoặc tài nguyên",
                "b. Một cạnh từ đỉnh này sang đỉnh khác có nghĩa là một tiến trình đang chờ tài nguyên được giữ bởi tiến trình khác",
                "c. Nếu có một chu kỳ, hệ thống ở trạng thái bế tắc",
                "d. Các đỉnh của đồ thị biểu thị các tiến trình"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 34: Mục tiêu chính xác của điều kiện tiến triển của khu vực quan trọng là gì?",
            "type": "multiple-choice",
            "options": [
                "a. tối đa hóa việc sử dụng RAM",
                "b. tối đa hóa việc sử dụng CPU",
                "c. tối đa hóa việc sử dụng tài nguyên được chia sẻ",
                "d. tối đa hóa việc sử dụng ổ đĩa"
            ],
            "correctAnswer": "c. tối đa hóa việc sử dụng tài nguyên được chia sẻ"
        },
        {
            "question": "Câu Hỏi 35: Giả sử một hệ thống sử dụng phân bổ tỷ lệ dựa trên kích thước của các tiến trình. Có hai tiến trình A và B với kích thước tương ứng là 10 và 127 khung. Nếu bộ nhớ có kích thước 64 khung, tính số khung được phân bổ cho A và B? (Số khung được phân bổ cho A và B được viết liền nhau theo thứ tự tương ứng và ngăn cách bởi dấu phẩy. VD: 3,35)",
            "type": "fill-in-the-blank",
            "correctAnswer": "5,59"
        },
        {
            "question": "Câu Hỏi 36: Khi một tiến trình kết thúc:",
            "type": "multiple-choice",
            "options": [
                "a. Nó bị loại ra khỏi tất cả các hàng đợi",
                "b. Nó bị loại ra khỏi tất cả các hàng đợi trừ hàng đợi nhiệm vụ",
                "c. Khối điều khiển tiến trình của nó được lưu ở tập tin log của hệ thống",
                "d. Nó vào hàng đợi kết thúc"
            ],
            "correctAnswer": "a. Nó bị loại ra khỏi tất cả các hàng đợi"
        },
        {
            "question": "Câu Hỏi 37: Trong thuật toán lập lịch đa cấp phản hồi,",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình không thể chuyển đổi giữa các cấp hàng đợi",
                "b. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác",
                "c. tiến trình không bị phân thành các nhóm khác nhau",
                "d. tiến trình liên tục gửi thông điệp cho hệ thống"
            ],
            "correctAnswer": "b. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác"
        },
        {
            "question": "Câu Hỏi 38: Hai tiến trình sau chia sẻ một biến chung X (khởi tạo bằng 5), và hai semaphore nhị phân S1, S2 (khởi tạo bằng 0):\nTiến trình A\n{int Y;\nwait(S1);\nA1: Y = X*2;\nsignal(S2);\nwait(S1);\nA2: X = Y;\n}\nTiến trình B\n{int Z;\nB1: Z=X+1;\nsignal(S1);\nwait(S2);\nB2: X=Z;\nsignal(S1);\n}\nThông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Giá trị cuối cùng của X sau khi thực thi xong hai tiến trình A và B sẽ là:",
            "type": "multiple-choice",
            "options": [
                "a. 12",
                "b. 11",
                "c. 10",
                "d. 6"
            ],
            "correctAnswer": "c. 10"
        },
        {
            "question": "Câu Hỏi 39: Đâu là phát biểu KHÔNG ĐÚNG về bảo vệ bộ nhớ trong phân trang?",
            "type": "multiple-choice",
            "options": [
                "a. Nếu bit là valid, trang tương ứng đã được tải vào bộ nhớ",
                "b. Mỗi mục trong bảng trang có một bit valid/invalid",
                "c. Nếu bit là invalid , trang tương ứng KHÔNG được tải vào bộ nhớ",
                "d. Nếu bit là NULL, trang tương ứng KHÔNG được tải vào bộ nhớ"
            ],
            "correctAnswer": "d. Nếu bit là NULL, trang tương ứng KHÔNG được tải vào bộ nhớ"
        },
        {
            "question": "Câu Hỏi 40: Chương trình sau đây bao gồm 3 tiến trình đang chạy và 3 semaphore nhị phân. Các semaphore được khởi tạo như sau S0 = 1, S1 = 0, S2 = 0.\nTiến trình P0 Tiến trình P1 Tiến trình P2\nwhile(true) { wait(S1); wait(S2);\nwait(S0); signal (S0); signal (S0);\nprint ‘0’;\nsignal(S1);\nsignal (S2);}\nBao nhiêu lần P0 sẽ in '0'?",
            "type": "multiple-choice",
            "options": [
                "a. Chính xác ba lần",
                "b. Chính xác hai lần",
                "c. Chính xác một lần",
                "d. Có ít nhất hai lần"
            ],
            "correctAnswer": "d. Có ít nhất hai lần"
        },
        {
            "question": "Câu Hỏi 41: Mô-đun nào giao quyền kiểm soát CPU cho tiến trình được lựa chọn bởi bộ lập lịch ngắn hạn ?",
            "type": "multiple-choice",
            "options": [
                "a. ngắt",
                "b. bộ lập lịch",
                "c. bộ điều phối",
                "d. Cả ba phương án trên"
            ],
            "correctAnswer": "c. bộ điều phối"
        },
        {
            "question": "Câu Hỏi 42: Giả sử một hệ thống có RAM 4GB được phân trang với kích thước khung là 1KB. Đâu là kích thước tối đa của một bảng trang?",
            "type": "multiple-choice",
            "options": [
                "a. 2 MB",
                "b. 1 MB",
                "c. 4 MB",
                "d. 8 MB"
            ],
            "correctAnswer": "c. 4 MB"
        },
        {
            "question": "Câu Hỏi 43: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba.Tính số khối chỉ mục tối đa nếu con trỏ gián tiếp kép được sử dụng?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 44: Đâu là phát biểu KHÔNG ĐÚNG về phân đoạn (trong phân bổ bộ nhớ)?",
            "type": "multiple-choice",
            "options": [
                "a. Một bit valid/invalid là cần thiết để bảo vệ bộ nhớ",
                "b. Có sự phân mảnh bên trong",
                "c. Đây là trường hợp đặc biệt của Đa chương trình với số nhiệm vụ thay đổi (MVT - Multiprogramming with a Variable number of Tasks ), trong đó mỗi tiến trình (trong MVT) tương ứng với một phân đoạn (trong phân đoạn)",
                "d. Đó là phân bổ bộ nhớ không liền kề"
            ],
            "correctAnswer": "b. Có sự phân mảnh bên trong"
        },
        {
            "question": "Câu Hỏi 45: ______________________ không xảy ra với cấp phát liên kết.",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên",
                "b. Nạn đói",
                "c. Hiện tượng phân mảnh ngoài",
                "d. Hiện tượng phân mảnh trong"
            ],
            "correctAnswer": "c. Hiện tượng phân mảnh ngoài"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Chọn mô tả tốt nhất về hệ điều hành cho máy tính",
            "type": "multiple-choice",
            "options": [
                "a. Chúng là phần mềm nằm giữa người dùng và phần cứng máy tính",
                "b. Chúng là những thư viện",
                "c. Chúng là các chương trình ứng dụng",
                "d. Chúng là phần mềm"
            ],
            "correctAnswer": "a. Chúng là phần mềm nằm giữa người dùng và phần cứng máy tính"
        },
        {
            "question": "Câu Hỏi 2: Nội dung nào sau đây không được lưu khi chuyển trạng giữa các tiến trình:",
            "type": "multiple-choice",
            "options": [
                "a. TLB",
                "b. Các thanh ghi thông thường",
                "c. Bộ đếm chương trình",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 3: Đâu là thuật toán lập lịch CPU không cho phép dừng?",
            "type": "multiple-choice",
            "options": [
                "a. FIFO",
                "b. Round robin",
                "c. SRTF",
                "d. Không có thuật toán nào"
            ],
            "correctAnswer": "a. FIFO"
        },
        {
            "question": "Câu Hỏi 4: Chọn mã chương trình mà một CPU có thể hiểu và thực thi được",
            "type": "multiple-choice",
            "options": [
                "a. a = a + b",
                "b. 0110010110",
                "c. c.open ();",
                "d. add AX, BX"
            ],
            "correctAnswer": "b. 0110010110"
        },
        {
            "question": "Câu Hỏi 5: Điều kiện loại trừ lẫn nhau có thể được đảm bảo bằng cách sử dụng _________.",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên đều sai",
                "b. Khoá mutex và Semaphore nhị phân",
                "c. Semaphore nhị phân",
                "d. Khoá mutex"
            ],
            "correctAnswer": "b. Khoá mutex và Semaphore nhị phân"
        },
        {
            "question": "Câu Hỏi 6: Giả sử một hệ thống sử dụng thuật toán lập lịch FCFS, thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là: P1 (0,21), P2 (30,10), P3 (20,40), P4 (50,15). Hiển thị thứ tự mà các tiến trình được chạy (các tiến trình được viết liền nhau và ngăn cách bởi dấu phấy. VD: P1,P2,P3,P4)?",
            "type": "fill-in-the-blank",
            "correctAnswer": "P1,P3,P2,P4"
        },
        {
            "question": "Câu Hỏi 7: Nếu một ổ đĩa gặp sự cố trong RAID cấp độ ___________ thì phục hồi lại dữ liệu bị mất là đơn giản nhất so với RAID ở các cấp độ khác.",
            "type": "multiple-choice",
            "options": [
                "a. 3",
                "b. 2",
                "c. 4",
                "d. 1"
            ],
            "correctAnswer": "d. 1"
        },
        {
            "question": "Câu Hỏi 8: Semaphore dùng để _____________________",
            "type": "multiple-choice",
            "options": [
                "a. đồng bộ hoá các tài nguyên quan trọng nhằm tránh bế tắc",
                "b. thực thi nhiện vụ vào/ra dữ liệu",
                "c. đồng bộ hoá các tài nguyên quan trọng nhằm tránh hiện tượng tranh chấp",
                "d. quản lý bộ nhớ"
            ],
            "correctAnswer": "c. đồng bộ hoá các tài nguyên quan trọng nhằm tránh hiện tượng tranh chấp"
        },
        {
            "question": "Câu Hỏi 9: Đâu là một TIÊU CHUẨN để hủy bỏ một tiến trình trong bế tắc để phục hồi hệ thống?",
            "type": "multiple-choice",
            "options": [
                "a. Tổng số tài nguyên có sẵn trong hệ thống",
                "b. Số lượng tài nguyên mà tiến trình cần để kết thúc",
                "c. Số lượng tiến trình trong hệ thống",
                "d. Bộ nhớ khả dụng"
            ],
            "correctAnswer": "b. Số lượng tài nguyên mà tiến trình cần để kết thúc"
        },
        {
            "question": "Câu Hỏi 10: Giả sử một hệ thống có RAM 4GB được phân trang với kích thước khung là 1KB. Đâu là kích thước tối đa của một bảng trang?",
            "type": "multiple-choice",
            "options": [
                "a. 8 MB",
                "b. 4 MB",
                "c. 2 MB",
                "d. 1 MB"
            ],
            "correctAnswer": "b. 4 MB"
        },
        {
            "question": "Câu Hỏi 11: Windows XP thuộc loại hệ điều hành nào?",
            "type": "multiple-choice",
            "options": [
                "a. Đa chương trình",
                "b. Mục đích đặc biệt",
                "c. Nhúng",
                "d. Đơn chương trình"
            ],
            "correctAnswer": "a. Đa chương trình"
        },
        {
            "question": "Câu Hỏi 12: Để bảo vệ hệ thống, một tiến trình nên được truy cập__________",
            "type": "multiple-choice",
            "options": [
                "a. Chỉ những nguồn tài nguyên mà nó được cấp quyền",
                "b. Một số ít tài nguyên nhưng việc cấp quyền là không cần thiết",
                "c. Tất cả các phương án trên",
                "d. Tất cả các nguồn tài nguyên"
            ],
            "correctAnswer": "a. Chỉ những nguồn tài nguyên mà nó được cấp quyền"
        },
        {
            "question": "Câu Hỏi 13: Đâu là phát biểu KHÔNG ĐÚNG về phân đoạn (trong phân bổ bộ nhớ)?",
            "type": "multiple-choice",
            "options": [
                "a. Một bit valid/invalid được bao gồm để bảo vệ bộ nhớ",
                "b. Một bảng trang là cần thiết để dịch địa chỉ",
                "c. Đó là phân bổ bộ nhớ không liền kề",
                "d. Cần có bảng phân đoạn để dịch địa chỉ"
            ],
            "correctAnswer": "b. Một bảng trang là cần thiết để dịch địa chỉ"
        },
        {
            "question": "Câu Hỏi 14: Nhược điểm của thư mục có cấu trúc danh sách tuyến tính là_______________",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên",
                "b. Không tin cậy",
                "c. Tìm kiếm tập tin một cách tuần tự",
                "d. Kích thước của danh sách tuyến tính trong bộ nhớ"
            ],
            "correctAnswer": "c. Tìm kiếm tập tin một cách tuần tự"
        },
        {
            "question": "Câu Hỏi 15: Miền bảo vệ của một tiến trình bao gồm",
            "type": "multiple-choice",
            "options": [
                "a. Tên đối tượng",
                "b. Tập các quyền",
                "c. Các phương án trên đều sai",
                "d. Tên đối tượng và tập các quyền"
            ],
            "correctAnswer": "d. Tên đối tượng và tập các quyền"
        },
        {
            "question": "Câu Hỏi 16: Hai tiến trình sau chia sẻ một semaphore nhị phân S (khởi tạo bằng 0):\nTiến trình P1\n{ wait (S); print (\"1\"); print (\"2\"); }\nTiến trình P2\n{ print (\"3\"); print (\"4\"); signal (S);}\nThông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Chuỗi kết quả in ra màn hình sau khi cả hai tiến trình kết thúc thực thi ?",
            "type": "multiple-choice",
            "options": [
                "a. 3421",
                "b. 3412",
                "c. 1234",
                "d. 1324"
            ],
            "correctAnswer": "b. 3412"
        },
        {
            "question": "Câu Hỏi 17: Ai có thể sử dụng máy tính mà không cần HĐH",
            "type": "multiple-choice",
            "options": [
                "a. Bất kỳ người dùng bình thường nào",
                "b. Những nhà phát triển ứng dụng bình thường",
                "c. Người quản trị mạng",
                "d. Hầu như không có ai"
            ],
            "correctAnswer": "d. Hầu như không có ai"
        },
        {
            "question": "Câu Hỏi 18: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53 và hướng về phía trụ 199; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa C-SCAN được sử dụng, hãy hiển thị thứ tự của các yêu cầu được phục vụ? (Các yêu cầu được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy).",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 19: Truyền thông giữa các tiến trình__________________",
            "type": "multiple-choice",
            "options": [
                "a. cho phép tiến trình đồng bộ hoá hoạt động",
                "b. là cần thiết đối với tất cả các tiến trình",
                "c. không bao giờ cần",
                "d. được thực hiện thông qua ổ đĩa"
            ],
            "correctAnswer": "a. cho phép tiến trình đồng bộ hoá hoạt động"
        },
        {
            "question": "Câu Hỏi 20: Cho chuỗi tham chiếu: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1. Thuật toán tối ưu (thay thế trang)) được sử dụng với 3 khung. Tính tổng số lỗi trang.",
            "type": "fill-in-the-blank",
            "correctAnswer": "9"
        },
        {
            "question": "Câu Hỏi 21: Tình huống mà một số tiến trình truy cập và thao tác đồng thời trên cùng một vùng dữ liệu và kết quả của việc thực hiện phụ thuộc vào thứ tự các tiến trình truy cập vào vùng dữ liệu được gọi là:",
            "type": "multiple-choice",
            "options": [
                "a. điều kiện tương tranh",
                "b. tính nhất quán dữ liệu",
                "c. nạn đói",
                "d. quá trình lão hóa"
            ],
            "correctAnswer": "a. điều kiện tương tranh"
        },
        {
            "question": "Câu Hỏi 22: Xem xét bài toán nhà sản xuất - người tiêu dùng với hai tiến trình chia sẻ bộ đệm tròn, phát biểu nào sau đây là ĐÚNG?",
            "type": "multiple-choice",
            "options": [
                "a. Không có khu vực quan trọng",
                "b. Các câu lệnh vận dụng biến đếm để tạo ra một khu vực quan trọng",
                "c. Các câu lệnh vận dụng biến bộ đệm để tạo một khu vực quan trọng",
                "d. Các câu lệnh vận dụng cả biến đếm và biến bộ đệm để tạo ra một khu vực quan trọng"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 23: Round Robin là phiên bản cho phép dừng của thuật toán nào sau đây ?",
            "type": "multiple-choice",
            "options": [
                "a. FCFS",
                "b. SJF",
                "c. Priority (Thứ tự ưu tiên)",
                "d. LJF (thời gian ngắn nhất trước)"
            ],
            "correctAnswer": "a. FCFS"
        },
        {
            "question": "Câu Hỏi 24: Khi sử dụng bộ đếm để triển khai LRU, chúng ta thay thế trang có:",
            "type": "multiple-choice",
            "options": [
                "a. giá trị thời gian lớn nhất",
                "b. giá trị thời gian nhỏ nhất",
                "c. Các phương án trên đều sai",
                "d. kích thước lớn nhất"
            ],
            "correctAnswer": "b. giá trị thời gian nhỏ nhất"
        },
        {
            "question": "Câu Hỏi 25: Đâu là định nghĩa TỐT NHẤT về bế tắc?",
            "type": "multiple-choice",
            "options": [
                "a. Bế tắc là một tập hợp các tiến trình, trong đó mỗi tiến trình nắm giữ một số tài nguyên và chờ đợi các tài nguyên khác được giữ bởi một tiến trình khác",
                "b. Bế tắc là một tập hợp các tiến trình, trong đó mỗi tiến trình nắm giữ một số tài nguyên và chờ đợi các tài nguyên khác được giữ bởi một tiến trình khác. Có một sự chờ đợi vòng tròn trong số các tiến trình.",
                "c. Bế tắc là một tiến trình chờ đợi một tài nguyên nhất định",
                "d. Bế tắc là một tập hợp các tiến trình đang chờ một tài nguyên được chia sẻ"
            ],
            "correctAnswer": "b. Bế tắc là một tập hợp các tiến trình, trong đó mỗi tiến trình nắm giữ một số tài nguyên và chờ đợi các tài nguyên khác được giữ bởi một tiến trình khác. Có một sự chờ đợi vòng tròn trong số các tiến trình."
        },
        {
            "question": "Câu Hỏi 26: Điều nào KHÔNG ĐÚNG về Biểu đồ phân bổ tài nguyên (RAG - Resource Allocation Graph)?",
            "type": "multiple-choice",
            "options": [
                "a. Một hình chữ nhật đại diện cho một tiến trình",
                "b. Một vòng tròn đại diện cho một tiến trình",
                "c. Một cạnh yêu cầu là từ đỉnh tiến trình đến đỉnh tài nguyên",
                "d. Một cạnh từ đỉnh tài nguyên đến đỉnh tiến trình thể hiện tài nguyên được phân bổ cho tiến trình"
            ],
            "correctAnswer": "a. Một hình chữ nhật đại diện cho một tiến trình"
        },
        {
            "question": "Câu Hỏi 27: Đâu không phải là phương pháp cấp phát không gian trên ổ đĩa:",
            "type": "multiple-choice",
            "options": [
                "a. chỉ mục",
                "b. liên tục",
                "c. băm",
                "d. liên kết"
            ],
            "correctAnswer": "c. băm"
        },
        {
            "question": "Câu Hỏi 28: Hệ thống truyền thông điệp cho phép các tiến trình:",
            "type": "multiple-choice",
            "options": [
                "a. Định danh người gửi và người nhận thông điệp",
                "b. chia sẻ dữ liệu",
                "c. Trao đổi với nhau bằng cách chia sẻ dữ liệu",
                "d. Trao đổi với nhau mà không cần đến chia sẻ dữ liệu"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 29: Giả sử một hệ thống sử dụng thuật toán lập lịch không cho phép dừng SJF , thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là:P1 (0,7), P2 (2,4), P3 (4,1), P4 (5,5). Tính thời gian quay vòng của P1?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 30: Trong chế độ không chờ gửi:",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình gửi liên tục gửi cho đến khi nó nhận được một thông điệp",
                "b. tiến trình gửi liên tục gửi cho đến khi thông điệp được nhận",
                "c. tiến trình gửi sẽ gửi thông điệp và rồi quay lại thực thi",
                "d. Cả ba phương án trên đều sai"
            ],
            "correctAnswer": "c. tiến trình gửi sẽ gửi thông điệp và rồi quay lại thực thi"
        },
        {
            "question": "Câu Hỏi 31: Đâu là phát biểu KHÔNG ĐÚNG về phân đoạn (trong phân bổ bộ nhớ)?",
            "type": "multiple-choice",
            "options": [
                "a. Đó là phân bổ bộ nhớ không liền kề",
                "b. Một bit valid/invalid là cần thiết để bảo vệ bộ nhớ",
                "c. Có sự phân mảnh bên trong",
                "d. Đây là trường hợp đặc biệt của Đa chương trình với số nhiệm vụ thay đổi (MVT - Multiprogramming with a Variable number of Tasks ), trong đó mỗi tiến trình (trong MVT) tương ứng với một phân đoạn (trong phân đoạn)"
            ],
            "correctAnswer": "c. Có sự phân mảnh bên trong"
        },
        {
            "question": "Câu Hỏi 32: Trong thuật toán lập lịch đa cấp phản hồi,",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình liên tục gửi thông điệp cho hệ thống",
                "b. tiến trình không bị phân thành các nhóm khác nhau",
                "c. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác",
                "d. tiến trình không thể chuyển đổi giữa các cấp hàng đợi"
            ],
            "correctAnswer": "c. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác"
        },
        {
            "question": "Câu Hỏi 33: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53 và hướng về trụ 0; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa SCAN được sử dụng, tính tổng số trụ mà đầu đọc phải di chuyển để phục vụ các yêu cầu trên?",
            "type": "fill-in-the-blank",
            "correctAnswer": "208"
        },
        {
            "question": "Câu Hỏi 34: _______ là một cách tiếp cận để hạn chế quyền truy cập hệ thống đối với người dùng được uỷ quyền.",
            "type": "multiple-choice",
            "options": [
                "a. Kiểm soát truy cập dựa trên tiến trình",
                "b. Các phương án trên đều sai",
                "c. Kiểm soát truy cập dựa trên vai trò",
                "d. Kiểm soát truy cập dựa trên nhiệm vụ"
            ],
            "correctAnswer": "c. Kiểm soát truy cập dựa trên vai trò"
        },
        {
            "question": "Câu Hỏi 35: Các cuộc tấn công làm cho một máy tính hoặc mạng lưới tài nguyên không phục vụ được người dùng như dự kiến được gọi là __________",
            "type": "multiple-choice",
            "options": [
                "a. Tấn công nạn đói",
                "b. Tấn công đọc chậm",
                "c. Tấn công giả mạo",
                "d. Tấn công từ chối dịch vụ"
            ],
            "correctAnswer": "d. Tấn công từ chối dịch vụ"
        },
        {
            "question": "Câu Hỏi 36: Hiện tượng phân mảnh ngoài xảy ra khi:",
            "type": "multiple-choice",
            "options": [
                "a. một yêu cầu không thể được đáp ứng ngay cả khi bộ nhớ hoàn toàn trống",
                "b. tổng dung lượng bộ nhớ đủ để đáp ứng yêu cầu nhưng nó không liên tục",
                "c. tổng dung lượng bộ nhớ không đủ để đáp ứng yêu cầu",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "b. tổng dung lượng bộ nhớ đủ để đáp ứng yêu cầu nhưng nó không liên tục"
        },
        {
            "question": "Câu Hỏi 37: Thuật toán lập lịch CPU nào thường cho thời gian phản hồi trung bình nhỏ nhất:",
            "type": "multiple-choice",
            "options": [
                "a. Round Robin với time quantum nhỏ",
                "b. Thứ tự ưu tiên cho phép dừng",
                "c. FCFS",
                "d. SJF cho phép dừng"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 38: Đâu là phát biểu ĐÚNG về tình huống tương tranh (race condition)?",
            "type": "multiple-choice",
            "options": [
                "a. Nó xảy ra ngay cả trong trường hợp chỉ có một tiến trình",
                "b. Nó xảy ra khi nhiều tiến trình thao tác tuần tự một tài nguyên được chia sẻ",
                "c. Nó xảy ra khi nhiều tiến trình đồng thời thao tác với một tài nguyên được chia sẻ",
                "d. Nó xảy ra khi có nhiều tiến trình trong hệ thống"
            ],
            "correctAnswer": "c. Nó xảy ra khi nhiều tiến trình đồng thời thao tác với một tài nguyên được chia sẻ"
        },
        {
            "question": "Câu Hỏi 39: Đâu không phải là một trạng thái của tiến trình:",
            "type": "multiple-choice",
            "options": [
                "a. sẵn sàng",
                "b. ưu tiên",
                "c. chờ đợi",
                "d. đang chạy"
            ],
            "correctAnswer": "b. ưu tiên"
        },
        {
            "question": "Câu Hỏi 40: Với kiểu truy cập tập tin bất kỳ, cấp phát liên tục yêu cầu ________________ truy cập để đọc khối dữ liệu trên ổ đĩa.",
            "type": "multiple-choice",
            "options": [
                "a. đúng hai lần",
                "b. ít nhất hai lần",
                "c. cả ba phương án trên đều sai",
                "d. đúng một lần"
            ],
            "correctAnswer": "d. đúng một lần"
        },
        {
            "question": "Câu Hỏi 41: Nếu không gian được cấp phát cho một tập tin quá ít,",
            "type": "multiple-choice",
            "options": [
                "a. tập tin không thể mở được",
                "b. tập tin sẽ không làm việc",
                "c. tập tin không thể mở rộng được",
                "d. sẽ không có bất kỳ không gian cho dữ liệu vì khối điều khiển tập tin chiếm tất cả"
            ],
            "correctAnswer": "c. tập tin không thể mở rộng được"
        },
        {
            "question": "Câu Hỏi 42: Cho chuỗi tham chiếu: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1. Giả sử hệ thống sử dụng thay thế trang FIFO với 3 khung. Hiển thị thứ tự các trang được chọn là nạn nhân sẽ được hoán đổi? (Các trang được viết liền nhau, ngăn cách nhau bởi dấu phẩy. VD: 7,0,2,3)",
            "type": "fill-in-the-blank",
            "correctAnswer": "7,0,1,2,3,0,4,2,3,0,1,2"
        },
        {
            "question": "Câu Hỏi 43: Phát biểu nào sau đây là đúng:\n(I) Thuật toán lập lịch SJF có thể gây ra nạn đói.\n(II) Thuật toán lập lịch ưu tiên có thể gây ra nạn đói.\n(III)Thuật toán Round Robin tốt hơn FCFS về thời gian phản hồi",
            "type": "multiple-choice",
            "options": [
                "a. chỉ I",
                "b. chỉ I và III",
                "c. cả I, II, và III",
                "d. chỉ II và III"
            ],
            "correctAnswer": "c. cả I, II, và III"
        },
        {
            "question": "Câu Hỏi 44: Đâu là phát biểu KHÔNG ĐÚNG về việc thay thế trang?",
            "type": "multiple-choice",
            "options": [
                "a. Trang bị tráo đổi chỉ được ghi vào đĩa nếu nó được sửa đổi",
                "b. Một nạn nhân sẽ được chọn để tráo đổi",
                "c. Trang bị tráo đổi luôn được ghi vào đĩa",
                "d. Bảng trang của tiến trình có trang bị tráo đổi sẽ được cập nhật"
            ],
            "correctAnswer": "c. Trang bị tráo đổi luôn được ghi vào đĩa"
        },
        {
            "question": "Câu Hỏi 45: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa SSTF được sử dụng, tính tổng số trụ mà đầu phải di chuyển để phục vụ các yêu cầu trên?",
            "type": "fill-in-the-blank",
            "correctAnswer": "236"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Virus đa phần (multipartite virus) thường tấn công",
            "type": "multiple-choice",
            "options": [
                "a. Các tập tin",
                "b. Tất cả các phương án trên",
                "c. Boot sector",
                "d. Bộ nhớ"
            ],
            "correctAnswer": "b. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 2: Cho chuỗi tham chiếu: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1. Giả sử hệ thống sử dụng thuật toán thay thế trang Least Recent Used(LRU) với 3 khung. Đâu là THỨ TỰ của các trang được chọn là nạn nhân sẽ bị tráo đổi?",
            "type": "multiple-choice",
            "options": [
                "a. 7 1 2 3 1 4 1 3 2",
                "b. 7 2 1 3 0 4 2 3 2",
                "c. 7 1 2 3 0 4 1 2 3",
                "d. 7 1 2 3 0 4 0 3 2"
            ],
            "correctAnswer": "d. 7 1 2 3 0 4 0 3 2"
        },
        {
            "question": "Câu Hỏi 3: Mục tiêu TỐT NHẤT của stripping trong RAID (Redundant Array of Inexpensive Disks) là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Để tăng dung lượng đĩa",
                "b. Để tăng tốc độ vào ra (I/O speed)",
                "c. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng",
                "d. Để tăng kích thước tệp"
            ],
            "correctAnswer": "b. Để tăng tốc độ vào ra (I/O speed)"
        },
        {
            "question": "Câu Hỏi 4: Đâu là phát biểu ĐÚNG về counting semaphore?",
            "type": "multiple-choice",
            "options": [
                "a. Về cơ bản nó giống như semaphore nhị phân",
                "b. Giá trị của semaphore không thể âm trong tất cả các triển khai semaphore",
                "c. Giá trị của semaphore có thể lớn hơn 1",
                "d. Giá trị của semaphore là 0 hoặc 1"
            ],
            "correctAnswer": "c. Giá trị của semaphore có thể lớn hơn 1"
        },
        {
            "question": "Câu Hỏi 5: Thuật toán First fit và Best fit chịu ảnh hưởng của _______________",
            "type": "multiple-choice",
            "options": [
                "a. Nạn đói",
                "b. Cả ba phương án trên",
                "c. Hiện tượng phân mảnh ngoài",
                "d. Hiện tượng phân mảnh trong"
            ],
            "correctAnswer": "c. Hiện tượng phân mảnh ngoài"
        },
        {
            "question": "Câu Hỏi 6: Cho chuỗi tham chiếu: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Giả sử một hệ thống sử dụng thuật toán thay thế trang FIFO với 3 khung. Tính tổng số lỗi trang?",
            "type": "fill-in-the-blank",
            "correctAnswer": "9"
        },
        {
            "question": "Câu Hỏi 7: Hai tiến trình sau chia sẻ một semaphore nhị phân S (khởi tạo bằng 0):\nTiến trình P1\n{ wait (S); print (\"1\"); print (\"2\"); }\nTiến trình P2\n{ print (\"3\"); print (\"4\"); signal (S);}\nThông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Chuỗi kết quả in ra màn hình sau khi cả hai tiến trình kết thúc thực thi ?",
            "type": "multiple-choice",
            "options": [
                "a. 3421",
                "b. 3412",
                "c. 1324",
                "d. 1234"
            ],
            "correctAnswer": "b. 3412"
        },
        {
            "question": "Câu Hỏi 8: Điều nào KHÔNG ĐÚNG về truyền thông giữa các tiến trình (IPC - Inter-process communication)?",
            "type": "multiple-choice",
            "options": [
                "a. Trong hệ điều hành đơn chương trình có thể KHÔNG cần IPC cục bộ",
                "b. IPC chỉ có thể được sử dụng giữa các tiến trình trong cùng hệ thống",
                "c. Cơ chế IPC trong các hệ điều hành khác nhau có thể khác nhau",
                "d. Ví dụ về cơ chế IPC trong Linux là hàng đợi tin nhắn, semaphore, bộ nhớ dùng chung, ..."
            ],
            "correctAnswer": "b. IPC chỉ có thể được sử dụng giữa các tiến trình trong cùng hệ thống"
        },
        {
            "question": "Câu Hỏi 9: Hệ điều hành Linux có",
            "type": "multiple-choice",
            "options": [
                "a. Vi nhân (microkernel)",
                "b. Nhân (kernel) monolithic có modules",
                "c. Nhân (kernel) monolithic",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "b. Nhân (kernel) monolithic có modules"
        },
        {
            "question": "Câu Hỏi 10: Tập hợp các thuật toán thay thế trang không bao giờ có hiện tượng bất thường Belady:",
            "type": "multiple-choice",
            "options": [
                "a. Các thuật toán hàng đợi",
                "b. Các phương án trên đều sai",
                "c. Các thuật toán chuỗi",
                "d. Các thuật toán ngăn xếp"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 11: Có 4 tiến trình P1, P2, P3, P4 và 2 kiểu tài nguyên A, B. Tại thời điểm t, trạng thái của hệ thống như sau:\nĐã cấp phát Yêu cầu\nA B A B\nP1 1 3 1 2\nP2 4 1 4 3\nP3 1 2 1 7\nP4 2 0 5 1\nA còn 1 đơn vị tài nguyên, B còn 4 đơn vị tài nguyên. Hệ thống đang ở trạng thái nào:",
            "type": "multiple-choice",
            "options": [
                "a. Bế tắc",
                "b. Không an toàn, nhưng không có bế tắc",
                "c. An toàn",
                "d. Được bảo vệ"
            ],
            "correctAnswer": "a. Bế tắc"
        },
        {
            "question": "Câu Hỏi 12: Chọn mã chương trình mà một CPU có thể hiểu và thực thi được",
            "type": "multiple-choice",
            "options": [
                "a. c.open ();",
                "b. 0110010110",
                "c. a = a + b",
                "d. add AX, BX"
            ],
            "correctAnswer": "b. 0110010110"
        },
        {
            "question": "Câu Hỏi 13: Trên ổ đĩa các khối 2,3,4,5,8,9,10,11,12,13 còn trống, các khối còn lại đã được sử dụng, bit map dùng để quản lý không gian trống của khối 0 đến 15 là _____________ ",
            "type": "multiple-choice",
            "options": [
                "a. 0111100111110000",
                "b. 0011110011111100",
                "c. 1000011000000111",
                "d. 1100001100001110"
            ],
            "correctAnswer": "b. 0011110011111100"
        },
        {
            "question": "Câu Hỏi 14: VFS (hệ thống tập tin ảo) kích hoạt một số hàm của hệ thống tập tin để xử lý các yêu cầu dựa trên _______ .",
            "type": "multiple-choice",
            "options": [
                "a. kiểu hệ thống tập tin",
                "b. nhãn thời gian",
                "c. lệnh",
                "d. kích thước"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 15: Đối với một miền, _______ là một danh sách các đối tượng cùng với các quyền cho phép các đối tượng đó.",
            "type": "multiple-choice",
            "options": [
                "a. Danh mục khả năng và danh sách truy cập",
                "b. Danh sách truy cập",
                "c. Danh mục khả năng",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "c. Danh mục khả năng"
        },
        {
            "question": "Câu Hỏi 16: Mô tả TỐT NHẤT về trạng thái an toàn là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Đây là trạng thái để làm cho một tiến trình chấm dứt bình thường",
                "b. Đây là trạng thái của các tiến trình trong hệ thống",
                "c. Đây là trạng thái của một tiến trình",
                "d. Đó là một trật tự trong đó các tiến trình kết thúc để đảm bảo không có bế tắc"
            ],
            "correctAnswer": "d. Đó là một trật tự trong đó các tiến trình kết thúc để đảm bảo không có bế tắc"
        },
        {
            "question": "Câu Hỏi 17: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa FCFS được sử dụng, tính tổng số trụ mà đầu phải di chuyển để phục vụ các yêu cầu trên?",
            "type": "fill-in-the-blank",
            "correctAnswer": "640"
        },
        {
            "question": "Câu Hỏi 18: Đâu là phát biểu KHÔNG ĐÚNG về phân đoạn (trong phân bổ bộ nhớ)?",
            "type": "multiple-choice",
            "options": [
                "a. RAM được chia thành các phân đoạn có kích thước bằng nhau",
                "b. Mỗi phân đoạn được phân bổ một vùng nhớ liền kề",
                "c. Mỗi phân đoạn là một đơn vị logic (chẳng hạn như hàm, thủ tục, …)",
                "d. Một tiến trình được chia thành các phân đoạn"
            ],
            "correctAnswer": "a. RAM được chia thành các phân đoạn có kích thước bằng nhau"
        },
        {
            "question": "Câu Hỏi 19: Mô-đun nào giao quyền kiểm soát CPU cho tiến trình được lựa chọn bởi bộ lập lịch ngắn hạn ?",
            "type": "multiple-choice",
            "options": [
                "a. bộ lập lịch",
                "b. Cả ba phương án trên",
                "c. bộ điều phối",
                "d. ngắt"
            ],
            "correctAnswer": "c. bộ điều phối"
        },
        {
            "question": "Câu Hỏi 20: Hiện tượng phân mảnh ngoài xảy ra khi:",
            "type": "multiple-choice",
            "options": [
                "a. một yêu cầu không thể được đáp ứng ngay cả khi bộ nhớ hoàn toàn trống",
                "b. tổng dung lượng bộ nhớ đủ để đáp ứng yêu cầu nhưng nó không liên tục",
                "c. tổng dung lượng bộ nhớ không đủ để đáp ứng yêu cầu",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "b. tổng dung lượng bộ nhớ đủ để đáp ứng yêu cầu nhưng nó không liên tục"
        },
        {
            "question": "Câu Hỏi 21: Ở trang thái chờ, tiến trình _____________________",
            "type": "multiple-choice",
            "options": [
                "a. đã kết thúc",
                "b. đang chờ cho kết thúc của việc vào/ra dữ liệu",
                "c. đang chạy",
                "d. đang chờ bộ vi xử lý trong hàng đợi sẵn sàng"
            ],
            "correctAnswer": "b. đang chờ cho kết thúc của việc vào/ra dữ liệu"
        },
        {
            "question": "Câu Hỏi 22: Thời gian truy cập hiệu quả là tỷ lệ thuận với",
            "type": "multiple-choice",
            "options": [
                "a. Tỷ kệ lỗi trang",
                "b. Thời gian truy cập bộ nhớ",
                "c. Các phương án trên đều sai",
                "d. Tỷ lệ trúng"
            ],
            "correctAnswer": "a. Tỷ kệ lỗi trang"
        },
        {
            "question": "Câu Hỏi 23: Đoạn mã sử dụng sai mục đích được gọi là ____________",
            "type": "multiple-choice",
            "options": [
                "a. Trojan",
                "b. Trộm nội bộ",
                "c. Mã sửa đổi ngăn xếp",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "a. Trojan"
        },
        {
            "question": "Câu Hỏi 24: Trong truyền thông giữa các tiến trình, vùng đệm với kích thước 0:",
            "type": "multiple-choice",
            "options": [
                "a. Người nhận định kỳ lấy thông điệp từ vùng đệm",
                "b. Người gửi gửi liên tục, và các thông điệp không đợi trong vùng đệm",
                "c. Vùng đệm có thể lưu ít nhất một thông điệp",
                "d. Vùng đệm không chứa thông điệp nào và người gửi bị chặn cho đến khi thông điệp được nhận"
            ],
            "correctAnswer": "d. Vùng đệm không chứa thông điệp nào và người gửi bị chặn cho đến khi thông điệp được nhận"
        },
        {
            "question": "Câu Hỏi 25: Tiến trình được phân thành các nhóm khác nhau trong:",
            "type": "multiple-choice",
            "options": [
                "a. thuật toán lập lịch Round Robin",
                "b. thuật toán lập lịch ưu tiên",
                "c. thuật toán lập lịch hàng đợi đa cấp",
                "d. thuật toán lập lịch SJF"
            ],
            "correctAnswer": "c. thuật toán lập lịch hàng đợi đa cấp"
        },
        {
            "question": "Câu Hỏi 26: Hai tiến trình sau :\nTiến trình P1\n{ print (\"1\"); print (\"2\"); }\nTiến trình P2\n{ print (\"3\"); print (\"4\"); }\nThông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Có bao nhiêu chuỗi kết quả khác nhau có thể được in ra màn hình sau khi cả hai tiến trình kết thúc thực thi ?",
            "type": "multiple-choice",
            "options": [
                "a. sáu",
                "b. hai",
                "c. một",
                "d. bốn"
            ],
            "correctAnswer": "a. sáu"
        },
        {
            "question": "Câu Hỏi 27: Giả sử một hệ thống sử dụng Bộ đệm chuyển đổi (TLB - Translation Look-aside Buffer) để dịch địa chỉ trong phân trang (bảng trang cấp 1). Phát biểu nào là KHÔNG ĐÚNG?",
            "type": "multiple-choice",
            "options": [
                "a. Kích thước của TLB thường nhỏ (cỡ thường từ 64 đến 1024)",
                "b. Trong mọi trường hợp, trong tiến trình dịch địa chỉ, chúng ta chỉ cần truy cập TLB",
                "c. Trong trường hợp xấu nhất, chúng ta cần truy cập cả TLB và bảng trang trong tiến trình dịch địa chỉ",
                "d. TLB giúp tăng tốc tiến trình dịch địa chỉ"
            ],
            "correctAnswer": "b. Trong mọi trường hợp, trong tiến trình dịch địa chỉ, chúng ta chỉ cần truy cập TLB"
        },
        {
            "question": "Câu Hỏi 28: Nếu một ổ đĩa gặp sự cố trong RAID cấp độ ___________ thì phục hồi lại dữ liệu bị mất là đơn giản nhất so với RAID ở các cấp độ khác.",
            "type": "multiple-choice",
            "options": [
                "a. 2",
                "b. 3",
                "c. 4",
                "d. 1"
            ],
            "correctAnswer": "d. 1"
        },
        {
            "question": "Câu Hỏi 29: Trong thuật toán lập lịch đa cấp phản hồi,",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác",
                "b. tiến trình liên tục gửi thông điệp cho hệ thống",
                "c. tiến trình không bị phân thành các nhóm khác nhau",
                "d. tiến trình không thể chuyển đổi giữa các cấp hàng đợi"
            ],
            "correctAnswer": "a. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác"
        },
        {
            "question": "Câu Hỏi 30: Điều kiện giữ và chờ (trong bế tắc) xảy ra khi:",
            "type": "multiple-choice",
            "options": [
                "a. Tiến trình nắm giữ ít nhất một tài nguyên, và không chờ để lấy thêm tài nguyên",
                "b. Các phương án trên đều sai",
                "c. Tiến trình không giữ tài nguyên, và chờ cho một tài nguyên được giải phóng",
                "d. Tiến trình nắm giữ ít nhất một tài nguyên, và chờ cho một tài nguyên đang được nắm giữ bởi tiến trình khác"
            ],
            "correctAnswer": "d. Tiến trình nắm giữ ít nhất một tài nguyên, và chờ cho một tài nguyên đang được nắm giữ bởi tiến trình khác"
        },
        {
            "question": "Câu Hỏi 31: Thuật toán lập lịch CPU nào thường cho thời gian phản hồi trung bình nhỏ nhất:",
            "type": "multiple-choice",
            "options": [
                "a. Round Robin với time quantum nhỏ",
                "b. SJF cho phép dừng",
                "c. FCFS",
                "d. Thứ tự ưu tiên cho phép dừng"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 32: Tình huống mà một số tiến trình truy cập và thao tác đồng thời trên cùng một vùng dữ liệu và kết quả của việc thực hiện phụ thuộc vào thứ tự các tiến trình truy cập vào vùng dữ liệu được gọi là:",
            "type": "multiple-choice",
            "options": [
                "a. điều kiện tương tranh",
                "b. quá trình lão hóa",
                "c. nạn đói",
                "d. tính nhất quán dữ liệu"
            ],
            "correctAnswer": "a. điều kiện tương tranh"
        },
        {
            "question": "Câu Hỏi 33: Điều kiện loại trừ lẫn nhau có thể được đảm bảo bằng cách sử dụng _________.",
            "type": "multiple-choice",
            "options": [
                "a. Semaphore nhị phân",
                "b. Khoá mutex và Semaphore nhị phân",
                "c. Khoá mutex",
                "d. Cả ba phương án trên đều sai"
            ],
            "correctAnswer": "b. Khoá mutex và Semaphore nhị phân"
        },
        {
            "question": "Câu Hỏi 34: Trong chế độ chờ nhận:",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình nhận liên tục gửi và nhận thông điệp từ hệ thống",
                "b. tiến trình nhận phải chờ cho đến khi nhận được thông điệp",
                "c. tiến trình nhận không hoạt động",
                "d. tiến trình nhận sẽ nhận thông điệp và rồi quay lại thực thi"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 35: Giả sử một hệ thống sử dụng thuật toán lập lịch không cho phép dừng SJF, thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là:P1 (0,7), P2 (2,4), P3 (4,1), P4 (5,5). Tính thời gian quay vòng của P3?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 36: Nguyên tắc nào mà các chương trình, người sử dụng và hệ thống chỉ được cấp đủ quyền để thực hiện nhiệm vụ của chúng?",
            "type": "multiple-choice",
            "options": [
                "a. Nguyên tắc lập lịch tiến trình",
                "b. Các phương án trên đều sai",
                "c. Nguyên tắc quyền tối thiểu",
                "d. Nguyên tắc của hệ điều hành"
            ],
            "correctAnswer": "c. Nguyên tắc quyền tối thiểu"
        },
        {
            "question": "Câu Hỏi 37: Chọn mô tả tốt nhất về hệ điều hành cho máy tính",
            "type": "multiple-choice",
            "options": [
                "a. Chúng là phần mềm",
                "b. Chúng là phần mềm nằm giữa người dùng và phần cứng máy tính",
                "c. Chúng là các chương trình ứng dụng",
                "d. Chúng là những thư viện"
            ],
            "correctAnswer": "b. Chúng là phần mềm nằm giữa người dùng và phần cứng máy tính"
        },
        {
            "question": "Câu Hỏi 38: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53 và hướng về phía trụ 199; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa C-SCAN được sử dụng, hãy hiển thị thứ tự của các yêu cầu được phục vụ? (Các yêu cầu được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy).",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 39: Giả sử một hệ thống sử dụng thuật toán lập lịch không cho phép dừng SJF , thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là:P1 (0,7), P2 (2,4), P3 (4,1), P4 (5,5). Tính thời gian đáp ứng của P4?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 40: Trong cấp phát chỉ mục, ______________________",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên đều sai",
                "b. Mỗi tập tin là một danh sách liên kết của các khối trên ổ đĩa",
                "c. Mỗi tập tin được lưu trên một tập các khối liên tục trên ổ đĩa",
                "d. Tất cả các con trỏ đến các khối nằm rải rác được đặt trong một khu vực"
            ],
            "correctAnswer": "d. Tất cả các con trỏ đến các khối nằm rải rác được đặt trong một khu vực"
        },
        {
            "question": "Câu Hỏi 41: Giả sử một hệ thống sử dụng thuật toán lập lịch Không cho phép dừng SJF , thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là:P1 (0,7), P2 (2,4), P3 (4,1), P4 (5,5). Thời gian đáp ứng của tiến trình P2 là bao nhiêu?",
            "type": "multiple-choice",
            "options": [
                "a. 10",
                "b. 12",
                "c. 6",
                "d. 8"
            ],
            "correctAnswer": "c. 6"
        },
        {
            "question": "Câu Hỏi 42: Giả sử một hệ thống sử dụng thuật toán lập lịch Round Robin (RR), thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là: P1 (0,21), P2 (30,10), P3 (20,40), P4 (40,25) và lượng tử thời gian là 15. Hiển thị thứ tự mà các tiến trình được chạy (các tiến trình được viết liền nhau và ngăn cách bởi dấu phấy. VD: P1,P2,P3,P4)?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 43: Khi vùng bộ nhớ cấp phát cho một tiến trình lớn hơn một chút so với kích thước tiến trình thì:",
            "type": "multiple-choice",
            "options": [
                "a. phân mảnh ngoài xảy ra",
                "b. cả phân mảnh ngoài và phân mảnh trong không xảy ra",
                "c. phân mảnh trong xảy ra",
                "d. cả phân mảnh ngoài và phân mảnh trong xảy ra"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 44: Kỹ thuật nào sau đây giúp giảm thiểu tình trạng nhàn rỗi của CPU hoặc các thiết bị vào/ra khi hệ điều hành đơn vi xử lý ?",
            "type": "multiple-choice",
            "options": [
                "a. sử dụng pipe",
                "b. Hệ điều hành phân tán",
                "c. Đa chương trình",
                "d. Sử dụng hành đợi"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 45: Tiến trình nào có thể ảnh hưởng đến / bị ảnh hưởng bởi các tiến trình khác đang thực thi trong hệ thống ?",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình init",
                "b. tiến trình con",
                "c. tiến trình cha mẹ",
                "d. tiến trình hợp tác"
            ],
            "correctAnswer": "d. tiến trình hợp tác"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Trong cấp phát chỉ mục, ______________________",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các con trỏ đến các khối nằm rải rác được đặt trong một khu vực",
                "b. Mỗi tập tin được lưu trên một tập các khối liên tục trên ổ đĩa",
                "c. Mỗi tập tin là một danh sách liên kết của các khối trên ổ đĩa",
                "d. Cả ba phương án trên đều sai"
            ],
            "correctAnswer": "a. Tất cả các con trỏ đến các khối nằm rải rác được đặt trong một khu vực"
        },
        {
            "question": "Câu Hỏi 2: Xem xét bài toán nhà sản xuất - người tiêu dùng với hai tiến trình chia sẻ bộ đệm tròn, phát biểu nào sau đây là ĐÚNG?",
            "type": "multiple-choice",
            "options": [
                "a. Các câu lệnh vận dụng biến đếm để tạo ra một khu vực quan trọng",
                "b. Các câu lệnh vận dụng cả biến đếm và biến bộ đệm để tạo ra một khu vực quan trọng",
                "c. Không có khu vực quan trọng",
                "d. Các câu lệnh vận dụng biến bộ đệm để tạo một khu vực quan trọng"
            ],
            "correctAnswer": "a. Các câu lệnh vận dụng biến đếm để tạo ra một khu vực quan trọng"
        },
        {
            "question": "Câu Hỏi 3: Giả sử rằng một tiến trình ở trạng thái \"chờ\" để đợi một số dịch vụ vào/ra dữ liệu. Khi dịch vụ này hoàn thành, nó chuyển sang:",
            "type": "multiple-choice",
            "options": [
                "a. trạng thái kết thúc",
                "b. trạng thái chạy",
                "c. trạng thái treo",
                "d. trạng thái sẵn sàng"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 4: Khó khăn của cấp phát liên tục là_______________",
            "type": "multiple-choice",
            "options": [
                "a. Việc tìm không gian cho tập tin mới",
                "b. Không hiệu quả",
                "c. Mất nhiều thời gian",
                "d. Giá thành cao"
            ],
            "correctAnswer": "a. Việc tìm không gian cho tập tin mới"
        },
        {
            "question": "Câu Hỏi 5: Điều kiện loại trừ lẫn nhau có thể được đảm bảo bằng cách sử dụng _________.",
            "type": "multiple-choice",
            "options": [
                "a. Khoá mutex",
                "b. Khoá mutex và Semaphore nhị phân",
                "c. Semaphore nhị phân",
                "d. Cả ba phương án trên đều sai"
            ],
            "correctAnswer": "b. Khoá mutex và Semaphore nhị phân"
        },
        {
            "question": "Câu Hỏi 6: Trong thuật toán lập lịch đa cấp phản hồi,",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình không bị phân thành các nhóm khác nhau",
                "b. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác",
                "c. tiến trình liên tục gửi thông điệp cho hệ thống",
                "d. tiến trình không thể chuyển đổi giữa các cấp hàng đợi"
            ],
            "correctAnswer": "b. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác"
        },
        {
            "question": "Câu Hỏi 7: Hai tiến trình sau chia sẻ một biến chung X:\nTiến trình A\n{Int Y;\nA1: Y = X * 2;\nA2: X = Y;\n}\nTiến trình B\n{Int Z;\nB1: Z = X + 1;\nB2: X = Z;\n}\nX được khởi tạo bằng 5 trước khi các tiến trình bắt đầu thực thi. Thông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Có bao nhiêu giá trị khác nhau của X có thể sau khi cả hai tiến trình kết thúc thực thi?",
            "type": "multiple-choice",
            "options": [
                "a. tám",
                "b. ba",
                "c. hai",
                "d. bốn"
            ],
            "correctAnswer": "d. bốn"
        },
        {
            "question": "Câu Hỏi 8: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba. Tính kích thước tệp tối đa (theo KB) khi chỉ sử dụng con trỏ trực tiếp?",
            "type": "fill-in-the-blank",
            "correctAnswer": "48"
        },
        {
            "question": "Câu Hỏi 9: Thông tin về khối điều khiển của các tiến trình hiện có trong hệ thống được lưu trong:",
            "type": "multiple-choice",
            "options": [
                "a. Tập tin log của hệ thống",
                "b. Bảng tiến trình",
                "c. Thanh ghi tiến trình",
                "d. Bộ đếm tiến trình"
            ],
            "correctAnswer": "b. Bảng tiến trình"
        },
        {
            "question": "Câu Hỏi 10: Trong chế độ chờ nhận:",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình nhận sẽ nhận thông điệp và rồi quay lại thực thi",
                "b. tiến trình nhận phải chờ cho đến khi nhận được thông điệp",
                "c. tiến trình nhận không hoạt động",
                "d. tiến trình nhận liên tục gửi và nhận thông điệp từ hệ thống"
            ],
            "correctAnswer": "b. tiến trình nhận phải chờ cho đến khi nhận được thông điệp"
        },
        {
            "question": "Câu Hỏi 11: Có 5 tiến trình P1, P2, P3, P4, P5 với thời gian chạy CPU (ms), thời gian đến (ms) như sau:\nThời gian chạy Thời gian đến\nP1 3 0\nP2 5 4\nP3 8 6\nP4 4 8\nP5 12 9\nSử dụng thuật toán Round Robin với time quantum q = 3 ms. Khẳng định nào sau đây là đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Thời gian chờ của P4 dài hơn thời gian chờ của P3",
                "b. Thời phản hồi của P3 dài hơn thời phản hồi của P4",
                "c. Thời gian chờ của P2 và thời gian chờ của P5 giống nhau",
                "d. Thời gian chờ của P3 dài hơn thời gian chờ của P5"
            ],
            "correctAnswer": "d. Thời gian chờ của P3 dài hơn thời gian chờ của P5"
        },
        {
            "question": "Câu Hỏi 12: Ba tiến trình sau chia sẻ semaphore nhị phân S1, S2, S3 (khởi tạo bằng 0):\nTiến trình P1\n{ wait (S1); print (\"A\"); signal (S2);}\nTiến trình P2\n{ wait (S2); print (\"B\"); signal (S3);}\nTiến trình P3\n{ signal (S3); print (\"C\"); signal (S1);}\nThông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Chuỗi kết quả in ra màn hình sau khi cả ba tiến trình kết thúc thực thi ?",
            "type": "multiple-choice",
            "options": [
                "a. ABC",
                "b. CAB",
                "c. BAC",
                "d. BCA"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 13: Thuật toán thay thế trang nào sau đây có hiện tượng bất thường Belady ?",
            "type": "multiple-choice",
            "options": [
                "a. LRU",
                "b. FIFO",
                "c. Cả tối ưu và FIFO",
                "d. tối ưu (OPT)"
            ],
            "correctAnswer": "b. FIFO"
        },
        {
            "question": "Câu Hỏi 14: Đâu không phải là phương pháp cấp phát không gian trên ổ đĩa:",
            "type": "multiple-choice",
            "options": [
                "a. chỉ mục",
                "b. liên tục",
                "c. liên kết",
                "d. băm"
            ],
            "correctAnswer": "d. băm"
        },
        {
            "question": "Câu Hỏi 15: Đâu là thuật toán lập lịch CPU cho phép dừng?",
            "type": "multiple-choice",
            "options": [
                "a. FIFO",
                "b. Không có điều nào ở trên",
                "c. SJN (hoặc SJF)",
                "d. SRTF"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 16: Tiến trình được phân thành các nhóm khác nhau trong:",
            "type": "multiple-choice",
            "options": [
                "a. thuật toán lập lịch Round Robin",
                "b. thuật toán lập lịch hàng đợi đa cấp",
                "c. thuật toán lập lịch ưu tiên",
                "d. thuật toán lập lịch SJF"
            ],
            "correctAnswer": "b. thuật toán lập lịch hàng đợi đa cấp"
        },
        {
            "question": "Câu Hỏi 17: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba. Tính kích thước tệp tối đa (theo KB) khi con trỏ gián tiếp đơn được sử dụng?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4144"
        },
        {
            "question": "Câu Hỏi 18: Giả sử một hệ thống sử dụng thuật toán lập lịch Không cho phép dừng SJF , thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là:P1 (0,7), P2 (2,4), P3 (4,1), P4 (5,5). Thời gian đáp ứng của tiến trình P2 là bao nhiêu?",
            "type": "multiple-choice",
            "options": [
                "a. 12",
                "b. 6",
                "c. 8",
                "d. 10"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 19: Điều nào KHÔNG ĐÚNG về truyền thông giữa các tiến trình (IPC - Inter-process communication)?",
            "type": "multiple-choice",
            "options": [
                "a. IPC chỉ có thể được sử dụng giữa các tiến trình trong cùng hệ thống",
                "b. Cơ chế IPC trong các hệ điều hành khác nhau có thể khác nhau",
                "c. Trong hệ điều hành đơn chương trình có thể KHÔNG cần IPC cục bộ",
                "d. Ví dụ về cơ chế IPC trong Linux là hàng đợi tin nhắn, semaphore, bộ nhớ dùng chung, ..."
            ],
            "correctAnswer": "a. IPC chỉ có thể được sử dụng giữa các tiến trình trong cùng hệ thống"
        },
        {
            "question": "Câu Hỏi 20: Hệ thống truyền thông điệp cho phép các tiến trình:",
            "type": "multiple-choice",
            "options": [
                "a. Định danh người gửi và người nhận thông điệp",
                "b. Trao đổi với nhau mà không cần đến chia sẻ dữ liệu",
                "c. Trao đổi với nhau bằng cách chia sẻ dữ liệu",
                "d. chia sẻ dữ liệu"
            ],
            "correctAnswer": "b. Trao đổi với nhau mà không cần đến chia sẻ dữ liệu"
        },
        {
            "question": "Câu Hỏi 21: Có 5 tiến trình P0, P1, P2, P3, P4 và 4 kiểu tài nguyên A, B, C, D. Tại thời điểm t0, trạng thái của hệ thống như sau:\nĐã cấp phát Cần tối đa Còn\nA B C D A B C D A B C D\nP0 2 0 0 1 4 2 1 2 3 3 2 1\nP1 3 1 2 1 5 2 5 2\nP2 2 1 0 3 2 3 1 6\nP3 1 3 1 2 1 4 2 4\nP4 1 4 3 2 3 6 6 5\nĐâu là một trình tự an toàn của hệ thống:",
            "type": "multiple-choice",
            "options": [
                "a. <P0, P1, P2, P3, P4>",
                "b. <P0, P3, P1, P2, P4>",
                "c. <P0, P4, P1, P2, P3>",
                "d. <P0, P2, P4, P1, P3>"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 22: Để tránh xảy ra điều kiện không dừng, nếu một tiến trình đang nắm giữ một số tài nguyên và yêu cầu một nguồn tài nguyên không thể ngay lập tức cấp phát cho nó:",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình tiếp tục thực thi mà không được cấp phát nguồn tài nguyên nó cần",
                "b. thì tất cả các tài nguyên hiện đang bị giữ sẽ được giải phóng",
                "c. thì tiến trình chờ đợi các tài nguyên sẽ được cấp phát cho nó",
                "d. tiến trình liên tục gửi yêu cầu cho đến khi tài nguyên được cấp phát cho nó"
            ],
            "correctAnswer": "b. thì tất cả các tài nguyên hiện đang bị giữ sẽ được giải phóng"
        },
        {
            "question": "Câu Hỏi 23: Nếu tiến trình có sự có, hầu hết các hệ điều hành ghi các thông tin lỗi tại:",
            "type": "multiple-choice",
            "options": [
                "a. Tập tin log",
                "b. Các phương án trên đều sai",
                "c. Một tiến trình khác đang chạy",
                "d. Tập tin mới"
            ],
            "correctAnswer": "a. Tập tin log"
        },
        {
            "question": "Câu Hỏi 24: Đâu không phải là một trong những nhiệm vụ chính của hệ điều hành?",
            "type": "multiple-choice",
            "options": [
                "a. Phát tệp âm thanh",
                "b. Quản lý lưu trữ (như CD, DVD, ổ đĩa, ...)",
                "c. Quản lý bộ nhớ",
                "d. Bảo vệ và an ninh"
            ],
            "correctAnswer": "a. Phát tệp âm thanh"
        },
        {
            "question": "Câu Hỏi 25: Hệ thống có M tiến trình chia sẻ N tài nguyên cùng kiểu. Mỗi tiến trình cần nhiều nhất N tài nguyên, và tổng số tài nguyên cần thiết của M tiến trình luôn ít hơn (M+N). Khẳng định nào sau đây là đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Bế tắc có thể xảy ra",
                "b. Bế tắc chắc chắn xảy ra",
                "c. Bế tắc chắc chắn không xảy ra"
            ],
            "correctAnswer": "c. Bế tắc chắc chắn không xảy ra"
        },
        {
            "question": "Câu Hỏi 26: Giả sử một hệ thống sử dụng phân bổ theo chỉ mục (1 cấp) với kích thước khối 4KB; kích thước con trỏ 4 byte. Một tệp có kích thước 3MB. Đâu là vị trí chính xác của vị trí tệp tin 35KB?",
            "type": "multiple-choice",
            "options": [
                "a. (block index, offset)=(9, 3071)",
                "b. (block index, offset)=(8, 3072)",
                "c. (block index, offset)=(8, 3071)",
                "d. (block index, offset)=(9, 3072)"
            ],
            "correctAnswer": "b. (block index, offset)=(8, 3072)"
        },
        {
            "question": "Câu Hỏi 27: Chọn ngôn ngữ mà một CPU có thể hiểu được",
            "type": "multiple-choice",
            "options": [
                "a. C ++",
                "b. Mã nhị phân (0110010110)",
                "c. C",
                "d. Assembly"
            ],
            "correctAnswer": "b. Mã nhị phân (0110010110)"
        },
        {
            "question": "Câu Hỏi 28: Khi một tiến trình bắt đầu thực thi mà không có trang nào trong bộ nhớ:",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. tiến trình không thể thực thi",
                "c. lỗi trang xảy để tải trang cần thiết vào bộ nhớ",
                "d. tiến trình gây sự cố cho hệ thống"
            ],
            "correctAnswer": "c. lỗi trang xảy để tải trang cần thiết vào bộ nhớ"
        },
        {
            "question": "Câu Hỏi 29: Để bảo vệ hệ thống, một tiến trình nên được truy cập__________",
            "type": "multiple-choice",
            "options": [
                "a. Chỉ những nguồn tài nguyên mà nó được cấp quyền",
                "b. Một số ít tài nguyên nhưng việc cấp quyền là không cần thiết",
                "c. Tất cả các nguồn tài nguyên",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "a. Chỉ những nguồn tài nguyên mà nó được cấp quyền"
        },
        {
            "question": "Câu Hỏi 30: Đâu là phát biểu KHÔNG ĐÚNG về semaphore?",
            "type": "multiple-choice",
            "options": [
                "a. Một semaphore thường bao gồm một số nguyên",
                "b. Semaphore không thỏa mãn các điều kiện của khu vực quan trọng",
                "c. Semaphore có các hoạt động nguyên tử",
                "d. Semaphore là một giải pháp để giải quyết khu vực quan trọng"
            ],
            "correctAnswer": "b. Semaphore không thỏa mãn các điều kiện của khu vực quan trọng"
        },
        {
            "question": "Câu Hỏi 31: Đâu là phát biểu KHÔNG ĐÚNG về các thuật toán phân bổ động?",
            "type": "multiple-choice",
            "options": [
                "a. Một trong các thuật toán không cần tìm kiếm toàn bộ danh sách bộ nhớ trống để tìm vùng nhớ phù hợp",
                "b. Chúng chỉ được sử dụng trong các hệ thống MFT",
                "c. Chúng được gọi bất cứ khi nào một tiến trình mới đến",
                "d. Nhiệm vụ của chúng là tìm một vùng nhớ phù hợp để tải tiến trình vào"
            ],
            "correctAnswer": "b. Chúng chỉ được sử dụng trong các hệ thống MFT"
        },
        {
            "question": "Câu Hỏi 32: Mỗi tập tin có _______________ chứa thông tin về tập tin như quyền sở hữu, quyền truy cập, vị trí nội dung tập tin.",
            "type": "multiple-choice",
            "options": [
                "a. Khối điều khiển tập tin",
                "b. Khối điểu khiển tiến trình",
                "c. Metadata",
                "d. Bảng chỉ mục"
            ],
            "correctAnswer": "a. Khối điều khiển tập tin"
        },
        {
            "question": "Câu Hỏi 33: Giả sử một hệ thống sử dụng thuật toán thay thế trang Second Chance với 6 khung. Giá trị của các bit tham chiếu của các khung là 1 1 0 1 1 0. Vị trí hiện tại của con trỏ nằm ở khung thứ 2. Khi thay thế trang được gọi, hiển thị các giá trị của các bit tham chiếu? ?(Các bit tham chiếu được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy. VD: 1,0,0,1)",
            "type": "fill-in-the-blank",
            "correctAnswer": "1,0,0,1,1,0"
        },
        {
            "question": "Câu Hỏi 34: Phát biểu nào sau đây là đúng:\n(I) Thuật toán lập lịch SJF có thể gây ra nạn đói.\n(II) Thuật toán lập lịch ưu tiên có thể gây ra nạn đói.\n(III)Thuật toán Round Robin tốt hơn FCFS về thời gian phản hồi",
            "type": "multiple-choice",
            "options": [
                "a. cả I, II, và III",
                "b. chỉ I",
                "c. chỉ II và III",
                "d. chỉ I và III"
            ],
            "correctAnswer": "a. cả I, II, và III"
        },
        {
            "question": "Câu Hỏi 35: Đâu là phát biểu KHÔNG ĐÚNG về thuật toán phân bổ bộ nhớ cho Đa chương trình với số nhiệm vụ thay đổi (MVT - Multiprogramming with a Variable number of Tasks )?",
            "type": "multiple-choice",
            "options": [
                "a. Một tiến trình có thể phân tán trong một số vùng nhớ",
                "b. Bộ nhớ không được chia trước thành các phân vùng",
                "c. Một tiến trình được phân bổ trên một vùng bộ nhớ liền kề",
                "d. Có sự phân mảnh bộ nhớ"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 36: Đâu là phát biểu KHÔNG ĐÚNG về Hệ thống tệp ảo (VFS - Virtual File System)?",
            "type": "multiple-choice",
            "options": [
                "a. VFS cho phép một hệ thống có một số hệ thống tệp khác nhau",
                "b. VFS cung cấp Giao diện lập trình ứng dụng (API - Application Programming Interface) hợp nhất cho các hệ thống tệp khác nhau",
                "c. VFS có sẵn trong tất cả các hệ điều hành",
                "d. VFS ẩn việc triển khai chi tiết hệ thống tệp riêng lẻ"
            ],
            "correctAnswer": "c. VFS có sẵn trong tất cả các hệ điều hành"
        },
        {
            "question": "Câu Hỏi 37: Một tiến trình có thể bị dừng do:",
            "type": "multiple-choice",
            "options": [
                "a. Bị giết chết bởi một tiến trình khác",
                "b. Tất cả các phương án trên",
                "c. Thực thi kết thúc bình thường",
                "d. Bị lỗi nghiêm trọng"
            ],
            "correctAnswer": "b. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 38: Đâu là điều KHÔNG ĐÚNG về một chương trình ứng dụng?",
            "type": "multiple-choice",
            "options": [
                "a. Nó phục vụ một nhiệm vụ nhất định cho người dùng hoặc lập trình viên",
                "b. Nó kiểm soát vào/ra (chẳng hạn như thao tác đọc /ghi trên đĩa)",
                "c. Hệ thống quản lý cơ sở dữ liệu là một ví dụ về ứng dụng",
                "d. Nó có thể được tổ chức thành nhiều tập tin trên đĩa."
            ],
            "correctAnswer": "b. Nó kiểm soát vào/ra (chẳng hạn như thao tác đọc /ghi trên đĩa)"
        },
        {
            "question": "Câu Hỏi 39: Kỹ thuật phân trang không có hiện tượng phân mảnh ________.",
            "type": "multiple-choice",
            "options": [
                "a. trong và ngoài",
                "b. giữa",
                "c. trong",
                "d. ngoài"
            ],
            "correctAnswer": "d. ngoài"
        },
        {
            "question": "Câu Hỏi 40: Nếu tập các nguồn tài nguyên sẵn có cho một tiến trình là cố định trong suốt cuộc đời của nó thì miền của tiến trình đó là ____________",
            "type": "multiple-choice",
            "options": [
                "a. Động",
                "b. Các phương án trên đều sai",
                "c. Không phải tĩnh cũng không phải động",
                "d. Tĩnh"
            ],
            "correctAnswer": "d. Tĩnh"
        },
        {
            "question": "Câu Hỏi 41: Phát biểu nào KHÔNG ĐÚNG về thuật toán phát hiện bế tắc dựa trên biểu đồ?",
            "type": "multiple-choice",
            "options": [
                "a. Một cạnh từ đỉnh này sang đỉnh khác có nghĩa là một tiến trình đang chờ tài nguyên được giữ bởi tiến trình khác",
                "b. Các đỉnh của đồ thị biểu thị các tiến trình",
                "c. Các đỉnh của biểu đồ có thể biểu thị các tiến trình hoặc tài nguyên",
                "d. Nếu có một chu kỳ, hệ thống ở trạng thái bế tắc"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 42: Khi một chương trình truy cập một trang có ánh xạ trong không gian địa chỉ nhưng chưa được tải vào bộ nhớ vật lý thì:",
            "type": "multiple-choice",
            "options": [
                "a. lỗi phân đoạn (segmentation fault) xảy ra",
                "b. lỗi trang (page fault) xảy ra",
                "c. không có lỗi xảy ra",
                "d. lỗi nghiêm trọng xảy ra"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 43: Miền bảo vệ của một tiến trình bao gồm",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. Tập các quyền",
                "c. Tên đối tượng và tập các quyền",
                "d. Tên đối tượng"
            ],
            "correctAnswer": "c. Tên đối tượng và tập các quyền"
        },
        {
            "question": "Câu Hỏi 44: Các cuộc tấn công làm cho một máy tính hoặc mạng lưới tài nguyên không phục vụ được người dùng như dự kiến được gọi là __________",
            "type": "multiple-choice",
            "options": [
                "a. Tấn công nạn đói",
                "b. Tấn công đọc chậm",
                "c. Tấn công từ chối dịch vụ",
                "d. Tấn công giả mạo"
            ],
            "correctAnswer": "c. Tấn công từ chối dịch vụ"
        },
        {
            "question": "Câu Hỏi 45: Đâu là phát biểu ĐÚNG về bộ nhớ kết (associative memory)?",
            "type": "multiple-choice",
            "options": [
                "a. Đó là RAM",
                "b. Đó là bộ đệm được sử dụng trong tiến trình dịch địa chỉ",
                "c. Đó là bộ đệm hệ thống",
                "d. Đó là một phần của RAM"
            ],
            "correctAnswer": "b. Đó là bộ đệm được sử dụng trong tiến trình dịch địa chỉ"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Đâu KHÔNG PHẢI là thuật toán phân bổ động được sử dụng trong các hệ thống MVT và MFT?",
            "type": "multiple-choice",
            "options": [
                "a. First fit",
                "b. Worst fit",
                "c. Well fit",
                "d. Best fit"
            ],
            "correctAnswer": "c. Well fit"
        },
        {
            "question": "Câu Hỏi 2: Ánh xạ bộ nhớ ảo 2GB lên bộ nhớ vật lý có 256 frame, mỗi frame có kích thước 4 KB. Kích thước mỗi đơn vị bộ nhớ là 1 byte. Số bit cần dùng để đánh địa chỉ vật lý cho bộ nhớ chính ?",
            "type": "multiple-choice",
            "options": [
                "a. 20 bit",
                "b. 8 bit",
                "c. 19 bit",
                "d. 18 bit"
            ],
            "correctAnswer": "a. 20 bit"
        },
        {
            "question": "Câu Hỏi 3: Kỹ thuật nào sau đây giúp giảm thiểu tình trạng nhàn rỗi của CPU hoặc các thiết bị vào/ra khi hệ điều hành đơn vi xử lý ?",
            "type": "multiple-choice",
            "options": [
                "a. Đa chương trình",
                "b. Hệ điều hành phân tán",
                "c. sử dụng pipe",
                "d. Sử dụng hành đợi"
            ],
            "correctAnswer": "a. Đa chương trình"
        },
        {
            "question": "Câu Hỏi 4: Một ổ cứng có các thông số sau: Tốc độ trục quay 400 RPM, mỗi track chứa 12 sector, mỗi sector có dung lượng 1024 byte. Tốc độ truyền dữ liệu là:",
            "type": "multiple-choice",
            "options": [
                "a. 1024 Kbps",
                "b. 400 Kbps",
                "c. 800 Kbps",
                "d. 640 Kbps"
            ],
            "correctAnswer": "d. 640 Kbps"
        },
        {
            "question": "Câu Hỏi 5: Phát biểu nào KHÔNG ĐÚNG về phương pháp xử lý phục hồi bế tắc?",
            "type": "multiple-choice",
            "options": [
                "a. Khôi phục hệ thống từ bế tắc",
                "b. Không bao giờ cho phép hệ thống đi vào trạng thái bế tắc",
                "c. Sử dụng thuật toán phát hiện bế tắc",
                "d. Cho phép hệ thống đi vào trạng thái bế tắc"
            ],
            "correctAnswer": "b. Không bao giờ cho phép hệ thống đi vào trạng thái bế tắc"
        },
        {
            "question": "Câu Hỏi 6: Giả sử một hệ thống sử dụng cấp phát bộ nhớ liền kề với các thông tin sau: địa chỉ cơ sở là 13400; thanh ghi giới hạn là 1200; và một tham chiếu là 1246. Đâu là kết quả của Đơn vị quản lý bộ nhớ (MMU - Memory Management Unit)?",
            "type": "multiple-choice",
            "options": [
                "a. Một lỗi",
                "b. 14154",
                "c. 1446",
                "d. 14646"
            ],
            "correctAnswer": "a. Một lỗi"
        },
        {
            "question": "Câu Hỏi 7: Trong chế độ không chờ gửi:",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình gửi sẽ gửi thông điệp và rồi quay lại thực thi",
                "b. Cả ba phương án trên đều sai",
                "c. tiến trình gửi liên tục gửi cho đến khi thông điệp được nhận",
                "d. tiến trình gửi liên tục gửi cho đến khi nó nhận được một thông điệp"
            ],
            "correctAnswer": "a. tiến trình gửi sẽ gửi thông điệp và rồi quay lại thực thi"
        },
        {
            "question": "Câu Hỏi 8: Khi các thay đổi được lưu vào log thì giao dịch được coi là ________________",
            "type": "multiple-choice",
            "options": [
                "a. được chuyển vào bộ nhớ trong",
                "b. cập nhật",
                "c. hoàn thành",
                "d. bị lỗi"
            ],
            "correctAnswer": "c. hoàn thành"
        },
        {
            "question": "Câu Hỏi 9: Mô hình ma trận truy cập để xác thực người dùng có chứa________",
            "type": "multiple-choice",
            "options": [
                "a. Một hàm trả về kiểu của một đối tượng",
                "b. Một danh sách các miền",
                "c. Tất cả các phương án trên",
                "d. Một danh sách các đối tượng"
            ],
            "correctAnswer": "c. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 10: Đối với một miền, _______ là một danh sách các đối tượng cùng với các quyền cho phép các đối tượng đó.",
            "type": "multiple-choice",
            "options": [
                "a. Danh mục khả năng và danh sách truy cập",
                "b. Danh sách truy cập",
                "c. Danh mục khả năng",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "c. Danh mục khả năng"
        },
        {
            "question": "Câu Hỏi 11: Nếu tiến trình có sự có, hầu hết các hệ điều hành ghi các thông tin lỗi tại:",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. Tập tin mới",
                "c. Một tiến trình khác đang chạy",
                "d. Tập tin log"
            ],
            "correctAnswer": "d. Tập tin log"
        },
        {
            "question": "Câu Hỏi 12: Giả sử một hệ thống sử dụng thuật toán lập lịch SRTF, thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là: P1 (0,21), P2 (30,10), P3 (20,40), P4 (40,15). Hiển thị thứ tự mà các tiến trình được chạy (các tiến trình được viết liền nhau và ngăn cách bởi dấu phấy. VD: P1,P2,P3,P4)?",
            "type": "fill-in-the-blank",
            "correctAnswer": "P1,P3,P2,P4,P3"
        },
        {
            "question": "Câu Hỏi 13: Tại một thời điểm, giá trị của một semaphore đếm là 7. Sau khi thực thi 20 lần wait () và 15 lần signal() trên semaphore này, giá trị của semaphore sẽ là:",
            "type": "multiple-choice",
            "options": [
                "a. 12",
                "b. 42",
                "c. 7",
                "d. 2"
            ],
            "correctAnswer": "d. 2"
        },
        {
            "question": "Câu Hỏi 14: Giả sử một hệ thống sử dụng thuật toán lập lịch CPU FCFS, thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là: P1 (21), P2 (10), P3 (6). Tính tổng thời gian chờ của các tiến trình?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 15: Có 5 tiến trình P1, P2, P3, P4, P5 với thời gian chạy CPU (ms), thời gian đến (ms) và số hiệu ưu tiên như sau:\nThời gian chạy Số hiệu ưu tiên Thời gian đến\nP1 2 2 0\nP2 3 1 3\nP3 8 4 5\nP4 4 5 7\nP5 5 3 9\nSử dụng thuật toán SJF cho phép dừng. Khẳng định nào sau đây là đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Thời gian chờ của P4 dài hơn thời gian chờ của P3",
                "b. Thời gian chờ của P3 dài hơn thời gian chờ của P5",
                "c. Thời gian chờ của P2 dài hơn thời gian chờ của P3",
                "d. Thời gian phản hồi của P4 dài hơn thời gian phản hồi của P5"
            ],
            "correctAnswer": "b. Thời gian chờ của P3 dài hơn thời gian chờ của P5"
        },
        {
            "question": "Câu Hỏi 16: Hai tiến trình sau chia sẻ một biến chung X (khởi tạo bằng 5), và hai semaphore nhị phân S1, S2 (khởi tạo bằng 0):\nTiến trình A\n{int Y;\nwait(S1);\nA1: Y = X*2;\nsignal(S2);\nwait(S1);\nA2: X = Y;\n}\nTiến trình B\n{int Z;\nB1: Z=X+1;\nsignal(S1);\nwait(S2);\nB2: X=Z;\nsignal(S1);\n}\nThông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Giá trị cuối cùng của X sau khi thực thi xong hai tiến trình A và B sẽ là:",
            "type": "multiple-choice",
            "options": [
                "a. 6",
                "b. 11",
                "c. 10",
                "d. 12"
            ],
            "correctAnswer": "c. 10"
        },
        {
            "question": "Câu Hỏi 17: Mô hình tập hợp các trang đang làm việc thay thế trang được dựa trên",
            "type": "multiple-choice",
            "options": [
                "a. khu vực toàn cục",
                "b. khu vực địa phương",
                "c. truy cập ngẫu nhiên",
                "d. khu vực mô-đun"
            ],
            "correctAnswer": "b. khu vực địa phương"
        },
        {
            "question": "Câu Hỏi 18: Miền bảo vệ của một tiến trình bao gồm",
            "type": "multiple-choice",
            "options": [
                "a. Tên đối tượng và tập các quyền",
                "b. Tên đối tượng",
                "c. Tập các quyền",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "a. Tên đối tượng và tập các quyền"
        },
        {
            "question": "Câu Hỏi 19: Những điều kiện ĐÚNG của khu vực quan trọng là gì?",
            "type": "multiple-choice",
            "options": [
                "a. loại trừ lẫn nhau, tiến bộ, chờ đợi ràng buộc",
                "b. loại trừ lẫn nhau, bảo vệ, giới hạn sử dụng",
                "c. loại trừ lẫn nhau, chờ đợi ràng buộc, tiến triển",
                "d. loại trừ lẫn nhau, bảo vệ, chờ đợi ràng buộc"
            ],
            "correctAnswer": "c. loại trừ lẫn nhau, chờ đợi ràng buộc, tiến triển"
        },
        {
            "question": "Câu Hỏi 20: Tiến trình được phân thành các nhóm khác nhau trong:",
            "type": "multiple-choice",
            "options": [
                "a. thuật toán lập lịch ưu tiên",
                "b. thuật toán lập lịch Round Robin",
                "c. thuật toán lập lịch hàng đợi đa cấp",
                "d. thuật toán lập lịch SJF"
            ],
            "correctAnswer": "c. thuật toán lập lịch hàng đợi đa cấp"
        },
        {
            "question": "Câu Hỏi 21: Điều nào ĐÚNG về mục tiêu của điều kiện tiến triển của khu vực quan trọng?",
            "type": "multiple-choice",
            "options": [
                "a. Nó làm cho thuật toán phức tạp khi thực hiện",
                "b. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ",
                "c. Nó hỗ trợ sự ưu tiên của các tiến trình",
                "d. Nó làm cho việc sử dụng tài nguyên được chia sẻ một cách hiệu quả"
            ],
            "correctAnswer": "d. Nó làm cho việc sử dụng tài nguyên được chia sẻ một cách hiệu quả"
        },
        {
            "question": "Câu Hỏi 22: Một hệ thống sử dụng phân bổ theo chỉ mục 2 cấp với kích thước khối 4KB; kích thước con trỏ 4 byte. Tính kích thước tối đa (theo MB) của một tập tin mà hệ thống có thể tạo ra?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4096"
        },
        {
            "question": "Câu Hỏi 23: Hệ thống truyền thông điệp cho phép các tiến trình:",
            "type": "multiple-choice",
            "options": [
                "a. chia sẻ dữ liệu",
                "b. Định danh người gửi và người nhận thông điệp",
                "c. Trao đổi với nhau bằng cách chia sẻ dữ liệu",
                "d. Trao đổi với nhau mà không cần đến chia sẻ dữ liệu"
            ],
            "correctAnswer": "d. Trao đổi với nhau mà không cần đến chia sẻ dữ liệu"
        },
        {
            "question": "Câu Hỏi 24: Đâu là phát biểu KHÔNG ĐÚNG về thuật toán phân bổ bộ nhớ cho Đa chương trình với số nhiệm vụ thay đổi (MVT - Multiprogramming with a Variable number of Tasks )?",
            "type": "multiple-choice",
            "options": [
                "a. Có sự phân mảnh bộ nhớ",
                "b. Một tiến trình nằm trong vùng nhớ liền kề",
                "c. Bộ nhớ được chia trước thành các phân vùng",
                "d. Bộ nhớ không được phân chia trước thành các phân vùng"
            ],
            "correctAnswer": "c. Bộ nhớ được chia trước thành các phân vùng"
        },
        {
            "question": "Câu Hỏi 25: Thuật toán lập lịch CPU nào thường cho thời gian phản hồi trung bình nhỏ nhất:",
            "type": "multiple-choice",
            "options": [
                "a. Thứ tự ưu tiên cho phép dừng",
                "b. Round Robin với time quantum nhỏ",
                "c. SJF cho phép dừng",
                "d. FCFS"
            ],
            "correctAnswer": "b. Round Robin với time quantum nhỏ"
        },
        {
            "question": "Câu Hỏi 26: Chương trình sau đây bao gồm 3 tiến trình đang chạy và 3 semaphore nhị phân. Các semaphore được khởi tạo như sau S0 = 1, S1 = 0, S2 = 0.\nTiến trình P0 Tiến trình P1 Tiến trình P2\nwhile(true) { wait(S1); wait(S2);\nwait(S0); signal (S0); signal (S0);\nprint ‘0’;\nsignal(S1);\nsignal (S2);}\nBao nhiêu lần P0 sẽ in '0'?",
            "type": "multiple-choice",
            "options": [
                "a. Có ít nhất hai lần",
                "b. Chính xác một lần",
                "c. Chính xác ba lần",
                "d. Chính xác hai lần"
            ],
            "correctAnswer": "a. Có ít nhất hai lần"
        },
        {
            "question": "Câu Hỏi 27: Giả sử một hệ thống sử dụng phân bổ đĩa dạng danh sách liên kết. Đâu là lý do tại sao chúng ta không thể có quyền truy cập ngẫu nhiên?",
            "type": "multiple-choice",
            "options": [
                "a. Vì không thể biết vị trí của khối thứ n từ khối thứ nhất",
                "b. Vì thông tin về khối dữ liệu của tệp bị ẩn",
                "c. Vì các khối dữ liệu của một tệp không liền kề nhau",
                "d. Vì lý do bảo mật"
            ],
            "correctAnswer": "a. Vì không thể biết vị trí của khối thứ n từ khối thứ nhất"
        },
        {
            "question": "Câu Hỏi 28: Nếu hệ thống bị sự cố trước khi các thay đổi của một giao dịch được lưu vào log thì chúng sẽ được ________________",
            "type": "multiple-choice",
            "options": [
                "a. huỷ bỏ",
                "b. chuyển vào bộ nhớ trong",
                "c. lưu và thực hiện lại giao dịch",
                "d. lưu"
            ],
            "correctAnswer": "a. huỷ bỏ"
        },
        {
            "question": "Câu Hỏi 29: Đôi khi việc quản lý vùng trống cần dung lượng bộ nhớ:",
            "type": "multiple-choice",
            "options": [
                "a. lớn hơn so với kích thước vùng trống",
                "b. rất nhỏ",
                "c. lớn hơn so với bộ nhớ",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "a. lớn hơn so với kích thước vùng trống"
        },
        {
            "question": "Câu Hỏi 30: Trên ổ đĩa các khối 2,3,4,5,8,9,10,11,12,13 còn trống, các khối còn lại đã được sử dụng, bit map dùng để quản lý không gian trống của khối 0 đến 15 là _____________ ",
            "type": "multiple-choice",
            "options": [
                "a. 1000011000000111",
                "b. 0111100111110000",
                "c. 0011110011111100",
                "d. 1100001100001110"
            ],
            "correctAnswer": "c. 0011110011111100"
        },
        {
            "question": "Câu Hỏi 31: Nội dung nào sau đây không được lưu khi chuyển trạng giữa các tiến trình:",
            "type": "multiple-choice",
            "options": [
                "a. Bộ đếm chương trình",
                "b. Các thanh ghi thông thường",
                "c. TLB",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "c. TLB"
        },
        {
            "question": "Câu Hỏi 32: Một cách để đảm bảo điều kiện chờ đợi vòng tròn không xảy ra:",
            "type": "multiple-choice",
            "options": [
                "a. Cho phép tiến trình chỉ chờ đợi một nguồn tài nguyên tại một thời điểm",
                "b. Không bao giờ để một tiến trình có được nguồn tài nguyên đang nắm giữ bởi tiến trình khác",
                "c. Tạo một trình tự sử dụng các loại tài nguyên",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "c. Tạo một trình tự sử dụng các loại tài nguyên"
        },
        {
            "question": "Câu Hỏi 33: Có 5 tiến trình P1, P2, P3, P4, P5 với thời gian chạy CPU (ms), thời gian đến (ms) như sau:\nThời gian chạy Thời gian đến\nP1 3 0\nP2 12 4\nP3 4 6\nP4 7 8\nP5 3 11\nSử dụng thuật toán SJF cho phép dừng. Khẳng định nào sau đây là đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Thời gian chờ của P2 dài hơn thời gian chờ của P4",
                "b. Thời gian chờ của P2 và thời gian chờ của P5 giống nhau",
                "c. Thời gian chờ của P3 dài hơn thời gian chờ của P2",
                "d. Thời phản hồi của P3 dài hơn thời phản hồi của P4"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 34: Ý nào KHÔNG ĐÚNG về thuật toán lập lịch CPU Shortest Job First (SJF) ?",
            "type": "multiple-choice",
            "options": [
                "a. Một tên khác của thuật toán là Shortest Job Next (SJN)",
                "b. Đây cũng là một thuật toán lập lịch ưu tiên",
                "c. Tiến trình ngắn nhất sẽ được chọn để chạy",
                "d. Thuật toán lập lịch CPU Shortest remaining time first (SRTF) giống như SJF"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 35: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch SCAN là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196 --> 12",
                "b. 50 --> 12 --> 0 -->199 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "c. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "d. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196"
            ],
            "correctAnswer": "d. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196"
        },
        {
            "question": "Câu Hỏi 36: Đâu là phát biểu KHÔNG ĐÚNG về đồ thị phân bổ tài nguyên (RAG - Resource Allocation Graph)?",
            "type": "multiple-choice",
            "options": [
                "a. Nếu một chu kỳ tồn tại và mỗi tài nguyên được chia sẻ có nhiều thể hiện, có thể có một bế tắc",
                "b. Nếu một chu kỳ tồn tại và mỗi tài nguyên được chia sẻ chỉ có một thể hiện, sẽ có một bế tắc",
                "c. Nếu một chu kỳ tồn tại và mỗi tài nguyên được chia sẻ có nhiều thể hiện, sẽ có một bế tắc",
                "d. Không có bế tắc nếu không có chu kỳ tồn tại"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 37: Trong môi trường đa nhiệm, khi một tiến trình luôn bị từ chối cho phép dùng tài nguyên nó được gọi là:",
            "type": "multiple-choice",
            "options": [
                "a. đảo ngược",
                "b. lão hóa",
                "c. nạn đói",
                "d. bế tắc"
            ],
            "correctAnswer": "c. nạn đói"
        },
        {
            "question": "Câu Hỏi 38: Đâu là một trong các chức năng của hệ điều hành ?",
            "type": "multiple-choice",
            "options": [
                "a. cả ba phương án trên",
                "b. quản lý tài nguyên",
                "c. quản lý bộ nhớ",
                "d. khôi phục lỗi"
            ],
            "correctAnswer": "a. cả ba phương án trên"
        },
        {
            "question": "Câu Hỏi 39: Trong mã hóa bất đối xứng",
            "type": "multiple-choice",
            "options": [
                "a. Khoá mã hóa và khoá giải mã giống nhau",
                "b. Khoá mã hóa và khoá giải mã khác nhau",
                "c. Không cần khóa để mã hóa và giải mã",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "b. Khoá mã hóa và khoá giải mã khác nhau"
        },
        {
            "question": "Câu Hỏi 40: Ý nào KHÔNG ĐÚNG về việc không cho phép dừng trong các thuật toán lập lịch CPU?",
            "type": "multiple-choice",
            "options": [
                "a. Tiến trình hiện tại sẽ luôn được chạy cho đến khi chấm dứt",
                "b. FIFO là một thuật toán lập lịch không cho phép dừng",
                "c. Tiến trình hiện tại có thể được chuyển sang trạng waiting",
                "d. Chỉ có tiến trình hiện tại có thể sử dụng CPU"
            ],
            "correctAnswer": "c. Tiến trình hiện tại có thể được chuyển sang trạng waiting"
        },
        {
            "question": "Câu Hỏi 41: Khi tỷ lệ lỗi trang thấp:",
            "type": "multiple-choice",
            "options": [
                "a. thời gian truy cập hiệu quả tăng",
                "b. thời gian truy cập hiệu quả giảm",
                "c. thời gian hoàn thành tăng",
                "d. thời gian hoàn thành tăng và thời gian truy cập hiệu quả tăng"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 42: Chức năng chính của chương trình biên dịch dòng lệnh là:",
            "type": "multiple-choice",
            "options": [
                "a. Cung cấp các giao diện giữa các API và chương trình ứng dụng",
                "b. Xử lý các tập tin trong hệ điều hành",
                "c. Các phương án trên đều sai",
                "d. Nhận và thực thi lệnh tiếp theo của người dùng"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 43: Điều kiện loại trừ lẫn nhau có thể được đảm bảo bằng cách sử dụng _________.",
            "type": "multiple-choice",
            "options": [
                "a. Khoá mutex",
                "b. Cả ba phương án trên đều sai",
                "c. Semaphore nhị phân",
                "d. Khoá mutex và Semaphore nhị phân"
            ],
            "correctAnswer": "d. Khoá mutex và Semaphore nhị phân"
        },
        {
            "question": "Câu Hỏi 44: Đâu là lý do tại sao một tiến trình có thể chạy khi chỉ một phần của nó được tải vào bộ nhớ?",
            "type": "multiple-choice",
            "options": [
                "a. Bởi vì chúng có thể chỉ ra các câu lệnh nào để chạy",
                "b. Vì các câu lệnh liên quan luôn nằm trong cùng một nhóm",
                "c. Vì chỉ có một lệnh được thực thi tại một thời điểm",
                "d. Bởi vì các câu lệnh của một tiến trình là độc lập"
            ],
            "correctAnswer": "c. Vì chỉ có một lệnh được thực thi tại một thời điểm"
        },
        {
            "question": "Câu Hỏi 45: Thuật toán First fit và Best fit chịu ảnh hưởng của _______________",
            "type": "multiple-choice",
            "options": [
                "a. Nạn đói",
                "b. Hiện tượng phân mảnh trong",
                "c. Cả ba phương án trên",
                "d. Hiện tượng phân mảnh ngoài"
            ],
            "correctAnswer": "d. Hiện tượng phân mảnh ngoài"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Một số thông tin của thư mục được lưu trên bộ nhớ trong hoặc cache để________________",
            "type": "multiple-choice",
            "options": [
                "a. làm đầy bộ cache",
                "b. tăng tốc độ truy cập",
                "c. giảm không gian trống của bộ nhớ ngoài",
                "d. tăng không gian trống của bộ nhớ ngoài"
            ],
            "correctAnswer": "b. tăng tốc độ truy cập"
        },
        {
            "question": "Câu Hỏi 2: Trường hợp nào KHÔNG phù hợp để sử dụng counting semaphore?",
            "type": "multiple-choice",
            "options": [
                "a. Tài nguyên được chia sẻ có một số thể hiện",
                "b. Tài nguyên được chia sẻ có hai thể hiện",
                "c. Tài nguyên được chia sẻ có 3 thể hiện",
                "d. Tài nguyên được chia sẻ chỉ có một thể hiện (instance)"
            ],
            "correctAnswer": "d. Tài nguyên được chia sẻ chỉ có một thể hiện (instance)"
        },
        {
            "question": "Câu Hỏi 3: Điều nào ĐÚNG về điều kiện chờ đợi giới hạn của khu vực quan trọng?",
            "type": "multiple-choice",
            "options": [
                "a. Nó sử dụng tài nguyên được chia sẻ một cách hiệu quả",
                "b. Nó đảm bảo rằng không có tiến trình nào không bao giờ có thể vào khu vực quan trọng của nó hoặc đảm bảo tính công bằng giữa các tiến trình",
                "c. Nó hỗ trợ sự ưu tiên của các tiến trình",
                "d. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ"
            ],
            "correctAnswer": "b. Nó đảm bảo rằng không có tiến trình nào không bao giờ có thể vào khu vực quan trọng của nó hoặc đảm bảo tính công bằng giữa các tiến trình"
        },
        {
            "question": "Câu Hỏi 4: Semaphore dùng để _____________________",
            "type": "multiple-choice",
            "options": [
                "a. đồng bộ hoá các tài nguyên quan trọng nhằm tránh bế tắc",
                "b. đồng bộ hoá các tài nguyên quan trọng nhằm tránh hiện tượng tranh chấp",
                "c. quản lý bộ nhớ",
                "d. thực thi nhiện vụ vào/ra dữ liệu"
            ],
            "correctAnswer": "b. đồng bộ hoá các tài nguyên quan trọng nhằm tránh hiện tượng tranh chấp"
        },
        {
            "question": "Câu Hỏi 5: Đâu là phát biểu ĐÚNG về thuật toán banker?",
            "type": "multiple-choice",
            "options": [
                "a. Nó tìm ra trạng thái an toàn của hệ thống",
                "b. Nó không phát hiện trạng thái không an toàn của hệ thống",
                "c. Nó tìm ra trình tự an toàn của hệ thống khi một tiến trình yêu cầu tài nguyên",
                "d. Nó phát hiện bế tắc trong hệ thống"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 6: Đâu không phải là phương pháp cấp phát không gian trên ổ đĩa:",
            "type": "multiple-choice",
            "options": [
                "a. liên tục",
                "b. liên kết",
                "c. chỉ mục",
                "d. băm"
            ],
            "correctAnswer": "d. băm"
        },
        {
            "question": "Câu Hỏi 7: Round Robin là phiên bản cho phép dừng của thuật toán nào sau đây ?",
            "type": "multiple-choice",
            "options": [
                "a. SJF",
                "b. LJF (thời gian ngắn nhất trước)",
                "c. FCFS",
                "d. Priority (Thứ tự ưu tiên)"
            ],
            "correctAnswer": "c. FCFS"
        },
        {
            "question": "Câu Hỏi 8: Một hệ thống sử dụng phân bổ đĩa dạng danh sách liên kết với kích thước khối là 2KB; kích thước con trỏ 4 byte. Giả sử một tệp có kích thước 15,5 MB. Tính phần offset trong khối chứa dữ liệu ở vị trí tệp 15,25KB?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 9: Tiến trình xảy ra Thrashing khi:",
            "type": "multiple-choice",
            "options": [
                "a. Nó dành nhiều thời gian thực thi hơn thời gian chuyển trang ra/vào",
                "b. Nó dành nhiều thời gian chuyển trang ra/vào hơn thời gian thực thi",
                "c. Không được cấp phát bộ nhớ trong",
                "d. Tất cả các phương án trên đều sai"
            ],
            "correctAnswer": "b. Nó dành nhiều thời gian chuyển trang ra/vào hơn thời gian thực thi"
        },
        {
            "question": "Câu Hỏi 10: Để bảo vệ hệ thống, một tiến trình nên được truy cập__________",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các nguồn tài nguyên",
                "b. Một số ít tài nguyên nhưng việc cấp quyền là không cần thiết",
                "c. Tất cả các phương án trên",
                "d. Chỉ những nguồn tài nguyên mà nó được cấp quyền"
            ],
            "correctAnswer": "d. Chỉ những nguồn tài nguyên mà nó được cấp quyền"
        },
        {
            "question": "Câu Hỏi 11: Điều nào KHÔNG ĐÚNG về truyền thông giữa các tiến trình (IPC - Inter-process communication)?",
            "type": "multiple-choice",
            "options": [
                "a. IPC có thể được sử dụng để đồng bộ hóa",
                "b. IPC có thể được sử dụng để xử lý khu vực quan trọng",
                "c. IPC có thể được sử dụng để quản lý bộ nhớ",
                "d. IPC có thể được sử dụng để truyền thông dữ liệu"
            ],
            "correctAnswer": "c. IPC có thể được sử dụng để quản lý bộ nhớ"
        },
        {
            "question": "Câu Hỏi 12: Thuật toán lập lịch CPU nào thường cho thời gian phản hồi trung bình nhỏ nhất:",
            "type": "multiple-choice",
            "options": [
                "a. Thứ tự ưu tiên cho phép dừng",
                "b. SJF cho phép dừng",
                "c. Round Robin với time quantum nhỏ",
                "d. FCFS"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 13: Semaphore được sử dụng chủ yếu để:",
            "type": "multiple-choice",
            "options": [
                "a. Bảo vệ hệ thống",
                "b. Tạo các hàm hệ thống",
                "c. Cả ba phương án trên đều sai",
                "d. Làm phương tiện cho truyền thông giữa các tiến trình"
            ],
            "correctAnswer": "d. Làm phương tiện cho truyền thông giữa các tiến trình"
        },
        {
            "question": "Câu Hỏi 14: Đâu không phải là một cuộc tấn công, nhưng nó tìm kiếm các lỗ hổng để tấn công?",
            "type": "multiple-choice",
            "options": [
                "a. Quét cổng",
                "b. Từ chối dịch vụ",
                "c. Vi phạm truy cập bộ nhớ",
                "d. Tái chế"
            ],
            "correctAnswer": "a. Quét cổng"
        },
        {
            "question": "Câu Hỏi 15: Nếu chúng ta đảm bảo hệ thống không bao giờ rơi vào bế tắc, đó là loại phương pháp xử lý bế tắc này?",
            "type": "multiple-choice",
            "options": [
                "a. Ngăn chặn bế tắc",
                "b. Phát hiện bế tắc",
                "c. Bỏ qua bế tắc",
                "d. Phục hồi bế tắc"
            ],
            "correctAnswer": "a. Ngăn chặn bế tắc"
        },
        {
            "question": "Câu Hỏi 16: Nếu tất cả các tiến trình liên tục vào/ra dữ liệu thì hàng đợi sẵn sàng sẽ luôn......., bộ lập lịch ngắn hạn sẽ làm việc ........",
            "type": "multiple-choice",
            "options": [
                "a. đầy, ít",
                "b. đầy, rất nhiều",
                "c. trống rỗng, ít",
                "d. trống rỗng, rất nhiều"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 17: Một tiến trình có thể bị dừng do:",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các phương án trên",
                "b. Bị lỗi nghiêm trọng",
                "c. Bị giết chết bởi một tiến trình khác",
                "d. Thực thi kết thúc bình thường"
            ],
            "correctAnswer": "Not answered"
        },
        {
            "question": "Câu Hỏi 18: Mô tả ĐÚNG của thư mục là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Một thư mục là một phân vùng đĩa",
                "b. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó",
                "c. Một thư mục lưu trữ cả FCB và dữ liệu của tệp",
                "d. Một thư mục lưu trữ tất cả dữ liệu của các tập tin của nó"
            ],
            "correctAnswer": "b. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó"
        },
        {
            "question": "Câu Hỏi 19: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67 Giả sử thuật toán lập lịch cho ổ đĩa SSTF được sử dụng, hãy hiển thị thứ tự của các yêu cầu được phục vụ? (Các yêu cầu được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy).",
            "type": "fill-in-the-blank",
            "correctAnswer": "65,67,37,14,98,122,124,183"
        },
        {
            "question": "Câu Hỏi 20: Mục tiêu ĐÚNG của điều kiện tiến triển của khu vực quan trọng là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Nó làm cho việc thực hiện HĐH đơn giản hơn",
                "b. Nó hỗ trợ sự ưu tiên của các tiến trình",
                "c. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ",
                "d. Nó làm giảm thời gian chờ đợi của các tiến trình được yêu cầu"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 21: Đâu là một trong các chức năng của hệ điều hành ?",
            "type": "multiple-choice",
            "options": [
                "a. quản lý tài nguyên",
                "b. cả ba phương án trên",
                "c. quản lý bộ nhớ",
                "d. khôi phục lỗi"
            ],
            "correctAnswer": "b. cả ba phương án trên"
        },
        {
            "question": "Câu Hỏi 22: Kỹ thuật phân trang không có hiện tượng phân mảnh ________.",
            "type": "multiple-choice",
            "options": [
                "a. trong và ngoài",
                "b. trong",
                "c. ngoài",
                "d. giữa"
            ],
            "correctAnswer": "c. ngoài"
        },
        {
            "question": "Câu Hỏi 23: Hai tiến trình sau chia sẻ một semaphore nhị phân S (khởi tạo bằng 0):\nTiến trình P1\n{ wait (S); print (\"1\"); print (\"2\"); }\nTiến trình P2\n{ print (\"3\"); print (\"4\"); signal (S);}\nThông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Chuỗi kết quả in ra màn hình sau khi cả hai tiến trình kết thúc thực thi ?",
            "type": "multiple-choice",
            "options": [
                "a. 3421",
                "b. 3412",
                "c. 1324",
                "d. 1234"
            ],
            "correctAnswer": "b. 3412"
        },
        {
            "question": "Câu Hỏi 24: Đâu là phát biểu KHÔNG ĐÚNG về sự phân mảnh?",
            "type": "multiple-choice",
            "options": [
                "a. Có hai loại: phân mảnh bên trong và bên ngoài",
                "b. Sự phân mảnh dẫn đến việc sử dụng bộ nhớ kém hiệu quả",
                "c. Không có sự phân mảnh trên ổ đĩa",
                "d. Sự phân mảnh có thể dẫn đến tình huống một tiến trình không thể chạy mặc dù tổng bộ nhớ trống lớn hơn kích thước tiến trình"
            ],
            "correctAnswer": "c. Không có sự phân mảnh trên ổ đĩa"
        },
        {
            "question": "Câu Hỏi 25: Trong thuật toán lập lịch đa cấp phản hồi,",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác",
                "b. tiến trình không thể chuyển đổi giữa các cấp hàng đợi",
                "c. tiến trình liên tục gửi thông điệp cho hệ thống",
                "d. tiến trình không bị phân thành các nhóm khác nhau"
            ],
            "correctAnswer": "a. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác"
        },
        {
            "question": "Câu Hỏi 26: Nếu không có frame trống, bắt buộc có _____ thao tác chuyển trang.",
            "type": "multiple-choice",
            "options": [
                "a. một",
                "b. hai",
                "c. ba",
                "d. bốn"
            ],
            "correctAnswer": "b. hai"
        },
        {
            "question": "Câu Hỏi 27: Phát biểu nào ĐÚNG về mục tiêu của điều kiện loại trừ lẫn nhau của khu vực quan trọng?",
            "type": "multiple-choice",
            "options": [
                "a. Nó hỗ trợ sự ưu tiên của các tiến trình",
                "b. Nó làm cho việc thực hiện của hệ điều hành đơn giản hơn",
                "c. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ",
                "d. Nó cố gắng sử dụng tài nguyên được chia sẻ một cách hiệu quả hơn"
            ],
            "correctAnswer": "c. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ"
        },
        {
            "question": "Câu Hỏi 28: Câu nào sau đây không đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Nhân (kernel) bao gồm các mô-đun khác nhau không thể được nạp khi hệ điều hành đang chạy",
                "b. Nhân (kernel) ở trong bộ nhớ trong suốt phiên làm việc của máy tính",
                "c. Nhân (kernel) là chương trình tạo nên lõi trung tâm của hệ điều hành",
                "d. Nhân (kernel) là phần đầu tiên của hệ điều hành để nạp vào bộ nhớ lúc khởi động"
            ],
            "correctAnswer": "a. Nhân (kernel) bao gồm các mô-đun khác nhau không thể được nạp khi hệ điều hành đang chạy"
        },
        {
            "question": "Câu Hỏi 29: Đâu là phát biểu ĐÚNG về tình huống tương tranh (race condition)?",
            "type": "multiple-choice",
            "options": [
                "a. Nó xảy ra khi nhiều tiến trình đồng thời thao tác với một tài nguyên được chia sẻ",
                "b. Nó xảy ra khi có nhiều tiến trình trong hệ thống",
                "c. Nó xảy ra khi nhiều tiến trình thao tác tuần tự một tài nguyên được chia sẻ",
                "d. Nó xảy ra ngay cả trong trường hợp chỉ có một tiến trình"
            ],
            "correctAnswer": "a. Nó xảy ra khi nhiều tiến trình đồng thời thao tác với một tài nguyên được chia sẻ"
        },
        {
            "question": "Câu Hỏi 30: Đâu là phát biểu KHÔNG ĐÚNG về bảo vệ bộ nhớ trong phân trang?",
            "type": "multiple-choice",
            "options": [
                "a. Nếu bit là valid, trang tương ứng đã được tải vào bộ nhớ",
                "b. Mỗi mục trong bảng trang có một bit valid/invalid",
                "c. Nếu bit là invalid , trang tương ứng KHÔNG được tải vào bộ nhớ",
                "d. Nếu bit là NULL, trang tương ứng KHÔNG được tải vào bộ nhớ"
            ],
            "correctAnswer": "d. Nếu bit là NULL, trang tương ứng KHÔNG được tải vào bộ nhớ"
        },
        {
            "question": "Câu Hỏi 31: Giả sử một hệ thống sử dụng phân bổ đĩa dạng danh sách liên kết. Đâu là lý do tại sao chúng ta không thể có quyền truy cập ngẫu nhiên?",
            "type": "multiple-choice",
            "options": [
                "a. Vì không thể biết vị trí của khối thứ n từ khối thứ nhất",
                "b. Vì các khối dữ liệu của một tệp không liền kề nhau",
                "c. Vì lý do bảo mật",
                "d. Vì thông tin về khối dữ liệu của tệp bị ẩn"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 32: Trong mã hóa bất đối xứng",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. Không cần khóa để mã hóa và giải mã",
                "c. Khoá mã hóa và khoá giải mã giống nhau",
                "d. Khoá mã hóa và khoá giải mã khác nhau"
            ],
            "correctAnswer": "d. Khoá mã hóa và khoá giải mã khác nhau"
        },
        {
            "question": "Câu Hỏi 33: Sự khác biệt chính giữa bộ lập lịch ngắn hạn và bộ lập lịch dài hạn là:",
            "type": "multiple-choice",
            "options": [
                "a. Loại tiến trình mà chúng lên lịch",
                "b. Tần số thực thi",
                "c. Độ dài của hàng đợi",
                "d. Cả ba phương án trên đều sai"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 34: Giả sử một hệ thống sử dụng thuật toán lập lịch không cho phép dừng SJF, thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là:P1 (0,7), P2 (2,4), P3 (4,1), P4 (5,5). Tính thời gian quay vòng của P3?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4"
        },
        {
            "question": "Câu Hỏi 35: Kỹ thuật nào sau đây giúp giảm thiểu tình trạng nhàn rỗi của CPU hoặc các thiết bị vào/ra khi hệ điều hành đơn vi xử lý ?",
            "type": "multiple-choice",
            "options": [
                "a. Hệ điều hành phân tán",
                "b. Đa chương trình",
                "c. Sử dụng hành đợi",
                "d. sử dụng pipe"
            ],
            "correctAnswer": "b. Đa chương trình"
        },
        {
            "question": "Câu Hỏi 36: Điều kiện loại trừ lẫn nhau có thể được đảm bảo bằng cách sử dụng _________.",
            "type": "multiple-choice",
            "options": [
                "a. Khoá mutex",
                "b. Cả ba phương án trên đều sai",
                "c. Khoá mutex và Semaphore nhị phân",
                "d. Semaphore nhị phân"
            ],
            "correctAnswer": "c. Khoá mutex và Semaphore nhị phân"
        },
        {
            "question": "Câu Hỏi 37: Tiến trình được phân thành các nhóm khác nhau trong:",
            "type": "multiple-choice",
            "options": [
                "a. thuật toán lập lịch hàng đợi đa cấp",
                "b. thuật toán lập lịch SJF",
                "c. thuật toán lập lịch Round Robin",
                "d. thuật toán lập lịch ưu tiên"
            ],
            "correctAnswer": "a. thuật toán lập lịch hàng đợi đa cấp"
        },
        {
            "question": "Câu Hỏi 38: Một hệ thống sử dụng phương pháp cấp phát bộ nhớ theo tỷ lệ. Có 3 tiến trình trong hệ thống là P1, P2 và P3 với kích thước lần lượt là 138KB, 96KB và 164KB. Giả sử kích thước bộ nhớ là 180KB và kích thước khung là 2KB, hãy tính số lượng khung được phân bổ cho các tiến trình P1, P2, P3? (Số khung của các tiến trình P1, P2, P3 được viết liền nhau, ngăn cách nhau bởi dấu phẩy. VD: 1,2,3)",
            "type": "fill-in-the-blank",
            "correctAnswer": "31,22,37"
        },
        {
            "question": "Câu Hỏi 39: Trong UNIX, chuyển đổi miền được thực hiện thông qua",
            "type": "multiple-choice",
            "options": [
                "a. Hệ thống tập tin",
                "b. Các phương án trên đều sai",
                "c. Người dùng",
                "d. Người quản trị hệ thống"
            ],
            "correctAnswer": "a. Hệ thống tập tin"
        },
        {
            "question": "Câu Hỏi 40: Bộ phận hoán đổi (swapper) làm việc với ___________, trong khi bộ phân phân trang làm việc với _______ của một tiến trình.",
            "type": "multiple-choice",
            "options": [
                "a. toàn bộ tiến trình, các bộ phận",
                "b. tất cả các trang của một tiến trình, phân đoạn",
                "c. Các phương án trên đều sai",
                "d. toàn bộ tiến trình, các trang"
            ],
            "correctAnswer": "Not answered"
        },
        {
            "question": "Câu Hỏi 41: Nếu không gian được cấp phát cho một tập tin quá ít,",
            "type": "multiple-choice",
            "options": [
                "a. tập tin không thể mở được",
                "b. tập tin không thể mở rộng được",
                "c. sẽ không có bất kỳ không gian cho dữ liệu vì khối điều khiển tập tin chiếm tất cả",
                "d. tập tin sẽ không làm việc"
            ],
            "correctAnswer": "b. tập tin không thể mở rộng được"
        },
        {
            "question": "Câu Hỏi 42: Trong cấp phát liên kết, ______________________",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên đều sai",
                "b. Mỗi tập tin là một danh sách liên kết của các khối trên ổ đĩa",
                "c. Mỗi tập tin được lưu trên một tập các khối liên tục trên ổ đĩa",
                "d. Tất cả các con trỏ đến các khối nằm rải rác được đặt trong một khu vực"
            ],
            "correctAnswer": "b. Mỗi tập tin là một danh sách liên kết của các khối trên ổ đĩa"
        },
        {
            "question": "Câu Hỏi 43: Hệ điều hành cung cấp phương thức nào để truy cập đến các dịch vụ của hệ điều hành:",
            "type": "multiple-choice",
            "options": [
                "a. Các lệnh assembly",
                "b. Các hàm hệ thống",
                "c. API",
                "d. Các thư viện"
            ],
            "correctAnswer": "b. Các hàm hệ thống"
        },
        {
            "question": "Câu Hỏi 44: Đâu KHÔNG PHẢI là cấu trúc hệ điều hành?",
            "type": "multiple-choice",
            "options": [
                "a. Vi nhân (micro-kernel)",
                "b. Mô-đun",
                "c. Phân lớp (layered)",
                "d. Hướng đối tượng (Object-oriented)"
            ],
            "correctAnswer": "d. Hướng đối tượng (Object-oriented)"
        },
        {
            "question": "Câu Hỏi 45: Đâu là phát biểu KHÔNG ĐÚNG về bảo vệ bộ nhớ trong phân trang?",
            "type": "multiple-choice",
            "options": [
                "a. Nó đảm bảo tham chiếu luôn trỏ đến một vị trí trong bộ nhớ",
                "b. Nó đảm bảo tiến trình không bao giờ tham chiếu đến vị trí bộ nhớ không hợp lệ",
                "c. Nó đảm bảo một tiến trình luôn truy cập vào các vị trí trong không gian bộ nhớ của nó",
                "d. Nó đảm bảo trang tương ứng với một tham chiếu được tải vào bộ nhớ trước khi truy cập"
            ],
            "correctAnswer": "a. Nó đảm bảo tham chiếu luôn trỏ đến một vị trí trong bộ nhớ"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Có 4 tiến trình P1, P2, P3, P4 và 2 kiểu tài nguyên A, B. Tại thời điểm t, trạng thái của hệ thống như sau:\nĐã cấp phát Yêu cầu\nA B A B\nP1 1 3 1 2\nP2 4 1 4 3\nP3 1 2 1 7\nP4 2 0 5 1\nA còn 2 đơn vị tài nguyên, B còn 4 đơn vị tài nguyên. Hệ thống đang ở trạng thái nào:",
            "type": "multiple-choice",
            "options": [
                "a. An toàn",
                "b. Bế tắc",
                "c. Được bảo vệ",
                "d. Không có bế tắc"
            ],
            "correctAnswer": "d. Không có bế tắc"
        },
        {
            "question": "Câu Hỏi 2: Mục tiêu TỐT NHẤT của mirroring trong RAID (Redundant Array of Inexpensive Disks) là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Để tăng dung lượng đĩa",
                "b. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng",
                "c. Để tăng kích thước tệp",
                "d. Để tăng tốc độ vào ra (I/O speed)"
            ],
            "correctAnswer": "b. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng"
        },
        {
            "question": "Câu Hỏi 3: Nhược điểm của thư mục có cấu trúc danh sách tuyến tính là_______________",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên",
                "b. Kích thước của danh sách tuyến tính trong bộ nhớ",
                "c. Không tin cậy",
                "d. Tìm kiếm tập tin một cách tuần tự"
            ],
            "correctAnswer": "d. Tìm kiếm tập tin một cách tuần tự"
        },
        {
            "question": "Câu Hỏi 4: Để tránh xảy ra điều kiện không dừng, nếu một tiến trình đang nắm giữ một số tài nguyên và yêu cầu một nguồn tài nguyên không thể ngay lập tức cấp phát cho nó:",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình tiếp tục thực thi mà không được cấp phát nguồn tài nguyên nó cần",
                "b. tiến trình liên tục gửi yêu cầu cho đến khi tài nguyên được cấp phát cho nó",
                "c. thì tất cả các tài nguyên hiện đang bị giữ sẽ được giải phóng",
                "d. thì tiến trình chờ đợi các tài nguyên sẽ được cấp phát cho nó"
            ],
            "correctAnswer": "c. thì tất cả các tài nguyên hiện đang bị giữ sẽ được giải phóng"
        },
        {
            "question": "Câu Hỏi 5: Ba tiến trình sau chia sẻ semaphore nhị phân S1, S2, S3 (khởi tạo bằng 0):\nTiến trình P1\n{ wait (S1); print (\"A\"); signal (S2);}\nTiến trình P2\n{ wait (S2); print (\"B\"); signal (S3);}\nTiến trình P3\n{ signal (S3); print (\"C\"); signal (S1);}\nThông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Chuỗi kết quả in ra màn hình sau khi cả ba tiến trình kết thúc thực thi ?",
            "type": "multiple-choice",
            "options": [
                "a. BCA",
                "b. ABC",
                "c. BAC",
                "d. CAB"
            ],
            "correctAnswer": "d. CAB"
        },
        {
            "question": "Câu Hỏi 6: Khi các thay đổi được lưu vào log thì giao dịch được coi là ________________",
            "type": "multiple-choice",
            "options": [
                "a. được chuyển vào bộ nhớ trong",
                "b. hoàn thành",
                "c. cập nhật",
                "d. bị lỗi"
            ],
            "correctAnswer": "b. hoàn thành"
        },
        {
            "question": "Câu Hỏi 7: Nguyên tắc nào mà các chương trình, người sử dụng và hệ thống chỉ được cấp đủ quyền để thực hiện nhiệm vụ của chúng?",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. Nguyên tắc quyền tối thiểu",
                "c. Nguyên tắc lập lịch tiến trình",
                "d. Nguyên tắc của hệ điều hành"
            ],
            "correctAnswer": "b. Nguyên tắc quyền tối thiểu"
        },
        {
            "question": "Câu Hỏi 8: Chọn mô tả đúng nhất về những gì một máy tính thuần túy (một máy tính không có hệ điều hành) có thể làm",
            "type": "multiple-choice",
            "options": [
                "a. Cung cấp các chương trình ứng dụng cho người dùng",
                "b. Cung cấp ứng dụng và kết nối mạng cho người dùng",
                "c. Cung cấp giao diện người dùng đồ họa",
                "d. CPU có thể thực hiện tính toán số học, phát hiện các thiết bị có sẵn như RAM, đĩa, ..."
            ],
            "correctAnswer": "d. CPU có thể thực hiện tính toán số học, phát hiện các thiết bị có sẵn như RAM, đĩa, ..."
        },
        {
            "question": "Câu Hỏi 9: Đâu là phát biểu ĐÚNG về biến số Work trong thuật toán banker?",
            "type": "multiple-choice",
            "options": [
                "a. Nó lưu trữ số lượng các thể hiện tài nguyên có sẵn khi một tiến trình bị chấm dứt",
                "b. Nó lưu trữ số lượng phiên bản tài nguyên của mỗi tiến trình",
                "c. Đây là một biến dư thừa",
                "d. Nó lưu trữ trạng thái của hệ thống"
            ],
            "correctAnswer": "a. Nó lưu trữ số lượng các thể hiện tài nguyên có sẵn khi một tiến trình bị chấm dứt"
        },
        {
            "question": "Câu Hỏi 10: Trong truyền thông giữa các tiến trình, vùng đệm với kích thước 0:",
            "type": "multiple-choice",
            "options": [
                "a. Người gửi gửi liên tục, và các thông điệp không đợi trong vùng đệm",
                "b. Vùng đệm có thể lưu ít nhất một thông điệp",
                "c. Người nhận định kỳ lấy thông điệp từ vùng đệm",
                "d. Vùng đệm không chứa thông điệp nào và người gửi bị chặn cho đến khi thông điệp được nhận"
            ],
            "correctAnswer": "d. Vùng đệm không chứa thông điệp nào và người gửi bị chặn cho đến khi thông điệp được nhận"
        },
        {
            "question": "Câu Hỏi 11: Mục tiêu TỐT NHẤT của stripping trong RAID (Redundant Array of Inexpensive Disks) là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Để tăng dung lượng đĩa",
                "b. Để tăng tốc độ vào ra (I/O speed)",
                "c. Để tăng kích thước tệp",
                "d. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng"
            ],
            "correctAnswer": "b. Để tăng tốc độ vào ra (I/O speed)"
        },
        {
            "question": "Câu Hỏi 12: Có 5 tiến trình P1, P2, P3, P4, P5 với thời gian chạy CPU (ms), thời gian đến (ms) như sau:\nThời gian chạy Thời gian đến\nP1 3 0\nP2 12 4\nP3 4 6\nP4 7 8\nP5 3 11\nSử dụng thuật toán FCFS. Khẳng định nào sau đây là đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Hiện tượng đoàn hộ tống xảy ra với tiến trình P4",
                "b. Hiện tượng đoàn hộ tống xảy ra với tiến trình P1",
                "c. Hiện tượng đoàn hộ tống xảy ra với tiến trình P2",
                "d. Hiện tượng đoàn hộ tống không xảy ra với tiến trình P5"
            ],
            "correctAnswer": "a. Hiện tượng đoàn hộ tống xảy ra với tiến trình P4"
        },
        {
            "question": "Câu Hỏi 13: Trong cấp phát liên kết, ______________________",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các con trỏ đến các khối nằm rải rác được đặt trong một khu vực",
                "b. Cả ba phương án trên đều sai",
                "c. Mỗi tập tin được lưu trên một tập các khối liên tục trên ổ đĩa",
                "d. Mỗi tập tin là một danh sách liên kết của các khối trên ổ đĩa"
            ],
            "correctAnswer": "d. Mỗi tập tin là một danh sách liên kết của các khối trên ổ đĩa"
        },
        {
            "question": "Câu Hỏi 14: Miền bảo vệ của một tiến trình bao gồm",
            "type": "multiple-choice",
            "options": [
                "a. Tên đối tượng và tập các quyền",
                "b. Tên đối tượng",
                "c. Tập các quyền",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "a. Tên đối tượng và tập các quyền"
        },
        {
            "question": "Câu Hỏi 15: Một tiến trình sử dụng 5 trang 1,2,3,4,5 theo trình tự: 1,2,4,5,2,1,2,4. Nếu sử dụng thuật toán thay thế trang FIFO, số lỗi trang xảy ra khi tăng từ 3 frame lên 4 frame :",
            "type": "multiple-choice",
            "options": [
                "a. giảm",
                "b. Các phương án trên đều sai",
                "c. vẫn giữ nguyên",
                "d. tăng"
            ],
            "correctAnswer": "a. giảm"
        },
        {
            "question": "Câu Hỏi 16: Giả sử một hệ thống sử dụng thuật toán lập lịch Round Robin (RR), thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là: P1 (0,21), P2 (30,10), P3 (20,40), P4 (40,25) và lượng tử thời gian là 15. Hiển thị thứ tự mà các tiến trình được chạy (các tiến trình được viết liền nhau và ngăn cách bởi dấu phấy. VD: P1,P2,P3,P4)?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 17: Hai tiến trình, P1 và P2, cần truy cập vào khu vực quan trọng. Xem xét đoạn mã đồng bộ hóa sau được sử dụng bởi các tiến trình:\nP1:\nwhile(true)\n{\nw1 = true;\nwhile(w2 == true);\nCritical section\nw1 = false;\n}\nRemainder Section\nP2 :\nwhile(true)\n{\nw2 = true;\nwhile(w1 == true);\nCritical section\nw2 = false;\n}\nRemainder Section\nỞ đây, w1 và w2 là các biến chia sẻ, được khởi tạo bằng false. Điều nào dưới đây là đúng về đoạn mã trên ?",
            "type": "multiple-choice",
            "options": [
                "a. Nó không đảm bảo tính chờ đợi có giới hạn",
                "b. Các tiến trình lần lượt vào khu vực quan trọng",
                "c. Bế tắc có thể xảy ra, nhưng đảm bảo tính loại trừ lẫn nhau",
                "d. Nó không đảm bảo tính loại trừ lẫn nhau"
            ],
            "correctAnswer": "c. Bế tắc có thể xảy ra, nhưng đảm bảo tính loại trừ lẫn nhau"
        },
        {
            "question": "Câu Hỏi 18: Bộ phận hoán đổi (swapper) làm việc với ___________, trong khi bộ phân phân trang làm việc với _______ của một tiến trình.",
            "type": "multiple-choice",
            "options": [
                "a. toàn bộ tiến trình, các trang",
                "b. toàn bộ tiến trình, các bộ phận",
                "c. tất cả các trang của một tiến trình, phân đoạn",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "a. toàn bộ tiến trình, các trang"
        },
        {
            "question": "Câu Hỏi 19: RAID cấp độ ___________ sử dụng chế độ phân dải dữ liệu cấp độ khối và bit chẵn lẻ cho mỗi khối và khối bit chẵn lẻ được lưu trên ổ đĩa riêng.",
            "type": "multiple-choice",
            "options": [
                "a. 2",
                "b. 5",
                "c. 3",
                "d. 4"
            ],
            "correctAnswer": "d. 4"
        },
        {
            "question": "Câu Hỏi 20: Trong chế độ không chờ gửi:",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình gửi liên tục gửi cho đến khi nó nhận được một thông điệp",
                "b. tiến trình gửi sẽ gửi thông điệp và rồi quay lại thực thi",
                "c. tiến trình gửi liên tục gửi cho đến khi thông điệp được nhận",
                "d. Cả ba phương án trên đều sai"
            ],
            "correctAnswer": "b. tiến trình gửi sẽ gửi thông điệp và rồi quay lại thực thi"
        },
        {
            "question": "Câu Hỏi 21: Phát biểu nào ĐÚNG về mục tiêu của điều kiện loại trừ lẫn nhau của khu vực quan trọng?",
            "type": "multiple-choice",
            "options": [
                "a. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ",
                "b. Nó cố gắng sử dụng tài nguyên được chia sẻ một cách hiệu quả hơn",
                "c. Nó làm cho việc thực hiện của hệ điều hành đơn giản hơn",
                "d. Nó hỗ trợ sự ưu tiên của các tiến trình"
            ],
            "correctAnswer": "a. Nó đảm bảo sử dụng đúng tài nguyên được chia sẻ"
        },
        {
            "question": "Câu Hỏi 22: Chọn mô tả KHÔNG ĐÚNG về các tác vụ chính của hệ điều hành",
            "type": "multiple-choice",
            "options": [
                "a. Cung cấp hệ thống quản lý cơ sở dữ liệu",
                "b. Quản lý tiến trình",
                "c. Phân bổ tài nguyên (cho các tiến trình)",
                "d. Cung cấp Giao diện lập trình ứng dụng (API) cho các nhà phát triển ứng dụng"
            ],
            "correctAnswer": "a. Cung cấp hệ thống quản lý cơ sở dữ liệu"
        },
        {
            "question": "Câu Hỏi 23: Có 5 tiến trình P1, P2, P3, P4, P5 với thời gian chạy CPU (ms), thời gian đến (ms) như sau:\nThời gian chạy Thời gian đến\nP1 3 0\nP2 12 4\nP3 4 6\nP4 7 8\nP5 3 11\nSử dụng thuật toán SJF cho phép dừng. Khẳng định nào sau đây là đúng:",
            "type": "multiple-choice",
            "options": [
                "a. Thời phản hồi của P3 dài hơn thời phản hồi của P4",
                "b. Thời gian chờ của P2 dài hơn thời gian chờ của P4",
                "c. Thời gian chờ của P3 dài hơn thời gian chờ của P2",
                "d. Thời gian chờ của P2 và thời gian chờ của P5 giống nhau"
            ],
            "correctAnswer": "b. Thời gian chờ của P2 dài hơn thời gian chờ của P4"
        },
        {
            "question": "Câu Hỏi 24: Một hệ thống sử dụng phương pháp cấp phát bộ nhớ theo tỷ lệ. Có 3 tiến trình trong hệ thống là P1, P2 và P3 với kích thước lần lượt là 138KB, 96KB và 164KB. Giả sử kích thước bộ nhớ là 180KB và kích thước khung là 2KB, hãy tính số lượng khung được phân bổ cho các tiến trình P1, P2, P3? (Số khung của các tiến trình P1, P2, P3 được viết liền nhau, ngăn cách nhau bởi dấu phẩy. VD: 1,2,3)",
            "type": "fill-in-the-blank",
            "correctAnswer": "31,22,37"
        },
        {
            "question": "Câu Hỏi 25: Giả sử một hệ thống sử dụng phân bổ bộ nhớ phân đoạn. Nội dung của bảng phân đoạn (giới hạn, cơ sở) của một tiến trình là [(1000, 1400), (400, 6300), (400, 4300), (1100, 3200), (1000, 4700)]. Tính địa chỉ vật lý của tham chiếu (1, 106)?",
            "type": "fill-in-the-blank",
            "correctAnswer": "6406"
        },
        {
            "question": "Câu Hỏi 26: Đâu là phát biểu KHÔNG ĐÚNG về semaphore?",
            "type": "multiple-choice",
            "options": [
                "a. Semaphore không thỏa mãn các điều kiện của khu vực quan trọng",
                "b. Semaphore là một giải pháp để giải quyết khu vực quan trọng",
                "c. Một semaphore thường bao gồm một số nguyên",
                "d. Semaphore có các hoạt động nguyên tử"
            ],
            "correctAnswer": "a. Semaphore không thỏa mãn các điều kiện của khu vực quan trọng"
        },
        {
            "question": "Câu Hỏi 27: Đâu không phải là một cuộc tấn công, nhưng nó tìm kiếm các lỗ hổng để tấn công?",
            "type": "multiple-choice",
            "options": [
                "a. Từ chối dịch vụ",
                "b. Quét cổng",
                "c. Tái chế",
                "d. Vi phạm truy cập bộ nhớ"
            ],
            "correctAnswer": "b. Quét cổng"
        },
        {
            "question": "Câu Hỏi 28: Đâu không phải là phương pháp cấp phát không gian trên ổ đĩa:",
            "type": "multiple-choice",
            "options": [
                "a. liên tục",
                "b. liên kết",
                "c. chỉ mục",
                "d. băm"
            ],
            "correctAnswer": "d. băm"
        },
        {
            "question": "Câu Hỏi 29: Trong chế độ chờ gửi:",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình gửi liên tục gửi cho đến khi nó nhận được một thông điệp",
                "b. tiến trình gửi không hoạt động",
                "c. tiến trình gửi phải chờ cho đến khi thông điệp được nhận",
                "d. tiến trình gửi sẽ gửi thông điệp và rồi quay lại thực thi"
            ],
            "correctAnswer": "c. tiến trình gửi phải chờ cho đến khi thông điệp được nhận"
        },
        {
            "question": "Câu Hỏi 30: Người dùng _______ tiến trình của họ đang chạy trên một hệ thống phân trang.",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. nhận thức được",
                "c. không nhận thức được",
                "d. nhận thức được và chủ động điều khiển"
            ],
            "correctAnswer": "c. không nhận thức được"
        },
        {
            "question": "Câu Hỏi 31: Windows XP thuộc loại hệ điều hành nào?",
            "type": "multiple-choice",
            "options": [
                "a. Nhúng",
                "b. Mục đích đặc biệt",
                "c. Đơn chương trình",
                "d. Đa chương trình"
            ],
            "correctAnswer": "d. Đa chương trình"
        },
        {
            "question": "Câu Hỏi 32: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba. Tính số khối chỉ mục tối đa mà hệ thống có thể sử dụng để tạo tập tin?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 33: Đâu là phát biểu KHÔNG ĐÚNG về bảo vệ bộ nhớ trong phân trang?",
            "type": "multiple-choice",
            "options": [
                "a. Mỗi mục trong bảng trang có một bit valid/invalid",
                "b. Nếu bit là valid, trang tương ứng đã được tải vào bộ nhớ",
                "c. Nếu bit là NULL, trang tương ứng KHÔNG được tải vào bộ nhớ",
                "d. Nếu bit là invalid , trang tương ứng KHÔNG được tải vào bộ nhớ"
            ],
            "correctAnswer": "c. Nếu bit là NULL, trang tương ứng KHÔNG được tải vào bộ nhớ"
        },
        {
            "question": "Câu Hỏi 34: Tính thời gian trung bình truy cập bộ nhớ cho một hệ thống có tỉ suất trúng cache là 80% khi thời gian truy cập cache là 10 ns, thời gian truy cập bộ nhớ chính là 100 ns.",
            "type": "multiple-choice",
            "options": [
                "a. 28 ns",
                "b. 82 ns",
                "c. 80 ns",
                "d. 8 ns"
            ],
            "correctAnswer": "a. 28 ns"
        },
        {
            "question": "Câu Hỏi 35: Virus đa phần (multipartite virus) thường tấn công",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các phương án trên",
                "b. Boot sector",
                "c. Bộ nhớ",
                "d. Các tập tin"
            ],
            "correctAnswer": "a. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 36: Hai tiến trình sau chia sẻ một biến chung X (khởi tạo bằng 5), và hai semaphore nhị phân S1, S2 (khởi tạo bằng 0):\nTiến trình A\n{int Y;\nwait(S1);\nA1: Y = X*2;\nsignal(S2);\nwait(S1);\nA2: X = Y;\n}\nTiến trình B\n{int Z;\nB1: Z=X+1;\nsignal(S1);\nwait(S2);\nB2: X=Z;\nsignal(S1);\n}\nThông thường, các câu lệnh trong một tiến trình phải được thực thi tuần tự. Giá trị cuối cùng của X sau khi thực thi xong hai tiến trình A và B sẽ là:",
            "type": "multiple-choice",
            "options": [
                "a. 10",
                "b. 6",
                "c. 12",
                "d. 11"
            ],
            "correctAnswer": "a. 10"
        },
        {
            "question": "Câu Hỏi 37: Mục đích của đa chương trình là:",
            "type": "multiple-choice",
            "options": [
                "a. Tối đa hoá việc sử dụng CPU",
                "b. Tối đa hoá mức sử dụng các thiết bị vào ra",
                "c. Tối đa hoá mức sử dụng bộ nhớ",
                "d. Có nhiều chương trình chờ trong hàng đợi sẵn sàng để chạy"
            ],
            "correctAnswer": "a. Tối đa hoá việc sử dụng CPU"
        },
        {
            "question": "Câu Hỏi 38: Trong thuật toán lập lịch đa cấp phản hồi,",
            "type": "multiple-choice",
            "options": [
                "a. tiến trình liên tục gửi thông điệp cho hệ thống",
                "b. tiến trình không thể chuyển đổi giữa các cấp hàng đợi",
                "c. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác",
                "d. tiến trình không bị phân thành các nhóm khác nhau"
            ],
            "correctAnswer": "c. tiến trình có thể di chuyển đến một hàng đợi sẵn sàng được phân cấp khác"
        },
        {
            "question": "Câu Hỏi 39: Đâu là phát biểu KHÔNG ĐÚNG về bảo vệ bộ nhớ trong phân trang?",
            "type": "multiple-choice",
            "options": [
                "a. Nó đảm bảo tham chiếu luôn trỏ đến một vị trí trong bộ nhớ",
                "b. Nó đảm bảo một tiến trình luôn truy cập vào các vị trí trong không gian bộ nhớ của nó",
                "c. Nó đảm bảo tiến trình không bao giờ tham chiếu đến vị trí bộ nhớ không hợp lệ",
                "d. Nó đảm bảo trang tương ứng với một tham chiếu được tải vào bộ nhớ trước khi truy cập"
            ],
            "correctAnswer": "a. Nó đảm bảo tham chiếu luôn trỏ đến một vị trí trong bộ nhớ"
        },
        {
            "question": "Câu Hỏi 40: Chọn mã chương trình mà một CPU có thể hiểu và thực thi được",
            "type": "multiple-choice",
            "options": [
                "a. c.open ();",
                "b. a = a + b",
                "c. 0110010110",
                "d. add AX, BX"
            ],
            "correctAnswer": "c. 0110010110"
        },
        {
            "question": "Câu Hỏi 41: Mức độ đa chương trình là:",
            "type": "multiple-choice",
            "options": [
                "a. Số lượng các tiến trình thực thi trong một đơn vị thời gian",
                "b. Số lượng các tiến trình trong bộ nhớ",
                "c. Số lượng các tiến trình trong hàng đợi sẵn sàng",
                "d. Số lượng các tiến trình trong hàng đợi vào ra"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 42: Thuật toán lập lịch Round Robin là ______________________",
            "type": "multiple-choice",
            "options": [
                "a. thuật toán lập lịch phân tiến trình thành các nhóm khác nhau",
                "b. thuật toán lập lịch không cho phép dừng",
                "c. thuật toán lập lịch cho phép dừng",
                "d. thuật toán lập lịch lúc cho phép dừng, lúc không cho phép dừng"
            ],
            "correctAnswer": "c. thuật toán lập lịch cho phép dừng"
        },
        {
            "question": "Câu Hỏi 43: Giả sử một hệ thống sử dụng thuật toán lập lịch Không cho phép dừng SJF , thông tin về các tiến trình (thời gian đến, thời gian thực hiện) là:P1 (0,7), P2 (2,4), P3 (4,1), P4 (5,5). Thời gian quay vòng của tiến trình P2 là bao nhiêu?",
            "type": "multiple-choice",
            "options": [
                "a. 10",
                "b. 8",
                "c. 6",
                "d. 12"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 44: Đâu không phải là hàng đợi cho các tiến trình:",
            "type": "multiple-choice",
            "options": [
                "a. Hàng đợi khối điều khiển tiến trình",
                "b. Hàng đợi nhiệm vụ",
                "c. Hàng đợi sẵn sàng",
                "d. Hàng đợi thiết bị"
            ],
            "correctAnswer": "a. Hàng đợi khối điều khiển tiến trình"
        },
        {
            "question": "Câu Hỏi 45: Mô tả TỐT NHẤT về tránh bế tắc là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Cho phép hệ thống đi vào bế tắc và khôi phục hệ thống",
                "b. Đảm bảo rằng không có sự chờ đợi vòng tròn giữa các tiến trình",
                "c. Đảm bảo một trong bốn điều kiện bế tắc không bao giờ xảy ra",
                "d. Đảm bảo hệ thống không bao giờ rơi vào trạng thái bế tắc"
            ],
            "correctAnswer": "d. Đảm bảo hệ thống không bao giờ rơi vào trạng thái bế tắc"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch C-SCAN là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 -->156 --> 161 --> 181 -->196",
                "b. 50 --> 12 --> 0 -->199 -->196 --> 181 --> 161 --> 156 -->149 --> 103 --> 80 --> 69 --> 55",
                "c. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196 --> 12",
                "d. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55"
            ],
            "correctAnswer": "b. 50 --> 12 --> 0 -->199 -->196 --> 181 --> 161 --> 156 -->149 --> 103 --> 80 --> 69 --> 55"
        },
        {
            "question": "Câu Hỏi 2: Cửa ập trong một chương trình là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Lỗ hổng bảo mật trong mạng",
                "b. Các phương án trên đều sai",
                "c. Một lỗ hổng bảo mật được cho vào trong hệ thống lúc lập trình nhằm mục đích sử dụng sau này",
                "d. Một loại chương trình chống virus"
            ],
            "correctAnswer": "c. Một lỗ hổng bảo mật được cho vào trong hệ thống lúc lập trình nhằm mục đích sử dụng sau này"
        },
        {
            "question": "Câu Hỏi 3: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba. Tính kích thước tệp tối đa (theo KB) nếu con trỏ gián tiếp kép được sử dụng?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 4: Nếu một ổ đĩa gặp sự cố trong RAID cấp độ ___________ thì phục hồi lại dữ liệu bị mất là đơn giản nhất so với RAID ở các cấp độ khác.",
            "type": "multiple-choice",
            "options": [
                "a. 2",
                "b. 1",
                "c. 3",
                "d. 4"
            ],
            "correctAnswer": "b. 1"
        },
        {
            "question": "Câu Hỏi 5: Tập tin virus thường được gắn với",
            "type": "multiple-choice",
            "options": [
                "a. Tập tin đối tượng",
                "b. Tất cả các phương án trên",
                "c. Tập tin thực thi",
                "d. Tập tin nguồn"
            ],
            "correctAnswer": "c. Tập tin thực thi"
        },
        {
            "question": "Câu Hỏi 6: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53 và hướng về phía trụ 199; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa C-SCAN được sử dụng, hãy hiển thị thứ tự của các yêu cầu được phục vụ? (Các yêu cầu được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy).",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 7: Trên ổ đĩa các khối 2,3,4,5,8,9,10,11,12,13 còn trống, các khối còn lại đã được sử dụng, bit map dùng để quản lý không gian trống của khối 0 đến 15 là _____________ ",
            "type": "multiple-choice",
            "options": [
                "a. 1100001100001110",
                "b. 0011110011111100",
                "c. 0111100111110000",
                "d. 1000011000000111"
            ],
            "correctAnswer": "b. 0011110011111100"
        },
        {
            "question": "Câu Hỏi 8: Mô hình ma trận truy cập để xác thực người dùng có chứa________",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các phương án trên",
                "b. Một hàm trả về kiểu của một đối tượng",
                "c. Một danh sách các miền",
                "d. Một danh sách các đối tượng"
            ],
            "correctAnswer": "a. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 9: Mục tiêu TỐT NHẤT của mirroring trong RAID (Redundant Array of Inexpensive Disks) là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Để tăng dung lượng đĩa",
                "b. Để tăng kích thước tệp",
                "c. Để tăng tốc độ vào ra (I/O speed)",
                "d. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng"
            ],
            "correctAnswer": "d. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng"
        },
        {
            "question": "Câu Hỏi 10: RAID cấp độ ___________ sử dụng chế độ phân dải dữ liệu cấp độ bit và bit chẵn lẻ cho mỗi byte.",
            "type": "multiple-choice",
            "options": [
                "a. 4",
                "b. 2",
                "c. 5",
                "d. 3"
            ],
            "correctAnswer": "b. 2"
        },
        {
            "question": "Câu Hỏi 11: Nếu hệ thống bị sự cố trước khi các thay đổi của một giao dịch được lưu vào log thì chúng sẽ được ________________",
            "type": "multiple-choice",
            "options": [
                "a. huỷ bỏ",
                "b. chuyển vào bộ nhớ trong",
                "c. lưu và thực hiện lại giao dịch",
                "d. lưu"
            ],
            "correctAnswer": "a. huỷ bỏ"
        },
        {
            "question": "Câu Hỏi 12: Khó khăn của cấp phát liên tục là_______________",
            "type": "multiple-choice",
            "options": [
                "a. Giá thành cao",
                "b. Mất nhiều thời gian",
                "c. Không hiệu quả",
                "d. Việc tìm không gian cho tập tin mới"
            ],
            "correctAnswer": "d. Việc tìm không gian cho tập tin mới"
        },
        {
            "question": "Câu Hỏi 13: Giả sử một hệ thống sử dụng phân bổ theo chỉ mục (1 cấp) với kích thước khối 4KB; kích thước con trỏ 4 byte. Tính kích thước tập tin tối đa (tính theo MB) mà hệ thống có thể tạo ra?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4"
        },
        {
            "question": "Câu Hỏi 14: Mỗi tập tin có _______________ chứa thông tin về tập tin như quyền sở hữu, quyền truy cập, vị trí nội dung tập tin.",
            "type": "multiple-choice",
            "options": [
                "a. Bảng chỉ mục",
                "b. Metadata",
                "c. Khối điểu khiển tiến trình",
                "d. Khối điều khiển tập tin"
            ],
            "correctAnswer": "d. Khối điều khiển tập tin"
        },
        {
            "question": "Câu Hỏi 15: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba. Tính kích thước tệp tối đa (theo KB) khi chỉ sử dụng con trỏ trực tiếp?",
            "type": "fill-in-the-blank",
            "correctAnswer": "48"
        },
        {
            "question": "Câu Hỏi 16: VFS (hệ thống tập tin ảo) kích hoạt một số hàm của hệ thống tập tin để xử lý các yêu cầu dựa trên _______ .",
            "type": "multiple-choice",
            "options": [
                "a. kiểu hệ thống tập tin",
                "b. kích thước",
                "c. lệnh",
                "d. nhãn thời gian"
            ],
            "correctAnswer": "a. kiểu hệ thống tập tin"
        },
        {
            "question": "Câu Hỏi 17: Virus đa phần (multipartite virus) thường tấn công",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các phương án trên",
                "b. Boot sector",
                "c. Các tập tin",
                "d. Bộ nhớ"
            ],
            "correctAnswer": "a. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 18: Đâu là phát biểu KHÔNG ĐÚNG về đĩa cứng?",
            "type": "multiple-choice",
            "options": [
                "a. Độ trễ chuyển động quay của trục ( Rotation latency) là thời gian chờ đợi để khu vực (sector) mong muốn đến đầu đọc (head)",
                "b. Tốc độ truyền (Transfer rate) là yếu tố quan trọng nhất đối với các thuật toán lập lịch cho ổ đĩa",
                "c. Thời gian tìm kiếm (Seek time) là thời gian để di chuyển đầu đọc (head) đến trụ (cylinder) mong muốn",
                "d. Tốc độ truyền (Transfer rate) là tốc độ dữ liệu giữa ổ đĩa và máy tính"
            ],
            "correctAnswer": "b. Tốc độ truyền (Transfer rate) là yếu tố quan trọng nhất đối với các thuật toán lập lịch cho ổ đĩa"
        },
        {
            "question": "Câu Hỏi 19: Thuật toán First fit và Best fit chịu ảnh hưởng của _______________",
            "type": "multiple-choice",
            "options": [
                "a. Hiện tượng phân mảnh ngoài",
                "b. Nạn đói",
                "c. Cả ba phương án trên",
                "d. Hiện tượng phân mảnh trong"
            ],
            "correctAnswer": "a. Hiện tượng phân mảnh ngoài"
        },
        {
            "question": "Câu Hỏi 20: Đoạn mã sử dụng sai mục đích được gọi là ____________",
            "type": "multiple-choice",
            "options": [
                "a. Trộm nội bộ",
                "b. Trojan",
                "c. Các phương án trên đều sai",
                "d. Mã sửa đổi ngăn xếp"
            ],
            "correctAnswer": "b. Trojan"
        },
        {
            "question": "Câu Hỏi 21: Một hệ thống sử dụng phân bổ khối chỉ mục được liên kết với kích thước khối là 2KB; kích thước con trỏ 4 byte. Giả sử một tệp có kích thước 20MB. Tính số khối chỉ mục (bắt đầu từ 0) của tệp tại vị trí 15,5 MB.",
            "type": "fill-in-the-blank",
            "correctAnswer": "15"
        },
        {
            "question": "Câu Hỏi 22: Các cuộc tấn công làm cho một máy tính hoặc mạng lưới tài nguyên không phục vụ được người dùng như dự kiến được gọi là __________",
            "type": "multiple-choice",
            "options": [
                "a. Tấn công từ chối dịch vụ",
                "b. Tấn công giả mạo",
                "c. Tấn công nạn đói",
                "d. Tấn công đọc chậm"
            ],
            "correctAnswer": "a. Tấn công từ chối dịch vụ"
        },
        {
            "question": "Câu Hỏi 23: Một số thông tin của thư mục được lưu trên bộ nhớ trong hoặc cache để________________",
            "type": "multiple-choice",
            "options": [
                "a. làm đầy bộ cache",
                "b. tăng tốc độ truy cập",
                "c. tăng không gian trống của bộ nhớ ngoài",
                "d. giảm không gian trống của bộ nhớ ngoài"
            ],
            "correctAnswer": "b. tăng tốc độ truy cập"
        },
        {
            "question": "Câu Hỏi 24: Giả sử một hệ thống sử dụng phân bổ đĩa dạng danh sách liên kết. Đâu là lý do tại sao chúng ta không thể có quyền truy cập ngẫu nhiên?",
            "type": "multiple-choice",
            "options": [
                "a. Vì các khối dữ liệu của một tệp không liền kề nhau",
                "b. Vì lý do bảo mật",
                "c. Vì thông tin về khối dữ liệu của tệp bị ẩn",
                "d. Vì không thể biết vị trí của khối thứ n từ khối thứ nhất"
            ],
            "correctAnswer": "d. Vì không thể biết vị trí của khối thứ n từ khối thứ nhất"
        },
        {
            "question": "Câu Hỏi 25: Khi các thay đổi được lưu vào log thì giao dịch được coi là ________________",
            "type": "multiple-choice",
            "options": [
                "a. được chuyển vào bộ nhớ trong",
                "b. hoàn thành",
                "c. cập nhật",
                "d. bị lỗi"
            ],
            "correctAnswer": "b. hoàn thành"
        },
        {
            "question": "Câu Hỏi 26: Đâu là cách một tiến trình sử dụng các cơ chế tự sinh sôi để giảm hiệu năng hệ thống?",
            "type": "multiple-choice",
            "options": [
                "a. Sâu",
                "b. Vi rút",
                "c. Trojan",
                "d. Đe dọa"
            ],
            "correctAnswer": "a. Sâu"
        },
        {
            "question": "Câu Hỏi 27: Đâu là phát biểu KHÔNG ĐÚNG về Hệ thống tệp ảo (VFS - Virtual File System)?",
            "type": "multiple-choice",
            "options": [
                "a. VFS có sẵn trong tất cả các hệ điều hành",
                "b. VFS ẩn việc triển khai chi tiết hệ thống tệp riêng lẻ",
                "c. VFS cho phép một hệ thống có một số hệ thống tệp khác nhau",
                "d. VFS cung cấp Giao diện lập trình ứng dụng (API - Application Programming Interface) hợp nhất cho các hệ thống tệp khác nhau"
            ],
            "correctAnswer": "a. VFS có sẵn trong tất cả các hệ điều hành"
        },
        {
            "question": "Câu Hỏi 28: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53 và hướng về trụ 0; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa SCAN được sử dụng, hãy hiển thị thứ tự của các yêu cầu được phục vụ? (Các yêu cầu được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy).",
            "type": "fill-in-the-blank",
            "correctAnswer": "37,14,65,67,98,122,124,183"
        },
        {
            "question": "Câu Hỏi 29: Mô tả ĐÚNG của thư mục là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Một thư mục là một phân vùng đĩa",
                "b. Một thư mục lưu trữ tất cả dữ liệu của các tập tin của nó",
                "c. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó",
                "d. Một thư mục lưu trữ cả FCB và dữ liệu của tệp"
            ],
            "correctAnswer": "c. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó"
        },
        {
            "question": "Câu Hỏi 30: Một hệ thống sử dụng phân bổ đĩa dạng danh sách liên kết với kích thước khối là 2KB; kích thước con trỏ 4 byte. Giả sử một tệp có kích thước 15,5 MB. Tính chỉ số của khối (bắt đầu từ 0) của vị trí tại vị trí của tệp là 15,25KB?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch SSTF là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 12 --> 0 --> 199 --> 196 -->181 --> 161 -->156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "b. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161--> 181--> 196 --> 12",
                "c. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196",
                "d. 50 --> 12 --> 196 --> 181 --> 161--> 156 --> 149 --> 103-->80 --> 69 --> 55"
            ],
            "correctAnswer": "b. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161--> 181--> 196 --> 12"
        },
        {
            "question": "Câu Hỏi 2: Bảng ma trận truy cập toàn cục chứa________",
            "type": "multiple-choice",
            "options": [
                "a. Miền",
                "b. Đối tượng",
                "c. Tập các quyền",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "d. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 3: Một hệ thống sử dụng phân bổ theo chỉ mục 2 cấp với kích thước khối 4KB; kích thước con trỏ 4 byte. Tính kích thước tối đa (theo MB) của một tập tin mà hệ thống có thể tạo ra?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4096"
        },
        {
            "question": "Câu Hỏi 4: Các cuộc tấn công làm cho một máy tính hoặc mạng lưới tài nguyên không phục vụ được người dùng như dự kiến được gọi là __________",
            "type": "multiple-choice",
            "options": [
                "a. Tấn công đọc chậm",
                "b. Tấn công từ chối dịch vụ",
                "c. Tấn công giả mạo",
                "d. Tấn công nạn đói"
            ],
            "correctAnswer": "b. Tấn công từ chối dịch vụ"
        },
        {
            "question": "Câu Hỏi 5: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch LOOK là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "b. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196",
                "c. 50 --> 12 --> 0 --> 199 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "d. 50 --> 12 --> 55 --> 69 --> 80 -->103 --> 149 --> 156 --> 161 --> 181 --> 196"
            ],
            "correctAnswer": "d. 50 --> 12 --> 55 --> 69 --> 80 -->103 --> 149 --> 156 --> 161 --> 181 --> 196"
        },
        {
            "question": "Câu Hỏi 6: Để bảo vệ hệ thống, một tiến trình nên được truy cập__________",
            "type": "multiple-choice",
            "options": [
                "a. Chỉ những nguồn tài nguyên mà nó được cấp quyền",
                "b. Một số ít tài nguyên nhưng việc cấp quyền là không cần thiết",
                "c. Tất cả các nguồn tài nguyên",
                "d. Tất cả các phương án trên"
            ],
            "correctAnswer": "a. Chỉ những nguồn tài nguyên mà nó được cấp quyền"
        },
        {
            "question": "Câu Hỏi 7: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba.Tính số khối chỉ mục tối đa nếu con trỏ gián tiếp kép được sử dụng?",
            "type": "fill-in-the-blank",
            "correctAnswer": "1026"
        },
        {
            "question": "Câu Hỏi 8: Nguyên tắc nào mà các chương trình, người sử dụng và hệ thống chỉ được cấp đủ quyền để thực hiện nhiệm vụ của chúng?",
            "type": "multiple-choice",
            "options": [
                "a. Nguyên tắc quyền tối thiểu",
                "b. Nguyên tắc lập lịch tiến trình",
                "c. Các phương án trên đều sai",
                "d. Nguyên tắc của hệ điều hành"
            ],
            "correctAnswer": "a. Nguyên tắc quyền tối thiểu"
        },
        {
            "question": "Câu Hỏi 9: Trong cấp phát liên kết, ______________________",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên đều sai",
                "b. Tất cả các con trỏ đến các khối nằm rải rác được đặt trong một khu vực",
                "c. Mỗi tập tin được lưu trên một tập các khối liên tục trên ổ đĩa",
                "d. Mỗi tập tin là một danh sách liên kết của các khối trên ổ đĩa"
            ],
            "correctAnswer": "d. Mỗi tập tin là một danh sách liên kết của các khối trên ổ đĩa"
        },
        {
            "question": "Câu Hỏi 10: Trong UNIX, chuyển đổi miền được thực hiện thông qua",
            "type": "multiple-choice",
            "options": [
                "a. Người dùng",
                "b. Các phương án trên đều sai",
                "c. Người quản trị hệ thống",
                "d. Hệ thống tập tin"
            ],
            "correctAnswer": "d. Hệ thống tập tin"
        },
        {
            "question": "Câu Hỏi 11: Một số thông tin của thư mục được lưu trên bộ nhớ trong hoặc cache để________________",
            "type": "multiple-choice",
            "options": [
                "a. làm đầy bộ cache",
                "b. tăng không gian trống của bộ nhớ ngoài",
                "c. tăng tốc độ truy cập",
                "d. giảm không gian trống của bộ nhớ ngoài"
            ],
            "correctAnswer": "c. tăng tốc độ truy cập"
        },
        {
            "question": "Câu Hỏi 12: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch SCAN là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "b. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196 --> 12",
                "c. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196",
                "d. 50 --> 12 --> 0 -->199 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55"
            ],
            "correctAnswer": "c. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196"
        },
        {
            "question": "Câu Hỏi 13: Giả sử một hệ thống sử dụng phân bổ đĩa liền kề với kích thước khối là 2KB. Một tệp có kích thước 12,3 MB. Vị trí chính xác của vị trí tệp 50,5KB là gì?",
            "type": "multiple-choice",
            "options": [
                "a. (block index, offset)=(25, 512)",
                "b. (block index, offset)=(24, 511)",
                "c. (block index, offset)=(25, 511)",
                "d. (block index, offset)=(24, 512)"
            ],
            "correctAnswer": "a. (block index, offset)=(25, 512)"
        },
        {
            "question": "Câu Hỏi 14: ______________________ không xảy ra với cấp phát liên kết.",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên",
                "b. Hiện tượng phân mảnh ngoài",
                "c. Nạn đói",
                "d. Hiện tượng phân mảnh trong"
            ],
            "correctAnswer": "b. Hiện tượng phân mảnh ngoài"
        },
        {
            "question": "Câu Hỏi 15: Khi tiến trình yêu cầu truy cập tập tin thì nó cần _______________",
            "type": "multiple-choice",
            "options": [
                "a. Sử dụng hàm hệ thống open() và close()",
                "b. Chạy một chương trình riêng biệt khác",
                "c. Sử dụng các ngắt đặc biệt",
                "d. Gửi yêu cầu đến khối điều khiển tập tin"
            ],
            "correctAnswer": "a. Sử dụng hàm hệ thống open() và close()"
        },
        {
            "question": "Câu Hỏi 16: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch C-SCAN là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "b. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196 --> 12",
                "c. 50 --> 12 --> 0 -->199 -->196 --> 181 --> 161 --> 156 -->149 --> 103 --> 80 --> 69 --> 55",
                "d. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 -->156 --> 161 --> 181 -->196"
            ],
            "correctAnswer": "c. 50 --> 12 --> 0 -->199 -->196 --> 181 --> 161 --> 156 -->149 --> 103 --> 80 --> 69 --> 55"
        },
        {
            "question": "Câu Hỏi 17: Miền bảo vệ của một tiến trình bao gồm",
            "type": "multiple-choice",
            "options": [
                "a. Tên đối tượng và tập các quyền",
                "b. Tên đối tượng",
                "c. Tập các quyền",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "a. Tên đối tượng và tập các quyền"
        },
        {
            "question": "Câu Hỏi 18: Đâu là phát biểu KHÔNG ĐÚNG về Hệ thống tệp ảo (VFS - Virtual File System)?",
            "type": "multiple-choice",
            "options": [
                "a. VFS có sẵn trong tất cả các hệ điều hành",
                "b. VFS cho phép một hệ thống có một số hệ thống tệp khác nhau",
                "c. VFS ẩn việc triển khai chi tiết hệ thống tệp riêng lẻ",
                "d. VFS cung cấp Giao diện lập trình ứng dụng (API - Application Programming Interface) hợp nhất cho các hệ thống tệp khác nhau"
            ],
            "correctAnswer": "a. VFS có sẵn trong tất cả các hệ điều hành"
        },
        {
            "question": "Câu Hỏi 19: VFS (hệ thống tập tin ảo) kích hoạt một số hàm của hệ thống tập tin để xử lý các yêu cầu dựa trên _______ .",
            "type": "multiple-choice",
            "options": [
                "a. kích thước",
                "b. kiểu hệ thống tập tin",
                "c. lệnh",
                "d. nhãn thời gian"
            ],
            "correctAnswer": "b. kiểu hệ thống tập tin"
        },
        {
            "question": "Câu Hỏi 20: Đâu không phải là một cuộc tấn công, nhưng nó tìm kiếm các lỗ hổng để tấn công?",
            "type": "multiple-choice",
            "options": [
                "a. Tái chế",
                "b. Quét cổng",
                "c. Từ chối dịch vụ",
                "d. Vi phạm truy cập bộ nhớ"
            ],
            "correctAnswer": "b. Quét cổng"
        },
        {
            "question": "Câu Hỏi 21: Khó khăn của cấp phát liên tục là_______________",
            "type": "multiple-choice",
            "options": [
                "a. Không hiệu quả",
                "b. Giá thành cao",
                "c. Việc tìm không gian cho tập tin mới",
                "d. Mất nhiều thời gian"
            ],
            "correctAnswer": "c. Việc tìm không gian cho tập tin mới"
        },
        {
            "question": "Câu Hỏi 22: FAT có cấu trúc giống như ______________________",
            "type": "multiple-choice",
            "options": [
                "a. Danh sách liên kết",
                "b. Bảng băm",
                "c. Bảng chỉ mục",
                "d. Ngăn xếp"
            ],
            "correctAnswer": "a. Danh sách liên kết"
        },
        {
            "question": "Câu Hỏi 23: RAID cấp độ ___________ sử dụng chế độ phân dải dữ liệu cấp độ khối và bit chẵn lẻ cho mỗi khối và khối bit chẵn lẻ được lưu trên ổ đĩa riêng.",
            "type": "multiple-choice",
            "options": [
                "a. 2",
                "b. 3",
                "c. 4",
                "d. 5"
            ],
            "correctAnswer": "c. 4"
        },
        {
            "question": "Câu Hỏi 24: Đâu không phải là phương pháp cấp phát không gian trên ổ đĩa:",
            "type": "multiple-choice",
            "options": [
                "a. liên kết",
                "b. băm",
                "c. liên tục",
                "d. chỉ mục"
            ],
            "correctAnswer": "b. băm"
        },
        {
            "question": "Câu Hỏi 25: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba. Tính kích thước tập tin tối đa (theo KB) mà hệ thống có thể tạo ra?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4299165744"
        },
        {
            "question": "Câu Hỏi 26: Giả sử một hệ thống sử dụng phân bổ theo chỉ mục (1 cấp) với kích thước khối 4KB; kích thước con trỏ 4 byte. Một tệp có kích thước 3MB. Đâu là vị trí chính xác của vị trí tệp tin 35KB?",
            "type": "multiple-choice",
            "options": [
                "a. (block index, offset)=(8, 3071)",
                "b. (block index, offset)=(9, 3072)",
                "c. (block index, offset)=(8, 3072)",
                "d. (block index, offset)=(9, 3071)"
            ],
            "correctAnswer": "c. (block index, offset)=(8, 3072)"
        },
        {
            "question": "Câu Hỏi 27: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53 và hướng về phía xi lanh 199; chuỗi các yêu cầu đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa C-LOOK được sử dụng, hãy hiển thị thứ tự của các yêu cầu được phục vụ? (Các yêu cầu được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy).",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 28: Giả sử một hệ thống sử dụng phân bổ theo chỉ mục (1 cấp) với kích thước khối 4KB; kích thước con trỏ 4 byte. Tính kích thước tập tin tối đa (tính theo MB) mà hệ thống có thể tạo ra?",
            "type": "fill-in-the-blank",
            "correctAnswer": "4"
        },
        {
            "question": "Câu Hỏi 29: Một ổ cứng có các thông số sau: Tốc độ trục quay 700 RPM, mỗi track chứa 12 sector, mỗi sector có dung lượng 1024 byte. Tốc độ truyền dữ liệu là:",
            "type": "multiple-choice",
            "options": [
                "a. 1120 Kbps",
                "b. 700 Kbps",
                "c. 1024 Kbps",
                "d. 800 Kbps"
            ],
            "correctAnswer": "a. 1120 Kbps"
        },
        {
            "question": "Câu Hỏi 30: Trong RAID cấp độ 4, để đọc mỗi khối dữ liệu cần truy cập ___________",
            "type": "multiple-choice",
            "options": [
                "a. chỉ một ổ đĩa",
                "b. đồng thời một số ổ đĩa",
                "c. lần lượt từng ổ đĩa một",
                "d. đồng thời tất cả các ổ đĩa"
            ],
            "correctAnswer": "a. chỉ một ổ đĩa"
        }
    ],
    [
        {
            "question": "Câu Hỏi 1: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch LOOK là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "b. 50 --> 12 --> 0 --> 199 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "c. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196",
                "d. 50 --> 12 --> 55 --> 69 --> 80 -->103 --> 149 --> 156 --> 161 --> 181 --> 196"
            ],
            "correctAnswer": "d. 50 --> 12 --> 55 --> 69 --> 80 -->103 --> 149 --> 156 --> 161 --> 181 --> 196"
        },
        {
            "question": "Câu Hỏi 2: Mục tiêu TỐT NHẤT của stripping trong RAID (Redundant Array of Inexpensive Disks) là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Để tăng dung lượng đĩa",
                "b. Để khôi phục dữ liệu của tệp nếu ổ đĩa bị hỏng",
                "c. Để tăng tốc độ vào ra (I/O speed)",
                "d. Để tăng kích thước tệp"
            ],
            "correctAnswer": "c. Để tăng tốc độ vào ra (I/O speed)"
        },
        {
            "question": "Câu Hỏi 3: Trên ổ đĩa các khối 2,3,4,5,8,9,10,11,12,13 còn trống, các khối còn lại đã được sử dụng, bit map dùng để quản lý không gian trống của khối 0 đến 15 là _____________ ",
            "type": "multiple-choice",
            "options": [
                "a. 1100001100001110",
                "b. 1000011000000111",
                "c. 0011110011111100",
                "d. 0111100111110000"
            ],
            "correctAnswer": "c. 0011110011111100"
        },
        {
            "question": "Câu Hỏi 4: ______________________ không xảy ra với cấp phát liên kết.",
            "type": "multiple-choice",
            "options": [
                "a. Cả ba phương án trên",
                "b. Hiện tượng phân mảnh trong",
                "c. Hiện tượng phân mảnh ngoài",
                "d. Nạn đói"
            ],
            "correctAnswer": "c. Hiện tượng phân mảnh ngoài"
        },
        {
            "question": "Câu Hỏi 5: RAID cấp độ ___________ sử dụng chế độ phân dải dữ liệu cấp độ bit và bit chẵn lẻ cho mỗi byte.",
            "type": "multiple-choice",
            "options": [
                "a. 2",
                "b. 3",
                "c. 4",
                "d. 5"
            ],
            "correctAnswer": "a. 2"
        },
        {
            "question": "Câu Hỏi 6: Một hệ thống tệp UNIX có kích thước khối 4KB; kích thước con trỏ 4 byte; 12 con trỏ trực tiếp; 1 con trỏ gián tiếp đơn; 1 con trỏ gián tiếp kép; và 1 con trỏ gián tiếp ba. Tính số khối chỉ mục tối đa mà hệ thống có thể sử dụng để tạo tập tin?",
            "type": "fill-in-the-blank",
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 7: Bộ kiểm tra tính nhất quán ________________ và cố sửa các lỗi không nhất quán mà nó tìm thấy.",
            "type": "multiple-choice",
            "options": [
                "a. so sánh dữ liệu trong bộ nhớ ngoài với dữ liệu trong cache",
                "b. so sánh dữ liệu của hệ thống tạo ra với dữ liệu ra mà người dùng yêu cầu",
                "c. so sánh dữ liệu trong cấu trúc thư mục với khối dữ liệu trên ổ đĩa",
                "d. cả ba phương án trên"
            ],
            "correctAnswer": "c. so sánh dữ liệu trong cấu trúc thư mục với khối dữ liệu trên ổ đĩa"
        },
        {
            "question": "Câu Hỏi 8: Nếu hệ thống bị sự cố trước khi các thay đổi của một giao dịch được lưu vào log thì chúng sẽ được ________________",
            "type": "multiple-choice",
            "options": [
                "a. lưu",
                "b. chuyển vào bộ nhớ trong",
                "c. huỷ bỏ",
                "d. lưu và thực hiện lại giao dịch"
            ],
            "correctAnswer": "c. huỷ bỏ"
        },
        {
            "question": "Câu Hỏi 9: Đoạn mã sử dụng sai mục đích được gọi là ____________",
            "type": "multiple-choice",
            "options": [
                "a. Trojan",
                "b. Mã sửa đổi ngăn xếp",
                "c. Các phương án trên đều sai",
                "d. Trộm nội bộ"
            ],
            "correctAnswer": "a. Trojan"
        },
        {
            "question": "Câu Hỏi 10: Đâu là phát biểu KHÔNG ĐÚNG về Khối điều khiển tệp (FCB - File Control Block)?",
            "type": "multiple-choice",
            "options": [
                "a. inode trong Linux là một ví dụ về FCB",
                "b. Đây là cấu trúc dữ liệu lưu trữ thông tin cần thiết để thao tác với tệp",
                "c. Đây là cấu trúc dữ liệu lưu trữ dữ liệu của tệp",
                "d. FCB của tệp thường được lưu trữ trên đĩa (hoặc thiết bị lưu trữ)"
            ],
            "correctAnswer": "c. Đây là cấu trúc dữ liệu lưu trữ dữ liệu của tệp"
        },
        {
            "question": "Câu Hỏi 11: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch SSTF là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 12 --> 0 --> 199 --> 196 -->181 --> 161 -->156 --> 149 --> 103 --> 80 --> 69 --> 55",
                "b. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196",
                "c. 50 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161--> 181--> 196 --> 12",
                "d. 50 --> 12 --> 196 --> 181 --> 161--> 156 --> 149 --> 103-->80 --> 69 --> 55"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 12: Ổ đĩa có 200 trục rãnh đánh số từ 0 đến 199. Đầu đọc/ghi đang ở trục rãnh 50, nó vừa đáp ứng yêu cầu tại trục rãnh 52. Yêu cầu vào/ra các khối dữ liệu trên các trục rãnh (theo trình tự FIFO) như sau: 69, 12, 196, 80, 55, 161, 156, 103, 149, 181. Sơ đồ đường đi của đầu đọc/ghi khi sử dụng thuật toán lập lịch C-LOOK là:",
            "type": "multiple-choice",
            "options": [
                "a. 50 --> 12 --> 0 --> 55 --> 69 --> 80 --> 103 --> 149 --> 156 --> 161 --> 181 -->196",
                "b. 50 --> 55 --> 69--> 80 --> 103 --> 149 --> 156 --> 161 --> 181 --> 196 -->12",
                "c. 50 --> 12 --> 0 --> 199 --> 196 --> 181 --> 161 --> 156 --> 149 -->103 --> 80 --> 69 --> 55",
                "d. 50 --> 12 --> 196 --> 181 --> 161 --> 156 --> 149 --> 103 --> 80 --> 69 --> 55"
            ],
            "correctAnswer": "Not available in source"
        },
        {
            "question": "Câu Hỏi 13: Giả sử một hệ thống sử dụng phân bổ đĩa dạng danh sách liên kết. Đâu là lý do tại sao chúng ta không thể có quyền truy cập ngẫu nhiên?",
            "type": "multiple-choice",
            "options": [
                "a. Vì thông tin về khối dữ liệu của tệp bị ẩn",
                "b. Vì không thể biết vị trí của khối thứ n từ khối thứ nhất",
                "c. Vì các khối dữ liệu của một tệp không liền kề nhau",
                "d. Vì lý do bảo mật"
            ],
            "correctAnswer": "b. Vì không thể biết vị trí của khối thứ n từ khối thứ nhất"
        },
        {
            "question": "Câu Hỏi 14: Mỗi tập tin có _______________ chứa thông tin về tập tin như quyền sở hữu, quyền truy cập, vị trí nội dung tập tin.",
            "type": "multiple-choice",
            "options": [
                "a. Metadata",
                "b. Bảng chỉ mục",
                "c. Khối điều khiển tập tin",
                "d. Khối điểu khiển tiến trình"
            ],
            "correctAnswer": "c. Khối điều khiển tập tin"
        },
        {
            "question": "Câu Hỏi 15: Đâu là phát biểu KHÔNG ĐÚNG về Hệ thống tệp ảo (VFS - Virtual File System)?",
            "type": "multiple-choice",
            "options": [
                "a. VFS có sẵn trong tất cả các hệ điều hành",
                "b. VFS cho phép một hệ thống có một số hệ thống tệp khác nhau",
                "c. VFS cung cấp Giao diện lập trình ứng dụng (API - Application Programming Interface) hợp nhất cho các hệ thống tệp khác nhau",
                "d. VFS ẩn việc triển khai chi tiết hệ thống tệp riêng lẻ"
            ],
            "correctAnswer": "a. VFS có sẵn trong tất cả các hệ điều hành"
        },
        {
            "question": "Câu Hỏi 16: Trong mã hóa bất đối xứng",
            "type": "multiple-choice",
            "options": [
                "a. Không cần khóa để mã hóa và giải mã",
                "b. Khoá mã hóa và khoá giải mã giống nhau",
                "c. Các phương án trên đều sai",
                "d. Khoá mã hóa và khoá giải mã khác nhau"
            ],
            "correctAnswer": "d. Khoá mã hóa và khoá giải mã khác nhau"
        },
        {
            "question": "Câu Hỏi 17: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa FCFS được sử dụng, tính tổng số trụ mà đầu phải di chuyển để phục vụ các yêu cầu trên?",
            "type": "fill-in-the-blank",
            "correctAnswer": "640"
        },
        {
            "question": "Câu Hỏi 18: Nếu không gian được cấp phát cho một tập tin quá ít,",
            "type": "multiple-choice",
            "options": [
                "a. tập tin không thể mở được",
                "b. tập tin không thể mở rộng được",
                "c. tập tin sẽ không làm việc",
                "d. sẽ không có bất kỳ không gian cho dữ liệu vì khối điều khiển tập tin chiếm tất cả"
            ],
            "correctAnswer": "b. tập tin không thể mở rộng được"
        },
        {
            "question": "Câu Hỏi 19: Giả sử một đĩa có 200 trụ (cylinders) (được đánh dấu từ 0 đến 199); đầu đọc hiện đang ở trụ 53 và hướng về trụ 0; chuỗi các yêu cầu ổ đĩa là 98, 183, 37, 122, 14, 124, 65, 67. Giả sử thuật toán lập lịch cho ổ đĩa SCAN được sử dụng, hãy hiển thị thứ tự của các yêu cầu được phục vụ? (Các yêu cầu được viết liền nhau, chỉ ngăn cách nhau bởi dấu phẩy).",
            "type": "fill-in-the-blank",
            "correctAnswer": "37,14,65,67,98,122,124,183"
        },
        {
            "question": "Câu Hỏi 20: Đâu là phát biểu KHÔNG ĐÚNG về hệ thống tập tin?",
            "type": "multiple-choice",
            "options": [
                "a. Thông tin dữ liệu meta của tệp được lưu trữ dưới dạng tiêu đề của tệp",
                "b. Các ví dụ về thông tin dữ liệu meta là: tên tệp, kích thước tệp, thời gian truy cập, thời gian sửa đổi, v.v.",
                "c. Một số thông tin dữ liệu meta của tệp được lưu trữ trong một thư mục",
                "d. Một tệp thường bao gồm hai phần: dữ liệu meta (thông tin về tệp) và dữ liệu"
            ],
            "correctAnswer": "a. Thông tin dữ liệu meta của tệp được lưu trữ dưới dạng tiêu đề của tệp"
        },
        {
            "question": "Câu Hỏi 21: Một ổ cứng có các thông số sau: Tốc độ trục quay 700 RPM, mỗi track chứa 12 sector, mỗi sector có dung lượng 1024 byte. Tốc độ truyền dữ liệu là:",
            "type": "multiple-choice",
            "options": [
                "a. 800 Kbps",
                "b. 700 Kbps",
                "c. 1024 Kbps",
                "d. 1120 Kbps"
            ],
            "correctAnswer": "d. 1120 Kbps"
        },
        {
            "question": "Câu Hỏi 22: Mô tả ĐÚNG của thư mục là gì?",
            "type": "multiple-choice",
            "options": [
                "a. Một thư mục lưu trữ tất cả dữ liệu của các tập tin của nó",
                "b. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó",
                "c. Một thư mục là một phân vùng đĩa",
                "d. Một thư mục lưu trữ cả FCB và dữ liệu của tệp"
            ],
            "correctAnswer": "b. Một thư mục thực sự là một tệp lưu trữ một phần (hoặc tất cả) thông tin về các tệp của nó"
        },
        {
            "question": "Câu Hỏi 23: Trong UNIX, chuyển đổi miền được thực hiện thông qua",
            "type": "multiple-choice",
            "options": [
                "a. Người quản trị hệ thống",
                "b. Người dùng",
                "c. Hệ thống tập tin",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "c. Hệ thống tập tin"
        },
        {
            "question": "Câu Hỏi 24: Trong cấp phát liên kết, thư mục chứa con trỏ trỏ đến______________________",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các khối của tập tin",
                "b. Khối đầu tiên của tập tin",
                "c. Khối đầu tiên và cuối cùng của tập tin",
                "d. Khối cuối cùng của tập tin"
            ],
            "correctAnswer": "b. Khối đầu tiên của tập tin"
        },
        {
            "question": "Câu Hỏi 25: _______ là một cách tiếp cận để hạn chế quyền truy cập hệ thống đối với người dùng được uỷ quyền.",
            "type": "multiple-choice",
            "options": [
                "a. Kiểm soát truy cập dựa trên tiến trình",
                "b. Các phương án trên đều sai",
                "c. Kiểm soát truy cập dựa trên vai trò",
                "d. Kiểm soát truy cập dựa trên nhiệm vụ"
            ],
            "correctAnswer": "c. Kiểm soát truy cập dựa trên vai trò"
        },
        {
            "question": "Câu Hỏi 26: Nếu tập các nguồn tài nguyên sẵn có cho một tiến trình là cố định trong suốt cuộc đời của nó thì miền của tiến trình đó là ____________",
            "type": "multiple-choice",
            "options": [
                "a. Tĩnh",
                "b. Động",
                "c. Không phải tĩnh cũng không phải động",
                "d. Các phương án trên đều sai"
            ],
            "correctAnswer": "a. Tĩnh"
        },
        {
            "question": "Câu Hỏi 27: Giả sử một hệ thống sử dụng phân bổ đĩa liền kề với kích thước khối là 2KB. Một tệp có kích thước 12,3 MB. Vị trí chính xác của vị trí tệp 50,5KB là gì?",
            "type": "multiple-choice",
            "options": [
                "a. (block index, offset)=(24, 511)",
                "b. (block index, offset)=(25, 511)",
                "c. (block index, offset)=(24, 512)",
                "d. (block index, offset)=(25, 512)"
            ],
            "correctAnswer": "d. (block index, offset)=(25, 512)"
        },
        {
            "question": "Câu Hỏi 28: Với kiểu truy cập tập tin bất kỳ, cấp phát liên tục yêu cầu ________________ truy cập để đọc khối dữ liệu trên ổ đĩa.",
            "type": "multiple-choice",
            "options": [
                "a. đúng hai lần",
                "b. ít nhất hai lần",
                "c. cả ba phương án trên đều sai",
                "d. đúng một lần"
            ],
            "correctAnswer": "d. đúng một lần"
        },
        {
            "question": "Câu Hỏi 29: Virus đa phần (multipartite virus) thường tấn công",
            "type": "multiple-choice",
            "options": [
                "a. Tất cả các phương án trên",
                "b. Các tập tin",
                "c. Boot sector",
                "d. Bộ nhớ"
            ],
            "correctAnswer": "a. Tất cả các phương án trên"
        },
        {
            "question": "Câu Hỏi 30: Đoạn mã trong một phần mềm nào đó sẽ gây ra một số nguy hiểm trong một số điều kiện nhất định được gọi là ____________",
            "type": "multiple-choice",
            "options": [
                "a. Các phương án trên đều sai",
                "b. Mã sửa đổi ngăn xếp",
                "c. Cửa sập",
                "d. Bom logic"
            ],
            "correctAnswer": "d. Bom logic"
        }
    ],

];

