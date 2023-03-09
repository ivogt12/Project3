import {useState, useEffect} from 'react';
import * as classesAPI from '../../utilities/classes-api';


export default function NewStudentForm({classItems, setClassItems}) {
    const [classes, setClasses] = useState([])
    const [classrooms, setClassrooms] = useState(null);

    const [newStudent, addNewStudent] = useState({
        name: "",
        classroom: [null],

    });

    const [error, setError] = useState("");

    function handleChange(evt) {
        addNewStudent({...newStudent, [evt.target.name]: evt.target.value});
        setError('');
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            setClassItems([...classItems]);
        } catch {
            setError("Submition Failed - Please Try Again")
        }
    };

    useEffect(function() {
        async function getClasses() {
            const class_ = await classesAPI.getAll();
            
            setClassrooms(class_);
        }
        getClasses();
    }, []);

    
    useEffect(function() {
        async function getClass() {
            const classes = await classesAPI.getAll()
            setClasses(classes)
        } 
    getClass()
    }, []
    )
    console.log(classes)
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
                <select name="classroom" value={newStudent.classroom} onChange={handleChange} required> */  
                    
                    {/* {classes.map(classroom => (
                        <div>{classroom.name}</div>
                    ))} */}
                    
                    
                </select>
                <button type="submit">Submit</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </>
    );
};