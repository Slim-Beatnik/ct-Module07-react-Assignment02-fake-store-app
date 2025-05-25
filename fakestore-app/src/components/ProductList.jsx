import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    {/* useEffect only runs once on the initial component render, at least if you have an empty dependency array.
        If we add other variables into the dependency array, then we list them as dependencies. And if the value of any dependency
        changes, then useEffect() runs again. */}
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Failed to fetch products." + error.message);
                setLoading(false);
            })
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Container>
                <Row className="align-items-stretch d-flex justify-content-center">
                    {products.map((product) => (
                        <Col key={ product.id } sm={6} lg={4} className="sm-mb-0 mb-3">
                            <Card className="h-100 p-3">
                                <Card.Body className="my-auto listCardBody p-0">
                                    <Container className="d-flex col px-0 justify-content-center">
                                        <Card.Img className="listCardImg my-auto" variant="top" src={product.image} alt={product.title} />
                                    </Container>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>${`${ Number.isInteger(product.price) ? product.price : product.price.toFixed(2) }`}</Card.Text>
                                </Card.Body>
                                <Button className="custom-button" as={ Link } variant="dark" to={`/products/${product.id}`} style={{ backgroundColor: '#524556'}}>View Details</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    )
}

export default ProductList;