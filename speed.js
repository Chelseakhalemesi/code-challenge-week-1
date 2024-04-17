//Takes the speed of the car as input
function calculateDemerits(speed) {
  if (speed < 70) {
    console.log("Ok");
    return 0;
  }
//Prints the total number of demerit points
  const demerits = Math.floor((speed - 70) / 5);
  console.log(`Points: ${demerits}`);

  if (demerits > 12) {
    console.log("License suspended");
  }

  return demerits;
}

//Example usage
const speed = parseInt(prompt("Please enter the speed of the car (between 0 and 100):"));
const demerits = calculateDemerits(speed);