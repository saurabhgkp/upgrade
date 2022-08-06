import styles from '../styles/Home.module.css'
import Title from '../components/Title'
export default function Home({ data }) {
    //console.log(data.Data, "=======");
    return (
        <>



            <div className="section">

                <div className="container mt-3">
                    {Object.keys(data).map((item, i) => {
                        return (<div key={i} >

                            {(data[item].Image) ?
                                <div className="col-6 col-md-4 col-xl-3 col-xxl-2" >
                                    <div className="app-card app-card-doc shadow-sm h-100">
                                        <img
                                            className="thumb-image"
                                            src={data[item].Image}
                                            alt=""
                                        />
                                        <div className="app-card-body p-1 has-card-actions">
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
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6 ml-0">
                            <img className="img-responsive" src="./img/cabnetw.jpg" alt="" />
                        </div><br /><br />
                        <div className='col-md-6 mt-5' >
                            <div className="hot-deal ">
                                <ul className="hot-deal-countdown">
                                    <li>
                                        <div>
                                            <h3>COMING</h3>
                                            <span>COMING</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>SOON</h3>
                                            <span>SOON</span>
                                        </div>
                                    </li>
                                </ul>
                                <h2 className="text-uppercase">Powerfull Gaming CPU</h2>
                                <h3 className="b"></h3>
                                <a className="primary-btn cta-btn" href="#tab1">WATING</a>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


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
