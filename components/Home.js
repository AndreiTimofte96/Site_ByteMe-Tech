import Link from 'next/link'

const Home = () => (

	<div>
	    <link href="favicon.ico" rel="shortcut icon"/>
	    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800" rel="stylesheet"/> 
	    <link href="static/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet"/> 
	    <link href="static/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
	    <link href="static/lib/animate-css/animate.min.css" rel="stylesheet"/>
	    <link href="static/css/style.css" rel="stylesheet"/>
	    <title>ByteMe-Tech</title>
	    
	    <section id="hero">
	      <div className="hero-container">
	        <div className="wow fadeIn">
	          <div className="hero-logo">
	            <img className="" src="static/img/logo_byteme.svg" alt="ByteMe-Tech"/>
	          </div>
	        
	          <h1>Welcome to ByteMe-Tech</h1>
	          <div className="actions">
	            <a href="/about" className="btn-get-started">Get Started</a>
	            <a href="/services" className="btn-services">Our Services</a>
	          </div>
	        </div>
	      </div>
	    </section>
  </div>
)


export default Home