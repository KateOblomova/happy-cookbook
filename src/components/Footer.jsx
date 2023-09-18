import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
      <>
       <div class="footer" id="footer">
                    <div class="footer-content">
                        <div class="stay-touch">
                         <h2>Stay in Touch</h2>
                        <p> Please subscribe to our newsletter to get the latest news in your domain of interest. <br>
                            </br>Don't forget to follow us on social networks!</p>
                <div class="s-icon">

                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-pinterest"></i>

                   </div>
                </div>
                      
                   <div class="email-bar">
                    <div class="input-email">
                       <input class="input-button" name="email" id="" placeholder="Email Address" required/> 
                    </div>
                    <div class="email-button">
                        <button class="submit-button" type="submit" name="subscribe" >SUBSCRIBE</button>
                    </div>
            
                   </div>
                         </div>
          
            
            
            <p class="copyright" id="copyright1">Copyright © 2023  All Rights Reserved <br> 
                  </br> Proudly hosted by Group-1</p>
                
        
        
            
      


      {/* <NavLink to="">Footer #1 </NavLink>
      <NavLink to="">Footer #2 </NavLink>
      <NavLink to="">Footer #3 </NavLink> */}
      </div>
      </>  
    )
}