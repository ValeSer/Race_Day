let raceNumber = Math.floor(Math.random() * 1000);

const earlyRunner = false;

const runnerAge = 20;

if (runnerAge >= 18 && earlyRunner === true){ raceNumber += 1000;
}

if (runnerAge >= 18 && earlyRunner === true){
     console.log(`You will race at 9:30am with the number ${raceNumber}.`);
} else if(runnerAge >= 18 && !earlyRunner === true) {
  console.log(`You will race at 11:00am with the number ${raceNumber}.`);
}

