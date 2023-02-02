// let display = document.getElementById("textbox");
// let display2 = document.getElementById("header");
// let arr = [];
// function add() {
//   console.log(arr.push(display.value), arr);
// //   display2.innerHTML = arr;
//     show();
// }
// function show(){
//     ul.innerHTML=""
//     for (let index = 0; index < arr.length; index++) {
//         ul.innerHTML+=`<li>${arr[index]}</li>`
        
//     }
// }
// // for (let index = 0; index < arr.length; index++) {
// //     console.log(arr[index]);

// // // }

// // function add(){
// //  arr = display.value.push()
// // }

// // console.log("arr")
// // let arry=[0,1,,2,3,4,,5,6,7,8,9,10]
// for (let index = 20; index >0; index--) {
//    if ( index % 2==0){
//      console.log(index);
//    }

// }
// let questions =[
//   {question:"who is the president of naija",
//  options:['Teslim','Buhari','Jaonathan'],
// answer: 'Buhari',
// chosen:""},
//   {
//     question:'what is a noun',
//     options:['teslim','Buhari','Jonathan'],
//     answer:' Buhari',
//     chosen:""
//   },

//   {
//     question:'who is portable',
//     options:['Teslim','Buhari','Jonathan'],
//     answer:'Buhari',
//     chosen:""
//   }
// ];
// for (let i = 0; i < questions.length; i++) {
//    console.log(questions[i].options[0]);
  
// }
// let ar=[[{ar:['mango','cashew','orange']}]];
// let nwa=ar[0][0].ar;
// for (let i = 0; i < nwa.length; i++) {
//   console.log(nwa[i]);
  
//}
// let ar={data:{data:[[['mango','cashew','orange']]]}}
// let arrr= ar.data.data[0][0]
// for (let i = 0; i < arrr.length; i++) {
//         console.log(arrr[i]);
  
// }
// let num=2
// for (let i = 1; i <=12; i++){
// // const element = array[i];
// document.getElementById("header").innerHTML+=`<p>${num}* ${i}=${num*i}</p>`
//  }
 let display1=document.getElementById("textbox1")
let display2=document.getElementById("textbox2")
// // let num=3\
// function solve(){
//   document.getElementById("header").innerHTML=""
//   for (let index = +display1.value; index<=+display2.value; index++) {
//     // document.getElementById("header").innerHTML+=`<p>${display2.value}*${i}=${display2.value*i}</p>`
//     for (let i = 1; i <= 12; i++) {
//       document.getElementById("header").innerHTML += `${
//         index
//       }* ${i}=${index * i}<br>`;
//     }
//     document.getElementById("header").innerHTML += `<p></p>`
    
//   }
// for (let i = 1; i <=12; i++) {
  
//   document.getElementById("header").innerHTML+=`<p>${display1.value}* ${i}=${display1.value*i}</p>`
//   ;
  
// }
//}
// let arr=["ola","moji","feranmi","deji","ore"];
//  arr.forEach(function(element,index)  {
//   document.getElementById("header").innerHTML+=`${index + 1} .${element} <br>`
  
//  })
//  document.getElementById("header").innerHTML+=`<p></p>`;
 
//  let arr=[
//   {Name:display1.value,phone:display2.value}
//  ]

let people=[]
let rem;
 function solve(){
  let arr = { name: display1.value, phone: display2.value };
  people.push(arr)
   sharp();
    
  //   arr.forEach(function () {
  //     row.innerHTML += `<tr>
  //  <td> ${arr[0]}</td> <td> ${arr[1]}</td> </tr>`;
  //     // console.log(arr1[0], arr1[1]);
  //   });
  }
 
 function sharp(){
  row.innerHTML=""
  people.forEach(function (element,i) {
    row.innerHTML += `<tr>
    <td>${i + 1}</td>
     <td> ${element.name}</td>
     <td> ${
       element.phone
     }</td> <td><button class="btn btn-danger btn-lg" onclick="remove(${i})">remove</button></td> </tr>  `;
    
     
     

    // console.log(arr1[0], arr1[1]);
  });
 }
//  let index;
function remove(i){
  people. splice(i,1);
  // sharp();
  sharp();
  
 };

//  function remove(element,index){
//   // row.innerHTML=display1.value="",display2.value=""
//   row.innerHTML=`${element.name.slice(0,index),element.phone.slice(0,index)}`
//  }

// for (let index = 0; index < arr.length; index++)  {
//    document.getElementById("header").innerHTML+=`${index + 1}. ${arr[index]}<br>`
  
// }
// document.getElementById("header").innerHTML+=`<p></P>`

