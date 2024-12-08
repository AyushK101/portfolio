import ContactSection from "./ContactSection";
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
      <div className="main-text-head1">FULL STACK </div>
      <div className="main-text-head2"> WEB ENGINEER</div>
      <div className="text-[#4E4948] text-xl font-bold " >
        <div className="max-w-[500px]">
          Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
        </div>
      </div>
      <div className="flex gap-10 my-4 flex-wrap">
        {
          config.map( item => (
            <div className="max-w-28" key={item.time}>
              <div className="text-white text-7xl font-extrabold">{item.time}</div> 
              <div className="text-[#988E8E]">{item.text}</div>
            </div>
          ))
        }
      </div>
       <ProjectsSection/>
       <ContactSection/>

    </div>
  )
}

export default HomeSection