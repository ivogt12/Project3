import ClassListClass from '../ClassListClass/ClassListClass';

export default function ClassList({ classItems }) {
    
    const classes = classItems.map(classItem => <ClassListClass 
        key={classItem._id}
        classItem={classItem}
    />);
    return (
        <main>
            {classes}
        </main>
    );
};