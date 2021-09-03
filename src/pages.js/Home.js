import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div >
            <section className="d-flex justify-content-center align-items-center bg-gradient" style={{height: "calc(100vh - 0px)"}}>
                <div className="boxes-links">
                    <div className='h-50 row'>
                        <Link to="/green" className="col-6 w-50 box1">

                        </Link>
                        <Link to="/black" className="col-6 box2">

                        </Link>
                    </div>
                    <div className='h-50 row'>
                        <Link to="/yellow" className="col-6 w-50 box3">

                        </Link>
                        <Link to="/pink" className="col-6 w-50 box4">
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Home
