const GamesCards = ({ title, desc, link, img }) => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center md:w-4/6 md:h-72 w-5/6 h-[35rem] mx-auto my-12 overflow-hidden duration-150 shadow-lg  rounded-xl hover:shadow-2xl group bg-white/40 md:odd:flex-row-reverse">
      <div className="md:w-full md:h-full w-96 h-80">
        <img className="object-cover bg-center w-full h-full scale-105" src={img} />
      </div>
      <div className="flex flex-col items-start justify-center md:px-8 m-6">
        <h2 className="md:text-4xl text-2xl text-gray-900">{title}</h2>
        <span className="w-16 h-1 mt-2 mb-3 text-black rounded bg-redPink "></span>
        <p className="text-base">{desc}</p>
        <a href={link} target="_blank" className="p-2 mt-4 text-base text-center text-white duration-100 bg-black rounded-full cursor-pointer md:w-36 font-text outline outline-black focus:outline-offset-4 outline-offset-0">
          Play Game
        </a>
      </div>
    </div>
  );
};
export default GamesCards;
