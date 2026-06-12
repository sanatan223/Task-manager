import Project from './Project.tsx';
import { tasks } from '../../database/tasks.ts';

function Projects() {
    return (
        <div className="flex flex-1 justify-around gap-2 p-4">
            <div className="flex-col justify-center w-full">
                {tasks.map((task) => {
                    if (task.status === 'todo') {
                        return <Project key={task.id} {...task} />;
                    }
                })}
            </div>
            <div className="flex-col justify-center w-full">
                {tasks.map((task) => {
                    if (task.status === 'in-progress') {
                        return <Project key={task.id} {...task} />;
                    }
                })}
            </div>
            <div className="flex-col justify-center w-full">
                {tasks.map((task) => {
                    if (task.status === 'done') {
                        return <Project key={task.id} {...task} />;
                    }
                })}
            </div>
        </div>
    )
}

export default Projects;
