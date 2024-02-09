import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { enroll } from '../actions'
function Course() {
    const {id} = useParams()
    const course = useSelector(state => state.courses).filter(course => course.id == id)[0]
    const [name, setName]  = useState('')
    const [email, setEmail]  = useState('')
    const [student_id, setID]  = useState('')
    const dispatch = useDispatch()
    const handleEnroll = () => {
        dispatch(enroll(id, {id: student_id, name, email}))
    }
  return (
    <div className='m-3'>
        <h2 className='text-3xl'>{course.name}</h2>
        <h3 className='text-2x;'>{course.instructor}</h3>
        <p>{course.description}</p>

        <h2 className='text-3xl mt-4'>Want to Enroll?</h2>
        <form action="" className='flex flex-col gap-3 w-1/2' onSubmit={e => e.preventDefault()}>
            <input type="text" name="" id="" className="block py-1 px-4 rounded border-2 border-teal-700" placeholder='Enter Your Name...'  value={name} onChange={(event) => setName(event.target.value)}/>
            <input type="text" name="" id="" className="block py-1 px-4 rounded border-2 border-teal-700" placeholder='Enter Your Email...'  value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input type="text" name="" id="" className="block py-1 px-4 rounded border-2 border-teal-700" placeholder='Enter Your ID...' value={student_id} onChange={(event) => setID(event.target.value)}/>

            <button onClick={handleEnroll} className='bg-teal-700 text-white mx-3 py-1 px-4 rounded w-fit'>Enroll</button>

        </form>

    </div>
  )
}

export default Course