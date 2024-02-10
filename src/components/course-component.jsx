import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CourseComponent({course}) {
  return (
    <div key={course.id} className='m-4'>
            <h3 className="text-2xl">{course.instructor}</h3>
            <p>{course.description}</p>
            <h4>Enrollment Status: <span className="font-bold">{course.enrollmentStatus}</span></h4>
            <h4>Duration: <span className="font-bold">{course.duration}</span></h4>
            <h4>Schedule: <span className="font-bold">{course.schedule}</span></h4>
            <h4>Location: <span className="font-bold">{course.location}</span></h4>
            <h4 className="font-bold">Prerequisites</h4>
        <ul className='list-disc ml-8'>
            {course.prerequisites.map(title => <li>{title}</li>)}
        </ul>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Syllabus
        </AccordionSummary>
        <AccordionDetails>
          {course.syllabus.map((week, index) => {
            return (
                <div>
                    <h3 className="font-bold">Week: {index + 1}</h3>
                    <h3 className="font-bold">{week.topic}</h3>
                    <p>{week.content}</p>
                </div>
            )
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default CourseComponent