import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';

function ProductDetails() {
    const { id } = useParams();
    // initial loading states
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // delete related states
    const [showDeletePrompt, setShowDeletePrompt] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [tminus, setTminus] = useState(10);
    const [timerStart, setTimerStart] = useState(false);
    // edit related states
    const [isEditing, setIsEditing] = useState(false);
    const [preview, setPreview] = useState(false);
    const [editCancelled, setEditCancelled] = useState(false);
    const [updateSuccessful, setUpdateSuccessful] = useState(false);
    const [priceError, setPriceError] = useState('');

    // redirect helper variable after setIsDeleted(true)
    const navigate = useNavigate();

    // HELPER FUNCTIONS
    const handleChange = (e) => {
        // Maintain product object structure of Number for product.price
        let newValue = 0;
        if (e.target.name === 'price') {
            // if value has non-digit or decimal characters
            if (e.target.value.match(/[^\d.]/)) {
                setPriceError('Invalid price input. Only numbers and decimal points accepted');
                return;
            }
            e.target.value.match(/[.]/) ? newValue = parseFloat(e.target.value) : newValue = parseInt(e.target.value);
        }
        setProduct(prev => ({ ...prev, [e.target.name]: (newValue || e.target.value) }));
    }

    const delProdById = () => {
        axios.delete(`https://fakestoreapi.com/products/${ id }`)
            .then(response => {
                if (response.statusText == 'OK' || response.status == 200) {
                    setIsDeleted(true)
                    setTimerStart(true) // start the timer for redirect
                } else {
                    setError('bad request')
                }
                //setTimerStart(true); // start the timer for redirect
            })
            .catch(error => console.log(error))
            .finally(() => {
                setShowDeletePrompt(false)
            })
    }

    const updateProductData = () => {
        axios.put(`https://fakestoreapi.com/products/${id}`, product)
            .then(response => {
                if (response.status == 200 || response.statusText == 'OK') {
                    setError('')
                    setUpdateSuccessful(true); // track successful put
                    setEditCancelled(false); // revert editCancelled state
                    setProduct(response.data); // update product state on page
                    setPreview(false); // editing complete, set preview to false
                } else {
                    setError('bad request');
                }
            })
            .catch(error => console.log(error))
            .finally(() => setIsEditing(false));
    }

    /* 
        Upon any detected changes in the state of 'id', make an HTTP GET request to FakeStoreAPI 
        to retrieve the product details for that particular product id.
        Then, save the result in the 'product' variable. 
    */
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
                setIsEditing(false); // revert isEditing
                setEditCancelled(false); // revert  editCancelled
            })
            .catch((error) => {
                setError("Failed to load product details" + error.message);
                setLoading(false);
            });
    }, [id, editCancelled]);

    // countdown and redirect to home page -- triggers in delProdById() after delete confirmed successful
    useEffect(() => {
        if (tminus == 0) navigate("/products");
        if (timerStart) {
            const timer = setInterval(() => {
                setTminus(t => t - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timerStart, tminus]);
    
    if (isDeleted) return <><p>Product deleted successfully!</p><br /><p>Redirecting to home page<br />{ tminus }</p></>
    if (loading) return <p>Loading products...</p>;

    

    return (
        <Container>
            <Modal show={ showDeletePrompt } onHide={ () => setShowDeletePrompt(false) }>
                <Modal.Header closeButton>
                    <Modal.Title>Delete item #{ product.id }</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete this item from the database forever?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ () => setShowDeletePrompt(false) }>
                    Close
                    </Button>
                    <Button variant="primary" onClick={ delProdById }>
                    Yes I want to delete this item from the database<br />** JK, it's not permanent **
                    </Button>
                </Modal.Footer>
            </Modal>
        
            { updateSuccessful && <Alert variant="success" onClose={ () => setUpdateSuccessful(false) } dismissible>{product.title} has been updated successfully!</Alert> }
            { error && <Alert variant="danger" dismissible>{error}</Alert> }
            <Card className="product-card">
                <Card.Img className="product-image" variant="top" src={product.image} alt={ product.title } />
                { isEditing ? <input name="image" className={ preview ? "d-none" : '' } onChange={ handleChange } value= { product.image } alt={ product.title } /> : <></> }
                <Card.Body>
                    <Card.Title>
                        {/* Negative conditional to demonstrate initial view */}
                        { !isEditing ?
                            (  product.title
                        ) : (
                            <>
                                { preview && <>{ product.title }</> }
                                { !preview && <textarea name="title" onChange={ handleChange } value= { product.title } style={{ fieldSizing: 'content' }}/> }
                            </>
                        )}
                    </Card.Title>
                    <Card.Text>
                        { !isEditing ?
                            (  product.description
                        ) : (
                            /*
                                preview toggles textarea visibility and inversely toggles description text element
                                Not willing to use another ternary for readability
                            */
                            <>
                                { preview && <>{ product.description }</> }
                                { !preview && <textarea name="description" onChange={ handleChange } value={ product.description } style={{ fieldSizing: 'content' }}/> }
                            </>
                        )}
                    </Card.Text>
                    { isEditing && !preview && <Alert variant="warning" dismissible>Enter your number and add decimal in the place you want it.</Alert> }
                    <Card.Text>
                        { !isEditing ?
                            ( <>${`${ Number.isInteger(product.price) ? product.price : product.price.toFixed(2) }`}</>
                        ) : (
                            // preview toggles input visibility and inversely toggles price text element
                            <>
                                { preview && <>${`${ Number.isInteger(product.price) ? product.price : product.price.toFixed(2) }`}<br /></> }
                                { !preview && <input name="price" className={ preview ? "d-none" : '' } onChange={ handleChange } value={ product.price } /> }
                            </>
                        )}
                    </Card.Text>
                </Card.Body>
            { !isEditing ? (
                <>
                    <Button variant="outline-info" className="fw-bold font-monospace my-3" onClick={ () => setIsEditing(true) }>Edit Product</Button>
                    <Button variant="outline-danger" className="fw-bold font-monospace" onClick={ () => setShowDeletePrompt(true) }>Delete Product</Button>
                    <Button variant="warning" className="mt-3">Add to Cart</Button>
                </>
            ) : (
                <Row>
                    <Button variant={ preview ? "info" : "outline-info" } className="fw-bold font-monospace m-3 col" onClick={ () => preview ? setPreview(false) : setPreview(true) }>Preview Update</Button>
                    <Button variant="outline-success" className="fw-bold font-monospace m-3 col" onClick={ updateProductData }>Update Product</Button>
                    <Button variant="outline-danger" className="fw-bold font-monospace m-3 col" onClick={ () => setEditCancelled(true) }>Cancel</Button>
                </Row>
            )}
            { priceError && <Alert variant="warning" onClose={ () => setPriceError('') } dismissible>{ priceError}</Alert> }
            </Card>
        </Container>
    )
}

export default ProductDetails;