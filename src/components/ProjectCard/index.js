import "./index.css"

const ProjectCard = (props) => {
    const {projectDetails} = props;
    const {title, description, logo,ProjectPath} = projectDetails;

    const onClickProject = () => {
        window.open(ProjectPath,"_blank")
    }

    return (
        <li className = "project-card" onClick = {onClickProject}>
            <img className = "project-image" src = {logo} alt = {title} />
            <h2 className = "project-title">{title}</h2>
            <p className = "project-desc">{description}</p>
        </li>
    )
}

export default ProjectCard