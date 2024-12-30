import ProjectCard from "../ProjectCard";
import CryptoTackerLogo from '../../assets/Crypto-tracker.png' 
import GitReposLogo from '../../assets/git-repos.png' 
import MatchGameLogo from '../../assets/match-game.png' 
import StopWatchLogo from '../../assets/stop-watch.png' 
import "./index.css"

const projectsList = [
    {
        id :1,
        title : "Popular Github Repositories",
        description : "A web application that displays the most popular repositories on Github using the Github API from CCBP.",
        logo : GitReposLogo,
        ProjectPath : "https://gitreposbysaii.ccbp.tech/"
    },
    {
        id :2,
        title : "StopWatch Application",
        description : "A simple stopwatch application that allows users to start, stop, and reset the stopwatch.",
        logo : StopWatchLogo,
        ProjectPath : "https://stopwatchbysaii.ccbp.tech/"
    },
    {
        id :3,
        title : "Match Game",
        description : "A simple matching game that allows users to match the image displayed in the top to the list of available images in the bottom.",
        logo : MatchGameLogo,
        ProjectPath : "https://matchgamebysaii.ccbp.tech/"
    },
    {
        id :4,
        title : "Crypto Currency Tracker",
        description : "A web application that displays the current price of the top 4 cryptocurrencies using the CCBP CryptoTracker API.",
        logo : CryptoTackerLogo,
        ProjectPath : "https://cryptotrackerr.ccbp.tech/"
    },
]

const Projects = () => (
    <div className = "projects-container">
        <h1 className = "projects-heading">Projects</h1>
        <ul className = "projects-list">
            {projectsList.map(eachProject => (
                <ProjectCard key = {eachProject.id} projectDetails = {eachProject} />
            ))}
        </ul>
    </div>
)

export default Projects;