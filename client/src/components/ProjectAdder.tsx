import plus from '../assets/plus.svg';
import { themeColors } from '../constants/colors';
import '../styles/projectAdder.css';
import ProjectForm from './ProjectForm';

function ProjectAdder() {
    return (
        <div className="p-4 flex justify-between items-center">
            <div className="text-lg font-semibold" style={{
                color: themeColors.dark.textPrimary
            }}>
                Project Workspace
            </div>
            <ProjectForm />
            <button className="add-project-btn" style={{
                backgroundColor: themeColors.dark.importantTextBg,
                color: themeColors.dark.importantText
            }}>
                <img src={plus} alt="Add" className="inline-block w-4 h-4 mr-2" />
                Add Project
            </button>
        </div>
    );
}

export default ProjectAdder;