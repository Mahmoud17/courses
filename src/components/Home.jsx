import { useState } from 'react'
import { useSelector } from 'react-redux'
import CourseComponent from './course-component'
import { Link } from 'react-router-dom'

function Home() {
    const courses= useSelector(state => state.courses)
    const [searchQuery, setSearchQuery] = useState("")
    const filteredCourses = courses.filter(course =>
        (course.name.toLowerCase().includes(searchQuery.toLowerCase())
        || course.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };


    return (
      <>
        <input type='text' placeholder='search...' className='m-4 py-1 px-4 rounded border-2 border-teal-700' onChange={handleSearchChange} value={searchQuery}/>

        {filteredCourses.map(course => {
          return (
            <>
            <h2 className='text-3xl m-3 text-blue-400'><Link to={`/course/${course.id}`}>{course.name}</Link></h2>
          <CourseComponent course={course} />
          </>
        )
        })}
      </>
    )
}

export default Home