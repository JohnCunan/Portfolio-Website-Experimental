import '../styles/Projects.css'
import ProjectCard from './ProjectCard'

//Images
import LandingApp from '../images/landing_page_app.png'
import WeatherApp from '../images/weather_app.png'
import FaceRecApp from '../images/face_recognition_app.png'

export default function Projects() {

    return(
        <div className='ProjectsSectionContainer'>
            <h2>Featured Projects</h2>
            {/* Projects Display */}

            <ProjectCard 
                ProjectImage={LandingApp}
                ProjectName="Epsorts Team Landing Page"
                ProjectDescription="A landing page of an esports team which features the team's roster, achivements, and matches."
                ProjectStack="ReactJS, Bootsrap, EmailJS"
                ProjectRepoLink="https://github.com/JohnCunan/practice_website"
                ProjectWebLink="https://psg-lgd-site.netlify.app/"
                IsWebsite={true}
            />

            <ProjectCard 
                ProjectImage={WeatherApp}
                ProjectName="Weather Forcast App"
                ProjectDescription="A weather forcast app where you can view the current weather information of a searched city."
                ProjectStack="Vanilla JavaScript, OpenWeatherAPI"
                ProjectRepoLink="https://github.com/JohnCunan/Weather-Forecast"
                ProjectWebLink="https://johncunan.github.io/Weather-Forecast/"
                IsWebsite={true}
            />

            <ProjectCard 
                ProjectImage={FaceRecApp}
                ProjectName="Attendance System Using Face Recognition"
                ProjectDescription="A capstone project which records the attendance of recognized employees to a payroll system."
                ProjectStack="Python, SQL, OpenCV, Tkinter"
                ProjectRepoLink="https://github.com/JohnCunan/Face-Recognition-Attendance-System"
                ProjectWebLink=""
                IsWebsite={false}
            />
        </div>
    )
}