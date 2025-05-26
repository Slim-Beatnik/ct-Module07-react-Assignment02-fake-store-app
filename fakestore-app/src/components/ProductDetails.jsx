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
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showDeletePrompt, setShowDeletePrompt] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [tminus, setTminus] = useState(10);
    const [timerStart, setTimerStart] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [preview, setPreview] = useState(false);
    const [editCancelled, setEditCancelled] = useState(false);
    const [updateSuccessful, setUpdateSuccessful] = useState(false);
    const navigate = useNavigate();

    // HELPER FUNCTIONS
    const handleChange = (e) => {
        setProduct(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const delProdById = () => {
        axios.delete(`https://fakestoreapi.com/products/${ id }`)
            .then(response => {
                response.statusText == 'OK' ? setIsDeleted(true) : setError('bad request');
                setTimerStart(true); // start the timer for redirect
            })
            .catch(error => console.log(error))
            .finally(() => {
                setShowDeletePrompt(false)
            })
    }

    {/* 
        Upon any detected changes in the state of 'id', make an HTTP GET request to FakeStoreAPI 
        to retrieve the product details for that particular product id.
        Then, save the result in the 'product' variable. 
    */}
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
                setIsEditing(false);
                setEditCancelled(false);
            })
            .catch((error) => {
                setError("Failed to load product details" + error.message);
                setLoading(false);
            });
    }, [id, editCancelled]);

    const updateProductData = () => {
        axios.put(`https://fakestoreapi.com/products/${id}`, product)
            .then(response => {
                if (response.status == 200) {
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

    useEffect(() => {
        if (tminus == 0) navigate("/products");
        if (timerStart) {
            const timer = setInterval(() => {
                setTminus(tminus => tminus - 1);
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
        
            {updateSuccessful && <Alert variant="success" dismissible onDismiss={ () => setUpdateSuccessful(false) }>{product.title} has been updated successfully!</Alert>}
            {error && <Alert variant="danger" dismissible>{error}</Alert>}
            <Card className="product-card">
                <Card.Img className="product-image" variant="top" src={product.image} alt={ product.title } />
                { isEditing ? <input name="image" className={ preview ? "d-none" : '' } onChange={ handleChange } value= { product.image } alt={ product.title } /> : <></> }
                <Card.Body>
                    <Card.Title>
                        { !isEditing ?
                            (product.title
                        ) : (
                            <>{ product.title }<br /><input name="title" className={ preview ? "d-none" : '' } onChange={ handleChange } value= { product.title } /> </>
                        )}
                    </Card.Title>
                    <Card.Text>
                        { !isEditing ?
                            (product.description
                        ) : (
                            <>{ product.description }<br /><textarea name="description" className={ preview ? "d-none" : 'prodDescTA' } onChange={ handleChange } value={ product.description } /> </>
                        )}
                    </Card.Text>
                    <Card.Text>
                        ${ !isEditing ?
                            (product.price
                        ) : (
                            <>{ product.price }<br /><input name="price" className={ preview ? "d-none" : '' } onChange={ handleChange } value= { product.price } /> </>
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
            
            </Card>
        </Container>
    )
}

export default ProductDetails;