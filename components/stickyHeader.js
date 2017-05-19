import Link from 'next/link'
 
const Header = () => (
  
  	<div>

  	  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script type="text/javascript" src="static/script.js" ></script>


	  <link href="static/img/favicon.ico" rel="shortcut icon"/>	  
	  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800" rel="stylesheet"/> 
	  <link href="static/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet"/> 
	  <link href="static/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
	  <link href="static/lib/animate-css/animate.min.css" rel="stylesheet"/>
	  <link href="static/css/style.css" rel="stylesheet"/>


	     <header id="header">
	    	<div className="container">
	    
		      <div id="logo" className="pull-left">
		        <a href="/">
		        	<img src="static/img/logo.png" alt="" title="" />
		        </a>
		      </div>
		       
		      <nav id="nav-menu-container">
		        <ul className="nav-menu">

		    		<li>
				    	<Link href="/">
				          	<a>Home</a>
				        </Link>
			        </li>

			        <li >
				        <Link href="/about">
				          	<a>About Us</a>
				        </Link>
			        </li>

			        <li>
				        <Link href="/services">
				          	<a>Services</a>
				        </Link>
			        </li>

			        <li>
			        	<Link href="/technologies">
			          		<a>Technologies</a>
			        	</Link>
			        </li>

			        <li>
				        <Link href="/team">
				          	<a>Team</a>
				        </Link>
				    </li>

			        <li>
			         <Link href="/contact">
		          		<a>Contact Us</a>
		          	</Link>
		          	</li>
		        </ul>
		      </nav>
		    </div>
	  	</header>   
	</div>
)

export default Header
