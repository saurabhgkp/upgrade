import React from 'react'

const Hero = () => {
    return (
        <div>

            <div id="hot-deal" class="section">

                <div class="container-fluid">

                    <div class="row">
                        <div class="col-md-6 ml-0">
                            <img src="./img/gamming.jpg" alt="" />
                        </div>
                        <div class='col-md-6 mr-0' >
                            <div class="hot-deal">
                                <ul class="hot-deal-countdown">
                                    <li>
                                        <div>
                                            <h3>1080</h3>
                                            <span>P</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>Normal</h3>
                                            <span>Setting</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>60 FPS</h3>
                                            <span>Approx</span>
                                        </div>
                                    </li>

                                </ul>
                                <h2 class="text-uppercase">Powerfull Gaming CPU</h2>
                                <h3 class="b">Grand Theft Auto V</h3>
                                <a class="primary-btn cta-btn" href="#tab1">Shop now</a>
                            </div>



                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Hero
