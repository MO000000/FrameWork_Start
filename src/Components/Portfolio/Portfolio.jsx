import po1 from "../../assets/imgs/poert1.svg"
import po2 from "../../assets/imgs/poert2.svg"
import po3 from "../../assets/imgs/poert3.svg"
import "./Portfolio.css"


export default function Portfolio() {
    function PreviewImg(src) {
        document.querySelector("#img-preview").setAttribute("src", src);
        document.querySelector(".preview-img").classList.remove("d-none");
        document.querySelector(".preview-img").classList.add("d-block");
    }
    function closeImg() {
        document.querySelector(".preview-img").classList.remove("d-block");
        document.querySelector(".preview-img").classList.add("d-none");
    }


    return (
        <section
            id="portfolio"
            className="min-vh-100 d-flex justify-content-center align-items-center mt-3 mb-5">
            <div className="container mt-5 position-relative">

                <div className="title mt-5">
                    <h1 className="text-center display-6 fw-bold t-color">PORTFOLIO COMPONENT</h1>

                    <div className="star-container mt-3 mb-3 d-flex justify-content-center align-items-center">
                        <div id="line"></div>
                        <i className="fa fa-solid fa-star t-color"></i>
                        <div id="line"></div>
                    </div>
                </div>

                <div className="row g-3 mt-3 d-flex justify-content-between">
                    <div className="col-md-6 col-lg-4">
                        <div className="card overflow-hidden rounded-3 position-relative"
                            onClick={() => PreviewImg(po1)}>
                            <img src={po1}
                                className="img-fluid"
                                alt="poert1" />

                            <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                                <i className="fa-solid fa-plus fs-5x text-white"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card overflow-hidden rounded-3 position-relative"
                            onClick={() => PreviewImg(po2)}>
                            <img src={po2}
                                className="img-fluid"
                                alt="poert2" />

                            <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                                <i className="fa-solid fa-plus fs-5x text-white"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card overflow-hidden rounded-3 position-relative"
                            onClick={() => PreviewImg(po3)}>
                            <img src={po3}
                                className="img-fluid"
                                alt="poert3" />

                            <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                                <i className="fa-solid fa-plus fs-5x text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row g-4 mt-3 d-flex justify-content-between">
                    <div className="col-md-6 col-lg-4">
                        <div className="card overflow-hidden rounded-3 position-relative"
                            onClick={() => PreviewImg(po1)}>
                            <img src={po1}
                                className="img-fluid"
                                alt="poert1" />

                            <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                                <i className="fa-solid fa-plus fs-5x text-white"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card overflow-hidden rounded-3 position-relative"
                            onClick={() => PreviewImg(po2)}>
                            <img src={po2}
                                className="img-fluid"
                                alt="poert2" />

                            <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                                <i className="fa-solid fa-plus fs-5x text-white"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card overflow-hidden rounded-3 position-relative"
                            onClick={() => PreviewImg(po3)}>
                            <img src={po3}
                                className="img-fluid"
                                alt="poert3" />

                            <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                                <i className="fa-solid fa-plus fs-5x text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="preview-img d-flex justify-content-center align-items-center bg-info opacity-25 position-fixed top-0 start-0 w-100 vh-100 d-none"
                onClick={closeImg}>
                <img className="w-50 mt-5 rounded-3" id="img-preview" alt="preview img" />
            </div>

        </section>

    );


}
