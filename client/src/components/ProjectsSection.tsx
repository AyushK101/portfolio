import { FaGithub } from "react-icons/fa"

const projectConfig = [
  {
    Name: 'routemate',
    image: '/routemate.png',
    desc: 'help you to find route mates',
    link: 'https://github.com/AyushK101/routemate'
  },
  {
    Name: 'greengrid',
    image: '/greengrid.png',
    desc: 'smart energy management system',
    link: 'https://github.com/AyushK101/main-greengrid'
  },
  {
    Name: 'streamy',
    image: '/streamy.png',
    desc: 'a youtube like streaming backend',
    link: 'https://github.com/AyushK101/yt-backend'
  },
  {
    Name: 'news website',
    image: '/news.png',
    desc: 'a simple news website',
    link: 'https://github.com/AyushK101/news-website-react-router'
  },
  {
    Name: 'we-blog',
    image: '/blog.png',
    desc: 'a medium like blog website',
    link: 'https://github.com/AyushK101/blog-appwrite-react-077'
  },
]


const ProjectsSection = () => {
  return (
    <>
      <div className="font-extrabold text-7xl my-2 text-orange-500">RECENT</div>
      <div className="text-[#353334] text-7xl font-extrabold mb-2">PROJECTS</div>
      {
        projectConfig.map(item => (
          <div className="flex min-h-40 justify-between px-5 py-4 gap-2" >
            <div className="flex items-center justify-center rounded-xl border">
              <div className="rounded-xl">
                <img src={item.image} alt={item.Name} height={10} width={150} className="rounded-xl" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl text-white font-extrabold ">{item.Name.toUpperCase()}</div>
              <div className="text-[#4E4948] text-xl font-bold text-center">{item.desc}</div>
            </div>
            <div>
              <a className="" href={item.link}><FaGithub fontSize={30} /></a>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default ProjectsSection