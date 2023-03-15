import * as studentAPI from "../../utilities/student-api";
import {useState, useEffect} from "react";

export default function GradingForm({student, user}) {  
    const [grade, setGrade] = useState([]);
    const [queryGrade, getQueryGrade] = useState([]);

    const [dumbGrade, setDumbGrade] = useState({
        grade: ""
    });

    const [error, setError] = useState("");

    useEffect(function() {
        async function getGrades() {
            const g = await studentAPI.getGrades(student._id);
            console.log(g)
            // getQueryGrade([...queryGrade, `${g}`]);
        }
        getGrades();
    }, []);


    function handleChange(evt) {
        setDumbGrade({[evt.target.name]: evt.target.value})
        setError('')
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const g = await studentAPI.addGrade(student._id, dumbGrade)
            setGrade(g)
            
        } catch {
            setError("Submit Fail")
        }
    }

    return(
        <>
            {/* {console.log(grade)} */}
            {queryGrade.length ? <div>{queryGrade[0]}</div>: <div>{grade.grade}</div>}
            
            <form onSubmit={handleSubmit}>
                <label>Grade:</label>
                <label>Input Grade</label>
                <input
                    type="text"
                    placeholder="B"
                    name="Grade"
                    value={setGrade.grade}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}