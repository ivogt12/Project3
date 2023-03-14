import {useLocation} from "react-router-dom";
import NewAssignmentForm from "../../components/NewAssignmentForm/NewAssignmentForm";

export default function ClassDetails(classItem) {
    const location = useLocation()
    const data = location.state
    return (
        <>
        <div>{data.classItem.name}</div>
        <NewAssignmentForm classItem={data.classItem}  />
        </>
    )
}