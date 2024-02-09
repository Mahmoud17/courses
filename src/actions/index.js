export const enroll = (course_id, student={}) => {
    return {
        type:"ENROLL",
        course_id,
        student
    }
}