import React from 'react'
import { useState } from 'react'
import '../styles/ProjectsPage.css'

//Matrial Icons
import GitHubIcon from '../images/github.png'
import LinkIcon from '../images/link.png'
import LoadingIcon from '../material_ui_components/loading_icon'

export default function ProjectCard(props) {

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = (setState) => () => {
        setState(true);
    };

    return (
        <div className='ProjectContainer'>
            <div className='MainProjectContent'>
            {!imageLoaded && <div className='ImageLoadingIcon'><LoadingIcon/></div>}
            <img src={props.ProjectImage} onLoad={handleImageLoad(setImageLoaded)} style={{ display: imageLoaded ? 'block' : 'none' }} />

                <div className='ProjectDescription'>
                    <h3>{props.ProjectName}</h3>
                    <p>{props.ProjectDescription}</p>
                    <h4>{props.ProjectStack}</h4>
                </div>
            </div>
            <div className='ProjectLinks'>
                <a href={props.ProjectRepoLink} target={'_blank'}><img src={GitHubIcon}></img></a>
                { props.IsWebsite ? 
                    <a 
                        href={props.ProjectWebLink} 
                        target={'_blank'}><img 
                        src={LinkIcon}></img>
                    </a> 
                : null}
            </div>
        </div>
    )
}