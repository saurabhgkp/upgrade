import React from 'react'

const Products = ({ data }) => {
    return (
        <>
            <div className="section">

                <hr />
                <div className="container mt-3">
                    {Object.keys(data).map((item, i) => {
                        return (<div key={i} >

                            {(data[item].Image) ?
                                <div className="col-6 col-sm-6 col-md-4 col-xl-3 col-xxl-2" >
                                    {/* <Link href={`/ItemDetail/${data[item].id}`} ><a>mm</a></Link> */}
                                    <div className="app-card app-card-doc shadow-sm h-100">
                                        <img
                                            className="thumb-image mx-auto "
                                            src={data[item].Image}
                                            alt=""
                                        />
                                        <div className="app-card-body p-1 has-card-actions text-center">
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

                                </div>
                                : ""}
                        </div>
                        )
                    })}
                </div>
                <hr />


            </div>
        </>
    )
}

export default Products


export async function getStaticProps() {
    const res = await fetch("https://pcology-api.herokuapp.com/googleSheet/getAllData")
    const a = await res.json()
    const data = a.Data
    console.log(data, "========");

    return {
        props: {
            data
        }
    }
}
