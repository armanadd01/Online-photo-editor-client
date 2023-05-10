import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import BannerHomeImageOne from '../../../Media/Banner/Banner Image.webp'

const BannerHome = () => {
    return (
        <>
            <Container className='my-5'>
                <Row className='align-items-center'>
                    <Col md={8} className=''>
                        <h1>Print a CVS Passport Photo <br /> [For Just $0.39]</h1>
                        <h2>
                            Get your perfect biometric photo <br /> (compliance guaranteed)
                        </h2>

                        <Button variant="warning" className='bg-gradient' size="lg">Search</Button>

                    </Col>
                    <Col md={4}>
                        <Image src={BannerHomeImageOne}  fluid></Image>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default BannerHome;