import React from 'react';
import './Farruh.css';
import IMAGE from './picture/IMAGE.png';
import IMAGE1 from './picture/IMAGE (1).png';
import IMAGE2 from './picture/IMAGE (2).png';
import IMAGE3 from './picture/IMAGE (3).png';
import IMAGE4 from './picture/IMAGE (4).png';
import IMAGE5 from './picture/IMAGE (5).png';
import IMAGE6 from './picture/IMAGE (6).png';
import IMAGE7 from './picture/IMAGE (7).png';
import IMAGE8 from './picture/IMAGE (8).png';
import IMAGE9 from './picture/IMAGE (9).png';
import IMAGE10 from './picture/IMAGE (10).png';
import IMAGE11 from './picture/IMAGE (11).png';
import IMAGE12 from './picture/IMAGE (12).png';
import IMAGE13 from './picture/IMAGE (13).png';
import IMAGE14 from './picture/IMAGE (14).png';
import IMAGE15 from './picture/IMAGE (15).png';
import IMAGE16 from './picture/IMAGE (16).png';
import IMAGE17 from './picture/IMAGE (17).png';

const Farruh = () => {
    return (
        <div className="farruh">
            <nav className="navbar">
                <div className="navbar-logo">Farmzi</div>
                <ul className="navbar-links">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <header className="hero">
                <div className="hero-content">
                    <h1>If you have a garden and a library, you need nothing more.</h1>
                    <button>Learn More</button>
                </div>
                <img src={IMAGE} className="hero-image" alt="Main Image" />
            </header>

            <section className="about">
                <h2>Our Experience</h2>
                <p>Farmzi has 35 years of experience and knows smart ways to create and design your beautiful garden.</p>
                <img src={IMAGE1} alt="About Farmzi" />
                <div className="mission">
                    <h3>Our Mission and Vision</h3>
                    <p>Our mission is to bring nature closer to people by making their gardens beautiful and productive.</p>
                    <button>Read More</button>
                </div>
            </section>

            <section className="services">
                <h2>Our Services</h2>
                <div className="services-grid">
                    <div className="service">
                        <img src={IMAGE2} alt="Flower Planting" />
                        <h3>Flower Planting</h3>
                    </div>
                    <div className="service">
                        <img src={IMAGE3} alt="Tree Pruning" />
                        <h3>Tree Pruning</h3>
                    </div>
                    <div className="service">
                        <img src={IMAGE4} alt="Rich Fertilizer" />
                        <h3>Rich Fertilizer</h3>
                    </div>
                    <div className="service">
                        <img src={IMAGE5} alt="Garden Watering" />
                        <h3>Garden Watering</h3>
                    </div>
                </div>
            </section>

            <section className="contact">
                <p>If you need gardening services, contact Farmzi.</p>
                <button>Contact Us</button>
            </section>

            <section className="team">
                <h2>Our Team</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <img src={IMAGE6} alt="Stephanie Howley" />
                        <h3>Stephanie Howley</h3>
                        <p>Gardener</p>
                    </div>
                    <div className="team-member">
                        <img src={IMAGE7} alt="Michael Provett" />
                        <h3>Michael Provett</h3>
                        <p>Botanist</p>
                    </div>
                    <div className="team-member">
                        <img src={IMAGE8} alt="Melissa Jackson" />
                        <h3>Melissa Jackson</h3>
                        <p>Landscape Designer</p>
                    </div>
                </div>
            </section>

            <section className="video">
                <p>Watch our introductory video and start your dream project.</p>
                <button>Watch Video</button>
            </section>

            <section className="stats">
                <div className="stat">
                    <h3>847+</h3>
                    <p>Happy Clients</p>
                </div>
                <div className="stat">
                    <h3>753+</h3>
                    <p>Completed Projects</p>
                </div>
                <div className="stat">
                    <h3>284+</h3>
                    <p>Team Members</p>
                </div>
                <div className="stat">
                    <h3>98+</h3>
                    <p>Awards</p>
                </div>
            </section>

            <section className="gallery">
                <h2>Gallery</h2>
                <div className="gallery-images">
                    <img src={IMAGE10} alt="Gallery Image" />
                </div>
            </section>

            <section className="feedback">
                <h2>Farmzi has received the best feedback from satisfied clients</h2>
                <div className="feedback-grid">
                    <div className="feedback-item">
                        <p style={{color:'#2d6a4f'}}>"Lorem ipsum dolor sit amet consectetur  <br />adipisicing elit. Necessitatibus laborum nemo pariatur  <br />exercitationem, inventore deserunt assumenda at, officiis asperiores <br /> fugit corporis, debitis officia saepe in eum blanditiis sed aut aperiam <br /> repellendus similique error enim. Quaerat, enim fuga. Suscipit quisquam  <br />obcaecati architecto ab, et nam deserunt, ipsa maxime <br /> tempora aliquam optio."</p>
                        <span>- Rachel Patterson</span>
                    </div>
                    <div className="feedback-item">
                        <p style={{color:'#2d6a4f'}}>"Lorem ipsum dolor sit amet consectetur  <br />adipisicing elit. Necessitatibus laborum nemo pariatur  <br />exercitationem, inventore deserunt assumenda at, officiis asperiores <br /> fugit corporis, debitis officia saepe in eum blanditiis sed aut aperiam <br /> repellendus similique error enim. Quaerat, enim fuga. Suscipit quisquam  <br />obcaecati architecto ab, et nam deserunt, ipsa maxime <br /> tempora aliquam optio."</p>
                        <span>- John Doe</span>
                    </div>
                </div>
            </section>

            <section className="tips">
                <h2>Learn the latest gardening and landscape design tips</h2>
                <div className="tips-grid">
                    <div className="tip">
                        <img src={IMAGE11} alt="Tip" />
                        <div className="box" style={{display:'flex',gap:"50px"}}>
                            <p style={{marginLeft:'100px'}}>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero repudiandae quam, iusto ipsa atque.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laborum, magnam vel corporis voluptatibus vitae.</p>
                        <button style={{background:"White",color:"green",width:"200px",height:"50px"}}>Read More +</button>
                    </div>
                    <div className="tip">
                        <img src={IMAGE12} alt="Tip" />
                        <div className="box" style={{display:'flex',gap:"50px"}}>
                            <p style={{marginLeft:'100px'}}>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero repudiandae quam, iusto ipsa atque.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laborum, magnam vel corporis voluptatibus vitae.</p>
                        <button style={{background:"White",color:"green",width:"200px",height:"50px"}}>Read More +</button>
                    </div>
                </div>
            </section>

            <div className="footer-logos" style={{ gap: "150px", background: "#ADD8E6" }}>
                <img src={IMAGE13} alt="Natural" />
                <img src={IMAGE14} alt="Natural Tagline" />
                <img src={IMAGE15} alt="Natural Trees" />
                <img src={IMAGE16} alt="Natural Nature" />
                <img src={IMAGE17} alt="Natural Environment" />
            </div>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>Explore</h3>
                        <ul>
                            <li>About Us</li>
                            <li>FAQ</li>
                            <li>Press & Blog</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Information</h3>
                        <ul>
                            <li>Style Guide</li>
                            <li>Change Log</li>
                            <li>License</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Service</h3>
                        <ul>
                            <li>Flower</li>
                            <li>Planting</li>
                            <li>Watering</li>
                        </ul>
                    </div>
                    <div className="footer-info-box">
                        <h3>Farmzi</h3>
                        <p>
                            Lorem ipsum is simply dummy text of the printing and typesetting industry’s standard.
                        </p>
                        <p>Call us: <strong>+00 89 456 648</strong></p>
                    </div>
                </div>
                <p>&copy; 2022 design and developed by Branches. Powered by Webflow.</p>
            </footer>
        </div>
    );
};

export default Farruh;
