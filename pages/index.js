import styles from '../styles/Home.module.css'
import Title from '../components/Title'
export default function Home({ data }) {
    return (
        <>
            <div>

                <div class="section">

                    <div class="container">

                        <div class="row">

                            <div class="col-md-4 col-xs-6">
                                <div class="shop">
                                    <div class="shop-img">
                                        <img src="./img/gamming.jpg" alt="" />
                                    </div>
                                    <div class="shop-body">
                                        <h3>Smooth Gaming <br />Experience</h3>
                                        <a href="#tab1" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-xs-6">
                                <div class="shop">
                                    <div class="shop-img">
                                        <img src="./img/office1.jpg" alt="" />
                                    </div>
                                    <div class="shop-body">
                                        <h3>Office as well as <br />Gaming</h3>
                                        <a href="#tab1" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-xs-6">
                                <div class="shop">
                                    <div class="shop-img">
                                        <img src="./img/gam.jpg" alt="" />
                                    </div>
                                    <div class="shop-body">
                                        <h3>High Quality <br />productive</h3>
                                        <a href="#tab1" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div class="section">

                    <div class="container">

                        <div class="row">



                            <div class="col-md-12">
                                <div class="row">
                                    <div class="products-tabs">

                                        <div id="tab1" class="">
                                            <div class="products-slick" data-nav="#slick-nav-1">
                                                {/* ////////////// */}
                                                <div class="row">
                                                    <div class="col-md-6 ml-0">
                                                        <img class="img-responsive" src="./img/cabnet.jpg" alt="" />
                                                    </div><br />
                                                    <div class='col-md-6 mr-0' >
                                                        <div class="hot-deal">
                                                            <h3 class="text-uppercase bg-primary ">Office PC</h3>
                                                            <span class="sale">
                                                                <h4 class="text-danger">Processer  </h4>
                                                                <h5> Intel Core i3-3240 3.4 GHz Socket 2 Cores 4 Threads 3 MB Smart Cache </h5>
                                                                <h4 class="text-danger">Mother board </h4>
                                                                <h5>Zebronics H61 Motherboard Intel LGA 1155 Socket | 6USB,1VGA,1LAN,1Audio,1HDMI Port </h5>
                                                                <h4 class="text-danger">RAM  </h4>
                                                                <h5> Simmtronics 4GB DDR3 Desktop RAM 1333 MHz (PC 10600) with 3 Year Warranty </h5>
                                                                <h4 class="text-danger">SSD</h4>
                                                                <h5> Crucial MX500 500GB 6.35 cm (2.5-inch) SSD</h5>
                                                                <h4 class="text-danger">Cabinet</h4>
                                                                <h5> Corsair Carbide SPEC-05 Mid-Tower Gaming Case - Black</h5>
                                                            </span>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="product">
                                                    <div class="product-body">
                                                        {/* <p class="product-category">Category</p> */}
                                                        <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                        <h4 class="product-price">₹24,999 <del
                                                            class="">₹30,000</del></h4>
                                                        {/* <div class="product-rating">
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                        </div> */}
                                                        <a class="primary-btn cta-btn" href="#tab1">Shop now</a>
                                                    </div>

                                                </div>
                                                {/* //////////////////// */}

                                                {/* ////////////// */}
                                                <div class="row">
                                                    <div class="col-md-6 ml-0">
                                                        <img class="img-responsive" src="./img/cabnet.jpg" alt="" />
                                                    </div><br />
                                                    <div class='col-md-6 mr-0' >
                                                        <div class="hot-deal">
                                                            <h3 class="text-uppercase bg-primary ">Office PC</h3>
                                                            <span class="sale">
                                                                <h4 class="text-danger">Processer  </h4>
                                                                <h5> Intel Core i3-3240 3.4 GHz Socket 2 Cores 4 Threads 3 MB Smart Cache </h5>
                                                                <h4 class="text-danger">Mother board </h4>
                                                                <h5>Zebronics H61 Motherboard Intel LGA 1155 Socket | 6USB,1VGA,1LAN,1Audio,1HDMI Port </h5>
                                                                <h4 class="text-danger">RAM  </h4>
                                                                <h5> Simmtronics 4GB DDR3 Desktop RAM 1333 MHz (PC 10600) with 3 Year Warranty </h5>
                                                                <h4 class="text-danger">SSD</h4>
                                                                <h5> Crucial MX500 500GB 6.35 cm (2.5-inch) SSD</h5>
                                                                <h4 class="text-danger">Cabinet</h4>
                                                                <h5> Corsair Carbide SPEC-05 Mid-Tower Gaming Case - Black</h5>
                                                            </span>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="product">
                                                    <div class="product-body">
                                                        {/* <p class="product-category">Category</p> */}
                                                        <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                        <h4 class="product-price">₹34,990 <del
                                                            class="">₹40,000</del></h4>
                                                        {/* <div class="product-rating">
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                        </div> */}
                                                        <a class="primary-btn cta-btn" href="#tab1">Shop now</a>
                                                    </div>

                                                </div>
                                                {/* //////////////////// */}
                                                {/* ////////////// */}
                                                <div class="row">
                                                    <div class="col-md-6 ml-0">
                                                        <img class="img-responsive" src="./img/cabnet.jpg" alt="" />
                                                    </div><br />
                                                    <div class='col-md-6 mr-0' >
                                                        <div class="hot-deal">
                                                            <h3 class="text-uppercase bg-primary ">Office PC</h3>
                                                            <span class="sale">
                                                                <h4 class="text-danger">Processer  </h4>
                                                                <h5> Intel Core i3-3240 3.4 GHz Socket 2 Cores 4 Threads 3 MB Smart Cache </h5>
                                                                <h4 class="text-danger">Mother board </h4>
                                                                <h5>Zebronics H61 Motherboard Intel LGA 1155 Socket | 6USB,1VGA,1LAN,1Audio,1HDMI Port </h5>
                                                                <h4 class="text-danger">RAM  </h4>
                                                                <h5> Simmtronics 4GB DDR3 Desktop RAM 1333 MHz (PC 10600) with 3 Year Warranty </h5>
                                                                <h4 class="text-danger">SSD</h4>
                                                                <h5> Crucial MX500 500GB 6.35 cm (2.5-inch) SSD</h5>
                                                                <h4 class="text-danger">Cabinet</h4>
                                                                <h5> Corsair Carbide SPEC-05 Mid-Tower Gaming Case - Black</h5>
                                                            </span>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="product">
                                                    <div class="product-body">
                                                        {/* <p class="product-category">Category</p> */}
                                                        <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                        <h4 class="product-price">₹49,990 <del
                                                            class="">₹55,000</del></h4>
                                                        {/* <div class="product-rating">
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                        </div> */}
                                                        <a class="primary-btn cta-btn" href="#tab1">Shop now</a>
                                                    </div>

                                                </div>
                                                {/* //////////////////// */}
                                                {/* ////////////// */}
                                                <div class="row">
                                                    <div class="col-md-6 ml-0">
                                                        <img class="img-responsive" src="./img/cabnetw.jpg" alt="" />
                                                    </div><br />
                                                    <div class='col-md-6 mt-5' >
                                                        <div class="hot-deal">
                                                            <ul class="hot-deal-countdown">
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
                                                            <h2 class="text-uppercase">Powerfull Gaming CPU</h2>
                                                            <h3 class="b"></h3>
                                                            <a class="primary-btn cta-btn" href="#tab1">WATING</a>
                                                        </div>

                                                    </div>

                                                </div>

                                                {/* //////////////////// */}
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}
