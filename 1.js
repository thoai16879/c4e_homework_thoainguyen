// btvn array
// Bài 1:
// Để đổi vị trí của 2 phần tử a,b với nhau:
//  C1:
// khởi tạo "trunggian" sau đó:
// trunggian = a;
// a = b;
// b = trunggian;
//
//   C2:
// Sử dụng hàm so sánh: array.sort(function(a,b){ return a-b;})
// khi hàm sort() so sánh hai giá trị, nó sẽ gửi giá trị tới
// hàm so sánh và sắp xếp theo giá trị kết quả trả về
// (-, 0, +)
//
// VD 1:
// let a = 5;
// let b = 6;
// console.log(a,b);
// let trunggian = a;
// a = b;
// b = trunggian;
// console.log(a,b);
//
// VD 2:
// let arr = [40, 100, 1, 5, 25, 10];
// console.log(arr);
// arr.sort(function(a,b){return a-b});
// console.log(arr);
//
// Bài 2:
// const s = 'hello beauty there'
// a = s.split(" ");
// console.log(a);
//


// Bài 3:
// const a = [4, 5, 7, -8];
// console.log(...a);
//
//
// Bài 4:
// let shop = ["Jeans","T-Shirt","Socks"];
// let loop = true;
// while(loop){
//     let userinput1 = prompt("127.0.0.1:5000 says\nHi there, welcome to shop admin panel, what do you want (C,R,U,D)").toLowerCase();
//     if(userinput1 === "e"){
//         alert("127.0.0.1:5000 says\nThis command is not supported");
//     }else if(userinput1 === "r"){
//         for(let i=0;i<shop.length;i++){
//             console.log(`${i+1}. ${shop[i]}`);
//         }
//     }else if(userinput1 === "c"){
//         let newClo = shop.push(prompt("127.0.0.1:5000 says\nEnter the name of the new item"));
//         alert("127.0.0.1:5000 says\nDone");
//     }else if(userinput1 === "u"){
//         let n = Number(prompt("127.0.0.1:5000 says\nEnter the position you want to update"));
//         shop[n-1] = prompt("127.0.0.1:5000 says\nEnter the new name");
//         alert("127.0.0.1:5000 says\nDone");
//     }else if(userinput1 === "d"){
//         let n = Number(prompt("127.0.0.1:5000 says\nEnter the position you want to delete"));
//         shop.splice(n-1,1);
//         alert("127.0.0.1:5000 says\nDone");
//     }
//     else{
//         alert("127.0.0.1:5000 says\nSystem will come out");
//         loop = false;
//     }
// }
//
//// Câu 5+6+7:
// let input = prompt("127.0.0.1:5000 says\nEnter a squence of numbers, separated','");
// console.log(input);
// let a = input.split(",");
// let sum = 0;
// console.log(...a);
// for (let i = 0; i < a.length; i++) {
//     sum = sum + Number(a[i]);
// }
// alert(`127.0.0.1:5000 says\nThe sum of them is ${sum}`);

// let min = Number(a[0]);
// for (let i = 0; i < a.length; i++) {
//     if (Number(a[i]) <= min) {
//         min = Number(a[i]);
//     }
// }
// alert(`127.0.0.1:5000 says\nThe smallest number is ${min}`);

// let random = Number(prompt("127.0.0.1:5000 says\nEnter a number"));
// let co = 0;
// let b = [];
// if (a.length >= 5) {
//     for (let i = 0; i < a.length; i++) {
//         if (Number(a[i]) === random) {
//             co = 1;
//             b.push(i);
//         }
//     }
// }
// if(co === 1){
//     alert(`127.0.0.1:5000 says\n${random} is FOUND in my array at index `+b);
// }else{
//     alert(`127.0.0.1:5000 says\n${random} is NOT found in my array`);
// }


