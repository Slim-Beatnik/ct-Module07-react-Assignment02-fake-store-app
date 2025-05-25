import Container from 'react-bootstrap/Container';

function Footer() {
    return (
            <footer className="fixed-bottom mt-0">
                <hr/>
                <p>Kyle HIll &copy; 2025</p>
                <h6>FakeStoreAPI is a testing API—responses to POST/PUT/DELETE will appear successful, but the underlying data will not change permanently.</h6>
                <hr/>
            </footer>
    )
}

export default Footer;