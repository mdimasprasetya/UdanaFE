import heroImage from "../assets/images/hero.png";
import "aos/dist/aos.css";
import { Typewriter, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: [
      " datang dari aksi mu.",
      " nyata karena aksi mu.",
      " ada karena aksi mu.",
    ],
    loop: 0,
    typeSpeed: 140,
    deleteSpeed: 60,
  });

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center" >
          <div className="max-w-xl">
            <h1 className="mb-5 text-6xl font-bold ">
              <span className="text-yellow-300">Kebahagiaan</span>
              <span>{typeEffect}</span>
              {/* <span className="text-yellow-300">aksi mu</span>. */}
            </h1>
            <div data-aos="zoom-in" data-aos-duration="1000">
            <p className="mb-5">
              Jadilah bagian dari kebaikan dan wujudkan impian seseorang.
            </p>
            <button className="btn bg-yellow-300 lg:w-36 rounded-full text-base transform transition-transform duration-300 hover:scale-110 hover:bg-yellow-400">
              <a href="#cards">Mulai Donasi</a>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
