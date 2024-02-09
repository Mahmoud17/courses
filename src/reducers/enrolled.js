const enrolled = (state = [], action) => {
    switch(action.type) {
      case "ENROLL":
        if (!state.includes(action.course_id)){
            state.push(action.course_id)
        }
        console.log(state)
        return [
            ...state
        ]
      default:
        return state
    
    } 
  }

  export default enrolled