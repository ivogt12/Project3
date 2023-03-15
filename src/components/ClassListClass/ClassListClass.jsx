import {Link} from "react-router-dom";
import * as classesAPI from "../../utilities/classes-api"
 
export default function ClassListClass({ classItem }) {
    
    async function handleChange() {
        await classesAPI.deleteClass(classItem._id)
    }

    return (
        <>
            <Link to="/classDetails" state={{classItem}}>
                <div>{classItem.name}</div>
                <div>{classItem.subject}</div>
                <div>{classItem.size}</div>
                
            </Link>
            <Link to="/editClass" state={{classItem}}>
                <div>Edit</div>
            </Link>
            <button onClick={handleChange}>Delete</button>
        </>
    );
};