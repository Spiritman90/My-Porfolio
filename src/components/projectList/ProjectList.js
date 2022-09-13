import "./projectlist.css";
import Project from "../projects/Projects";
import { projects } from "../../data";

const ProjectList = () => {
  return (
    <div className='pl' id='projectList'>
      <div className='pl-texts'>
        <h1 className='pl-title'>
          {" "}
          My Projects <span className='line'></span>{" "}
        </h1>
        <p className='pl-desc'>Click the card to have a look at my projects!</p>
      </div>
      <div className='pl-list'>
        {projects.map((item) => (
          <Project
            key={item.id}
            img={item.img}
            link={item.link}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
