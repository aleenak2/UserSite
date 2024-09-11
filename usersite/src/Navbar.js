import { Link } from 'react-router-dom';
import 'bootstrap';

const Navbar =()=>{

    const navimage = {
        width: '30px',
        height: '30px',
        margin: '5px 10px',
    }

    return (
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
            <a class="navbar-brand" href="/">
                <h3><strong>Aleena Khan, Ph.D.</strong></h3>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item"><Link class="nav-link" to="/Service">Community Outreach & Service</Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/CV">CV</Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/Publications">Publications</Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/Teaching">Teaching</Link></li>
                </ul>
            </div>   
            <div class="d-flex justify-content-end">
                <div class="row">
                    <a href="https://x.com/aleenakhxn"><img src="images/twitter.png" alt="Twitter Icon" style={navimage}/></a>
                    <a href="https://www.linkedin.com/in/aleena-khan-06b90a78"><img src="images/linkedin.png" alt="LinkedIn Icon" style={navimage}/></a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;