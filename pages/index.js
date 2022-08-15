import styles from '../styles/Home.module.css'
import Head from "next/head";
import Link from "next/link"

export default function Home({ data }) {
    //console.log(data.Data, "=======");
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" />



            </Head>


            <div className="section">




                <hr />
                <div className="container mt-3">
                    {Object.keys(data).map((item, i) => {
                        return (<div key={i} >

                            {(data[item].id) ?
                                <div className=" col-12 col-sm-12 col-md-12 col-xl-6 col-xxl-6" >
                                    <Link href={`/ItemDetail/${data[item].id}`} ><a>
                                        <div class="product">
                                            <div class="img-fluid text-center">
                                                <img src={data[item].Image} alt="" />
                                            </div>
                                            <div class="product-body">
                                                <p class="product-category">{data[item].Name}</p>
                                                <h3 class="product-name">{data[item].Title}</h3>
                                                <h4 class="product-price">₹{data[item].Price} <del
                                                    class="product-old-price">₹{data[item].OldPrice}</del></h4>
                                            </div>
                                            <div class="add-to-cart">

                                                <button class="add-to-cart-btn  " ><i class="fa fa-shopping-cart"></i> SHOP NOW
                                                </button>

                                            </div>
                                        </div>
                                    </a></Link>
                                </div>

                                : ""}
                        </div>
                        )
                    })}
                </div>
                <hr />

            </div>

            <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js" />
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" />
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://pcology-api.herokuapp.com/googleSheet/getAllData")
    const a = await res.json()
    const data = a.Data

    return {
        props: {
            data
        }
    }
}
