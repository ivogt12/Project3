import StudentGradeItems from "../StudentGradeItems/StudentGradeItems";
import * as classesAPI from "../../utilities/classes-api";
import {useState, useEffect} from 'react';

export default function StudentGradeList({user, student}) {
    const [students, setStudents] = useState([])

    
    useEffect(function() {
        async function getStudents() {
            const student = await classesAPI.getStudents(user._id);
            setStudents(student);
        }
        getStudents(students);
    }, [students]);

    

    
    
    return (
        <div>
            {students.map(student=> <StudentGradeItems key={student._id}student={student} user={user} />)}
            </div>
    )
}