import Udana from "../assets/images/udana.png";
import HeroAbout from "../assets/images/heroabout.svg";
const About = () => {
  return (
    <div id="about" className="hero min-h-screen" >
      <div  >
        <div className="hero-content flex-col lg:flex-row-reverse justify-between items-center" >
          <img src={Udana} className="w-[400px] h-auto rounded-lg " data-aos="zoom-in" data-aos-duration="1000" />
          <div className="w-2/4" data-aos="zoom-in" data-aos-duration="1000">
            <h1 className="text-5xl font-bold">Apa itu <spanc className="text-yellow-300">Udana.id?</spanc></h1>
            <p className="py-6">
              <strong className="text-yellow-300">Udana.id</strong> adalah platform crowdfunding yang membuka akses pendanaan
              dan investasi untuk semua kalangan. Saat ini, kami juga
              meluncurkan platform amal untuk memudahkan donasi dan mendukung
              berbagai inisiatif sosial, memastikan setiap kontribusi memberikan
              dampak positif bagi mereka yang membutuhkan.
            </p>
          </div>
        </div>
        <div className="my-14 justify-center flex items-center w-full" data-aos="zoom-in" data-aos-duration="1000">
          <img src={HeroAbout} alt="Hero About" className="w-full lg:w-[100%] h-auto" />
        </div>
      </div>
 
    </div>
  );
};

export default About;
