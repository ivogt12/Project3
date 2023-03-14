import GradingForm from "../GradingForm/GradingForm";



export default function StudentGradeItems({student, user}) {
 
    return(
        <>
            <h2>{student.name}</h2>
            <GradingForm student={student} user={user} />
        </>
    )
}