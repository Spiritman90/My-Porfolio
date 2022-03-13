import "./projects.css";

const Projects = ({ img, link, description }) => {
  return (
    <div className='p-wrapper' id='projectList'>
      <div className='p'>
        <div className='p-browser'>
          <div className='p-circle'></div>
          <div className='p-circle'></div>
          <div className='p-circle'></div>
        </div>
        <a href={link} target='_blank' rel='noreferrer'>
          <img src={img} alt='' className='p-img' />
        </a>
      </div>
      <p className='description'>{description}</p>
    </div>
  );
};

export default Projects;
