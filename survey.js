const readline = require('readline');

const questions = [
`What's your name? `,
`What's an activity you like doing? `,
`What do you listen to while doing that? `,
`Which meal is your favourite (eg: dinner, brunch, etc.) `,
`What's your favourite thing to eat for that meal? `,
`Which sport is your absolute favourite? `,
`What is your superpower? In a few words, tell us what you are amazing at! `
];

let answers = [];

const askQuestion = function (i){
  process.stdout.write(questions[i])

}

process.stdin.on('data', function (data){

  answers.push(data.toString().trim());

  if (answers.length < questions.length){
    askQuestion(answers.length);
  }
  else {
    console.log('\n');
    console.log(`Hello, my nickname is ${answers[0]} I enjoy ${answers[1]} on my spare time. While partaking in ${answers[1]} I listen to ${answers[2]}.I love eating ${answers[4]} during ${answers[3]}. My favourite sport is ${answers[5]}, finally my super power is ${answers[6]}`);
    process.exit();
    
  }

});

askQuestion(0);

