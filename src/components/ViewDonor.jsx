import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewDonor = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get(" https://host-demo-app.onrender.com/api/donors").then(

            (response) => {
                changeData(response.data)
            }

        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            {
                                data.map
                                    (
                                        (value, index) => {
                                            return (
                                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                                    <div className="card">

                                                        <div className="card-body">
                                                            <h5 className="card-title">Details: </h5>
                                                            <p><b>Name: </b>{value.donor_name}</p>
                                                            <p><b>Age: </b>{value.age}</p>
                                                            <p><b>Gender: </b>{value.gender}</p>
                                                            <p><b>Blood Group: </b>{value.blood_group}</p>
                                                            <p><b>Phone: </b>{value.phone}</p>
                                                            <p><b>City: </b>{value.city}</p>
                                                            <p><b>Weight(Kg): </b>{value.weight_kg}</p>
                                                            <a href="#" className="btn btn-success">View</a>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        }
                                    )
                            }
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewDonor