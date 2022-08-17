import React, { useEffect, useState } from "react";
import axios from "axios";

const Checkout = ({ dataa }) => {
    const [data, setData] = useState({
        name: "",
        number: "",
        addres: "",
        addres1: "",
        district: "",
        zip: ""

    });

    const [pcname, setPcname] = useState("")
    const [price, setprice] = useState("")


    const handelChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
    };



    const handelonSubmit = async (e) => {

        let goData = {
            B: data.name,
            C: data.number,
            D: data.addres,
            E: data.addres1,
            F: data.district,
            G: data.zip,
            H: pcname,
            I: price

        };


        // const response = await fetch("http://localhost:4000/orders/Adddata", {
        //     method: 'POST',
        //     body: JSON.stringify({ goData }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        const response = await axios.post(
            "http://localhost:4000/orders/Adddata",
            goData
        )



    }
    useEffect(() => {
        setPcname(dataa[0].Name)
        setprice(dataa[0].Price)
    }, []);

    return (
        <>

            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-4 order-md-2 mb-1">
                        <div className=" text-center ">
                            <h4 class="d-flex justify-content-between align-items-center mb-1">
                                <span class="text-muted">Your cart</span>
                                <span class="badge badge-secondary badge-pill">1</span>
                            </h4>

                            <img
                                className="img-fluid"
                                src={dataa[0].Image}
                                alt=""
                            />
                            <div className="app-card-body p-1  has-card-actions ml-5">
                                <h3 className="product-name"><a href="#" >{dataa[0].Name} </a></h3>
                                <div className="app-doc-meta">
                                    <ul className="list-unstyled mb-0">
                                        <li> <h4 className="app-doc-title truncate mb-0"><a href="#file-link">
                                            {dataa[0].Title}</a></h4></li>
                                        <li>  <h4 className="product-price" >₹{dataa[0].Price} <del
                                            className="">₹{dataa[0].OldPrice}</del></h4></li>

                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="col-md-8 order-md-1">
                        <h4 class="mb-3">Billing address</h4>
                        <form class="needs-validation" noValidate="">
                            <div class="mb-3">
                                <label for="email">Full Name </label>
                                <input type="text" class="form-control" name="name" required="" onChange={handelChange} value={data.name} />
                            </div>
                            <div class="mb-3">
                                <label for="number">Phone Number </label>
                                <input type="number" class="form-control" name="number" required="" onChange={handelChange} value={data.number} />
                            </div>
                            <div class="mb-3">
                                <label for="address">Address</label>
                                <input type="text" class="form-control" name="addres" placeholder="1234 Main St" required="" onChange={handelChange} value={data.addres} />
                                <div class="invalid-feedback"> Please enter your shipping address. </div>
                            </div>
                            <div class="mb-3">
                                <label for="address2">Address 2 <span class="text-muted"></span></label>
                                <input type="text" class="form-control" name="addres1" placeholder="Landmark Near" required=""
                                    onChange={handelChange} value={data.addres1} />
                            </div>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <label for="address2">District </label>
                                    <input type="text" class="form-control" name="district" required=""
                                        onChange={handelChange} value={data.district} />
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="zip">Zip</label>
                                    <input type="text" class="form-control" name="zip" placeholder="" required=""
                                        onChange={handelChange} value={data.zip} />
                                    <div class="invalid-feedback"> Zip code required. </div>
                                </div>
                            </div>

                            <hr class="mb-4" />
                            <h4 class="mb-3">Payment</h4>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="cc-name b">CASH ON DELIVERY</label>
                                </div>
                            </div>
                            <hr class="mb-4" />
                            <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={handelonSubmit}>Continue to checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout


export const getStaticPaths = async () => {
    const res = await fetch("https://pcology-api.herokuapp.com/googleSheet/getAllData");
    const a = await res.json()
    const dataa = a.Data

    const paths = Object.keys(dataa).map((item) => {
        return {
            params: {
                Checkout: `${dataa[item].id}`
            },
        };
    });


    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.Checkout;
    const res = await fetch(`http://localhost:4000/googleSheet/getDataById/${id}`);
    const a = await res.json()
    const dataa = a.Data


    return {
        props: {
            dataa,
        },

    };
};
