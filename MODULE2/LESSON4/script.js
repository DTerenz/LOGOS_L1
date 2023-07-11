//                                       TASK    1                                        //

// let month;
// let seaseon;
// let monthNum = prompt("write the number month");

// switch (monthNum) {
//   case "1":
//     month = "January";
//     break;

//   case "2":
//     month = "February";
//     break;

//   case "3":
//     month = "March";
//     break;

//   case "4":
//     month = "April";
//     break;

//   case "5":
//     month = "May";
//     break;

//   case "6":
//     month = "June";
//     break;

//   case "7":
//     month = "July";
//     break;

//   case "8":
//     month = "August";
//     break;

//   case "9":
//     month = "September";
//     break;

//   case "10":
//     month = "October";
//     break;

//   case "11":
//     month = "November";
//     break;

//   case "12":
//     month = "December";
//     break;

//   default:
//     alert("Such a month does not exist");
// }

// switch (monthNum) {
//   case "12":
//   case "1":
//   case "2":
//     season = "winter";
//     break;

//   case "3":
//   case "4":
//   case "5":
//     season = "spring";
//     break;

//   case "6":
//   case "7":
//   case "8":
//     season = "summer";
//     break;

//   case "9":
//   case "10":
//   case "11":
//     season = "autumn";
//     break;
// }

// alert(
//   `You write ${monthNum} and this is month ${month} and season is ${season}`
// );





//                                              TASK    2                                               //






// num (+prompt());

// function num(a){
// if(a == 0){
//     console.log("this is 0")
// } else if(a> 0){
//     for(let i = a; i<=a; i++){
//        if(i % 2 == 0){
//         console.log("parne")
//        }else{
//         console.log("neparne")
//        }
//     }
// }
// }





//                                         TASK    3                                                           //








function operation() {
  let num1 = +prompt("write num1");
  let num2 = +prompt("write num2");
  let action = +prompt(
    "to add rwite 1, take away write 2, to multiply write 3, to share write 4");

  if (action === 1) {
    return (result = num1 + num2);
  } else if (action === 2) {
    return (result = num1 - num2);
  } else if (action === 3) {
    return (result = num1 * num2);
  } else if (action === 4) {
    return (result = num1 / num2);
  }
}


alert(operation());
