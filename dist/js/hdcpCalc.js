const calculateBtn = document.querySelector(".calculateBtn button");

calculateBtn.addEventListener("click", (e) => {
  scores.classList.add("activeInfo"); 
});

function calculateScores(index) {
   let score1 = document.getElementById("score1");
   let score2 = document.getElementById("score2");
   let score3 = document.getElementById("score3");
   let score4 = document.getElementById("score4");
   let score5 = document.getElementById("score5");

   let calculatedAvg = ((score1 + score2 + score3 + score4 + score5) / 5 );
   console.log(calculatedAvg);
   
   if (calculatedAvg < 72) {
      console.log("Wow. Looks like You are a great scratch golfer. Way above the average golfer. Keep it Up")
   }
   else if (72 < calculatedAvg < 82) {
      console.log("Looks like your handicap is 1+-10+. That is really good. High above the average golfer. Nice job.")
   }
   else if (82 < calculatedAvg < 92) {
      console.log("Looks like your handicap is 10+-20+. That is pretty good. Above the average golfer. Keep Improving!")
   }
   else if (92 < calculatedAvg < 102) {
      console.log("Looks like your handicap is 20+-30+. Not bad. This is where the average golfer stands.")
   }
   else if (calculatedAvg < 102) {
      console.log("Looks like your handicap is 30+. There is no issue with that though, there is always room to improve.")
   }
   else {
      console.log("Try again")
   }
}
