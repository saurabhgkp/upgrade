
const Checkout = () => {
    return (
        <>

            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-4 order-md-2 mb-4">
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-muted">Your cart</span>
                            <span class="badge badge-secondary badge-pill">1</span>
                        </h4>
                        <ul class="list-group mb-3 sticky-top">
                            <div class="col-sm-5">
                                <div className=" text-center ">
                                    <img className="img-fluid" alt="" />
                                    <div className="app-card-body p-1  has-card-actions ml-5">
                                        <h3 className="product-name"><a href="#"> </a></h3>
                                        <div className="app-doc-meta">
                                            <ul className="list-unstyled mb-0">
                                                <li> <h4 className="app-doc-title truncate mb-0"><a href="#file-link">
                                                </a></h4></li>
                                                <li>  <h4 className="product-price">₹ <del
                                                    className="">₹</del></h4></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div class="col-md-8 order-md-1">
                        <h4 class="mb-3">Billing address</h4>
                        <form class="needs-validation" novalidate="">
                            <div class="mb-3">
                                <label for="email">Full Name </label>
                                <input type="text" class="form-control" required="" />
                            </div>
                            <div class="mb-3">
                                <label for="number">Phone Number </label>
                                <input type="number" class="form-control" required="" />
                            </div>
                            <div class="mb-3">
                                <label for="address">Address</label>
                                <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" />
                                <div class="invalid-feedback"> Please enter your shipping address. </div>
                            </div>
                            <div class="mb-3">
                                <label for="address2">Address 2 <span class="text-muted"></span></label>
                                <input type="text" class="form-control" id="address2" placeholder="Landmark Near" required="" />
                            </div>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <label for="address2">District </label>
                                    <input type="text" class="form-control" id="address2" required="" />
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="zip">Zip</label>
                                    <input type="text" class="form-control" id="zip" placeholder="" required="" />
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
                            <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout