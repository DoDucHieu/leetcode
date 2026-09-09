// # [Cổ Vật] Giải Mã Lưới Ký Tự Cổ Đại

// | Thông số | Giới hạn |
// | :--- | :--- |
// | *Giới hạn thời gian (Time Limit)* | 10s |
// | *Giới hạn bộ nhớ (Memory Limit)* | 2GB |

// ---

// ## Mô tả bài toán

// Bạn tìm thấy một lưới chứa các chữ cái tiếng Anh tại một di tích cổ. Lưới có kích thước N x N.

// Vào thời cổ đại, từ ngữ được mã hóa thông qua các lớp viền của lưới theo quy tắc sau:
// 1. Ghi lại chữ cái *xuất hiện nhiều nhất* ở đường viền ngoài cùng.
// 2. Tiếp tục ghi lại chữ cái *xuất hiện nhiều nhất* ở đường viền bên trong liền kề.
// 3. Lặp lại quá trình này cho đến khi chỉ còn lại một ký tự nằm ở chính giữa lưới, ghi lại ký tự đó.
// 4. Ghép các chữ cái đã ghi lại theo thứ tự từ ngoài vào trong để tạo thành từ hoàn chỉnh.

// ### Ví dụ minh họa

// Xét lưới kích thước 5 x 5:
// ["a", "a", "a", "a", "a"]
// ["b", "c", "c", "c", "b"]
// ["b", "c", "e", "b", "b"]
// ["b", "c", "b", "b", "b"]
// ["a", "a", "a", "a", "a"]

// - *Đường viền ngoài cùng:* Có 10 chữ 'a' và 6 chữ 'b'. Chữ cái xuất hiện nhiều nhất là *'a'*.
// - *Đường viền bên trong tiếp theo:* Có 3 chữ 'b' và 5 chữ 'c'. Chữ cái xuất hiện nhiều nhất là *'c'*.
// - *Vị trí trung tâm (chính giữa):* Chỉ có duy nhất 1 chữ 'e'. Ghi lại *'e'*.

// => Kết quả ghép lại: *"ace"*.

// ---

// ## Yêu cầu

// Cho mảng chuỗi một chiều ancient chứa thông tin các hàng của lưới. Hãy hoàn thiện hàm solution để trả về chuỗi văn bản mà lưới đó biểu diễn.

// ---

// ## Giới hạn (Constraints)

// - 3 <= độ dài của ancient = n <= 101
// - n luôn là *số lẻ*.
// - Độ dài mỗi phần tử của ancient bằng n.
// - ancient[i][j] là các chữ cái tiếng Anh in thường ('a' - 'z').
// - *Đảm bảo:* Trong mỗi vòng viền, luôn có *duy nhất* một chữ cái có số lần xuất hiện nhiều nhất.

// ---

// ## Phân bổ điểm (Subtasks)

// | Nhóm | Điểm | Mô tả nhóm Test Case |
// | :---: | :---: | :--- |
// | *#1* | 13% | n = 3 |
// | *#2* | 17% | n = 5 |
// | *#3* | 22% | n <= 11, ancient chỉ gồm 2 ký tự 'a' và 'b' |
// | *#4* | 23% | ancient chỉ gồm 2 ký tự 'a' và 'b' |
// | *#5* | 25% | Không có giới hạn bổ sung |

// ---

// ## Ví dụ đầu vào/đầu ra

// | ancient | result |
// | :--- | :---: |
// | ["aaaaa", "bccch", "bcebb", "bcbbo", "aaaaa"] | "ace" |
// | ["aaaabbb", "ccccddd", "eeeefff", "ggggbhh", "eeeefff", "ccccddd", "aaaabbb"] | "aceg" |

// ---

// ## Giải thích ví dụ

// ### Ví dụ #1
// Tương tự như ví dụ trong phần mô tả bài toán.

// ### Ví dụ #2
// Lưới kích thước 7 x 7:
// ["a", "a", "a", "a", "b", "b", "b"]
// ["c", "c", "c", "c", "d", "d", "d"]
// ["e", "e", "e", "e", "f", "f", "f"]
// ["g", "g", "g", "g", "h", "h", "h"]
// ["e", "e", "e", "e", "f", "f", "f"]
// ["c", "c", "c", "c", "d", "d", "d"]
// ["a", "a", "a", "a", "b", "b", "b"]
// - Lớp viền 1 (ngoài cùng): Ký tự phổ biến nhất là 'a'.
// - Lớp viền 2: Ký tự phổ biến nhất là 'c'.
// - Lớp viền 3: Ký tự phổ biến nhất là 'e'.
// - Lớp viền 4 (tâm lưới): Ký tự 'g'.

// => Trả về: *"aceg"*.


const solution = (data) => {
    let res = "";

    const n = data.length;

    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;

    while (top <= bottom) {
        const count = {};

        // Top
        for (let j = left; j <= right; j++) {
            const char = data[top][j];
            count[char] = (count[char] || 0) + 1;
        }

        // Bottom
        if (top !== bottom) {
            for (let j = left; j <= right; j++) {
                const char = data[bottom][j];
                count[char] = (count[char] || 0) + 1;
            }
        }

        // Left
        for (let i = top + 1; i < bottom; i++) {
            const char = data[i][left];
            count[char] = (count[char] || 0) + 1;
        }

        // Right
        if (left !== right) {
            for (let i = top + 1; i < bottom; i++) {
                const char = data[i][right];
                count[char] = (count[char] || 0) + 1;
            }
        }

        // Tìm ký tự xuất hiện nhiều nhất
        let max = 0;
        let maxChar = "";

        for (const char in count) {
            if (count[char] > max) {
                max = count[char];
                maxChar = char;
            }
        }

        res += maxChar;

        // Thu nhỏ layer
        top++;
        bottom--;
        left++;
        right--;
    }

    return res;
};

const arr = 
["a", "a", "a", "a", "a"]
["b", "c", "c", "c", "b"]
["b", "c", "e", "b", "b"]
["b", "c", "b", "b", "b"]
["a", "a", "a", "a", "a"]

const res = solution(arr)
