import { useSelector } from "react-redux"

function Dashboard() {
    const ids = useSelector(state => state.enrolled)
    let courses = useSelector(state => state.courses)
    courses = courses.filter(course => ids.includes(String(course.id)))
  return (
    <div>
        {courses.length == 0 ? <h1>Not enrolled in any courses yet...</h1> : courses.map(course => {
            return (
                <div className="m-3" key={course.id}>
                    <h1 className='text-5xl mb-3'>{course.name}</h1>
                    <p>{course.description}</p>       
                </div>
            )
        })}
    </div>
  )
}

export default Dashboard