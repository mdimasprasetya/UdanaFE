/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import gambar from "../assets/images/gambar.png";


const cardsItems = [
  {
    image: gambar,
    title: "Donasi Untuk Palestine",
    description: "Donasi untuk warga gaza di palestine",
    button:"Donasi"
  },
  {
    image: "https://digital-api.dompetdhuafa.org/storage/68264/conversions/93d077303cee71641fac29deb4713f56-large.jpg",
    title: "Donasi aja",
    description: "aja",
    button:"Donasi"
  },
  {
    image: "https://www.dompetdhuafa.org/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-26-at-11.48.18-AM-1024x1024.jpeg",
    title: "Donasi Untuk pendidikan",
    description: "Donasi untuk  di pendidikan",
    button:"Donasi"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDgtpS33m55kXn77b6MZuVnkGELyibLKL2Q&s",
    title: "Donasi Untuk anak negeri",
    description: "Donasi untuk negeri",
    button:"Donasi"
  },
  {
    image: "https://dktv.uinib.ac.id/wp-content/uploads/2023/03/IMG-20230327-WA0024.jpg",
    title: "Donasi Untuk berbagi",
    description: "Donasi berbagi",
    button:"Donasi"
  },
  {
    image: "https://fai.uad.ac.id/wp-content/uploads/2020/07/Gambar1-13.png",
    title: "epeduli",
    description: "edonasi",
    button:"Donasi"
  }
];


const Cards = () => {



  return (
    <div id="cards" className="min-h-screen mt-20">
      {/* <!-- Search --> */}
      <form className="max-w-md mx-auto " data-aos="zoom-in" data-aos-duration="1000" >
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex flex-wrap justify-center gap-20 mt-8"  >
      {cardsItems.map((card) => (
        <div className="card card-compact bg-base-100 w-80 shadow-xl" data-aos="zoom-in" data-aos-duration="1000">
        <figure>
          <img
            src={card.image}
            alt="Shoes" 
            className="w-full h-64 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{card.title}</h2>
          <p>{card.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{card.button}</button>
          </div>
        </div>
      </div>
      ))}
  </div>
    </div>
  );
};

export default Cards;
