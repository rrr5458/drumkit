import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container className="d-flex justify-content-between">
                    <section className="d-flex justify-content-end align-items-center">
                        <div className="boxes-links-header">
                            <div className='h-50 row gx-0' style={{width: "50px"}}>
                                <Link to="/green" className=" box1header">
                                </Link>
                                <Link to="/black" className=" box2header">
                                </Link>
                            </div>
                            <div className='h-50 row gx-0' style={{width: "50px"}}>
                                <Link to="/yellow" className="box3header">
                                </Link>
                                <Link to="/pink" className=" box4header">
                                </Link>
                            </div>

                        </div>
                    </section>
                    
                        <Link to="/" ><div className="box-home"></div></Link>
                    
                </Container>
            </Navbar>
        </div>
    )
}
