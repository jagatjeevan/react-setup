export default function(state = "", action){
  switch(action.type){
    case "UpdateStoreWithUserInput":
    return action.payload;
  }
  return state;
}
