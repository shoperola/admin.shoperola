import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function HomePageSettings(props) {

    const [State, setState] = useState({
        hero_title: "",
        description: "",
        image_title: "",
        section1_title: "",
        description_1: "",
        image_description_1: "",
        section2_title: "",
        description_2: "",
        image_description_2: "",
        section3_title: "",
        description_3: "",
        image_description_3: "",
        section4_title: "",
        description_4: "",
        image_description_4: "",
    })

    // const { token } = isAutheticated()
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get(`https://api.tellytell.com/admin/view_all_home`, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZmU2M2E1MGFjZjZkNTIwODE0ZjYxMyIsImlhdCI6MTYyODIzMjA5NCwiZXhwIjoxNjM2ODcyMDk0fQ.45BlqV35taq9hcciqygwC4ezb21HuUE7cZPceZn4dn0`,
                },
            });
            console.log(res.data)
            setData(res.data?.data);
            console.log(State.section1_title);
            setState({
                hero_title: res.data?.data[0]?.hero_title,
                description: res.data?.data[0]?.description,
                section1_title: res.data?.data[0]?.section1_title,
                description_1: res.data?.data[0]?.description_1,
                image_title: res.data?.data[0]?.image_title,
                image_description_1: res.data?.data[0]?.image_description_1,
                section2_title: res.data?.data[0]?.section2_title,
                description_2: res.data?.data[0]?.description_2,
                image_description_2: res.data?.data[0]?.image_description_2,
                section3_title: res.data?.data[0]?.section3_title,
                description_3: res.data?.data[0]?.description_3,
                image_description_3: res.data?.data[0]?.image_description_3,
                section4_title: res.data?.data[0]?.section4_title,
                description_4: res.data?.data[0]?.description_4,
                image_description_4: res.data?.data[0]?.image_description_4,
            })
        }
        fetchData();
    }, [])

    const handleChange = (e) => {
        // if (e.target.name === "image_title" || e.target.name === "image_description_1" || e.target.name === "image_description_2" || e.target.name === "image_description_3" || e.target.name === "image_description_4") {
        //     console.log(e.target.name)
        //     setState({
        //         ...State,
        //         [e.target.name]: e.target.files[0]
        //     })
        // } else {
            console.log(e.target.value);
            setState({
                ...State,
                [e.target.name]: e.target.value
            })
        // }
    }


    const handleSubmit = async (e) => {
        console.log(State.section1_title);
        console.log(data[0]?._id);
        if (data[0]?._id) {
            console.log(State)
            const formData = new FormData;
            formData.append("hero_title", State.hero_title);
            formData.append("description", State.description);
            formData.append("image_title", State.image_title);
            formData.append("section1_title", State.section1_title);
            formData.append("description_1", State.description_1);
            formData.append("image_description_1", State.image_description_1);
            formData.append("section2_title", State.section2_title);
            formData.append("description_2", State.description_2);
            formData.append("image_description_2", State.image_description_2);
            formData.append("section3_title", State.section3_title);
            formData.append("description_3", State.description_3);
            formData.append("image_description_3", State.image_description_3);
            formData.append("section4_title", State.section4_title);
            formData.append("description_4", State.description_4);
            formData.append("image_description_4", State.image_description_4);
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // }
            let res = await axios.patch(`https://mantur-server.herokuapp.com/admin/update_home_setting/${data[0]?._id}`, formData, {
                headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZmU2M2E1MGFjZjZkNTIwODE0ZjYxMyIsImlhdCI6MTYyODIzMjA5NCwiZXhwIjoxNjM2ODcyMDk0fQ.45BlqV35taq9hcciqygwC4ezb21HuUE7cZPceZn4dn0`,
                        'Content-Type': 'multipart/form-data',
                    }
            })
            console.log(res);
            // if (res) {
            //     window.location.reload()
            // }
        } else {
            console.log(State)
            const formData = new FormData();
            formData.append("hero_title", State.hero_title);
            formData.append("description", State.description);
            formData.append("image_title", State.image_title);
            formData.append("section1_title", State.section1_title);
            formData.append("description_1", State.description_1);
            formData.append("image_description_1", State.image_description_1);
            formData.append("section2_title", State.section2_title);
            formData.append("description_2", State.description_2);
            formData.append("image_description_2", State.image_description_2);
            formData.append("section3_title", State.section3_title);
            formData.append("description_3", State.description_3);
            formData.append("image_description_3", State.image_description_3);
            formData.append("section4_title", State.section4_title);
            formData.append("description_4", State.description_4);
            formData.append("image_description_4", State.image_description_4);
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // }
            let res = await axios.post(`http://api.tellytell.info/admin/add_data`, formData)
            console.log(res);
            if (res) {
                window.location.reload()
            }
        }
    }
    return (
        <div>
            <Sidebar />
            <Header />

            <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">

                        {/* <!-- start page title --> */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0">Home Page Settings
                                    </h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><Link to="/">TellyTell</Link></li>
                                            <li className="breadcrumb-item active">Home Page Settings</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <!-- end page title --> */}


                        {/* <!-- Row Starts -->              */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-9 col-xl-7">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label for="basicpill-phoneno-input" className="label-100">
                                                                    Hero Title
                                                                </label>
                                                                <input name="hero_title" onChange={handleChange} value={State.hero_title} type="text" className="form-control input-field" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label for="basicpill-phoneno-input" className="label-100">
                                                                    Description
                                                                </label>
                                                                <input name="description" onChange={handleChange} value={State.description} type="text" className="form-control input-field" />
                                                            </div>
                                                            <div className="form-group mb-30 width-100 row">
                                                                <label className="col-md-4 control-label">Upload image or video</label>
                                                                <div className="col-md-8">
                                                                    <input name="image_title" onChange={handleChange}  type="file" className="form-control input-field" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Row Ends --> */}
                        {/* <!-- Row Starts -->              */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-9 col-xl-7">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label for="basicpill-phoneno-input" className="label-100">
                                                                    Section 1 Title
                                                                </label>
                                                                <input name="section1_title" onChange={handleChange} value={State.section1_title} type="text" className="form-control input-field" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label for="basicpill-phoneno-input" className="label-100">
                                                                    Description
                                                                </label>
                                                                <input name="description_1" onChange={handleChange} value={State.description_1} type="text" className="form-control input-field" />
                                                            </div>
                                                            <div className="form-group mb-30 width-100 row">
                                                                <label className="col-md-4 control-label">Upload image or video</label>
                                                                <div className="col-md-8">
                                                                    <input name="image_description_1" onChange={handleChange} type="file" className="form-control input-field" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Row Ends --> */}
                        {/* <!-- Row Starts -->              */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-9 col-xl-7">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label for="basicpill-phoneno-input" className="label-100">
                                                                    Section 2 Title
                                                                </label>
                                                                <input name="section2_title" onChange={handleChange} value={State.section2_title} type="text" className="form-control input-field" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label for="basicpill-phoneno-input" className="label-100">
                                                                    Description
                                                                </label>
                                                                <input name="description_2" onChange={handleChange} value={State.description_2} type="text" className="form-control input-field" />
                                                            </div>
                                                            <div className="form-group mb-30 width-100 row">
                                                                <label className="col-md-4 control-label">Upload image or video</label>
                                                                <div className="col-md-8">
                                                                    <input name="image_description_2" onChange={handleChange} type="file" className="form-control input-field" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Row Ends --> */}
                        {/* <!-- Row Starts -->              */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-9 col-xl-7">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label for="basicpill-phoneno-input" className="label-100">
                                                                    Section 3 Title
                                                                </label>
                                                                <input name="section3_title" onChange={handleChange} value={State.section3_title} type="text" className="form-control input-field" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label for="basicpill-phoneno-input" className="label-100">
                                                                    Description
                                                                </label>
                                                                <input name="description_3" onChange={handleChange} value={State.description_3} type="text" className="form-control input-field" />
                                                            </div>
                                                            <div className="form-group mb-30 width-100 row">
                                                                <label className="col-md-4 control-label">Upload image or video</label>
                                                                <div className="col-md-8">
                                                                    <input name="image_description_3" onChange={handleChange} type="file" className="form-control input-field" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Row Ends --> */}
                        {/* <!-- Row Starts -->              */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-9 col-xl-7">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label for="basicpill-phoneno-input" className="label-100">
                                                                    Section 4 Title
                                                                </label>
                                                                <input name="section4_title" onChange={handleChange} value={State.section4_title} type="text" className="form-control input-field" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label for="basicpill-phoneno-input" className="label-100">
                                                                    Description
                                                                </label>
                                                                <input name="description_4" onChange={handleChange} value={State.description_4} type="text" className="form-control input-field" />
                                                            </div>
                                                            <div className="form-group mb-30 width-100 row">
                                                                <label className="col-md-4 control-label">Upload image or video</label>
                                                                <div className="col-md-8">
                                                                    <input name="image_description_4" onChange={handleChange} type="file" className="form-control input-field" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Row Ends --> */}
                        {/* <!-- Row Starts -->              */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-9 col-xl-7">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group text-left">
                                                                <button onClick={handleSubmit} type="button" className="btn btn-success btn-login waves-effect waves-light mr-3">Save</button>
                                                                <a href="#">
                                                                    <button type="button" className="btn btn-success btn-cancel waves-effect waves-light mr-3">Cancel</button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Row Ends --> */}


                    </div>
                    {/* <!-- container-fluid --> */}
                </div>
                {/* <!-- End Page-content --> */}


                <Footer />
            </div>
        </div>
    );
}

export default HomePageSettings;