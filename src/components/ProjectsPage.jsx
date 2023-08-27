import '../styles/ProjectsPage.css'
import ProjectData from './ProjectData'
import ProjectCard from './ProjectCard'

export default function ProjectsPage() {

    const projects = ProjectData.map(data => {
        return (
            <ProjectCard 
                ProjectImage={data.ProjectImage}
                ProjectName={data.ProjectName}
                ProjectDescription={data.ProjectDescription}
                ProjectStack={data.ProjectStack}
                ProjectRepoLink={data.ProjectRepoLink}
                ProjectWebLink={data.ProjectWebLink}
                IsWebsite={data.IsWebsite}
            />
        )
    })

    return(
        <div className='ProjectsSectionContainer'>
            <h2 className='Title'>Projects</h2>
            <p>A collection of projects I made throughout the years</p>
            {/* Projects Display */}
            {projects}
        </div>
    )
}