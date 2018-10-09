const axios = require('axios');

const questionSet = [
  {
    category: 'linked-lists',
    title: 'Remove Dups',
    question: 'Write code to remove duplicates from an unsorted linked list.  FOLLOW UP: How would you solve this problem if a temporary buffer is not allowed?',
    isSolved: false
  },
  {
    category: 'linked-lists',
    title: 'Return Kth to Last',
    question: 'Implement an algorithm to find the kth to last element of a singly linked list.',
    isSolved: false
  },
  {
    category: 'linked-lists',
    title: 'Delete Middle Node',
    question: 'Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.',
    isSolved: false
  },
  {
    category: 'linked-lists',
    title: 'Partition',
    question: 'Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.  If x is contained within the list, the values of x only need to be after the elements less than x.  The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and the right partitions.',
    isSolved: false
  },
  {
    category: 'linked-lists',
    title: 'Sum Lists',
    question: 'You have two numbers represented by a linked list, where each node contains a single digit.  The digits are stored in reverse order, such that the 1\'s digit is at the head of the list.  Write a function that adds the two numbers and returns the sum as a linked list. FOLLOW UP: Suppose the digits are stored in forward order.  Repeat the above problem',
    isSolved: false
  },
  {
    category: 'linked-lists',
    title: 'Palindrome',
    question: 'Implement a function to check if a linked list is a palindrome.',
    isSolved: false
  },
  {
    category: 'linked-lists',
    title: 'Intersection',
    question: 'Given two (singly) linked lists, determine if the two lists intersect.  Return the intersecting node.  Note that the intersection is defined based on reference, not value.  That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.',
    isSolved: false
  },
  {
    category: 'linked-lists',
    title: 'Loop Detection',
    question: 'Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.',
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
