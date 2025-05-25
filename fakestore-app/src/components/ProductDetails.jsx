import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isDeleted, setIsDeleted] = useState(false);
    const setInterval(() => )

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
            })
            .catch((error) => {
                setError("Failed to load product details" + error.message);
                setLoading(false);
            });
    }, [id]);


    const delProdById = () => {
        axios.delete(`https://fakestoreapi.com/products/${ id }`)
            .then(response => response.statusText == 'OK' ? setIsDeleted(true) : setError('bad request'))
            .catch(error => console.log(error))
    }

    if (isDeleted) return <p>Product deleted successfully!</p>;
    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    return (
        <Container>
            <Card className="product-card">
                <Card.Img className="product-image" variant="top" src={product.image} alt={product.title} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>${product.price}</Card.Text>
                </Card.Body>
            <Button variant="outline-danger" className="fw-bold font-monospace" onClick={ delProdById }>Delete Product</Button>
            </Card>
        </Container>
    )
}

export default ProductDetails;