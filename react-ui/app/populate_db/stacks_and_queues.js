const axios = require('axios');

const questionSet = [
  {
    category: 'stacks-queues',
    title: 'Three in One',
    question: 'Describe how you could use a single array to implement three stacks.',
    isSolved: false
  },
  {
    category: 'stacks-queues',
    title: 'Stack Min',
    question: 'How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element?  Push, pop, and min should all operate in O(1) time.',
    isSolved: false
  },
  {
    category: 'stacks-queues',
    title: 'Stack of Plates',
    question: 'Imagine a (literal) stack of plates.  If the stack gets too high, it might topple.  Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold.  Implement a data structure of SetOfStacks that mimics this.  SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.  SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack.)',
    isSolved: false
  },
  {
    category: 'stacks-queues',
    title: 'Queues via Stacks',
    question: 'Implement a MyQueue class which implements a queue using two stacks.',
    isSolved: false
  },
  {
    category: 'stacks-queues',
    title: 'Sort Stack',
    question: 'Write a program to sort a stack such that the smallest items are on the top.  You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array).  The stack supports the following operations: push, pop, peek, and isEmpty.',
    isSolved: false
  },
  {
    category: 'stacks-queues',
    title: 'Animal Shelter',
    question: 'An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out" basis.  People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type).  They cannot select which specific animal they would like.  Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat.  You may use the built-in LinkedList data structure.',
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
