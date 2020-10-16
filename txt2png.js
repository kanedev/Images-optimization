var fs = require('fs');
var text2png = require('text2png');
fs.writeFileSync('mediaText2Png/out.png',

//text2png('Hello!', {color: 'blue'})

text2png('Hello \nMr. Walid 😁', {
    font: '80px Futura',
    color: 'teal',
    backgroundColor: 'linen',
    lineSpacing: 10,
    padding: 20
  })



);

// For more documentation : https://github.com/tkrkt/text2png

// text2png('Example\nText', {
//     font: '80px Futura',
//     color: 'teal',
//     backgroundColor: 'linen',
//     lineSpacing: 10,
//     padding: 20
//   });