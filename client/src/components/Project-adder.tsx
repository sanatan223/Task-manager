import plus from '../assets/plus.svg';
import '../styles/project-adder.css';

function ProjectAdder() {
    return (
        <div className="p-4 flex justify-between items-center">
            <div className="text-lg font-semibold">Project Workspace</div>
            <button className="add-project-btn">
                <img src={plus} alt="Add" className="inline-block w-4 h-4 mr-2" />
                Add Project
            </button>
        </div>
    );
}

export default ProjectAdder;