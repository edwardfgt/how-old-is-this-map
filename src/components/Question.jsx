import React from 'react';

const Question = ({ node, onAnswerClick }) => {
  return (
    <div>
      <h2>{node.question}</h2>
      {node.answers.map((answer, index) => (
        <button key={index} onClick={() => onAnswerClick(answer.childNodeId, answer.result)}>
          {answer.option}
        </button>
      ))}
    </div>
  );
};

export default Question;
