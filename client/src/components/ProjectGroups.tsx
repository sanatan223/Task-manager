import { themeColors } from '../constants/colors';
import '../styles/projectGroups.css';

function ProjectGroups(){
    return(
        <div className="project-groups">
            <div className="project-group text-white" style={{
                backgroundColor: themeColors.dark.sectionBg
            }}>To Do: <b>10</b></div>
            <div className="project-group text-blue-500" style={{
                backgroundColor: themeColors.dark.sectionBg
            }}>In Progress: <b>5</b></div>
            <div className="project-group text-green-500" style={{
                backgroundColor: themeColors.dark.sectionBg
            }}>Completed: <b>15</b></div>
        </div>
    )
}

export default ProjectGroups;