let raceNumber = Math.floor(Math.random() * 1000);


const registeredEarly = true;


const age = 31;

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly) {
  console.log(`Racer ${raceNumber} will start at 9:30 am.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Racer ${raceNumber} will race at 11:00 am.`);
} else if (age < 18) {
  console.log(`Racer ${raceNumber} will race at 12:30pm.`);
} else if (age == 18) {
  console.log(`Please see registration desk.`);
}

