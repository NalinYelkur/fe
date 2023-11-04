import React, { Component } from "react";
import Link from "next/link";
// import Clinets from "../../styles/Clients.scss";


class FreeTrialArea extends Component {
  render() {
    return (
      <section
        className="free-trial-area pt-100 bg-f4f5fe"
        style={{ background: "transparent" }}
      >
        <div className="container">
          <div className="free-trial-content">
            <h2>
              Chat API & JavaScript SDK with a<br /> pre-built UI
            </h2>
            <p>
              Create an interactive and retainable platform for Healthcare,
              Marketplace, Education, Virtual Events, Social media &amp;
              Communities, job seekers, and applicants to reach and respond to
              companies, recruiters, and administrators.
            </p>

            <div
              style={{ display: "flex", justifyContent: "space-around" }}
              className="d-lg-flex d-none"
            >
              <div>
                <Link href="/signup">
                <a className="default-btn" >
                  <i className="bx bxs-hot"></i>
                  Try PlugtoChat
                  <span></span>
                </a>
                </Link>
              </div>
              <div>
                <Link href="/contact">
                  <a className="default-btn">
                    <i className="bx bxs-hot"></i>
                    Talk to An Expert
                    <span></span>
                  </a>
                </Link>
              </div>
            </div>
   

          </div>
        </div>
                   <div class="slider" style={{margin:"100px"}}>
	<div className="slide-track">
		<div className="slide " >
      <a href="https://sanjeevtech.com/" target="_blank" rel="noopener noreferrer">
			<img src="/images/Clinents/Sanjev.png" height="100" width="250" alt="sanjevv tech" style={{maxWidth:"75%"}}/>
      </a>
		</div>
		<div className="slide" >
       <a href="https://sanjeevsolutions.in/" target="_blank" rel="noopener noreferrer">
			<img src="/images/Clinents/ss.png" height="100" width="250" alt="" style={{maxWidth:"75%"}} />
      </a>
		</div>
		<div className="slide">
      <a href="https://sanjeevfoundation.tech/" target="_blank" rel="noopener noreferrer">
			<img src="https://sanjeevfoundation.tech/dashboard/uploads/logo/6108logo-transparent-png-removebg-preview.png" height="100" width="250"  style={{maxWidth:"75%"}}  alt="" />
</a>
		</div>
		<div class="slide">
       <a href="https://www.way2agribusiness.com/" target="_blank" rel="noopener noreferrer">
			<img src="https://res.cloudinary.com/dm71xhdxd/image/upload/v1696049315/Static%20Images/logo_fiiga6.png" height="100" width="250" alt=""  style={{maxWidth:"75%"}}/>
      </a>
		</div>
		<div className="slide">
      <a href="https://powertiller.in/" target="_blank" rel="noopener noreferrer">
			<img src="https://res.cloudinary.com/dm71xhdxd/image/upload/v1696999409/pt/way2at-removebg-preview_LqDJ7F9_bqmvqw_shukoi_1_ulwda5.webp" height="100" width="250" alt="" style={{maxWidth:"75%"}} />
      </a>
		</div>
		<div className="slide">

        <a href="https://www.way2groceries.in/" target="_blank" rel="noopener noreferrer">
			<img src="https://res.cloudinary.com/dm71xhdxd/image/upload/v1696077878/uab/W2F_wdx8x8_ankivl.png" height="100" width="250" alt=""  style={{maxWidth:"75%"}}/>
      </a>
		</div>
		<div className="slide">
        <a href="https://ctsecuritysolution.com/" target="_blank" rel="noopener noreferrer">
			<img src="https://ctsecuritysolution.com/assets/uploads/logo.jpg" height="100" width="250" alt=""  style={{margin:"54px" , maxWidth:"75%"}}/>
      </a>
		</div>
		<div class="slide">
     <a  href="https://way2vegetables.com/" target="_blank" rel="noopener noreferrer">
			<img src="/images/Clinents/veg.png" height="100" width="250" alt="" style={{margin:"54px" }} />
      </a>
		</div>
    	<div class="slide">
   <a  href="https://www.way2agribusiness.com/" target="_blank" rel="noopener noreferrer">
			<img src="/images/Clinents/agri.png" height="100" width="250" alt="" style={{margin:"54px" }} />
      </a>
		</div>
    <div class="slide">
      <a  href="https://www.drsoilhealth.com/" target="_blank" rel="noopener noreferrer">
			<img src="/images/Clinents/ds.png" height="100" width="250" alt="" style={{margin:"54px" }} />
      </a>
		</div>
	
	
  
	
		{/* <div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div> */}
	</div>
</div>




                
      </section>
    );
  }
}

export default FreeTrialArea;
