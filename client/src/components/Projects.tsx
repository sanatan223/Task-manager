import Project from './Project.tsx';
import { useContext } from 'react';
import { TasklistContext } from '../context/TaskContext.tsx';

function Projects() {
    const {tasklist, setTasklist} = useContext(TasklistContext);

    return (
        <div className="flex flex-1 justify-around gap-2 p-4">
            <div className="flex-col justify-center w-full">
                {tasklist.map((task) => {
                    if (task.status === 'todo') {
                        return <Project key={task.id} {...task} />;
                    }
                })}
            </div>
            <div className="flex-col justify-center w-full">
                {tasklist.map((task) => {
                    if (task.status === 'in-progress') {
                        return <Project key={task.id} {...task} />;
                    }
                })}
            </div>
            <div className="flex-col justify-center w-full">
                {tasklist.map((task) => {
                    if (task.status === 'done') {
                        return <Project key={task.id} {...task} />;
                    }
                })}
            </div>
        </div>
    )
}

export default Projects;
