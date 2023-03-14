import {Link} from "react-router-dom";

export default function ClassListClass({ classItem }) {
    // console.log(classItem)
    return (
        <Link to="/classDetails" state={{classItem}}>
            <div>{classItem.name}</div>
            <div>{classItem.subject}</div>
            <div>{classItem.size}</div>
            
        </Link>
    );
};