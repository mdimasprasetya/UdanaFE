// import Heromain from "../assets/images/Heromain.svg";
import main from "../assets/images/main.svg";

const Main = () => {
  return (
    <div id="partner" className="justify-between gap-2 py-24" >
      {/* <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={Heromain} className="max-w-sm rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold w-3/4 text-right ml-auto">
              Bantu mereka yang terdampak{" "}
              <span className="text-yellow-300">
                bencana, kekurangan, dan kebutuhan darurat
              </span> {""}
              .
            </h1>
            <div className="flex text-right ml-auto">
              <div className="flex-1">
                <p className="py-6 w-3/5 text-right ml-auto">
                  <strong>22.690</strong> donasi telah diverifikasi dan masih
                  aktif
                </p>
                <p className="py-6 w-3/5 text-right ml-auto">
                  <strong>10.517</strong> donasi telah didistribusikan kepada
                  yang membutuhkan
                </p>
              </div>
              <div>
                <p className="py-6 w-3/5 text-right ml-auto">
                  <strong>22.690</strong>  donasi telah diverifikasi dan masih aktif
                </p>
                <p className="py-6 w-3/5 text-right ml-auto">
                <strong>6.450 donasi</strong> telah didistribusikan ke daerah terdampak bencana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="text-center " >
        <div data-aos="fade-right" data-aos-duration="1000">
            <p className="text-4xl font-bold">Mitra Kami</p>
        </div>
        <div>
            <p data-aos="fade-right" data-aos-duration="1000" className="text-xl font-bold py-8 text-gray-600">Lebih dari 50 perusahaan dan institusi telah mempercayai kami selama bertahun-tahun</p>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000"  className="flex justify-center pt-14 item-center ">
            <img className="shadow-xl" src={main} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
