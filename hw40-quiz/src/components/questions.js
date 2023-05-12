import React, { useState } from 'react';

function Questions() {
  const questions = [
    {
      question: 'The capital of Great Britain?',
      options: ['Paris', 'Tokio', 'London', 'Berlin'],
      correctAnswer: 'London',
    },
    {
      question: 'The highest mountain on the Earth?',
      options: ['Fuji', 'Matterhorn', 'Kilimanjaro', 'Everest'],
      correctAnswer: 'Everest',
    },
    {
      question: 'What is the population of the Earth?',
      options: ['4 billion', '6 billion', 'more than 8 billion'],
      correctAnswer: 'more than 8 billion',
    },
  ];

  const [indexOfArr, setIndexofArr] = useState(0);
}
