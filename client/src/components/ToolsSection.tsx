import { Icon } from "@iconify/react";
import GenericMotion from "./GenericMotion";

const langConfig = [
  {
    name: "skill-icons:c",
  },
  {
    name: "skill-icons:cpp",
  },
  {
    name: "skill-icons:javascript",
  },
  {
    name: "skill-icons:typescript",
  },
  {
    name: "skill-icons:python-light",
  },
];

const toolsConfig2 = {
  databases: [
    { name: "skill-icons:mongodb" },
    { name: "skill-icons:mysql-light" },
    { name: "skill-icons:postgresql-dark" },
  ],
  protocols: [
    { name: "vscode-icons:file-type-rest" },
    { name: "simple-icons:zigbee2mqtt" },
    { name: "logos:websocket" },
  ],
  versionControl: [
    { name: "skill-icons:git" },
    { name: "skill-icons:github-dark" },
  ],
  backend: [
    // { name: "skill-icons:django" },
    { name: "logos:nodejs" },
    { name: "skill-icons:expressjs-dark" },
    { name: "logos:hono" },
    // { name: "skill-icons:kafka" },
    { name: "skill-icons:pnpm-dark" },
    // { name: "skill-icons:rabbitmq-dark" },
  ],
  frontend: [
    { name: "skill-icons:redux" },
    { name: "skill-icons:react-dark" },
    { name: "logos:nextjs-icon" },
    { name: "skill-icons:tailwindcss-dark" },
    { name: "skill-icons:appwrite" },
    // { name: "skill-icons:bootstrap" },
    // { name: "skill-icons:d3-dark" },
    { name: "skill-icons:css" },
    { name: "skill-icons:html" },
    // { name: "skill-icons:materialui-dark" },
    { name: "skill-icons:markdown-dark" },
    { name: "skill-icons:vite-dark" },
  ],
  containerizationAndDeployment: [
    { name: "skill-icons:docker" },
    { name: "skill-icons:aws-dark" },
    { name: "skill-icons:vercel-light" },
    { name: "vscode-icons:file-type-nginx" },
    // { name: "skill-icons:cloudflare-dark" },
    { name: "skill-icons:workers-dark" },
  ],
  operatingSystems: [
    { name: "skill-icons:linux-light" },
    { name: "skill-icons:ubuntu-light" },
  ],
};

const ToolsSection = () => {
  return (
    <GenericMotion>
      <div className="main-text-head1">LANGUAGES </div>
      <div className="">
        {langConfig.map((item) => (
          <Icon fontSize={60} icon={item.name} className="inline-block p-1" key={item.name}/>
        ))}
      </div>

      <div className="main-text-head2">& TOOLS</div>
      <div className="">
        <div>
          <p className="text-[#4E4948] text-xl font-bold ">databases</p>
          {toolsConfig2.databases.map((item) => (
            <Icon fontSize={60} icon={item.name} className="inline-block p-1" key={item.name}/>
          ))}
        </div>
        <div>
          <p className="text-[#4E4948] text-xl font-bold ">protocols</p>
          {toolsConfig2.protocols.map((item) => (
            <Icon fontSize={60} icon={item.name} className="inline-block p-1" key={item.name}/>
          ))}
        </div>
        <div>
          <p className="text-[#4E4948] text-xl font-bold ">
            containerization And Deployment
          </p>
          {toolsConfig2.containerizationAndDeployment.map((item) => (
            <Icon fontSize={60} icon={item.name} className="inline-block p-1" />
          ))}
        </div>
        <div>
          <p className="text-[#4E4948] text-xl font-bold ">backend</p>
          {toolsConfig2.backend.map((item) => (
            <Icon fontSize={60} icon={item.name} className="inline-block p-1" key={item.name}/>
          ))}
        </div>
        <div>
          <p className="text-[#4E4948] text-xl font-bold ">frontend</p>
          {toolsConfig2.frontend.map((item) => (
            <Icon fontSize={60} icon={item.name} className="inline-block p-1" key={item.name} />
          ))}
        </div>
        <div>
          <p className="text-[#4E4948] text-xl font-bold ">versionControl</p>
          {toolsConfig2.versionControl.map((item) => (
            <Icon fontSize={60} icon={item.name} className="inline-block p-1" key={item.name}/>
          ))}
        </div>
        <div>
          <p className="text-[#4E4948] text-xl font-bold ">operatingSystems</p>
          {toolsConfig2.operatingSystems.map((item) => (
            <Icon fontSize={60} icon={item.name} className="inline-block p-1" key={item.name}/>
          ))}
        </div>
      </div>
    </GenericMotion>
  );
};

export default ToolsSection;
