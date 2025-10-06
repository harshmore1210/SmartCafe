import React from 'react'
import { SubHeading } from '../SubHeading/SubHeading';
import { images } from '../../Constant';
import './Chef.css';

function Chef() {
  return (
    <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.masterchef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
        
          <p className="p__opensans">If you're a happy person around food,you can be a professional chef.It's fueled by passion.</p>
        </div>
        <p className="p__opensans"> I believe that 'Food is a giver.' It gives you nutrition,health,and at times can give you recognition,like it did in my case, and you got to treat it with that kind of respect . </p>
      </div>

      <div className="app__chef-sign">
        <h1>~Ranveer Brar</h1>
        {/* <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
  
  )
}

export default Chef