import NewClassForm from "../../components/NewClassForm/NewClassForm";
import ClassList from "../../components/ClassList/ClassList";
export default function MyClassesPage({classItems, setClassItems}) {

    return (
        <>
            <h1>MyClassesPage</h1>
            <NewClassForm classItems={classItems} setClassItems={setClassItems} />
            <ClassList classItems={classItems} />
        </>
    )
}