import Project from './Project.tsx';

function Projects() {
    return (
        <div className="flex flex-1 justify-around gap-2 p-4">
            <div className="flex-col justify-center content-center w-full">
                <Project />
            </div>
            <div className="flex-col justify-center content-center w-full">
                <Project />
            </div>
            <div className="flex-col justify-center content-center w-full">
                <Project />
            </div>
        </div>
    )
}

export default Projects;
