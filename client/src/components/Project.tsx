import '../styles/project.css';
import { type Task } from "../../src/types";

function Project(props: Task) {
    return(
        <div className="project">
            <div className="text-center font-bold text-lg">{props.title}</div>
            <div className="font-light">{props.description}</div>
            <div className="project-time">{props.time}</div>
        </div>
    )
}

export default Project;