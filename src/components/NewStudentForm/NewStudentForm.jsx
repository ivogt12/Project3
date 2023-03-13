import {useState} from 'react';
import * as classesAPI from "../../utilities/classes-api"

export default function NewStudentForm({classItems, setClassItems}) {

    const [students, setStudents] = useState([''])

    const [newStudent, addNewStudent] = useState({
        name: "",
        classroom: "",

    });

    const [error, setError] = useState("");

    function handleChange(evt) {
        addNewStudent({...newStudent, [evt.target.name]: evt.target.value},);
        setError('');
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            await classesAPI.addStu(newStudent);
            // console.log(classItems)
           
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