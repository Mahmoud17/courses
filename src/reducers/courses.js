import { data } from "../data/courses"
const courses = (state = data, action) => {
    switch(action.type) {
      case "ENROLL":
        console.log(state)
        const stude = state.filter(course => course.id == action.course_id)[0]
        stude.students.push(action.student)
        console.log(stude.students)
        return [
            ...state
        ]
      default:
        return state
    } 
  }

  export default courses