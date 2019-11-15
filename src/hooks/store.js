import React from 'react';
import useGlobalHook from './useGlobalHook';

const initialState = { question: [] };

const useGlobal = useGlobalHook(React, initialState);

export default useGlobal;