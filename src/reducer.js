import { NEW_MESSAGE, ALL_MESSAGES } from "./actions";

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ALL_MESSAGES: {
      return action.payload;
    }
    case NEW_MESSAGE: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}
