import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import linkedin from "../../img/linkedin.jpeg";
import twitter from "../../img/twitter.webp";
import { useContext, useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const initialState = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };
  const [formData, setformData] = useState(initialState);
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_a5itx6q",
        "template_yj6s68o",
        formRef.current,
        "ldB_UGXXHqAdbs4JE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setformData(initialState);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    let timeout;
    if (done) {
      timeout = setTimeout(() => {
        setDone(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [done]);
  return (
    <div className='c' id='contact'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'>Let's work together!</h1>
          <div className='c-info'>
            <div className='c-info-item'>
              <img src={Phone} alt='' className='c-icon' />
              <a
                href='tel:+23469304835'
                target='_blank'
                rel='noreferrer'
                className='contact-link'
                style={{
                  textDecoration: "none",
                  color: darkMode ? "#fff" : "black",
                }}
              >
                Call
              </a>
            </div>
            <div className='c-info-item '>
              <img className='c-icon' src={Email} alt='email' />

              <a
                href='mailto:phemmyadey@gmail.com'
                target='_blank'
                rel='noreferrer'
                className='contact-link'
                style={{
                  textDecoration: "none",
                  color: darkMode ? "#fff" : "black",
                }}
              >
                Send a mail
              </a>
            </div>
            <div className='c-info-item'>
              <img className='c-icon' src={linkedin} alt='email' />
              <p>
                <a
                  href='https://www.linkedin.com/in/adewole-oluwafemi-1313a622b/'
                  target='_blank'
                  rel='noreferrer'
                  className='contact-link'
                  style={{
                    textDecoration: "none",
                    color: darkMode ? "#fff" : "black",
                  }}
                >
                  LinkedIn
                </a>
              </p>
            </div>
            <div className='c-info-item'>
              <img className='c-icon' src={twitter} alt='email' />
              <p>
                <a
                  href='https://twitter.com/phemmypete'
                  target='_blank'
                  rel='noreferrer'
                  className='contact-link'
                  style={{
                    textDecoration: "none",
                    color: darkMode ? "#fff" : "black",
                  }}
                >
                  Twitter
                </a>
              </p>
            </div>

            <div className='c-info-item'>
              <img className='c-icon' src={Address} alt='' />
              13 Taiwo Street, Mafoluku Oshodi Lagos
            </div>
          </div>
        </div>
        <div className='c-right'>
          <p className='c-desc'>
            <b>Looking to hire?</b> Kindly get in touch. I am actively searching
            for a Front-end role.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "#fff" : "black",
              }}
              type='text'
              placeholder='Name'
              name='user_name'
              autoComplete='off'
              className='contact-input'
              value={formData.name}
              onChange={(e) =>
                setformData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "#fff" : "black",
              }}
              type='text'
              placeholder='Subject'
              name='user_subject'
              autoComplete='off'
              className='contact-input'
              value={formData.subject}
              onChange={(e) =>
                setformData((prev) => ({ ...prev, subject: e.target.value }))
              }
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "#fff" : "black",
              }}
              type='email'
              placeholder='Email'
              name='user_email'
              autoComplete='off'
              className='contact-input'
              value={formData.email}
              onChange={(e) =>
                setformData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "#fff" : "black",
              }}
              rows='5'
              placeholder='Message'
              name='message'
              autoComplete='off'
              className='contact-input'
              value={formData.message}
              onChange={(e) =>
                setformData((prev) => ({ ...prev, message: e.target.value }))
              }
            />
            <button>SEND </button>
            {done && renderAlert()}
          </form>
        </div>
      </div>
    </div>
  );
};
const renderAlert = () => (
  <div className='alert'>
    <p>Your message submitted successfully!</p>
  </div>
);

export default Contact;
