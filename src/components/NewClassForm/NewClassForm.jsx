import {useState} from 'react';
import * as classAPI from '../../utilities/classes-api';

export default function NewClassForm({setClassItems, classItems}) {



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
            const class_ = await classAPI.create(newClass);
            setClassItems([...classItems, class_]);
        } catch{
            setError('Submition Failed - Please Try Again');
        };
    };

    return (
        <>
            <h2>NewClassForm</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    placeholders="CPSC-121"
                    name="name"
                    value={newClass.name}
                    onChange={handleChange}
                    required
                />
                <label>Subject:</label>
                <input
                    type="text"
                    placeholders="computer science"
                    name="subject"
                    value={newClass.subject}
                    onChange={handleChange}
                    required
                />
                <label>Class Size:</label>
                <input
                    type="number"
                    placeholders="12"
                    name="size"
                    value={newClass.size}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>


            </form>
            <p className="error-message">&nbsp;{error}</p>
        </>
    );
};