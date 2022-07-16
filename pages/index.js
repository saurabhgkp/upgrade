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

                                        <div id="tab1" class="tab-pane active">
                                            <div class="products-slick" data-nav="#slick-nav-1">

                                                <div class="product">
                                                    <div class="product-img">
                                                        <img src="./img/cabnet.jpg" alt="" />
                                                        <div class="product-label">
                                                            <span class="sale">-30%</span>
                                                            <span class="new">NEW</span>
                                                        </div>
                                                    </div>
                                                    <div class="product-body">
                                                        <p class="product-category">Category</p>
                                                        <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                        <h4 class="product-price">₹35,000 <del
                                                            class="product-old-price">₹40,000</del></h4>
                                                        <div class="product-rating">
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                        </div>
                                                        <div class="product-btns">
                                                            <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                                class="tooltipp">add to wishlist</span></button>
                                                            <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                                class="tooltipp">add to compare</span></button>
                                                            <button class="quick-view"><i class="fa fa-eye"></i><span
                                                                class="tooltipp">quick view</span></button>
                                                        </div>
                                                    </div>
                                                    <div class="add-to-cart">
                                                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to
                                                            cart</button>
                                                    </div>
                                                </div>

                                                <div class="product">
                                                    <div class="product-img">
                                                        <img src="./img/cabnet.jpg" alt="" />
                                                        <div class="product-label">
                                                            <span class="new">NEW</span>
                                                        </div>
                                                    </div>
                                                    <div class="product-body">
                                                        <p class="product-category">Category</p>
                                                        <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                        <h4 class="product-price">₹25,000 <del
                                                            class="product-old-price">₹30,000</del></h4>
                                                        <div class="product-rating">
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star-o"></i>
                                                        </div>
                                                        <div class="product-btns">
                                                            <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                                class="tooltipp">add to wishlist</span></button>
                                                            <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                                class="tooltipp">add to compare</span></button>
                                                            <button class="quick-view"><i class="fa fa-eye"></i><span
                                                                class="tooltipp">quick view</span></button>
                                                        </div>
                                                    </div>
                                                    <div class="add-to-cart">
                                                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to
                                                            cart</button>
                                                    </div>
                                                </div>



                                            </div>
                                            <div id="slick-nav-1" class="products-slick-nav"></div>
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
