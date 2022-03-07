import SocialIcon from "./SocialIcon";

const TeamCards = ({ name, skill, img, color }) => {
  return (
    <>
      <div className="w-10/12 md:w-[30%] md:first:ml-56 h-[40rem] md:h-44 flex justify-center items-center flex-col md:flex-row bg-white rounded-lg m-5 overflow-hidden">
        <div className="w-full md:w-[20rem] md:h-full overflow-hidden">
          <img alt="team" className={`${img.includes("rupen") ? "scale-150" : ""} w-full h-full object-cover object-center`} src={img} />
        </div>
        <div className="flex w-full flex-col h-full justify-around md:justify-evenly items-center text-center md:items-start md:pl-5">
          <h2 className="font-medium text-3xl text-gray-900">{name}</h2>
          <h3 className="-mt-5">{skill}</h3>
          <div className="flex flex-row justify-center items-center">
            <SocialIcon color={color} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCards;
