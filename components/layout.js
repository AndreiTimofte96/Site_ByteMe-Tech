import Header from './header.js'

const Layout = (props) => (
  <div>
  	<link href="static/img/favicon.ico" rel="shortcut icon"/>
    <Header />
    {props.children}
  </div>
)

export default Layout
