const axios = require('axios');

const questionSet = [
  {
    category: 'trees-graphs',
    title: 'Route Between Nodes',
    question: 'Given a directed graph, design an algorithm to find out whether there is a route between nodes.',
    isSolved: false
  },
  {
    category: 'trees-graphs',
    title: 'Minimal Tree',
    question: 'Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.',
    isSolved: false
  },
  {
    category: 'trees-graphs',
    title: 'List of Depths',
    question: 'Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth D, you\'ll have D linked lists).',
    isSolved: false
  },
  {
    category: 'trees-graphs',
    title: 'Check Balanced',
    question: 'Implement a function to check if a binary tree is balanced.  For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.',
    isSolved: false
  },
  {
    category: 'trees-graphs',
    title: 'Validate BST',
    question: 'Implement a function to check if a binary tree is a binary search tree.',
    isSolved: false
  },
  {
    category: 'trees-graphs',
    title: 'Successor',
    question: 'Write an algorithm to find the "next" node (i.e., in-order-successor) of a given node in a binary search tree.  You may assume that each node has a link to its parent.',
    isSolved: false
  },
  {
    category: 'trees-graphs',
    title: 'Build Order',
    question: 'You are given a list of projects and a list of dependencies (which is a list of pairs of projects, where the second project is dependent on the first project).  All of a project\'s dependencies must be built before the project is.  Find a build order that will allow the project to be built.  If there is no valid build order, return an error.',
    isSolved: false
  },
  {
    category: 'trees-graphs',
    title: 'First Common Ancestor',
    question: 'Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree.  Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree.',
    isSolved: false
  },
  {
    category: 'trees-graphs',
    title: 'BST Sequences',
    question: 'A binary serach tree was created by traversing through an array from left to right and inserting each element.  Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.',
    isSolved: false
  },
  {
    category: 'trees-graphs',
    title: 'Check Subtree',
    question: 'T1 and T2 are very large binary trees, with T1 much bigger than T2.  Create an algorithm to determine if T2 is a subtree of T1.  A tree T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of n is identical to T2.  That is, if you cut off the tree at node n, the two trees would be identical.',
    isSolved: false
  },
  {
    category: 'trees-graphs',
    title: 'Random Node',
    question: 'You are implementing a binary tree class from scratch which, in addition to insert, find, and delete, has a method getRandomNote() which returns a random node from the tree.  All nodes should be equally likely to be chosen.  Design and implement an algorithm for getRandomNode, and explain how you would implement the rest of the methods.',
    isSolved: false
  },
  {
    category: 'trees-graphs',
    title: 'Paths with Sum',
    question: 'You are given a binary tree in which each node contains an integer value (which might be positive or negative).  Design an algorithm to count the number of paths that sum to a given value.  THe path does not need to start or end at the root or a leaf, but it must go downwwards (traveling only from parent nodes to child nodes).',
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
