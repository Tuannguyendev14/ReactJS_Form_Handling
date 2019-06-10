import React,{Component}from 'react';
 

export default class Footer extends Component {
	render(){ 
		return (
            <div>
            <footer className="ct-footer">
                <div className="container">
                    <form name="contentForm" encType="multipart/form-data" method="post" action="true">
                        <div className="ct-footer-pre text-center-lg">
                        <div className="inner">
                            <span>Welcome to Huu Tuan Mobifone</span>
                        </div>
                        <div className="inner">
                            <div className="form-group">
                            <input  id="nl_email" className="validate[required]" placeholder="Enter your email address" type="text" defaultValue /> <label htmlFor="nl_email" className="sr-only">Email Address</label> <button type="submit" className="btn btn-success">Join</button>
                            </div>
                        </div>
                        </div>
                    </form>
                     
                    <div className="ct-footer-meta text-center-sm">
                        <div className="row">
                        <div className="col-sm-6 col-md-2">
                            <img alt="logo" src="https://www.solodev.com/assets/footer/logo.png" />
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <address>
                            <span>WebCorpCo<br /></span>123 Easy Street<br />
                            Orlando, Florida, 32801<br />
                            <span>Phone: <a href="tel:5555555555">(555) 555-8899</a></span>
                            </address>
                        </div>
                        <div className="col-sm-6 col-md-2 ct-u-paddingTop10">
                            <a href="true"><img alt="app store" src="https://www.solodev.com/assets/footer/appstore.png" /></a>
                        </div>
                        <div className="col-sm-6 col-md-2 ct-u-paddingTop10">
                            <a href="true" ><img alt="google play store" src="https://www.solodev.com/assets/footer/androidstore.png" /></a>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <ul className="ct-socials list-unstyled list-inline">
                            <li>
                                <a href="true" ><img alt="facebook" src="https://www.solodev.com/assets/footer/facebook-white.png" /></a>
                            </li>
                            <li>
                                <a href="true"><img alt="twitter" src="https://www.solodev.com/assets/footer/twitter-white.png" /></a>
                            </li>
                            <li>
                                <a href="true" ><img alt="youtube" src="https://www.solodev.com/assets/footer/youtube-white.png" /></a>
                            </li>
                            <li>
                                <a href="true"  ><img alt="instagram" src="https://www.solodev.com/assets/footer/instagram-white.png" /></a>
                            </li>
                            <li>
                                <a href="true"  ><img alt="pinterest" src="https://www.solodev.com/assets/footer/pinterest-white.png" /></a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="ct-footer-post">
                    <div className="container">
                        <div className="inner-left">
                        <ul>
                            <li>
                            <a href="true">FAQ</a>
                            </li>
                            <li>
                            <a href="true">News</a>
                            </li>
                            <li>
                            <a href="true">Contact Us</a>
                            </li>
                        </ul>
                        </div>
                        <div className="inner-right">
                        <p>Copyright © 2016 WebCorpCo.&nbsp;<a href="true">Privacy Policy</a></p>
                        <p><a className="ct-u-motive-color" href="true"  >Web Design</a> by DigitalUs on <a href="true" >Solodev CMS</a></p>
                        </div>
                    </div>
            </div>
            </footer>
            </div>  
        );
	}
}


