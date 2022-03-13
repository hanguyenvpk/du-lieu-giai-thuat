// Mảng để lưu trữ danh sách các giá trị. Giá trị đó có thể là number, string, date.....
// Ví dụ: 
// Mảng lưu trữ các giá trị số từ 1 tới 3
// [1,2,3]

// Mảng lưu trữ các sở thích cá nhân 
// ["đá bóng", "bóng chuyền"]

// Bài tập
// 1. Tạo một mảng chứa các số từ 1 tới 10
let mang = [1,2,3,4,5,6,7,8,9,10]
// 2. Tạo một mảng lưu trữ sở thích cá nhân 
let sothich = ['nghe nhạc','game',]
// 3. Xuất mảng (1) ra console.log
console.log(mang);
// 4. Xuất mảng (2) ra console.log
console.log(sothich);
// 5. thêm giá trị "cầu lông", "bơi lội" vào mảng sở thích 
sothich.push('bơi lội')
console.log(sothich);
// 6. Cập nhật giá trị "bóng chuyền" trong mảng thành "Bóng Chuyền"
sothich[0]='bóng chuyền'
console.log(sothich);
// 7. Xoá 2 phần tử tại vị trí số 1 và 2 ra khỏi mảng 
sothich.splice(1,2)
console.log(sothich);
// 8. Viết hàm trả ra danh sách tất cả số nhỏ hơn n
function getLessThan(n){
    let mang=[]
    for(let i=0;i<n;i++){
        mang.push(i)
    }
    return mang
}
//     - getLessThan(n): number[]
//     - Ví dụ getLessThan(3) sẽ trả ra mảng [0,1,2]
// 9. Sử dụng hàm (8) xuất ra console danh sách các số nhỏ hơn 100 
console.log(getLessThan(100));
// 10. Viết hàm trả ra danh sách tất cả các số lẻ nhỏ hơn n
const getOddlessThan=(n)=>{
    let mang=[]
    for(let i=0;i<n;i++){
        if(i%2!=0){
            mang.push(i)
        }
    }
    return mang
}
//     - getOddlessThan(n): number[]
// 11. Sử dụng hàm (9) xuất ra console danh sách toàn bộ số lẻ <1000
console.log(getOddlessThan(100));
// 12. Viết hàm trả ra danh sách in hoa tất cả các phần tử trong mảng. Đầu vào là một mang, đầu ra là mông mảng khác và tất cả các phần tử được in hoa  
//     - toUpperCase(arr) : string[]
// 13. Sử dụng hàm (12) để in hoa mảng sở thích cá nhân 

// 14. Viết hàm tìm ra vị trí phần tử đầu tiên nằm trong mảng 
//     - findFirst(arr, chuoiCanTim): number
// 15. Sử dụng hàm (9). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá"]    
//     - string cần tìm: bóng rổ
//     - kết quả trả ra: vị trí 2

// 16. Viết hàm tìm ra vị trí phần tử cuối cùng nằm trong mảng 
//     - findLast(arr, chuoiCanTim): number
// 17. Sử dụng hàm (16). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá"]    
//     - string cần tìm: bóng rổ
//     - kết quả trả ra: vị trí 2


// 18. Viết hàm tìm ra vị trí tất cả phần tử nằm trong mảng 
//     - find(arr, chuoiCanTim): numer[]
// 19. Sử dụng hàm (19). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá", "bóng rổ"]    
//     - string cần tìm: bóng rổ
//     - kết quả trả ra: vị trí [2,4]

// 20. Viết hàm thêm một phần tử vào mảng 
//     - add(arr, chuoiCanThem): []
// 21. Sử dụng hàm (20). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá"]    
//     - string cần thêm: bóng rổ
//     - kết quả trả ra: ["bóng chuyền", "bóng rổ", "bóng đá", "bóng rổ"]

// 22. Viết hàm thêm một phần tử vào mảng, nhưng nếu phần tử đó đã tồn tại thì ko thêm nữa.
//     addIfNotExist(arr,chuoiCanThem):[]
// 23. Sử dụng hàm (22). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá"]    
//     - string cần thêm: bóng rổ
//     - kết quả trả ra: ["bóng chuyền", "bóng rổ", "bóng đá"]

// 24. Viết hàm xoá toàn bộ phần tử ra khỏi mảng 
//     - delete(arr,chuoiCanXoa): []
// 25. Sử dụng hàm (24). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá","bóng chuyền"]    
//     - string cần thêm: bóng chuyền
//     - kết quả trả ra: ["bóng rổ", "bóng đá"]
