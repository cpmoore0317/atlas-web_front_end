// Module for managing Hogwarts students
const studentHogwarts = (() => {
    let privateScore = 0; // Private variable for student score
    let name = null; // Private variable for student name
  
    // Private method to change student score by given points
    const changeScoreBy = (points) => {
      privateScore += points;
    };
  
    // Public methods exposed by the module
    return {
      // Method to set student name
      setName: (newName) => {
        name = newName;
      },
      // Method to reward the student
      rewardStudent: () => {
        changeScoreBy(1);
      },
      // Method to penalize the student
      penalizeStudent: () => {
        changeScoreBy(-1);
      },
      // Method to get the student's score
      getScore: () => {
        return `${name}: ${privateScore}`;
      }
    };
  })();
  
  // Create instance for Harry
  const harry = Object.create(studentHogwarts);
  harry.setName('Harry');
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  console.log(harry.getScore());
  
  // Create instance for Draco
  const draco = Object.create(studentHogwarts);
  draco.setName('Draco');
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  console.log(draco.getScore());
  