// console.log(): in ra màn hình 
console.log("Hello world");

// Tên - tuổi - trường học
console.log("Nguyễn Trần Hoàng Minh");
console.log("16");
console.log("THPT NK");

// global - local
// global: là một biến có thể gọi tất cả hay mọi nơi ở trong đoạn code của mình
// var - const: var là một biến số, const là một hàm số
var name = "Thầy Phong"
// var: khai báo biến
// name: tên biến - có thể thay đổi tùy thuộc vào ngữ cảnh sử dụng
// = : gán cho nhau một giá trị nào đó
// "Thầy phong": giá trị của biến
console.log(name);
// Phương pháp cộng chuỗi name + đoạn văn
console.log(name + " đi code dạo");
console.log(name + " đi chơi game");
console.log(name + " đi date");

var userName = "Gosu"
console.log(userName + " đăng nhập");
// truyền biến vào console.log thì sử dụng ${data}
console.log(`${userName} đăng nhập`);

// kiểu dữ liệu 
// 1. Kiểu số - number: số nguyên, số thực
// in theo định dạng: số thức/nguyên: [số đã khai báo]
var numberInteger = 10;  //sô nguyên
// số nguyên: 10
console.log(`Số nguyên: ${numberInteger}`);
console.log("Số nguyên: " + numberInteger);
var numberFloat = 10.5; // số thực
// số thực: 10.5
console.log(`Số thực: ${numberInteger}`);
console.log("Số thực: " + numberInteger);
// 2. kiểu chuỗi - string ""
console.log("Học code cùng thầy Phong")
// 3. Kiểu boolean - đúng sai nó sẽ mang 2 giá trị: true và false
console.log(true);
console.log(false);
// 4. undefined - không xác định tuy nhiên vẫn mag trong mình một giá trị bất kì
console.log(undefined);
// 5. null - rỗng và không bất kì giá trị hay là dữ liệu nào hết
console.log(null);
// 6. array - nơi lưu trữ các dữ liệu
var listArray = ["Phong",  18, "male", false]
console.log(listArray[0])
// Tên:
// Tuổi:
// Giới tính:
// Trong mối quan hệ:

// console.log("Tên: " +listArray[0])
console.log(`Tên : ${listArray[0]}`)
console.log(`Tuổi : ${listArray[1]}`)
console.log(`Giới tính : ${listArray[2]}`)
console.log(`Tình trạng mối quan hệ : ${listArray[3]}`)
// 7. object - đối tượng. Ta cần quan tâm 2 thứ: key - values
var cat = {
    name: "Muối",
    age: 4,
    fur: "red",
    type: "ALN",
}
console.log(cat.name)
console.log(cat.age)
console.log(cat.fur)
