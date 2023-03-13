import NewStudentForm from "../../components/NewStudentForm/NewStudentForm";
import StudentGradeList from "../../components/StudentGradeList/StudentGradeList";

export default function StudentPage({classItems, setClassItems, user}) {
    return (
        <>
            <NewStudentForm classItems={classItems} setClassItems={setClassItems} />
            <StudentGradeList classItems={classItems}  user={user} />
        </>
       
    );
};