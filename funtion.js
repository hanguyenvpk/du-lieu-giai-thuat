// Yêu cầu khi làm các bài tập về  hàm
//     - Định nghĩa tên hàm
//     - Định nghĩa đầu vào của hàm
//     - Định nghĩa đầu ra của hàm 
let a = 9
let b = 3
//     1. Viết hàm Tính tổng; hiệu 2 số  và trả ra kết quả.
function tong(a, b) {
    return a + b
}

function hieu(a, b) {
    return a - b
}
//     2. Sử dụng các hàm ở 1 để tính tổng, hiệu của n1,n2
console.log(` tong của ${a} và ${b} là: ${tong(a, b)}`);
console.log(` hieu của ${a} và ${b} là: ${hieu(a, b)}`);
//     3. Viết hàm tính để nhân 2 số 
function nhan(a, b) {
    return a * b
}
//     4. Sử dụng hàm (3) để xuất ra màn hình tính của 2 số n1, n2
console.log(`Tich cua 2 so la: ${nhan(a, b)}`);
//     5. Viết hàm chia 2 số
function thuong(a, b) {
    return a / b
}
//     6. Sử dụng hàm (4) để tính n1/n2. Nếu n2 = 0 thì sẽ ra sao 
console.log(`6 THương của ${a} và ${0} là: ${thuong(a, 0)}`);
//     7. Sử dụng hàm (4) để tính n2/n1. nếu n1 bằng 0 thì sẽ ra sao 
console.log(`7 THương của ${0} và ${b} là: ${thuong(0, b)}`);
//     8. Viết hàm tính bình phương một số nhập vào 
function binhPhuong(a) {
    return a * a
}
//     9. Sử dụng hàm (8) để xuất ra màn hình bình phương của n1 và bình phương của n2
console.log(`binh phuong cua ${a} la: ${binhPhuong(a)} va ${b} la: ${binhPhuong(b)}`);

//     10. Viết hàm tìm số lớn hơn trong 2 số
function max(a, b) {
    if (a > b) {
        return `${a} lon hon ${b}`
    } else if (a < b) {
        return `${b} lon hon ${a}`
    } else {
        return `${a} bằng ${b}`
    }
}
//     11. Sử dụng hàm (10) để tìm ra số nào lớn hơn trong 2 số n1, n2
console.log(max(a, b));
//     12. Viết hàm tìm số nhỏ hơn trong 2 số 
function min(a, b) {
    if (a > b) {
        return `${a} bé hon ${b}`
    } else if (a < b) {
        return `${b} bé hon ${a}`
    } else {
        return `${a} bằng ${b}`
    }
}
//     13. Sử dụng hàm (12) để tìm ra số nào nhỏ hơn trong 2 số n1, n2
console.log(min(a, b));
//     14. Viết hàm tính giá trị trung bình của 2 số 
function trungBinh(a, b) {
    return (a + b) / 2
}
//     15. Sử dụng hàm (14) để tính giá trị trung bình của n1, n2
console.log(`trung binh cua ${a + "va " + b + "la: " + trungBinh(a, b)}`);
//     16. Viết hàm tính phần dư khi 2 số chia với nhau 
function chiaLayDu(a, b) {
    return a % b
}
//     17. Sử dụng hàm (16) để xuất ra màn hình sốdư khi n1 chia cho n2
console.log(`so du cua phep chia ${a + " " + b} la ${chiaLayDu(a, b)}`);
//     18. Sử dụng hàm (16) để xuất ra màn hình số dư khi n2 chia cho n1
console.log(`so du cua phep chia ${b + " " + a} la ${chiaLayDu(b, a)}`)
//     19. Viết hàm kiểu ra một số có chia hết cho số còn lại không
function coChiahet(a, b) {
    if (a % b == 0) {
        return `${a} chia het cho ${b}`
    } else {
        return `${a} khong het cho ${b}`
    }
}
//     20. Sử dụng hàm (19) để kiểm tra xem n1 có chia hết cho n2 không. Nếu n1 chia hết cho n2 thì xuất ra màn hình câu “n1 chia hết cho n2” nếu không thì xuất ra màn hình câu “n1 không chia hết cho n2”
console.log(coChiahet(a, b));

