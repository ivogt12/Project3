import StudentGradeItems from "../StudentGradeItems/StudentGradeItems";
import * as classesAPI from "../../utilities/classes-api";
import {useState, useEffect} from 'react';

export default function StudentGradeList({user}) {
    const [students, setStudents] = useState([])

    
    useEffect(function() {
        async function getStudents() {
            const students = await classesAPI.getStudents(user._id);
            setStudents(students);
        }
        getStudents();
    }, [setStudents]);

    

    
    
    return (
        <div>
            {students.map(student=> <StudentGradeItems key={student._id}student={student} user={user} />)}

            
        </div>
    )
}