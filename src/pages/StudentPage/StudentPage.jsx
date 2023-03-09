import NewStudentForm from "../../components/NewStudentForm/NewStudentForm";

export default function StudentPage({classItems, setClassItems}) {
    
    
    return (
        <>
            <h1>StudentPage</h1>
            < NewStudentForm classItem={classItems} setClassItems={setClassItems}/>
        </>
    );
};