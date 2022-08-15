import styles from '../styles/Home.module.css'
import Head from "next/head";

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
                                    {/* <Link href={`/ItemDetail/${data[item].id}`} ><a>mm</a></Link> */}
                                    <div className="app-card app-card-doc shadow-sm h-150">
                                        <img
                                            className="thumb-image  "
                                            src={data[item].Image}
                                            alt=""
                                        />
                                        <div className="app-card-body p-1 has-card-actions ml-5">
                                            <h3 className="product-name"><a href="#">{data[item].Name} </a></h3>
                                            <div className="app-doc-meta">
                                                <ul className="list-unstyled mb-0">
                                                    <li> <h4 className="app-doc-title truncate mb-0"><a href="#file-link">
                                                        {data[item].Title}</a></h4></li>
                                                    <li>  <h4 className="product-price">₹{data[item].Price} <del
                                                        className="">₹{data[item].OldPrice}</del></h4></li>
                                                    <li> <a className="primary-btn cta-btn" href="#tab1">Shop now</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <nav class="navbar   bg-dark navbar-dark">

                                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                            Navbar
                                        </button>
                                        <div class="collapse navbar-collapse" id="collapsibleNavbar">
                                            <ul class="navbar-nav">
                                                <li class="nav-item h3">
                                                    <div class="container text-light">

                                                        <p>In this example, the navigation bar is hidden on small screens and replaced by a button in the top right corner (try to re-size this window).</p>
                                                        <p>Only when the button is clicked, the navigation bar will be displayed.</p>
                                                        <p>Tip: You can also remove the .navbar-expand-md class to ALWAYS hide navbar links and display the toggler button.</p>
                                                    </div>

                                                </li>
                                            </ul>
                                        </div>
                                    </nav>

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
