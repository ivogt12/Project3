import NewStudentForm from "../../components/NewStudentForm/NewStudentForm";
import StudentGradeList from "../../components/StudentGradeList/StudentGradeList";

export default function StudentPage({classItems, setClassItems, studentItems, user}) {
    return (
        <>
            <NewStudentForm classItems={classItems} setClassItems={setClassItems} studentItems={studentItems} user={user} />
            <StudentGradeList  user={user} />
        </>
       
    );
};