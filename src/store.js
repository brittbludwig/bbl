import React from "react";

export const initialState = {};

export const reducer = (state, action) => {
  switch (action.type) {
    default:
      return initialState;
  }
};

export const AppStore = React.createContext([]);
