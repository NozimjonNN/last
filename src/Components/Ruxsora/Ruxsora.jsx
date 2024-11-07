import React from "react";
import ruxsoo from './ruxsoo.png';
import now from './hi.png'
import n from './pon.png'
import ne from './25.png'
import m from './res.png'
import mi from './ma.png'


const Ruxsora = ()=>{
    return(
     <div>

<div className="contaiiner2">
    <ul >
        <li style={{display:'flex', justifyContent:'space-around', }}>
            <a  style={{textDecoration:'none', color:'black'}} href="">Alivio</a>
            <a  style={{textDecoration:'none', color:'black'}} href="">Why Alivio</a>
            <a  style={{textDecoration:'none', color:'black'}} href="">Solutions</a>
            <a  style={{textDecoration:'none', color:'black'}} href="">Community</a>
            <a  style={{textDecoration:'none', color:'black'}} href="">Pricing</a>
            <a  style={{textDecoration:'none', color:'black',}} href="">Sing in</a>
            <button style={{background:'#01996d', borderRadius:'10px'}}>Click me</button>
        </li>
    </ul>
</div>



<div className="boxix">
<img style={{width:'100%'}} src={ruxsoo} alt="" />
</div>




<div style={{display:'flex', justifyContent:'space-around',}} className="container">
    <div className="box">
    <p>How it works</p>
    <h1 style={{color:'green'}}>Understand & Release <br /> the stress in 3 steps</h1>
    </div>
    <div className="box1">
      <p style={{marginTop:'40px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Maiores voluptatibus vero doloremque a atque rerum,  <br />
      mollitia accusamus nulla est, amet veniam sequi. Dolore voluptatem <br /> adipisci </p>
    </div>
   </div>



<div  style={{display:'flex', justifyContent:'space-around', marginTop:'50px'}} className="containerrr3">
    
<div className="booxx3">
    <h2>Personalize</h2>
    <p>Answer a quick survey about how you <br /> express yourself, what causes you stress, <br /> and what area would you like to work on. <br /> This way, we can fully personalize your <br /> journal!</p>
    <div  className="bobob">
        <img style={{width:'200px'}} src={now} alt="" />
    </div>
</div>

<div style={{marginTop:'200px'}} className="booxx3">
    <h2>Write & Understand</h2>
    <p>Write, draw, reflect, understand. Alivio will <br /> guide you through the prompts and will help <br /> you manage your stress!</p>
    <div  className="bobob">
        <img style={{width:'200px'}} src={n} alt="" />
    </div>

</div>

<div className="booxx3">
    <h2>Alivio</h2>
    <p>Now you are aware, and have a way to manage <br /> and overcome your own stress. <br />
What are you waiting for? Alivio today!</p>
<div  className="bobob">
        <img style={{width:'200px'}} src={ne} alt="" />
    </div>
</div>
</div>







<div style={{background:'#01996d', height:'300px', textAlign:'center', marginTop:'50px', paddingTop:'50px'}} className="boooooox">
    <h1>Let's hear about <br /> Kayla's success story</h1>
    <p>See how well Alivio works in a real customer’s life. </p>
    <button style={{background:'black', color:'white'}}>Let's get started</button>
    
</div>


{/* nachalo */}

<div style={{textAlign:'center', marginTop:'100px', display:'flex', justifyContent:'space-around'}} className="containeer7">
   
        <img src={mi} alt="" />
    <div style={{marginTop:'90px'}} className="bob">
    <p>Our product</p>
    <h1 style={{color:'#01996d'}}>You tell us your stress, <br />
We make your diary</h1>
<p>Everyone experiences it, and in different ways. <br />
Let Alivio guide you, in a personalized journal experience, to <br /> overcome your stress.</p>
<button style={{background:'#01996d', height:'50px'}}>Find Your Way</button>
</div>

</div>







   




   <div className="container22">
    <img style={{width:'100%', marginTop:'50px'}} src="03.png" alt="" />
   </div>



   <div className="container22">
    <img style={{width:'100%', marginTop:'50px'}} src="04.png" alt="" />
   </div>






   {/* footer */}




   <div style={{background:'#01996d', height:'200px', display:'flex', justifyContent:"space-around", paddingTop:'100px'}} className="container44">
    <h3>Alivio</h3>
    <p>Why Alivio</p>
    <p>Solutions</p>
    <p>Community</p>
    <p>Pricing</p>
   </div>

      </div>






    )
    }
    export default Ruxsora;