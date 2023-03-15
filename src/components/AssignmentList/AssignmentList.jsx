import {useEffect, useState} from "react";
import * as classesAPI from "../../utilities/classes-api";
import {Link} from "react-router-dom";

export default function AssignmentList({user, classItem, assignment}) {
    const[a, setA] = useState([])
    
    useEffect(function() {
        async function getAss() {
            const assignments = await classesAPI.getAss(user._id, classItem._id);
            setA(assignments)
        }
        getAss();
    }, []); 
    const classId = classItem._id.toString();
    return (
        <>
            {a.map(ass=>((classId === ass.class) ?
                <>
                    <Link to="/assignmentGrades" state={{ass, classItem}}>
                        <>
                            <div>{ass.name}</div>
                            <div>{ass.date}</div>
                        </>
                     </Link>
                </>: null
            ))}
            {assignment ? 
                <>
                <div>{assignment.name}</div>
                <div>{assignment.date}</div>
                </>
             : null}
            
        </>
    )
    
}