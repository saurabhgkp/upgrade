
import Link from "next/link"
const ItemDetail = ({ data }) => {
    return (
        <>

            <div class="container-fluid">
                <div class="row content">
                    <div class="col-sm-5">
                        <div className=" text-center ">
                            <img
                                className="img-fluid"
                                src={data[0].Image}
                                alt=""
                            />
                            <div className="app-card-body p-1  has-card-actions ml-5">
                                <h3 className="product-name"><a href="#">{data[0].Name} </a></h3>
                                <div className="app-doc-meta">
                                    <ul className="list-unstyled mb-0">
                                        <li> <h4 className="app-doc-title truncate mb-0"><a href="#file-link">
                                            {data[0].Title}</a></h4></li>
                                        <li>  <h4 className="product-price">₹{data[0].Price} <del
                                            className="">₹{data[0].OldPrice}</del></h4></li>

                                    </ul>
                                </div>
                                <div class="add-to-cart">
                                    <Link href={`/Checkout/${data[0].id}`} ><a>
                                        <button class="btn btn-outline-success " ><i class="fa fa-shopping-cart"></i> SHOP NOW
                                        </button></a></Link>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-7">
                        <h4><small>{data[0].Title}</small></h4>
                        <hr />
                        <h2> {data[0].Name}</h2>
                        <p className="h4">{data[0].Details}</p>
                        <br /><br />
                        <div class="row">
                            <div class="col-sm-10">
                                <h4>Processe </h4>
                                <p>{data[0].Processe}</p>
                                <hr />
                            </div>
                            <div class="col-sm-10">
                                <h4>RAM</h4>
                                <p>{data[0].RAM}</p>
                                <hr />
                            </div>
                            <div class="col-sm-10">
                                <h4>SSD</h4>
                                <p>{data[0].SSD}</p>
                                <hr />
                            </div>
                            <div class="col-sm-10">
                                <h4>Mother Board</h4>
                                <p>{data[0].Motherboard}</p>
                                <hr />
                            </div>
                            <div class="col-sm-10">
                                <h4>SMPS</h4>
                                <p>{data[0].SMPS}</p>
                                <hr />
                            </div>
                            <div class="col-sm-10">
                                <h4>Graphic Card</h4>
                                <p>{data[0].GraphicCard}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemDetail

export const getStaticPaths = async () => {
    const res = await fetch("https://pcology-api.herokuapp.com/googleSheet/getAllData");
    const a = await res.json()
    const data = a.Data

    const paths = Object.keys(data).map((item) => {
        return {
            params: {
                id: `${data[item].id}`
            },
        };
    });


    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`http://localhost:4000/googleSheet/getDataById/${id}`);
    const a = await res.json()
    const data = a.Data


    return {
        props: {
            data,
        },
    };
};
