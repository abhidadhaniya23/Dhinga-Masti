const GamesCards = ({ title, desc, link, img }) => {
  return (
    <div className="flex flex-row items-center justify-center w-4/6 mx-auto my-12 overflow-hidden duration-150 shadow-lg h-72 rounded-xl hover:shadow-2xl group bg-white/40 odd:flex-row-reverse">
      <div className="w-full h-full">
        <img className="object-cover w-full h-full scale-105" src={img} />
      </div>
      <div className="flex flex-col items-start justify-center px-8">
        <h2 className="text-4xl text-gray-900">{title}</h2>
        <span className="w-16 h-1 mt-2 mb-3 text-black rounded bg-redPink "></span>
        <p className="text-base">{desc}</p>
        <a href={link} target="_blank" className="p-2 mt-4 text-base text-center text-white duration-100 bg-black rounded-full cursor-pointer w-36 font-text outline outline-black focus:outline-offset-4 outline-offset-0">
          Play Game
        </a>
      </div>
    </div>
  );
};
export default GamesCards;
