export default function ClassListClass({ classItem }) {
    return (
        <div>
            <div>{classItem.name}</div>
            <div>{classItem.subject}</div>
            <div>{classItem.size}</div>
            
        </div>
    );
};