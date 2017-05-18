import Layout from '../components/layout.js'

export default () => (
    <Layout>
        <section id="services">
		    <div className="container wow fadeInUp">
		      <div className="row">
		        <div className="col-md-12">
		          <h3 className="section-title">Our Services</h3>
		          <div className="section-title-divider"></div>
		        </div>
		      </div>
		        
		      <div className="row">
		        <div className="col-md-4 service-item">
		          <div className="service-title"><img src="static/img/flexible_front_end.svg"></img></div>
		          <h4 className="service-title">Powerful and flexible front-end</h4>
		        </div>
		        <div className="col-md-4 service-item">
		          <div className="service-title"><img src="static/img/statistics.svg"></img></div>
		          <h4 className="service-title">Tools and statistics for the app</h4>
		        </div>
		        <div className="col-md-4 service-item">
		          <div className="service-title"><img src="static/img/microservices.svg"></img></div>
		          <h4 className="service-title">Microservices and third-party integration</h4>
		        </div>
		        <div className="col-md-4 service-item">
		          <div className="service-title"><img src="static/img/secure_environment.svg"></img></div>
		          <h4 className="service-title">Secure and contained running environment</h4>
		        </div>
		        <div className="col-md-4 service-item">
		          <div className="service-title"><img src="static/img/automated_deployment.svg"></img></div>
		          <h4 className="service-title">automated testing and deployment with zero downtime</h4>
		        </div>
		        <div className="col-md-4 service-item">
		          <div className="service-title"><img src="static/img/database_backup.svg"></img></div>
		          <h4 className="service-title">automated database backup</h4>
		        </div>
		        
		      </div>
		    </div>  
  </section>
    </Layout>
)
