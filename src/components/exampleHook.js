import React from 'react';
import globalHook from 'use-global-hook';
import questions from '../questions.json'
 
const initialState = {
  counter: 0,
};
 
const actions = {
  addToCounter: (store, amount) => {
    const newCounterValue = store.state.counter + amount;
    store.setState({ counter: newCounterValue });
  },
};
 
const useGlobal = globalHook(React, initialState, actions);
 
const HookExample = () => {
  const [globalState, globalActions] = useGlobal();
  return (
    <div>
      <p>
        questions:
        {Object.values(questions)[0].Question}
      </p>
      <button type="button" onClick={() => globalActions.addToCounter(1)}>
        stuff
      </button>
    </div>
  );
};
 
export default HookExample;