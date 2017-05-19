import Link from 'next/link'

const Team = () => (


	<section id="team">
		<title>ByteMe-Tech</title>
	    <div className="container wow fadeInUp">
	      <div className="row">
	        <div className="col-md-12">
	          <h3 className="section-title">Our Team</h3>
	          <div className="section-title-divider"></div>
	        </div>
	      </div>
	      
	      <div className="row">
	        <div className="col-md-3">
	          <div className="member">
	            <div className="pic"><img src="static/img/team-1.jpg" alt=""/></div>
	            <h4>Casuneanu Andrei</h4>
	            <span>CTO & DevOps Engineer</span>
	            
	          </div>
	        </div>
	        
	        <div className="col-md-3">
	          <div className="member">
	            <div className="pic"><img src="static/img/team-2.jpg" alt=""/></div>
	            <h4>Cobzac Serban</h4>
	            <span>Designer</span>
	          </div>
	        </div>
	        
	        <div className="col-md-3">
	          <div className="member">
	            <div className="pic"><img src="static/img/team-3.jpg" alt=""/></div>
	            <h4>Darabana Rares</h4>
	            <span>CEO & Marketing</span>
	            
	          </div>
	        </div>
	        
	        <div className="col-md-3">
	          <div className="member">
	            <div className="pic"><img src="static/img/team-4.jpg" alt=""/></div>
	            <h4>Timofte Andrei</h4>
	            <span>Software Developer</span>
	          
	          </div>
	        </div>
	        
	      </div>  
	    </div>
	</section>
)
export default Team