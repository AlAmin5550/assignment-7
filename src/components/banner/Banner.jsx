import background from './images/banner.jpg'

const Banner = () => {
    return (
        <div className="container mx-auto text-white px-10">
            <div className="rounded-3xl min-w-full" style={{
                backgroundImage:
                    `linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.8)), url(${background})`,backgroundRepeat: 'no-repeat',backgroundSize:'cover'
            }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-">
                    <div className="mt-32 mb-28">
                        <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                        <button className="btn bg-green-400 text-xl rounded-3xl mr-5 border-0">Explore Now</button>
                        <button className="btn text-white border-white text-xl rounded-3xl btn-outline">Our feedback</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;