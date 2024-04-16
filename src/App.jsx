import React, { useState } from 'react';
import Question from './components/Question';
import Result from './components/Result';
import decisionTree from './assets/decisionTree';

const App = () => {
  const [currentNode, setCurrentNode] = useState(decisionTree[1]);

  const handleAnswerClick = (childNodeId, result) => {
    if (result) {
      setCurrentNode({ ...currentNode, result });
    } else {
      setCurrentNode(decisionTree[childNodeId]);
    }
  };

  return (
    <div>
      {!currentNode.result ? (
        <Question node={currentNode} onAnswerClick={handleAnswerClick} />
      ) : (
        <Result result={currentNode.result} />
      )}
    </div>
  );
};

export default App;