//     21. Sử dụng hàm (19) để kiểm tra xem n2 có chia hết cho n1 không. Nếu n2 chia hết cho n1 thì xuất ra màn hình câu “n2 chia hết cho n1” nếu không thì xuất ra màn hình câu “n2 không chia hết cho n1”
console.log(coChiahet(b, a));
//     22. Viết hàm tính chu vi hình chữ nhật
function chuViChuNhat(a, b) {
    return (a + b) * 2
}
//     23. Viết hàm tính diện tích hình chữ nhật 
function dienTichChuNhat(a, b) {
    return a * b
}
//     24. Sử dụng hàm (22) (23) để tính chu vi và diện tích một hình chữ nhật trong đó 2 cạnh có độ dài lần luợt là n1 và n2
console.log(`Chu vi hinh chu nhat canh ${a} va ${b} la: ${chuViChuNhat(a, b)}`);
console.log(`dien tich chu nhat canh ${a} va ${b} la: ${dienTichHcn(a, b)}`);
//     25. Viết hàm tính chu vi hình tròn
function chiViHinhTron(r) {
    return 2 * r * 3.14
}
//     26. Viết hàm tính diện tích hình tròn
function dienTichHinhTron(r) {
    return r * r * 3.14
}
//     27. Sử dụng hàm (25) (26) để tính chu vi và diện tích một hình tròn có bán kính là n1
console.log(`Chu vi hinh tron ban kinh ${a}  la: ${chuViHinhTron(a)}`)
console.log(`dien tich hinh tron ban kinh ${a}  la: ${dienTichHinhTron(a)}`)
//     28. Sử dụng hàm (25) (26) để tính chu vi và diện tích một hình tròn có bán kính là n2
console.log(`Chu vi hinh tron ban kinh ${b}  la: ${chuViHinhTron(b)}`)
console.log(`dien tich hinh tron ban kinh ${b}  la: ${dienTichHinhTron(b)}`)
// Chuỗi

// Tạo ra 5 biến s1, s2, s3, s4, s5 chứa 5 chuỗi 
let s1 = 'Xin';
let s2 = 'Chào';
let s3 = 'Các';
let s4 = 'Bạn';
let s5 = 'Nhỏ';
//     1. Viết hàm nối 2 chuỗi . Ví dụ có 2 chuỗi S1, S2 mục tiêu sẽ trả ra một chuỗi gộp của S1 và S2 là S = S1 + S2
function noiChuoi(s1, s2) {
    let noi = s1 + s2;
    return noi;
}

//     2. Dưa vào hàm nối 2 chuỗi ở 1. Xuất ra màn hình một chuỗi S là gộp của 5 chuỗi S1, S2, S3, S4, S5 
console.log(` Chuỗi sau khi nối là: ${noiChuoi(s1, s2) + noiChuoi(s3, s4) + s5}`);



//     3. Viết hàm in hoa chuỗi truyền vào. 
function inHoa(s1) {
    return s1.toLocaleUpperCase();
}


//     4. Dựa vào hàm in hoa đã làm ở 3. Xuất ra màn hình in hoa của 5 chuỗi S1, S2, S3, S4, S5 và S = S1S2S3S4S5 
console.log(inHoa(s1));
console.log(inHoa(s2));
console.log(inHoa(s3));
console.log(inHoa(s4));
console.log(inHoa(s5));

console.log(inHoa(s1 + s2 + s3 + s4 + s5));



//     5. Viết hàm kiểm tra chuỗi này có tồn tại trong chuỗi kia hay không.
function coTonTai(s1, s2) {
    return s1.includes(s2);
}


console.log(`Cắt chuỗi ${s1} là: ${s1.substring(1, 3)}`);
console.log(`Cắt chuỗi ${s2} là: ${s2.substring(1, 3)}`);
console.log(`Cắt chuỗi ${s3} là: ${s3.substring(1, 3)}`);
console.log(`Cắt chuỗi ${s4} là: ${s4.substring(1, 3)}`);
console.log(`Cắt chuỗi ${s5} là: ${s5.substring(1, 3)}`);
//     6. Sử dụng hàm 5 để kiểm tra S2 có tồn tại trong S1 không 
console.log(` Kiểm tra sự tồn tại của ${s2} trong ${s1}: ${coTonTai(s1, s2)}`);





//     7. sử dụng hàm [s.length] để xuất ra độ dài các chuỗi s1-s5 và độ sài của chuỗi S1S2S3S4S5
console.log(`Độ dài của chuỗi ${s1} là: ${s1.length}`);
console.log(`Độ dài của chuỗi ${s2} là: ${s2.length}`);
console.log(`Độ dài của chuỗi ${s3} là: ${s3.length}`);
console.log(`Độ dài của chuỗi ${s4} là: ${s4.length}`);
console.log(`Độ dài của chuỗi ${s5} là: ${s5.length}`);
console.log(`Độ dài của chuỗi ${S} là: ${S.length}`);
//     8. Sử dụng hàm có sẵn [string.substring(begin,end)] để cắt ra một chuỗi con của S1,S2,S3,S4,S5 từ vị trí số 1 tới vị trí số 3
function chuoiTonTai(s1, s2) {
    if (s1.includes(s2)) {
        return `${s2} có tồn tại trong ${s1}`;
    } else return `${s2} không tồn tại trong ${s1}`;
}
//     9. sử dụng hàm có sẵn [string.includes(s)] để xem S1, S2, S3, S4 có tồn tại trong S5 không. Nếu S1 có tồn tịa thì xuất ra màn hình câu "S1 có tồn tại trong S5" nếu không thì xuất ra câu "S1 không tồn tại trong S5". Tương tự đối với S2, S3, S4
console.log(chuoiTonTai(s5, s1));
console.log(chuoiTonTai(s5, s2));
console.log(chuoiTonTai(s5, s3));
console.log(chuoiTonTai(s5, s4));





