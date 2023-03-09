// import * as usersService from '../../utilities/users-service';
import { useState, useEffect } from 'react';
import * as classesAPI from '../../utilities/classes-api';
import NewClassForm from "../../components/NewClassForm/NewClassForm";
import ClassList from "../../components/ClassList/ClassList";
export default function MyClassesPage({classItems, setClassItems}) {
    // async function handleCheckToken() {
    //     try {
    //         const expDate = await usersService.checkToken()
    //         console.log(expDate)
    //     } catch {

    //     }
    // }
    // <button onClick={handleCheckToken}>Check when my Login Expires</button>


    useEffect(function() {
        async function getClasses() {
            const class_ = await classesAPI.getAll();
            
            setClassItems(class_);
        }
        getClasses();
    }, []);


    return (
        <>
            <h1>MyClassesPage</h1>
            < NewClassForm setClassItems={setClassItems} classItems={classItems} />
            < ClassList classItems={classItems} />
        </>
    )
}