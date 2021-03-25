let raceNumber = Math.floor(Math.random() * 1000);

const earlyRunner = false;
const lateRunner = true;
const youthRunner = true

const runnerAge = 18;

if (runnerAge >= 18 && earlyRunner === true){ raceNumber += 1000;
}

if (runnerAge > 18 && earlyRunner === true){ console.log(`You will race at 9:30 am with the number ${raceNumber}.`);
} else if(runnerAge > 18 && !earlyRunner === true) {
  console.log(`You will race at 11:00 am with the number ${raceNumber}.`);
} else if (runnerAge < 18 ) {
  console.log(`You will race at 12:30 pm with the number ${raceNumber}.`)
} else if (runnerAge === 18 ) {
  console.log(`You should see the registration desk.`);
}

