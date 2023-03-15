import {useLocation} from "react-router-dom";
import NewAssignmentForm from "../../components/NewAssignmentForm/NewAssignmentForm";

export default function ClassDetails({user}) {
    const location = useLocation()
    const data = location.state
    return (
        <>
        <div>{data.classItem.name}</div>
        <NewAssignmentForm key={user._id} classItem={data.classItem} user={user}  />
        </>
    )
}