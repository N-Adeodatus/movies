import '/styles/footer.css'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
export default function Footer() {
    const footerSections = [
    {
      title: "Movies",
      info: ["Latest Movies", "Top Rated", "Coming Soon", "Box Office"]
    },
    {
      title: "TV Shows",
      info: ["Popular Series", "New Episodes", "Trending Shows", "Documentaries"]
    },
    {
      title: "Top IMDB",
      info: ["Top 250", "Most Popular", "Recently Added", "Editor's Pick"]
    },
    {
      title: "Genres",
      info: ["Action Movies", "Horror Movies", "Sci-fi Movies", "Comedy Films"]
    },
    {
      title: "More",
      info: ["Android App", "Contact", "Terms of Service", "FAQ"]
    }
  ];
    return (
        <footer className="bg-gray-800 text-white py-4 mt-8">
            <div id='sections-container'>
                <div id='footer-div-container'>
                    <p id="footer-header">eMovieHub</p>
                    <p>Your ultimate destination for discovering movies and TV shows. Join millions of users worldwide.</p>
                    <div id='contact-icons'>
                        <img src={linkedin} alt='linkedin' />
                        <img src={github} alt="github" />
                    </div>
                </div>
                
                {footerSections.map((section, index) => {
                    return (
                        <div key={index} className='footer-info-section'>
                            <p>{section.title}</p>
                            <ul>
                                {
                                    section.info.map((detail, index) => {
                                            return <li key={index}>{detail}</li>
                                        }
                                    )
                                }
                            </ul>
                        </div>
                    )
                })}
                {/* <h3 className="footer-section-header">Movies</h3>
                <ul className="footer-links">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Blog</a></li>
                </ul> */}
            </div>        
        </footer>
    );
}