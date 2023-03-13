import StudentGradeItems from "../StudentGradeItems/StudentGradeItems";

export default function StudentGradeList({classItems, user}) {

    const studentItems = classItems.map((c) => <StudentGradeItems 
        student={c} key={c._id} 
        />)
        
    return (
        <main>
           {studentItems}
        </main>
    )
}