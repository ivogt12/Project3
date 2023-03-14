import {useState, useEffect} from 'react';
import * as classesAPI from "../../utilities/classes-api"
import StudentGradeList from "../../components/StudentGradeList/StudentGradeList";


export default function NewStudentForm({classItems, setClassItems, studentItems, user}) {
    const [students, setStudents] = useState([])
    

    const [newStudent, addNewStudent] = useState({
        name: "",
        classroom: "",

    });

    // useEffect(function() {
    //     async function setId() {
    //         const students = await classesAPI.setId();
    //         setStudents(students);
    //     }
    //     setId();
    // }, [students]);

    const [error, setError] = useState("");

    function handleChange(evt) {
        addNewStudent({...newStudent, [evt.target.name]: evt.target.value},);
        setError('');
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const newStu = await classesAPI.addStu(newStudent);
            setStudents([...students, {newStu}])

        } catch {
            setError("Submition Failed - Please Try Again")
        }
    };
    

    return (
        <>
            <h2>NewStudentForm</h2>
            <form onSubmit={handleSubmit}>
                <label>Add Student</label>
                <input
                    type="text"
                    placeholder="jane doe"
                    name="name"
                    value={newStudent.name}
                    onChange={handleChange}
                    required
                />
                <label>Class:</label>
                <select 
                    name="classroom" 
                    value={newStudent.classroom} 
                    onChange={handleChange}
                    required
                >
                    {classItems.map(c=>
                        <option key={c._id} value={c.name}>
                            {c.name}
                        </option>
                    )}
                      
                </select>
                <button type="submit">Submit</button>
            </form>
            
            <p className="error-message">&nbsp;{error}</p>
        </>
    );
};