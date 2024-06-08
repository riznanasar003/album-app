import React, { useState } from 'react'
import Navbar from './Navbar'
import { useSearchParams } from 'react-router-dom'

const AddUser = () => {
    const [data,setData] = useState(
        {
            "fullname":"",
            "albumid":"",
            "date":"",
            "emailid":"",
            "phoneno":"",
            "price":""
        }
    )
    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue = () =>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">FULL NAME</label>
                            <input type="text" className="form-control" name="fullname" value={data.fullname} onChange={inputHandler}/>
                
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">ALBUM ID</label>
                            <input type="text" className="form-control" name="albumid" value={data.albumid} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">DATE OF EVENT</label>
                            <input type="date" className="form-control" name="date" value={data.date} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">EMAIL ID</label>
                            <input type="text" className="form-control" name="emailid" value={data.emailid} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">PHONE NO</label>
                            <input type="text" className="form-control" name="phoneno" value={data.phoneno} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">PRICE</label>
                            <input type="text" className="form-control" name="price" value={data.price} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <button className="btn btn-success" onClick={readValue}>SUBMIT</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddUser