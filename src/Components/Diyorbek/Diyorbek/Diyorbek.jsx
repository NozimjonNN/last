import React from "react";
import imgone from '../Image/imgone.png'
import imgtwo from '../Image/imgtwo.png'
import '../Diyorbek/Diyorbek.css'
import imgThree from '../Image/imgThree.png'
import Netflix from '../Image/netflix.png'
import Forbes from '../Image/forbes.png'
import Itel from '../Image/itel.png'
import FedEx from '../Image/fedex.png'
import Audiomack from '../Image/audiomack.png'
import Elipse from '../Image/elipse.png'
import GoToMeeting from '../Image/gotomeeting.png'
import Penguins from '../Image/penguins.png'
import Kartochka from '../Image/kartochka.png'
import Skrepka from '../Image/skrepochka.png'
import Chast from '../Image/chast.png'
import imgFour from '../Image/imgFour.png'
import imgFive from '../Image/imgFive.png'
import X from '../Image/twitter.png'
import FaceBook from '../Image/facebook.png'
import Instagram from '../Image/instagram.png'
import LinkedIn from '../Image/linkedin.png'
import S from '../Image/s.png'

const Diyorbek = () => {
    return(
        <div className="div">
            <div className="Navbar">
                <div><img src={imgone}  className="img1" alt="" /></div>
                <div className="text1">
                    <div><a href="/" className="a3">About amid</a></div>
                    <div><a href="/" className="a3">Features</a></div>
                    <div><a href="/" className="a3">Portfolio</a></div>
                    <div><a href="/" className="a3">Reviews</a></div>
                </div>
                <div><button className="btn">Login</button></div>
            </div>

            <div  className="MainOneDiv">
            <div className="MainOne">
                <div className="MainOneFirst">
                    <div className="text2"><a href="/" className="a2">it works!</a></div>
                    <div className="text3">Try Our Business <br /> Ideas to grow <br /> Rapidly</div>
                    <div className="text45">
                        <div className="text4">We understand how desperatly you want to grow in</div>
                        <div className="text5">the business world & our motto is to help you with</div>
                        <div className="text5">practicale idea and plan</div>
                    </div>
                    <div className="btn23">
                        <div className="btn2div"><button className="btn2">Get Started</button></div>
                        <div className="btn3div"><button className="btn3"><img src={imgThree} alt="" className="imgThree" />Demo Video</button></div>
                    </div>
                </div>
                <div><img src={imgtwo} alt="" /></div>
            </div>
            </div>

            <div className="MainTwoDiv">
                <div>
                    <div className="img4567">
                        <div className="div2"><img src={Netflix} alt=""/></div>
                        <div className="div2"><img src={Forbes} alt=""/></div>
                        <div className="div2"><img src={Itel} alt=""/></div>
                        <div className="div2"><img src={FedEx} alt="" /></div>
                    </div>
                    <div className="img891011">
                        <div className="div2"><img src={Audiomack} alt=""/></div>
                        <div className="div2"><img src={Penguins} alt=""/></div>
                        <div className="div2"><img src={Elipse} alt=""/></div>
                        <div className="div2"><img src={GoToMeeting} alt="" /></div>
                    </div>
                </div>
            </div>

            <div className="MainThreeDiv" style={{display:"flex",justifyContent:"center",marginTop:"100px"}}>
                <div>
                <div><button className="btn4">services</button></div>
                <div>
                    <div style={{display:"flex",gap:"125px",alignItems:"center"}}>
                    <div>
                    <div className="text6">Exactly Everything You </div>
                    <div className="text6">Need For Business</div>
                    </div>

                    <div>
                        <div className="text4">We understand how desperatly you want to grow in</div>
                        <div className="text5">the business world & our motto is to help you with</div>
                        <div className="text5">practicale idea and plan</div>
                    </div>
                    
                </div>
                </div>
                <div style={{marginTop:"75px",display:"flex",justifyContent:"center",gap:"100px"}}>
                    <div className="card">
                        <div style={{width:"80px",height:"80px",background:"#DBFFE9",marginLeft:"20px",marginTop:"30px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"15px"}}><img src={Kartochka} alt=""/></div>
                        <div style={{fontSize:"20px",fontWeight:"600",marginTop:"30px",marginLeft:"20px",marginTop:"20px"}}>Business Growing Support</div>
                        <div style={{fontSize:"15px",fontWeight:"400",marginTop:"45px",marginLeft:"20px",marginTop:"20px"}}>Get every necessary support to grow as</div>
                        <div style={{fontSize:"15px",fontWeight:"400",marginTop:"5px",marginLeft:"20px",marginTop:"20px"}}>business startup</div>
                        <div style={{display:"flex",justifyContent:"start",alignItems:"center",marginLeft:"20px",marginTop:"20px"}}><button style={{fontSize:"16px",fontWeight:"500",marginTop:"30px",color:"#124F48",border:"none",background:"none"}}>Learn More »</button></div>
                    </div>
                    <div className="card">
                        <div style={{width:"80px",height:"80px",background:"#FFF7CA",display:"flex",marginTop:"30px",marginLeft:"20px",justifyContent:"center",alignItems:"center",borderRadius:"15px"}}><img src={Skrepka} alt=""/></div>
                        <div style={{fontSize:"20px",fontWeight:"600",marginTop:"30px",marginLeft:"20px",marginTop:"20px"}}>Community Attachment</div>
                        <div style={{fontSize:"15px",fontWeight:"400",marginTop:"45px",marginLeft:"20px",marginTop:"20px"}}>A lifetime attachment with the</div>
                        <div style={{fontSize:"15px",fontWeight:"400",marginTop:"5px",marginLeft:"20px",marginTop:"20px"}}> community dreamer</div>
                        <div style={{display:"flex",justifyContent:"start",alignItems:"center",marginLeft:"20px",marginTop:"20px"}}><button style={{fontSize:"16px",fontWeight:"500",marginTop:"30px",color:"#124F48",border:"none",background:"none"}}>Learn More »</button></div>
                    </div>
                    <div className="card">
                        <div style={{width:"80px",height:"80px",background:"#FFE9E0",display:"flex",marginTop:"30px",justifyContent:"center",alignItems:"center",borderRadius:"15px",marginLeft:"20px"}}><img src={Chast} alt=""/></div>
                        <div style={{fontSize:"20px",fontWeight:"600",marginTop:"30px",marginLeft:"20px",marginTop:"20px"}}>Exceptional Discovery Plans</div>
                        <div style={{fontSize:"15px",fontWeight:"400",marginTop:"45px",marginLeft:"20px",marginTop:"20px"}}>An exceptional plan can take you ahead</div>
                        <div style={{fontSize:"15px",fontWeight:"400",marginTop:"5px",marginLeft:"20px",marginTop:"20px"}}> millions of step which we discove</div>
                        <div style={{display:"flex",justifyContent:"start",alignItems:"center",marginLeft:"20px",marginTop:"20px"}}><button style={{fontSize:"16px",fontWeight:"500",marginTop:"30px",color:"#124F48",border:"none",background:"none"}}>Learn More »</button></div>
                    </div>
                </div>
                </div>
                
            </div>

            

            <div className="MainFiveDiv" style={{display:"flex",justifyContent:"center",marginTop:"100px"}}>
                <div>
                <div style={{display:"flex",justifyContent:"center"}}><button className="btn4">blog</button></div>
                <div>
                    
                    <div style={{display:"flex",justifyContent:"center",marginTop:"25px"}}>
                    <div className="text6">We Publish Blogs Every Week</div>
                    </div>

                    <div style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
                        <div>
                        <div className="text4" style={{marginTop:"20px"}}>We understand how desperatly you want to grow in the business world & our motto</div>
                        <div className="text4" style={{marginTop:"8px"}}>is to help you with practicale idea and plan</div>
                        </div>
                        
                    </div>
                    
                
                </div>
                <div style={{marginTop:"75px",display:"flex",justifyContent:"center",gap:"100px"}}>
                    <div className="card1">
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"15px",marginTop:"20px"}}><img src={imgFour} alt="" style={{width:"400px",borderRadius:"15px"}}/></div>
                        <div style={{fontSize:"20px",fontWeight:"600",marginTop:"30px",display:"flex",justifyContent:"center",marginTop:"20px"}}>Upgrowing Economy Needs More Startups</div>
                        <div style={{fontSize:"15px",fontWeight:"400",marginTop:"45px",display:"flex",justifyContent:"center",marginTop:"20px"}}>We understand how desperatly you want to grow in the <br /> business world & our motto is to help you with practicale idea <br /> and plan</div>
                        <div style={{display:"flex",justifyContent:"start",alignItems:"center",marginLeft:"40px",marginTop:"20px"}}><button style={{fontSize:"16px",fontWeight:"500",marginTop:"30px",color:"#124F48",border:"none",background:"none"}}>Learn More »</button></div>
                    </div>
                    <div className="card1">
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"15px",marginTop:"20px"}}><img src={imgFive} alt="" style={{width:"400px",borderRadius:"15px"}}/></div>
                        <div style={{fontSize:"20px",fontWeight:"600",marginTop:"30px",display:"flex",justifyContent:"center",marginTop:"20px"}}>Upgrowing Economy Needs More Startups</div>
                        <div style={{fontSize:"15px",fontWeight:"400",marginTop:"45px",display:"flex",justifyContent:"center",marginTop:"20px"}}>We understand how desperatly you want to grow in the <br /> business world & our motto is to help you with practicale idea <br /> and plan</div>
                        <div style={{display:"flex",justifyContent:"start",alignItems:"center",marginLeft:"40px",marginTop:"20px"}}><button style={{fontSize:"16px",fontWeight:"500",marginTop:"30px",color:"#124F48",border:"none",background:"none"}}>Learn More »</button></div>
                    </div>
                </div>
                </div>
                
            </div>

            <div className="Footer" style={{marginTop:"100px",width:"100%",background:"#E9FBF9"}}>
                <br /><br />
                <div style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
                <div style={{fontSize:"30px",fontWeight:"800"}}>
                    <div>Subscribe To Our Newsletter</div>
                    <div> Get The Best Offers</div>
                </div>
                </div>
                
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"75px",gap:"30px"}}>
                    <div><button style={{border:"none",background:"none",fontWeight:"400",color:"orange",fontSize:"18px"}}>With One Click</button></div>
                    <div><button style={{border:"1px solid orange",background:"orange",fontWeight:"500",fontSize:"18px",color:"white",width:"160px",height:"50px",borderRadius:"20px"}}>Subscribe »</button></div>
                </div>
                <div style={{marginTop:"125px"}}>
                <div className="Navbar">
                <div><img src={imgone}  className="img1" alt="" /><div style={{color:"orange",fontSize:"10px",fontWeight:"600"}}>business consultancy agency</div></div>
                <div className="text1">
                    <div><a href="/" className="a3">About amid</a></div>
                    <div><a href="/" className="a3">Features</a></div>
                    <div><a href="/" className="a3">Portfolio</a></div>
                    <div><a href="/" className="a3">Reviews</a></div>
                </div>
                <div style={{color:"#124F48",fontSize:"15px"}}>
                    <div>+998 1276 234</div>
                    <div style={{marginTop:"5px"}}>82/93 Boeind Street. NY</div>
                    <div style={{marginTop:"5px"}}>info@amid.mail.com</div>
                </div>
            </div>
                </div>
                <br /><br /><br />
                <div style={{width:"100%",background:"#124F48",height:"60px",color:"white",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                    <div>All Rights Reserved @Debzui2020</div>
                    <div style={{display:"flex",gap:"15px"}}>
                        <div><img src={X} alt="" style={{width:"30px",height:"30px"}}/></div>
                        <div><img src={FaceBook} alt="" style={{width:"30px",height:"30px"}} /></div>
                        <div><img src={Instagram} alt=""style={{width:"30px",height:"30px"}} /></div>
                        <div><img src={LinkedIn} alt="" style={{width:"30px",height:"30px"}} /></div>
                        <div><img src={S} alt="" style={{width:"30px",height:"30px"}}/></div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Diyorbek