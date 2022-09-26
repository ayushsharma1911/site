import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./slider.css";
import Card from "./card/card.js";
import manish from "./photos/MANIS.gif";
import anthyush from "./photos/ANTHYUSH.gif";
import Lin from "./card/Lin";
import aryan from "./photos/ARYAN.gif";
import pramodh from "./photos/PRAMOD.gif";
import shiva from './photos/SHIVA.gif';

function IndividualIntervalsExample() {
  return (
    <Carousel className="sliders" isControls="false">
      <Carousel.Item interval={5000}>
        <div className="abc">
          <img src={shiva} alt="" />
        </div>
        <div className="det">
        <p className="contest">CONTESTING FOR PRESIDENT</p>
        <p className="you">It's not ours, it's your agenda</p>
        <a href="https://forms.gle/35MCYR2SAJVd6cDN7" className="voice">Raise Your Voice</a>
        
        

        </div>
        <Lin fb="https://www.facebook.com/profile.php?id=100009115611670" insta="https://instagram.com/_rathod_shiva_?igshid=NmNmNjAwNzg="/>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <div className="abc">
          <img src={manish} alt="" />
        </div>
        <div className="det">
        <p className="contest">CONTESTING FOR VICE PRESIDENT</p>
        <p className="you">It's not ours, it's your agenda</p>

        <a href="https://forms.gle/35MCYR2SAJVd6cDN7" className="voice">Raise Your Voice</a>

        </div>
        <Lin insta="https://www.instagram.com/manish_k2401?r=nametag" fb="https://www.facebook.com/profile.php?id=100004985387004" linked="https://www.linkedin.com/in/manish-kumar-a4ab48250"/>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <div className="abc">
          <img src={aryan} alt="" />
        </div>
        <div className="det">
        <p className="contest">CONTESTING FOR GENERAL SECRETARY</p>
        <p className="you">It's not ours, it's your agenda</p>
        <a href="https://forms.gle/35MCYR2SAJVd6cDN7" className="voice">Raise Your Voice</a>
        
       
        </div>
        <Lin fb="https://www.facebook.com/aryan.sekhawat.10" insta="https://instagram.com/_a_r_yann_?igshid=YmMyMTA2M2Y=" linked="https://www.linkedin.com/in/aryan-raj-010235209"/>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <div className="abc">
          <img src={anthyush} alt="" />
        </div>
        <div className="det">
        <p className="contest long">CONTESTING FOR ASSISTANT GENERAL SECRETARY (SPORTS)</p>
        <p className="you">It's not ours, it's your agenda</p>
        <a href="https://forms.gle/35MCYR2SAJVd6cDN7" className="voice">Raise Your Voice</a>
        
        
        </div>
        <Lin fb="https://www.facebook.com/mahi.anthyush" insta="https://instagram.com/anthyush27?igshid=YmMyMTA2M2Y=" linked="https://www.instagram.com/invites/contact/?i=smvoyhxeytyx&utm_content=20qvusf"/>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <div className="abc">
          <img src={pramodh} alt="" />
        </div>
        <div className="det">
        <p className="contest long">CONTESTING FOR ASSISTANT GENERAL SECRETARY (CULTURAL)</p>
        <p className="you">It's not ours, it's your agenda</p>

        <a href="https://forms.gle/35MCYR2SAJVd6cDN7" className="voice">Raise Your Voice</a>
        
        </div>
        <Lin insta="https://instagram.com/the_wandering_soul_ofgod?igshid=NmNmNjAwNzg="/>
      </Carousel.Item>

    </Carousel>
  );
}

export default IndividualIntervalsExample;
