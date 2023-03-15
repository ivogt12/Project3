import GradingForm from "../GradingForm/GradingForm";
import {Link} from "react-router-dom";
import {useEffect, useState} from 'react';
import * as studentAPI from '../../utilities/student-api';

export default function StudentGradeItems({student, user}) {

    // const [grade, getGrade] = useState([]);

    // useEffect(function() {
    //     async function getGrades() {
    //         const g = await studentAPI.create()
    //     }
    // })
 
    return(
        <>
            <h2>{student.name}</h2>
            <GradingForm student={student} user={user} />
        </>
    )
}