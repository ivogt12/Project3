import {useEffect, useState} from "react";
import * as classesAPI from "../../utilities/classes-api";
import AssignmentList from "../../components/AssignmentList/AssignmentList";

export default function NewAssignmentForm({classItem, user}) {


    const [assignment, setAssignment] = useState([])

    const [assignments, setAssignments] = useState({
        name: '',
        date: ''
    });
    
    const [error, setError] = useState('');

    function handleChange(evt) {
        setAssignments({...assignments, [evt.target.name]: evt.target.value});
        setError('');
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const newAssignment = await classesAPI.newAss(classItem._id, assignments);
            setAssignment([{newAssignment}])
        } catch {
            setError("Failed");
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Assignment Name</label>
            <input 
                type="text"
                placeholder="Geography Practice"
                name="name"
                value={assignments.name}
                onChange={handleChange}
                required
            />
            <label>Due Date</label>
            <input 
                type="date"
                name="date"
                value={assignments.date}
                onChange={handleChange}
            />
            <button type="Submit">Upload Assignment</button>
        </form>
        {assignment.length ?<AssignmentList key={classItem._id} user={user} classItem={classItem} assignment={assignment[0].newAssignment} />: <AssignmentList key={classItem._id} user={user} classItem={classItem} />}  
        </>
    )

}