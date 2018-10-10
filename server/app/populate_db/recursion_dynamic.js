const axios = require('axios');

const questionSet = [
  {
    category: 'recursion-dynamic',
    title: 'Triple Step',
    question: 'A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time.  Implement a method to count how many possible ways the child can run up the stairs.',
    isSolved: false
  },
  {
    category: 'recursion-dynamic',
    title: 'Robot in a Grid',
    question: 'Imagine a robot sitting on the upper left corner of a grid with r rows and c columns. The robot can only move in two directions, right and down, but certain cells are "off limits" such that the robot cannot step on them.  Design an algorithm to find a path for the robot from the top left to the bottom right.',
    isSolved: false
  },
  {
    category: 'recursion-dynamic',
    title: 'Magic Index',
    question: 'A magic index in an array A[0...n-1] is defined to be an index such that A[i] = i.  Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.  FOLLOW UP:  What if the values are not distinct?',
    isSolved: false
  },
  {
    category: 'recursion-dynamic',
    title: 'Power Set',
    question: 'Write a method to return all subsets of a set.',
    isSolved: false
  },
  {
    category: 'recursion-dynamic',
    title: 'Recursive Multiply',
    question: 'Write a recursive function to multiply two positive integers without using the * operator.  You can use addition, subtraction, and bit shifting, but you should minimize the number of those operations.',
    isSolved: false
  },
  {
    category: 'recursion-dynamic',
    title: 'Towers of Hanoi',
    question: 'In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of different sizes which can slide onto any tower.  The puzzle starts with disks sorted in ascending order of size from top to bottom (i.e., each disk sits on top of an even large one).  You have the following constraints: (1) Only one disk can be moved at a time.  (2) A disk is slid off the top of one tower onto another tower.  (3) A disk cannot be placed on top of a smaller disk.  Write a program to move the disks from the first tower to the last using stacks.',
    isSolved: false
  },
  {
    category: 'recursion-dynamic',
    title: 'Permutations without Dups',
    question: 'Write a method to compute all permutations of a string of unique characters.',
    isSolved: false
  },
  {
    category: 'recursion-dynamic',
    title: 'Permutations with Dups',
    question: 'Write a method to compute all permutations of a string whose characters are not necessarily unique.  The list of permutations should not have duplicates.',
    isSolved: false
  },
  {
    category: 'recursion-dynamic',
    title: 'Parens',
    question: 'Implement an algorithm to print all valid (e.g., properly opened and closed) combinations of n pairs of parentheses.',
    isSolved: false
  },
  {
    category: 'recursion-dynamic',
    title: 'Paint Fill',
    question: 'Implement the "paint fill" function that one might see on many image editing programs.  That is, given a screen (represented by a two-dimensional array of colors), a point, and a new color, fill in the surrounding area until the color changes from the original color.',
    isSolved: false
  },
  {
    category: 'recursion-dynamic',
    title: 'Coins',
    question: 'Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and pennies (1 cent), write code to calculate the number of ways of representing n cents.',
    isSolved: false
  },
  {
    category: 'recursion-dynamic',
    title: 'Eight Queens',
    question: 'Write an algorithm to print all ways of arranging eight queens on an 8x8 chess board so that none of them share the same row, column, or diagonal.  In this case, "diagonal" means all diagonals, not just the two that bisect the board.',
    isSolved: false
  },
  {
    category: 'recursion-dynamic',
    title: 'Stack of Boxes',
    question: 'You have a stack of n boxes, with widths w, heights h, and depths d.  The boxes cannot be rotated and can only be stacked on top of one another if each box in the stack is strictly larger than the box above it in width, height, and depth.  Implement a method to compute the height of the tallest possible stack.  The height of a stack is the sum of the heights of each box.',
    isSolved: false
  },
  {
    category: 'recursion-dynamic',
    title: 'Boolean Evaluation',
    question: 'Given a boolean expression consisting of the symbols 0 (false), 1 (true), & (AND), | (OR), and ^ (XOR), and a desired boolean result value result, implement a function to count the number of ways of parenthesizing the expression such that it evaluates to result.',
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
