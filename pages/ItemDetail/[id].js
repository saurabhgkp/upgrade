

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
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-7">
                        <h4><small>{data[0].Name}</small></h4>
                        <hr />
                        <h2> {data[0].Title}</h2>

                        <h5><span class="label label-danger">Food</span> <span class="label label-primary">Ipsum</span></h5><br />
                        <p className="h4">Food is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.</p>
                        <br /><br />
                        <div class="row">

                            <div class="col-sm-10">
                                <h4>RAM </h4>
                                <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <br />
                            </div>

                            <div class="col-sm-10">
                                <h4>John Row </h4>
                                <p>I am so happy for you man! Finally. I am looking forward to read about your trendy life. Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua.</p>
                                <br />
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
