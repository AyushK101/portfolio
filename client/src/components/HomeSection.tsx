import ProjectsSection from "./ProjectsSection";

const config =[ {
    time: '0',
    text: 'YEARS OF EXPERIENCE',
  },
  {
    time: '+5',
    text: 'PROJECTS COMPLETED',
  },
  {
    time: '0',
    text: 'HACKATHON WINS',
  },

] 


const HomeSection = () => {
  return (
    <div className="flex flex-col ">
      <div className="font-extrabold text-7xl my-2 text-orange-500">FULL STACK </div>
      <div className="text-[#353334] text-7xl font-extrabold mb-2"> WEB ENGINEER</div>
      <div className="text-[#4E4948] text-xl font-bold " >
        <div className="max-w-[500px]">
          Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
        </div>
      </div>
      <div className="flex gap-10 my-4">
        {
          config.map( item => (
            <div className="max-w-28 ">
              <div className="text-white text-7xl font-extrabold">{item.time}</div> 
              <div className="text-[#988E8E]">{item.text}</div>
            </div>
          ))
        }
      </div>
       <ProjectsSection/>

    </div>
  )
}

export default HomeSection