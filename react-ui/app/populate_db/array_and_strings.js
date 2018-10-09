const axios = require('axios');

const questionSet = [
  {
    category: 'arrays-strings',
    title: 'Is Unique',
    question: 'Implement an algorithm to determine if a string has all unique characters.  What if you cannot use additional data structures?',
    isSolved: false
  },
  {
    category: 'arrays-strings',
    title: 'Check Permutation',
    question: 'Given two strings, write a method to decide if one is a permutation of the other.',
    isSolved: false
  },
  {
    category: 'arrays-strings',
    title: 'URLify',
    question: 'Write a method to replace all spaces in a string with \'%20\'.  You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.',
    isSolved: false
  },
  {
    category: 'arrays-strings',
    title: 'Palindrome Permutation',
    question: 'Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards.  A permutation is a rearrangement of letters.  The palindrome does not need to be in the dictionary.',
    isSolved: false
  },
  {
    category: 'arrays-strings',
    title: 'One Away',
    question: 'There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.  Given two strings, write a function to check if they are one edit (or zero edits) away',
    isSolved: false
  },
  {
    category: 'arrays-strings',
    title: 'String Compression',
    question: 'Implement a method to perform basic string compression using the counts of repeated characters.  For example, the string aabcccccaaa would become a2b1c5a3.  If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z).',
    isSolved: false
  },
  {
    category: 'arrays-strings',
    title: 'Rotate Matrix',
    question: 'Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.  Can you do this in place?',
    isSolved: false
  },
  {
    category: 'arrays-strings',
    title: 'Zero Matrix',
    question: 'Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.',
    isSolved: false
  },
  {
    category: 'arrays-strings',
    title: 'String Rotation',
    question: 'Assume you have a method isSubString which checks if one word is a substring of another.  Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat").',
    isSolved: false
  }
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
