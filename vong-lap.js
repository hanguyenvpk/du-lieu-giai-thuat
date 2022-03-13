// 1. Viết hàm xuất ra một tin nhắn, n lần
//     - showMessage(message, n)

function showMessage(noiDungTinNhan, soLan) {
    for (var i = 0; i < soLan; i = i + 1) {
        console.log(noiDungTinNhan);
    }
}
showMessage(`xin chao`, 1);



// 2. Sử dung hàm (1) xuất ra 10 lần dòng chữ "Hôm nay trời đẹp quá"
showMessage(`xin chao`, 10);
// 3. Viết hàm tính tổng từ 1 tới n 
function tong  (n)  {
    let tong = 0;
    for (let i = 0; i <= n; i++) {
        tong += i
    }
    return tong
}

// 4. Sử dụng hàm (3) tính toán tổng từ 1 tới 100; tính toán tổng từ 1 tới 500
console.log(`tổng từ 1 đến 100 : ${tong(100)}`);
console.log(`tổng 1 từ 100 : ${tong(500)}`);
// 5. Viết hàm tính tổng từ a tới b 
function tinhtong  (a, b)  {
    let tong = 0;
    for (let i = a; i <= b; i++) {
        tong += i
    }
    return tong
}

// 6. Sử dụng hàm (5) tính toán tổng từ 1 tới 100; tính toán tổng từ 20 tới 76
console.log(`tong ${1} đến ${100} : ${tinhtong(20, 76)}`);
// 7. Viết hàm tính tổng tất cả các số lẻ từ a tới b 
function tongle  (a, b)  {
    let tong = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 != 0) {
            tong += i
        }
    }
    return tong
}
// 8. Sử dụng hàm (7) tính toán tổng từ 1 tới 100; tính toán tổng từ 20 tới 76
console.log(`tổng lẻ ${1} đến ${100}  : ${tongle(1, 100)}`);
console.log(`tổng lẻ ${20} đến ${76}  : ${tongle(20, 76)}`);
// 9. Viết hàm xuất ra n số lẻ nhỏ nhất 
// 10. Sử dụng hàm (9) xuất ra 100 số lẻ gần nhất 
// 11. Viết hàm xuất ra n số lẻ gần nhất bắt đầu từ m. Ví dụ: viết ra 3 số lẻ gần nhất bắt đầu từ 102 => 103; 105; 107
// 12. Sử dụng hàm (11) xuất ra 57 số lẻ gần nhất bắt đầu từ 1005
// 13. Viết hàm kiểm tra một số có phải là số nguyên tố hay không? Biết số nguyên tố là số chia hết cho một và chính nó.
function isPrime  (a)  {
    if (a < 2) {
        return false
    }
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(4));
// 14. Viết hàm xuất ra n số nguyên tố nhỏ nhất. 
// 15. Sử dụng hàm (14) xuất ra 20 số nguyên tố nhỏ nhất.
// 16. Viết hàm xuất ra n số nguyên tố nhỏ nhất băts đầu từ m
// 17. Sử dụng hàm (16) xuất ra 20 số nguyên tô nhỏ nhất bắt đầu từ 1000



