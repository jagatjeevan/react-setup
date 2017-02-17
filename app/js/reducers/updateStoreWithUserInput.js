export default function(state = "Hello, How are you !!!", action){
  switch(action.type){
    case "UpdateStoreWithUserInput":
    return `Hello ${action.payload}, how are you!!!`;
  }
  return state;
}
