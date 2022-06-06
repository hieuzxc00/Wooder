// bai 1 
/*
let nguyenDuong = (data) => {
    return (typeof (data) == 'number' && data > 0);
};
console.log(nguyenDuong(1));
*/

//bai 2
// function kiemtraSoChan(data) {
//     if (data > 0 && typeof (data) == 'number' && data % 2 == 0) {
//         return true;
//     }
//     return false;
// }
// console.log(kiemtraSoChan(20));

//bai 3
// function tinhtongSoChan(n) {
//     let sum = 0;
//     let index = 0;
//     while (index <= n) {    
//         if (index % 2 == 0) {
//             sum += index;
//         }
//         index++;
//     }
//     return sum;
// }
// console.log(tinhtongSoChan(5));

//bai 4
// function timsoLonNhat() { 
//     let number = [100, -1, 2, 25, 9, 30];
//     let max = Math.max(...number);
//     return max;
// }
// console.log(timsoLonNhat());
/*----------------------*/
// function timsoLonNhat(array) {
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (max < array[i]) {
//             max = array[i];
//         }
//     }
//     return max;
// }
// let number = [100, -1, 2, 25, 9, 30];
// console.log("so lon nhat la:", timsoLonNhat(number));


//bai 5
// function gopHaiMang() {
//     let objStudent = {
//         gender: 'male',
//         height: '175cm'
//     };
//     let objCar = {
//         color: 'yellow',
//         price: 15000000
//     };
//     let obj = {...objStudent, ...objCar};
//     return obj;
// }
// console.log(gopHaiMang());

// function gopHaiMang() {
//     let objStudent = {
//         gender: 'male',
//         height: '175cm'
//     };
//     let objCar = {
//         color: 'yellow',
//         price: 15000000
//     };
//     let arrayStudent = Object.entries(objStudent);
//     let arrayCar = Object.entries(objCar);
//     let result = arrayStudent.concat(arrayCar);
//     return result;
// }
// console.log(gopHaiMang());
    
//bai 6
// function prinTime() {
//     let d = new Date();
//     let hours = d.getHours();
//     let mins = d.getMinutes();
//     let secs = d.getSeconds();
//     console.log(("0" + hours).slice(-2) + ":" + ("0" + mins).slice(-2) + ":" + ("0" + secs).slice(-2));
//     /*-----------cách-2------------ */
//     let clock = d.toLocaleTimeString();
//     console.log(clock);
// }
// setInterval(prinTime, 1000);

//bai 7
// function  setComfirm() {
//     confirm('Are you marry me?');
// }
// setTimeout(setComfirm, 3000);

//bai 8
// function add0(data) {
//     if (data > 0 && typeof (data) == 'number') {
//         let string = data.toString(); 
//         return string.padStart(2, '0');
//     }else {
//         console.log('khong phai so nguyen duong');
//     }
// }
// console.log(add0(5));

//bai 9
// function deleteLastElement() {
//     let array = ['Hieu', 'Phu', 'Nghia', 'Cuong', 'Trung'];
//     array.splice(3, 4);
//     return array;
// }
// console.log(deleteLastElement());

/*-------------------------------------- Phần 2 ------------------------------------- */

//bài 1
// function catPhanTuMang() {
//     const arr = ['Nike', 'Adidas', 'NB', 'Dior', 'LV'];
//     result = arr.slice(3,5);
//     return result;
// }
// console.log(catPhanTuMang());

//bài 2
// function locMang() {
//     let arr = ['Nike', 'Adidas', 'NB', 'Dior', 'LV'];
//     let result = arr.filter( arr => arr.length > 3);
//     return result;
// }
// console.log(locMang());

//bài 3
// function duyetMang() {
//     let arr = [1, 3, 5, 7, 9, 12];
//     let result = arr.map(x => x * 2);
//     return result;
// }
// console.log(duyetMang());

//bài 4
// function findFisrtIndex() {
//     let arr = ['Nike', 'Adidas', 'NB', 'Nike', 'Dior'];
//     let result = arr.indexOf('Nike');
//     return result;
// }
// console.log(findFisrtIndex());

//bài 5
// function noiHaiMang() {
//     let arr1 = [1, 2, 3, 4];
//     let arr2 = [100, 200, 300, 400];
//     let result = [].concat(arr1, arr2);
//     return result;
// }
// console.log(noiHaiMang());

//bài 6
// function xulyMang(n) {
//     let arr = [];
//     if (n > 0 && typeof (n) == 'number') {
//         for (var i = 1; i <= n; i++) {
//             arr.push(Math.pow(i, 2));
//         }
//         return arr;
//     } else {
//         let note = 'vui long nhap so nguyen';
//         return note;
//     }
// }
// console.log(xulyMang(0));

//bài 7
// function layChieuDaiObj() {
//     let obj = {
//         name: 'Hieu',
//         age: 18,
//         gender: 'male',
//         job: 'student'
//     };
//     let length = Object.entries(obj).length;
//     return length;
// }
// console.log("Chieu dai mang la:", layChieuDaiObj());

/*-------------------------------------- Phần 3 ------------------------------------- */
    // let courses = [
    //     {
    //         id: 1,
    //         name: 'Newbie',
    //         price: 3500000
    //     },
    //     {
    //         id: 2,
    //         name: 'Web Responsive',
    //         price: 4600000
    //     },
    //     {
    //         id: 3,
    //         name: 'React Js',
    //         price: 6000000
    //     },           
    // ];

//Bài 1. Cho một mảng các khóa học như trên, bên trong là các khóa học kiểu object.
//  Sử dụng một phương thức phù hợp để duyệt qua mảng đã cho và in ra mảng mới
//   gồm các khóa học tương ứng, mỗi khóa học sẽ có thêm thuộc tính newprice 
//   (newprice là giá sau khi được giảm 30% so với giá gốc price).

// let newCourse = courses.map(function(course) {
//     return {
//         id: course.id,
//         name: course.name,
//         price: course.price,
//         newprice: course.price - (course.price * 0.3)
//     } ;
// });
// console.log(newCourse); 

// Bài 2: Cho một mảng các khóa học như bài 1, duyệt mảng và in ra màn hình
//  tên khóa học (đặt trong thẻ h2) và giá khóa học (đặt trong thẻ p),
//   2 thẻ này được nằm trong div có class='course'

// let newCourse2 = courses.map(function(course) {
//     return `<div class="course"><h2>${course.name}</h2><p>${course.price}</p></div>`;
// });
// console.log(newCourse2);

// Bài 3: Cho một mảng các khóa học như bài 1, 
// sử dụng phương thức phù hợp để tính và in ra tổng giá gốc của các khóa học
// let newCourse3 = courses.reduce(function(total, course) {
//     return total + course.price;
// }, 0); 
// console.log('Total Price is: ', newCourse3);

/*----------------Cách 2------------------ */

// let totalPrice = 0;

// for (let course of courses) {
//     totalPrice += course.price;
// }

// console.log('Total Price is: ', totalPrice);


// Bài 4: Cho một mảng các khóa học như bài 1, sử dụng phương thức phù hợp
//  để tạo và in ra mảng mới chứa các khóa học có giá (price) > 4000000
// let newCourse4 = courses.filter(function(course) {
//     return course.price > 4000000;
// });
// console.log(newCourse4);

// Bài 5: Cho một mảng 
// arrCourses = ['newbie', 'web responsive', 'react js', 'cfd training'], 
// tìm kiếm trong mảng có giá trị 'web responsive' hay không? trả về kiểu boolean.
    // let arrCourses = ['newbie', 'web responsive', 'react js', 'cfd training'];
    // console.log(arrCourses.includes('web responsive'));


// Bài 6: Cho một đối tượng const person = { name: 'Fred', age: 87 }, 
// kiểm tra xem đối tượng đó có thuộc tính name hay không? trả về kiểu boolean.
// const person = { 
//     name: 'Fred', 
//     age: 87 
// };
//     console.log(person.hasOwnProperty('name')); 