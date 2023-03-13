import * as studentAPI from '../../utilities/student-api';
import {useState} from "react";

export default function StudentGradeForm({student}) {
    const [studentGrade, setStudentGrade] = useState({
        grade: ''
    });
    const [error, setError] = useState("");

    function handleChange(evt) {
        setStudentGrade({...studentGrade, [evt.target.name]: evt.target.value});
        setError('');
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        try{
            const newGrade = await studentAPI.createGrade(studentGrade);
            // console.log(student, newGrade)

        }catch {
            setError("Submition Failed - Please Try Again");
        }
    };

    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="char" 
                placeholder="B" 
                name="grade"
                value={studentGrade.grade}
                onChange={handleChange}
                required
            />
            <button type="submit">Upload Grade</button>
        </form>
    )
}