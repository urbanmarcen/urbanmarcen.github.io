import React from 'react'

import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Importing combined app reducers


// individual reducers
import reducer from 'store/reducers/application';

// all reducers
import { configureStore } from "store";

function render(
  ui,
  {
    initialState,
    // store = createStore(reducer, initialState), // for individual reducer
    store = configureStore, // get default application store
    ...renderOptions
  } = {}
) {
    
    function Wrapper({ children }) {    
        return <Provider store={store}>{children}</Provider>
    }
    
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }