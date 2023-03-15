import {useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import * as assignmentAPI from "../../utilities/assignment-api";

export default function AssignmentGradeForm({user}) {
    const location = useLocation();
    const data = location.state;
    // console.log(data)

    useEffect(function() {
        async function getClassStudents() {
            const classStudents = await assignmentAPI.getStudents(data.classItem._id)
            console.log(classStudents)
        }
        getClassStudents();
    }, [])

    const [assignment, newAssignment] = useState({
        grade: '',
        student: ''
    })

    const [error, setError] = useState('')

    function handleChange(evt) {
        newAssignment({...assignment, [evt.target.name]: evt.target.value});
        setError('')
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const newGrade = await assignmentAPI.newAssGrade(data._id, data.classItem);
            console.log(newGrade)
        } catch {
            setError('Did Not Submit')
        }
    }

    return (
        <>
            <h2>{data.name}</h2>
            <form onSubmit={handleSubmit}>
                <label>Grade:</label>
                <input
                    type="text"
                    placeholder="B"
                    name="grade"
                    value={assignment.grade}
                    onChange={handleChange}
                    required
                />
                <label>Student</label>
                <select
                    name="student"
                    value={newAssignment.student}
                    onChange={handleChange}
                    required
                >

                </select>
                <button type="Submit">Upload Grade</button>
            </form>
        </>
    )
}