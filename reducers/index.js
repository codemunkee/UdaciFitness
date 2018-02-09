import { RECEIVE_ENTRIES, ADD_ENTRY } from '../actions';

function entries(state = {}, actions) {
  switch(action.type) {
    case RECEIVE_ENTRIES:
      return {};
    case ADD_ENTRY:
      return {};
    default:
      return state
  }
}

export default entries;
