const axios = require('axios');

const questionSet = [
  {
    category: 'sorting-searching',
    title: 'Quick Sort',
    question: 'Implement quick sort.',
    isSolved: false
  },
  {
    category: 'sorting-searching',
    title: 'Merge Sort',
    question: 'Implement merge sort.',
    isSolved: false
  },
  {
    category: 'sorting-searching',
    title: 'Bubble Sort',
    question: 'Implement bubble sort.',
    isSolved: false
  },
  {
    category: 'sorting-searching',
    title: 'Binary Search',
    question: 'Implement binary search.',
    isSolved: false
  },
  {
    category: 'sorting-searching',
    title: 'Sorted Merge',
    question: 'You are given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B.  Write a method to merge B into A in a sorted order.',
    isSolved: false
  },
  {
    category: 'sorting-searching',
    title: 'Group Anagrams',
    question: 'Write a method to sort an array of strings so that all the anagrams are next to each other.',
    isSolved: false
  },
  {
    category: 'sorting-searching',
    title: 'Search in Rotated Array',
    question: 'Given a sorted array of n integers that have been rotated an unknown number of times, write code to find an element in the array.  You may assume that the array was originally sorted in increasing order.',
    isSolved: false
  },
  {
    category: 'sorting-searching',
    title: 'Sorted Search, No Size',
    question: 'You are given an array-like data structure Listy which lacks a size method.  It does, however, have an elementAt(i) method that returns the element at index i in O(1) time.  If i is beyond the bounds of the data structure, it returns -1.  (For this reason, the data structure only supports positive integers.)  Given a Listy which contains sorted, positive integers, find the index at which an element x occurs.  If x occurs multiple times, you may return any index.',
    isSolved: false
  },
  {
    category: 'sorting-searching',
    title: 'Sparse Search',
    question: 'Given a sorted array of strings that is interspersed with empty strings, write a method to find the location of a given string.',
    isSolved: false
  },
  {
    category: 'sorting-searching',
    title: 'Sort Big File',
    question: 'Imagine you have a 20 GB file with one string per line.  Explain how you would sort the file.',
    isSolved: false
  },
  {
    category: 'sorting-searching',
    title: 'Missing Int',
    question: 'Given an input file with four billion non-negative integers, provide an algorithm to generate an integer that is not contained in the file.  Assume you have 1 GB of memory available for this task.',
    isSolved: false
  },
  {
    category: 'sorting-searching',
    title: 'Finding Duplicates',
    question: 'You have an array with all the numbers from 1 to N , where N is at most 32,000.  The array may have duplicate entries and you do not know what N is.  With only 4 kilobytes of memory available, how would you print all duplicate elements in the array?',
    isSolved: false
  },
  {
    category: 'sorting-searching',
    title: 'Sorted Matrix Search',
    question: 'Given an M x N matrix in which each row and each column is sorted in ascending order, write a method to find an element.',
    isSolved: false
  },
  {
    category: 'sorting-searching',
    title: 'Rank from Stream',
    question: 'Imagine you are reading in a stream of integers.  Periodically, you wish to be able to look up the rank of a number x (the number of values less than or equal to x). Implement the data structures and algorithms to support these operations.  That is, implement the method track(x) which is called when each number is generated, and the method getRankOfNumber(x) which returns the number of values less than or equal to x (not including x itself).',
    isSolved: false
  },
  {
    category: 'sorting-searching',
    title: 'Peaks and Valleys',
    question: 'In an array of integers, a "peak" is an element which is greater than or equal to the adjacent integers and a "valley" is an element which is less than or equal to the adjacent integers.  For example, in the array [5,8,6,2,3,4,6], [8,6] are peaks and [5,2] are valleys.  Given an array of integers, sort the array into alternating sequence of peaks and valleys.',
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
