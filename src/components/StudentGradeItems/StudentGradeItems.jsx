import * as classesAPI from "../../utilities/classes-api";
import {useState, useEffect} from "react";


export default function StudentGradeItems({student}) {
    const [s, setS] = useState([])

    useEffect(function() {
        async function getStudents() {
            const stus = await classesAPI.getMyStudents();
            console.log(stus)
            setS([...s, stus])
            
        } getStudents();
    }, []);
   
    
    return  <h2>{s}</h2>
}