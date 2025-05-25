import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '/store-svgrepo-com.svg';


function NavigationBar({ isActive, setIsActive }) {

	

	return (
		<Navbar expand="lg" className="bg-body-secondary mb-3 w-100">
			<Container id="navContainer" className="h-100">
				<Navbar.Brand href="/">
					{/* logo w/ text underneath for small screens*/}
					<div className="logoContainer d-flex d-lg-none p-0 flex-column justify-content-center">
						<img className="storeLogo mx-auto" src={ logo } />
						<h6 className="logoText flex-row">Fakest Store App</h6>
					</div>
					<div className="logoContainer d-flex d-none d-lg-inline-block p-0 flex-row">
						<img className="storeLogo flex-column h-100" src={ logo } alt="Fakest Store App Logo" title="Fakest Store App Logo" />
					</div>
				</Navbar.Brand>
				<h1 className="logoText flex-column d-none d-lg-inline-block">Fakest Store App</h1>
				
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
			</Container>
			<Navbar.Collapse id="basic-navbar-nav" className="bg-body-secondary z-3">
				<Nav className="flex-row basic-navbar-nav">
					<Nav.Link className="navLink mx-auto" href="/" disabled={ window.location.href.endsWith('/') }>Home</Nav.Link>
					<Nav.Link className="navLink mx-auto" href="/products" disabled={ window.location.href.endsWith('/products') }>Products</Nav.Link>
					<Nav.Link className="navLink mx-auto" href="/addproduct" disabled={ window.location.href.endsWith('/addproduct') }>Add Product</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavigationBar;   
