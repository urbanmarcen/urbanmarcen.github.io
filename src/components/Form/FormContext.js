import React, { createContext, useReducer, useCallback } from "react";

// services
//import { apiForm } from "services/api";

const initialState = {
  id: null,
  guid: null,
  title: "My default input text",
  content: "",
  meta: {
    items: []
  },
  content_date: null,
  content_type: "text",
  version: 1
};

const FormContext = createContext(initialState);

const { Provider } = FormContext;

const FormProvider = ({ children }) => {
  
  const memoizedReducer = useCallback((content, action) => {
  

    switch (action.type) {
      case "INITIAL": {
        const newState = action.payload;
        return newState;
      }

      case "LOAD-FORM": {
        // load data from service & dispatch to local context
        dispatch({ type: "INITIAL", payload: {} });
        break;
      }

      case "UPDATE-CONTENT": {
        const newState = { ...content, ...action.payload };
        return { ...content, ...action.payload };
      }
      case "UPDATE-META": {
        return { ...content, meta: { ...content.meta, ...action.payload } };
      }
      case "UPDATE-META-ITEMS": {
        const NewState = content;
        if (undefined !== action.payload.items) {
          NewState.meta.items = action.payload.items;
        }
        return NewState;
      }

      default: {
        throw new Error();
      }
    }
  }, []);

  const [form, dispatch] = useReducer(memoizedReducer, initialState);

  return (
    <FormContext.Provider value={{ form, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
