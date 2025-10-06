import React from 'react'
import Card from 'react-bootstrap/Card'

const Cards = ({ data }) => {
    return (
        <>
            {
                data.map((element, k) => {
                    return (
                        <>
                            <Card style={{ width: '22rem',border:"none" , backgroundColor: "#0C0C0C"}} className="hove mb-4">
                                <Card.Img variant="top" className='cd' src={element.imgdata} />

                                <div className="card_body">
                                    <div className="upper_data d-flex justify-content-between align-items-center">
                                        <h4 className='mt-2' style={{color: "white"}}>{element.rname}</h4>
                                        <span style={{color: "white"}}>{element.rating}&nbsp;★</span>
                                    </div>

                                    <div className="lower_data d-flex  justify-content-between">
                                        <h5 style={{color: "white"}}>{element.address}</h5>
                                        <span style={{color: "white"}}>{element.price}</span>
                                    </div>


                                    <div className="extra"></div>

                                    <div className="last_data d-flex justify-content-between align-items-center">
                                        <img src={element.arrimg} style={{color: "white"}} className="limg" alt="" />
                                        <p style={{color: "white"}}>{element.somedata}</p>
                                        <img src={element.delimg} style={{color: "white"}} className="laimg" alt="" />
                                    </div>
                                </div>

                            </Card>
                        </>
                    )
                })
            }

        </>
    )
}

export default Cards