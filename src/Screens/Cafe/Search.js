import React, { useEffect, useState } from 'react'
import Fooddata from './FoodData'
import "./Cafe.css"
import Form from 'react-bootstrap/Form'
import Cards from './Cards'
import Set from './Set'
import 'bootstrap/dist/css/bootstrap.min.css';


const Search = () => {

    const [fdata, setFdata] = useState(Fooddata);
    // console.log(fdata);

    const [copydata, setCopyData] = useState([]);

    // console.log(copydata);


    const chanegData = (e) => {
        let getchangedata = e.toLowerCase();

        if (getchangedata == "") {
            setCopyData(fdata);
        } else {
            let storedata = copydata.filter((ele, k) => {
                return ele.rname.toLowerCase().match(getchangedata);
            });

            setCopyData(storedata)
        }
    }


    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"


    useEffect(() => {

        setTimeout(() => {
            setCopyData(Fooddata);
        }, 3000);

    }, [])

    return (
        <>
        
            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                    <Form.Control type="text"
                        onChange={(e) => chanegData(e.target.value)}
                        placeholder="Search Restaurant" />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{ background: "#ed4c67" }}>Submit</button>
            </Form>


            <section className='iteam_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400, color: "white" }}>Cafes in Ahmedabad Open now</h2>

                <div className="row mt-2 d-flex justify-content-around align-items-center">
                    {copydata && copydata.length ? <Cards data={copydata} /> : <Set  sdata={fdata}/>}
                </div>
            </section>
          
        </>
    )
}

export default Search