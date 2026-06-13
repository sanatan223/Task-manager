import '../styles/project.css';
import { type Task } from "../../src/types";
import { themeColors } from '../constants/colors';

function Project(props: Task) {
    return(
        <div className="project" style={{
            backgroundColor: themeColors.dark.importantTextBg,
            color: themeColors.dark.importantText
        }}>
            <div className="text-center font-bold text-lg">{props.title}</div>
            <div className="font-light">{props.description}</div>
            <div className="project-time">{props.time}</div>
        </div>
    )
}

export default Project;