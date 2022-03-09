import SocialIcon from "./SocialIcon";

const TeamCards = ({ name, skill, img, color, instagram, github, twitter }) => {
  return (
    <>
      <div className="w-10/12 md:w-[30%] group md:first:ml-56 h-[40rem] md:h-44 flex justify-center items-center flex-col md:flex-row bg-white rounded-lg m-5 overflow-hidden">
        <div className="w-full md:w-[20rem] md:h-full overflow-hidden">
          <img alt="team" className={`${img.includes("rupen") ? "scale-150 group-hover:scale-150" : ""} group-hover:scale-110 duration-500 w-full h-full object-cover object-center`} src={img} />
        </div>
        <div className="flex flex-col items-center justify-around w-full h-full text-center md:justify-evenly md:items-start md:pl-5">
          <h2 className="text-3xl font-medium text-gray-900">{name}</h2>
          <span className={`w-16 h-[3px] mb-4 -mt-2 bg-${color} rounded `}></span>
          <h3 className="-mt-5">{skill}</h3>
          <div className="flex flex-row items-center justify-center">
            <SocialIcon instagram={instagram} github={github} twitter={twitter} color={color} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCards;
