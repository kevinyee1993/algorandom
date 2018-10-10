const axios = require('axios');

const questionSet = [
  {
    category: 'bit-manipulation',
    title: 'Insertion',
    question: 'You are given two 32-bit numbers, N and M, and two bit positions, i and j.  Write a method to insert M into M such that M starts at bit j and ends at bit i.  You can assume that the bits j through i have enough space to fit all of M.  That is, if M = 10011, you can assume that there are at least 5 bits between j and i.  You would not, for example, have j = 3 and i = 2, because M could not fully fit between bit 3 and bit 2.',
    isSolved: false
  },
  {
    category: 'bit-manipulation',
    title: 'Binary to String',
    question: 'Given a real number between 0 and 1 (e.g., 0.72) that is passed in as a double, print the binary representation.  If the number cannot be represented accurately in binary with at most 32 characters, print "ERROR".',
    isSolved: false
  },
  {
    category: 'bit-manipulation',
    title: 'Flip Bit to Win',
    question: 'You have an integer and you can flip exactly one bit from a 0 to a 1.  Write code to find the length of the longest sequence of 1s you could create.',
    isSolved: false
  },
  {
    category: 'bit-manipulation',
    title: 'Next Number',
    question: 'Given a positive integer, print the next smallest and the next largest number that have the same number of 1 bits in their binary representation.',
    isSolved: false
  },
  {
    category: 'bit-manipulation',
    title: 'Debugger',
    question: 'Explain what the following code does: ((n & (n-1)) == 0)',
    isSolved: false
  },
  {
    category: 'bit-manipulation',
    title: 'Conversion',
    question: 'Write a function to determine the number of bits you would need to flip to convert integer A to integer B.',
    isSolved: false
  },
  {
    category: 'bit-manipulation',
    title: 'Pairwise Swap',
    question: 'Write a program to swap odd and even bits in an integer with as few instructions as possib.e (e.g., bit 0 and bit 1 are swapped, bit 2 and bit 3 are swapped, and so on).',
    isSolved: false
  },
  {
    category: 'bit-manipulation',
    title: 'Draw Line',
    question: 'A monochrome screen is stored as single array of bytes, allowing eight consecutive pixels to be stored in one byte.  The screen has width w, where w is divisible by 8(that is, no byte will be split across rows).  The height of the screen, of course, can be derived from the length of the array and the width.  Implement a function that draws a horizontal line from (x1, y) to (x2, y).',
    isSolved: false
  },

];

questionSet.forEach( async (question) => {
  await axios.post('http://localhost:5000/algorithms', question)
    .then(function(response) {
      console.log('posted');
    })
    .catch(function(error) {
      console.log(error);
    })
})
