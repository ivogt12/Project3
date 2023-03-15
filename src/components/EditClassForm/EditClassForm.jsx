import {useLocation, Navigate, Route} from "react-router-dom";
import {useState, useEffect} from 'react';
import * as classAPI from '../../utilities/classes-api'

export default function EditClassForm({user}) {
    const location = useLocation()
    const data = location.state

    const [classItems, setClassItems] = useState([])

    const [newClass, addNewClass] = useState({
        name: '',
        subject: '',
        size: 1,
    });

    const [error, setError] = useState('');

    function handleChange(evt) {
        addNewClass({...newClass, [evt.target.name]: evt.target.value});
        setError('');
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        try{
            const class_ = await classAPI.edit(data.classItem._id, newClass);
            setClassItems([...classItems, class_]);
            <Route path='/editClass' element={<Navigate to='/classDetails'/>} />
        } catch{
            setError('Submition Failed - Please Try Again');
        };
    };
    return(
        <>
            <h2>Edit Form</h2>
            <form onSubmit={handleSubmit}>
                
            <label>Name:</label>
                <input
                    type="text"
                    placeholders="CPSC-121"
                    name="name"
                    value={newClass.name}
                    onChange={handleChange}
                />
                <label>Subject:</label>
                <input
                    type="text"
                    placeholders="computer science"
                    name="subject"
                    value={newClass.subject}
                    onChange={handleChange}
                />
                <label>Class Size:</label>
                <input
                    type="number"
                    placeholders="12"
                    name="size"
                    value={newClass.size}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>   
            </form>
        </>
    )
}