import "./css/home.css";

const Home = () => {
    return (
        <div>
            <div className="info-card">
                <div className="info-text-ctn">
                    <div className="info-head">
                        <h1>Get Free Education</h1>
                    </div>
                    <div className="info-text">
                        <p>
                            Get Free Education And high quailty educational
                            system to help you advance in your career, learn a
                            new language by
                        </p>
                    </div>
                    <div className="info-buton">
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="info-image">
                    <img
                        src="https://cdni.iconscout.com/illustration/free/thumb/concept-of-remote-team-2112518-1785598.png"
                        alt=""
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default Home;
