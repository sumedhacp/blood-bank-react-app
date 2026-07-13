import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const AddDonor = () => {

    const [input, changeInput] = useState(

        {
            donor_name: "",
            age: "",
            gender: "",
            blood_group: "",
            phone: "",
            email: "",
            city: "",
            weight_kg: "",
            last_donation_date: ""
        }

    )

    const inputHandler = (event) => {

        changeInput({ ...input, [event.target.name]: event.target.value })

    }

    const readValue = () => {

        console.log(input)

        axios.post("https://host-demo-app.onrender.com/api/add-donor", input).then(

            (response) => {
                console.log(response.data)
                alert("Donor Added Successfully")
            }

        ).catch(

            (error) => {
                console.error("Error Adding Donor!", error)
                alert("Failed to Add Donor!")
            }

        )

    }


    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Donar Name: </label>
                                <input type="text" className="form-control" name="donar_name" value={input.donor_name} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Age: </label>
                                <input type="number" className="form-control" name="age" value={input.age} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Gender: </label>
                                <select name="" id="" className="form-control" name="gender" value={input.gender} onChange={inputHandler}>
                                    <option className="option" value="Female">Female</option>
                                    <option className="option" value="Male">Male</option>
                                    <option className="option" value="Other">Other</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Blood Group: </label>
                                <select name="" id="" className="form-control" name="blood_group" value={input.blood_group} onChange={inputHandler}>
                                    <option className="option" value="Select">Select</option>
                                    <option className="option" value="A+">A+</option>
                                    <option className="option" value="A-">A-</option>
                                    <option className="option" value="B+">B+</option>
                                    <option className="option" value="B-">B-</option>
                                    <option className="option" value="AB+">AB+</option>
                                    <option className="option" value="O+">AB-</option>
                                    <option className="option" value="O-">O+</option>
                                    <option className="option" value="O-">O-</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Phone: </label>
                                <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email: </label>
                                <input type="email" name="" id="" className="form-control" name="email" value={input.email} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">City: </label>
                                <input type="text" className="form-control" name="city" value={input.city} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Weight(kg): </label>
                                <input type="number" name="" id="" className="form-control" name="weight_kg" value={weight_kg} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Last Donation date: </label>
                                <input type="date" name="" id="" className="form-control" name="last_donation_date" value={input.last_donation_date} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddDonor