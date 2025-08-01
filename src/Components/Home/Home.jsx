import './Home.css'
import avatar from '../../assets/imgs/avataaars.svg'

export default function Home() {
    return (
        <>
            <section id="home" className="min-vh-100 bg-info d-flex align-items-center justify-content-center">
                <div className="container text-center p-3 mt-5 ">
                    <img src={avatar} alt="avatar" />
                    <h1 className="text-white display-6 fw-bold mt-4">START FRAMEWORK</h1>

                    <div className="star-container mt-3 mb-3 d-flex justify-content-center align-items-center">
                        <div id="line"></div>
                        <i className="fa fa-solid fa-star text-white"></i>
                        <div id="line"></div>
                    </div>

                    <p className="text-white mb-0">Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </section>

        </>
    )
}
