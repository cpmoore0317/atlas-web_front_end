// Log start of the execution queue
console.log('Start of the execution queue');

// Using setTimeout to ensure the final code block executes after everything else
setTimeout(() => {
  // Loop to iterate 100 times and log iteration number
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
  // Log end of the loop printing
  console.log('End of the loop printing');
  
  // Log final code block to be executed
  console.log('Final code block to be executed');
}, 0);
