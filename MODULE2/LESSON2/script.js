// alert("Welcome to the quiz '10 facts about Lviv'");
// let ask = confirm("Want to play a quiz?");
// if (ask) {
//   alert("Let's get started!");
//   let count = 0;
//   let firstAsk = +prompt(
//     "How many states was the city of Lviv a part of during its history?"
//   );

//   if (firstAsk === 8) {
//     count++;
//     console.log(
//       alert(`Congratulations on the correct answer! Your total score ${count}`)
//     );
//   } else {
//     console.log(
//       alert(
//         `Sorry, but your answer is incorrect and the total score is still there ${count}`
//       )
//     );
//   }
//   let secondAsk = +prompt("In what year was the city of Lviv founded?");
//   if (secondAsk === 1256) {
//     count++;
//     console.log(
//       alert(`Congratulations on the correct answer! Your total score ${count}`)
//     );
//   } else {
//     console.log(
//       alert(
//         `Sorry, but your answer is incorrect and the total score is still there ${count}`
//       )
//     );
//   }
//   let thirdAsk = +prompt("How many people live in Lviv?");
//   if (thirdAsk === 721301) {
//     count++;
//     console.log(
//       alert(`Congratulations on the correct answer! Your total score ${count}`)
//     );
//   } else {
//     console.log(
//       alert(
//         `Sorry, but your answer is incorrect and the total score is still there ${count}`
//       )
//     );
//   }
//   let fourthAsk = +prompt("How many museums are there in Lviv?");
//   if (fourthAsk === 60) {
//     count++;
//     console.log(
//       alert(`Congratulations on the correct answer! Your total score ${count}`)
//     );
//   } else {
//     console.log(
//       alert(
//         `Sorry, but your answer is incorrect and the total score is still there ${count}`
//       )
//     );
//   }
//   let fifthAsk = prompt(
//     "On July 14, 1894, the first Ukrainian football match took place in Stryi Park in Lviv. The team from which city did the Lviv team play?"
//   );
//   if (fifthAsk == "Краків" || "краків") {
//     count++;
//     console.log(
//       alert(`Congratulations on the correct answer! Your total score ${count}`)
//     );
//   } else {
//     console.log(
//       alert(
//         `Sorry, but your answer is incorrect and the total score is still there ${count}`
//       )
//     );
//   }
//   let sixthAsk = prompt(
//     "What was invented in the city of Leva for the first time in history? There is a restaurant with that name on Virmenska Street"
//   );
//   if (sixthAsk == "Гасова лампа" || "гасова лампа") {
//     count++;
//     console.log(
//       alert(`Congratulations on the correct answer! Your total score ${count}`)
//     );
//   } else {
//     console.log(
//       alert(
//         `Sorry, but your answer is incorrect and the total score is still there ${count}`
//       )
//     );
//   }
//   let seventhAsk = prompt(
//     "In Lviv, the only monument in Ukraine was erected, to whom exactly?"
//   );
//   if (seventhAsk == "Пабло Пікассо" || "пікассо" || "Пікассо") {
//     count++;
//     console.log(
//       alert(`Congratulations on the correct answer! Your total score ${count}`)
//     );
//   } else {
//     console.log(
//       alert(
//         `Sorry, but your answer is incorrect and the total score is still there ${count}`
//       )
//     );
//   }
//   let eighthAsk = prompt(
//     "Which is the highest architectural building in Lviv?"
//   );
//   if (eighthAsk == "церква Св. Ольги та Єлизавети" || "костел Ольги та Єлизавети" || "Ольги та Єлизавети") {
//     count++;
//     console.log(
//       alert(`Congratulations on the correct answer! Your total score ${count}`)
//     );
//   } else {
//     console.log(
//       alert(
//         `Sorry, but your answer is incorrect and the total score is still there ${count}`
//       )
//     );
//   }
//   let ninethAsk = prompt("What is the biggest book festival in all of Ukraine that Lviv is famous for?");
//   if (ninethAsk == "Форум видавців у Львові" || "Форум видавцівів" || "форум видавців") {
//     count++;
//     console.log(
//       alert(`Congratulations on the correct answer! Your total score ${count}`)
//     );
//   } else {
//     console.log(
//       alert(
//         `Sorry, but your answer is incorrect and the total score is still there ${count}`
//       )
//     );
//   }
//   let tenthAsk = +prompt("There is a street in Lviv with several names. And its specificity is that the names are added one by one every year. Former Lviv street Arkhivna. How many names does the street have?");
//   if (tenthAsk === 7) {
//     count++;
//     console.log(
//       alert(`Congratulations on the correct answer! Your total score ${count}`)
//     );
//   } else {
//     console.log(
//       alert(
//         `Sorry, but your answer is incorrect and the total score is still there ${count}`
//       )
//     );
//   }
// } else {
//   alert("Goodbay :(");
// }
// if(count === 10){
//     console.log(`Well done, you have excellent knowledge about Lviv. Your total score ${coutn}`)
// }
// else if(3 <= count <=9){
//   console.log(`Well done, you have pretty knovledge out Lviv. Your total score ${coutn}`)
// }
// else{
//   console.log(`Bad...Go to study. Your total score ${coutn}`)
// }






let season = prompt("month");
if(season > 0 && season < 13){
if (season == 12 || season <= 2) {
  if(season == 12){
    document.write("<h1>The season is winter and the month is December</h1>")
  }else if(season == 1){
    document.write("<h1>The season is winter and the month is January</h1>")
  }else if(season == 2){
    document.write("<h1>The season is winter and the month is February</h1>")
  }
  
} else if (season >= 3 && season <= 5) {
  if(season == 3){
    document.write("<h1>The season is spring and the month is March</h1>")
  }else if(season == 4){
    document.write("<h1>The season is spring and the month is April</h1>")
  }else if(season == 5){
    document.write("<h1>The season is spring and the month is May</h1>")
  }
} else if (season >= 6 && season <= 8) {
  if(season == 6){
    document.write("<h1>The season is summer and the month is June</h1>")
  }else if(season == 7){
    document.write("<h1>The season is summer and the month is July</h1>")
  }else if(season == 8){
    document.write("<h1>The season is summer and the month is August</h1>")
  }
} else if (season >= 9 && season <= 11) {
  if(season == 9){
    document.write("<h1>The season is summer and the month is September</h1>")
  }else if(season == 10){
    document.write("<h1>The season is summer and the month is October</h1>")
  }else if(season == 11){
    document.write("<h1>The season is summer and the month is November</h1>")
  }
}
}
 else {
  document.write("<h1>Such a month does not exist</h1>");
}
