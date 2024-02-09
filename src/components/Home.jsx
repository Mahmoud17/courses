import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
          <div key={course.id} className='m-4'>
            <h2 className='text-3xl text-blue-400'><Link to={`/course/${course.id}`}>{course.name}</Link></h2>
            <p>{course.description}</p>
          </div>
        )
        })}
      </>
    )
}

export default Home