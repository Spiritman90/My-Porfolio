import "./intro.css";

const Intro = () => {
  return (
    <div className='i' id='intro'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello there 👋🏻 , I am</h2>
          <h1 className='i-name'>Adewole Femi. </h1>
          <div className='i-title'>
            <div className='i-title-wrapper'>
              <div className='i-title-item'>Frontend Developer</div>
              <div className='i-title-item'>Writer</div>
              <div className='i-title-item'>Football Lover</div>
              <div className='i-title-item'>Active Learner</div>
            </div>
          </div>
          <p className='i-desc'>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
      </div>
      <div className='i-right'>
        <div className='i-bg'></div>
        {/* <img src={Femi} alt='' className='i-img' /> */}
      </div>
    </div>
  );
};

export default Intro;
