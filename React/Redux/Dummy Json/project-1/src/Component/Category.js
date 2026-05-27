import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Row, Col, Card, Button } from "react-bootstrap";
import '../Component/Categoty.css';

export default function Category() {

    let [cat, setcat] = useState([]);
    let [pro, setpro] = useState([]);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products/categories")
            .then(function (response) {
                console.log(response.data);
                setcat(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then(function (response) {
                console.log(response.data.products);
                setpro(response.data.products);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])

    return (
        <>
            <Row className="">
                <Col lg={3}>
                    <div className="fram">
                        {
                            cat.map((item, index) => {
                                return (
                                    <div className="cat" key={index}>
                                        <div className="cat-name">
                                            {item}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Col>
                <Col lg={9}>
                    <div className="row pro_box">
                        {
                            pro.map((item, index) => {
                                return (
                                    <div className="pro col-4 g-3" key={index}>
                                        <Card style={{ width: '22rem' }}>
                                            <Card.Img variant="top" src={item.thumbnail} className="card_img w-100 object-fit-cover border rounded" />
                                            <Card.Body>
                                                <Card.Title>Name : {item.title}</Card.Title>
                                                <Card.Title>Brand : {item.brand}</Card.Title>
                                                <Card.Text>
                                                    {item.description}
                                                </Card.Text>
                                                <Card.Title>Price : ${item.price}</Card.Title>
                                                <div className="rate mb-2">{item.rating}★</div><br />
                                                <div className="dis mb-2">Up To {item.discountPercentage} % Off</div><br />
                                                <Button className="card_btn">Add to Cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Col>
            </Row>
        </>
    )
}
